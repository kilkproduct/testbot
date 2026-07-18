const API_KEY='PUT_YOUR_API_KEY_HERE';
const ENDPOINT='https://v3.football.api-sports.io/fixtures';
async function search(){
const comp=document.getElementById('q').value||'FIFA World Cup';
const r=await fetch(ENDPOINT+'?search='+encodeURIComponent(comp),{headers:{'x-apisports-key':API_KEY}}).catch(()=>null);
const out=document.getElementById('out');
if(!r){out.textContent='Network/API error. Configure a supported football API.';return;}
const j=await r.json();
out.innerHTML='';
(j.response||[]).forEach(f=>{
const d=document.createElement('div');d.className='match';
d.innerHTML=`<b>${f.teams.home.name}</b> ${f.goals.home??'-'} : ${f.goals.away??'-'} <b>${f.teams.away.name}</b><br>${f.fixture.status.long}`;
out.appendChild(d);
});
}
document.getElementById('b').onclick=search;