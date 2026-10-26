/* Layered 2D performance: real Python decides success; animation never grades code. */
'use strict';
(()=>{
const $=id=>document.getElementById(id),ns='http://www.w3.org/2000/svg';
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
let generation=0,active=new Set(),performing=false,walkTimer=null,cheerTimer=null,tourPosition=[0,0];
const groups=['preparedBed','bedMeasure','plants','bedWet'];
const descriptions={
 'welcome-guided':['Mochi is checking your welcome sign.','موشي يتفقد لوحة الترحيب.'],
 'first-hello':['Mochi is sharing your new greeting.','موشي يشارك ترحيبك الجديد.'],
 'farm-name':['Mochi is putting up your farm’s name.','موشي يثبت اسم مزرعتك.'],
 'supply-label':['Mochi is labeling your supplies.','موشي يضع اسمًا على التجهيزات.'],
 'seed-supplies':['Mochi is collecting your chosen seeds.','موشي يجمع البذور التي اخترتها.'],
 'measure-bed':['Mochi is measuring your planting space.','موشي يقيس مساحة الزراعة.'],
 'prepare-bed':['Mochi is raking your garden bed.','موشي يجهز تربة الحوض.'],
 'plant-seeds':['Mochi is sowing your chosen seeds.','موشي يزرع البذور التي اخترتها.'],
 'morning-script':['Mochi is watering your first plants.','موشي يسقي نباتاتك الأولى.'],
 'inspect-values':['Mochi is examining the crop label.','موشي يتفحص بطاقة المحصول.'],
 'farm-notebook':['Mochi is checking your farm journal.','موشي يتفقد دفتر المزرعة.'],
 'workbench':['Mochi is getting the workshop ready.','موشي يجهز ركن العمل.']};
function node(tag,attrs,parent){const e=document.createElementNS(ns,tag);for(const [k,v]of Object.entries(attrs))e.setAttribute(k,v);parent?.append(e);return e}
function frame(index){$('mochiImage').setAttribute('viewBox',`${index%3*512} ${Math.floor(index/3)*512} 512 512`);$('mochiActor').dataset.pose=String(index)}
function walkFrames(){let n=2;frame(n);clearInterval(walkTimer);if(!reduced())walkTimer=setInterval(()=>frame(n=n===2?3:2),180)}
function cancel(){generation++;clearInterval(walkTimer);clearTimeout(cheerTimer);for(const a of active)a.cancel();active.clear();performing=false;$('mochiActor').removeAttribute('data-action');$('mochiActor').removeAttribute('transform');$('mochiActor').classList.remove('thinking');$('mochiTool').replaceChildren();$('activityEffects').replaceChildren()}
async function animate(target,frames,options){if(reduced())return;const a=target.animate(frames,options);active.add(a);try{await a.finished}catch{}finally{active.delete(a);a.cancel()}}
function context(id,entered,lang){
 const garden=['measure-bed','prepare-bed','plant-seeds','morning-script'].includes(id),supply=['supply-label','seed-supplies','inspect-values'].includes(id),journal=['farm-notebook','workbench'].includes(id);
 for(const name of groups){$(name).setAttribute('transform','translate(330 350)');$(name).style.display=entered&&garden?'':'none'}
 $('welcomeSign').setAttribute('transform','translate(-420 -75) scale(1.45)');$('welcomeSign').style.display=entered&&!garden&&!supply&&!journal?'':'none';
 for(const name of ['supplyChest','seedDisplay']){$(name).setAttribute('transform','translate(-120 70)');$(name).style.display=entered&&supply?'':'none'}
 if(entered&&supply){$('supplyChest').removeAttribute('hidden');if(id==='supply-label'){$('seedDisplay').replaceChildren();$('seedDisplay').removeAttribute('hidden');}}
 $('farmJournal').toggleAttribute('hidden',!entered||!journal);$('journalTitle').textContent=lang==='ar'?'دفتر المزرعة':'Farm journal';
 frame(entered?1:0);$('thoughtBubble').hidden=true;$('cottageDoor').toggleAttribute('hidden',!entered);$('doorPanel').classList.toggle('open',entered);$('livingWeeds').style.display=entered&&garden&&!$('preparedBed').hasAttribute('hidden')?'none':entered&&garden?'':'none';$('farmScene').dataset.view=entered?'close':'arrival';$('farmScene').dataset.activity=id;
}
function label(name,quantity){if($('farmScene').dataset.activity!=='supply-label')return;const g=$('seedDisplay');g.replaceChildren();node('rect',{x:1000,y:490,width:230,height:64,rx:8,fill:'#efe0b6',stroke:'#8d6c3a','stroke-width':3},g);const t=node('text',{x:1115,y:529,'text-anchor':'middle','font-family':'system-ui','font-size':22,fill:'#294331'},g);t.textContent=name?`${name} = ${quantity}`:'?';g.removeAttribute('hidden')}
function tool(kind){const g=$('mochiTool');g.replaceChildren();g.setAttribute('transform','translate(800 585)');
 if(kind==='water'){node('path',{d:'M-12 -12H30V22Q10 35-12 20ZM30 -5 65 -19 69 -11 31 10',fill:'#829e9b',stroke:'#365c58','stroke-width':4},g);node('path',{d:'M-12 -8Q-45 -28-23 15',fill:'none',stroke:'#365c58','stroke-width':5},g)}
 else if(kind==='rake'){node('path',{d:'M-15 50 35 -45M18 -47 56 -27M18 -47 10 -29M31 -40 23 -22M44 -33 36 -15M56 -27 48 -9',fill:'none',stroke:'#9c7243','stroke-width':7,'stroke-linecap':'round'},g)}
 else if(kind==='seed'){node('path',{d:'M-15 -30H29L36 25H-19Z',fill:'#ead6a0',stroke:'#8e693e','stroke-width':4},g);node('path',{d:'M8 13V-9M8 -1Q-13 -17-6 -2Q0 2 8 3M8 -4Q27 -20 24 -7Q20 1 8 0',fill:'#86a15c',stroke:'#507544','stroke-width':3},g)}
 else if(kind==='measure'){node('rect',{x:-15,y:-8,width:85,height:24,rx:4,fill:'#e6c779',stroke:'#80673e','stroke-width':3},g);for(let i=0;i<8;i++)node('path',{d:`M${-8+i*10} -8v${i%2?8:14}`,stroke:'#6b5936','stroke-width':2},g)}
 else if(kind==='inspect'){node('circle',{cx:17,cy:-10,r:23,fill:'#c5e9da66',stroke:'#a98a4d','stroke-width':7},g);node('path',{d:'M0 10-24 38',stroke:'#735739','stroke-width':10,'stroke-linecap':'round'},g)}
 else{node('path',{d:'M-12 25 19 -24 29 -18 -2 29Z',fill:'#d7aa5a',stroke:'#755632','stroke-width':3},g)}
}
async function perform(id,reveal,lang){cancel();const ticket=generation;performing=true;$('mochiActor').dataset.action=id;$('mochiMessage').textContent=(descriptions[id]||descriptions.workbench)[lang==='ar'?1:0];
 if(!reduced()){
 walkFrames();const garden=['measure-bed','prepare-bed','plant-seeds','morning-script'].includes(id),dx=garden?65:95,dy=garden?-12:0;
 await animate($('mochiActor'),[{transform:'translate(0,0)'},{transform:`translate(${dx*.25}px,${dy-7}px) rotate(-2deg)`},{transform:`translate(${dx*.5}px,${dy}px) rotate(2deg)`},{transform:`translate(${dx*.75}px,${dy-7}px) rotate(-2deg)`},{transform:`translate(${dx}px,${dy}px)`}],{duration:650,easing:'ease-in-out',fill:'forwards'});
 if(ticket!==generation)return false;
 // Keep the grounded destination while a separate body layer works.
 $('mochiActor').setAttribute('transform',`translate(${dx} ${dy})`);
 clearInterval(walkTimer);frame(4);const kind=id==='morning-script'?'water':id==='prepare-bed'?'rake':id==='plant-seeds'||id==='seed-supplies'?'seed':id==='measure-bed'?'measure':id==='inspect-values'?'inspect':'pencil';tool(kind);
 const effects=$('activityEffects');
 if(kind==='water'||id==='plant-seeds'||kind==='rake')for(let i=0;i<12;i++){const x=kind==='water'?940+(i%4)*23:890+(i%5)*32,y=690+Math.floor(i/4)*18;node('ellipse',{cx:x,cy:y,rx:kind==='rake'?5:3,ry:kind==='water'?6:3,fill:kind==='water'?'#a6dce9':kind==='rake'?'#ab8356':'#e4c281',class:'activity-particle',style:`animation-delay:${i*.035}s`},effects)}
 await Promise.all([animate($('mochiBody'),[{transform:'rotate(0deg)'},{transform:'rotate(7deg) translateY(4px)'},{transform:'rotate(-3deg)'},{transform:'rotate(0deg)'}],{duration:800,iterations:1}),animate($('mochiTool'),[{transform:'translate(800px,585px) rotate(-12deg)'},{transform:'translate(800px,585px) rotate(22deg)'},{transform:'translate(800px,585px) rotate(-12deg)'}],{duration:400,iterations:2})]);
 }
 if(ticket!==generation)return false;
 $('mochiActor').removeAttribute('transform');$('mochiTool').replaceChildren();$('activityEffects').replaceChildren();performing=false;frame(1);reveal();return true;
}
function cheer(){frame(5);if(!reduced())animate($('mochiBody'),[{transform:'scale(1,1)'},{transform:'scale(1.05,.95)'},{transform:'translateY(-18px) scale(.97,1.03)'},{transform:'scale(1,1)'}],{duration:550,easing:'ease-out'});clearTimeout(cheerTimer);cheerTimer=setTimeout(()=>frame(1),650)}
function think(on){$('mochiActor').classList.toggle('thinking',on&&!performing)}
function arrive(){if(!reduced())animate($('mochiActor'),[{opacity:0,transform:'translate(-110px,20px)'},{opacity:1,transform:'translate(0,0)'}],{duration:850,easing:'ease-out'})}
function tour(stop,lang){
 context('welcome-guided',true,lang);$('farmScene').dataset.view='walkthrough';$('farmScene').dataset.stop=stop;
 const supply=stop==='supplies',garden=stop==='garden',journal=stop==='journal',sign=stop==='sign'||stop==='missions';
 $('welcomeSign').style.display=sign?'':'none';for(const name of ['supplyChest','seedDisplay'])$(name).style.display=supply?'':'none';if(supply)$('supplyChest').removeAttribute('hidden');
 $('farmJournal').toggleAttribute('hidden',!journal);$('livingWeeds').style.display=garden?'':'none';for(const name of groups)$(name).style.display='none';
 $('thoughtBubble').hidden=stop!=='dream';$('cottageDoor').toggleAttribute('hidden',['sad','dream'].includes(stop));$('doorPanel').classList.toggle('open',!['sad','dream'].includes(stop));
 const point=tourTarget(stop);$('mochiActor').setAttribute('transform',`translate(${point[0]} ${point[1]})`);frame(stop==='sad'?0:1);
 if(stop==='sad'||stop==='dream')tourPosition=point;
 }
 function tourTarget(stop){return ({sad:[0,0],dream:[0,0],gate:[120,-50],sign:[30,0],supplies:[120,20],garden:[70,-10],journal:[90,0],missions:[0,0]})[stop]||[0,0]}
 async function walkTour(stop){const target=tourTarget(stop),from=tourPosition,ticket=generation;tourPosition=target;if(reduced()){frame(stop==='sad'?0:1);return}walkFrames();await animate($('mochiActor'),[{transform:`translate(${from[0]}px,${from[1]}px)`},{transform:`translate(${(from[0]+target[0])/2}px,${(from[1]+target[1])/2-9}px)`},{transform:`translate(${target[0]}px,${target[1]}px)`}],{duration:1000,easing:'ease-in-out'});if(ticket===generation){clearInterval(walkTimer);frame(stop==='sad'?0:1)}}
 function living(){const g=$('livingFarm');for(let i=0;i<9;i++){const leaf=node('path',{d:'M-10 0Q0 -17 13 0Q0 14-10 0Z',fill:i%2?'#a7ae59':'#d3ba6d',class:'drifting-leaf',style:`--x:${380+i*100}px;--y:${100+(i%3)*65}px;animation-delay:-${i*1.7}s;animation-duration:${11+i%4}s`},g)}
 const weeds=node('g',{id:'livingWeeds'},g);for(let i=0;i<13;i++){const x=860+(i%5)*56,y=720+Math.floor(i/5)*23;node('path',{d:`M${x} ${y}q-18 -12-10 -34m10 34q5-35 18-40m-18 40q22-15 26-10`,stroke:'#8f8b49','stroke-width':4,fill:'none',class:'swaying-grass',style:`transform-origin:${x}px ${y}px;animation-delay:-${i*.3}s`},weeds)}
 const butterfly=node('g',{class:'farm-butterfly'},g);node('path',{d:'M0 0Q-25-22-22 0Q-23 17 0 3Q25 18 22 0Q23-21 0 0',fill:'#dfb76d',stroke:'#936945','stroke-width':1},butterfly);
 }
 living();window.MochiMotion={context,label,perform,cancel,cheer,think,arrive,tour,walkTour};
})();
