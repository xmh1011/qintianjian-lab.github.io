import{c as g,r as s,w as x,q as I,h as r,H as Q,i as W,I as H}from"./index.dd5cffcd.js";import{c as L,h as O,b as P,g as $,d as C}from"./dom.d3510dfc.js";const F={ratio:[String,Number]};function M(e,i){return g(()=>{const n=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const X=16/9;var U=L({name:"QImg",props:{...F,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:X},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:n}){const u=s(e.initialRatio),y=M(e,u);let l=null,f=!1;const o=[s(null),s(S())],a=s(0),c=s(!1),d=s(!1),T=g(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=g(()=>({width:e.width,height:e.height})),E=g(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),N=g(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));x(()=>w(),b);function w(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function b(t){l!==null&&(clearTimeout(l),l=null),d.value=!1,t===null?(c.value=!1,o[a.value^1].value=S()):c.value=!0,o[a.value].value=t}function k({target:t}){f!==!0&&(l!==null&&(clearTimeout(l),l=null),u.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,_(t,1))}function _(t,m){f===!0||m===1e3||(t.complete===!0?B(t):l=setTimeout(()=>{l=null,_(t,m+1)},50))}function B(t){f!==!0&&(a.value=a.value^1,o[a.value].value=null,c.value=!1,d.value=!1,n("load",t.currentSrc||t.src))}function R(t){l!==null&&(clearTimeout(l),l=null),c.value=!1,d.value=!0,o[a.value].value=null,o[a.value^1].value=S(),n("error",t)}function q(t){const m=o[t].value,v={key:"img_"+t,class:E.value,style:N.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...m};return a.value===t?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:k,onError:R})):v.class+=" q-img__image--loaded",r("div",{class:"q-img__container absolute-full",key:"img"+t},r("img",v))}function j(){return c.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(i[d.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[r(P,{color:e.spinnerColor,size:e.spinnerSize})])}return b(w()),I(()=>{f=!0,l!==null&&(clearTimeout(l),l=null)}),()=>{const t=[];return y.value!==null&&t.push(r("div",{key:"filler",style:y.value})),d.value!==!0&&(o[0].value!==null&&t.push(q(0)),o[1].value!==null&&t.push(q(1))),t.push(r(Q,{name:"q-transition--fade"},j)),r("div",{class:T.value,style:z.value,role:"img","aria-label":e.alt},t)}}});const Y=[null,document,document.body,document.scrollingElement,document.documentElement];function V(e,i){let n=$(i);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Y.includes(n)?window:n}function A(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function J(){if(h!==void 0)return h;const e=document.createElement("p"),i=document.createElement("div");C(e,{width:"100%",height:"200px"}),C(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const n=e.offsetWidth;i.style.overflow="scroll";let u=e.offsetWidth;return n===u&&(u=i.clientWidth),i.remove(),h=n-u,h}function Z(){return W(H)}export{U as Q,A as a,G as b,J as c,V as g,Z as u};
