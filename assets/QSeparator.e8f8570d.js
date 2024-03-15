import{Y as ye,r as P,Z as Te,$ as J,I as D,a0 as V,q as E,A as re,s as q,x as A,a1 as I,C as N,a2 as we,F as Se,a3 as He,l as j,a4 as Ee,a5 as $e,a6 as Ce,k as y,a7 as ue,a8 as se,a9 as We,j as ce,aa as Me,m as ke,ab as Pe}from"./index.5fb1af06.js";import{r as ee,a as qe}from"./focus-manager.02955f48.js";import{c as Ae,g as Le}from"./scroll.ec268010.js";import{u as ze,c as De}from"./QPage.7cf655de.js";function U(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ye.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const Ve={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function je({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:i,emit:s}=A(),o=P(null);let r=null;function u(a){return o.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(a){i.hide(a)},toggle(a){i.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Te(a,13)===!0&&c.toggle(a)},contextClick(a){i.hide(a),J(a),D(()=>{i.show(a),a.qAnchorHandled=!0})},prevent:J,mobileTouch(a){if(c.mobileCleanup(a),u(a)!==!0)return;i.hide(a),o.value.classList.add("non-selectable");const d=a.target;V(c,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,i.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){o.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&U()}}),n=function(a=t.contextMenu){if(t.noParentEvent===!0||o.value===null)return;let d;a===!0?i.$q.platform.is.mobile===!0?d=[[o.value,"touchstart","mobileTouch","passive"]]:d=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:d=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],V(c,"anchor",d)});function f(){I(c,"anchor")}function b(a){for(o.value=a;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function p(){if(t.target===!1||t.target===""||i.$el.parentNode===null)o.value=null;else if(t.target===!0)b(i.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(o.value=a.$el||a,n()):(o.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return E(()=>t.contextMenu,a=>{o.value!==null&&(f(),n(a))}),E(()=>t.target,()=>{o.value!==null&&f(),p()}),E(()=>t.noParentEvent,a=>{o.value!==null&&(a===!0?f():n())}),re(()=>{p(),l!==!0&&t.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),q(()=>{r!==null&&clearTimeout(r),f()}),{anchorEl:o,canShow:u,anchorEvents:c}}function Be(e,l){const n=P(null);let t;function i(r,u){const c=`${u!==void 0?"add":"remove"}EventListener`,f=u!==void 0?u:t;r!==window&&r[c]("scroll",f,N.passive),window[c]("scroll",f,N.passive),t=u}function s(){n.value!==null&&(i(n.value),n.value=null)}const o=E(()=>e.noParentEvent,()=>{n.value!==null&&(s(),l())});return q(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:i}}const Re={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Fe=["beforeShow","show","beforeHide","hide"];function Qe({showing:e,canShow:l,hideOnRouteChange:n,handleShow:t,handleHide:i,processOnMount:s}){const o=A(),{props:r,emit:u,proxy:c}=o;let f;function b(m){e.value===!0?d(m):p(m)}function p(m){if(r.disable===!0||m!==void 0&&m.qAnchorHandled===!0||l!==void 0&&l(m)!==!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!0),f=m,D(()=>{f===m&&(f=void 0)})),(r.modelValue===null||v===!1)&&a(m)}function a(m){e.value!==!0&&(e.value=!0,u("beforeShow",m),t!==void 0?t(m):u("show",m))}function d(m){if(r.disable===!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!1),f=m,D(()=>{f===m&&(f=void 0)})),(r.modelValue===null||v===!1)&&T(m)}function T(m){e.value!==!1&&(e.value=!1,u("beforeHide",m),i!==void 0?i(m):u("hide",m))}function H(m){r.disable===!0&&m===!0?r["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):m===!0!==e.value&&(m===!0?a:T)(f)}E(()=>r.modelValue,H),n!==void 0&&we(o)===!0&&E(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&d()}),s===!0&&re(()=>{H(r.modelValue)});const M={show:p,hide:d,toggle:b};return Object.assign(c,M),M}const z=[];function Oe(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ie(e,l,n,t){const i=P(!1),s=P(!1);let o=null;const r={},u=t==="dialog"&&Oe(e);function c(b){if(b===!0){ee(r),s.value=!0;return}s.value=!1,i.value===!1&&(u===!1&&o===null&&(o=$e(!1,t)),i.value=!0,z.push(e.proxy),qe(r))}function f(b){if(s.value=!1,b!==!0)return;ee(r),i.value=!1;const p=z.indexOf(e.proxy);p!==-1&&z.splice(p,1),o!==null&&(Ce(o),o=null)}return Se(()=>{f(!0)}),e.proxy.__qPortal=!0,He(e.proxy,"contentEl",()=>l.value),{showPortal:c,hidePortal:f,portalIsActive:i,portalIsAccessible:s,renderPortal:()=>u===!0?n():i.value===!0?[j(Ee,{to:o},n())]:void 0}}const Ne={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ue(e,l=()=>{},n=()=>{}){return{transitionProps:y(()=>{const t=`q-transition--${e.transitionShow||l()}`,i=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:y(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ge(){let e;const l=A();function n(){e=void 0}return ue(n),q(n),{removeTick:n,registerTick(t){e=t,D(()=>{e===t&&(se(l)===!1&&e(),e=void 0)})}}}function _e(){let e=null;const l=A();function n(){e!==null&&(clearTimeout(e),e=null)}return ue(n),q(n),{removeTimeout:n,registerTimeout(t,i){n(),se(l)===!1&&(e=setTimeout(t,i))}}}const{notPassiveCapture:B}=N,W=[];function R(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=z.length-1;for(;n>=0;){const t=z[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=W.length-1;t>=0;t--){const i=W[t];if((i.anchorEl.value===null||i.anchorEl.value.contains(l)===!1)&&(l===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(l)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Ke(e){W.push(e),W.length===1&&(document.addEventListener("mousedown",R,B),document.addEventListener("touchstart",R,B))}function te(e){const l=W.findIndex(n=>n===e);l>-1&&(W.splice(l,1),W.length===0&&(document.removeEventListener("mousedown",R,B),document.removeEventListener("touchstart",R,B)))}let le,ne;function ie(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ye(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const G={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{G[`${e}#ltr`]=e,G[`${e}#rtl`]=e});function oe(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:G[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function Xe(e,l){let{top:n,left:t,right:i,bottom:s,width:o,height:r}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],s+=l[1],i+=l[0],o+=l[0],r+=l[1]),{top:n,bottom:s,height:r,left:t,right:i,width:o,middle:t+(i-t)/2,center:n+(s-n)/2}}function Ze(e,l,n){let{top:t,left:i}=e.getBoundingClientRect();return t+=l.top,i+=l.left,n!==void 0&&(t+=n[1],i+=n[0]),{top:t,bottom:t+1,height:1,left:i,right:i+1,width:1,middle:i,center:t}}function Je(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function ae(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function de(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{de(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:i,anchorOrigin:s,selfOrigin:o,absoluteOffset:r,fit:u,cover:c,maxHeight:f,maxWidth:b}=e;if(We.is.ios===!0&&window.visualViewport!==void 0){const k=document.body.style,{offsetLeft:x,offsetTop:w}=window.visualViewport;x!==le&&(k.setProperty("--q-pe-left",x+"px"),le=x),w!==ne&&(k.setProperty("--q-pe-top",w+"px"),ne=w)}const{scrollLeft:p,scrollTop:a}=n,d=r===void 0?Xe(i,c===!0?[0,0]:t):Ze(i,r,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:T,offsetHeight:H}=n,{elWidth:M,elHeight:m}=u===!0||c===!0?{elWidth:Math.max(d.width,T),elHeight:c===!0?Math.max(d.height,H):H}:{elWidth:T,elHeight:H};let v={maxWidth:b,maxHeight:f};(u===!0||c===!0)&&(v.minWidth=d.width+"px",c===!0&&(v.minHeight=d.height+"px")),Object.assign(n.style,v);const $=Je(M,m);let h=ae(d,$,s,o);if(r===void 0||t===void 0)Q(h,d,$,s,o);else{const{top:k,left:x}=h;Q(h,d,$,s,o);let w=!1;if(h.top!==k){w=!0;const S=2*t[1];d.center=d.top-=S,d.bottom-=S+2}if(h.left!==x){w=!0;const S=2*t[0];d.middle=d.left-=S,d.right-=S+2}w===!0&&(h=ae(d,$,s,o),Q(h,d,$,s,o))}v={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(v.maxHeight=h.maxHeight+"px",d.height>h.maxHeight&&(v.minHeight=v.maxHeight)),h.maxWidth!==void 0&&(v.maxWidth=h.maxWidth+"px",d.width>h.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==p&&(n.scrollLeft=p)}function Q(e,l,n,t,i){const s=n.bottom,o=n.right,r=Ae(),u=window.innerHeight-r,c=document.body.clientWidth;if(e.top<0||e.top+s>u)if(i.vertical==="center")e.top=l[t.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(l[t.vertical]>u/2){const f=Math.min(u,t.vertical==="center"?l.center:t.vertical===i.vertical?l.bottom:l.top);e.maxHeight=Math.min(s,f),e.top=Math.max(0,f-s)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===i.vertical?l.top:l.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+o>c)if(e.maxWidth=Math.min(o,c),i.horizontal==="middle")e.left=l[t.horizontal]>c/2?Math.max(0,c-o):0;else if(l[t.horizontal]>c/2){const f=Math.min(c,t.horizontal==="middle"?l.middle:t.horizontal===i.horizontal?l.right:l.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===i.horizontal?l.left:l.right),e.maxWidth=Math.min(o,c-e.left)}var ot=ce({name:"QTooltip",inheritAttrs:!1,props:{...Ve,...Re,...Ne,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ie},self:{type:String,default:"top middle",validator:ie},offset:{type:Array,default:()=>[14,14],validator:Ye},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Fe],setup(e,{slots:l,emit:n,attrs:t}){let i,s;const o=A(),{proxy:{$q:r}}=o,u=P(null),c=P(!1),f=y(()=>oe(e.anchor,r.lang.rtl)),b=y(()=>oe(e.self,r.lang.rtl)),p=y(()=>e.persistent!==!0),{registerTick:a,removeTick:d}=Ge(),{registerTimeout:T}=_e(),{transitionProps:H,transitionStyle:M}=Ue(e),{localScrollTarget:m,changeScrollEvent:v,unconfigureScrollTarget:$}=Be(e,X),{anchorEl:h,canShow:k,anchorEvents:x}=je({showing:c,configureAnchorEl:pe}),{show:w,hide:S}=Qe({showing:c,canShow:k,handleShow:me,handleHide:he,hideOnRouteChange:p,processOnMount:!0});Object.assign(x,{delayShow:ve,delayHide:ge});const{showPortal:_,hidePortal:K,renderPortal:fe}=Ie(o,u,xe,"tooltip");if(r.platform.is.mobile===!0){const g={anchorEl:h,innerRef:u,onClickOutside(C){return S(C),C.target.classList.contains("q-dialog__backdrop")&&Pe(C),!0}},F=y(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);E(F,C=>{(C===!0?Ke:te)(g)}),q(()=>{te(g)})}function me(g){_(),a(()=>{s=new MutationObserver(()=>L()),s.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),L(),X()}),i===void 0&&(i=E(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,L)),T(()=>{_(!0),n("show",g)},e.transitionDuration)}function he(g){d(),K(),Y(),T(()=>{K(!0),n("hide",g)},e.transitionDuration)}function Y(){s!==void 0&&(s.disconnect(),s=void 0),i!==void 0&&(i(),i=void 0),$(),I(x,"tooltipTemp")}function L(){de({targetEl:u.value,offset:e.offset,anchorEl:h.value,anchorOrigin:f.value,selfOrigin:b.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(g){if(r.platform.is.mobile===!0){U(),document.body.classList.add("non-selectable");const F=h.value,C=["touchmove","touchcancel","touchend","click"].map(Z=>[F,Z,"delayHide","passiveCapture"]);V(x,"tooltipTemp",C)}T(()=>{w(g)},e.delay)}function ge(g){r.platform.is.mobile===!0&&(I(x,"tooltipTemp"),U(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{S(g)},e.hideDelay)}function pe(){if(e.noParentEvent===!0||h.value===null)return;const g=r.platform.is.mobile===!0?[[h.value,"touchstart","delayShow","passive"]]:[[h.value,"mouseenter","delayShow","passive"],[h.value,"mouseleave","delayHide","passive"]];V(x,"anchor",g)}function X(){if(h.value!==null||e.scrollTarget!==void 0){m.value=Le(h.value,e.scrollTarget);const g=e.noParentEvent===!0?L:S;v(m.value,g)}}function be(){return c.value===!0?j("div",{...t,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,M.value],role:"tooltip"},ke(l.default)):null}function xe(){return j(Me,H.value,be)}return q(Y),Object.assign(o.proxy,{updatePosition:L}),fe}});const et={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},O={xs:2,sm:4,md:8,lg:16,xl:24};var at=ce({name:"QSeparator",props:{...ze,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=A(),n=De(e,l.proxy.$q),t=y(()=>e.vertical===!0?"vertical":"horizontal"),i=y(()=>` q-separator--${t.value}`),s=y(()=>e.inset!==!1?`${i.value}-${et[e.inset]}`:""),o=y(()=>`q-separator${i.value}${s.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),r=y(()=>{const u={};if(e.size!==void 0&&(u[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const c=e.spaced===!0?`${O.md}px`:e.spaced in O?`${O[e.spaced]}px`:e.spaced,f=e.vertical===!0?["Left","Right"]:["Top","Bottom"];u[`margin${f[0]}`]=u[`margin${f[1]}`]=c}return u});return()=>j("hr",{class:o.value,style:r.value,"aria-orientation":t.value})}});export{ot as Q,at as a,Ne as b,U as c,Fe as d,_e as e,Ge as f,Ue as g,Ie as h,Qe as i,Re as u};
