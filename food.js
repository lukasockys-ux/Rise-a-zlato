
art30.f='assets/food-36.svg';RN.f='Jídlo';labels30.f='Jídlo';ico.f=pic31('f');
const originalCardFood=card20;card20=function(p,t){const h=originalCardFood(p,t);return BD[t]?.r==='f'?h.replace('</b><small>','</b><small>Produkuje jídlo</small><small>'):h};
render();

/* Grain is emergency food, not a full-quality meal. */
const calcGrain623=calc;
function grainMultiplier626(){return 1+Math.floor((S.grainRounds626||0)/2)}
calc=function(){let c=calcGrain623();if(!S)return c;let troops=S.pv.reduce((n,p)=>n+(p.o===0?tot(p.a):0),0);let shortage=Math.max(0,-(S.r.f+(c.f||0)));let base=Math.min(Math.max(0,S.r.grain+(c.grain||0)),shortage);c.f=(c.f||0)+base;c.grain=(c.grain||0)-base;/* base engine already converts grain to food; reconstruct civilian fallback from its production balance by comparing with a zero-grain forecast only when necessary */let saved=S.r.grain,raw;try{S.r.grain=0;raw=calcGrain623()}finally{S.r.grain=saved}let converted=Math.max(0,(c.f||0)-(raw.f||0));let estimated=Math.min(S.wk,Math.max(converted,S.r.f+(c.f||0)<=0?S.wk:0));if(estimated>0&&S.r.f+(c.f||0)<=0){let extra=estimated*(grainMultiplier626()-1),available=Math.max(0,S.r.grain+(c.grain||0));c.grain-=Math.min(extra,available);if(extra>available)c.f-=Math.ceil((extra-available)/grainMultiplier626());}return c};
const moodGrain623=mood;
mood=function(){let m=moodGrain623();if(S.r.f<=0&&S.r.grain>0){let row=m.L[0],old=row[1];row[1]=-12;row[2]='Nouzová strava: obilí místo běžného jídla';m.t=Math.max(0,Math.min(100,m.t-old-12));}return m};
render();
