import{c as e,a as t,_ as n,b as s,d as a,e as o,f as r,g as l,h as u,i as c,j as d,k as i,l as m,m as p,n as f,o as h,p as _,q as E,r as v,s as L,t as y,u as b,w as g,v as j,x as k,y as A,z as P}from"./vendor.c7bdaf10.js";let w;const O={},$=function(e,t){if(!t)return e();if(void 0===w){const e=document.createElement("link").relList;w=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in O)return;O[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":w,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},q=[{path:"/",name:"Landing",component:()=>$((()=>import("./Landing.895003f3.js")),["/bmi-vue/assets/Landing.895003f3.js","/bmi-vue/assets/Landing.d9b191de.css","/bmi-vue/assets/vendor.c7bdaf10.js"])},{path:"/about",name:"About",component:()=>$((()=>import("./About.06069535.js")),["/bmi-vue/assets/About.06069535.js","/bmi-vue/assets/vendor.c7bdaf10.js"])}],D=e({history:t(),routes:q});const I=[n,s,a,o,r,l,u,c,d,i,m,p,f,h],R=[_,E,v];const T={};T.render=function(e,t){const n=b("router-view");return L(),y(n)};const V={},x=A("Header"),z=A("Footer");V.render=function(e,t){const n=b("el-header"),s=b("el-main"),a=b("el-footer"),o=b("el-container");return L(),y(o,null,{default:g((()=>[j(n,null,{default:g((()=>[x])),_:1}),j(s,null,{default:g((()=>[k(e.$slots,"content")])),_:3}),j(a,null,{default:g((()=>[z])),_:1})])),_:1})};const C=P(T);var F;C.use(D),F=C,I.forEach((e=>{F.component(e.name,e)})),R.forEach((e=>{F.use(e)})),C.component("app-layout",V),C.mount("#app");