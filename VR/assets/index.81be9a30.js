var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var k=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&k(e,o,t[o]);if(y)for(var o of y(t))oe.call(t,o)&&k(e,o,t[o]);return e},C=(e,t)=>Z(e,ee(t));function tt(){import("data:text/javascript,")}const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};ne();const re="modulepreload",U={},se="https://j1.58cdn.com.cn/git/_fe/ershoufang/vr-pages/esf/",R=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${se}${r}`,r in U)return;U[r]=!0;const n=r.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":re,n||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),n)return new Promise((u,m)=>{i.addEventListener("load",u),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};const ie=[0,"0","true","ok"],ae=[200],ce={"content-type":"application/json"},q=(e,t)=>fetch(e,t).then(o=>{if(!o.ok)throw Error("\u63A5\u53E3\u8BF7\u6C42\u5F02\u5E38");return o.json()}).then(o=>{if(!ie.includes(o.status)&&!ae.includes(o.code))throw Error(o.message||o.msg);return o}).catch(o=>Promise.reject(o)),d=(e,t={},o={})=>{const r=Object.keys(t).filter(n=>t[n]!=null).map(function(n){return B(n)+"="+B(t[n])}).join("&");return q(`${e}${r&&"?"+r}`,C(f({},o),{method:"GET"}))},G=(e,t={},o={})=>q(e,{body:JSON.stringify(t),headers:Object.assign({},ce,o),method:"POST"});function B(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function E(e,t=window.location.href){const o=new URL(t);return o.searchParams?o.searchParams.get(e):Y(e,o.search)}function Y(e,t=window.location.search){let o=decodeURIComponent(t).replace("?","");(o!==""?o.split("&"):[]).forEach(i=>{if(i){const u=i.split("=");o=o.replace(u[0],u[0].toLowerCase())}});const n=new RegExp(`(^|&)${e.toLowerCase()}=([^&]*)(&|$)`),s=o.match(n);return s!=null?s[2]:""}var ue=(e=>(e[e.HOUSE=0]="HOUSE",e[e.THREE=1]="THREE",e))(ue||{}),K=(e=>(e.ROAM="roam",e.CUT="cut",e))(K||{}),de=(e=>(e.TWO="2D",e.THREE="3D",e))(de||{});const c={houseModuleToRoomType:K.ROAM},le=()=>{},ot=e=>{e.stopPropagation()},fe=["weapp","bdapp","aliapp"];function _e(e){let t={},o={};if(typeof e=="string")try{o=JSON.parse(decodeURIComponent(e))}catch{o={}}const r=E("from");if(window.VRNativeBizFunction)try{t=JSON.parse(window.VRNativeBizFunction.appInfo()),delete t.cid,delete t.i,delete t.udid2,delete t.macid,t.from="app"}catch{t.from="app"}else if(fe.includes(r)){const n=E("weapp_source")||"ajk_weapp",s=E("weapp")||"";t={from:r,app:n,weapp:s}}return f(f({},o),t)}function nt(e){return sessionStorage.getItem(e)}function rt(e,t){localStorage.setItem(e,t)}function st(e){return localStorage.getItem(e)}function it(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))}const S=function(){const e=window.navigator.userAgent.toLowerCase(),t=/ipad/i.test(e),o=/iphone os/i.test(e),r=/midp/i.test(e),n=/rv:1.2.3.4/i.test(e),s=/ucweb/i.test(e),i=/android/i.test(e),u=/windows ce/i.test(e),m=/windows mobile/i.test(e);return t||o||r||n||s||i||u||m},J=window.location.host.includes(".58."),pe=window.location.host.includes(".anjuke."),a=navigator.userAgent||"",O=navigator.userAgent.toLowerCase(),g={isIos:!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),isAndroid:a.indexOf("Android")>-1||a.indexOf("Linux")>-1,isIPhone:a.indexOf("iPhone")>-1,isMidp:/midp/i.test(O),isIPad:a.indexOf("iPad")>-1,isUc7:/rv:1.2.3.4/i.test(O),isUc:/ucweb/i.test(O),isCE:/windows ce/i.test(O),isWM:/windows mobile/i.test(O),isWx:a.indexOf("MicroMessenger")>-1,isWeibo:a.indexOf("Weibo")>-1,isQQ:/qq\/([\d.]+)/i.test(a),isQQBrowser:/(qqbrowser)\/([\d.]+)/i.test(a),isChrome:/chrome\/[\d.]+ Mobile Safari\/[\d.]+/i.test(a)&&(a.indexOf("Android")>-1||a.indexOf("Linux")>-1),isHWBrowser:a.toLowerCase().indexOf("huawei")>-1,isWeixinMiniProgram:/miniprogram/gi.test(a),isBaiDuMiniprogram:/swan/.test(a)||/^webswan-/.test(a),isZfbMiniprogram:/AliApp/.test(a)&&/MiniProgram/.test(a)||/AlipayClient/.test(a)};g.isMiniProgram=g.isWeixinMiniProgram||g.isBaiDuMiniprogram||g.isZfbMiniprogram;const I=J,P=pe,p=_e(Y("params"));let D;if(typeof window!="undefined"&&window.feCommon){const e=["Anjuke","Broker","Wuba","Ajlz","Weixin","Miniprogram"],t=["Anjuke","Broker","Wuba"],{app:o}=window.feCommon||{},{APP_TYPES:r}=o,n="is";e.forEach(s=>{o[n+s]=o.type===r[s.toUpperCase()]}),o.isVr=!!(window.WVRChatNativeFunction||window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.WVRChatSendMessageToNative),o.isWeb=!t.some(s=>o[n+s]),o.isWbHost=I,o.isAnjukeHost=P,o.isAnjukeWeb=o.isWeb&&o.isAnjukeHost,o.isWeiXin=o.APP_TYPES.WEIXIN===o.type,o.isWubaM=I&&S()&&o.isWeb,o.isAnjukeM=P&&S()&&o.isWeb,D=o}else D={isWeiXin:!1,isWeb:!0,isWubaM:I&&S(),isAnjukeM:P&&S()};D.isMiniProgram=g.isMiniProgram;const me=["i-ajk","a-ajk","i-wb","a-wb","a-town"].includes(p.app),ge=["i-broker2","a-broker","i-qf","a-qf"].includes(p.app),Ee=["i-broker2","a-broker","i-wlk","a-wlk","i-ajlz","a-ajlz","i-qf","a-qf"].includes(p.app);function he(){var e;return!!+((e=window.feCommon)==null?void 0:e.seo_source_type)}var W,$,z,F;const Oe=(($=(W=window.feCommon)==null?void 0:W.app)==null?void 0:$.type)===((F=(z=window.feCommon)==null?void 0:z.app)==null?void 0:F.APP_TYPES.MINIPROGRAM);var at=Object.freeze(Object.defineProperty({__proto__:null,get APP(){return D},appInfo:p,Device:g,isAnjuke:P,isBrokerApp:ge,isBusinessApp:Ee,isCustomerApp:me,isCustomerMiniprogram:Oe,isMobile:S,isSeo:he,isWuba:I},Symbol.toStringTag,{value:"Module"}));const l={}.VITE_API_BASE_HOST||location.origin,Se=(e,t=!0)=>d(`${l}/esf-ajax/pano/v/pano_info`,e||h()).then(o=>t?o.result:o),we=e=>d(`${l}/esf-ajax/property/pano/pano_biz_info`,e||h()).then(t=>t.result),ct=e=>d(`${l}/esf-ajax/property/recommend/combo`,e||h()).then(t=>t.data),ut=e=>d(`${l}/esf-ajax/pano/v/getVoiceExtend`,e||h()).then(t=>t.result),dt=(e,t)=>d(`${l}/esf-ajax/property/pano/takelook_list`,f({},h({brokerId:e,use_type:t}))).then(o=>o.result),lt=e=>{var t,o;return d(`${l}/esf-ajax/broker/info`,C(f({},h()),{broker_id:e,city_id:(o=(t=c.vrBizData)==null?void 0:t.page_config)==null?void 0:o.city_id})).then(r=>r.data)};function ft(e){return d("//api.anjuke.com/broker-vr/askPhone/vr/getRecord",e).then(t=>t.data)}function _t(e){return G("//api.anjuke.com/broker-vr/askPhone/vr/applyAuthorize",e,{withCredentials:!0}).then(()=>!0)}function pt(e){return G(`${l}/esf-ajax/pano/std/vrview/comment`,e)}function mt(e){return d(`${l}/esf-ajax/pano/v/user_portrait`,e).then(t=>t.result)}const gt=(e,t)=>d(e,t).then(o=>o.data);function Et(e){return d(`${l}/member/common/getSecretPhone`,e).then(t=>t.data)}const ht=`${l}/esf-ajax/pano`;function h(e={}){const t=E("entry_source");return{params:JSON.stringify(C(f(f({},p),e),{entry_source:t})),type:E("type"),p:E("p"),cv:p.cv,app:p.app}}const Ae=!1;console.log("isDev env",Ae);const A="https://pages.anjukestatic.com/",v="v5.5.2-2022.8.15-19.18.50-a58",ve=`${A}usersite/touch/vr-teg/${v}/static/js/main.js`,Ce=`${A}usersite/touch/vr-teg/${v}/static/js/lib.js`,Ie=`${A}usersite/touch/vr-teg/${v}/aihouse/aihouse.js`,Pe=`${A}usersite/touch/vr-teg/${v}/vrchat/vr-chat-sdk.js`,Re=`${A}usersite/touch/vr-teg/${v}/`,De="reactRoot",Q="vrRoot",Ot="vr-achor",St="VR_ACHOR_BUILD_EVENT";function j(e){return Object.prototype.toString.call(e)==="[object Object]"}function Te(e){return Array.isArray(e)}function T(e,...t){return t.reduce((o,r)=>Object.keys(r).reduce((n,s)=>{const i=r[s];return j(i)?n[s]=T(n[s]?n[s]:{},i):Te(i)?n[s]=i.map((u,m)=>{if(j(u)){const b=n[s]?n[s]:[];return T(b[m]?b[m]:{},u)}else return u}):n[s]=i,n},o),e)}function wt(){var e;return window.VRHOUSE_SPACE&&window.VRHOUSE_SPACE[`room${(e=c.vrData)!=null&&e.extend.is_2d?"2D":""}Module`]}function At(){return window.VRHOUSE_SPACE.houseModule}function Me(){return window.VRHOUSE_SPACE.ruler}function vt(){return window.VRHOUSE_SPACE.system}function Ct(){return window.VRHOUSE_SPACE.aiHouse}function It(){return window.VRHOUSE_SPACE.chat}const _={room:{},house:{}},Le={room:{DEFAULT_UI_RENDERED_CB:le}};function be(e,t){for(const o in t)_[e][o]||(_[e][o]=new Set),_[e][o].add(t[o])}function ye(e){for(const t in e){const o=e[t];for(const r in o)_[t][r]||(_[t][r]=new Set),_[t][r].add(o[r])}}function ke(e){const t={};for(const o in _[e])t[o]=(...r)=>{_[e][o].forEach(n=>n(...r))};return t}const Ue=()=>({crossOrigin:null,rendererId:Q,uiUrl:null,dataFrom:{},DISCLAIMER_CUSTOM:"",HOTSPOT_IMG:"",IS_AREA_DISPLAY:!0,IS_HOTSPOT_IMG_DISPLAY:!0,NO_PANO_AUTOPLAY:!0,IS_NEED_ACCOMPANY_VOICE:!1,IS_SHOW_BIG_GUIDE_TAB:!0,IS_SHOW_COMPASS_DIRECTION:!0,MINI_STEREO_FLOORPLAN_DEFAULT:"2D",MINI_STEREO_FLOORPLAN_TEXT:"\u6237\u578B\u56FE/3D\u6A21\u578B",PANO_HOTSPOT_TEXT:"",ROTATION_TIME:0,RULER_BTN_DEFAULT_VALUE:!1,SAFE_TOP_HEIGHT:"34",MODULE:[f({key:"room",IS_SHOW_FLOORPLAN:!0,plate:{img:"",text:"",visible:!0}},ke("room")),{key:"house",IS_SHOW_BIG_GUIDE_TAB:!0,ROTATION_TIME:0}],CUSTOMER:[],SDK:[],STYLE_COLOR:J?"#ff552e":"#23C993",LIB_URLS:{domain:Re},VRCHAT_CONFIG:{IS_ENABLE_VR_CHAT:!0}});function Be(){Me().hide(!0)}function je(e={config:{},listeners:{}}){return ye(T({},Le,e.listeners)),window.VRHOUSE_CONFIG=T({},Ue(),e==null?void 0:e.config),e==null?void 0:e.vrDataPromise.then(t=>{window.VRHOUSE_CONFIG.dataFrom={house:t.vrdata,type:`${t.extend.is_2d?"2":"3"}D`},window.buildUI=function(o){c.vrBuildUiHook=o},c.vrData=t}).then(()=>Promise.all([R(()=>import(ve),[]),R(()=>import(Ce),[])]).catch(()=>{})).then(()=>(c.vr_loaded_time=Date.now(),new Promise(t=>{be("room",{DEFAULT_UI_RENDERED_CB:()=>{c.vr_rended_time=Date.now(),t(void 0)}})}))).then(Be)}function Ne(e){var o;const t=c.vrBizData;e.IS_SHOW_COMPASS_DIRECTION=(o=t.vrhouse_config)==null?void 0:o.is_show_compass_direction}function He(e){var o,r,n;const t=c.vrBizData;(o=t.vrhouse_config)!=null&&o.hide_rooms&&(e.HIDE_ROOMS={isFuzzyQuery:(r=t.vrhouse_config)==null?void 0:r.hide_rooms.fuzzy_query,queryNames:((n=t.vrhouse_config)==null?void 0:n.hide_rooms.query_names)||[]})}function Ve(e){var o;const t=c.vrBizData;e.MINI_STEREO_FLOORPLAN_DEFAULT=(o=t.vrhouse_config)==null?void 0:o.mini_stereo_floorplan_default}function xe(e){He(e),Ne(e),Ve(e)}const L=e=>{const t=document.createElement("div");return e&&(t.id=e),t},N=L(De),H=L(Q),V=L(""),M=document.getElementById("root"),We=()=>{const e=["fixed","inset-0"],t=["pointer-events-none"];H.classList.add(...e),N.classList.add(...e,...t),V.classList.add(...e,...t),M.appendChild(H),M.appendChild(N),M.appendChild(V)},Pt=(e,t)=>e?t:null,$e=()=>{const e=document.getElementById("preload-page");e?e.remove():window._panoMask&&window._panoMask.closePreload()};function ze(e){var o;(o=c.vrBizData.page_config)!=null&&o.is_open_ai_house&&e.SDK.push({des:"aiHouse",inLoadName:"aiHouse",url:Ie,style:""})}function Fe(e){e.CUSTOMER.push({key:"vrchat",inLoadName:"vrchat",url:Pe})}function qe(e){ze(e),Fe(e)}function Ge(e,t,o){const r=new URL(e);return r.searchParams.set(t,o),r}const Ye=(e,t,o)=>{var r,n;+((r=e.extend)==null?void 0:r.sv)!==t&&!((n=e.extend)!=null&&n.is_2d)&&(location.href=Ge(location.href,"type",o).href)},Ke=5,Je="103",w={SDK:[],CUSTOMER:[],MODULE:[{key:"room"},{key:"house"}]},Qe={room:{UI_SHOW_CB:()=>{R(()=>import("./index.f2c968bf.js").then(function(e){return e.aB}),["assets/index.f2c968bf.js","assets/index.453de85d.css","assets/cls.c404a3f4.js","assets/cls.96675fee.css"]),$e()},onClickInBackgroundForClear:()=>!1}};let x=null;We();Promise.all([we(),Se()]).then(e=>{c.vrBizData=e[0],Ye(e[1],Ke,Je),x=Promise.resolve(e[1])}).then(Xe).then(Ze).then(()=>xe(w)).then(()=>qe(w)).then(()=>{je({listeners:Qe,config:w,vrDataPromise:x})}).catch(e=>{console.log(e),R(()=>import("./error.518d9151.js"),["assets/error.518d9151.js","assets/cls.c404a3f4.js","assets/cls.96675fee.css"])});function Xe(){w.CLICK_CB=e=>console.log("CLICK_CB",e)}function Ze(){var e,t,o,r,n,s;w.MODULE[0].plate={img:(t=(e=c.vrBizData)==null?void 0:e.vrhouse_config)==null?void 0:t.hotspot_img,text:(r=(o=c.vrBizData)==null?void 0:o.vrhouse_config)==null?void 0:r.pano_hotspot_text,visible:(s=(n=c.vrBizData)==null?void 0:n.vrhouse_config)==null?void 0:s.is_hotspot_img_display}}export{dt as $,D as A,rt as B,ge as C,g as D,d as E,st as F,ht as G,K as H,gt as I,Se as J,we as K,ut as L,de as M,Et as N,ct as O,$e as P,St as Q,Ee as R,lt as S,I as T,ft as U,Ot as V,me as W,pt as X,nt as Y,h as Z,R as _,tt as __vite_legacy_guard,A as a,mt as a0,P as a1,_t as a2,at as a3,c as b,Ct as c,L as d,J as e,be as f,It as g,Me as h,Oe as i,p as j,E as k,wt as l,S as m,it as n,le as o,vt as p,xe as q,N as r,qe as s,T as t,Ue as u,H as v,ue as w,At as x,Pt as y,ot as z};