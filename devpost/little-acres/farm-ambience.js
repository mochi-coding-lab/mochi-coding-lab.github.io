'use strict';
// Gentle synthesized farm ambience: no downloads, recordings or account data.
(() => {
  let context, master, wind, timer, unlocked = false, muted = true, active = false;
  function birds() {
    if (!active || context.state !== 'running') return;
    const at = context.currentTime;
    for (let i = 0; i < 3; i++) {
      const voice = context.createOscillator(), gain = context.createGain();
      const start = at + i * .18, frequency = 1800 + Math.random() * 700;
      voice.type = 'sine';
      voice.frequency.setValueAtTime(frequency, start);
      voice.frequency.exponentialRampToValueAtTime(frequency * 1.35, start + .055);
      voice.frequency.exponentialRampToValueAtTime(frequency * .9, start + .13);
      gain.gain.setValueAtTime(.0001, start);
      gain.gain.exponentialRampToValueAtTime(.035, start + .025);
      gain.gain.exponentialRampToValueAtTime(.0001, start + .15);
      voice.connect(gain); gain.connect(master);
      voice.onended = () => { voice.disconnect(); gain.disconnect(); };
      voice.start(start); voice.stop(start + .16);
    }
  }
  function sync() {
    const shouldPlay = unlocked && !muted && !document.hidden;
    if (!shouldPlay) {
      active = false; clearTimeout(timer); timer = null;
      if (context) { master.gain.value = 0; context.suspend().catch(() => {}); }
      return;
    }
    if (active) return;
    try {
      if (!context) {
        const Audio = window.AudioContext || window.webkitAudioContext;
        if (!Audio) return;
        context = new Audio(); master = context.createGain();
        master.gain.value = 0; master.connect(context.destination);
        const buffer = context.createBuffer(1, context.sampleRate * 4, context.sampleRate);
        const samples = buffer.getChannelData(0);
        let previous = 0;
        for (let i = 0; i < samples.length; i++) {
          previous = (previous + (Math.random() * 2 - 1) * .02) / 1.02;
          samples[i] = previous * 3;
        }
        wind = context.createBufferSource(); wind.buffer = buffer; wind.loop = true;
        const filter = context.createBiquadFilter(), level = context.createGain();
        filter.type = 'lowpass'; filter.frequency.value = 650; level.gain.value = .12;
        wind.connect(filter); filter.connect(level); level.connect(master); wind.start();
      }
      active = true;
      context.resume().then(() => {
        if (!active) { context.suspend().catch(() => {}); return; }
        master.gain.setTargetAtTime(.3, context.currentTime, .7);
      }).catch(() => { active = false; clearTimeout(timer); timer = null; });
      const schedule = () => {
        timer = setTimeout(() => { if (!active) return; birds(); schedule(); }, 5500 + Math.random() * 6500);
      };
      schedule();
    } catch { active = false; clearTimeout(timer); timer = null; }
  }
  window.MochiFarmAmbience = {setMuted(value) { muted = !!value; sync(); }};
  function unlock() { unlocked = true; sync(); }
  document.addEventListener('pointerdown', unlock, {passive:true});
  document.addEventListener('keydown', unlock);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pagehide', () => { unlocked = false; sync(); });
  window.addEventListener('pageshow', sync);
})();
