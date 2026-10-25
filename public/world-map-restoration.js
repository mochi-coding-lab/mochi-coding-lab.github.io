'use strict';
(() => {
  const islands = [
    ['Getting started with Python', 'The farm is quiet: dry beds, broken fences and an empty cottage. Start with Python basics in the existing lesson.'],
    ['How programs work', 'A broken wheel and an abandoned mill await repair. Planned chapter: instruction order, input, output and understanding errors.'],
    ['Variables and expressions', 'Empty terraces and a shattered greenhouse await new life. Planned chapter: values, names, types and arithmetic.'],
    ['Conditions and decisions', 'Repair the dark lighthouse as part of the journey; its final relighting follows all five islands. Planned chapter: if and else.'],
    ['Loops and repetition', 'Bring the barren orchard back to life. Planned chapter: loops and repetition. The beacon finale follows the whole journey.']
  ];
  document.querySelectorAll('[data-island]').forEach(button => {
    button.addEventListener('click', () => {
      const selected = Number(button.dataset.island);
      document.querySelectorAll('[data-island]').forEach(pin => {
        const active = pin === button;
        pin.classList.toggle('active', active);
        pin.setAttribute('aria-pressed', String(active));
      });
      const number = String(selected + 1).padStart(2, '0');
      document.getElementById('islandNumber').textContent = number;
      document.getElementById('islandStatus').textContent = `ISLAND ${number} · ${selected === 0 ? 'AVAILABLE NOW' : 'PLANNED · COMING SOON'}`;
      document.getElementById('islandTitle').textContent = islands[selected][0];
      document.getElementById('islandDescription').textContent = islands[selected][1];
      document.getElementById('enterIsland').hidden = selected !== 0;
      document.getElementById('upcoming').hidden = selected === 0;
    });
  });
})();

(() => {
 const toggle=document.getElementById('visionToggle'),art=document.querySelector('.map-art'),state=document.getElementById('worldState');
 const startingAlt=art.alt;
 toggle.addEventListener('click',()=>{
 const vision=toggle.getAttribute('aria-pressed')!=='true';
 toggle.setAttribute('aria-pressed',String(vision));
 art.src=vision?'art/world-map-preview-full.webp':'art/world-map-abandoned-full.webp';
 art.alt=vision?'Restoration art concept: the same five islands with repaired buildings, gardens and green trees.':startingAlt;
 toggle.textContent=vision?'Back to the starting world ↶':'See the restoration vision ✧';
 state.textContent=vision?'RESTORATION ART VISION · NOT EARNED PROGRESS':'STARTING WORLD · WAITING FOR RESTORATION';
 });
})();
