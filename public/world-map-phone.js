'use strict';
(() => {
  const pins = [...document.querySelectorAll('.pin')];
  if (!pins.length) return;

  const progressEl = document.getElementById('journeyProgress');
  const soundEl = document.getElementById('soundToggle');
  const dialog = document.getElementById('islandDialog');
  const enterLink = document.getElementById('enterIsland');

  const islandData = pins.map((pin, index) => {
    const label = pin.querySelector('.label');
    const name = label ? (label.childNodes[0]?.textContent || '').trim() : `Island ${index + 1}`;
    const small = label?.querySelector('small')?.textContent?.trim() || '';
    return { pin, index, name, small };
  });

  const hud = document.createElement('div');
  hud.className = 'phone-hud';
  hud.innerHTML = `
    <div class="phone-status">
      <small id="phoneKicker">ISLAND 1 · IN PROGRESS</small>
      <strong id="phoneIsland">First Steps</strong>
      <span id="phoneProgress">0 of 5 activities complete</span>
    </div>
    <button class="phone-islands-btn" id="phoneIslands" type="button" aria-haspopup="dialog" aria-controls="phoneSheet" aria-expanded="false">
      Islands <b>5</b>
    </button>`;

  const zoom = document.createElement('div');
  zoom.className = 'phone-zoom';
  zoom.innerHTML = `
    <button id="phoneZoomIn" type="button" aria-label="Zoom in">+</button>
    <button id="phoneZoomOut" type="button" aria-label="Zoom out">−</button>`;

  const dock = document.createElement('div');
  dock.className = 'phone-dock';
  dock.innerHTML = `
    <button class="phone-primary" id="phoneStart" type="button">
      <span><small>PLAYABLE NOW</small><strong>Start First Steps</strong></span>
      <em aria-hidden="true">→</em>
    </button>
    <button class="phone-sound" id="phoneSound" type="button" aria-label="Toggle sound" aria-pressed="true">♪</button>`;

  const backdrop = document.createElement('div');
  backdrop.className = 'phone-backdrop';
  backdrop.id = 'phoneBackdrop';

  const sheet = document.createElement('section');
  sheet.className = 'phone-sheet';
  sheet.id = 'phoneSheet';
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-label', 'All islands');
  sheet.innerHTML = `
    <div class="phone-sheet-handle"></div>
    <div class="phone-sheet-head">
      <div><p>YOUR ISLAND JOURNEY</p><h2>Five islands</h2></div>
      <button class="phone-sheet-close" id="phoneSheetClose" type="button" aria-label="Close islands">×</button>
    </div>
    <div class="phone-island-list">
      ${islandData.map(item => `
        <button class="phone-island-row ${item.index === 0 ? 'current' : 'locked'}" data-phone-island="${item.index}" type="button">
          <span class="n">${String(item.index + 1).padStart(2, '0')}</span>
          <span><strong>${item.name}</strong><small>${item.index === 0 ? 'Python basics · available now' : 'A future chapter'}</small></span>
          <span class="state">${item.index === 0 ? 'START HERE' : 'COMING SOON'}</span>
        </button>`).join('')}
    </div>`;

  document.body.append(hud, zoom, dock, backdrop, sheet);

  const sheetOpen = () => sheet.classList.contains('open');
  const islandsButton = document.getElementById('phoneIslands');
  const sheetClose = document.getElementById('phoneSheetClose');

  sheet.setAttribute('aria-hidden', 'true');
  sheet.inert = true;

  function openSheet() {
    backdrop.classList.add('open');
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    sheet.inert = false;
    islandsButton?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('phone-sheet-open');
    sheetClose?.focus({ preventScroll: true });
  }

  function closeSheet(restoreFocus = false) {
    backdrop.classList.remove('open');
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    sheet.inert = true;
    islandsButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('phone-sheet-open');
    if (restoreFocus) islandsButton?.focus({ preventScroll: true });
  }

  function syncSound() {
    const on = soundEl?.getAttribute('aria-pressed') === 'true';
    const button = document.getElementById('phoneSound');
    if (!button) return;
    const state = soundEl?.getAttribute('data-audio-state');
    const playing = state ? state === 'playing' : on;
    button.setAttribute('aria-pressed', String(playing));
    button.setAttribute('aria-label', state === 'error' ? 'Retry background sound' : playing ? 'Sound on. Tap to mute.' : 'Tap to start background sound');
    button.textContent = '♪';
  }

  function syncProgress() {
    const text = progressEl?.textContent || '';
    const match = text.match(/(\d+)\s+of\s+(\d+)/i);
    const total = match ? Number(match[2]) : 5;
    const restored = /^1 island restored\b/i.test(text) || (!!match && /restored|complete/i.test(text) && Number(match[1]) >= total);
    const current = restored ? total : match ? Number(match[1]) : 0;
    // The HUD always represents the playable island, not a locked island the
    // learner is merely inspecting. This keeps the primary action usable.
    const activeData = islandData[0];

    const kicker = document.getElementById('phoneKicker');
    const island = document.getElementById('phoneIsland');
    const line = document.getElementById('phoneProgress');
    const start = document.getElementById('phoneStart');

    if (kicker) kicker.textContent = `ISLAND 01 · ${restored ? 'RESTORED' : 'IN PROGRESS'}`;
    if (island) island.textContent = activeData.name;
    if (line) line.textContent = `${current} of ${total} activities complete`;

    if (start) {
      const small = start.querySelector('small');
      const strong = start.querySelector('strong');
      if (small) small.textContent = restored ? 'ISLAND RESTORED' : 'PLAYABLE NOW';
      if (strong) strong.textContent = restored ? 'Visit First Steps' : 'Start First Steps';
      start.disabled = false;
      start.style.opacity = '1';
    }

    // keep the sheet rows in sync with the latest completion state
    document.querySelectorAll('[data-phone-island]').forEach((row, index) => {
      row.classList.toggle('current', index === 0);
      row.classList.toggle('locked', index !== 0);
      const state = row.querySelector('.state');
      if (state) state.textContent = index === 0 ? (restored ? 'RESTORED' : 'START HERE') : 'COMING SOON';
    });
  }

  function openIsland(index) {
    closeSheet();
    const pin = pins[index];
    if (!pin) return;
    pin.click();
  }

  document.getElementById('phoneIslands')?.addEventListener('click', openSheet);
  document.getElementById('phoneSheetClose')?.addEventListener('click', () => closeSheet(true));
  backdrop.addEventListener('click', () => closeSheet(true));
  document.querySelectorAll('[data-phone-island]').forEach(row => {
    row.addEventListener('click', event => {
      event.stopPropagation();
      openIsland(Number(row.dataset.phoneIsland));
    });
  });

  document.getElementById('phoneStart')?.addEventListener('click', () => {
    if (dialog?.open) dialog.close();
    const href = enterLink?.getAttribute('href') || 'first-lesson.html';
    window.location.href = href;
  });

  document.getElementById('phoneSound')?.addEventListener('click', () => {
    soundEl?.click();
    syncSound();
  });

  document.getElementById('phoneZoomIn')?.addEventListener('click', () => document.getElementById('mobileZoomIn')?.click());
  document.getElementById('phoneZoomOut')?.addEventListener('click', () => document.getElementById('mobileZoomOut')?.click());

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && sheetOpen()) closeSheet(true);
  });

  // The existing map dialog is reused as the phone bottom sheet.
  if (dialog) {
    const syncDialog = () => {
      const open = dialog.hasAttribute('open');
      document.body.classList.toggle('island-dialog-open', open);
      if (open) closeSheet();
    };
    new MutationObserver(syncDialog).observe(dialog, { attributes: true, attributeFilter: ['open'] });
    dialog.addEventListener('close', () => document.body.classList.remove('island-dialog-open'));
  }

  if (progressEl) {
    new MutationObserver(syncProgress).observe(progressEl, { childList: true, characterData: true, subtree: true });
  }

  const pinObserver = new MutationObserver(syncProgress);
  pins.forEach(pin => pinObserver.observe(pin, { attributes: true, attributeFilter: ['aria-pressed', 'class'] }));

  if (soundEl) {
    new MutationObserver(syncSound).observe(soundEl, { attributes: true, attributeFilter: ['aria-pressed','data-audio-state'] });
  }

  // A viewport change must not leave hidden phone overlays owning focus.
  matchMedia('(max-width:680px)').addEventListener('change', event => {
    if (!event.matches) closeSheet();
  });

  syncProgress();
  syncSound();
})();
