import{c as S,a as d,h,e as k,r as w,i as I,o as Q,f as P,n as U,g as D,j as R,l as j,k as K,m as T,w as x,p as X,q as N,s as G,t as Y,u as H,v as Z,x as ee,_ as te,y as oe,z as ne,A as le,B as ae,C as ie,D as L,E as C,F as re,G as se}from"./index.2316ead7.js";import{g as ue,a as ce,b as de,c as E}from"./scroll.7660947e.js";import{_ as fe}from"./lg_saxion_wit.4b1b1f5e.js";var ve=S({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const o=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},k(f.default))}}),he=S({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const o=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},k(f.default))}});function me(){const e=w(!I.value);return e.value===!1&&Q(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",W=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var F=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:f}){let o=null,t,l={width:-1,height:-1};function r(s){s===!0||e.debounce===0||e.debounce==="0"?u():o===null&&(o=setTimeout(u,e.debounce))}function u(){if(o!==null&&(clearTimeout(o),o=null),t){const{offsetWidth:s,offsetHeight:a}=t;(s!==l.width||a!==l.height)&&(l={width:s,height:a},f("resize",l))}}const{proxy:m}=R();if(m.trigger=r,J===!0){let s;const a=g=>{t=m.$el.parentNode,t?(s=new ResizeObserver(r),s.observe(t),u()):g!==!0&&D(()=>{a(!0)})};return Q(()=>{a()}),P(()=>{o!==null&&clearTimeout(o),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),U}else{let g=function(){o!==null&&(clearTimeout(o),o=null),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",r,j.passive),a=void 0)},b=function(){g(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",r,j.passive),u())};const s=me();let a;return Q(()=>{D(()=>{t=m.$el,t&&b()})}),P(g),()=>{if(s.value===!0)return h("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:b})}}}}),ge=S({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:o}){const{proxy:{$q:t}}=R(),l=K(N,T);if(l===T)return console.error("QHeader needs to be child of QLayout"),T;const r=w(parseInt(e.heightHint,10)),u=w(!0),m=d(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||t.platform.is.ios&&l.isContainer.value===!0),s=d(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?r.value:0;const n=r.value-l.scroll.value.position;return n>0?n:0}),a=d(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),g=d(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),b=d(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=d(()=>{const n=l.rows.value.top,p={};return n[0]==="l"&&l.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),n[2]==="r"&&l.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),p});function c(n,p){l.update("header",n,p)}function y(n,p){n.value!==p&&(n.value=p)}function V({height:n}){y(r,n),c("size",n)}function O(n){g.value===!0&&y(u,!0),o("focusin",n)}x(()=>e.modelValue,n=>{c("space",n),y(u,!0),l.animate()}),x(s,n=>{c("offset",n)}),x(()=>e.reveal,n=>{n===!1&&y(u,e.modelValue)}),x(u,n=>{l.animate(),o("reveal",n)}),x(l.scroll,n=>{e.reveal===!0&&y(u,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const q={};return l.instances.header=q,e.modelValue===!0&&c("size",r.value),c("space",e.modelValue),c("offset",s.value),P(()=>{l.instances.header===q&&(l.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=X(f.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(F,{debounce:0,onResize:V})),h("header",{class:b.value,style:z.value,onFocusin:O},n)}}}),be=S({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:o}}=R(),t=K(N,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;G(Y,!0);const l=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:l.value},k(f.default))}});const{passive:A}=j,pe=["both","horizontal","vertical"];var ye=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:f}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,r;x(()=>e.scrollTarget,()=>{s(),m()});function u(){t!==null&&t();const b=Math.max(0,ce(l)),z=de(l),c={top:b-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";o.position={top:b,left:z},o.directionChanged=o.direction!==y,o.delta=c,o.directionChanged===!0&&(o.direction=y,o.inflectionPoint=o.position),f("scroll",{...o})}function m(){l=ue(r,e.scrollTarget),l.addEventListener("scroll",a,A),a(!0)}function s(){l!==void 0&&(l.removeEventListener("scroll",a,A),l=void 0)}function a(b){if(b===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:g}=R();return x(()=>g.$q.lang.rtl,u),Q(()=>{r=g.$el.parentNode,m()}),P(()=>{t!==null&&t(),s()}),Object.assign(g,{trigger:a,getPosition:()=>o}),U}}),we=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:o}){const{proxy:{$q:t}}=R(),l=w(null),r=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),m=w({position:0,direction:"down",inflectionPoint:0}),s=w(0),a=w(I.value===!0?0:E()),g=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=d(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=d(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function y(i){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};m.value=v,e.onScroll!==void 0&&o("scroll",v)}}function V(i){const{height:v,width:_}=i;let $=!1;r.value!==v&&($=!0,r.value=v,e.onScrollHeight!==void 0&&o("scrollHeight",v),q()),u.value!==_&&($=!0,u.value=_),$===!0&&e.onResize!==void 0&&o("resize",i)}function O({height:i}){s.value!==i&&(s.value=i,q())}function q(){if(e.container===!0){const i=r.value>s.value?E():0;a.value!==i&&(a.value=i)}}let n=null;const p={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:l,height:r,containerHeight:s,scrollbarWidth:a,totalWidth:d(()=>u.value+a.value),rows:d(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:m,animate(){n!==null?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{n=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,v,_){p[i][v]=_}};if(G(N,p),E()>0){let _=function(){i=null,v.classList.remove("hide-scrollbar")},$=function(){if(i===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(_,300)},B=function(M){i!==null&&M==="remove"&&(clearTimeout(i),_()),window[`${M}EventListener`]("resize",$)},i=null;const v=document.body;x(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),Z(()=>{B("remove")})}return()=>{const i=ee(f.default,[h(ye,{onScroll:y}),h(F,{onResize:V})]),v=h("div",{class:g.value,style:b.value,ref:e.container===!0?void 0:l,tabindex:-1},i);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(F,{onResize:O}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[v])])]):v}}});const ze=oe({name:"MainLayout",setup(){const e=ne(),f=[{icon:"home",label:"Hoofdscherm",route_name:"index",separator:!0},{icon:"quiz",label:"Dataplatform wijzer",route_name:"dataplatformwijzer",separator:!1},{icon:"quiz",label:"Data wijzer",route_name:"datawijzer",separator:!1},{icon:"quiz",label:"Standaarden wijzer",route_name:"standaardenwijzer",separator:!1}],o=t=>{e.push({name:t})};return{drawer:w(!1),menuList:f,goToRoute:o}}}),xe=se("img",{class:"q-ma-sm",src:fe,style:{height:"6vh"}},null,-1);function _e(e,f,o,t,l,r){const u=le("router-view");return ae(),ie(we,{view:"lHh Lpr lFf"},{default:L(()=>[C(ge,{elevated:""},{default:L(()=>[C(he,null,{default:L(()=>[xe,C(ve,{class:"absolute-center"},{default:L(()=>[re(" AMI Toolbox ")]),_:1})]),_:1})]),_:1}),C(be,null,{default:L(()=>[C(u)]),_:1})]),_:1})}var $e=te(ze,[["render",_e]]);export{$e as default};