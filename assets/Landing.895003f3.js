import{A as e,B as t,C as n,u as l,s as o,t as a,F as s,D as r,v as i,E as c,G as u,H as d,I as p,J as f,K as m,L as g,M as b,N as v,w as y,y as h,O as w,q as x,P as C,Q as k,R as O}from"./vendor.c7bdaf10.js";import"./index.b17c5887.js";const S=d();e("data-v-50c47806");const _=i("div",{class:"card-header"},[i("span",null,"BMI 中国标准")],-1),B=i("i",{class:"el-icon-d-arrow-right"},null,-1),L={class:"key"},j={class:"val"};t();const P={expose:[],props:{status:{type:String,default:""}},setup(e){const t=e,d=[{key:"分类",value:"BMI 范围",bg:"#8dd8f8"},{key:"偏瘦",value:"<= 18.4",bg:"#ccc"},{key:"正常",value:"18.5 ~ 23.9",bg:"#6c0"},{key:"过重",value:"24.0 ~ 27.9",bg:"#ff0"},{key:"肥胖",value:">= 28.0",bg:"#f90"}],{status:p}=n(t);return(e,t)=>{const n=l("el-card");return o(),a(n,{class:"box-card"},{header:S((()=>[_])),default:S((()=>[(o(),a(s,null,r(d,((e,t)=>i("div",{key:t,class:"text item",style:{backgroundColor:e.bg}},[i("span",{style:{opacity:c(p)===e.key?1:0},class:"arrow"},[B],4),i("span",L,u(e.key),1),i("span",j,u(e.value),1)],4))),64))])),_:1})}},__scopeId:"data-v-50c47806"};var I={};Object.defineProperty(I,"__esModule",{value:!0});var T=p,M=f,E=m;function A(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var N=A(g),D=A(E);const V="Escape",H={success:"success",info:"info",warning:"warning",error:"error"};var $=T.defineComponent({name:"ElMessage",props:{customClass:{type:String,default:""},center:{type:Boolean,default:!1},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:3e3},iconClass:{type:String,default:""},id:{type:String,default:""},message:{type:[String,Object],default:""},onClose:{type:Function,required:!0},showClose:{type:Boolean,default:!1},type:{type:String,default:"info"},offset:{type:Number,default:20},zIndex:{type:Number,default:0}},emits:["destroy"],setup(e){const t=T.computed((()=>{const t=e.type;return t&&H[t]?`el-message__icon el-icon-${H[t]}`:""})),n=T.computed((()=>({top:`${e.offset}px`,zIndex:e.zIndex}))),l=T.ref(!1);let o=null;function a(){e.duration>0&&(o=setTimeout((()=>{l.value&&s()}),e.duration))}function s(){l.value=!1}function r({code:e}){e===V?l.value&&s():a()}return T.onMounted((()=>{a(),l.value=!0,function(e,t,n,l=!1){e&&t&&n&&e.addEventListener(t,n,l)}(document,"keydown",r)})),T.onBeforeUnmount((()=>{!function(e,t,n,l=!1){e&&t&&n&&e.removeEventListener(t,n,l)}(document,"keydown",r)})),{typeClass:t,customStyle:n,visible:l,close:s,clearTimer:function(){clearTimeout(o),o=null},startTimer:a}}});const q={key:0,class:"el-message__content"};$.render=function(e,t,n,l,o,a){return T.openBlock(),T.createBlock(T.Transition,{name:"el-message-fade",onBeforeLeave:e.onClose,onAfterLeave:t[4]||(t[4]=t=>e.$emit("destroy"))},{default:T.withCtx((()=>[T.withDirectives(T.createVNode("div",{id:e.id,class:["el-message",e.type&&!e.iconClass?`el-message--${e.type}`:"",e.center?"is-center":"",e.showClose?"is-closable":"",e.customClass],style:e.customStyle,role:"alert",onMouseenter:t[2]||(t[2]=(...t)=>e.clearTimer&&e.clearTimer(...t)),onMouseleave:t[3]||(t[3]=(...t)=>e.startTimer&&e.startTimer(...t))},[e.type||e.iconClass?(T.openBlock(),T.createBlock("i",{key:0,class:[e.typeClass,e.iconClass]},null,2)):T.createCommentVNode("v-if",!0),T.renderSlot(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(T.openBlock(),T.createBlock(T.Fragment,{key:1},[T.createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),T.createCommentVNode("  eslint-disable-next-line "),T.createVNode("p",{class:"el-message__content",innerHTML:e.message},null,8,["innerHTML"])],2112)):(T.openBlock(),T.createBlock("p",q,T.toDisplayString(e.message),1))])),e.showClose?(T.openBlock(),T.createBlock("div",{key:1,class:"el-message__closeBtn el-icon-close",onClick:t[1]||(t[1]=T.withModifiers(((...t)=>e.close&&e.close(...t)),["stop"]))})):T.createCommentVNode("v-if",!0)],46,["id"]),[[T.vShow,e.visible]])])),_:3},8,["onBeforeLeave"])},$.__file="packages/message/src/index.vue";var z=Object.defineProperty,F=Object.defineProperties,U=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,J=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Z=[];let K=1;const Q=function(e={}){if(D.default)return;"string"==typeof e&&(e={message:e});let t=e,n=e.offset||20;Z.forEach((({vm:e})=>{n+=(e.el.offsetHeight||0)+16})),n+=16;const l="message_"+K++,o=t.onClose;var a,s;a=((e,t)=>{for(var n in t||(t={}))Y.call(t,n)&&J(e,n,t[n]);if(R)for(var n of R(t))G.call(t,n)&&J(e,n,t[n]);return e})({},t),s={onClose:()=>{!function(e,t){const n=Z.findIndex((({vm:t})=>{const{id:n}=t.component.props;return e===n}));if(-1===n)return;const{vm:l}=Z[n];if(!l)return;null==t||t(l);const o=l.el.offsetHeight;Z.splice(n,1);const a=Z.length;if(!(a<1))for(let s=n;s<a;s++){const e=parseInt(Z[s].vm.el.style.top,10)-o-16;Z[s].vm.component.props.offset=e}}(l,o)},offset:n,id:l,zIndex:N.default.nextZIndex()},t=F(a,U(s));const r=document.createElement("div");r.className=`container_${l}`;const i=t.message,c=T.createVNode($,t,M.isVNode(t.message)?{default:()=>i}:null);return c.props.onDestroy=()=>{T.render(null,r)},T.render(c,r),Z.push({vm:c}),document.body.appendChild(r.firstElementChild),{close:()=>c.component.proxy.visible=!1}};["success","warning","info","error"].forEach((e=>{Q[e]=t=>("string"==typeof t?t={message:t,type:e}:t.type=e,Q(t))})),Q.closeAll=function(){for(let e=Z.length-1;e>=0;e--){Z[e].vm.component.ctx.close()}};const W=Q;W.install=e=>{e.config.globalProperties.$message=W};var X=I.default=W;const ee=i("h2",null,"免费计算你的身体质量指数 (BMI)",-1),te=i("span",{class:"unit"},"单位: 厘米 cm",-1),ne=i("span",{class:"unit"},"单位: 千克 kg",-1),le=h(" 计算BMI "),oe={expose:[],emits:["handleSubmit"],setup(e,{emit:t}){const n=b(null),r=v({height:"",weight:""}),u=v({height:[{required:!0,message:"请输入身高",trigger:"blur"},{type:"number",message:"请输入合法的数值",trigger:"blur"}],weight:[{required:!0,message:"请输入体重",trigger:"blur"},{type:"number",message:"请输入合法的数值",trigger:"blur"}]}),d=async()=>{const e=c(n);if(e)try{await e.validate(),t("handleSubmit",r)}catch(l){X.error("请正确填写表单！")}};return(e,t)=>{const p=l("el-input"),f=l("el-form-item"),m=l("el-button"),g=l("el-form");return o(),a(s,null,[ee,i(g,{model:c(r),rules:c(u),ref:n,class:"bmi-form"},{default:y((()=>[i(f,{label:"身高",prop:"height"},{default:y((()=>[i(p,{modelValue:c(r).height,"onUpdate:modelValue":t[1]||(t[1]=e=>c(r).height=e),modelModifiers:{number:!0}},null,8,["modelValue"]),te])),_:1}),i(f,{label:"体重",prop:"weight"},{default:y((()=>[i(p,{modelValue:c(r).weight,"onUpdate:modelValue":t[2]||(t[2]=e=>c(r).weight=e),modelModifiers:{number:!0}},null,8,["modelValue"]),ne])),_:1}),i(f,null,{default:y((()=>[i(m,{class:"submit-bmi",type:"primary",onClick:d},{default:y((()=>[le])),_:1})])),_:1})])),_:1},8,["model","rules"])],64)}}},ae=i("h2",null,"BMI 历史记录",-1),se=i("i",{class:"el-icon-time"},null,-1),re={style:{"margin-left":"10px"}},ie=h("删除"),ce=h(" 当前没有任何 BMI 记录。请输入你的身高和体重，记算你的 BMI 指数。 "),ue={expose:[],props:{list:{type:Array,default:()=>[]}},emits:["handleDelete"],setup(e,{emit:t}){const n=e,{list:r}=n;return(e,n)=>{const d=l("el-table-column"),p=l("el-button"),f=l("el-table");return o(),a(s,null,[ae,i(f,{data:c(r),style:{width:"100%"},stripe:"",border:""},{empty:y((()=>[ce])),default:y((()=>[i(d,{label:"#",width:"100",align:"center"},{default:y((e=>[h(u(e.$index+1),1)])),_:1}),i(d,{label:"日期",align:"center"},{default:y((e=>{return[se,i("span",re,u((t=e.row.createdAt,w(t).format("YYYY-MM-DD HH:mm:ss"))),1)];var t})),_:1}),i(d,{label:"身高",prop:"height"}),i(d,{label:"体重",prop:"weight"}),i(d,{label:"BMI",prop:"bmi",width:"100"}),i(d,{label:"操作",width:"120",align:"center"},{default:y((e=>[i(p,{size:"mini",type:"danger",onClick:n=>(({objectId:e})=>{x.confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{t("handleDelete",e)})).catch((e=>{X.info("取消删除！")}))})(e.row)},{default:y((()=>[ie])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])],64)}}};function de({url:e,method:t="GET",data:n=null}={}){return fetch(e,{method:t,body:null===n?n:JSON.stringify(n),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((e=>e.json()))}var pe={};Object.defineProperty(pe,"__esModule",{value:!0});var fe=p,me=C,ge=m;function be(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var ve=be(g),ye=be(ge);const he=Object.prototype.hasOwnProperty;var we=Object.defineProperty,xe=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,_e=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))Oe.call(t,n)&&_e(e,n,t[n]);if(ke)for(var n of ke(t))Se.call(t,n)&&_e(e,n,t[n]);return e},Le=(e,t)=>xe(e,Ce(t));var je=Object.defineProperty,Pe=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Me=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ee=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&Me(e,n,t[n]);if(Pe)for(var n of Pe(t))Te.call(t,n)&&Me(e,n,t[n]);return e};const Ae={parent:null,background:"",spinner:!1,text:null,fullscreen:!0,body:!1,lock:!1,customClass:""},Ne={fullscreenLoading:null},De=(e,t,n)=>{return l=void 0,o=null,a=function*(){const l={};e.fullscreen?(n.originalPosition.value=me.getStyle(document.body,"position"),n.originalOverflow.value=me.getStyle(document.body,"overflow"),l.zIndex=String(ve.default.nextZIndex())):e.body?(n.originalPosition.value=me.getStyle(document.body,"position"),yield fe.nextTick(),["top","left"].forEach((t=>{const n="top"===t?"scrollTop":"scrollLeft";l[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]-parseInt(me.getStyle(document.body,`margin-${t}`),10)+"px"})),["height","width"].forEach((t=>{l[t]=e.target.getBoundingClientRect()[t]+"px"}))):n.originalPosition.value=me.getStyle(t,"position"),Object.keys(l).forEach((e=>{n.$el.style[e]=l[e]}))},new Promise(((e,t)=>{var n=e=>{try{r(a.next(e))}catch(n){t(n)}},s=e=>{try{r(a.throw(e))}catch(n){t(n)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,s);r((a=a.apply(l,o)).next())}));var l,o,a},Ve=(e,t,n)=>{"absolute"!==n.originalPosition.value&&"fixed"!==n.originalPosition.value?me.addClass(t,"el-loading-parent--relative"):me.removeClass(t,"el-loading-parent--relative"),e.fullscreen&&e.lock?me.addClass(t,"el-loading-parent--hidden"):me.removeClass(t,"el-loading-parent--hidden")},He=function(e={}){if(ye.default)return;"string"==typeof(e=Ee(Ee({},Ae),e)).target&&(e.target=document.querySelector(e.target)),e.target=e.target||document.body,e.target!==document.body?e.fullscreen=!1:e.body=!0,e.fullscreen&&Ne.fullscreenLoading&&Ne.fullscreenLoading.close();const t=e.body?document.body:e.target;e.parent=t;const n=function({options:e,globalLoadingOption:t}){let n=null,l=null;const o=fe.ref(!1),a=fe.reactive(Le(Be({},e),{originalPosition:"",originalOverflow:"",visible:!1}));function s(){const e=a.parent;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(me.removeClass(e,"el-loading-parent--relative"),e.removeAttribute("loading-number")),me.removeClass(e,"el-loading-parent--hidden")}n.el&&n.el.parentNode&&n.el.parentNode.removeChild(n.el)}const r=Le(Be({},fe.toRefs(a)),{setText:function(e){a.text=e},close:function(){a.parent.vLoadingAddClassList=null,a.fullscreen&&(t.fullscreenLoading=void 0),o.value=!0,clearTimeout(l),l=window.setTimeout((()=>{o.value&&(o.value=!1,s())}),400),a.visible=!1},handleAfterLeave:function(){o.value&&(o.value=!1,s())}}),i={name:"ElLoading",setup:()=>r,render(){const e=fe.h("svg",{class:"circular",viewBox:"25 25 50 50"},[fe.h("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),t=fe.h("i",{class:this.spinner}),n=fe.h("p",{class:"el-loading-text"},[this.text]);return fe.h(fe.Transition,{name:"el-loading-fade",onAfterLeave:this.handleAfterLeave},{default:fe.withCtx((()=>[fe.withDirectives(fe.createVNode("div",{style:{backgroundColor:this.background||""},class:["el-loading-mask",this.customClass,this.fullscreen?"is-fullscreen":""]},[fe.h("div",{class:"el-loading-spinner"},[this.spinner?t:e,this.text?n:null])]),[[fe.vShow,this.visible]])]))})}};return n=fe.createVNode(i),fe.render(n,document.createElement("div")),Le(Be({},r),{vm:n,get $el(){return n.el}})}({options:e,globalLoadingOption:Ne});De(e,t,n),Ve(e,t,n),e.parent.vLoadingAddClassList=()=>{Ve(e,t,n)};let l=t.getAttribute("loading-number");return l=l?Number.parseInt(l)+1:1,t.setAttribute("loading-number",l.toString()),t.appendChild(n.$el),fe.nextTick().then((()=>{var t,l;n.visible.value=(t=e,l="visible",!he.call(t,l)||e.visible)})),e.fullscreen&&(Ne.fullscreenLoading=n),n},$e=(e,t)=>{const n=e.getAttribute("element-loading-text"),l=e.getAttribute("element-loading-spinner"),o=e.getAttribute("element-loading-background"),a=e.getAttribute("element-loading-custom-class"),s=t.instance;e.instance=He({text:s&&s[n]||n,spinner:s&&s[l]||l,background:s&&s[o]||o,customClass:s&&s[a]||a,fullscreen:!!t.modifiers.fullscreen,target:t.modifiers.fullscreen?null:e,body:!!t.modifiers.body,visible:!0,lock:!!t.modifiers.lock})},qe={mounted(e,t){t.value&&$e(e,t)},updated(e,t){const n=e.instance;t.oldValue!==t.value&&(t.value?$e(e,t):n.close())},unmounted(e){var t;null==(t=null==e?void 0:e.instance)||t.close()}};var ze={install(e){e.directive("loading",qe),e.config.globalProperties.$loading=He},directive:qe,service:He},Fe=pe.default=ze;const Ue=k({components:{Status:P,CalcForm:oe,DataList:ue},setup:(e,{emit:t})=>{const n=b([]),l=b(""),o=async()=>{const e=Fe.service({fullscreen:!0,text:"计算中..."});try{const t=await de({url:"https://veihwwnelcwq.leanapp.cn/bmi"});n.value=t.data}catch(t){X.error("网络错误，请刷新重试！")}finally{e.close()}};return O((async()=>{await o()})),{status:l,list:n,handleSubmit:async e=>{const t=Fe.service({fullscreen:!0,text:"计算中..."});try{if("!ok"===(await function(e){return de({method:"POST",url:"https://veihwwnelcwq.leanapp.cn/bmi",data:e})}(e)).code)throw"!ok";await o()}catch(n){X.error("内部错误，请刷新重试！")}finally{t.close()}},handleDelete:async e=>{const t=Fe.service({fullscreen:!0,text:"删除..."});try{await function(e){return de({method:"DELETE",url:"https://veihwwnelcwq.leanapp.cn/bmi",data:{id:e}})}(e),X.success("删除成功"),await o()}catch(n){X.error("内部错误，请刷新重试！")}finally{t.close()}}}}}),Re={class:"left"},Ye={class:"right"};Ue.render=function(e,t,n,s,r,c){const u=l("CalcForm"),d=l("el-col"),p=l("Status"),f=l("el-row"),m=l("DataList"),g=l("app-layout");return o(),a(g,null,{content:y((()=>[i(f,{class:"container"},{default:y((()=>[i(d,{span:12,xs:24},{default:y((()=>[i("div",Re,[i(u,{onHandleSubmit:e.handleSubmit},null,8,["onHandleSubmit"])])])),_:1}),i(d,{span:12,xs:24},{default:y((()=>[i("div",Ye,[i(p,{status:e.status},null,8,["status"])])])),_:1})])),_:1}),i(f,{class:"container list"},{default:y((()=>[i(d,{span:24,xs:24},{default:y((()=>[i(m,{list:e.list,onHandleDelete:e.handleDelete},null,8,["list","onHandleDelete"])])),_:1})])),_:1})])),_:1})};export default Ue;