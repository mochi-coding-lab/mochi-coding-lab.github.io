"""Check motion against real execution, interruption and replay; save review artifacts."""
import functools,http.server,json,threading
from pathlib import Path
from playwright.sync_api import sync_playwright
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(Path(__file__).resolve().parents[2]/'public')))
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
key='mochi.farm.chapter1.v2'
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 context=browser.new_context(viewport={'width':390,'height':844},record_video_dir='/tmp/mochi-motion-review',record_video_size={'width':390,'height':844})
 page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 state={'version':2,'entered':True,'index':4,'phase':'practice','completed':['welcome-guided','first-hello','farm-name','supply-label'],'values':{},'world':{},'drafts':{}}
 page.add_init_script('if(!localStorage.getItem('+json.dumps(key)+'))localStorage.setItem('+json.dumps(key)+','+json.dumps(json.dumps(state))+')')
 page.goto(base+'/first-lesson.html');assert page.locator('#farmScene').get_attribute('data-view')=='close'
 page.locator('#code').fill('Print("wrong")');page.locator('#run').click();page.wait_for_function("document.getElementById('feedback').textContent.includes('lowercase')",timeout=60000)
 assert not page.locator('#mochiActor').get_attribute('data-action')
 page.locator('#code').fill('crop="sunflower"\nseed_count=6\nprint(crop,seed_count)');page.locator('#run').click();page.wait_for_function("document.getElementById('mochiActor').dataset.action==='seed-supplies'")
 page.locator('#mochiTool > *').first.wait_for(state='visible');page.locator('.success-box').wait_for();assert 'sunflower' in page.locator('#seedDisplay').text_content();assert page.locator('#seedDisplay ellipse[rx="5"]').count()==6
 assert page.locator('#xpLabel').text_content()=='150 XP'
 page.wait_for_timeout(650);page.screenshot(path='/tmp/mochi-close-seeds-phone.png')
 # Cancel a replay before it commits; fresh world/progress and XP must be retained.
 page.get_by_role('button',name='Experiment again',exact=True).click();page.locator('#code').fill('crop="tomato"\nseed_count=3\nprint(crop,seed_count)');page.locator('#run').click();page.wait_for_function("!!document.getElementById('mochiActor').dataset.action")
 page.locator('#stop').click();page.wait_for_timeout(1600)
 saved=json.loads(page.evaluate('localStorage.getItem('+json.dumps(key)+')'));assert saved['world']['crop']=='sunflower';assert page.locator('#code').is_visible();assert page.locator('#xpLabel').text_content()=='150 XP'
 # Every activity performance resolves, and restores tools/grounded placement.
 ids=['welcome-guided','first-hello','farm-name','supply-label','seed-supplies','measure-bed','prepare-bed','plant-seeds','morning-script','inspect-values','farm-notebook','workbench']
 for id in ids:
  result=page.evaluate("async id=>{let reveal=0;let ok=await MochiMotion.perform(id,()=>reveal++,'en');return {ok,reveal}}",id)
  assert result=={'ok':True,'reveal':1},(id,result)
  assert page.locator('#mochiTool > *').count()==0
 # Responsive close view, equipped pin, and reduced motion use the same final state.
 page.emulate_media(reduced_motion='reduce');page.reload();page.locator('#code').fill('crop="tomato"\nseed_count=3\nprint(crop,seed_count)');page.locator('#run').click();page.locator('.success-box').wait_for(timeout=60000);assert page.locator('#xpLabel').text_content()=='150 XP'
 for width,height,name in [(320,740,'small-phone'),(390,844,'phone'),(820,1180,'tablet'),(1440,1000,'desktop')]:
  page.set_viewport_size({'width':width,'height':height});page.wait_for_function('parseFloat(document.documentElement.style.getPropertyValue("--app-height"))===innerHeight');page.evaluate('()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  box=page.evaluate("()=>{const s=document.getElementById('mochiImage'),v=s.viewBox.baseVal,m=s.getScreenCTM(),a=new DOMPoint(v.x,v.y).matrixTransform(m),b=new DOMPoint(v.x+v.width,v.y+v.height).matrixTransform(m);return {x:a.x,y:a.y,width:b.x-a.x,height:b.y-a.y}}");scene=page.locator('.farm-scene').bounding_box();message=page.locator('.mochi-message').bounding_box();assert box['x']>=scene['x']-1 and box['x']+box['width']<=scene['x']+scene['width']+1,(name,box,scene)
  assert box['y']+box['height']<message['y'],(name,box,message)
  page.screenshot(path=f'/tmp/mochi-close-{name}.png')
 assert not errors,errors
 video=page.video;context.close();video.save_as('/tmp/mochi-motion-review.webm');browser.close()
server.shutdown()
print('PASS: real code→motion→chosen seeds, invalid answers, Stop during action, 12 performances, XP replay, reduced motion and grounded responsive views')
