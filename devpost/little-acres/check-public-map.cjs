const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'../../public');
for(const file of fs.readdirSync(root).filter(n=>n.endsWith('.html'))){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
   if(/^(?:https?:|data:|#|mailto:)/.test(match[1]))continue;
   const local=match[1].split(/[?#]/)[0];if(local)assert(fs.existsSync(path.join(root,local)),`${file}: ${local}`);
 }
 for(const script of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g))new vm.Script(script[1],{filename:file});
}
assert(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('world-map-home.js'));
assert(!fs.readFileSync(path.join(root,'index.html'),'utf8').includes('http-equiv="refresh"'));
assert(fs.readFileSync(path.join(root,'first-lesson.html'),'utf8').includes('id="returnToMap"'));
const code=fs.readFileSync(path.join(root,'world-map-home.js'),'utf8');
function homeTest(completed,chapter=false){
 let selected=0;const elements=Object.fromEntries(['journeyProgress','firstIslandRestored','islandStatus','enterIsland','upcoming','accountLink','worldState'].map(id=>[id,{style:{},firstChild:{}}]));
 const labels=Array.from({length:5},()=>({}));const pins=labels.map((label,index)=>({querySelector:()=>label,setAttribute(){},addEventListener(t,f){this.click=f;}}));
 const context={document:{querySelectorAll:()=>pins,getElementById:id=>elements[id],querySelector:()=>({classList:{contains:()=>false}})},localStorage:{getItem:key=>JSON.stringify(chapter&&key==='mochi.farm.chapter1.v2'?{version:2,completed}:{completed})},window:{addEventListener(){}}};
 vm.runInNewContext(code,context);return {elements,pins,labels};
}
let result=homeTest([]);assert(result.elements.journeyProgress.textContent.includes('0 of 5'));assert.equal(result.elements.firstIslandRestored.style.opacity,'0');
result=homeTest([0,1,2]);assert(result.elements.enterIsland.firstChild.textContent.includes('Continue'));assert.equal(result.elements.firstIslandRestored.style.opacity,'0.6');
result=homeTest([0,1,2,3,4]);assert(result.elements.enterIsland.firstChild.textContent.includes('Revisit'));assert.equal(result.elements.firstIslandRestored.style.opacity,'1');result.pins[1].click();assert(result.elements.upcoming.textContent.includes('Coming soon'));assert(!result.elements.upcoming.textContent.includes('Finish Island 1'));
result=homeTest([-1,99,'0',0,0]);assert(result.elements.journeyProgress.textContent.includes('1 of 5'));
result=homeTest(['first-hello','farm-name','seed-supplies'],true);assert(result.elements.journeyProgress.textContent.includes('3 of 10 tasks'));assert.equal(result.elements.firstIslandRestored.style.opacity,'0.3');
result=homeTest(['welcome-guided','first-hello','farm-name','supply-label','seed-supplies','measure-bed','prepare-bed','plant-seeds','morning-script','inspect-values','farm-notebook','workbench'],true);assert(result.elements.journeyProgress.textContent.includes('10 of 10 tasks'));assert.equal(result.elements.firstIslandRestored.style.opacity,'1');assert(result.elements.enterIsland.firstChild.textContent.includes('Revisit'));
console.log('PASS: public HTML assets/scripts, real homepage, lesson return link, guest progress, partial/full restoration and honest upcoming availability');
