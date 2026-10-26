'use strict';
(() => {
  const svg = (tag, attrs, content) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
    if (content !== undefined) element.textContent = content;
    return element;
  };
  function model(world, activity) {
    const labelOnly = activity === 'supply-label' || !world.crop;
    const quantity = labelOnly ? world.supplyQuantity : Math.max(0, (world.seeds || 0) - (world.planted || 0));
    return {
      visible: labelOnly ? Number.isInteger(world.supplyQuantity) : !!world.crop,
      label: labelOnly ? world.supplyLabel : world.crop,
      quantity: Math.max(0, Math.min(24, Number(quantity) || 0)),
      labelOnly,
      crop: labelOnly ? '' : world.crop
    };
  }
  function paint(group, world, activity, arabic) {
    const result = model(world, activity);
    group.replaceChildren(); group.toggleAttribute('hidden', !result.visible);
    if (!result.visible) return;
    group.setAttribute('role', 'img');
    group.setAttribute('aria-label', `${result.label}: ${result.quantity} ${arabic ? 'بذرة' : 'seeds'}`);
    group.append(svg('rect', {x:955,y:455,width:390,height:240,rx:22,fill:'#f4ebd4',stroke:'#d9b267','stroke-width':5}));
    // A large seed sack for identifiers, a seed packet for the selected crop.
    group.append(result.labelOnly
      ? svg('path', {d:'M990 515Q1015 530 1040 515L1056 575Q1015 596 974 575Z',fill:'#cba675',stroke:'#755c37','stroke-width':4})
      : svg('rect', {x:978,y:493,width:82,height:102,rx:8,fill:'#fff9e7',stroke:'#8f7749','stroke-width':3}));
    if (!result.labelOnly) group.append(svg('text', {x:1018,y:558,'text-anchor':'middle','font-size':43}, result.crop==='carrot'?'🥕':result.crop==='sunflower'?'🌻':'🍅'));
    group.append(svg('text', {x:1075,y:505,fill:'#294632','font-size':17,'font-family':'system-ui'}, arabic?(result.labelOnly?'المتغير ← التجهيزات':'محصولك المختار'):(result.labelOnly?'VARIABLE → SUPPLIES':'YOUR CHOSEN CROP')));
    const label = svg('text', {x:1075,y:539,fill:'#173d2c','font-size':23,'font-family':'monospace'}, result.label);
    if (String(result.label).length > 16) { label.setAttribute('textLength', '245'); label.setAttribute('lengthAdjust', 'spacingAndGlyphs'); }
    group.append(label, svg('text', {x:1075,y:578,fill:'#294632','font-size':33,'font-weight':700,'font-family':'system-ui'}, `${result.quantity} ${arabic?'بذرة':'seeds'}`));
    for (let i=0;i<result.quantity;i++) group.append(svg('ellipse', {cx:983+(i%8)*45,cy:624+Math.floor(i/8)*23,rx:11,ry:7,fill:'#bc8849',stroke:'#76502d','stroke-width':2,'data-seed-unit':i+1}));
  }
  function card(root, world, activity, arabic) {
    const result = model(world, activity);
    if (!result.visible || !['supply-label','seed-supplies'].includes(activity)) return;
    const box=document.createElement('section');box.className='supply-result';box.setAttribute('aria-label',arabic?'نتيجة الكود في المزرعة':'Your code changed the farm');
    const title=document.createElement('strong');title.textContent=arabic?'ما غيّره كودك':'WHAT YOUR CODE CHANGED';
    const packet=document.createElement('div');packet.className='supply-packet';
    const icon=document.createElement('span');icon.className='supply-packet-icon';icon.setAttribute('aria-hidden','true');icon.textContent=result.labelOnly?'▧':result.crop==='carrot'?'🥕':result.crop==='sunflower'?'🌻':'🍅';
    const details=document.createElement('div');const label=document.createElement('code');label.dir='ltr';label.textContent=result.label;
    const count=document.createElement('b');count.textContent=`${result.quantity} ${arabic?'بذرة':'seeds'}`;
    details.append(label,count);packet.append(icon,details);
    const units=document.createElement('div');units.className='supply-units';units.setAttribute('aria-hidden','true');
    for(let i=0;i<result.quantity;i++){const seed=document.createElement('span');units.append(seed)}
    const caption=document.createElement('p');caption.textContent=arabic?'كل بذرة ظاهرة تمثل بذرة واحدة من الكمية.':'Each visible seed represents one seed in your quantity.';
    box.append(title,packet,units,caption);root.append(box);
  }
  window.MochiSupplyVisuals={model,paint,card};
})();
