
art30.f='assets/food-36.svg';RN.f='Jídlo';labels30.f='Jídlo';ico.f=pic31('f');
const originalCardFood=card20;card20=function(p,t){const h=originalCardFood(p,t);return BD[t]?.r==='f'?h.replace('</b><small>','</b><small>Produkuje jídlo</small><small>'):h};
render();

/* Grain is emergency food, not a full-quality meal. */
const calcGrain623=calc;
calc=function(){let c=calcGrain623();if(!S)return c;let shortage=Math.max(0,-(S.r.f+(c.f||0))),available=Math.max(0,S.r.grain+(c.grain||0)),used=Math.min(shortage,available);if(used>0){c.f=(c.f||0)+used;c.grain=(c.grain||0)-used;}return c};
const moodGrain623=mood;
mood=function(){let m=moodGrain623();if(S.r.f<=0&&S.r.grain>0){let row=m.L[0],old=row[1];row[1]=-12;row[2]='Nouzová strava: obilí místo běžného jídla';m.t=Math.max(0,Math.min(100,m.t-old-12));}return m};
render();
