import http.server,threading,functools,sys,json
from pathlib import Path
from playwright.sync_api import sync_playwright
root=str(Path(__file__).resolve().parents[2]/'public')
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=root));threading.Thread(target=server.serve_forever,daemon=True).start();base=f'http://127.0.0.1:{server.server_port}'
programs=['print("Hello farm!")','print("Welcome to our sunny home!")','farm_name="Cedar Garden"\nprint("Welcome to",farm_name)','my_seeds=12\nprint(my_seeds)','crop="sunflower"\nseed_count=12\nprint(crop,seed_count)','length=4\nbreadth=3\narea=length*breadth\nprint(area)','farm.prepare_bed(length,breadth)','seed_count=6\nfarm.plant(crop,seed_count)','# Our morning\nprint("Good morning!")\nfarm.water()','print(crop)\nprint(id(crop))']
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=browser.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce');errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.goto(base+'/first-lesson.html');page.screenshot(path='/tmp/mochi-first-morning-mission.png');page.get_by_role('button',name='See Mochi’s dream →',exact=True).click();page.get_by_role('button',name='Enter the farm →',exact=True).click();page.get_by_role('button',name='Skip tour · see our plan',exact=True).click();page.get_by_role('button',name='Start our first activity →',exact=True).click()
 for i,code in enumerate(programs):
  page.get_by_role('button',name='Show me how →',exact=True).click();page.get_by_role('button',name='Let me try →',exact=True).click()
  if i==0:
   page.locator('#code').fill('Print("Hello")');page.locator('#run').click();page.wait_for_function("document.getElementById('feedback').textContent.includes('lowercase')",timeout=60000)
  page.locator('#code').fill(code)
  if i==8:
   with page.expect_download() as info:page.get_by_role('button',name='Download .py',exact=True).click()
   assert info.value.suggested_filename=='morning.py'
   assert Path(info.value.path()).read_text()==code
   page.locator('#scriptFile').set_input_files({'name':'morning.py','mimeType':'text/x-python','buffer':code.encode()})
  page.locator('#run').click()
  if i==1:
   page.locator('#rewardsDialog').wait_for(state='visible',timeout=60000);page.locator('#equipPin').click();assert 'Equipped' in page.locator('#equipPin').inner_text();assert page.locator('#flowerPin').is_visible();page.screenshot(path='/tmp/mochi-first-morning-reward.png');page.locator('#rewardContinue').click()
  else:
   page.locator('.success-box').wait_for(state='visible',timeout=60000)
   if i in [2,7,8]:page.screenshot(path=f'/tmp/mochi-first-morning-stage-{i}.png')
   page.get_by_role('button',name='Continue our morning →',exact=True).click()
  print('activity',i+1,'PASS',flush=True)
 page.get_by_role('button',name='Show me how →',exact=True).click();page.get_by_role('button',name='Let me try →',exact=True).click();page.locator('#cell0').fill('farm_note="First flowers!"');page.locator('#cell1').fill('print(farm_note)');page.locator('#cell1Run').click();page.wait_for_function("!document.getElementById('cell1Run').disabled");page.locator('#cell2Run').click();page.locator('#finishNotebook').wait_for(state='visible');assert 'First flowers!' in page.locator('#cellOutput1').inner_text()
 with page.expect_download() as info:page.get_by_role('button',name='Download .ipynb',exact=True).click()
 notebook=json.loads(Path(info.value.path()).read_text());assert notebook['nbformat']==4;assert len(notebook['cells'])==2
 page.locator('#finishNotebook').click();page.get_by_role('button',name='Continue our morning →',exact=True).click();print('notebook PASS',flush=True)
 page.get_by_role('button',name='Show me how →',exact=True).click();page.get_by_role('button',name='Let me try →',exact=True).click()
 for i in range(3):page.locator('#recap'+str(i)).select_option('0')
 page.get_by_role('button',name='Finish our first morning →',exact=True).click();page.locator('#rewardsDialog').wait_for(state='visible');assert 'Farm Newcomer' in page.locator('.rank-card.current').inner_text();page.locator('#rewardsDialog .modal-close').click();print('chapter complete PASS',flush=True)
 saved=page.evaluate('JSON.parse(localStorage.getItem("mochi.farm.chapter1.v2"))');assert len(saved['completed'])==12;assert saved['pin'];assert page.locator('#xpLabel').inner_text()=='500 XP',page.locator('#xpLabel').inner_text()
 page.reload();assert page.locator('#xpLabel').inner_text()=='500 XP';assert page.locator('#flowerPin').is_visible();page.screenshot(path='/tmp/mochi-first-morning-complete.png')
 page.locator('#activityListButton').click();page.locator('#activityList button').nth(1).click();page.get_by_role('button',name='Experiment again',exact=True).click();page.locator('#code').fill('print("A third warm welcome!")');page.locator('#run').click();page.locator('.success-box').wait_for(state='visible');assert page.locator('#xpLabel').inner_text()=='500 XP';assert page.locator('#rewardsDialog').is_hidden();print('reload/equip/no duplicate XP PASS',flush=True)
 # Save at the welcome practice screen for viewport checks.
 for name,w,h in [('phone',390,844),('small-phone',320,667),('tablet',820,1180),('tablet-landscape',1180,820),('desktop',1440,1000)]:
  page.set_viewport_size({'width':w,'height':h});page.locator('#activityListButton').click();page.locator('#activityList button').nth(0).click();page.get_by_role('button',name='Experiment again',exact=True).click();assert page.evaluate('document.documentElement.scrollWidth<=innerWidth');page.screenshot(path=f'/tmp/mochi-first-morning-{name}.png')
  if 760<=w<1200:
   scene=page.locator('.farm-scene').bounding_box();workspace=page.locator('#workspace').bounding_box();assert workspace['y']>=scene['y']+scene['height']
  page.locator('#language').click();assert page.locator('html').get_attribute('dir')=='rtl';assert page.locator('#code').get_attribute('dir')=='ltr';assert page.evaluate('document.documentElement.scrollWidth<=innerWidth');page.locator('#language').click()
 assert not errors,errors
 print('viewport/Arabic PASS',flush=True)
 # Stop an infinite Python loop without freezing the interface or losing progress.
 page.locator('#code').fill('while True:\n    pass');page.locator('#run').click();page.locator('#stop').click();assert not page.locator('#run').is_disabled();assert page.locator('#xpLabel').inner_text()=='500 XP';print('Stop worker PASS',flush=True)
 browser.close()
server.shutdown()
