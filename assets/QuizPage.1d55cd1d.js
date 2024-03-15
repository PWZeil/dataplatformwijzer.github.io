import{Q as R,a as X,b as W}from"./QHeader.882a2394.js";import{u as K,c as Y,b as Z,a as ee,Q as se}from"./QPage.c74209bb.js";import{j as F,T as te,U as ne,k as p,l as S,G as oe,x as le,m as re,a as I,_ as P,V as D,o as u,L as _,f as o,w as c,Q as q,W as J,e as z,g as y,P as h,h as b,N as C,i as t,r as M,c as E,M as L,X as B,O,u as ae}from"./index.557c2ba5.js";import{_ as ie,a as ue,b as ce,c as de,d as me,e as pe,f as _e,g as ge,h as fe,i as ve,j as we}from"./wandb_logo.229b3938.js";import{Q as x,a as U}from"./QSeparator.56db4aa3.js";import{u as G}from"./use-quasar.7d0878d8.js";import{u as H}from"./answerStore.8121ae15.js";import{_ as he}from"./lg_saxion_wit.4b1b1f5e.js";import"./QResizeObserver.ea3d983a.js";import"./focus-manager.02955f48.js";import"./scroll.a55bfb90.js";const be={xs:2,sm:4,md:6,lg:10,xl:14};function V(e,n,s){return{transform:n===!0?`translateX(${s.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var qe=F({name:"QLinearProgress",props:{...K,...te,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:n}){const{proxy:s}=le(),m=Y(e,s.$q),l=ne(e,be),a=p(()=>e.indeterminate===!0||e.query===!0),r=p(()=>e.reverse!==e.query),f=p(()=>({...l.value!==null?l.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),i=p(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),k=p(()=>V(e.buffer!==void 0?e.buffer:1,r.value,s.$q)),w=p(()=>`with${e.instantFeedback===!0?"out":""}-transition`),N=p(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${w.value} q-linear-progress__track--${m.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),T=p(()=>V(a.value===!0?1:e.value,r.value,s.$q)),A=p(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${w.value} q-linear-progress__model--${a.value===!0?"in":""}determinate`),j=p(()=>({width:`${e.value*100}%`})),d=p(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${w.value}`);return()=>{const v=[S("div",{class:N.value,style:k.value}),S("div",{class:A.value,style:T.value})];return e.stripe===!0&&a.value===!1&&v.push(S("div",{class:d.value,style:j.value})),S("div",{class:i.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},oe(n.default,v))}}}),ye=F({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const s=p(()=>{const m=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${m.length!==0?" "+m:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>S("div",{class:s.value},re(n.default))}});const ke=I({name:"AnswerItem",props:{fullscreen:{type:Boolean},answer:{type:Object}},emits:["selectAnswer","unselectAnswer"],setup(e,{emit:n}){const s=H();return{selectAnswer:r=>{n("selectAnswer",r)},submitAnswer:()=>{const r=s.selectedAnswers;r.length>0?n("sumbitAnswer",e.question.id,r):D.create({message:"Selecteer minimaal 1 antwoord!",color:"negative"})},unselectAnswer:r=>{n("unselectAnswer",r)},answerStore:s,props:e}}}),Ae={key:0},$e=t("b",null,"Antwoord uitleg:",-1),Qe=t("div",null,null,-1);function Se(e,n,s,m,l,a){return u(),_(C,null,[o(ye,{rounded:"",class:"full-width"},{default:c(()=>[o(q,{class:"full-width","no-caps":"",push:"",rounded:"",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"primary",onClick:n[0]||(n[0]=J(r=>e.answerStore.selectedAnswers.includes(e.props.answer.id)?e.unselectAnswer(e.props.answer.id):e.selectAnswer(e.props.answer.id),["stop"])),label:e.props.answer.answer_text},null,8,["color","label"]),e.props.answer.explanation_text?(u(),z(q,{key:0,icon:"info",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"secondary","no-caps":"",push:"",rounded:"",round:"",size:"md"},{default:c(()=>[o(x,{"max-width":"50vw",style:{"font-size":"medium"},class:"bg-white text-black"},{default:c(()=>[y(h(e.props.answer.explanation_text),1)]),_:1})]),_:1},8,["color"])):b("",!0)]),_:1}),e.props.fullscreen&&e.props.answer.explanation_text?(u(),_("div",Ae,[$e,y(" "+h(e.props.answer.explanation_text),1)])):b("",!0),Qe],64)}var Be=P(ke,[["render",Se]]);const Ce=I({name:"QuestionItem",props:{question:{type:Object},question_number:{type:Number}},emits:["submitAnswer","previousQuestion"],setup(e,{emit:n}){const s=H(),m=G(),l=s.tools,a=()=>{n("previousQuestion")},r=d=>new URL({"../assets/small/azureml_logo.png":ie,"../assets/small/clearml_logo.png":ue,"../assets/small/dagshub_logo.png":ce,"../assets/small/databricks_logo.png":de,"../assets/small/datarobot_logo.png":me,"../assets/small/h2o_logo.png":pe,"../assets/small/kubeflow_logo.png":_e,"../assets/small/mlflow_logo.png":ge,"../assets/small/sagemaker_logo.png":fe,"../assets/small/vertex_logo.png":ve,"../assets/small/wandb_logo.png":we}[`../assets/small/${d}`],self.location).href,f=d=>{const v=[];return l.forEach($=>{let Q=$.good_compatible.find(g=>g.question_id===e.question.id&&g.answer_id===d);if(Q){let g=JSON.parse(JSON.stringify($));g.match=Q,v.push(g)}}),v},i=d=>{const v=[];return l.forEach($=>{let Q=$.bad_compatible.find(g=>g.question_id===e.question.id&&g.answer_id===d);if(Q){let g=JSON.parse(JSON.stringify($));g.match=Q,v.push(g)}}),v},k=()=>{const d=s.selectedAnswers;d.length>0?n("submitAnswer",e.question.id,d):D.create({message:"Selecteer minimaal 1 antwoord!",color:"negative"})},w=M(!0),N=d=>{s.selectedAnswers=s.selectedAnswers.filter(v=>v!==d)},T=d=>{e.question.type==="single"&&s.selectedAnswers.length>0&&s.selectedAnswers.pop(),s.selectedAnswers.push(d)},A=M(!0);return{selectAnswer:T,clashed_tools:i,expandFull:()=>{w.value=!w.value,A.value=!A.value},getImgUrl:r,matched_tools:f,submitAnswer:k,unselectAnswer:N,fullscreen:A,answerStore:s,q:m,previousQuestion:a,props:e,expanded:w}},components:{AnswerItem:Be}}),xe={class:"row items-center justify-center"},ze={class:"text-h5 text-center text-weight-bolder col-12"},Me={key:0},Ne=t("b",null,"Vraag uitleg:",-1),Te={class:"col-md-6 col-sm-10 col-xs-12 q-pa-"},Le={key:0,class:"row q-pa-sm"},Ie=t("b",{class:"text-positive"},"Match",-1),Pe=["src"],He=["innerHTML"],je={key:0},Oe=["innerHTML"],Ue=t("div",{class:"col-2",style:{height:"auto"}},null,-1),Ve=t("b",{class:"text-negative"},"Clash",-1),Fe=["src"],De=["innerHTML"],Je={key:0},Ee=["innerHTML"],Ge={class:"col-6 q-pl-lg q-pb-md"},Re={class:"text-right col-6 q-pr-lg q-pb-md"},Xe={class:"q-pa-sm col-12"};function We(e,n,s,m,l,a){const r=E("AnswerItem");return u(),_("div",xe,[t("div",ze,[y(h(e.props.question.question_text)+" ",1),o(q,{icon:"info",color:"accent","no-caps":"",push:"",rounded:"",round:"",size:"md",class:"q-my-sm"},{default:c(()=>[o(x,{"max-width":"50vw",style:{"font-size":"medium"},class:"bg-white text-black"},{default:c(()=>[y(h(e.props.question.explanation_text),1)]),_:1})]),_:1})]),e.fullscreen?(u(),_("div",Me,[Ne,y(" "+h(e.props.question.explanation_text),1)])):b("",!0),t("div",Te,[o(Z,{class:"row q-pa-lg-lg q-pa-md-md q-pa-xs-xs q-pa-sm-sm card"},{default:c(()=>[(u(!0),_(C,null,L(e.props.question.answers,f=>(u(),z(ee,{class:"col-12",key:f.id},{default:c(()=>[o(r,{answer:f,fullscreen:e.fullscreen,onSelectAnswer:e.selectAnswer,onUnselectAnswer:e.unselectAnswer},null,8,["answer","fullscreen","onSelectAnswer","onUnselectAnswer"]),e.expanded?(u(),_("div",Le,[t("div",{class:B(e.fullscreen?"col-12":"col-5")},[Ie,t("div",{class:B(e.fullscreen?"":"flex")},[(u(!0),_(C,null,L(e.matched_tools(f.id),i=>(u(),_("div",{key:i.id,class:"q-ma-sm cursor-pointer"},[o(O,{square:""},{default:c(()=>[t("img",{src:e.getImgUrl(i.img_link)},null,8,Pe),o(x,{style:{"font-size":"medium"},"max-width":"50vw",class:"bg-white text-black"},{default:c(()=>[t("div",{innerHTML:i.match.explanation},null,8,He)]),_:2},1024)]),_:2},1024),e.fullscreen?(u(),_("div",je,[t("b",null,h(i.title),1),t("div",{innerHTML:i.match.explanation},null,8,Oe),o(U,{inset:""})])):b("",!0)]))),128))],2)],2),Ue,t("div",{class:B(e.fullscreen?"col-12":"col-5")},[Ve,t("div",{class:B(e.fullscreen?"":"flex")},[(u(!0),_(C,null,L(e.clashed_tools(f.id),i=>(u(),_("div",{key:i.id,class:"q-ma-sm cursor-pointer"},[o(O,{square:""},{default:c(()=>[t("img",{src:e.getImgUrl(i.img_link)},null,8,Fe),o(x,{style:{"font-size":"medium"},"max-width":"50vw",class:"bg-white text-black"},{default:c(()=>[t("div",{innerHTML:i.match.explanation},null,8,De)]),_:2},1024)]),_:2},1024),e.fullscreen?(u(),_("div",Je,[t("b",null,h(i.title),1),t("div",{innerHTML:i.match.explanation},null,8,Ee),o(U,{inset:""})])):b("",!0)]))),128))],2)],2)])):b("",!0)]),_:2},1024))),128)),t("div",Ge,[o(q,{"no-caps":"",label:e.q.screen.lt.sm?"Meer info":"Meer info per tool",rounded:"","icon-right":e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:[J(e.expandFull,["ctrl"]),n[0]||(n[0]=f=>e.expanded=!e.expanded)],flat:""},null,8,["label","icon-right","onClick"])]),t("div",Re,[t("b",null,h(e.props.question.type==="single"?"Selecteer \xE9\xE9n antwoord":"Meerdere antwoorden mogelijk"),1)])]),_:1}),t("div",Xe,[o(q,{color:"accent","no-caps":"",class:"float-left",push:"",rounded:"",icon:"arrow_back",onClick:e.previousQuestion},null,8,["onClick"]),o(q,{color:"accent","no-caps":"",class:"float-right",push:"",rounded:"",label:"Volgende vraag",onClick:e.submitAnswer},null,8,["onClick"])])])])}var Ke=P(Ce,[["render",We]]);const Ye=I({name:"QuizPage",setup(){const e=G(),n=ae(),s=H(),m=s.questions,l=M([]),a=M(0),r=p(()=>(a.value+1)/m.length);return{router:n,answers:l,previousQuestion:()=>{s.selectedAnswers=[],l.value.pop(),a.value-1>=0?a.value--:(s.results=[],n.push("/"))},questions:m,progress:r,nextQuestion:(k,w)=>{s.selectedAnswers=[],l.value.push({question_id:k,answers:w}),a.value+1<m.length?a.value++:(s.result=l.value,n.push({name:"result"}))},q:e,currentQuestion:a}},components:{QuestionItem:Ke}}),Ze=t("img",{class:"q-ma-sm",src:he,style:{height:"6vh"}},null,-1),es={class:"absolute-full flex flex-center"},ss={class:"text-h4 text-white"};function ts(e,n,s,m,l,a){const r=E("question-item");return u(),z(se,{class:"q-ma-sm"},{default:c(()=>[o(W,null,{default:c(()=>[o(R,null,{default:c(()=>[Ze,e.q.screen.lt.sm?b("",!0):(u(),z(X,{key:0,class:"absolute-center"},{default:c(()=>[y(" Dataplatformwijzer ")]),_:1}))]),_:1}),o(qe,{size:"50px",stripe:"",value:e.progress,color:"accent","track-color":"white"},{default:c(()=>[t("div",es,[t("div",ss,h(`${e.currentQuestion+1}/${e.questions.length} vragen`),1)])]),_:1},8,["value"])]),_:1}),o(r,{question:e.questions[e.currentQuestion],question_number:e.currentQuestion+1,onSubmitAnswer:e.nextQuestion,onPreviousQuestion:e.previousQuestion},null,8,["question","question_number","onSubmitAnswer","onPreviousQuestion"])]),_:1})}var _s=P(Ye,[["render",ts]]);export{_s as default};