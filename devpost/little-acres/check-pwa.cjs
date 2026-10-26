const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '../../public');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
assert(manifest.name && manifest.short_name);
assert.equal(manifest.display, 'standalone');
assert.equal(manifest.prefer_related_applications, false);
// Installation should work at the current root and beneath a future base path.
for (const base of ['https://example.test/', 'https://example.test/mochi/']) {
  const scope = new URL(manifest.scope, base);
  const start = new URL(manifest.start_url, base);
  assert.equal(new URL(manifest.id, base).href, base);
  assert(start.href.startsWith(scope.href));
  assert.equal(start.pathname, new URL('index.html', base).pathname);
}
function pngSize(file) {
  const bytes = fs.readFileSync(file);
  assert.equal(bytes.subarray(0, 8).toString('hex'), '89504e470d0a1a0a');
  return `${bytes.readUInt32BE(16)}x${bytes.readUInt32BE(20)}`;
}
for (const icon of manifest.icons) {
  assert.equal(icon.type, 'image/png');
  assert.equal(pngSize(path.join(root, icon.src)), icon.sizes);
  assert(fs.readFileSync(path.join(root, icon.src)).equals(fs.readFileSync(path.join(__dirname, icon.src))));
}
for (const size of ['192x192', '512x512']) assert(manifest.icons.some(icon => icon.sizes === size && icon.purpose === 'any'));
assert.equal(pngSize(path.join(root, 'art/app-icon-180.png')), '180x180');
for (const name of ['index.html', 'chapters.html', 'first-lesson.html', 'phone.html']) {
  const source = fs.readFileSync(path.join(__dirname, name), 'utf8');
  const html = fs.readFileSync(path.join(root, name), 'utf8');
  assert.equal(html, source);
  assert.equal((html.match(/rel="manifest"/g) || []).length, 1);
  assert(html.includes('href="manifest.webmanifest"'));
  assert(html.includes('rel="apple-touch-icon" href="art/app-icon-180.png"'));
}
for (const name of ['farm-chapter-content.js', 'farm-python-worker.js', 'farm-mochi-motion.js']) {
  const previous = execFileSync('git', ['show', `HEAD:devpost/little-acres/${name}`]);
  const source = fs.readFileSync(path.join(__dirname, name));
  const withoutAmbience = bytes => bytes.toString().replace('window.MochiFarmAmbience?.setMuted(state.muted);', '').replaceAll('Enable farm sounds and effects', 'Enable sound effects').replaceAll('Mute farm sounds and effects', 'Mute sound effects').replaceAll('تشغيل أصوات المزرعة والمؤثرات', 'تشغيل المؤثرات الصوتية').replaceAll('كتم أصوات المزرعة والمؤثرات', 'كتم المؤثرات الصوتية').replace(/\r\n/g, '\n');
  assert.equal(withoutAmbience(source), withoutAmbience(previous));
  assert(source.equals(fs.readFileSync(path.join(root, name))));
}
assert(!fs.existsSync(path.join(root, 'chapter1-all-activities-preview.html')));
const workflow = fs.readFileSync(path.resolve(__dirname, '../../.github/workflows/pages.yml'), 'utf8');
assert(workflow.includes('workflow_dispatch:'));
assert(!/^\s*(push|pull_request):/m.test(workflow));
console.log('PASS: PWA manifest/scope/icons/build links, unchanged curriculum/Python/motion runtime, preview excluded and manual-only publication. Device installation remains a human check.');
