const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
function element(){return {children:[],attrs:{},append(...items){this.children.push(...items)},replaceChildren(){this.children=[]},setAttribute(k,v){this.attrs[k]=String(v)},toggleAttribute(k,on){if(on)this.attrs[k]='';else delete this.attrs[k]}}}
const document={createElement:element,createElementNS:element};const window={};
vm.runInNewContext(fs.readFileSync(__dirname+'/farm-supply-visuals.js','utf8'),{document,window});
const visuals=window.MochiSupplyVisuals,group=element();
const world={supplyLabel:'carrot_seeds',supplyQuantity:7,crop:'tomato',seeds:12,planted:3};
visuals.paint(group,world,'supply-label',false);
assert.equal(group.attrs['aria-label'],'carrot_seeds: 7 seeds');assert.equal(group.children.filter(e=>'data-seed-unit' in e.attrs).length,7);
visuals.paint(group,world,'seed-supplies',false);assert.equal(group.attrs['aria-label'],'tomato: 9 seeds');assert.equal(group.children.filter(e=>'data-seed-unit' in e.attrs).length,9);
for(const crop of ['carrot','sunflower','tomato'])for(const count of [1,12,24]){visuals.paint(group,{crop,seeds:count},'seed-supplies',false);assert.equal(group.children.filter(e=>'data-seed-unit' in e.attrs).length,count);assert(group.attrs['aria-label'].includes(crop))}
visuals.paint(group,{},'supply-label',false);assert('hidden' in group.attrs);assert.equal(group.children.length,0);
const root=element();visuals.card(root,world,'supply-label',false);assert.equal(root.children.length,1);assert.equal(root.children[0].children[2].children.length,7);
const hostile='<img src=x onerror=alert(1)>';const cardRoot=element();visuals.card(cardRoot,{supplyLabel:hostile,supplyQuantity:1},'supply-label',false);assert.equal(cardRoot.children[0].children[1].children[1].children[0].textContent,hostile);
const source=fs.readFileSync(__dirname+'/farm-chapter.js','utf8');new vm.Script(source);
const functions=['syncActivityNavigation','revisitActivity'].map(name=>source.split('\n').find(line=>line.startsWith('function '+name+'('))).join('\n');
const buttons={previousActivity:{},nextActivity:{}};let saved=0,rendered=0,drafts=0;
const ctx={state:{entered:true,index:2,completed:['a','b','c'],drafts:{c:'print("keep me")'},world:{crop:'carrot'},pin:true},steps:[{id:'a'},{id:'b'},{id:'c'},{id:'d'}],busy:false,notebookPass:[true,true],phase:'practice',$:id=>buttons[id],text:en=>en,draftSave:()=>drafts++,save:()=>saved++,render:()=>rendered++};
vm.createContext(ctx);vm.runInContext(functions,ctx);
ctx.syncActivityNavigation();assert.equal(buttons.previousActivity.disabled,false);assert.equal(buttons.nextActivity.disabled,false);
ctx.revisitActivity(-1);assert.equal(ctx.state.index,1);assert.equal(ctx.phase,'done');assert.equal(ctx.state.drafts.c,'print("keep me")');assert.equal(ctx.state.completed.length,3);assert.equal(ctx.state.pin,true);assert.equal(drafts,1);assert.equal(saved,1);assert.equal(rendered,1);
ctx.revisitActivity(1);assert.equal(ctx.state.index,2);ctx.revisitActivity(1);assert.equal(ctx.state.index,3);assert.equal(ctx.phase,'story');ctx.revisitActivity(1);assert.equal(ctx.state.index,3);
ctx.state.index=0;ctx.revisitActivity(-1);assert.equal(ctx.state.index,0);ctx.syncActivityNavigation();assert.equal(buttons.previousActivity.disabled,true);
ctx.busy=true;ctx.revisitActivity(1);assert.equal(ctx.state.index,0);ctx.syncActivityNavigation();assert.equal(buttons.nextActivity.disabled,true);
ctx.busy=false;ctx.state.index=2;ctx.state.completed=['a','b'];ctx.revisitActivity(1);assert.equal(ctx.state.index,2,'incomplete activity cannot skip ahead');
assert(source.includes('MochiSupplyVisuals.card(root,state.world,s.id'));
console.log('PASS: chosen variable/crop/quantities, per-seed visuals, empty/literal text, previous/next bounds and busy/locked guards, saved draft/world/rewards retained. Device layout review pending.');
