import{i as Ne,r as Q,o as de,k as Ke,w as Y,f as ce,an as Ze,j as ae,a as C,ao as je,a6 as Be,ap as ze,$ as He,g as te,aa as Qe,aq as Ye,h as q,a2 as re,X as Ce,ar as Xe,e as le,ad as Ge,as as Je,ac as We,c as et,ah as Me}from"./index.56700648.js";import{u as tt,c as nt}from"./QPage.b15c5986.js";import{b as Te,c as rt}from"./focus-manager.02955f48.js";import{u as at,b as lt}from"./use-form.c5d7ffc8.js";let ge,oe=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const ot=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return n=>{const t=new Uint8Array(n);return e.getRandomValues(t),t}}return n=>{const t=[];for(let r=n;r>0;r--)t.push(Math.floor(Math.random()*256));return t}})(),Se=4096;function Ie(){(ge===void 0||oe+16>Se)&&(oe=0,ge=ot(Se));const e=Array.prototype.slice.call(ge,oe,oe+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}function $e(e,n){return e===void 0?n===!0?`f_${Ie()}`:void 0:e}function ut(e,n=!0){if(Ne.value===!0){const t=Q(e);return n===!0&&e===void 0&&de(()=>{t.value=`f_${Ie()}`}),t}return Q($e(e,n))}function it({validate:e,resetValidation:n,requiresQForm:t}){const r=Ke(Ze,!1);if(r!==!1){const{props:a,proxy:l}=ae();Object.assign(l,{validate:e,resetValidation:n}),Y(()=>a.disable,o=>{o===!0?(typeof n=="function"&&n(),r.unbindComponent(l)):r.bindComponent(l)}),de(()=>{a.disable!==!0&&r.bindComponent(l)}),ce(()=>{a.disable!==!0&&r.unbindComponent(l)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const Re=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ae=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,qe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ue=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ie=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,me={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Re.test(e),hexaColor:e=>Ae.test(e),hexOrHexaColor:e=>qe.test(e),rgbColor:e=>ue.test(e),rgbaColor:e=>ie.test(e),rgbOrRgbaColor:e=>ue.test(e)||ie.test(e),hexOrRgbColor:e=>Re.test(e)||ue.test(e),hexaOrRgbaColor:e=>Ae.test(e)||ie.test(e),anyColor:e=>qe.test(e)||ue.test(e)||ie.test(e)},st=[!0,!1,"ondemand"],ft={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>st.includes(e)}};function dt(e,n){const{props:t,proxy:r}=ae(),a=Q(!1),l=Q(null),o=Q(!1);it({validate:$,resetValidation:F});let v=0,g;const h=C(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),p=C(()=>t.disable!==!0&&h.value===!0&&n.value===!1),m=C(()=>t.error===!0||a.value===!0),_=C(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:l.value);Y(()=>t.modelValue,()=>{o.value=!0,p.value===!0&&t.lazyRules===!1&&B()});function M(){t.lazyRules!=="ondemand"&&p.value===!0&&o.value===!0&&B()}Y(()=>t.reactiveRules,U=>{U===!0?g===void 0&&(g=Y(()=>t.rules,M,{immediate:!0,deep:!0})):g!==void 0&&(g(),g=void 0)},{immediate:!0}),Y(()=>t.lazyRules,M),Y(e,U=>{U===!0?o.value=!0:p.value===!0&&t.lazyRules!=="ondemand"&&B()});function F(){v++,n.value=!1,o.value=!1,a.value=!1,l.value=null,B.cancel()}function $(U=t.modelValue){if(t.disable===!0||h.value===!1)return!0;const V=++v,X=n.value!==!0?()=>{o.value=!0}:()=>{},D=(S,R)=>{S===!0&&X(),a.value=S,l.value=R||null,n.value=!1},N=[];for(let S=0;S<t.rules.length;S++){const R=t.rules[S];let O;if(typeof R=="function"?O=R(U,me):typeof R=="string"&&me[R]!==void 0&&(O=me[R](U)),O===!1||typeof O=="string")return D(!0,O),!1;O!==!0&&O!==void 0&&N.push(O)}return N.length===0?(D(!1),!0):(n.value=!0,Promise.all(N).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return V===v&&D(!1),!0;const R=S.find(O=>O===!1||typeof O=="string");return V===v&&D(R!==void 0,R),R===void 0},S=>(V===v&&(console.error(S),D(!0)),!1)))}const B=je($,0);return ce(()=>{g!==void 0&&g(),B.cancel()}),Object.assign(r,{resetValidation:F,validate:$}),Be(r,"hasError",()=>m.value),{isDirtyModel:o,hasRules:h,hasError:m,errorMessage:_,validate:$,resetValidation:F}}const Ve=/^on[A-Z]/;function ct(e,n){const t={listeners:Q({}),attributes:Q({})};function r(){const a={},l={};for(const o in e)o!=="class"&&o!=="style"&&Ve.test(o)===!1&&(a[o]=e[o]);for(const o in n.props)Ve.test(o)===!0&&(l[o]=n.props[o]);t.attributes.value=a,t.listeners.value=l}return ze(r),r(),t}function we(e){return e!=null&&(""+e).length!==0}const vt={...tt,...ft,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},gt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function mt({requiredForAttr:e=!0,tagProp:n}={}){const{props:t,attrs:r,proxy:a,vnode:l}=ae(),o=nt(t,a.$q),v=ut(t.for,e);return{requiredForAttr:e,tag:n===!0?C(()=>t.tag):{value:"label"},isDark:o,editable:C(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:Q(!1),focused:Q(!1),hasPopupOpen:!1,splitAttrs:ct(r,l),targetUid:v,rootRef:Q(null),targetRef:Q(null),controlRef:Q(null)}}function ht(e){const{props:n,emit:t,slots:r,attrs:a,proxy:l}=ae(),{$q:o}=l;let v=null;e.hasValue===void 0&&(e.hasValue=C(()=>we(n.modelValue))),e.emitValue===void 0&&(e.emitValue=u=>{t("update:modelValue",u)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:f,onFocusout:s}),Object.assign(e,{clearValue:c,onControlFocusin:f,onControlFocusout:s,focus:R}),e.computedCounter===void 0&&(e.computedCounter=C(()=>{if(n.counter!==!1){const u=typeof n.modelValue=="string"||typeof n.modelValue=="number"?(""+n.modelValue).length:Array.isArray(n.modelValue)===!0?n.modelValue.length:0,y=n.maxlength!==void 0?n.maxlength:n.maxValues;return u+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:g,hasRules:h,hasError:p,errorMessage:m,resetValidation:_}=dt(e.focused,e.innerLoading),M=e.floatingLabel!==void 0?C(()=>n.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):C(()=>n.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),F=C(()=>n.bottomSlots===!0||n.hint!==void 0||h.value===!0||n.counter===!0||n.error!==null),$=C(()=>n.filled===!0?"filled":n.outlined===!0?"outlined":n.borderless===!0?"borderless":n.standout?"standout":"standard"),B=C(()=>`q-field row no-wrap items-start q-field--${$.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(n.rounded===!0?" q-field--rounded":"")+(n.square===!0?" q-field--square":"")+(M.value===!0?" q-field--float":"")+(V.value===!0?" q-field--labeled":"")+(n.dense===!0?" q-field--dense":"")+(n.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(p.value===!0?" q-field--error":"")+(p.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(n.hideBottomSpace!==!0&&F.value===!0?" q-field--with-bottom":"")+(n.disable===!0?" q-field--disabled":n.readonly===!0?" q-field--readonly":"")),U=C(()=>"q-field__control relative-position row no-wrap"+(n.bgColor!==void 0?` bg-${n.bgColor}`:"")+(p.value===!0?" text-negative":typeof n.standout=="string"&&n.standout.length!==0&&e.focused.value===!0?` ${n.standout}`:n.color!==void 0?` text-${n.color}`:"")),V=C(()=>n.labelSlot===!0||n.label!==void 0),X=C(()=>"q-field__label no-pointer-events absolute ellipsis"+(n.labelColor!==void 0&&p.value!==!0?` text-${n.labelColor}`:"")),D=C(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:M.value,modelValue:n.modelValue,emitValue:e.emitValue})),N=C(()=>{const u={};return e.targetUid.value&&(u.for=e.targetUid.value),n.disable===!0&&(u["aria-disabled"]="true"),u});Y(()=>n.for,u=>{e.targetUid.value=$e(u,e.requiredForAttr)});function S(){const u=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(u===null||u.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==u&&y.focus({preventScroll:!0}))}function R(){Te(S)}function O(){rt(S);const u=document.activeElement;u!==null&&e.rootRef.value.contains(u)&&u.blur()}function f(u){v!==null&&(clearTimeout(v),v=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",u))}function s(u,y){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",u)),y!==void 0&&y())})}function c(u){He(u),o.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),n.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),t("clear",n.modelValue),te(()=>{const y=g.value;_(),g.value=y})}function d(){const u=[];return r.prepend!==void 0&&u.push(q("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:re},r.prepend())),u.push(q("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},k())),p.value===!0&&n.noErrorIcon===!1&&u.push(A("error",[q(Ce,{name:o.iconSet.field.error,color:"negative"})])),n.loading===!0||e.innerLoading.value===!0?u.push(A("inner-loading-append",r.loading!==void 0?r.loading():[q(Xe,{color:n.color})])):n.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&u.push(A("inner-clearable-append",[q(Ce,{class:"q-field__focusable-action",tag:"button",name:n.clearIcon||o.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:c})])),r.append!==void 0&&u.push(q("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:re},r.append())),e.getInnerAppend!==void 0&&u.push(A("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&u.push(e.getControlChild()),u}function k(){const u=[];return n.prefix!==void 0&&n.prefix!==null&&u.push(q("div",{class:"q-field__prefix no-pointer-events row items-center"},n.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&u.push(e.getShadowControl()),e.getControl!==void 0?u.push(e.getControl()):r.rawControl!==void 0?u.push(r.rawControl()):r.control!==void 0&&u.push(q("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":n.autofocus===!0||void 0},r.control(D.value))),V.value===!0&&u.push(q("div",{class:X.value},le(r.label,n.label))),n.suffix!==void 0&&n.suffix!==null&&u.push(q("div",{class:"q-field__suffix no-pointer-events row items-center"},n.suffix)),u.concat(le(r.default))}function b(){let u,y;p.value===!0?m.value!==null?(u=[q("div",{role:"alert"},m.value)],y=`q--slot-error-${m.value}`):(u=le(r.error),y="q--slot-error"):(n.hideHint!==!0||e.focused.value===!0)&&(n.hint!==void 0?(u=[q("div",n.hint)],y=`q--slot-hint-${n.hint}`):(u=le(r.hint),y="q--slot-hint"));const G=n.counter===!0||r.counter!==void 0;if(n.hideBottomSpace===!0&&G===!1&&u===void 0)return;const x=q("div",{key:y,class:"q-field__messages col"},u);return q("div",{class:"q-field__bottom row items-start q-field__bottom--"+(n.hideBottomSpace!==!0?"animated":"stale"),onClick:re},[n.hideBottomSpace===!0?x:q(Ge,{name:"q-transition--field-message"},()=>x),G===!0?q("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function A(u,y){return y===null?null:q("div",{key:u,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}let w=!1;return Qe(()=>{w=!0}),Ye(()=>{w===!0&&n.autofocus===!0&&l.focus()}),n.autofocus===!0&&de(()=>{l.focus()}),ce(()=>{v!==null&&clearTimeout(v)}),Object.assign(l,{focus:R,blur:O}),function(){const y=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":n.autofocus===!0||void 0,...N.value}:N.value;return q(e.tag.value,{ref:e.rootRef,class:[B.value,a.class],style:a.style,...y},[r.before!==void 0?q("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:re},r.before()):null,q("div",{class:"q-field__inner relative-position col self-stretch"},[q("div",{ref:e.controlRef,class:U.value,tabindex:-1,...e.controlEvents},d()),F.value===!0?b():null]),r.after!==void 0?q("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:re},r.after()):null])}}const Fe={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},fe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Oe=Object.keys(fe);Oe.forEach(e=>{fe[e].regex=new RegExp(fe[e].pattern)});const pt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Oe.join("")+"])|(.)","g"),Ee=/[.*+?^${}()|[\]\\]/g,T=String.fromCharCode(1),bt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function yt(e,n,t,r){let a,l,o,v,g,h;const p=Q(null),m=Q(M());function _(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}Y(()=>e.type+e.autogrow,$),Y(()=>e.mask,f=>{if(f!==void 0)B(m.value,!0);else{const s=R(m.value);$(),e.modelValue!==s&&n("update:modelValue",s)}}),Y(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&B(m.value,!0)}),Y(()=>e.unmaskedValue,()=>{p.value===!0&&B(m.value)});function M(){if($(),p.value===!0){const f=N(R(e.modelValue));return e.fillMask!==!1?O(f):f}return e.modelValue}function F(f){if(f<a.length)return a.slice(-f);let s="",c=a;const d=c.indexOf(T);if(d>-1){for(let k=f-c.length;k>0;k--)s+=T;c=c.slice(0,d)+s+c.slice(d)}return c}function $(){if(p.value=e.mask!==void 0&&e.mask.length!==0&&_(),p.value===!1){v=void 0,a="",l="";return}const f=Fe[e.mask]===void 0?e.mask:Fe[e.mask],s=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",c=s.replace(Ee,"\\$&"),d=[],k=[],b=[];let A=e.reverseFillMask===!0,w="",u="";f.replace(pt,(I,i,E,W,J)=>{if(W!==void 0){const H=fe[W];b.push(H),u=H.negate,A===!0&&(k.push("(?:"+u+"+)?("+H.pattern+"+)?(?:"+u+"+)?("+H.pattern+"+)?"),A=!1),k.push("(?:"+u+"+)?("+H.pattern+")?")}else if(E!==void 0)w="\\"+(E==="\\"?"":E),b.push(E),d.push("([^"+w+"]+)?"+w+"?");else{const H=i!==void 0?i:J;w=H==="\\"?"\\\\\\\\":H.replace(Ee,"\\\\$&"),b.push(H),d.push("([^"+w+"]+)?"+w+"?")}});const y=new RegExp("^"+d.join("")+"("+(w===""?".":"[^"+w+"]")+"+)?"+(w===""?"":"["+w+"]*")+"$"),G=k.length-1,x=k.map((I,i)=>i===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+I):i===G?new RegExp("^"+I+"("+(u===""?".":u)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+I));o=b,v=I=>{const i=y.exec(e.reverseFillMask===!0?I:I.slice(0,b.length+1));i!==null&&(I=i.slice(1).join(""));const E=[],W=x.length;for(let J=0,H=I;J<W;J++){const ne=x[J].exec(H);if(ne===null)break;H=H.slice(ne.shift().length),E.push(...ne)}return E.length!==0?E.join(""):I},a=b.map(I=>typeof I=="string"?I:T).join(""),l=a.split(T).join(s)}function B(f,s,c){const d=r.value,k=d.selectionEnd,b=d.value.length-k,A=R(f);s===!0&&$();const w=N(A),u=e.fillMask!==!1?O(w):w,y=m.value!==u;d.value!==u&&(d.value=u),y===!0&&(m.value=u),document.activeElement===d&&te(()=>{if(u===l){const x=e.reverseFillMask===!0?l.length:0;d.setSelectionRange(x,x,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const x=d.selectionEnd;let I=k-1;for(let i=g;i<=I&&i<x;i++)a[i]!==T&&I++;V.right(d,I);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)>-1){const x=e.reverseFillMask===!0?k===0?u.length>w.length?1:0:Math.max(0,u.length-(u===l?0:Math.min(w.length,b)+1))+1:k;d.setSelectionRange(x,x,"forward");return}if(e.reverseFillMask===!0)if(y===!0){const x=Math.max(0,u.length-(u===l?0:Math.min(w.length,b+1)));x===1&&k===1?d.setSelectionRange(x,x,"forward"):V.rightReverse(d,x)}else{const x=u.length-b;d.setSelectionRange(x,x,"backward")}else if(y===!0){const x=Math.max(0,a.indexOf(T),Math.min(w.length,k)-1);V.right(d,x)}else{const x=k-1;V.right(d,x)}});const G=e.unmaskedValue===!0?R(u):u;String(e.modelValue)!==G&&(e.modelValue!==null||G!=="")&&t(G,!0)}function U(f,s,c){const d=N(R(f.value));s=Math.max(0,a.indexOf(T),Math.min(d.length,s)),g=s,f.setSelectionRange(s,c,"forward")}const V={left(f,s){const c=a.slice(s-1).indexOf(T)===-1;let d=Math.max(0,s-1);for(;d>=0;d--)if(a[d]===T){s=d,c===!0&&s++;break}if(d<0&&a[s]!==void 0&&a[s]!==T)return V.right(f,0);s>=0&&f.setSelectionRange(s,s,"backward")},right(f,s){const c=f.value.length;let d=Math.min(c,s+1);for(;d<=c;d++)if(a[d]===T){s=d;break}else a[d-1]===T&&(s=d);if(d>c&&a[s-1]!==void 0&&a[s-1]!==T)return V.left(f,c);f.setSelectionRange(s,s,"forward")},leftReverse(f,s){const c=F(f.value.length);let d=Math.max(0,s-1);for(;d>=0;d--)if(c[d-1]===T){s=d;break}else if(c[d]===T&&(s=d,d===0))break;if(d<0&&c[s]!==void 0&&c[s]!==T)return V.rightReverse(f,0);s>=0&&f.setSelectionRange(s,s,"backward")},rightReverse(f,s){const c=f.value.length,d=F(c),k=d.slice(0,s+1).indexOf(T)===-1;let b=Math.min(c,s+1);for(;b<=c;b++)if(d[b-1]===T){s=b,s>0&&k===!0&&s--;break}if(b>c&&d[s-1]!==void 0&&d[s-1]!==T)return V.leftReverse(f,c);f.setSelectionRange(s,s,"forward")}};function X(f){n("click",f),h=void 0}function D(f){if(n("keydown",f),Je(f)===!0||f.altKey===!0)return;const s=r.value,c=s.selectionStart,d=s.selectionEnd;if(f.shiftKey||(h=void 0),f.keyCode===37||f.keyCode===39){f.shiftKey&&h===void 0&&(h=s.selectionDirection==="forward"?c:d);const k=V[(f.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(f.preventDefault(),k(s,h===c?d:c),f.shiftKey){const b=s.selectionStart;s.setSelectionRange(Math.min(h,b),Math.max(h,b),"forward")}}else f.keyCode===8&&e.reverseFillMask!==!0&&c===d?(V.left(s,c),s.setSelectionRange(s.selectionStart,d,"backward")):f.keyCode===46&&e.reverseFillMask===!0&&c===d&&(V.rightReverse(s,d),s.setSelectionRange(c,s.selectionEnd,"forward"))}function N(f){if(f==null||f==="")return"";if(e.reverseFillMask===!0)return S(f);const s=o;let c=0,d="";for(let k=0;k<s.length;k++){const b=f[c],A=s[k];if(typeof A=="string")d+=A,b===A&&c++;else if(b!==void 0&&A.regex.test(b))d+=A.transform!==void 0?A.transform(b):b,c++;else return d}return d}function S(f){const s=o,c=a.indexOf(T);let d=f.length-1,k="";for(let b=s.length-1;b>=0&&d>-1;b--){const A=s[b];let w=f[d];if(typeof A=="string")k=A+k,w===A&&d--;else if(w!==void 0&&A.regex.test(w))do k=(A.transform!==void 0?A.transform(w):w)+k,d--,w=f[d];while(c===b&&w!==void 0&&A.regex.test(w));else return k}return k}function R(f){return typeof f!="string"||v===void 0?typeof f=="number"?v(""+f):f:v(f)}function O(f){return l.length-f.length<=0?f:e.reverseFillMask===!0&&f.length!==0?l.slice(0,-f.length)+f:f+l.slice(f.length)}return{innerValue:m,hasMask:p,moveCursorForPaste:U,updateMaskValue:B,onMaskedKeydown:D,onMaskedClick:X}}function kt(e,n){function t(){const r=e.modelValue;try{const a="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(r)===r&&("length"in r?Array.from(r):[r]).forEach(l=>{a.items.add(l)}),{files:a.files}}catch{return{files:void 0}}}return n===!0?C(()=>{if(e.type==="file")return t()}):C(t)}const wt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,xt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ct=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Mt=/[a-z0-9_ -]$/i;function St(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(We.is.firefox===!0?Mt.test(t.data)===!1:wt.test(t.data)===!0||xt.test(t.data)===!0||Ct.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}var Yt=et({name:"QInput",inheritAttrs:!1,props:{...vt,...bt,...at,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...gt,"paste","change","keydown","click","animationend"],setup(e,{emit:n,attrs:t}){const{proxy:r}=ae(),{$q:a}=r,l={};let o=NaN,v,g,h=null,p;const m=Q(null),_=lt(e),{innerValue:M,hasMask:F,moveCursorForPaste:$,updateMaskValue:B,onMaskedKeydown:U,onMaskedClick:V}=yt(e,n,w,m),X=kt(e,!0),D=C(()=>we(M.value)),N=St(b),S=mt(),R=C(()=>e.type==="textarea"||e.autogrow===!0),O=C(()=>R.value===!0||["text","search","url","tel","password"].includes(e.type)),f=C(()=>{const i={...S.splitAttrs.listeners.value,onInput:b,onPaste:k,onChange:y,onBlur:G,onFocus:Me};return i.onCompositionstart=i.onCompositionupdate=i.onCompositionend=N,F.value===!0&&(i.onKeydown=U,i.onClick=V),e.autogrow===!0&&(i.onAnimationend=A),i}),s=C(()=>{const i={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:_.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return R.value===!1&&(i.type=e.type),e.autogrow===!0&&(i.rows=1),i});Y(()=>e.type,()=>{m.value&&(m.value.value=e.modelValue)}),Y(()=>e.modelValue,i=>{if(F.value===!0){if(g===!0&&(g=!1,String(i)===o))return;B(i)}else M.value!==i&&(M.value=i,e.type==="number"&&l.hasOwnProperty("value")===!0&&(v===!0?v=!1:delete l.value));e.autogrow===!0&&te(u)}),Y(()=>e.autogrow,i=>{i===!0?te(u):m.value!==null&&t.rows>0&&(m.value.style.height="auto")}),Y(()=>e.dense,()=>{e.autogrow===!0&&te(u)});function c(){Te(()=>{const i=document.activeElement;m.value!==null&&m.value!==i&&(i===null||i.id!==S.targetUid.value)&&m.value.focus({preventScroll:!0})})}function d(){m.value!==null&&m.value.select()}function k(i){if(F.value===!0&&e.reverseFillMask!==!0){const E=i.target;$(E,E.selectionStart,E.selectionEnd)}n("paste",i)}function b(i){if(!i||!i.target)return;if(e.type==="file"){n("update:modelValue",i.target.files);return}const E=i.target.value;if(i.target.qComposing===!0){l.value=E;return}if(F.value===!0)B(E,!1,i.inputType);else if(w(E),O.value===!0&&i.target===document.activeElement){const{selectionStart:W,selectionEnd:J}=i.target;W!==void 0&&J!==void 0&&te(()=>{i.target===document.activeElement&&E.indexOf(i.target.value)===0&&i.target.setSelectionRange(W,J)})}e.autogrow===!0&&u()}function A(i){n("animationend",i),u()}function w(i,E){p=()=>{h=null,e.type!=="number"&&l.hasOwnProperty("value")===!0&&delete l.value,e.modelValue!==i&&o!==i&&(o=i,E===!0&&(g=!0),n("update:modelValue",i),te(()=>{o===i&&(o=NaN)})),p=void 0},e.type==="number"&&(v=!0,l.value=i),e.debounce!==void 0?(h!==null&&clearTimeout(h),l.value=i,h=setTimeout(p,e.debounce)):p()}function u(){requestAnimationFrame(()=>{const i=m.value;if(i!==null){const E=i.parentNode.style,{scrollTop:W}=i,{overflowY:J,maxHeight:H}=a.platform.is.firefox===!0?{}:window.getComputedStyle(i),ne=J!==void 0&&J!=="scroll";ne===!0&&(i.style.overflowY="hidden"),E.marginBottom=i.scrollHeight-1+"px",i.style.height="1px",i.style.height=i.scrollHeight+"px",ne===!0&&(i.style.overflowY=parseInt(H,10)<i.scrollHeight?"auto":"hidden"),E.marginBottom="",i.scrollTop=W}})}function y(i){N(i),h!==null&&(clearTimeout(h),h=null),p!==void 0&&p(),n("change",i.target.value)}function G(i){i!==void 0&&Me(i),h!==null&&(clearTimeout(h),h=null),p!==void 0&&p(),v=!1,g=!1,delete l.value,e.type!=="file"&&setTimeout(()=>{m.value!==null&&(m.value.value=M.value!==void 0?M.value:"")})}function x(){return l.hasOwnProperty("value")===!0?l.value:M.value!==void 0?M.value:""}ce(()=>{G()}),de(()=>{e.autogrow===!0&&u()}),Object.assign(S,{innerValue:M,fieldClass:C(()=>`q-${R.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:C(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:m,emitValue:w,hasValue:D,floatingLabel:C(()=>D.value===!0&&(e.type!=="number"||isNaN(M.value)===!1)||we(e.displayValue)),getControl:()=>q(R.value===!0?"textarea":"input",{ref:m,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...s.value,...f.value,...e.type!=="file"?{value:x()}:X.value}),getShadowControl:()=>q("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(R.value===!0?"":" text-no-wrap")},[q("span",{class:"invisible"},x()),q("span",e.shadowText)])});const I=ht(S);return Object.assign(r,{focus:c,select:d,getNativeElement:()=>m.value}),Be(r,"nativeEl",()=>m.value),I}}),se,Rt=new Uint8Array(16);function Ue(){if(!se&&(se=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!se))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return se(Rt)}var At=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function De(e){return typeof e=="string"&&At.test(e)}var L=[];for(var he=0;he<256;++he)L.push((he+256).toString(16).substr(1));function xe(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(L[e[n+0]]+L[e[n+1]]+L[e[n+2]]+L[e[n+3]]+"-"+L[e[n+4]]+L[e[n+5]]+"-"+L[e[n+6]]+L[e[n+7]]+"-"+L[e[n+8]]+L[e[n+9]]+"-"+L[e[n+10]]+L[e[n+11]]+L[e[n+12]]+L[e[n+13]]+L[e[n+14]]+L[e[n+15]]).toLowerCase();if(!De(t))throw TypeError("Stringified UUID is invalid");return t}var _e,pe,be=0,ye=0;function qt(e,n,t){var r=n&&t||0,a=n||new Array(16);e=e||{};var l=e.node||_e,o=e.clockseq!==void 0?e.clockseq:pe;if(l==null||o==null){var v=e.random||(e.rng||Ue)();l==null&&(l=_e=[v[0]|1,v[1],v[2],v[3],v[4],v[5]]),o==null&&(o=pe=(v[6]<<8|v[7])&16383)}var g=e.msecs!==void 0?e.msecs:Date.now(),h=e.nsecs!==void 0?e.nsecs:ye+1,p=g-be+(h-ye)/1e4;if(p<0&&e.clockseq===void 0&&(o=o+1&16383),(p<0||g>be)&&e.nsecs===void 0&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");be=g,ye=h,pe=o,g+=122192928e5;var m=((g&268435455)*1e4+h)%4294967296;a[r++]=m>>>24&255,a[r++]=m>>>16&255,a[r++]=m>>>8&255,a[r++]=m&255;var _=g/4294967296*1e4&268435455;a[r++]=_>>>8&255,a[r++]=_&255,a[r++]=_>>>24&15|16,a[r++]=_>>>16&255,a[r++]=o>>>8|128,a[r++]=o&255;for(var M=0;M<6;++M)a[r+M]=l[M];return n||xe(a)}function Vt(e){if(!De(e))throw TypeError("Invalid UUID");var n,t=new Uint8Array(16);return t[0]=(n=parseInt(e.slice(0,8),16))>>>24,t[1]=n>>>16&255,t[2]=n>>>8&255,t[3]=n&255,t[4]=(n=parseInt(e.slice(9,13),16))>>>8,t[5]=n&255,t[6]=(n=parseInt(e.slice(14,18),16))>>>8,t[7]=n&255,t[8]=(n=parseInt(e.slice(19,23),16))>>>8,t[9]=n&255,t[10]=(n=parseInt(e.slice(24,36),16))/1099511627776&255,t[11]=n/4294967296&255,t[12]=n>>>24&255,t[13]=n>>>16&255,t[14]=n>>>8&255,t[15]=n&255,t}function Ft(e){e=unescape(encodeURIComponent(e));for(var n=[],t=0;t<e.length;++t)n.push(e.charCodeAt(t));return n}var Et="6ba7b810-9dad-11d1-80b4-00c04fd430c8",_t="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Pe(e,n,t){function r(a,l,o,v){if(typeof a=="string"&&(a=Ft(a)),typeof l=="string"&&(l=Vt(l)),l.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var g=new Uint8Array(16+a.length);if(g.set(l),g.set(a,l.length),g=t(g),g[6]=g[6]&15|n,g[8]=g[8]&63|128,o){v=v||0;for(var h=0;h<16;++h)o[v+h]=g[h];return o}return xe(g)}try{r.name=e}catch{}return r.DNS=Et,r.URL=_t,r}function Bt(e){if(typeof e=="string"){var n=unescape(encodeURIComponent(e));e=new Uint8Array(n.length);for(var t=0;t<n.length;++t)e[t]=n.charCodeAt(t)}return Tt(It($t(e),e.length*8))}function Tt(e){for(var n=[],t=e.length*32,r="0123456789abcdef",a=0;a<t;a+=8){var l=e[a>>5]>>>a%32&255,o=parseInt(r.charAt(l>>>4&15)+r.charAt(l&15),16);n.push(o)}return n}function Le(e){return(e+64>>>9<<4)+14+1}function It(e,n){e[n>>5]|=128<<n%32,e[Le(n)-1]=n;for(var t=1732584193,r=-271733879,a=-1732584194,l=271733878,o=0;o<e.length;o+=16){var v=t,g=r,h=a,p=l;t=K(t,r,a,l,e[o],7,-680876936),l=K(l,t,r,a,e[o+1],12,-389564586),a=K(a,l,t,r,e[o+2],17,606105819),r=K(r,a,l,t,e[o+3],22,-1044525330),t=K(t,r,a,l,e[o+4],7,-176418897),l=K(l,t,r,a,e[o+5],12,1200080426),a=K(a,l,t,r,e[o+6],17,-1473231341),r=K(r,a,l,t,e[o+7],22,-45705983),t=K(t,r,a,l,e[o+8],7,1770035416),l=K(l,t,r,a,e[o+9],12,-1958414417),a=K(a,l,t,r,e[o+10],17,-42063),r=K(r,a,l,t,e[o+11],22,-1990404162),t=K(t,r,a,l,e[o+12],7,1804603682),l=K(l,t,r,a,e[o+13],12,-40341101),a=K(a,l,t,r,e[o+14],17,-1502002290),r=K(r,a,l,t,e[o+15],22,1236535329),t=Z(t,r,a,l,e[o+1],5,-165796510),l=Z(l,t,r,a,e[o+6],9,-1069501632),a=Z(a,l,t,r,e[o+11],14,643717713),r=Z(r,a,l,t,e[o],20,-373897302),t=Z(t,r,a,l,e[o+5],5,-701558691),l=Z(l,t,r,a,e[o+10],9,38016083),a=Z(a,l,t,r,e[o+15],14,-660478335),r=Z(r,a,l,t,e[o+4],20,-405537848),t=Z(t,r,a,l,e[o+9],5,568446438),l=Z(l,t,r,a,e[o+14],9,-1019803690),a=Z(a,l,t,r,e[o+3],14,-187363961),r=Z(r,a,l,t,e[o+8],20,1163531501),t=Z(t,r,a,l,e[o+13],5,-1444681467),l=Z(l,t,r,a,e[o+2],9,-51403784),a=Z(a,l,t,r,e[o+7],14,1735328473),r=Z(r,a,l,t,e[o+12],20,-1926607734),t=j(t,r,a,l,e[o+5],4,-378558),l=j(l,t,r,a,e[o+8],11,-2022574463),a=j(a,l,t,r,e[o+11],16,1839030562),r=j(r,a,l,t,e[o+14],23,-35309556),t=j(t,r,a,l,e[o+1],4,-1530992060),l=j(l,t,r,a,e[o+4],11,1272893353),a=j(a,l,t,r,e[o+7],16,-155497632),r=j(r,a,l,t,e[o+10],23,-1094730640),t=j(t,r,a,l,e[o+13],4,681279174),l=j(l,t,r,a,e[o],11,-358537222),a=j(a,l,t,r,e[o+3],16,-722521979),r=j(r,a,l,t,e[o+6],23,76029189),t=j(t,r,a,l,e[o+9],4,-640364487),l=j(l,t,r,a,e[o+12],11,-421815835),a=j(a,l,t,r,e[o+15],16,530742520),r=j(r,a,l,t,e[o+2],23,-995338651),t=z(t,r,a,l,e[o],6,-198630844),l=z(l,t,r,a,e[o+7],10,1126891415),a=z(a,l,t,r,e[o+14],15,-1416354905),r=z(r,a,l,t,e[o+5],21,-57434055),t=z(t,r,a,l,e[o+12],6,1700485571),l=z(l,t,r,a,e[o+3],10,-1894986606),a=z(a,l,t,r,e[o+10],15,-1051523),r=z(r,a,l,t,e[o+1],21,-2054922799),t=z(t,r,a,l,e[o+8],6,1873313359),l=z(l,t,r,a,e[o+15],10,-30611744),a=z(a,l,t,r,e[o+6],15,-1560198380),r=z(r,a,l,t,e[o+13],21,1309151649),t=z(t,r,a,l,e[o+4],6,-145523070),l=z(l,t,r,a,e[o+11],10,-1120210379),a=z(a,l,t,r,e[o+2],15,718787259),r=z(r,a,l,t,e[o+9],21,-343485551),t=ee(t,v),r=ee(r,g),a=ee(a,h),l=ee(l,p)}return[t,r,a,l]}function $t(e){if(e.length===0)return[];for(var n=e.length*8,t=new Uint32Array(Le(n)),r=0;r<n;r+=8)t[r>>5]|=(e[r/8]&255)<<r%32;return t}function ee(e,n){var t=(e&65535)+(n&65535),r=(e>>16)+(n>>16)+(t>>16);return r<<16|t&65535}function Ot(e,n){return e<<n|e>>>32-n}function ve(e,n,t,r,a,l){return ee(Ot(ee(ee(n,e),ee(r,l)),a),t)}function K(e,n,t,r,a,l,o){return ve(n&t|~n&r,e,n,a,l,o)}function Z(e,n,t,r,a,l,o){return ve(n&r|t&~r,e,n,a,l,o)}function j(e,n,t,r,a,l,o){return ve(n^t^r,e,n,a,l,o)}function z(e,n,t,r,a,l,o){return ve(t^(n|~r),e,n,a,l,o)}var Ut=Pe("v3",48,Bt),Dt=Ut;function Pt(e,n,t){e=e||{};var r=e.random||(e.rng||Ue)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,n){t=t||0;for(var a=0;a<16;++a)n[t+a]=r[a];return n}return xe(r)}function Lt(e,n,t,r){switch(e){case 0:return n&t^~n&r;case 1:return n^t^r;case 2:return n&t^n&r^t&r;case 3:return n^t^r}}function ke(e,n){return e<<n|e>>>32-n}function Nt(e){var n=[1518500249,1859775393,2400959708,3395469782],t=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof e=="string"){var r=unescape(encodeURIComponent(e));e=[];for(var a=0;a<r.length;++a)e.push(r.charCodeAt(a))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var l=e.length/4+2,o=Math.ceil(l/16),v=new Array(o),g=0;g<o;++g){for(var h=new Uint32Array(16),p=0;p<16;++p)h[p]=e[g*64+p*4]<<24|e[g*64+p*4+1]<<16|e[g*64+p*4+2]<<8|e[g*64+p*4+3];v[g]=h}v[o-1][14]=(e.length-1)*8/Math.pow(2,32),v[o-1][14]=Math.floor(v[o-1][14]),v[o-1][15]=(e.length-1)*8&4294967295;for(var m=0;m<o;++m){for(var _=new Uint32Array(80),M=0;M<16;++M)_[M]=v[m][M];for(var F=16;F<80;++F)_[F]=ke(_[F-3]^_[F-8]^_[F-14]^_[F-16],1);for(var $=t[0],B=t[1],U=t[2],V=t[3],X=t[4],D=0;D<80;++D){var N=Math.floor(D/20),S=ke($,5)+Lt(N,B,U,V)+X+n[N]+_[D]>>>0;X=V,V=U,U=ke(B,30)>>>0,B=$,$=S}t[0]=t[0]+$>>>0,t[1]=t[1]+B>>>0,t[2]=t[2]+U>>>0,t[3]=t[3]+V>>>0,t[4]=t[4]+X>>>0}return[t[0]>>24&255,t[0]>>16&255,t[0]>>8&255,t[0]&255,t[1]>>24&255,t[1]>>16&255,t[1]>>8&255,t[1]&255,t[2]>>24&255,t[2]>>16&255,t[2]>>8&255,t[2]&255,t[3]>>24&255,t[3]>>16&255,t[3]>>8&255,t[3]&255,t[4]>>24&255,t[4]>>16&255,t[4]>>8&255,t[4]&255]}var Kt=Pe("v5",80,Nt),Zt=Kt,Xt={v1:qt,v3:Dt,v4:Pt,v5:Zt};export{Yt as Q,Xt as u};
