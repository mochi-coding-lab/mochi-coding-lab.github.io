const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/farm-ambience.js','utf8');
(async()=>{
 const events={}, timers=new Map();let id=0, contexts=0, starts=0, resumes=0, suspends=0, oscillators=0;
 const parameter=()=>({value:0,setValueAtTime(){},exponentialRampToValueAtTime(){},setTargetAtTime(){}});
 const node=()=>({gain:parameter(),frequency:parameter(),connect(){},disconnect(){},start(){starts++},stop(){}});
 class Audio {constructor(){contexts++;this.sampleRate=100;this.currentTime=0;this.state='suspended';this.destination={}}createGain(){return node()}createBuffer(){return {getChannelData:()=>new Float32Array(400)}}createBufferSource(){return node()}createBiquadFilter(){return node()}createOscillator(){oscillators++;return node()}resume(){resumes++;this.state='running';return Promise.resolve()}suspend(){suspends++;this.state='suspended';return Promise.resolve()}}
 const document={hidden:false,addEventListener:(name,fn)=>events[name]=fn};
 const window={AudioContext:Audio,addEventListener:(name,fn)=>events[name]=fn};
 vm.runInNewContext(source,{document,window,Math,setTimeout:fn=>{timers.set(++id,fn);return id},clearTimeout:id=>timers.delete(id)});
 const audio=window.MochiFarmAmbience;
 audio.setMuted(false);assert.equal(contexts,0,'no sound before interaction');
 events.pointerdown();await Promise.resolve();assert.equal(contexts,1);assert.equal(starts,1);assert.equal(timers.size,1);
 events.keydown();audio.setMuted(false);assert.equal(contexts,1);assert.equal(resumes,1);assert.equal(timers.size,1);
 let [timer,callback]=[...timers][0];timers.delete(timer);callback();assert.equal(oscillators,3);assert.equal(timers.size,1);
 audio.setMuted(true);assert.equal(timers.size,0);assert(suspends>0);
 events.pointerdown();assert.equal(timers.size,0,'muted interaction stays silent');
 audio.setMuted(false);await Promise.resolve();assert.equal(contexts,1);assert.equal(starts,4,'wind not duplicated; three bird voices started');
 document.hidden=true;events.visibilitychange();assert.equal(timers.size,0);
 document.hidden=false;events.visibilitychange();await Promise.resolve();assert.equal(timers.size,1);assert.equal(contexts,1);
 events.pagehide();assert.equal(timers.size,0);events.pageshow();assert.equal(timers.size,0);
 events.pointerdown();await Promise.resolve();assert.equal(timers.size,1);
 const noAudio={addEventListener(){}};vm.runInNewContext(source,{document,window:noAudio,Math,setTimeout,clearTimeout});noAudio.MochiFarmAmbience.setMuted(false);
 const main=fs.readFileSync(__dirname+'/farm-chapter.js','utf8');assert(main.includes('MochiFarmAmbience?.setMuted(state.muted)'));assert(main.includes('state.muted=!state.muted'));assert(main.includes('if(!state.muted&&audio?.state'));
 console.log('PASS: silent before gesture, breeze/birds, no duplicate loops, shared mute, visibility pause/resume, page leave and unsupported-audio fallback. Physical speaker review pending.');
})().catch(error=>{console.error(error);process.exitCode=1});
