
art30.f='assets/food-36.svg';RN.f='Jídlo';labels30.f='Jídlo';ico.f=pic31('f');
const originalCardFood=card20;card20=function(p,t){const h=originalCardFood(p,t);return BD[t]?.r==='f'?h.replace('</b><small>','</b><small>Produkuje jídlo</small><small>'):h};
render();
