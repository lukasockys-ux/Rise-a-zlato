
art30.f='assets/food-36.svg';RN.f='Jídlo';labels30.f='Jídlo';ico.f=pic31('f');
const originalCardFood=card20;card20=function(p,t){const h=originalCardFood(p,t);return BD[t]?.r==='f'?h.replace('</b><small>','</b><small>Produkuje jídlo</small><small>'):h};
render();


const moodFood674=mood;mood=function(){let m=moodFood674(),a=classState51(),food=['f','grain','fish','meat','bread'].reduce((n,k)=>n+(S.r[k]||0),0);let old=m.L[0][1];m.L[0][1]=food>S.wk*2?10:food>0?0:-25;m.L[0][2]='Obilí je běžná strava rolníků';m.t+=m.L[0][1]-old;for(let i of [1,2,3]){m.t-=m.L[i][1];m.L[i][1]=0}m.t=Math.max(0,Math.min(100,m.t));return m};
