"""Exercise all12 visual review activities offline; these are simulations, not Python tests."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import base64,hashlib,json
file=Path(__file__).with_name('chapter1-all-activities-preview.html')
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=b.new_page(viewport={'width':390,'height':844},reduced_motion='reduce');errors=[];requests=[];page.on('pageerror',lambda e:errors.append(str(e)));page.on('request',lambda r:requests.append(r.url) if r.url.startswith(('http:','https:')) else None)
 page.set_content(file.read_text());page.wait_for_function("document.getElementById('actor').dataset.state==='idle'");page.wait_for_function("!document.getElementById('run').disabled")
 src=page.locator('#farmArt').get_attribute('src');assert hashlib.sha256(base64.b64decode(src.split(',',1)[1])).digest()==hashlib.sha256(file.with_name('art').joinpath('farm-neglected-bare-trees.webp').read_bytes()).digest()
 assert 'DESIGN PREVIEW' in page.locator('.demo-note').text_content();assert page.locator('#code').input_value()=='print("...")'
 page.locator('#activityMenuOpen').click();assert page.locator('#activityPlan button').count()==12;assert page.locator('.activity-section').count()==5;page.locator('[data-close=activitiesDialog]').click()
 page.locator('#explain').click();assert 'print()' in page.locator('#conceptCopy').text_content();page.locator('#tryActivity').click()
 # Sample results supply clearly labeled scenario data for direct visual review.
 for index in range(12):
  assert page.locator('#activityIndex').text_content()==f'{index+1} / 12'
  page.locator('#showSample').click();page.wait_for_function("document.getElementById('actor').dataset.state==='complete'",timeout=30000)
  assert page.locator('#previewOutput').is_visible(),index
  if index==1:
   page.locator('#rewardDialog').wait_for();page.locator('#equipPin').click();assert page.locator('#equippedPin').is_visible();page.locator('#continueReward').click()
  if index==2:assert 'Sunny Brook' in page.locator('#signText').text_content()
  if index==3:assert 'my_seeds = 12' in page.locator('#supplyTag').text_content()
  if index==4:assert page.locator('#seedUnits .seed-unit').count()==12
  if index==5:assert '4 × 3 = 12' in page.locator('#gardenCaption').text_content()
  if index==6:assert 'prepared' in page.locator('#garden').get_attribute('class')
  if index==7:assert page.locator('#gardenPlants .plant').count()==6
  if index==8:
   assert 'wet' in page.locator('#garden').get_attribute('class')
   with page.expect_download() as saved:page.locator('#downloadScript').click()
   assert 'farm.water()' in Path(saved.value.path()).read_text()
   page.locator('#scriptFile').set_input_files({'name':'morning.py','mimeType':'text/x-python','buffer':b'# My morning\nprint("Fresh start")\nfarm.water()'})
   page.wait_for_function('document.getElementById("code").value.includes("Fresh start")')
  if index==9:assert 'produced by real Python' in page.locator('#previewOutput').text_content()
  if index==10:
   assert 'Our first plants are growing' in page.locator('#journalWriting').text_content()
   with page.expect_download() as saved:page.locator('#downloadNotebook').click()
   notebook=json.loads(Path(saved.value.path()).read_text());assert notebook['nbformat']==4 and len(notebook['cells'])==2
  if index==11:
   assert page.locator('#xpMeter').text_content()=='✦ 500 XP';assert page.locator('#rewardTitle').text_content()=='Farm Newcomer';page.locator('#continueReward').click()
  page.screenshot(path=f'/tmp/mochi-all-preview-{index+1:02d}-phone.png')
  if index<11:page.locator('#next').click();page.wait_for_function("!document.getElementById('run').disabled")
 # Repeated practice cannot earn extra XP; chosen values change the actual visual model.
 page.locator('#activityMenuOpen').click();page.locator('#activityPlan button').nth(4).click();page.wait_for_function("!document.getElementById('run').disabled");page.locator('#code').fill('crop = "tomato"\nseed_count = 8\nprint(crop, seed_count)');page.locator('#run').click();page.wait_for_function("document.getElementById('actor').dataset.state==='complete'");assert 'tomato' in page.locator('#supplyTag').text_content();assert page.locator('#seedUnits .seed-unit').count()==8;assert page.locator('#xpMeter').text_content()=='✦ 500 XP'
 # Selected values are inserted as text, never markup.
 page.locator('#activityMenuOpen').click();page.locator('#activityPlan button').nth(2).click();page.wait_for_function("!document.getElementById('run').disabled");page.locator('#code').fill('farm_name = "<b>Meadow</b>"\nprint(farm_name)');page.locator('#run').click();page.wait_for_function("document.getElementById('actor').dataset.state==='complete'");assert page.locator('#signText b').count()==0;assert '<b>' in page.locator('#signText').text_content()
 for w,h,label in [(320,740,'small-phone'),(390,844,'phone'),(820,1180,'tablet'),(1440,1000,'desktop')]:
  page.set_viewport_size({'width':w,'height':h});page.wait_for_function('parseFloat(document.documentElement.style.getPropertyValue("--viewport-height"))===innerHeight');page.evaluate('()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');assert page.evaluate('document.documentElement.scrollWidth<=innerWidth');sizes=page.evaluate('''()=>({scene:document.getElementById('scene').clientHeight,total:document.querySelector('.game').clientHeight})''');assert abs(sizes['scene']/sizes['total']-.7)<.005;page.screenshot(path=f'/tmp/mochi-all-preview-{label}.png')
 assert not errors,errors;assert not requests,requests
 b.close();print('PASS: all12 activity results,5 sections, abandoned art, custom crops/quantities/name, measured/prepared/planted/watered states, journal/inspection/workshop, rewards500XP/no duplicates, offline/XSS-safe,320/390/820/1440 and70:30 layout')
