import{_ as J}from"./lg_saxion_wit.4b1b1f5e.js";import{q as T,t as C}from"./tools.bb27e4e2.js";import{_ as $,a as O,b as B,c as E,d as j,e as G,f as P,g as I,h as L,i as M,j as z,Q as R}from"./wandb_logo.d3922962.js";import{_ as A,a as D,b as F,c as H,d as K,e as W,f as X,g as Y,h as Z,i as ee,j as oe}from"./wandb_logo.229b3938.js";import{u as ae,Q as m}from"./index.esm.95e31549.js";import{_ as le,a as se,u as te,r as ne,k as de,o as r,e as S,w as i,L as b,M as w,N as k,i as u,f as t,Q as V,g as q,P as h}from"./index.7712e78e.js";import{Q as ie,b as N,a as v}from"./QPage.b99e6dc2.js";import{u as _e}from"./answerStore.1d280749.js";import"./use-key-composition.9413da05.js";import"./focus-manager.569a04fa.js";var re="./assets/lg_saxion_rgb.e67a2693.png",ge="./assets/quasar-logo-vertical.55e9c854.svg";const pe=se({name:"ToolsMakerPage",setup(){const _=ae,g=te(),f=_e(),y=a=>new URL({"../assets/lg_saxion_rgb.png":re,"../assets/lg_saxion_wit.png":J,"../assets/quasar-logo-vertical.svg":ge,"../assets/questions.json":T,"../assets/tools.json":C,"../assets/large/azureml_logo.png":$,"../assets/large/clearml_logo.png":O,"../assets/large/dagshub_logo.png":B,"../assets/large/databricks_logo.png":E,"../assets/large/datarobot_logo.png":j,"../assets/large/h2o_logo.png":G,"../assets/large/kubeflow_logo.png":P,"../assets/large/mlflow_logo.png":I,"../assets/large/sagemaker_logo.png":L,"../assets/large/vertex_logo.png":M,"../assets/large/wandb_logo.png":z,"../assets/small/azureml_logo.png":A,"../assets/small/clearml_logo.png":D,"../assets/small/dagshub_logo.png":F,"../assets/small/databricks_logo.png":H,"../assets/small/datarobot_logo.png":K,"../assets/small/h2o_logo.png":W,"../assets/small/kubeflow_logo.png":X,"../assets/small/mlflow_logo.png":Y,"../assets/small/sagemaker_logo.png":Z,"../assets/small/vertex_logo.png":ee,"../assets/small/wandb_logo.png":oe}[`../assets/${a}`],self.location).href;let p=ne(JSON.parse(JSON.stringify(f.tools)));const x=de(()=>{let a=p.value,n=JSON.parse(JSON.stringify(f.questions));return a.forEach(s=>{console.log("tool",s),n.forEach(e=>{e.answers.forEach(d=>{let U=s.bad_compatible.find(c=>d.id===c.answer_id&&e.id===c.question);s.good_compatible.find(c=>d.id===c.answer_id&&e.id===c.question)||s.good_compatible.push({question_id:e.id,answer_id:d.id,explanation:""}),U||s.bad_compatible.push({question_id:e.id,answer_id:d.id,explanation:""})})})}),a});return{router:g,copyJson:async()=>{const a=JSON.parse(JSON.stringify(x.value));a.forEach(n=>{n.good_compatible=n.good_compatible.filter(s=>s.explanation!==""&&s.explanation!==null),n.bad_compatible=n.bad_compatible.filter(s=>s.explanation!==""&&s.explanation!==null)}),await navigator.clipboard.writeText(JSON.stringify({tools:a}))},removeTool:a=>{const n=p.value.findIndex(s=>s.id===a);n>-1&&p.value.splice(n,1)},addTool:()=>{p.value.push({id:_.v4(),title:"temp",description:"temp",link:"https://cloud.google.com/vertex-ai?hl=nl",img_link:"vertex_logo.png",bad_compatible:[],good_compatible:[]})},tools:x,ts:p,getImgUrl:y,answerStore:f}}}),ue={class:"text-h5 text-weight-bolder row"},ce={class:"col-4"},me={class:"row q-col-gutter-sm"},be={class:"col-2 text-center"},fe={class:"col-12"};function ve(_,g,f,y,p,x){return r(),S(ie,{class:"flex flex-center row q-col-gutter-sm"},{default:i(()=>[(r(!0),b(k,null,w(_.tools,l=>(r(),b("div",{key:l.id,class:"col-10"},[u("div",ue,[t(m,{filled:"",rounded:"",modelValue:l.title,"onUpdate:modelValue":o=>l.title=o,label:"Tool name",class:"col-8"},null,8,["modelValue","onUpdate:modelValue"]),u("div",ce,[t(V,{color:"negative",dense:"",round:"",flat:"",class:"float-right",icon:"delete",onClick:o=>_.removeTool(l.id)},null,8,["onClick"])])]),u("div",null,[t(N,{class:"q-mb-sm questioncard"},{default:i(()=>[t(v,null,{default:i(()=>[t(m,{label:"description",modelValue:l.description,"onUpdate:modelValue":o=>l.description=o,clearable:"",rounded:"",outlined:"",autogrow:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(v,null,{default:i(()=>[t(m,{label:"link",modelValue:l.link,"onUpdate:modelValue":o=>l.link=o,clearable:"",rounded:"",outlined:"",autogrow:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),u("div",me,[(r(!0),b(k,null,w(_.answerStore.questions,(o,Q)=>(r(),b("div",{key:o.id,class:"col-12"},[t(N,{class:"card"},{default:i(()=>[t(v,{class:"text-center text-h6"},{default:i(()=>[t(R,{color:"primary text-white"},{default:i(()=>[q(h(Q+1),1)]),_:2},1024),q(h(o.question_text),1)]),_:2},1024),(r(!0),b(k,null,w(o.answers,a=>(r(),S(v,{key:a.id,class:"row col-12"},{default:i(()=>{var n,s;return[t(m,{class:"col-5",clearable:"",rounded:"",outlined:"",autogrow:"",disable:((n=l.good_compatible.find(e=>e.question_id===o.id&&e.answer_id===a.id).explanation)==null?void 0:n.length)>0,label:"Bad match",modelValue:l.bad_compatible.find(e=>e.question_id===o.id&&e.answer_id===a.id).explanation,"onUpdate:modelValue":e=>l.bad_compatible.find(d=>d.question_id===o.id&&d.answer_id===a.id).explanation=e},null,8,["disable","modelValue","onUpdate:modelValue"]),u("div",be,h(a.answer_text),1),t(m,{class:"col-5",clearable:"",rounded:"",outlined:"",autogrow:"",label:"Good match",modelValue:l.good_compatible.find(e=>e.question_id===o.id&&e.answer_id===a.id).explanation,"onUpdate:modelValue":e=>l.good_compatible.find(d=>d.question_id===o.id&&d.answer_id===a.id).explanation=e,disable:((s=l.bad_compatible.find(e=>e.question_id===o.id&&e.answer_id===a.id).explanation)==null?void 0:s.length)>0},null,8,["modelValue","onUpdate:modelValue","disable"])]}),_:2},1024))),128))]),_:2},1024)]))),128))]),t(V,{class:"q-ma-sm",rounded:"",color:"primary","no-caps":"",label:"Copy all JSON",onClick:g[0]||(g[0]=o=>_.copyJson())})]))),128)),u("div",fe,[t(V,{rounded:"",color:"primary","no-caps":"",label:"add new tool",onClick:g[1]||(g[1]=l=>_.addTool())})])]),_:1})}var Je=le(pe,[["render",ve]]);export{Je as default};
