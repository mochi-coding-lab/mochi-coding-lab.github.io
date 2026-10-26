import http.server,threading,functools,json
from pathlib import Path
from playwright.sync_api import sync_playwright
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*a):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(Path(__file__).resolve().parents[2]/'public')));threading.Thread(target=server.serve_forever,daemon=True).start();base=f'http://127.0.0.1:{server.server_port}'
ids=['welcome-guided','first-hello','farm-name','supply-label']
state={'version':2,'entered':True,'completed':ids,'index':4,'phase':'practice','values':{'farm_name':'Willow Farm'},'world':{'name':'Willow Farm'},'drafts':{}}
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=b.new_page(viewport={'width':390,'height':844},reduced_motion='reduce');errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.add_init_script('if(!localStorage.getItem("mochi.farm.chapter1.v2"))localStorage.setItem("mochi.farm.chapter1.v2",'+json.dumps(json.dumps(state))+')');page.goto(base+'/first-lesson.html')
 page.locator('#code').fill('crop="tomato"\nseed_count=8\nprint(crop,seed_count)');page.locator('#run').click();page.locator('.success-box').wait_for(state='visible',timeout=60000);assert page.locator('#seedDisplay').is_visible();assert page.locator('#seedDisplay ellipse').count()==8;assert 'tomato' in page.locator('#seedDisplay').text_content();assert '8 tomato seeds' in page.locator('#mochiMessage').text_content();page.screenshot(path='/tmp/mochi-activity5-seeds-phone.png')
 page.get_by_role('button',name='Continue our morning →',exact=True).click();page.get_by_role('button',name='Show me how →',exact=True).click();page.get_by_role('button',name='Let me try →',exact=True).click();page.locator('#code').fill('length=4\nbreadth=3\narea=length*breadth\nprint(area)');page.locator('#run').click();page.locator('.success-box').wait_for(state='visible');assert page.locator('#bedMeasure').is_visible();assert '4 × 3 = 12' in page.locator('#bedMeasure').text_content();assert page.locator('#bedMeasure polygon').count()==1;assert '8 seeds' in page.locator('#farmStats').text_content();page.screenshot(path='/tmp/mochi-activity6-area-phone.png')
 page.get_by_role('button',name='Experiment again',exact=True).click();page.locator('#code').fill('length=1\nbreadth=1\narea=length*breadth\nprint(area)');page.locator('#run').click();page.locator('.success-box').wait_for(state='visible');assert page.locator('#bedMeasure polygon').is_visible();assert '1 × 1 = 1' in page.locator('#bedMeasure').text_content();page.reload();assert page.locator('#bedMeasure polygon').is_visible()
 page.evaluate('const k="mochi.farm.chapter1.v2",s=JSON.parse(localStorage.getItem(k));s.world.prepared=true;localStorage.setItem(k,JSON.stringify(s))');page.reload();assert page.locator('#bedMeasure').is_visible();assert '1 × 1 = 1' in page.locator('#bedMeasure').text_content();assert not errors,errors
 print('PASS: crop icon/count + individual seed units, area outline/dimensions,1×1, replay after preparation, persistence',flush=True);b.close()
server.shutdown()
