import{T as Ct,j as Pe,U as qt,k as b,l as H,ad as xt,x as ze,ae as Tt,aa as N,B as St,af as Mt,a1 as ie,ag as we,a0 as Fe,ah as ye,ai as fe,a2 as be,ac as Oe,r as D,q as Me,aj as Et,a as Le,_ as Be,o as p,L as k,i as q,e as Z,ak as ae,P as V,f as g,w as y,X as lt,s as nt,al as Ae,C as R,am as $t,$ as Pt,ab as Ie,m as zt,an as Ot,Q as Ee,h as W,g as B,N as j,M as K,O as Qe,u as Lt,A as Bt,c as Re,ao as Vt}from"./index.dc6b9b27.js";import{b as ke,a as F,Q as Nt}from"./QPage.fc3bde17.js";import{_ as at,a as it,b as rt,c as ut,d as dt,e as ct,f as ft,g as mt,h as vt,i as gt,j as ht}from"./wandb_logo.229b3938.js";import{c as Dt,u as Ht,b as Ft,d as At,e as It,f as Qt,g as Rt,h as Ut,i as jt,a as Ce,Q as Ue}from"./QSeparator.9e4088ae.js";import{u as Kt,a as Xt}from"./use-form.fc17799d.js";import{u as Ve}from"./answerStore.01696659.js";import{_ as Yt,a as Jt,b as Wt,c as Zt,d as Gt,e as eo,f as to,g as oo,h as so,i as lo,j as no,Q as re}from"./QChip.d6e57377.js";import{Q as ao}from"./QCardActions.11fea638.js";import{b as io,a as ro,h as uo}from"./scroll.c99e0664.js";import{b as co}from"./focus-manager.02955f48.js";import{u as fo}from"./use-quasar.db988f21.js";const Ne={...Ct,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function ce(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function je(e,t,n){if(n<=t)return t;const r=n-t+1;let o=t+(e-t)%r;return o<t&&(o=r+o),o===0?0:o}const $e=50,pt=2*$e,_t=pt*Math.PI,mo=Math.round(_t*1e3)/1e3;var vo=Pe({name:"QCircularProgress",props:{...Ne,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=ze(),r=qt(e),o=b(()=>{const v=(n.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(n.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-v}deg)`:`rotate3d(0, 0, 1, ${v-90}deg)`}}),l=b(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),s=b(()=>pt/(1-e.thickness/2)),u=b(()=>`${s.value/2} ${s.value/2} ${s.value} ${s.value}`),a=b(()=>ce(e.value,e.min,e.max)),i=b(()=>e.max-e.min),m=b(()=>e.thickness/2*s.value),c=b(()=>{const v=(e.max-a.value)/i.value,f=e.rounded===!0&&a.value<e.max&&v<.25?m.value/2*(1-v/.25):0;return _t*v+f});function C({thickness:v,offset:f,color:E,cls:O,rounded:J}){return H("circle",{class:"q-circular-progress__"+O+(E!==void 0?` text-${E}`:""),style:l.value,fill:"transparent",stroke:"currentColor","stroke-width":v,"stroke-dasharray":mo,"stroke-dashoffset":f,"stroke-linecap":J,cx:s.value,cy:s.value,r:$e})}return()=>{const v=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&v.push(H("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:$e-m.value/2,cx:s.value,cy:s.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&v.push(C({cls:"track",thickness:m.value,offset:0,color:e.trackColor})),v.push(C({cls:"circle",thickness:m.value,offset:c.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const f=[H("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:u.value,"aria-hidden":"true"},v)];return e.showValue===!0&&f.push(H("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[H("div",a.value)])),H("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:a.value},xt(t.internal,f))}}});const De={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},go=Object.keys(De);De.all=!0;function Ke(e){const t={};for(const n of go)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?De:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const ho=["INPUT","TEXTAREA"];function Xe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&ho.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function qe(e,t,n){const r=fe(e);let o,l=r.left-t.event.x,s=r.top-t.event.y,u=Math.abs(l),a=Math.abs(s);const i=t.direction;i.horizontal===!0&&i.vertical!==!0?o=l<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?o=s<0?"up":"down":i.up===!0&&s<0?(o="up",u>a&&(i.left===!0&&l<0?o="left":i.right===!0&&l>0&&(o="right"))):i.down===!0&&s>0?(o="down",u>a&&(i.left===!0&&l<0?o="left":i.right===!0&&l>0&&(o="right"))):i.left===!0&&l<0?(o="left",u<a&&(i.up===!0&&s<0?o="up":i.down===!0&&s>0&&(o="down"))):i.right===!0&&l>0&&(o="right",u<a&&(i.up===!0&&s<0?o="up":i.down===!0&&s>0&&(o="down")));let m=!1;if(o===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};o=t.event.lastDir,m=!0,o==="left"||o==="right"?(r.left-=l,u=0,l=0):(r.top-=s,a=0,s=0)}return{synthetic:m,payload:{evt:e,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:r,direction:o,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:u,y:a},offset:{x:l,y:s},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}let po=0;var _o=Tt({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(n.mouse!==!0&&N.has.touch!==!0)return;function r(l,s){n.mouse===!0&&s===!0?Oe(l):(n.stop===!0&&ye(l),n.prevent===!0&&Fe(l))}const o={uid:"qvtp_"+po++,handler:t,modifiers:n,direction:Ke(n),noop:St,mouseStart(l){Xe(l,o)&&Mt(l)&&(ie(o,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),o.start(l,!0))},touchStart(l){if(Xe(l,o)){const s=l.target;ie(o,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),o.start(l)}},start(l,s){if(N.is.firefox===!0&&we(e,!0),o.lastEvt=l,s===!0||n.stop===!0){if(o.direction.all!==!0&&(s!==!0||o.modifiers.mouseAllDir!==!0&&o.modifiers.mousealldir!==!0)){const i=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Fe(i),l.cancelBubble===!0&&ye(i),Object.assign(i,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[o.uid]:l.qClonedBy.concat(o.uid)}),o.initialEvent={target:l.target,event:i}}ye(l)}const{left:u,top:a}=fe(l);o.event={x:u,y:a,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:u,lastY:a}},move(l){if(o.event===void 0)return;const s=fe(l),u=s.left-o.event.x,a=s.top-o.event.y;if(u===0&&a===0)return;o.lastEvt=l;const i=o.event.mouse===!0,m=()=>{r(l,i);let v;n.preserveCursor!==!0&&n.preservecursor!==!0&&(v=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Dt(),o.styleCleanup=f=>{if(o.styleCleanup=void 0,v!==void 0&&(document.documentElement.style.cursor=v),document.body.classList.remove("non-selectable"),i===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{E(),f()},50):E()}else f!==void 0&&f()}};if(o.event.detected===!0){o.event.isFirst!==!0&&r(l,o.event.mouse);const{payload:v,synthetic:f}=qe(l,o,!1);v!==void 0&&(o.handler(v)===!1?o.end(l):(o.styleCleanup===void 0&&o.event.isFirst===!0&&m(),o.event.lastX=v.position.left,o.event.lastY=v.position.top,o.event.lastDir=f===!0?void 0:v.direction,o.event.isFirst=!1));return}if(o.direction.all===!0||i===!0&&(o.modifiers.mouseAllDir===!0||o.modifiers.mousealldir===!0)){m(),o.event.detected=!0,o.move(l);return}const c=Math.abs(u),C=Math.abs(a);c!==C&&(o.direction.horizontal===!0&&c>C||o.direction.vertical===!0&&c<C||o.direction.up===!0&&c<C&&a<0||o.direction.down===!0&&c<C&&a>0||o.direction.left===!0&&c>C&&u<0||o.direction.right===!0&&c>C&&u>0?(o.event.detected=!0,o.move(l)):o.end(l,!0))},end(l,s){if(o.event!==void 0){if(be(o,"temp"),N.is.firefox===!0&&we(e,!1),s===!0)o.styleCleanup!==void 0&&o.styleCleanup(),o.event.detected!==!0&&o.initialEvent!==void 0&&o.initialEvent.target.dispatchEvent(o.initialEvent.event);else if(o.event.detected===!0){o.event.isFirst===!0&&o.handler(qe(l===void 0?o.lastEvt:l,o).payload);const{payload:u}=qe(l===void 0?o.lastEvt:l,o,!0),a=()=>{o.handler(u)};o.styleCleanup!==void 0?o.styleCleanup(a):a()}o.event=void 0,o.initialEvent=void 0,o.lastEvt=void 0}}};if(e.__qtouchpan=o,n.mouse===!0){const l=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ie(o,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}N.has.touch===!0&&ie(o,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=Ke(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),be(t,"main"),be(t,"temp"),N.is.firefox===!0&&we(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchpan)}});const Ye=[34,37,40,33,39,38],wo=Object.keys(Ne);var yo=Pe({name:"QKnob",props:{...Kt,...Ne,modelValue:{type:Number,required:!0},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:e=>e>=0},tabindex:{type:[Number,String],default:0},disable:Boolean,readonly:Boolean},emits:["update:modelValue","change","dragValue"],setup(e,{slots:t,emit:n}){const{proxy:r}=ze(),{$q:o}=r,l=D(e.modelValue),s=D(!1),u=b(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),a=b(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax);let i;function m(){l.value=e.modelValue===null?u.value:ce(e.modelValue,u.value,a.value),A(!0)}Me(()=>`${e.modelValue}|${u.value}|${a.value}`,m),m();const c=b(()=>e.disable===!1&&e.readonly===!1),C=b(()=>"q-knob non-selectable"+(c.value===!0?" q-knob--editable":e.disable===!0?" disabled":"")),v=b(()=>(String(e.step).trim().split(".")[1]||"").length),f=b(()=>e.step===0?1:e.step),E=b(()=>e.instantFeedback===!0||s.value===!0),O=o.platform.is.mobile===!0?b(()=>c.value===!0?{onClick:T}:{}):b(()=>c.value===!0?{onMousedown:d,onClick:T,onKeydown:L,onKeyup:me}:{}),J=b(()=>c.value===!0?{tabindex:e.tabindex}:{[`aria-${e.disable===!0?"disabled":"readonly"}`]:"true"}),ee=b(()=>{const w={};return wo.forEach(P=>{w[P]=e[P]}),w});function te(w){w.isFinal?(Q(w.evt,!0),s.value=!1):(w.isFirst&&(_(),s.value=!0),Q(w.evt))}const x=b(()=>[[_o,te,void 0,{prevent:!0,stop:!0,mouse:!0}]]);function _(){const{top:w,left:P,width:$,height:I}=r.$el.getBoundingClientRect();i={top:w+I/2,left:P+$/2}}function d(w){_(),Q(w)}function T(w){_(),Q(w,!0)}function L(w){if(!Ye.includes(w.keyCode))return;Oe(w);const P=([34,33].includes(w.keyCode)?10:1)*f.value,$=[34,37,40].includes(w.keyCode)?-P:P;l.value=ce(parseFloat((l.value+$).toFixed(v.value)),u.value,a.value),A()}function Q(w,P){const $=fe(w),I=Math.abs($.top-i.top),oe=Math.sqrt(I**2+Math.abs($.left-i.left)**2);let S=Math.asin(I/oe)*(180/Math.PI);$.top<i.top?S=i.left<$.left?90-S:270+S:S=i.left<$.left?S+90:270-S,o.lang.rtl===!0?S=je(-S-e.angle,0,360):e.angle&&(S=je(S-e.angle,0,360)),e.reverse===!0&&(S=360-S);let z=e.min+S/360*(e.max-e.min);if(f.value!==0){const se=z%f.value;z=z-se+(Math.abs(se)>=f.value/2?(se<0?-1:1)*f.value:0),z=parseFloat(z.toFixed(v.value))}z=ce(z,u.value,a.value),n("dragValue",z),l.value!==z&&(l.value=z),A(P)}function me(w){Ye.includes(w.keyCode)&&A(!0)}function A(w){e.modelValue!==l.value&&n("update:modelValue",l.value),w===!0&&n("change",l.value)}const ve=Xt(e);function ge(){return H("input",ve.value)}return()=>{const w={class:C.value,role:"slider","aria-valuemin":u.value,"aria-valuemax":a.value,"aria-valuenow":e.modelValue,...J.value,...ee.value,value:l.value,instantFeedback:E.value,...O.value},P={default:t.default};return c.value===!0&&e.name!==void 0&&(P.internal=ge),Et(vo,w,P,"knob",c.value,()=>x.value)}}});const bo=Le({name:"ToolItem",props:{tool:{type:Object},rank:{type:Number}},emits:["openDialog"],setup(e,{emit:t}){Ve();const n=D(!1);return{props:e,goTo:()=>{window.open(e.tool.link,"_blank").focus()},emit:t,getImgUrl:s=>new URL({"../assets/small/azureml_logo.png":at,"../assets/small/clearml_logo.png":it,"../assets/small/dagshub_logo.png":rt,"../assets/small/databricks_logo.png":ut,"../assets/small/datarobot_logo.png":dt,"../assets/small/h2o_logo.png":ct,"../assets/small/kubeflow_logo.png":ft,"../assets/small/mlflow_logo.png":mt,"../assets/small/sagemaker_logo.png":vt,"../assets/small/vertex_logo.png":gt,"../assets/small/wandb_logo.png":ht}[`../assets/small/${s}`],self.location).href,openDialog:()=>{t("openDialog",e.tool)},isHovered:n}}}),ko={key:1,class:"text-weight-bolder"},Co={key:1},qo={class:"cursor-pointer full-width"},xo=["src"],To={class:"text-weight-bolder text-center text-h6"},So={class:"ext-center text-h6"};function Mo(e,t,n,r,o,l){return p(),k("div",null,[q("div",{class:lt(["q-pa-md text-center circle",{enlarged:e.isHovered}]),onMouseover:t[1]||(t[1]=s=>e.isHovered=!0),onMouseleave:t[2]||(t[2]=s=>e.isHovered=!1)},[e.props.tool.rank===1?(p(),Z(ae,{key:0,size:"md",name:"emoji_events",color:"yellow"})):(p(),k("div",ko,[e.props.tool.rank===2||e.props.tool.rank===3?(p(),Z(ae,{key:0,size:"md",name:"military_tech",color:e.props.tool.rank===2?"grey":"brown"},null,8,["color"])):(p(),k("i",Co,V(`${e.props.tool.rank}de`),1))])),q("div",qo,[g(yo,{onClick:e.openDialog,"show-value":"",modelValue:e.props.tool.percentage,"onUpdate:modelValue":t[0]||(t[0]=s=>e.props.tool.percentage=s),color:"primary",size:"250px",readonly:"","track-color":"accent"},{default:y(()=>[g(ae,{square:"",size:"124px"},{default:y(()=>[q("img",{src:e.getImgUrl(e.props.tool.img_link)},null,8,xo)]),_:1})]),_:1},8,["onClick","modelValue"])]),q("div",To,V(e.props.tool.title),1),q("i",So,V(e.props.tool.percentage.toFixed(1))+"% Match ",1)],34)])}var Eo=Be(bo,[["render",Mo]]);function $o(e,t,n){let r;function o(){r!==void 0&&(Ae.remove(r),r=void 0)}return nt(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){r={condition:()=>n.value===!0,handler:t},Ae.add(r)}}}let le=0,xe,Te,ne,Se=!1,Je,We,Ze,U=null;function Po(e){zo(e)&&Oe(e)}function zo(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=$t(e),n=e.shiftKey&&!e.deltaX,r=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),o=n||r?e.deltaY:e.deltaX;for(let l=0;l<t.length;l++){const s=t[l];if(uo(s,r))return r?o<0&&s.scrollTop===0?!0:o>0&&s.scrollTop+s.clientHeight===s.scrollHeight:o<0&&s.scrollLeft===0?!0:o>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ge(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ue(e){Se!==!0&&(Se=!0,requestAnimationFrame(()=>{Se=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;(ne===void 0||t!==window.innerHeight)&&(ne=n-t,document.scrollingElement.scrollTop=r),r>ne&&(document.scrollingElement.scrollTop-=Math.ceil((r-ne)/8))}))}function et(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:o}=window.getComputedStyle(t);xe=io(window),Te=ro(window),Je=t.style.left,We=t.style.top,Ze=window.location.href,t.style.left=`-${xe}px`,t.style.top=`-${Te}px`,o!=="hidden"&&(o==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,N.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ue,R.passiveCapture),window.visualViewport.addEventListener("scroll",ue,R.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ge,R.passiveCapture))}N.is.desktop===!0&&N.is.mac===!0&&window[`${e}EventListener`]("wheel",Po,R.notPassive),e==="remove"&&(N.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ue,R.passiveCapture),window.visualViewport.removeEventListener("scroll",ue,R.passiveCapture)):window.removeEventListener("scroll",Ge,R.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Je,t.style.top=We,window.location.href===Ze&&window.scrollTo(xe,Te),ne=void 0)}function Oo(e){let t="add";if(e===!0){if(le++,U!==null){clearTimeout(U),U=null;return}if(le>1)return}else{if(le===0||(le--,le>0))return;if(t="remove",N.is.ios===!0&&N.is.nativeMobile===!0){U!==null&&clearTimeout(U),U=setTimeout(()=>{et(t),U=null},100);return}}et(t)}function Lo(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Oo(t))}}}const X=[];let G;function Bo(e){G=e.keyCode===27}function Vo(){G===!0&&(G=!1)}function No(e){G===!0&&(G=!1,Pt(e,27)===!0&&X[X.length-1](e))}function wt(e){window[e]("keydown",Bo),window[e]("blur",Vo),window[e]("keyup",No),G=!1}function Do(e){N.is.desktop===!0&&(X.push(e),X.length===1&&wt("addEventListener"))}function tt(e){const t=X.indexOf(e);t>-1&&(X.splice(t,1),X.length===0&&wt("removeEventListener"))}const Y=[];function yt(e){Y[Y.length-1](e)}function Ho(e){N.is.desktop===!0&&(Y.push(e),Y.length===1&&document.body.addEventListener("focusin",yt))}function ot(e){const t=Y.indexOf(e);t>-1&&(Y.splice(t,1),Y.length===0&&document.body.removeEventListener("focusin",yt))}let de=0;const Fo={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},st={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ao=Pe({name:"QDialog",inheritAttrs:!1,props:{...Ht,...Ft,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...At,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:r}){const o=ze(),l=D(null),s=D(!1),u=D(!1);let a=null,i=null,m,c;const C=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:v}=Lo(),{registerTimeout:f}=It(),{registerTick:E,removeTick:O}=Qt(),{transitionProps:J,transitionStyle:ee}=Rt(e,()=>st[e.position][0],()=>st[e.position][1]),{showPortal:te,hidePortal:x,portalIsAccessible:_,renderPortal:d}=Ut(o,l,kt,"dialog"),{hide:T}=jt({showing:s,hideOnRouteChange:C,handleShow:w,handleHide:P,processOnMount:!0}),{addToHistory:L,removeFromHistory:Q}=$o(s,T,C),me=b(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Fo[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),A=b(()=>s.value===!0&&e.seamless!==!0),ve=b(()=>e.autoClose===!0?{onClick:se}:{}),ge=b(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${A.value===!0?"modal":"seamless"}`,r.class]);Me(()=>e.maximized,h=>{s.value===!0&&z(h)}),Me(A,h=>{v(h),h===!0?(Ho(he),Do(oe)):(ot(he),tt(oe))});function w(h){L(),i=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,z(e.maximized),te(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),E($)):O(),f(()=>{if(o.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:M,bottom:pe}=document.activeElement.getBoundingClientRect(),{innerHeight:He}=window,_e=window.visualViewport!==void 0?window.visualViewport.height:He;M>0&&pe>_e/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-_e,pe>=He?1/0:Math.ceil(document.scrollingElement.scrollTop+pe-_e/2))),document.activeElement.scrollIntoView()}c=!0,l.value.click(),c=!1}te(!0),u.value=!1,n("show",h)},e.transitionDuration)}function P(h){O(),Q(),S(!0),u.value=!0,x(),i!==null&&(((h&&h.type.indexOf("key")===0?i.closest('[tabindex]:not([tabindex^="-"])'):void 0)||i).focus(),i=null),f(()=>{x(!0),u.value=!1,n("hide",h)},e.transitionDuration)}function $(h){co(()=>{let M=l.value;M===null||M.contains(document.activeElement)===!0||(M=(h!==""?M.querySelector(h):null)||M.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||M.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||M.querySelector("[autofocus], [data-autofocus]")||M,M.focus({preventScroll:!0}))})}function I(h){h&&typeof h.focus=="function"?h.focus({preventScroll:!0}):$(),n("shake");const M=l.value;M!==null&&(M.classList.remove("q-animate--scale"),M.classList.add("q-animate--scale"),a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,l.value!==null&&(M.classList.remove("q-animate--scale"),$())},170))}function oe(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&I():(n("escapeKey"),T()))}function S(h){a!==null&&(clearTimeout(a),a=null),(h===!0||s.value===!0)&&(z(!1),e.seamless!==!0&&(v(!1),ot(he),tt(oe))),h!==!0&&(i=null)}function z(h){h===!0?m!==!0&&(de<1&&document.body.classList.add("q-body--dialog"),de++,m=!0):m===!0&&(de<2&&document.body.classList.remove("q-body--dialog"),de--,m=!1)}function se(h){c!==!0&&(T(h),n("click",h))}function bt(h){e.persistent!==!0&&e.noBackdropDismiss!==!0?T(h):e.noShake!==!0&&I()}function he(h){e.allowFocusOutside!==!0&&_.value===!0&&Ot(l.value,h.target)!==!0&&$('[tabindex]:not([tabindex="-1"])')}Object.assign(o.proxy,{focus:$,shake:I,__updateRefocusTarget(h){i=h||null}}),nt(S);function kt(){return H("div",{role:"dialog","aria-modal":A.value===!0?"true":"false",...r,class:ge.value},[H(Ie,{name:"q-transition--fade",appear:!0},()=>A.value===!0?H("div",{class:"q-dialog__backdrop fixed-full",style:ee.value,"aria-hidden":"true",tabindex:-1,onClick:bt}):null),H(Ie,J.value,()=>s.value===!0?H("div",{ref:l,class:me.value,style:ee.value,tabindex:-1,...ve.value},zt(t.default)):null)])}return d}});const Io=Le({name:"ToolDialog",props:["modelValue","tool","answers"],emits:["update:modelValue","showNextTool","showPreviousTool","showTool"],setup(e,{emit:t}){const n=fo(),r=Ve(),o=D(r.tools),l=c=>new URL({"../assets/large/azureml_logo.png":Yt,"../assets/large/clearml_logo.png":Jt,"../assets/large/dagshub_logo.png":Wt,"../assets/large/databricks_logo.png":Zt,"../assets/large/datarobot_logo.png":Gt,"../assets/large/h2o_logo.png":eo,"../assets/large/kubeflow_logo.png":to,"../assets/large/mlflow_logo.png":oo,"../assets/large/sagemaker_logo.png":so,"../assets/large/vertex_logo.png":lo,"../assets/large/wandb_logo.png":no}[`../assets/large/${c}`],self.location).href,s=c=>new URL({"../assets/small/azureml_logo.png":at,"../assets/small/clearml_logo.png":it,"../assets/small/dagshub_logo.png":rt,"../assets/small/databricks_logo.png":ut,"../assets/small/datarobot_logo.png":dt,"../assets/small/h2o_logo.png":ct,"../assets/small/kubeflow_logo.png":ft,"../assets/small/mlflow_logo.png":mt,"../assets/small/sagemaker_logo.png":vt,"../assets/small/vertex_logo.png":gt,"../assets/small/wandb_logo.png":ht}[`../assets/small/${c}`],self.location).href,u=b({get(){return e.modelValue},set(c){t("update:modelValue",c)}}),a=D();return{props:e,getImgUrlLarge:l,$q:n,getImgUrlSmall:s,emit:t,value:u,answerStore:r,findMatchingTools:(c,C)=>{const v=[];return o.value.forEach(f=>{let E=f.good_compatible.find(O=>O.question_id===c&&O.answer_id===C);if(E&&f.id!==e.tool.id){let O=JSON.parse(JSON.stringify(f));O.match=E,v.push(O)}}),v},ScrollToMe:a,showTool:c=>{t("showTool",c);const C=a.value;console.log(C),C.scrollIntoView({behavior:"smooth"})}}}}),Qo={class:"flex flex-center"},Ro=["src"],Uo={class:"text-h5 text-weight-bolder"},jo=["href"],Ko={key:0},Xo={key:1},Yo={key:0},Jo={class:"text-h6"},Wo=["innerHTML"],Zo={key:0,class:"q-ma-sm"},Go=["src","onClick"],es=["innerHTML"],ts={key:0},os={key:1},ss={key:0},ls={class:"text-h6"},ns=["innerHTML"],as={key:0,class:"q-ma-sm"},is=["src","onClick"],rs=["innerHTML"];function us(e,t,n,r,o,l){return p(),k("div",null,[g(Ao,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=s=>e.value=s)},{default:y(()=>[g(ke,{class:"text-center card q-pa-md"},{default:y(()=>[e.props.tool.rank>1?(p(),Z(Ee,{key:0,color:"primary",round:"",push:"",icon:"navigate_before",style:{position:"absolute",left:"1em",top:"1em"},onClick:t[0]||(t[0]=s=>e.emit("showPreviousTool"))})):W("",!0),e.props.tool.rank<e.answerStore.tools.length?(p(),Z(Ee,{key:1,color:"primary",round:"",push:"",icon:"navigate_next",onClick:t[1]||(t[1]=s=>e.emit("showNextTool")),style:{position:"absolute",right:"1em",top:"1em"}})):W("",!0),q("div",Qo,[q("img",{src:e.getImgUrlLarge(e.props.tool.img_link),style:{"max-height":"30vh","max-width":"100%",width:"auto",height:"auto"},ref:"ScrollToMe"},null,8,Ro)]),g(F,null,{default:y(()=>[q("div",Uo,[q("a",{href:e.props.tool.link,target:"_blank"},V(e.props.tool.title),9,jo)]),B(" "+V(e.props.tool.description),1)]),_:1}),g(ao,{align:"around"},{default:y(()=>[g(re,{cl:"","text-color":"white",color:"positive"},{default:y(()=>[B("Matches "+V(e.props.tool.numberOfMatches)+" ",1),g(ae,{class:"q-ma-sm",size:"md",name:"done"})]),_:1}),g(re,{class:"float-right","text-color":"white",color:"negative"},{default:y(()=>[B("Clashes "+V(e.props.tool.numberOfClashes)+" ",1),g(ae,{class:"q-ma-sm",size:"md",name:"close"})]),_:1})]),_:1}),g(Ce,{class:"q-my-md"}),g(F,{class:"text-h3 text-weight-bolder text-positive"},{default:y(()=>[B("Match")]),_:1}),g(F,null,{default:y(()=>[e.props.tool.matches.find(s=>s.hasOwnProperty("matches"))?(p(),k("div",Xo,[(p(!0),k(j,null,K(e.props.tool.matches,(s,u)=>(p(),k("div",{key:u,class:"q-my-md"},[s.hasOwnProperty("matches")&&s.matches.length>0?(p(),k("div",Yo,[q("div",Jo,[g(re,{color:"primary",rounded:"","text-color":"white"},{default:y(()=>[B(V(u+1),1)]),_:2},1024),B(V(s.question_text),1)]),(p(!0),k(j,null,K(s.matches,(a,i)=>(p(),k("div",{key:i},[g(ke,{class:"q-my-md"},{default:y(()=>[g(F,{class:"bg-positive text-weight-bolder text-white","text-weight-bold":"","text-white":""},{default:y(()=>[B(V(s.answers.find(m=>m.id===a.answer_id).answer_text),1)]),_:2},1024),g(F,{class:"text-left q-ma-sm"},{default:y(()=>[q("div",{innerHTML:a.explanation},null,8,Wo)]),_:2},1024),g(F,{class:"flex"},{default:y(()=>[(p(!0),k(j,null,K(e.findMatchingTools(a.question_id,a.answer_id),(m,c)=>(p(),k("div",{class:"flex q-ma-sm cursor-pointer",key:m.id},[c===0?(p(),k("div",Zo,"Zie ook:")):W("",!0),g(Qe,{square:""},{default:y(()=>[q("img",{src:e.getImgUrlSmall(m.img_link),onClick:C=>e.showTool(m.id)},null,8,Go),g(Ue,{"max-width":"50vw",style:{"font-size":"medium"},class:"bg-white text-black"},{default:y(()=>[q("div",{innerHTML:m.match.explanation},null,8,es)]),_:2},1024)]),_:2},1024)]))),128))]),_:2},1024)]),_:2},1024)]))),128)),g(Ce,{class:"q-my-md"})])):W("",!0)]))),128))])):(p(),k("div",Ko," Er zijn geen matches gevonden! "))]),_:1}),g(F,{class:"text-h3 text-weight-bolder text-negative"},{default:y(()=>[B(" Clash")]),_:1}),g(F,null,{default:y(()=>[e.props.tool.clashes.find(s=>s.hasOwnProperty("matches"))?(p(),k("div",os,[(p(!0),k(j,null,K(e.props.tool.clashes,(s,u)=>(p(),k("div",{key:u},[s.hasOwnProperty("matches")&&s.matches.length>0?(p(),k("div",ss,[q("div",ls,[g(re,{color:"primary","text-color":"white"},{default:y(()=>[B(V(u+1),1)]),_:2},1024),B(V(s.question_text),1)]),(p(!0),k(j,null,K(s.matches,(a,i)=>(p(),k("div",{key:i},[g(ke,{class:"q-my-md"},{default:y(()=>[g(F,{class:"text-weight-bold bg-negative text-white"},{default:y(()=>[B(V(s.answers.find(m=>m.id===a.answer_id).answer_text),1)]),_:2},1024),g(F,{class:"text-left"},{default:y(()=>[q("div",{innerHTML:a.explanation},null,8,ns)]),_:2},1024),g(F,{class:"flex"},{default:y(()=>[(p(!0),k(j,null,K(e.findMatchingTools(a.question_id,a.answer_id),(m,c)=>(p(),k("div",{class:"flex q-ma-sm cursor-pointer",key:m.id},[c===0?(p(),k("div",as,"Zie:")):W("",!0),g(Qe,{square:""},{default:y(()=>[q("img",{src:e.getImgUrlSmall(m.img_link),onClick:C=>e.showTool(m.id)},null,8,is),g(Ue,{style:{"font-size":"medium"},"max-width":"50vw",class:"bg-white text-black"},{default:y(()=>[q("div",{innerHTML:m.match.explanation},null,8,rs)]),_:2},1024)]),_:2},1024)]))),128))]),_:2},1024)]),_:2},1024)]))),128)),g(Ce,{class:"q-my-md"})])):W("",!0)]))),128))])):(p(),k("div",ts," Er zijn geen clashes gevonden, deze tool voldoet voor 100% aan je aangegeven eisen! "))]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var ds=Be(Io,[["render",us]]);const cs=Le({name:"ResultPage",setup(){const e=Lt(),t=Ve(),n=t.result,r=t.tools,o=t.questions,l=D(-1);n.length==0&&e.push("/");const s=D([]),u=x=>{let _=JSON.parse(JSON.stringify(x));return _.forEach(d=>{d.matches=i(d),d.clashes=m(d),d.numberOfMatches=c(d),d.numberOfClashes=C(d),d.percentage=d.numberOfMatches/(d.numberOfMatches+d.numberOfClashes)*100}),_.sort((d,T)=>T.percentage===d.percentage?T.numberOfMatches-d.numberOfMatches:T.percentage-d.percentage).map((d,T)=>({...d,rank:T+1}))},a=200;Bt(()=>{s.value=u(r),s.value.forEach((x,_)=>{setTimeout(()=>{l.value=_},_*a)})});const i=x=>{let _=JSON.parse(JSON.stringify(o));return x.good_compatible.forEach(d=>{let T=_.find(L=>L.id===d.question_id);n.forEach(L=>{L.question_id===d.question_id&&L.answers.includes(d.answer_id)&&d.explanation!==""&&(T.hasOwnProperty("matches")||(T.matches=[]),T.matches.push(d))})}),_},m=x=>{let _=JSON.parse(JSON.stringify(o));return x.bad_compatible.forEach(d=>{let T=_.find(L=>L.id===d.question_id);n.forEach(L=>{L.question_id===d.question_id&&L.answers.includes(d.answer_id)&&d.explanation!==""&&(T.hasOwnProperty("matches")||(T.matches=[]),T.matches.push(d))})}),_},c=x=>{let _=0;return x.matches.forEach(d=>{d.hasOwnProperty("matches")&&(_+=d.matches.length)}),_},C=x=>{let _=0;return x.clashes.forEach(d=>{d.hasOwnProperty("matches")&&(_+=d.matches.length)}),_},v=D([]),f=D(null),E=D(!1);return{router:e,tools:r,answers:n,showPreviousTool:x=>{f.value.rank-1>=1&&(f.value=s.value.find(_=>_.rank===f.value.rank-1))},showNextTool:x=>{f.value.rank+1<=s.value.length&&(f.value=s.value.find(_=>_.rank===f.value.rank+1))},showTool:x=>{f.value=s.value.find(_=>_.id===x)},chosenTool:f,showDialog:E,openDialog:x=>{f.value=x,E.value=!0},sortedTools:s,itemRefs:v,currentIndex:l,delay:a}},components:{ToolItem:Eo,ToolDialog:ds}}),fs={class:"q-ma-md"},ms=q("div",{class:"text-h4 text-weight-bolder"},"Resultaat",-1),vs=q("div",null,[B(" Hier ziet u een overzicht met de resultaten. "),q("b",null,"Klik"),B(" op een platform om te zien in welke aspecten het matcht of clasht met uw gegeven antwoorden. ")],-1),gs={class:"row items-center"},hs={class:"row q-ma-sm"};function ps(e,t,n,r,o,l){const s=Re("tool-item"),u=Re("tool-dialog");return p(),Z(Nt,null,{default:y(()=>[q("div",fs,[ms,vs,q("div",gs,[(p(!0),k(j,null,K(e.sortedTools,(a,i)=>(p(),Z(s,{style:Vt({transitionDelay:i*e.delay+"ms"}),class:lt([{show_tool:e.currentIndex>=i},"col-xl-2 col-lg-3 col-md-3 col-xs-12 col-sm-6 hide_tool"]),tool:a,key:a.id,ref_for:!0,ref:"itemRefs",onOpenDialog:e.openDialog},null,8,["style","class","tool","onOpenDialog"]))),128))]),g(u,{modelValue:e.showDialog,"onUpdate:modelValue":t[0]||(t[0]=a=>e.showDialog=a),answers:e.answers,tool:e.chosenTool,onShowPreviousTool:e.showPreviousTool,onShowNextTool:e.showNextTool,onShowTool:e.showTool},null,8,["modelValue","answers","tool","onShowPreviousTool","onShowNextTool","onShowTool"]),q("div",hs,[g(Ee,{"no-caps":"",onClick:t[1]||(t[1]=a=>e.router.push({name:"dataplatformwijzer"})),label:"Doe de quiz opnieuw",rounded:"",push:"",color:"accent"})])])]),_:1})}var Es=Be(cs,[["render",ps]]);export{Es as default};
