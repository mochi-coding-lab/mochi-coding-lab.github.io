import http.server,threading,functools,json
from pathlib import Path
from playwright.sync_api import sync_playwright
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(Path(__file__).resolve().parents[2]/'public')));threading.Thread(target=server.serve_forever,daemon=True).start();base=f'http://127.0.0.1:{server.server_port}'
ids=['welcome-guided','first-hello','farm-name','supply-label','seed-supplies','measure-bed','prepare-bed','plant-seeds','morning-script','inspect-values','farm-notebook','workbench']
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=b.new_page(viewport={'width':390,'height':844},reduced_motion='reduce')
 state={'version':2,'entered':True,'completed':ids[:5],'index':5,'phase':'practice','values':{'crop':'carrot','seed_count':12},'world':{},'drafts':{}}
 page.add_init_script('localStorage.setItem("mochi.farm.chapter1.v2",'+json.dumps(json.dumps(state))+')');page.goto(base+'/first-lesson.html')
 page.locator('#code').fill('length=4\nbreadth=3\narea=12\nprint(area)');page.locator('#run').click();page.wait_for_function("!document.getElementById('run').disabled",timeout=60000);assert 'Calculate area with *' in page.locator('#feedback').inner_text();assert page.locator('#xpLabel').inner_text()=='150 XP'
 page.locator('#code').fill('length=4\nbreadth=3\narea=length*breadth\nprint(12)');page.locator('#run').click();page.wait_for_function("!document.getElementById('run').disabled");assert page.locator('.success-box').count()==0
 page.locator('#code').fill('while True:\n    pass');page.locator('#run').click();page.wait_for_function("!document.getElementById('run').disabled",timeout=15000);assert 'too long' in page.locator('#feedback').inner_text()
 page.locator('#code').fill('length=3\nbreadth=2\narea=length*breadth\nprint(area)');page.locator('#run').click();page.locator('.success-box').wait_for(state='visible',timeout=60000);assert page.locator('#xpLabel').inner_text()=='200 XP';print('AST learning checks, timeout/restart, progress retention PASS',flush=True);page.close()
 # Auth integration mock: preserve previous progress shape and merge new chapter state.
 page=b.new_page();remote={'completed':[0,1,2],'legacyField':'keep','firstMorning':{'version':2,'entered':True,'completed':['welcome-guided','first-hello'],'index':2,'phase':'story','values':{},'world':{'greeting':'Hello'},'drafts':{},'pin':True,'updatedAt':9999999999999}}
 js='window.savedStates=[];window.MochiAuth={onChange(fn){fn({id:"test-user"});},loadProgress:async()=>('+json.dumps(remote)+'),saveProgress:async(state)=>window.savedStates.push(state)};'
 page.route('**/auth-client.js',lambda route:route.fulfill(status=200,content_type='application/javascript',body=js))
 page.goto(base+'/first-lesson.html');page.wait_for_function('window.savedStates && window.savedStates.length>0');saved=page.evaluate('window.savedStates.at(-1)');assert saved['legacyField']=='keep';assert saved['completed']==[0,1,2];assert len(saved['firstMorning']['completed'])==2;assert page.locator('#xpLabel').inner_text()=='50 XP';assert page.locator('#flowerPin').is_visible();print('Mock account load/merge/save preserves legacy record PASS',flush=True)
 page.goto(base+'/index.html');page.wait_for_function("document.getElementById('journeyProgress').textContent.includes('2 of 12')");assert '2 of 12' in page.locator('#journeyProgress').inner_text();print('Homepage reads new chapter progress PASS',flush=True);page.close()
 # Restricted storage remains playable and warns accurately.
 page=b.new_page();page.add_init_script('Storage.prototype.setItem=function(){throw Error("storage unavailable")};');page.goto(base+'/first-lesson.html');assert 'unavailable' in page.locator('#saveStatus').inner_text();page.get_by_role('button',name='See Mochi’s dream →',exact=True).click();page.get_by_role('button',name='Enter the farm →',exact=True).click();page.get_by_role('button',name='Skip tour · see our plan',exact=True).click();page.get_by_role('button',name='Start our first activity →',exact=True).click();assert page.get_by_role('button',name='Show me how →',exact=True).is_visible();print('Storage unavailable: playable + explicit warning PASS',flush=True)
 b.close()
server.shutdown()
