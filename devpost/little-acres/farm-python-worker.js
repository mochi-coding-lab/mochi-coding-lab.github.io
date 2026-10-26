'use strict';
let python=null,notebook=null;
const root=new URL('python/',self.location.href).href;
async function ready(){if(python)return python;importScripts(root+'pyodide.js');python=await loadPyodide({indexURL:root});return python;}
self.onmessage=async({data})=>{const {id,code='',values={},session=false}=data;try{const py=await ready();if(data.type==='ready'){postMessage({id,ready:true});return;}
py.globals.set('_mochi_source',code);py.globals.set('_mochi_values_json',JSON.stringify(values));py.globals.set('_mochi_session',session);
const answer=await py.runPythonAsync(`
import ast, json, io, contextlib, tokenize, types
_source = str(_mochi_source)
_tree = ast.parse(_source, filename='morning.py', mode='exec')
_events = []
class Farm:
    def prepare_bed(self, length, breadth):
        if type(length) is not int or type(breadth) is not int or not (1 <= length <= 6 and 1 <= breadth <= 4):
            raise ValueError('Choose a bed length from 1 to 6 and width from 1 to 4.')
        _events.append({'action':'prepare', 'length':length, 'breadth':breadth})
    def plant(self, crop, count):
        if crop not in ['carrot','sunflower','tomato']:
            raise ValueError('Choose carrot, sunflower or tomato for this growing area.')
        if type(count) is not int or not 1 <= count <= 24:
            raise ValueError('Choose a whole seed quantity from 1 to 24.')
        _events.append({'action':'plant','crop':crop,'count':count})
    def water(self):
        _events.append({'action':'water'})
if not _mochi_session or '_notebook_env' not in globals():
    _env = {'__builtins__': __builtins__, **json.loads(str(_mochi_values_json)), 'farm': Farm()}
    if _mochi_session: _notebook_env = _env
else:
    _env = _notebook_env
    _env['farm'] = Farm()
class LimitedOutput(io.StringIO):
    def write(self, text):
        if self.tell() + len(text) > 5000:
            raise ValueError('Output limit reached. Print a shorter message or stop repeating output.')
        return super().write(text)
_stdout = LimitedOutput()
with contextlib.redirect_stdout(_stdout):
    exec(compile(_tree, 'morning.py', 'exec'), _env)
    if len(_source) > 12000: raise ValueError('Keep this first program under 12000 characters.')
_export = {k:v for k,v in _env.items() if not k.startswith('_') and type(v) in (str,int,float,bool) and (not isinstance(v,str) or len(v)<400)}
_calls = [ast.unparse(n.func) for n in ast.walk(_tree) if isinstance(n,ast.Call)]
_assigned = [n.id for n in ast.walk(_tree) if isinstance(n,ast.Name) and isinstance(n.ctx,ast.Store)]
_print_refs = sorted({n.id for c in ast.walk(_tree) if isinstance(c,ast.Call) and isinstance(c.func,ast.Name) and c.func.id == 'print' for arg in c.args for n in ast.walk(arg) if isinstance(n,ast.Name)})
_prints_id = any(isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id == 'id' and any(isinstance(a,ast.Name) and a.id == 'crop' for a in n.args) for c in ast.walk(_tree) if isinstance(c,ast.Call) and isinstance(c.func,ast.Name) and c.func.id == 'print' for arg in c.args for n in ast.walk(arg))
_area_mult = any(any(isinstance(t,ast.Name) and t.id == 'area' for t in a.targets) and isinstance(a.value,ast.BinOp) and isinstance(a.value.op,ast.Mult) and {'length','breadth'}.issubset({n.id for n in ast.walk(a.value) if isinstance(n,ast.Name)}) for a in ast.walk(_tree) if isinstance(a,ast.Assign))
_comments = sum(t.type == tokenize.COMMENT for t in tokenize.generate_tokens(io.StringIO(_source).readline))
json.dumps({'output':_stdout.getvalue()[:5000], 'values':_export, 'events':_events, 'calls':_calls, 'assigned':_assigned, 'comments':_comments, 'statements':len(_tree.body), 'multiplies':_area_mult, 'printRefs':_print_refs, 'printsId':_prints_id})
`);postMessage({id,result:JSON.parse(answer)});
}catch(error){postMessage({id,error:String(error.message||error).slice(-3500)})}};
