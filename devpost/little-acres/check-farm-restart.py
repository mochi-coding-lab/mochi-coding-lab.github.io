"""Regression: cancel/reset/reload, storage isolation, and busy guard."""
import functools,http.server,threading,json
from pathlib import Path
from playwright.sync_api import sync_playwright
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
root=Path(__file__).resolve().parents[2]/'public'
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(root)))
threading.Thread(target=server.serve_forever,daemon=True).start()
base=f'http://127.0.0.1:{server.server_port}'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=b.new_page(viewport={'width':390,'height':844},reduced_motion='reduce');errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(base+'/first-lesson.html')
 ids=page.evaluate('FARM_CHAPTER_STEPS.map(s=>s.id)')
 saved=dict(version=2,entered=True,completed=ids,index=11,phase='done',drafts={'farm-name':'farm_name="Old Farm"'},outputs={'farm-name':'Old Farm'},values={'farm_name':'Old Farm'},world={'name':'Old Farm','crop':'tomato','seeds':12,'planted':6,'prepared':True,'watered':True},pin=True,muted=True,lang='en',updatedAt=1)
 page.evaluate('(s)=>{localStorage.setItem("mochi.farm.chapter1.v2",JSON.stringify(s));localStorage.setItem("unrelated","keep")}',saved);page.reload()
 assert page.locator('#xpLabel').inner_text()=='500 XP'
 page.locator('#restartChapter').click();page.get_by_role('button',name='Keep my progress',exact=True).click()
 assert page.evaluate('JSON.parse(localStorage.getItem("mochi.farm.chapter1.v2"))')==saved
 page.locator('#restartChapter').click();page.locator('#confirmRestart').click()
 state=page.evaluate('JSON.parse(localStorage.getItem("mochi.farm.chapter1.v2"))')
 for key in ['drafts','outputs','values','world']:assert state[key]=={},(key,state)
 assert state['completed']==[] and state['index']==0 and not state['entered'] and not state['pin']
 assert state['muted'] and state['lang']=='en' and state['resetAt']>0
 assert page.locator('#xpLabel').inner_text()=='0 XP'
 assert page.evaluate('localStorage.getItem("unrelated")')=='keep'
 page.reload();assert page.locator('#xpLabel').inner_text()=='0 XP'
 page.get_by_role('button',name='See Mochi’s dream →',exact=True).click();page.get_by_role('button',name='Enter the farm →',exact=True).click();page.get_by_role('button',name='Skip tour · see our plan',exact=True).click();page.get_by_role('button',name='Start our first activity →',exact=True).click();page.get_by_role('button',name='Show me how →',exact=True).click();page.get_by_role('button',name='Let me try →',exact=True).click()
 assert page.locator('#code').input_value()=='print("...")'
 page.locator('#code').fill('print("Welcome again!")');page.locator('#run').click();assert page.locator('#restartChapter').is_disabled();page.locator('.success-box').wait_for(timeout=60000);assert page.locator('#xpLabel').inner_text()=='0 XP'
 page.locator('#language').click();page.locator('#restartChapter').click();assert 'إعادة الفصل' in page.locator('#restartTitle').inner_text();page.keyboard.press('Escape');assert not page.locator('#restartDialog').is_visible()
 for w,h in [(320,667),(820,1180),(1440,1000)]:
  page.set_viewport_size({'width':w,'height':h});assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
 # A pre-reset account save must not resurrect the old completed chapter.
 old_remote={**saved,'updatedAt':9999999999999}
 fake='window.MochiAuth={onChange(cb){cb({id:"test"})},async loadProgress(){return {firstMorning:'+json.dumps(old_remote)+'}},async saveProgress(s){window.accountSaved=s}}'
 page.route('**/auth-client.js',lambda route:route.fulfill(status=200,content_type='application/javascript',body=fake))
 page.reload();page.wait_for_function('window.accountSaved!==undefined')
 assert page.locator('#xpLabel').inner_text()=='0 XP'
 assert page.evaluate('window.accountSaved.firstMorning.completed.length')==1
 assert page.evaluate('window.accountSaved.firstMorning.resetAt')==state['resetAt']
 assert not errors,errors
 b.close()
server.shutdown();print('PASS: cancel leaves save untouched; confirmed reset clears chapter only, persists, restarts real Python, guards busy, Arabic and responsive layouts')
