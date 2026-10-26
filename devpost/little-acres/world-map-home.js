'use strict';
(() => {
 const key='mochi.lesson1.progress.v1';
 const pins=document.querySelectorAll('[data-island]');
 let count=0,total=5,chapterState=false,selected=0,revision=0;
 const chapterIDs=['welcome-guided','first-hello','farm-name','supply-label','seed-supplies','measure-bed','prepare-bed','plant-seeds','morning-script','inspect-values','farm-notebook','workbench'];
 function progress(state){return new Set(Array.isArray(state?.completed)?state.completed.filter(n=>Number.isInteger(n)&&n>=0&&n<total):[]).size;}
 function update(){
   const finished=count===total;
   document.getElementById('journeyProgress').textContent=finished&&!chapterState?'1 island restored · more islands coming soon':`Island 1 · ${count} of ${total} activities complete${finished?' · restored':''}`;
   document.getElementById('firstIslandRestored').style.opacity=String(count/total);
   pins[0].querySelector('.label small').textContent=finished?'✓ RESTORED':count?'CONTINUE HERE':'START HERE';
   pins[0].setAttribute('aria-label',finished?'Island 1 restored. Revisit Python basics.':'Island 1 available. Inspect Python basics.');
   pins[1].querySelector('.label small').textContent=finished?'COMING SOON':'🔒 FINISH ISLAND 1';
   pins[1].setAttribute('aria-label',finished?'Island 2 coming soon. Inspect its subject and mission.':'Island 2 locked. Finish Island 1 first. Inspect its subject and mission.');
   if(!document.querySelector('.world').classList.contains('show-vision'))document.getElementById('worldState').textContent=finished?'YOUR JOURNEY · ISLAND 1 RESTORED':'YOUR JOURNEY · BRING THE ISLANDS TO LIFE';
   const number=document.querySelector('.count span');number.textContent='ISLANDS · 1 PLAYABLE';
   if(selected===0){
     document.getElementById('islandStatus').textContent=finished?'ISLAND 01 · RESTORED':`ISLAND 01 · ${count}/5 COMPLETE`;
     const enter=document.getElementById('enterIsland');enter.firstChild.textContent=finished?'Revisit island ':count?'Continue island ':'Let’s begin ';
   }else{
     document.getElementById('islandStatus').textContent=`ISLAND ${String(selected+1).padStart(2,'0')} · COMING SOON`;
     document.getElementById('upcoming').textContent=selected===1&&finished?'Coming soon · you finished Island 1':`🔒 Finish Island ${selected} · coming soon`;
   }
 }
 function local(){try{const chapter=JSON.parse(localStorage.getItem('mochi.farm.chapter1.v2')||'null');if(chapter?.version===2&&Array.isArray(chapter.completed)){chapterState=true;total=chapterIDs.length;return {completed:[...new Set(chapter.completed.filter(id=>chapterIDs.includes(id)))].map((_,i)=>i)};}chapterState=false;total=5;return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}}
 count=progress(local());pins.forEach((pin,index)=>pin.addEventListener('click',()=>{selected=index;update();}));update();
 window.addEventListener('storage',event=>{if(event.key===key||event.key==='mochi.farm.chapter1.v2'){count=progress(local());update();}});
 window.addEventListener('pageshow',()=>{count=progress(local());update();});
 const auth=window.MochiAuth;
 if(auth){
   auth.onChange(async user=>{
     const request=++revision;
     const account=document.getElementById('accountLink');account.textContent=user?'Account':'Sign in';
     count=progress(local());update();
     if(user&&!chapterState)try{const state=await auth.loadProgress();if(request===revision&&state){if(state.firstMorning?.version===2&&Array.isArray(state.firstMorning.completed)){try{localStorage.setItem('mochi.farm.chapter1.v2',JSON.stringify(state.firstMorning));count=progress(local());}catch{chapterState=true;total=chapterIDs.length;count=new Set(state.firstMorning.completed.filter(id=>chapterIDs.includes(id))).size;}}else count=progress(state);update();}}catch{document.getElementById('journeyProgress').textContent+= ' · using this browser’s save';}
   });
 }
})();
