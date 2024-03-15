import{Q as G,a as X,b as W}from"./QHeader.a7be2aa8.js";import{u as Y,c as K,b as Z,a as ee,Q as se}from"./QPage.fc3bde17.js";import{j as V,T as te,U as ne,k as p,l as S,G as oe,x as le,m as re,a as I,_ as P,V as D,o as u,L as _,f as l,w as c,Q as q,W as J,e as M,g as y,P as h,h as b,N as x,i as t,r as N,c as R,M as L,X as C,O,u as ae,Y as ie}from"./index.dc6b9b27.js";import{_ as ue,a as ce,b as de,c as me,d as pe,e as _e,f as ge,g as fe,h as ve,i as we,j as he}from"./wandb_logo.229b3938.js";import{Q as z,a as F}from"./QSeparator.9e4088ae.js";import{u as E}from"./use-quasar.db988f21.js";import{u as H}from"./answerStore.01696659.js";import{_ as be}from"./lg_saxion_wit.4b1b1f5e.js";import"./QResizeObserver.58223a0d.js";import"./focus-manager.02955f48.js";import"./scroll.c99e0664.js";const qe={xs:2,sm:4,md:6,lg:10,xl:14};function U(e,n,s){return{transform:n===!0?`translateX(${s.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var ye=V({name:"QLinearProgress",props:{...Y,...te,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:n}){const{proxy:s}=le(),m=K(e,s.$q),r=ne(e,qe),a=p(()=>e.indeterminate===!0||e.query===!0),o=p(()=>e.reverse!==e.query),g=p(()=>({...r.value!==null?r.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),i=p(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),B=p(()=>U(e.buffer!==void 0?e.buffer:1,o.value,s.$q)),w=p(()=>`with${e.instantFeedback===!0?"out":""}-transition`),k=p(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${w.value} q-linear-progress__track--${m.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),T=p(()=>U(a.value===!0?1:e.value,o.value,s.$q)),A=p(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${w.value} q-linear-progress__model--${a.value===!0?"in":""}determinate`),j=p(()=>({width:`${e.value*100}%`})),d=p(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${w.value}`);return()=>{const v=[S("div",{class:k.value,style:B.value}),S("div",{class:A.value,style:T.value})];return e.stripe===!0&&a.value===!1&&v.push(S("div",{class:d.value,style:j.value})),S("div",{class:i.value,style:g.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},oe(n.default,v))}}}),ke=V({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:n}){const s=p(()=>{const m=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(r=>e[r]===!0).map(r=>`q-btn-group--${r}`).join(" ");return`q-btn-group row no-wrap${m.length!==0?" "+m:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>S("div",{class:s.value},re(n.default))}});const Ae=I({name:"AnswerItem",props:{fullscreen:{type:Boolean},answer:{type:Object}},emits:["selectAnswer","unselectAnswer"],setup(e,{emit:n}){const s=H();return{selectAnswer:o=>{n("selectAnswer",o)},submitAnswer:()=>{const o=s.selectedAnswers;o.length>0?n("sumbitAnswer",e.question.id,o):D.create({message:"Selecteer minimaal 1 antwoord!",color:"negative"})},unselectAnswer:o=>{n("unselectAnswer",o)},answerStore:s,props:e}}}),$e={key:0},Qe=t("b",null,"Antwoord uitleg:",-1),Se=t("div",null,null,-1);function Be(e,n,s,m,r,a){return u(),_(x,null,[l(ke,{rounded:"",class:"full-width"},{default:c(()=>[l(q,{class:"full-width","no-caps":"",push:"",rounded:"",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"primary",onClick:n[0]||(n[0]=J(o=>e.answerStore.selectedAnswers.includes(e.props.answer.id)?e.unselectAnswer(e.props.answer.id):e.selectAnswer(e.props.answer.id),["stop"])),label:e.props.answer.answer_text},null,8,["color","label"]),e.props.answer.explanation_text?(u(),M(q,{key:0,icon:"info",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"secondary","no-caps":"",push:"",rounded:"",round:"",size:"md"},{default:c(()=>[l(z,{"max-width":"50vw",style:{"font-size":"medium"},class:"bg-white text-black"},{default:c(()=>[y(h(e.props.answer.explanation_text),1)]),_:1})]),_:1},8,["color"])):b("",!0)]),_:1}),e.props.fullscreen&&e.props.answer.explanation_text?(u(),_("div",$e,[Qe,y(" "+h(e.props.answer.explanation_text),1)])):b("",!0),Se],64)}var Ce=P(Ae,[["render",Be]]);const xe=I({name:"QuestionItem",props:{question:{type:Object},question_number:{type:Number}},emits:["submitAnswer","previousQuestion"],setup(e,{emit:n}){const s=H(),m=E(),r=s.tools,a=()=>{n("previousQuestion")},o=d=>new URL({"../assets/small/azureml_logo.png":ue,"../assets/small/clearml_logo.png":ce,"../assets/small/dagshub_logo.png":de,"../assets/small/databricks_logo.png":me,"../assets/small/datarobot_logo.png":pe,"../assets/small/h2o_logo.png":_e,"../assets/small/kubeflow_logo.png":ge,"../assets/small/mlflow_logo.png":fe,"../assets/small/sagemaker_logo.png":ve,"../assets/small/vertex_logo.png":we,"../assets/small/wandb_logo.png":he}[`../assets/small/${d}`],self.location).href,g=d=>{const v=[];return r.forEach($=>{let Q=$.good_compatible.find(f=>f.question_id===e.question.id&&f.answer_id===d);if(Q){let f=JSON.parse(JSON.stringify($));f.match=Q,v.push(f)}}),v},i=d=>{const v=[];return r.forEach($=>{let Q=$.bad_compatible.find(f=>f.question_id===e.question.id&&f.answer_id===d);if(Q){let f=JSON.parse(JSON.stringify($));f.match=Q,v.push(f)}}),v},B=()=>{const d=s.selectedAnswers;d.length>0?n("submitAnswer",e.question.id,d):D.create({message:"Selecteer minimaal 1 antwoord!",color:"negative"})},w=N(!0),k=d=>{s.selectedAnswers=s.selectedAnswers.filter(v=>v!==d)},T=d=>{e.question.type==="single"&&s.selectedAnswers.length>0&&s.selectedAnswers.pop(),s.selectedAnswers.push(d)},A=N(!0);return{selectAnswer:T,clashed_tools:i,expandFull:()=>{w.value=!w.value,A.value=!A.value},getImgUrl:o,matched_tools:g,submitAnswer:B,unselectAnswer:k,fullscreen:A,answerStore:s,q:m,previousQuestion:a,props:e,expanded:w}},components:{AnswerItem:Ce}}),ze={class:"row items-center justify-center"},Me={class:"text-h5 text-center text-weight-bolder col-12"},Ne={key:0},Te=t("b",null,"Vraag uitleg:",-1),Le={class:"col-md-6 col-sm-10 col-xs-12 q-pa-"},Ie={key:0,class:"row q-pa-sm"},Pe=t("b",{class:"text-positive"},"Match",-1),He=["src"],je=["innerHTML"],Oe={key:0},Fe=["innerHTML"],Ue=t("div",{class:"col-2",style:{height:"auto"}},null,-1),Ve=t("b",{class:"text-negative"},"Clash",-1),De=["src"],Je=["innerHTML"],Re={key:0},Ee=["innerHTML"],Ge={class:"col-6 q-pl-lg q-pb-md"},Xe={class:"text-right col-6 q-pr-lg q-pb-md"},We={class:"q-pa-sm col-12"};function Ye(e,n,s,m,r,a){const o=R("AnswerItem");return u(),_("div",ze,[t("div",Me,[y(h(e.props.question.question_text)+" ",1),l(q,{icon:"info",color:"accent","no-caps":"",push:"",rounded:"",round:"",size:"md",class:"q-my-sm"},{default:c(()=>[l(z,{"max-width":"50vw",style:{"font-size":"medium"},class:"bg-white text-black"},{default:c(()=>[y(h(e.props.question.explanation_text),1)]),_:1})]),_:1})]),e.fullscreen?(u(),_("div",Ne,[Te,y(" "+h(e.props.question.explanation_text),1)])):b("",!0),t("div",Le,[l(Z,{class:"row q-pa-lg-lg q-pa-md-md q-pa-xs-xs q-pa-sm-sm card"},{default:c(()=>[(u(!0),_(x,null,L(e.props.question.answers,g=>(u(),M(ee,{class:"col-12",key:g.id},{default:c(()=>[l(o,{answer:g,fullscreen:e.fullscreen,onSelectAnswer:e.selectAnswer,onUnselectAnswer:e.unselectAnswer},null,8,["answer","fullscreen","onSelectAnswer","onUnselectAnswer"]),e.expanded?(u(),_("div",Ie,[t("div",{class:C(e.fullscreen?"col-12":"col-5")},[Pe,t("div",{class:C(e.fullscreen?"":"flex")},[(u(!0),_(x,null,L(e.matched_tools(g.id),i=>(u(),_("div",{key:i.id,class:"q-ma-sm cursor-pointer"},[l(O,{square:""},{default:c(()=>[t("img",{src:e.getImgUrl(i.img_link)},null,8,He),l(z,{style:{"font-size":"medium"},"max-width":"50vw",class:"bg-white text-black"},{default:c(()=>[t("div",{innerHTML:i.match.explanation},null,8,je)]),_:2},1024)]),_:2},1024),e.fullscreen?(u(),_("div",Oe,[t("b",null,h(i.title),1),t("div",{innerHTML:i.match.explanation},null,8,Fe),l(F,{inset:""})])):b("",!0)]))),128))],2)],2),Ue,t("div",{class:C(e.fullscreen?"col-12":"col-5")},[Ve,t("div",{class:C(e.fullscreen?"":"flex")},[(u(!0),_(x,null,L(e.clashed_tools(g.id),i=>(u(),_("div",{key:i.id,class:"q-ma-sm cursor-pointer"},[l(O,{square:""},{default:c(()=>[t("img",{src:e.getImgUrl(i.img_link)},null,8,De),l(z,{style:{"font-size":"medium"},"max-width":"50vw",class:"bg-white text-black"},{default:c(()=>[t("div",{innerHTML:i.match.explanation},null,8,Je)]),_:2},1024)]),_:2},1024),e.fullscreen?(u(),_("div",Re,[t("b",null,h(i.title),1),t("div",{innerHTML:i.match.explanation},null,8,Ee),l(F,{inset:""})])):b("",!0)]))),128))],2)],2)])):b("",!0)]),_:2},1024))),128)),t("div",Ge,[l(q,{"no-caps":"",label:e.q.screen.lt.sm?"Meer info":"Meer info per tool",rounded:"","icon-right":e.expanded?"keyboard_arrow_up":"keyboard_arrow_down",onClick:[J(e.expandFull,["ctrl"]),n[0]||(n[0]=g=>e.expanded=!e.expanded)],flat:""},null,8,["label","icon-right","onClick"])]),t("div",Xe,[t("b",null,h(e.props.question.type==="single"?"Selecteer \xE9\xE9n antwoord":"Meerdere antwoorden mogelijk"),1)])]),_:1}),t("div",We,[l(q,{color:"accent","no-caps":"",class:"float-left",push:"",rounded:"",icon:"arrow_back",onClick:e.previousQuestion},null,8,["onClick"]),l(q,{color:"accent","no-caps":"",class:"float-right",push:"",rounded:"",label:"Volgende vraag",onClick:e.submitAnswer},null,8,["onClick"])])])])}var Ke=P(xe,[["render",Ye]]);const Ze=I({name:"QuizPage",setup(){const e=E(),n=ae(),s=H(),m=s.questions,r=N([]),a=N(0),o=ie();o.query.hasOwnProperty("question_id")&&(console.log("Found question_id",o.query),a.value=parseInt(o.query.question_id));const g=p(()=>(a.value+1)/m.length);return{router:n,answers:r,previousQuestion:()=>{s.selectedAnswers=[],r.value.pop(),a.value-1>=0?a.value--:(s.results=[],n.push("/"))},questions:m,progress:g,nextQuestion:(w,k)=>{s.selectedAnswers=[],r.value.push({question_id:w,answers:k}),a.value+1<m.length?a.value++:(s.result=r.value,n.push({name:"result"}))},q:e,currentQuestion:a}},components:{QuestionItem:Ke}}),es=t("img",{class:"q-ma-sm",src:be,style:{height:"6vh"}},null,-1),ss={class:"absolute-full flex flex-center"},ts={class:"text-h4 text-white"};function ns(e,n,s,m,r,a){const o=R("question-item");return u(),M(se,{class:"q-ma-sm"},{default:c(()=>[l(W,null,{default:c(()=>[l(G,null,{default:c(()=>[es,e.q.screen.lt.sm?b("",!0):(u(),M(X,{key:0,class:"absolute-center"},{default:c(()=>[y(" Dataplatformwijzer ")]),_:1}))]),_:1}),l(ye,{size:"50px",stripe:"",value:e.progress,color:"accent","track-color":"white"},{default:c(()=>[t("div",ss,[t("div",ts,h(`${e.currentQuestion+1}/${e.questions.length} vragen`),1)])]),_:1},8,["value"])]),_:1}),l(o,{question:e.questions[e.currentQuestion],question_number:e.currentQuestion+1,onSubmitAnswer:e.nextQuestion,onPreviousQuestion:e.previousQuestion},null,8,["question","question_number","onSubmitAnswer","onPreviousQuestion"])]),_:1})}var gs=P(Ze,[["render",ns]]);export{gs as default};
