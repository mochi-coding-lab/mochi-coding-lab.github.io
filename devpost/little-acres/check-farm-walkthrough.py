"""Real opening sequence, paced navigation, bilingual/replay and living layers."""
import functools,http.server,threading,json
from pathlib import Path
from playwright.sync_api import sync_playwright
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(Path(__file__).resolve().parents[2]/'public')));threading.Thread(target=server.serve_forever,daemon=True).start();url=f'http://127.0.0.1:{server.server_port}/first-lesson.html'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox']);ctx=b.new_context(viewport={'width':1440,'height':1000},record_video_dir='/tmp/mochi-tour-video',record_video_size={'width':1152,'height':800});page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto(url)
 assert page.locator('#mochiActor').get_attribute('data-pose')=='0';assert page.locator('#thoughtBubble').is_hidden();page.wait_for_timeout(1000);page.screenshot(path='/tmp/mochi-abandoned-desktop.png')
 page.get_by_role('button',name='See Mochi’s dream →',exact=True).click();assert page.locator('#thoughtBubble').is_visible();page.wait_for_timeout(1100);page.screenshot(path='/tmp/mochi-dream-desktop.png')
 page.get_by_role('button',name='Enter the farm →',exact=True).click();page.wait_for_timeout(1100);assert 'open' in page.locator('#doorPanel').get_attribute('class')
 for name in ['sign','supplies','garden','journal']:
  page.get_by_role('button',name='Follow Mochi →',exact=True).click();page.wait_for_timeout(1100);assert page.locator('#farmScene').get_attribute('data-stop')==name;page.screenshot(path=f'/tmp/mochi-tour-{name}.png')
 page.get_by_role('button',name='Show our activity plan →',exact=True).click();assert page.locator('.tour-missions li').count()==12;page.wait_for_timeout(1200);page.screenshot(path='/tmp/mochi-tour-plan-desktop.png')
 page.get_by_role('button',name='Start our first activity →',exact=True).click();assert page.get_by_role('button',name='Show me how →',exact=True).is_visible();assert page.locator('#thoughtBubble').is_hidden()
 # Replay preserves drafts, output, earned XP and activity selection.
 page.evaluate('const k="mochi.farm.chapter1.v2",s=JSON.parse(localStorage.getItem(k));s.completed=["welcome-guided","first-hello"];s.drafts={"farm-name":"farm_name = \\"Willow\\""};s.index=2;localStorage.setItem(k,JSON.stringify(s))');page.reload();page.locator('#activityListButton').click();page.locator('#tourReplay').click();page.get_by_role('button',name='Skip tour · see our plan',exact=True).click();page.get_by_role('button',name='Start our first activity →',exact=True).click();assert page.locator('#activityCount').text_content()=='Activity 3 / 12';assert page.locator('#xpLabel').text_content()=='50 XP';assert 'Willow' in page.evaluate('JSON.parse(localStorage.getItem("mochi.farm.chapter1.v2")).drafts["farm-name"]')
 for width,height,name in [(320,740,'small-phone'),(390,844,'phone'),(820,1180,'tablet')]:
  page.set_viewport_size({'width':width,'height':height});page.locator('#activityListButton').click();page.locator('#tourReplay').click();page.emulate_media(reduced_motion='reduce');page.screenshot(path=f'/tmp/mochi-abandoned-{name}.png');page.get_by_role('button',name='See Mochi’s dream →',exact=True).click();assert page.locator('#thoughtBubble').is_visible();page.screenshot(path=f'/tmp/mochi-dream-{name}.png');assert page.evaluate('document.documentElement.scrollWidth<=innerWidth');page.locator('#language').click();assert page.locator('html').get_attribute('dir')=='rtl';page.screenshot(path=f'/tmp/mochi-dream-{name}-ar.png');page.locator('#language').click();page.get_by_role('button',name='Skip tour · see our plan',exact=True).click();assert page.locator('.tour-missions li').count()==12;page.get_by_role('button',name='Start our first activity →',exact=True).click()
 assert not errors,errors
 video=page.video;ctx.close();video.save_as('/tmp/mochi-guided-farm-walkthrough.webm');b.close()
server.shutdown();print('PASS: sad→dream→entry→four locations→all12 activity plan; replay preserves progress; phone/tablet/Arabic/reduced motion')
