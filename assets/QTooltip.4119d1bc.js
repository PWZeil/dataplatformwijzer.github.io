import{W as be,r as $,X as ye,Y as Z,G as z,Z as D,p as S,z as ae,q as A,v as V,$ as B,B as Q,a0 as xe,E as Te,a1 as we,k as N,a2 as He,a3 as Se,a4 as Ee,j as k,a5 as re,a6 as ue,a7 as We,i as Ce,a8 as Me,l as Pe,a9 as ke}from"./index.f515cc57.js";import{r as J,a as $e}from"./focus-manager.02955f48.js";import{c as Ae,g as Le}from"./scroll.2b983473.js";function G(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),be.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const qe={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Ve({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:o,emit:s}=V(),i=$(null);let r=null;function u(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};n===void 0&&(Object.assign(c,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){ye(a,13)===!0&&c.toggle(a)},contextClick(a){o.hide(a),Z(a),z(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:Z,mobileTouch(a){if(c.mobileCleanup(a),u(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const d=a.target;D(c,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&G()}}),n=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let d;a===!0?o.$q.platform.is.mobile===!0?d=[[i.value,"touchstart","mobileTouch","passive"]]:d=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:d=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],D(c,"anchor",d)});function h(){B(c,"anchor")}function b(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function p(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)b(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return S(()=>t.contextMenu,a=>{i.value!==null&&(h(),n(a))}),S(()=>t.target,()=>{i.value!==null&&h(),p()}),S(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?h():n())}),ae(()=>{p(),l!==!0&&t.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),A(()=>{r!==null&&clearTimeout(r),h()}),{anchorEl:i,canShow:u,anchorEvents:c}}function ze(e,l){const n=$(null);let t;function o(r,u){const c=`${u!==void 0?"add":"remove"}EventListener`,h=u!==void 0?u:t;r!==window&&r[c]("scroll",h,Q.passive),window[c]("scroll",h,Q.passive),t=u}function s(){n.value!==null&&(o(n.value),n.value=null)}const i=S(()=>e.noParentEvent,()=>{n.value!==null&&(s(),l())});return A(i),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:o}}const De={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},je=["beforeShow","show","beforeHide","hide"];function Re({showing:e,canShow:l,hideOnRouteChange:n,handleShow:t,handleHide:o,processOnMount:s}){const i=V(),{props:r,emit:u,proxy:c}=i;let h;function b(f){e.value===!0?d(f):p(f)}function p(f){if(r.disable===!0||f!==void 0&&f.qAnchorHandled===!0||l!==void 0&&l(f)!==!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!0),h=f,z(()=>{h===f&&(h=void 0)})),(r.modelValue===null||v===!1)&&a(f)}function a(f){e.value!==!0&&(e.value=!0,u("beforeShow",f),t!==void 0?t(f):u("show",f))}function d(f){if(r.disable===!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!1),h=f,z(()=>{h===f&&(h=void 0)})),(r.modelValue===null||v===!1)&&x(f)}function x(f){e.value!==!1&&(e.value=!1,u("beforeHide",f),o!==void 0?o(f):u("hide",f))}function H(f){r.disable===!0&&f===!0?r["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):f===!0!==e.value&&(f===!0?a:x)(h)}S(()=>r.modelValue,H),n!==void 0&&xe(i)===!0&&S(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&d()}),s===!0&&ae(()=>{H(r.modelValue)});const M={show:p,hide:d,toggle:b};return Object.assign(c,M),M}const q=[];function Fe(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Oe(e,l,n,t){const o=$(!1),s=$(!1);let i=null;const r={},u=t==="dialog"&&Fe(e);function c(b){if(b===!0){J(r),s.value=!0;return}s.value=!1,o.value===!1&&(u===!1&&i===null&&(i=Se(!1,t)),o.value=!0,q.push(e.proxy),$e(r))}function h(b){if(s.value=!1,b!==!0)return;J(r),o.value=!1;const p=q.indexOf(e.proxy);p!==-1&&q.splice(p,1),i!==null&&(Ee(i),i=null)}return Te(()=>{h(!0)}),e.proxy.__qPortal=!0,we(e.proxy,"contentEl",()=>l.value),{showPortal:c,hidePortal:h,portalIsActive:o,portalIsAccessible:s,renderPortal:()=>u===!0?n():o.value===!0?[N(He,{to:i},n())]:void 0}}const Be={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Qe(e,l=()=>{},n=()=>{}){return{transitionProps:k(()=>{const t=`q-transition--${e.transitionShow||l()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:k(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ne(){let e;const l=V();function n(){e=void 0}return re(n),A(n),{removeTick:n,registerTick(t){e=t,z(()=>{e===t&&(ue(l)===!1&&e(),e=void 0)})}}}function Ge(){let e=null;const l=V();function n(){e!==null&&(clearTimeout(e),e=null)}return re(n),A(n),{removeTimeout:n,registerTimeout(t,o){n(),ue(l)===!1&&(e=setTimeout(t,o))}}}const{notPassiveCapture:j}=Q,C=[];function R(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=q.length-1;for(;n>=0;){const t=q[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=C.length-1;t>=0;t--){const o=C[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(l)===!1)&&(l===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(l)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ie(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",R,j),document.addEventListener("touchstart",R,j))}function ee(e){const l=C.findIndex(n=>n===e);l>-1&&(C.splice(l,1),C.length===0&&(document.removeEventListener("mousedown",R,j),document.removeEventListener("touchstart",R,j)))}let te,le;function ne(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ue(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const I={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{I[`${e}#ltr`]=e,I[`${e}#rtl`]=e});function oe(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:I[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function _e(e,l){let{top:n,left:t,right:o,bottom:s,width:i,height:r}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],s+=l[1],o+=l[0],i+=l[0],r+=l[1]),{top:n,bottom:s,height:r,left:t,right:o,width:i,middle:t+(o-t)/2,center:n+(s-n)/2}}function Ke(e,l,n){let{top:t,left:o}=e.getBoundingClientRect();return t+=l.top,o+=l.left,n!==void 0&&(t+=n[1],o+=n[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function Xe(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function ie(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function se(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{se(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:o,anchorOrigin:s,selfOrigin:i,absoluteOffset:r,fit:u,cover:c,maxHeight:h,maxWidth:b}=e;if(We.is.ios===!0&&window.visualViewport!==void 0){const P=document.body.style,{offsetLeft:y,offsetTop:T}=window.visualViewport;y!==te&&(P.setProperty("--q-pe-left",y+"px"),te=y),T!==le&&(P.setProperty("--q-pe-top",T+"px"),le=T)}const{scrollLeft:p,scrollTop:a}=n,d=r===void 0?_e(o,c===!0?[0,0]:t):Ke(o,r,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:x,offsetHeight:H}=n,{elWidth:M,elHeight:f}=u===!0||c===!0?{elWidth:Math.max(d.width,x),elHeight:c===!0?Math.max(d.height,H):H}:{elWidth:x,elHeight:H};let v={maxWidth:b,maxHeight:h};(u===!0||c===!0)&&(v.minWidth=d.width+"px",c===!0&&(v.minHeight=d.height+"px")),Object.assign(n.style,v);const E=Xe(M,f);let m=ie(d,E,s,i);if(r===void 0||t===void 0)O(m,d,E,s,i);else{const{top:P,left:y}=m;O(m,d,E,s,i);let T=!1;if(m.top!==P){T=!0;const w=2*t[1];d.center=d.top-=w,d.bottom-=w+2}if(m.left!==y){T=!0;const w=2*t[0];d.middle=d.left-=w,d.right-=w+2}T===!0&&(m=ie(d,E,s,i),O(m,d,E,s,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",d.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",d.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(n.style,v),n.scrollTop!==a&&(n.scrollTop=a),n.scrollLeft!==p&&(n.scrollLeft=p)}function O(e,l,n,t,o){const s=n.bottom,i=n.right,r=Ae(),u=window.innerHeight-r,c=document.body.clientWidth;if(e.top<0||e.top+s>u)if(o.vertical==="center")e.top=l[t.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(l[t.vertical]>u/2){const h=Math.min(u,t.vertical==="center"?l.center:t.vertical===o.vertical?l.bottom:l.top);e.maxHeight=Math.min(s,h),e.top=Math.max(0,h-s)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===o.vertical?l.top:l.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+i>c)if(e.maxWidth=Math.min(i,c),o.horizontal==="middle")e.left=l[t.horizontal]>c/2?Math.max(0,c-i):0;else if(l[t.horizontal]>c/2){const h=Math.min(c,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.right:l.left);e.maxWidth=Math.min(i,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.left:l.right),e.maxWidth=Math.min(i,c-e.left)}var et=Ce({name:"QTooltip",inheritAttrs:!1,props:{...qe,...De,...Be,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ne},self:{type:String,default:"top middle",validator:ne},offset:{type:Array,default:()=>[14,14],validator:Ue},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...je],setup(e,{slots:l,emit:n,attrs:t}){let o,s;const i=V(),{proxy:{$q:r}}=i,u=$(null),c=$(!1),h=k(()=>oe(e.anchor,r.lang.rtl)),b=k(()=>oe(e.self,r.lang.rtl)),p=k(()=>e.persistent!==!0),{registerTick:a,removeTick:d}=Ne(),{registerTimeout:x}=Ge(),{transitionProps:H,transitionStyle:M}=Qe(e),{localScrollTarget:f,changeScrollEvent:v,unconfigureScrollTarget:E}=ze(e,X),{anchorEl:m,canShow:P,anchorEvents:y}=Ve({showing:c,configureAnchorEl:ve}),{show:T,hide:w}=Re({showing:c,canShow:P,handleShow:de,handleHide:fe,hideOnRouteChange:p,processOnMount:!0});Object.assign(y,{delayShow:he,delayHide:me});const{showPortal:U,hidePortal:_,renderPortal:ce}=Oe(i,u,pe,"tooltip");if(r.platform.is.mobile===!0){const g={anchorEl:m,innerRef:u,onClickOutside(W){return w(W),W.target.classList.contains("q-dialog__backdrop")&&ke(W),!0}},F=k(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);S(F,W=>{(W===!0?Ie:ee)(g)}),A(()=>{ee(g)})}function de(g){U(),a(()=>{s=new MutationObserver(()=>L()),s.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),L(),X()}),o===void 0&&(o=S(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,L)),x(()=>{U(!0),n("show",g)},e.transitionDuration)}function fe(g){d(),_(),K(),x(()=>{_(!0),n("hide",g)},e.transitionDuration)}function K(){s!==void 0&&(s.disconnect(),s=void 0),o!==void 0&&(o(),o=void 0),E(),B(y,"tooltipTemp")}function L(){se({targetEl:u.value,offset:e.offset,anchorEl:m.value,anchorOrigin:h.value,selfOrigin:b.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function he(g){if(r.platform.is.mobile===!0){G(),document.body.classList.add("non-selectable");const F=m.value,W=["touchmove","touchcancel","touchend","click"].map(Y=>[F,Y,"delayHide","passiveCapture"]);D(y,"tooltipTemp",W)}x(()=>{T(g)},e.delay)}function me(g){r.platform.is.mobile===!0&&(B(y,"tooltipTemp"),G(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),x(()=>{w(g)},e.hideDelay)}function ve(){if(e.noParentEvent===!0||m.value===null)return;const g=r.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];D(y,"anchor",g)}function X(){if(m.value!==null||e.scrollTarget!==void 0){f.value=Le(m.value,e.scrollTarget);const g=e.noParentEvent===!0?L:w;v(f.value,g)}}function ge(){return c.value===!0?N("div",{...t,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,M.value],role:"tooltip"},Pe(l.default)):null}function pe(){return N(Me,H.value,ge)}return A(K),Object.assign(i.proxy,{updatePosition:L}),ce}});export{et as Q,Be as a,je as b,G as c,Ge as d,Ne as e,Qe as f,Oe as g,Re as h,De as u};
