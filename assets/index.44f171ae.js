import{c as e,a as t,_ as o,b as n,d as a,e as s,f as l,g as r,h as i,i as c,j as u,k as d,l as m,m as f,n as p,o as h,p as g,q as v,r as k,s as _,t as E,u as b,v as y,w as I,x as D,y as j,z as A,A as L,B as x,C as S,D as B,E as C}from"./vendor.2794533a.js";let P;const T={},w=function(e,t){if(!t)return e();if(void 0===P){const e=document.createElement("link").relList;P=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in T)return;T[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":P,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},z=[{path:"/",name:"Landing",component:()=>w((()=>import("./Landing.749478d6.js")),["/bmi-vue/assets/Landing.749478d6.js","/bmi-vue/assets/Landing.f402366b.css","/bmi-vue/assets/vendor.2794533a.js"])},{path:"/about",name:"About",component:()=>w((()=>import("./About.9de351af.js")),["/bmi-vue/assets/About.9de351af.js","/bmi-vue/assets/About.2b40115c.css","/bmi-vue/assets/vendor.2794533a.js"])}],M=e({history:t(),routes:z});const O=[o,n,a,s,l,r,i,c,u,d,m,f,p,h,g],$=[v,k,_];const q={};q.render=function(e,t){const o=E("router-view");return b(),y(o)};const R={expose:[],setup(e){const t=I(localStorage.getItem("isDark")),o=()=>{"true"===localStorage.getItem("isDark")?document.documentElement.style.cssText="\n      --bgc: #151617;\n      --div-bgc: #1D1F20;\n      --main-color: #fff;\n    ":document.documentElement.style.cssText="\n      --bgc: #f5f5f7;\n      --div-bgc: #fff;\n      --main-color: #2c3e50;\n    "},n=()=>{localStorage.setItem("isDark",!("true"===localStorage.getItem("isDark"))),t.value=localStorage.getItem("isDark"),o()},a=D((()=>"true"!==t.value?"夜晚模式":"日间模式"));return j((()=>{o()})),(e,o)=>{const s=E("el-button"),l=E("el-tooltip");return b(),y(l,{class:"item",effect:"light",content:L(a),placement:"left"},{default:A((()=>["true"!==t.value?(b(),y(s,{key:0,onClick:n,icon:"el-icon-moon",size:"mini",class:"dark",circle:""})):(b(),y(s,{key:1,onClick:n,icon:"el-icon-sunny",size:"mini",class:"light",circle:""}))])),_:1},8,["content"])}}};const V={class:"header"},F={class:"logo"},W=B("BMI"),G=x("div",null,"身体质量指数 (Body Mass Index, 简称BMI), 亦称克托莱指数, 是目前国际上常用的衡量人体胖瘦程度以及是否健康的一个标准。",-1),H={class:"end"},J=x("span",null,"|",-1),K=B("About"),N=x("div",{class:"footer"},[x("div",null,[B("Author: "),x("a",{href:"https://github.com/davidkoojohn"},"@ davidkoojohn")]),x("div",null,[B("Email: "),x("a",{href:"mailto:davidkoojohn@gmail.com"},"davidkoojohn@gmail.com")])],-1),Q={expose:[],setup:e=>(e,t)=>{const o=E("router-link"),n=E("el-header"),a=E("el-main"),s=E("el-footer"),l=E("el-container");return b(),y(l,null,{default:A((()=>[x(n,null,{default:A((()=>[x("div",V,[x("div",F,[x(o,{to:{name:"Landing"}},{default:A((()=>[W])),_:1}),G]),x("div",H,[x(R),J,x(o,{to:{name:"About"}},{default:A((()=>[K])),_:1})])])])),_:1}),x(a,null,{default:A((()=>[S(e.$slots,"content")])),_:3}),x(s,null,{default:A((()=>[N])),_:1})])),_:1})}},U=C(q);var X;U.use(M),X=U,O.forEach((e=>{X.component(e.name,e)})),$.forEach((e=>{X.use(e)})),U.component("app-layout",Q),U.mount("#app");
