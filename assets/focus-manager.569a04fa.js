import{k as a,l as i}from"./index.7712e78e.js";const c={name:String};function m(e){return a(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function F(e={}){return(t,o,r)=>{t[o](i("input",{class:"hidden"+(r||""),...e.value}))}}function f(e){return a(()=>e.name||e.for)}let n=[],u=[];function s(e){u=u.filter(t=>t!==e)}function d(e){s(e),u.push(e)}function h(e){s(e),u.length===0&&n.length!==0&&(n[n.length-1](),n=[])}function g(e){u.length===0?e():n.push(e)}function p(e){n=n.filter(t=>t!==e)}export{m as a,d as b,g as c,f as d,F as e,p as f,h as r,c as u};
