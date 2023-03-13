(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Is(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Es(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?Pc(r):Es(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ce(t))return t;if(te(t))return t}}const Ac=/;(?![^(]*\))/g,Cc=/:([^]+)/,Oc=/\/\*.*?\*\//gs;function Pc(t){const e={};return t.replace(Oc,"").split(Ac).forEach(n=>{if(n){const r=n.split(Cc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ws(t){let e="";if(ce(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=ws(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dc=Is(kc);function Co(t){return!!t||t===""}const Nc=t=>ce(t)?t:t==null?"":B(t)||te(t)&&(t.toString===Do||!$(t.toString))?JSON.stringify(t,Oo,2):String(t),Oo=(t,e)=>e&&e.__v_isRef?Oo(t,e.value):jt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Po(e)?{[`Set(${e.size})`]:[...e.values()]}:te(e)&&!B(e)&&!No(e)?String(e):e,Z={},Ht=[],De=()=>{},Mc=()=>!1,xc=/^on[^a-z]/,br=t=>xc.test(t),Ts=t=>t.startsWith("onUpdate:"),pe=Object.assign,Rs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lc=Object.prototype.hasOwnProperty,V=(t,e)=>Lc.call(t,e),B=Array.isArray,jt=t=>yr(t)==="[object Map]",Po=t=>yr(t)==="[object Set]",$=t=>typeof t=="function",ce=t=>typeof t=="string",Ss=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",ko=t=>te(t)&&$(t.then)&&$(t.catch),Do=Object.prototype.toString,yr=t=>Do.call(t),Uc=t=>yr(t).slice(8,-1),No=t=>yr(t)==="[object Object]",As=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xn=Is(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fc=/-(\w)/g,Gt=Ir(t=>t.replace(Fc,(e,n)=>n?n.toUpperCase():"")),Bc=/\B([A-Z])/g,nn=Ir(t=>t.replace(Bc,"-$1").toLowerCase()),Mo=Ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),xr=Ir(t=>t?`on${Mo(t)}`:""),yn=(t,e)=>!Object.is(t,e),Qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ci;const $c=()=>ci||(ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ce;class xo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Hc(t){return new xo(t)}function jc(t,e=Ce){e&&e.active&&e.effects.push(t)}function Wc(){return Ce}const Cs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Lo=t=>(t.w&pt)>0,Uo=t=>(t.n&pt)>0,Vc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=pt},zc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Lo(s)&&!Uo(s)?s.delete(t):e[n++]=s,s.w&=~pt,s.n&=~pt}e.length=n}},Zr=new WeakMap;let dn=0,pt=1;const es=30;let Oe;const St=Symbol(""),ts=Symbol("");class Os{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jc(this,r)}run(){if(!this.active)return this.fn();let e=Oe,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Oe,Oe=this,ut=!0,pt=1<<++dn,dn<=es?Vc(this):li(this),this.fn()}finally{dn<=es&&zc(this),pt=1<<--dn,Oe=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(li(this),this.onStop&&this.onStop(),this.active=!1)}}function li(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const Fo=[];function rn(){Fo.push(ut),ut=!1}function sn(){const t=Fo.pop();ut=t===void 0?!0:t}function _e(t,e,n){if(ut&&Oe){let r=Zr.get(t);r||Zr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Cs()),Bo(s)}}function Bo(t,e){let n=!1;dn<=es?Uo(t)||(t.n|=pt,n=!Lo(t)):n=!t.has(Oe),n&&(t.add(Oe),Oe.deps.push(t))}function Xe(t,e,n,r,s,i){const o=Zr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((u,f)=>{(f==="length"||f>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?As(n)&&a.push(o.get("length")):(a.push(o.get(St)),jt(t)&&a.push(o.get(ts)));break;case"delete":B(t)||(a.push(o.get(St)),jt(t)&&a.push(o.get(ts)));break;case"set":jt(t)&&a.push(o.get(St));break}if(a.length===1)a[0]&&ns(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ns(Cs(c))}}function ns(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&ui(r);for(const r of n)r.computed||ui(r)}function ui(t,e){(t!==Oe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Kc=Is("__proto__,__v_isRef,__isVue"),$o=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ss)),qc=Ps(),Gc=Ps(!1,!0),Jc=Ps(!0),fi=Yc();function Yc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)_e(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rn();const r=K(this)[e].apply(this,n);return sn(),r}}),t}function Xc(t){const e=K(this);return _e(e,"has",t),e.hasOwnProperty(t)}function Ps(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?hl:zo:e?Vo:Wo).get(r))return r;const o=B(r);if(!t){if(o&&V(fi,s))return Reflect.get(fi,s,i);if(s==="hasOwnProperty")return Xc}const a=Reflect.get(r,s,i);return(Ss(s)?$o.has(s):Kc(s))||(t||_e(r,"get",s),e)?a:fe(a)?o&&As(s)?a:a.value:te(a)?t?Ko(a):Mn(a):a}}const Qc=Ho(),Zc=Ho(!0);function Ho(t=!1){return function(n,r,s,i){let o=n[r];if(Jt(o)&&fe(o)&&!fe(s))return!1;if(!t&&(!cr(s)&&!Jt(s)&&(o=K(o),s=K(s)),!B(n)&&fe(o)&&!fe(s)))return o.value=s,!0;const a=B(n)&&As(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,i);return n===K(i)&&(a?yn(s,o)&&Xe(n,"set",r,s):Xe(n,"add",r,s)),c}}function el(t,e){const n=V(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xe(t,"delete",e,void 0),r}function tl(t,e){const n=Reflect.has(t,e);return(!Ss(e)||!$o.has(e))&&_e(t,"has",e),n}function nl(t){return _e(t,"iterate",B(t)?"length":St),Reflect.ownKeys(t)}const jo={get:qc,set:Qc,deleteProperty:el,has:tl,ownKeys:nl},rl={get:Jc,set(t,e){return!0},deleteProperty(t,e){return!0}},sl=pe({},jo,{get:Gc,set:Zc}),ks=t=>t,Er=t=>Reflect.getPrototypeOf(t);function Vn(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&_e(s,"get",e),_e(s,"get",i));const{has:o}=Er(s),a=r?ks:n?xs:In;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&_e(r,"has",t),_e(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Kn(t,e=!1){return t=t.__v_raw,!e&&_e(K(t),"iterate",St),Reflect.get(t,"size",t)}function di(t){t=K(t);const e=K(this);return Er(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function hi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Er(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?yn(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function pi(t){const e=K(this),{has:n,get:r}=Er(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xe(e,"delete",t,void 0),i}function gi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function qn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?ks:t?xs:In;return!t&&_e(a,"iterate",St),o.forEach((u,f)=>r.call(s,c(u),c(f),i))}}function Gn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=jt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?ks:e?xs:In;return!e&&_e(i,"iterate",c?ts:St),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function nt(t){return function(...e){return t==="delete"?!1:this}}function il(){const t={get(i){return Vn(this,i)},get size(){return Kn(this)},has:zn,add:di,set:hi,delete:pi,clear:gi,forEach:qn(!1,!1)},e={get(i){return Vn(this,i,!1,!0)},get size(){return Kn(this)},has:zn,add:di,set:hi,delete:pi,clear:gi,forEach:qn(!1,!0)},n={get(i){return Vn(this,i,!0)},get size(){return Kn(this,!0)},has(i){return zn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:qn(!0,!1)},r={get(i){return Vn(this,i,!0,!0)},get size(){return Kn(this,!0)},has(i){return zn.call(this,i,!0)},add:nt("add"),set:nt("set"),delete:nt("delete"),clear:nt("clear"),forEach:qn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gn(i,!1,!1),n[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),r[i]=Gn(i,!0,!0)}),[t,n,e,r]}const[ol,al,cl,ll]=il();function Ds(t,e){const n=e?t?ll:cl:t?al:ol;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const ul={get:Ds(!1,!1)},fl={get:Ds(!1,!0)},dl={get:Ds(!0,!1)},Wo=new WeakMap,Vo=new WeakMap,zo=new WeakMap,hl=new WeakMap;function pl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gl(t){return t.__v_skip||!Object.isExtensible(t)?0:pl(Uc(t))}function Mn(t){return Jt(t)?t:Ns(t,!1,jo,ul,Wo)}function ml(t){return Ns(t,!1,sl,fl,Vo)}function Ko(t){return Ns(t,!0,rl,dl,zo)}function Ns(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=gl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Wt(t){return Jt(t)?Wt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function cr(t){return!!(t&&t.__v_isShallow)}function qo(t){return Wt(t)||Jt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Ms(t){return ar(t,"__v_skip",!0),t}const In=t=>te(t)?Mn(t):t,xs=t=>te(t)?Ko(t):t;function Go(t){ut&&Oe&&(t=K(t),Bo(t.dep||(t.dep=Cs())))}function Jo(t,e){t=K(t);const n=t.dep;n&&ns(n)}function fe(t){return!!(t&&t.__v_isRef===!0)}function En(t){return Yo(t,!1)}function _l(t){return Yo(t,!0)}function Yo(t,e){return fe(t)?t:new vl(t,e)}class vl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:In(e)}get value(){return Go(this),this._value}set value(e){const n=this.__v_isShallow||cr(e)||Jt(e);e=n?e:K(e),yn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:In(e),Jo(this))}}function Ie(t){return fe(t)?t.value:t}const bl={get:(t,e,n)=>Ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xo(t){return Wt(t)?t:new Proxy(t,bl)}var Qo;class yl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qo]=!1,this._dirty=!0,this.effect=new Os(e,()=>{this._dirty||(this._dirty=!0,Jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Go(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qo="__v_isReadonly";function Il(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=De):(r=t.get,s=t.set),new yl(r,s,i||!s,n)}function ft(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wr(i,e,n)}return s}function Ne(t,e,n,r){if($(t)){const i=ft(t,e,n,r);return i&&ko(i)&&i.catch(o=>{wr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function wr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){ft(c,null,10,[t,o,a]);return}}El(t,n,s,r)}function El(t,e,n,r=!0){console.error(t)}let wn=!1,rs=!1;const ue=[];let He=0;const Vt=[];let Ke=null,Et=0;const Zo=Promise.resolve();let Ls=null;function ea(t){const e=Ls||Zo;return t?e.then(this?t.bind(this):t):e}function wl(t){let e=He+1,n=ue.length;for(;e<n;){const r=e+n>>>1;Tn(ue[r])<t?e=r+1:n=r}return e}function Us(t){(!ue.length||!ue.includes(t,wn&&t.allowRecurse?He+1:He))&&(t.id==null?ue.push(t):ue.splice(wl(t.id),0,t),ta())}function ta(){!wn&&!rs&&(rs=!0,Ls=Zo.then(ra))}function Tl(t){const e=ue.indexOf(t);e>He&&ue.splice(e,1)}function Rl(t){B(t)?Vt.push(...t):(!Ke||!Ke.includes(t,t.allowRecurse?Et+1:Et))&&Vt.push(t),ta()}function mi(t,e=wn?He+1:0){for(;e<ue.length;e++){const n=ue[e];n&&n.pre&&(ue.splice(e,1),e--,n())}}function na(t){if(Vt.length){const e=[...new Set(Vt)];if(Vt.length=0,Ke){Ke.push(...e);return}for(Ke=e,Ke.sort((n,r)=>Tn(n)-Tn(r)),Et=0;Et<Ke.length;Et++)Ke[Et]();Ke=null,Et=0}}const Tn=t=>t.id==null?1/0:t.id,Sl=(t,e)=>{const n=Tn(t)-Tn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ra(t){rs=!1,wn=!0,ue.sort(Sl);const e=De;try{for(He=0;He<ue.length;He++){const n=ue[He];n&&n.active!==!1&&ft(n,null,14)}}finally{He=0,ue.length=0,na(),wn=!1,Ls=null,(ue.length||Vt.length)&&ra()}}function Al(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p&&(s=n.map(v=>ce(v)?v.trim():v)),h&&(s=n.map(Qr))}let a,c=r[a=xr(e)]||r[a=xr(Gt(e))];!c&&i&&(c=r[a=xr(nn(e))]),c&&Ne(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ne(u,t,6,s)}}function sa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!$(t)){const c=u=>{const f=sa(u,e,!0);f&&(a=!0,pe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(te(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):pe(o,i),te(t)&&r.set(t,o),o)}function Tr(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,nn(e))||V(t,e))}let Pe=null,Rr=null;function lr(t){const e=Pe;return Pe=t,Rr=t&&t.type.__scopeId||null,e}function ia(t){Rr=t}function oa(){Rr=null}function Ut(t,e=Pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ri(-1);const i=lr(e);let o;try{o=t(...s)}finally{lr(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Lr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:h,data:p,setupState:v,ctx:S,inheritAttrs:P}=t;let F,C;const L=lr(t);try{if(n.shapeFlag&4){const z=s||r;F=$e(f.call(z,z,h,i,v,p,S)),C=c}else{const z=e;F=$e(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),C=e.props?c:Cl(c)}}catch(z){mn.length=0,wr(z,t,1),F=se(Ot)}let k=F;if(C&&P!==!1){const z=Object.keys(C),{shapeFlag:ie}=k;z.length&&ie&7&&(o&&z.some(Ts)&&(C=Ol(C,o)),k=Xt(k,C))}return n.dirs&&(k=Xt(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),F=k,lr(L),F}const Cl=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},Ol=(t,e)=>{const n={};for(const r in t)(!Ts(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Pl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_i(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Tr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?_i(r,o,u):!0:!!o;return!1}function _i(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Tr(n,i))return!0}return!1}function kl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Dl=t=>t.__isSuspense;function Nl(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Rl(t)}function Zn(t,e){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[t]=e}}function je(t,e,n=!1){const r=ae||Pe;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r.proxy):e}}const Jn={};function er(t,e,n){return aa(t,e,n)}function aa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=Wc()===(ae==null?void 0:ae.scope)?ae:null;let c,u=!1,f=!1;if(fe(t)?(c=()=>t.value,u=cr(t)):Wt(t)?(c=()=>t,r=!0):B(t)?(f=!0,u=t.some(k=>Wt(k)||cr(k)),c=()=>t.map(k=>{if(fe(k))return k.value;if(Wt(k))return Tt(k);if($(k))return ft(k,a,2)})):$(t)?e?c=()=>ft(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ne(t,a,3,[p])}:c=De,e&&r){const k=c;c=()=>Tt(k())}let h,p=k=>{h=C.onStop=()=>{ft(k,a,4)}},v;if(An)if(p=De,e?n&&Ne(e,a,3,[c(),f?[]:void 0,p]):c(),s==="sync"){const k=Ru();v=k.__watcherHandles||(k.__watcherHandles=[])}else return De;let S=f?new Array(t.length).fill(Jn):Jn;const P=()=>{if(C.active)if(e){const k=C.run();(r||u||(f?k.some((z,ie)=>yn(z,S[ie])):yn(k,S)))&&(h&&h(),Ne(e,a,3,[k,S===Jn?void 0:f&&S[0]===Jn?[]:S,p]),S=k)}else C.run()};P.allowRecurse=!!e;let F;s==="sync"?F=P:s==="post"?F=()=>me(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),F=()=>Us(P));const C=new Os(c,F);e?n?P():S=C.run():s==="post"?me(C.run.bind(C),a&&a.suspense):C.run();const L=()=>{C.stop(),a&&a.scope&&Rs(a.scope.effects,C)};return v&&v.push(L),L}function Ml(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?ca(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ae;Qt(this);const a=aa(s,i.bind(r),n);return o?Qt(o):At(),a}function ca(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tt(t,e){if(!te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),fe(t))Tt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Tt(t[n],e);else if(Po(t)||jt(t))t.forEach(n=>{Tt(n,e)});else if(No(t))for(const n in t)Tt(t[n],e);return t}function la(t){return $(t)?{setup:t,name:t.name}:t}const tr=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function xl(t,e){fa(t,"a",e)}function Ll(t,e){fa(t,"da",e)}function fa(t,e,n=ae){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Sr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ua(s.parent.vnode)&&Ul(r,e,n,s),s=s.parent}}function Ul(t,e,n,r){const s=Sr(e,t,r,!0);ha(()=>{Rs(r[e],s)},n)}function Sr(t,e,n=ae,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rn(),Qt(n);const a=Ne(e,n,t,o);return At(),sn(),a});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=ae)=>(!An||t==="sp")&&Sr(t,(...r)=>e(...r),n),Fl=Ze("bm"),da=Ze("m"),Bl=Ze("bu"),$l=Ze("u"),Hl=Ze("bum"),ha=Ze("um"),jl=Ze("sp"),Wl=Ze("rtg"),Vl=Ze("rtc");function zl(t,e=ae){Sr("ec",t,e)}function vi(t,e){const n=Pe;if(n===null)return t;const r=Or(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Z]=e[i];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&Tt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function vt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rn(),Ne(c,n,8,[t.el,a,t,e]),sn())}}const Kl=Symbol(),ss=t=>t?Ta(t)?Or(t)||t.proxy:ss(t.parent):null,gn=pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ss(t.parent),$root:t=>ss(t.root),$emit:t=>t.emit,$options:t=>Fs(t),$forceUpdate:t=>t.f||(t.f=()=>Us(t.update)),$nextTick:t=>t.n||(t.n=ea.bind(t.proxy)),$watch:t=>Ml.bind(t)}),Ur=(t,e)=>t!==Z&&!t.__isScriptSetup&&V(t,e),ql={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ur(r,e))return o[e]=1,r[e];if(s!==Z&&V(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&V(u,e))return o[e]=3,i[e];if(n!==Z&&V(n,e))return o[e]=4,n[e];is&&(o[e]=0)}}const f=gn[e];let h,p;if(f)return e==="$attrs"&&_e(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&V(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,V(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ur(s,e)?(s[e]=n,!0):r!==Z&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&V(t,o)||Ur(e,o)||(a=i[0])&&V(a,o)||V(r,o)||V(gn,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let is=!0;function Gl(t){const e=Fs(t),n=t.proxy,r=t.ctx;is=!1,e.beforeCreate&&bi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:v,updated:S,activated:P,deactivated:F,beforeDestroy:C,beforeUnmount:L,destroyed:k,unmounted:z,render:ie,renderTracked:le,renderTriggered:ve,errorCaptured:Te,serverPrefetch:xe,expose:ye,inheritAttrs:tt,components:Le,directives:Nt,filters:mt}=e;if(u&&Jl(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Y in o){const G=o[Y];$(G)&&(r[Y]=G.bind(n))}if(s){const Y=s.call(n,n);te(Y)&&(t.data=Mn(Y))}if(is=!0,i)for(const Y in i){const G=i[Y],Re=$(G)?G.bind(n,n):$(G.get)?G.get.bind(n,n):De,_t=!$(G)&&$(G.set)?G.set.bind(n):De,Se=Ee({get:Re,set:_t});Object.defineProperty(r,Y,{enumerable:!0,configurable:!0,get:()=>Se.value,set:ge=>Se.value=ge})}if(a)for(const Y in a)pa(a[Y],r,n,Y);if(c){const Y=$(c)?c.call(n):c;Reflect.ownKeys(Y).forEach(G=>{Zn(G,Y[G])})}f&&bi(f,t,"c");function ne(Y,G){B(G)?G.forEach(Re=>Y(Re.bind(n))):G&&Y(G.bind(n))}if(ne(Fl,h),ne(da,p),ne(Bl,v),ne($l,S),ne(xl,P),ne(Ll,F),ne(zl,Te),ne(Vl,le),ne(Wl,ve),ne(Hl,L),ne(ha,z),ne(jl,xe),B(ye))if(ye.length){const Y=t.exposed||(t.exposed={});ye.forEach(G=>{Object.defineProperty(Y,G,{get:()=>n[G],set:Re=>n[G]=Re})})}else t.exposed||(t.exposed={});ie&&t.render===De&&(t.render=ie),tt!=null&&(t.inheritAttrs=tt),Le&&(t.components=Le),Nt&&(t.directives=Nt)}function Jl(t,e,n=De,r=!1){B(t)&&(t=os(t));for(const s in t){const i=t[s];let o;te(i)?"default"in i?o=je(i.from||s,i.default,!0):o=je(i.from||s):o=je(i),fe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function bi(t,e,n){Ne(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pa(t,e,n,r){const s=r.includes(".")?ca(n,r):()=>n[r];if(ce(t)){const i=e[t];$(i)&&er(s,i)}else if($(t))er(s,t.bind(n));else if(te(t))if(B(t))t.forEach(i=>pa(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&er(s,i,t)}}function Fs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ur(c,u,o,!0)),ur(c,e,o)),te(e)&&i.set(e,c),c}function ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ur(t,i,n,!0),s&&s.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Yl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yl={data:yi,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:yt,directives:yt,watch:Ql,provide:yi,inject:Xl};function yi(t,e){return e?t?function(){return pe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Xl(t,e){return yt(os(t),os(e))}function os(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function yt(t,e){return t?pe(pe(Object.create(null),t),e):e}function Ql(t,e){if(!t)return e;if(!e)return t;const n=pe(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function Zl(t,e,n,r=!1){const s={},i={};ar(i,Cr,1),t.propsDefaults=Object.create(null),ga(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ml(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function eu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Tr(t.emitsOptions,p))continue;const v=e[p];if(c)if(V(i,p))v!==i[p]&&(i[p]=v,u=!0);else{const S=Gt(p);s[S]=as(c,a,S,v,t,!1)}else v!==i[p]&&(i[p]=v,u=!0)}}}else{ga(t,e,s,i)&&(u=!0);let f;for(const h in a)(!e||!V(e,h)&&((f=nn(h))===h||!V(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=as(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!V(e,h))&&(delete i[h],u=!0)}u&&Xe(t,"set","$attrs")}function ga(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Xn(c))continue;const u=e[c];let f;s&&V(s,f=Gt(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Tr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=K(n),u=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=as(s,c,h,u[h],t,!V(u,h))}}return o}function as(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=V(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&$(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Qt(s),r=u[n]=c.call(null,e),At())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}function ma(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[p,v]=ma(h,e,!0);pe(o,p),v&&a.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return te(t)&&r.set(t,Ht),Ht;if(B(i))for(let f=0;f<i.length;f++){const h=Gt(i[f]);Ii(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=Gt(f);if(Ii(h)){const p=i[f],v=o[h]=B(p)||$(p)?{type:p}:Object.assign({},p);if(v){const S=Ti(Boolean,v.type),P=Ti(String,v.type);v[0]=S>-1,v[1]=P<0||S<P,(S>-1||V(v,"default"))&&a.push(h)}}}const u=[o,a];return te(t)&&r.set(t,u),u}function Ii(t){return t[0]!=="$"}function Ei(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function wi(t,e){return Ei(t)===Ei(e)}function Ti(t,e){return B(e)?e.findIndex(n=>wi(n,t)):$(e)&&wi(e,t)?0:-1}const _a=t=>t[0]==="_"||t==="$stable",Bs=t=>B(t)?t.map($e):[$e(t)],tu=(t,e,n)=>{if(e._n)return e;const r=Ut((...s)=>Bs(e(...s)),n);return r._c=!1,r},va=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_a(s))continue;const i=t[s];if($(i))e[s]=tu(s,i,r);else if(i!=null){const o=Bs(i);e[s]=()=>o}}},ba=(t,e)=>{const n=Bs(e);t.slots.default=()=>n},nu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),ar(e,"_",n)):va(e,t.slots={})}else t.slots={},e&&ba(t,e);ar(t.slots,Cr,1)},ru=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(pe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,va(e,s)),o=e}else e&&(ba(t,e),o={default:1});if(i)for(const a in s)!_a(a)&&!(a in o)&&delete s[a]};function ya(){return{app:null,config:{isNativeTag:Mc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function iu(t,e){return function(r,s=null){$(r)||(r=Object.assign({},r)),s!=null&&!te(s)&&(s=null);const i=ya(),o=new Set;let a=!1;const c=i.app={_uid:su++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Su,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(c,...f)):$(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,h){if(!a){const p=se(r,s);return p.appContext=i,f&&e?e(p,u):t(p,u,h),a=!0,c._container=u,u.__vue_app__=c,Or(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c}};return c}}function cs(t,e,n,r,s=!1){if(B(t)){t.forEach((p,v)=>cs(p,e&&(B(e)?e[v]:e),n,r,s));return}if(tr(r)&&!s)return;const i=r.shapeFlag&4?Or(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(ce(u)?(f[u]=null,V(h,u)&&(h[u]=null)):fe(u)&&(u.value=null)),$(c))ft(c,a,12,[o,f]);else{const p=ce(c),v=fe(c);if(p||v){const S=()=>{if(t.f){const P=p?V(h,c)?h[c]:f[c]:c.value;s?B(P)&&Rs(P,i):B(P)?P.includes(i)||P.push(i):p?(f[c]=[i],V(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,V(h,c)&&(h[c]=o)):v&&(c.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,me(S,n)):S()}}}const me=Nl;function ou(t){return au(t)}function au(t,e){const n=$c();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:v=De,insertStaticContent:S}=t,P=(l,d,g,m=null,b=null,E=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(l===d)return;l&&!un(l,d)&&(m=T(l),ge(l,b,E,!0),l=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:O}=d;switch(y){case Ar:F(l,d,g,m);break;case Ot:C(l,d,g,m);break;case Fr:l==null&&L(d,g,m,R);break;case Be:Le(l,d,g,m,b,E,R,I,w);break;default:O&1?ie(l,d,g,m,b,E,R,I,w):O&6?Nt(l,d,g,m,b,E,R,I,w):(O&64||O&128)&&y.process(l,d,g,m,b,E,R,I,w,W)}N!=null&&b&&cs(N,l&&l.ref,E,d||l,!d)},F=(l,d,g,m)=>{if(l==null)r(d.el=a(d.children),g,m);else{const b=d.el=l.el;d.children!==l.children&&u(b,d.children)}},C=(l,d,g,m)=>{l==null?r(d.el=c(d.children||""),g,m):d.el=l.el},L=(l,d,g,m)=>{[l.el,l.anchor]=S(l.children,d,g,m,l.el,l.anchor)},k=({el:l,anchor:d},g,m)=>{let b;for(;l&&l!==d;)b=p(l),r(l,g,m),l=b;r(d,g,m)},z=({el:l,anchor:d})=>{let g;for(;l&&l!==d;)g=p(l),s(l),l=g;s(d)},ie=(l,d,g,m,b,E,R,I,w)=>{R=R||d.type==="svg",l==null?le(d,g,m,b,E,R,I,w):xe(l,d,b,E,R,I,w)},le=(l,d,g,m,b,E,R,I)=>{let w,y;const{type:N,props:O,shapeFlag:M,transition:U,dirs:j}=l;if(w=l.el=o(l.type,E,O&&O.is,O),M&8?f(w,l.children):M&16&&Te(l.children,w,null,m,b,E&&N!=="foreignObject",R,I),j&&vt(l,null,m,"created"),ve(w,l,l.scopeId,R,m),O){for(const J in O)J!=="value"&&!Xn(J)&&i(w,J,null,O[J],E,l.children,m,b,A);"value"in O&&i(w,"value",null,O.value),(y=O.onVnodeBeforeMount)&&Fe(y,m,l)}j&&vt(l,null,m,"beforeMount");const X=(!b||b&&!b.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,d,g),((y=O&&O.onVnodeMounted)||X||j)&&me(()=>{y&&Fe(y,m,l),X&&U.enter(w),j&&vt(l,null,m,"mounted")},b)},ve=(l,d,g,m,b)=>{if(g&&v(l,g),m)for(let E=0;E<m.length;E++)v(l,m[E]);if(b){let E=b.subTree;if(d===E){const R=b.vnode;ve(l,R,R.scopeId,R.slotScopeIds,b.parent)}}},Te=(l,d,g,m,b,E,R,I,w=0)=>{for(let y=w;y<l.length;y++){const N=l[y]=I?it(l[y]):$e(l[y]);P(null,N,d,g,m,b,E,R,I)}},xe=(l,d,g,m,b,E,R)=>{const I=d.el=l.el;let{patchFlag:w,dynamicChildren:y,dirs:N}=d;w|=l.patchFlag&16;const O=l.props||Z,M=d.props||Z;let U;g&&bt(g,!1),(U=M.onVnodeBeforeUpdate)&&Fe(U,g,d,l),N&&vt(d,l,g,"beforeUpdate"),g&&bt(g,!0);const j=b&&d.type!=="foreignObject";if(y?ye(l.dynamicChildren,y,I,g,m,j,E):R||G(l,d,I,null,g,m,j,E,!1),w>0){if(w&16)tt(I,d,O,M,g,m,b);else if(w&2&&O.class!==M.class&&i(I,"class",null,M.class,b),w&4&&i(I,"style",O.style,M.style,b),w&8){const X=d.dynamicProps;for(let J=0;J<X.length;J++){const re=X[J],Ae=O[re],xt=M[re];(xt!==Ae||re==="value")&&i(I,re,Ae,xt,b,l.children,g,m,A)}}w&1&&l.children!==d.children&&f(I,d.children)}else!R&&y==null&&tt(I,d,O,M,g,m,b);((U=M.onVnodeUpdated)||N)&&me(()=>{U&&Fe(U,g,d,l),N&&vt(d,l,g,"updated")},m)},ye=(l,d,g,m,b,E,R)=>{for(let I=0;I<d.length;I++){const w=l[I],y=d[I],N=w.el&&(w.type===Be||!un(w,y)||w.shapeFlag&70)?h(w.el):g;P(w,y,N,null,m,b,E,R,!0)}},tt=(l,d,g,m,b,E,R)=>{if(g!==m){if(g!==Z)for(const I in g)!Xn(I)&&!(I in m)&&i(l,I,g[I],null,R,d.children,b,E,A);for(const I in m){if(Xn(I))continue;const w=m[I],y=g[I];w!==y&&I!=="value"&&i(l,I,y,w,R,d.children,b,E,A)}"value"in m&&i(l,"value",g.value,m.value)}},Le=(l,d,g,m,b,E,R,I,w)=>{const y=d.el=l?l.el:a(""),N=d.anchor=l?l.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),l==null?(r(y,g,m),r(N,g,m),Te(d.children,g,N,b,E,R,I,w)):O>0&&O&64&&M&&l.dynamicChildren?(ye(l.dynamicChildren,M,g,b,E,R,I),(d.key!=null||b&&d===b.subTree)&&Ia(l,d,!0)):G(l,d,g,N,b,E,R,I,w)},Nt=(l,d,g,m,b,E,R,I,w)=>{d.slotScopeIds=I,l==null?d.shapeFlag&512?b.ctx.activate(d,g,m,R,w):mt(d,g,m,b,E,R,w):cn(l,d,w)},mt=(l,d,g,m,b,E,R)=>{const I=l.component=vu(l,m,b);if(ua(l)&&(I.ctx.renderer=W),bu(I),I.asyncDep){if(b&&b.registerDep(I,ne),!l.el){const w=I.subTree=se(Ot);C(null,w,d,g)}return}ne(I,l,d,g,b,E,R)},cn=(l,d,g)=>{const m=d.component=l.component;if(Pl(l,d,g))if(m.asyncDep&&!m.asyncResolved){Y(m,d,g);return}else m.next=d,Tl(m.update),m.update();else d.el=l.el,m.vnode=d},ne=(l,d,g,m,b,E,R)=>{const I=()=>{if(l.isMounted){let{next:N,bu:O,u:M,parent:U,vnode:j}=l,X=N,J;bt(l,!1),N?(N.el=j.el,Y(l,N,R)):N=j,O&&Qn(O),(J=N.props&&N.props.onVnodeBeforeUpdate)&&Fe(J,U,N,j),bt(l,!0);const re=Lr(l),Ae=l.subTree;l.subTree=re,P(Ae,re,h(Ae.el),T(Ae),l,b,E),N.el=re.el,X===null&&kl(l,re.el),M&&me(M,b),(J=N.props&&N.props.onVnodeUpdated)&&me(()=>Fe(J,U,N,j),b)}else{let N;const{el:O,props:M}=d,{bm:U,m:j,parent:X}=l,J=tr(d);if(bt(l,!1),U&&Qn(U),!J&&(N=M&&M.onVnodeBeforeMount)&&Fe(N,X,d),bt(l,!0),O&&H){const re=()=>{l.subTree=Lr(l),H(O,l.subTree,l,b,null)};J?d.type.__asyncLoader().then(()=>!l.isUnmounted&&re()):re()}else{const re=l.subTree=Lr(l);P(null,re,g,m,l,b,E),d.el=re.el}if(j&&me(j,b),!J&&(N=M&&M.onVnodeMounted)){const re=d;me(()=>Fe(N,X,re),b)}(d.shapeFlag&256||X&&tr(X.vnode)&&X.vnode.shapeFlag&256)&&l.a&&me(l.a,b),l.isMounted=!0,d=g=m=null}},w=l.effect=new Os(I,()=>Us(y),l.scope),y=l.update=()=>w.run();y.id=l.uid,bt(l,!0),y()},Y=(l,d,g)=>{d.component=l;const m=l.vnode.props;l.vnode=d,l.next=null,eu(l,d.props,m,g),ru(l,d.children,g),rn(),mi(),sn()},G=(l,d,g,m,b,E,R,I,w=!1)=>{const y=l&&l.children,N=l?l.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){_t(y,O,g,m,b,E,R,I,w);return}else if(M&256){Re(y,O,g,m,b,E,R,I,w);return}}U&8?(N&16&&A(y,b,E),O!==y&&f(g,O)):N&16?U&16?_t(y,O,g,m,b,E,R,I,w):A(y,b,E,!0):(N&8&&f(g,""),U&16&&Te(O,g,m,b,E,R,I,w))},Re=(l,d,g,m,b,E,R,I,w)=>{l=l||Ht,d=d||Ht;const y=l.length,N=d.length,O=Math.min(y,N);let M;for(M=0;M<O;M++){const U=d[M]=w?it(d[M]):$e(d[M]);P(l[M],U,g,null,b,E,R,I,w)}y>N?A(l,b,E,!0,!1,O):Te(d,g,m,b,E,R,I,w,O)},_t=(l,d,g,m,b,E,R,I,w)=>{let y=0;const N=d.length;let O=l.length-1,M=N-1;for(;y<=O&&y<=M;){const U=l[y],j=d[y]=w?it(d[y]):$e(d[y]);if(un(U,j))P(U,j,g,null,b,E,R,I,w);else break;y++}for(;y<=O&&y<=M;){const U=l[O],j=d[M]=w?it(d[M]):$e(d[M]);if(un(U,j))P(U,j,g,null,b,E,R,I,w);else break;O--,M--}if(y>O){if(y<=M){const U=M+1,j=U<N?d[U].el:m;for(;y<=M;)P(null,d[y]=w?it(d[y]):$e(d[y]),g,j,b,E,R,I,w),y++}}else if(y>M)for(;y<=O;)ge(l[y],b,E,!0),y++;else{const U=y,j=y,X=new Map;for(y=j;y<=M;y++){const be=d[y]=w?it(d[y]):$e(d[y]);be.key!=null&&X.set(be.key,y)}let J,re=0;const Ae=M-j+1;let xt=!1,ii=0;const ln=new Array(Ae);for(y=0;y<Ae;y++)ln[y]=0;for(y=U;y<=O;y++){const be=l[y];if(re>=Ae){ge(be,b,E,!0);continue}let Ue;if(be.key!=null)Ue=X.get(be.key);else for(J=j;J<=M;J++)if(ln[J-j]===0&&un(be,d[J])){Ue=J;break}Ue===void 0?ge(be,b,E,!0):(ln[Ue-j]=y+1,Ue>=ii?ii=Ue:xt=!0,P(be,d[Ue],g,null,b,E,R,I,w),re++)}const oi=xt?cu(ln):Ht;for(J=oi.length-1,y=Ae-1;y>=0;y--){const be=j+y,Ue=d[be],ai=be+1<N?d[be+1].el:m;ln[y]===0?P(null,Ue,g,ai,b,E,R,I,w):xt&&(J<0||y!==oi[J]?Se(Ue,g,ai,2):J--)}}},Se=(l,d,g,m,b=null)=>{const{el:E,type:R,transition:I,children:w,shapeFlag:y}=l;if(y&6){Se(l.component.subTree,d,g,m);return}if(y&128){l.suspense.move(d,g,m);return}if(y&64){R.move(l,d,g,W);return}if(R===Be){r(E,d,g);for(let O=0;O<w.length;O++)Se(w[O],d,g,m);r(l.anchor,d,g);return}if(R===Fr){k(l,d,g);return}if(m!==2&&y&1&&I)if(m===0)I.beforeEnter(E),r(E,d,g),me(()=>I.enter(E),b);else{const{leave:O,delayLeave:M,afterLeave:U}=I,j=()=>r(E,d,g),X=()=>{O(E,()=>{j(),U&&U()})};M?M(E,j,X):X()}else r(E,d,g)},ge=(l,d,g,m=!1,b=!1)=>{const{type:E,props:R,ref:I,children:w,dynamicChildren:y,shapeFlag:N,patchFlag:O,dirs:M}=l;if(I!=null&&cs(I,null,g,l,!0),N&256){d.ctx.deactivate(l);return}const U=N&1&&M,j=!tr(l);let X;if(j&&(X=R&&R.onVnodeBeforeUnmount)&&Fe(X,d,l),N&6)_(l.component,g,m);else{if(N&128){l.suspense.unmount(g,m);return}U&&vt(l,null,d,"beforeUnmount"),N&64?l.type.remove(l,d,g,b,W,m):y&&(E!==Be||O>0&&O&64)?A(y,d,g,!1,!0):(E===Be&&O&384||!b&&N&16)&&A(w,d,g),m&&Mt(l)}(j&&(X=R&&R.onVnodeUnmounted)||U)&&me(()=>{X&&Fe(X,d,l),U&&vt(l,null,d,"unmounted")},g)},Mt=l=>{const{type:d,el:g,anchor:m,transition:b}=l;if(d===Be){Wn(g,m);return}if(d===Fr){z(l);return}const E=()=>{s(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(l.shapeFlag&1&&b&&!b.persisted){const{leave:R,delayLeave:I}=b,w=()=>R(g,E);I?I(l.el,E,w):w()}else E()},Wn=(l,d)=>{let g;for(;l!==d;)g=p(l),s(l),l=g;s(d)},_=(l,d,g)=>{const{bum:m,scope:b,update:E,subTree:R,um:I}=l;m&&Qn(m),b.stop(),E&&(E.active=!1,ge(R,l,d,g)),I&&me(I,d),me(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},A=(l,d,g,m=!1,b=!1,E=0)=>{for(let R=E;R<l.length;R++)ge(l[R],d,g,m,b)},T=l=>l.shapeFlag&6?T(l.component.subTree):l.shapeFlag&128?l.suspense.next():p(l.anchor||l.el),D=(l,d,g)=>{l==null?d._vnode&&ge(d._vnode,null,null,!0):P(d._vnode||null,l,d,null,null,null,g),mi(),na(),d._vnode=l},W={p:P,um:ge,m:Se,r:Mt,mt,mc:Te,pc:G,pbc:ye,n:T,o:t};let ee,H;return e&&([ee,H]=e(W)),{render:D,hydrate:ee,createApp:iu(D,ee)}}function bt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ia(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=it(s[i]),a.el=o.el),n||Ia(o,a)),a.type===Ar&&(a.el=o.el)}}function cu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lu=t=>t.__isTeleport,Be=Symbol(void 0),Ar=Symbol(void 0),Ot=Symbol(void 0),Fr=Symbol(void 0),mn=[];let ke=null;function Yt(t=!1){mn.push(ke=t?null:[])}function uu(){mn.pop(),ke=mn[mn.length-1]||null}let Rn=1;function Ri(t){Rn+=t}function Ea(t){return t.dynamicChildren=Rn>0?ke||Ht:null,uu(),Rn>0&&ke&&ke.push(t),t}function Sn(t,e,n,r,s,i){return Ea(oe(t,e,n,r,s,i,!0))}function fu(t,e,n,r,s){return Ea(se(t,e,n,r,s,!0))}function ls(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Cr="__vInternal",wa=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ce(t)||fe(t)||$(t)?{i:Pe,r:t,k:e,f:!!n}:t:null;function oe(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wa(e),ref:e&&nr(e),scopeId:Rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return a?($s(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),Rn>0&&!o&&ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ke.push(c),c}const se=du;function du(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Kl)&&(t=Ot),ls(t)){const a=Xt(t,e,!0);return n&&$s(a,n),Rn>0&&!i&&ke&&(a.shapeFlag&6?ke[ke.indexOf(t)]=a:ke.push(a)),a.patchFlag|=-2,a}if(wu(t)&&(t=t.__vccOpts),e){e=hu(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=ws(a)),te(c)&&(qo(c)&&!B(c)&&(c=pe({},c)),e.style=Es(c))}const o=ce(t)?1:Dl(t)?128:lu(t)?64:te(t)?4:$(t)?2:0;return oe(t,e,n,r,s,o,i,!0)}function hu(t){return t?qo(t)||Cr in t?pe({},t):t:null}function Xt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?gu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&wa(a),ref:e&&e.ref?n&&s?B(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xt(t.ssContent),ssFallback:t.ssFallback&&Xt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qe(t=" ",e=0){return se(Ar,null,t,e)}function pu(t="",e=!1){return e?(Yt(),fu(Ot,null,t)):se(Ot,null,t)}function $e(t){return t==null||typeof t=="boolean"?se(Ot):B(t)?se(Be,null,t.slice()):typeof t=="object"?it(t):se(Ar,null,String(t))}function it(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xt(t)}function $s(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$s(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Cr in e)?e._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),r&64?(n=16,e=[qe(e)]):n=8);t.children=e,t.shapeFlag|=n}function gu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ws([e.class,r.class]));else if(s==="style")e.style=Es([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Ne(t,e,7,[n,r])}const mu=ya();let _u=0;function vu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mu,i={uid:_u++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ma(r,s),emitsOptions:sa(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Al.bind(null,i),t.ce&&t.ce(i),i}let ae=null;const Qt=t=>{ae=t,t.scope.on()},At=()=>{ae&&ae.scope.off(),ae=null};function Ta(t){return t.vnode.shapeFlag&4}let An=!1;function bu(t,e=!1){An=e;const{props:n,children:r}=t.vnode,s=Ta(t);Zl(t,n,s,e),nu(t,r);const i=s?yu(t,e):void 0;return An=!1,i}function yu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ms(new Proxy(t.ctx,ql));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Eu(t):null;Qt(t),rn();const i=ft(r,t,0,[t.props,s]);if(sn(),At(),ko(i)){if(i.then(At,At),e)return i.then(o=>{Si(t,o,e)}).catch(o=>{wr(o,t,0)});t.asyncDep=i}else Si(t,i,e)}else Ra(t,e)}function Si(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=Xo(e)),Ra(t,n)}let Ai;function Ra(t,e,n){const r=t.type;if(!t.render){if(!e&&Ai&&!r.render){const s=r.template||Fs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=Ai(s,u)}}t.render=r.render||De}Qt(t),rn(),Gl(t),sn(),At()}function Iu(t){return new Proxy(t.attrs,{get(e,n){return _e(t,"get","$attrs"),e[n]}})}function Eu(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Iu(t))},slots:t.slots,emit:t.emit,expose:e}}function Or(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xo(Ms(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gn)return gn[n](t)},has(e,n){return n in e||n in gn}}))}function wu(t){return $(t)&&"__vccOpts"in t}const Ee=(t,e)=>Il(t,e,An);function Sa(t,e,n){const r=arguments.length;return r===2?te(e)&&!B(e)?ls(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ls(n)&&(n=[n]),se(t,e,n))}const Tu=Symbol(""),Ru=()=>je(Tu),Su="3.2.47",Au="http://www.w3.org/2000/svg",wt=typeof document<"u"?document:null,Ci=wt&&wt.createElement("template"),Cu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?wt.createElementNS(Au,t):wt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ci.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ci.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ou(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Pu(t,e,n){const r=t.style,s=ce(n);if(n&&!s){if(e&&!ce(e))for(const i in e)n[i]==null&&us(r,i,"");for(const i in n)us(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Oi=/\s*!important$/;function us(t,e,n){if(B(n))n.forEach(r=>us(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ku(t,e);Oi.test(n)?t.setProperty(nn(r),n.replace(Oi,""),"important"):t[r]=n}}const Pi=["Webkit","Moz","ms"],Br={};function ku(t,e){const n=Br[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return Br[e]=r;r=Mo(r);for(let s=0;s<Pi.length;s++){const i=Pi[s]+r;if(i in t)return Br[e]=i}return e}const ki="http://www.w3.org/1999/xlink";function Du(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ki,e.slice(6,e.length)):t.setAttributeNS(ki,e,n);else{const i=Dc(e);n==null||i&&!Co(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Co(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ft(t,e,n,r){t.addEventListener(e,n,r)}function Mu(t,e,n,r){t.removeEventListener(e,n,r)}function xu(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Lu(e);if(r){const u=i[e]=Bu(r,s);Ft(t,a,u,c)}else o&&(Mu(t,a,o,c),i[e]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function Lu(t){let e;if(Di.test(t)){e={};let r;for(;r=t.match(Di);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let $r=0;const Uu=Promise.resolve(),Fu=()=>$r||(Uu.then(()=>$r=0),$r=Date.now());function Bu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne($u(r,n.value),e,5,[r])};return n.value=t,n.attached=Fu(),n}function $u(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ni=/^on[a-z]/,Hu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Ou(t,r,s):e==="style"?Pu(t,n,r):br(e)?Ts(e)||xu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ju(t,e,r,s))?Nu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Du(t,e,r,s))};function ju(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ni.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ni.test(e)&&ce(n)?!1:e in t}const Mi=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Qn(e,n):e};function Wu(t){t.target.composing=!0}function xi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Li={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Mi(s);const i=r||s.props&&s.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Qr(a)),t._assign(a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",Wu),Ft(t,"compositionend",xi),Ft(t,"change",xi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Mi(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Qr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vu=pe({patchProp:Hu},Cu);let Ui;function zu(){return Ui||(Ui=ou(Vu))}const Ku=(...t)=>{const e=zu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function qu(t){return ce(t)?document.querySelector(t):t}var Gu=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ju=Symbol();var Fi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Fi||(Fi={}));function Yu(){const t=Hc(!0),e=t.run(()=>En({}));let n=[],r=[];const s=Ms({install(i){s._a=i,i.provide(Ju,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Gu?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Xu="/Vue3-firebase-chat/assets/logo-da9b9095.svg";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Bt=typeof window<"u";function Qu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Hr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const _n=()=>{},Me=Array.isArray,Zu=/\/$/,ef=t=>t.replace(Zu,"");function jr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=sf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function tf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zt(e.matched[r],n.matched[s])&&Aa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Aa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rf(t[n],e[n]))return!1;return!0}function rf(t,e){return Me(t)?$i(t,e):Me(e)?$i(e,t):t===e}function $i(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Cn;(function(t){t.pop="pop",t.push="push"})(Cn||(Cn={}));var vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vn||(vn={}));function of(t){if(!t)if(Bt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ef(t)}const af=/^[^#]+#/;function cf(t,e){return t.replace(af,"#")+e}function lf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pr=()=>({left:window.pageXOffset,top:window.pageYOffset});function uf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=lf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hi(t,e){return(history.state?history.state.position-e:-1)+t}const fs=new Map;function ff(t,e){fs.set(t,e)}function df(t){const e=fs.get(t);return fs.delete(t),e}let hf=()=>location.protocol+"//"+location.host;function Ca(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Bi(c,"")}return Bi(n,t)+r+s}function pf(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const v=Ca(t,location),S=n.value,P=e.value;let F=0;if(p){if(n.value=v,e.value=p,o&&o===S){o=null;return}F=P?p.position-P.position:0}else r(v);s.forEach(C=>{C(n.value,S,{delta:F,type:Cn.pop,direction:F?F>0?vn.forward:vn.back:vn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const v=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(v),v}function f(){const{history:p}=window;p.state&&p.replaceState(q({},p.state,{scroll:Pr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:u,destroy:h}}function ji(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pr():null}}function gf(t){const{history:e,location:n}=window,r={value:Ca(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:hf()+t+c;try{e[f?"replaceState":"pushState"](u,"",p),s.value=u}catch(v){console.error(v),n[f?"replace":"assign"](p)}}function o(c,u){const f=q({},e.state,ji(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,u){const f=q({},s.value,e.state,{forward:c,scroll:Pr()});i(f.current,f,!0);const h=q({},ji(r.value,c,null),{position:f.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function mf(t){t=of(t);const e=gf(t),n=pf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:cf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _f(t){return typeof t=="string"||t&&typeof t=="object"}function Oa(t){return typeof t=="string"||typeof t=="symbol"}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pa=Symbol("");var Wi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wi||(Wi={}));function en(t,e){return q(new Error,{type:t,[Pa]:!0},e)}function ze(t,e){return t instanceof Error&&Pa in t&&(e==null||!!(t.type&e))}const Vi="[^/]+?",vf={sensitive:!1,strict:!1,start:!0,end:!0},bf=/[.+*?^${}()[\]/\\]/g;function yf(t,e){const n=q({},vf,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const p=u[h];let v=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(bf,"\\$&"),v+=40;else if(p.type===1){const{value:S,repeatable:P,optional:F,regexp:C}=p;i.push({name:S,repeatable:P,optional:F});const L=C||Vi;if(L!==Vi){v+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${L}): `+z.message)}}let k=P?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(k=F&&u.length<2?`(?:/${k})`:"/"+k),F&&(k+="?"),s+=k,v+=20,F&&(v+=-8),P&&(v+=-20),L===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const v=f[p]||"",S=i[p-1];h[S.name]=v&&S.repeatable?v.split("/"):v}return h}function c(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const v of p)if(v.type===0)f+=v.value;else if(v.type===1){const{value:S,repeatable:P,optional:F}=v,C=S in u?u[S]:"";if(Me(C)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const L=Me(C)?C.join("/"):C;if(!L)if(F)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);f+=L}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function If(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ef(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=If(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(zi(r))return 1;if(zi(s))return-1}return s.length-r.length}function zi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wf={type:0,value:""},Tf=/[a-zA-Z0-9_]/;function Rf(t){if(!t)return[[]];if(t==="/")return[[wf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",f="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Tf.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function Sf(t,e,n){const r=yf(Rf(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Af(t,e){const n=[],r=new Map;e=Gi({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const v=!p,S=Cf(f);S.aliasOf=p&&p.record;const P=Gi(e,f),F=[S];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of k)F.push(q({},S,{components:p?p.record.components:S.components,path:z,aliasOf:p?p.record:S}))}let C,L;for(const k of F){const{path:z}=k;if(h&&z[0]!=="/"){const ie=h.record.path,le=ie[ie.length-1]==="/"?"":"/";k.path=h.record.path+(z&&le+z)}if(C=Sf(k,h,P),p?p.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),v&&f.name&&!qi(C)&&o(f.name)),S.children){const ie=S.children;for(let le=0;le<ie.length;le++)i(ie[le],C,p&&p.children[le])}p=p||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return L?()=>{o(L)}:_n}function o(f){if(Oa(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Ef(f,n[h])>=0&&(f.record.path!==n[h].record.path||!ka(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!qi(f)&&r.set(f.record.name,f)}function u(f,h){let p,v={},S,P;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw en(1,{location:f});P=p.record.name,v=q(Ki(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params&&Ki(f.params,p.keys.map(L=>L.name))),S=p.stringify(v)}else if("path"in f)S=f.path,p=n.find(L=>L.re.test(S)),p&&(v=p.parse(S),P=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw en(1,{location:f,currentLocation:h});P=p.record.name,v=q({},h.params,f.params),S=p.stringify(v)}const F=[];let C=p;for(;C;)F.unshift(C.record),C=C.parent;return{name:P,path:S,params:v,matched:F,meta:Pf(F)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ki(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Of(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Of(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function qi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function Gi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ka(t,e){return e.children.some(n=>n===t||ka(t,n))}const Da=/#/g,kf=/&/g,Df=/\//g,Nf=/=/g,Mf=/\?/g,Na=/\+/g,xf=/%5B/g,Lf=/%5D/g,Ma=/%5E/g,Uf=/%60/g,xa=/%7B/g,Ff=/%7C/g,La=/%7D/g,Bf=/%20/g;function Hs(t){return encodeURI(""+t).replace(Ff,"|").replace(xf,"[").replace(Lf,"]")}function $f(t){return Hs(t).replace(xa,"{").replace(La,"}").replace(Ma,"^")}function ds(t){return Hs(t).replace(Na,"%2B").replace(Bf,"+").replace(Da,"%23").replace(kf,"%26").replace(Uf,"`").replace(xa,"{").replace(La,"}").replace(Ma,"^")}function Hf(t){return ds(t).replace(Nf,"%3D")}function jf(t){return Hs(t).replace(Da,"%23").replace(Mf,"%3F")}function Wf(t){return t==null?"":jf(t).replace(Df,"%2F")}function fr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Vf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Na," "),o=i.indexOf("="),a=fr(o<0?i:i.slice(0,o)),c=o<0?null:fr(i.slice(o+1));if(a in e){let u=e[a];Me(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ji(t){let e="";for(let n in t){const r=t[n];if(n=Hf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&ds(i)):[r&&ds(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Kf=Symbol(""),Yi=Symbol(""),js=Symbol(""),Ws=Symbol(""),hs=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(en(4,{from:n,to:e})):h instanceof Error?a(h):_f(h)?a(en(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function Wr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(qf(a)){const u=(a.__vccOpts||a)[e];u&&s.push(ot(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Qu(u)?u.default:u;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&ot(p,n,r,i,o)()}))}}return s}function qf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xi(t){const e=je(js),n=je(Ws),r=Ee(()=>e.resolve(Ie(t.to))),s=Ee(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Zt.bind(null,f));if(p>-1)return p;const v=Qi(c[u-2]);return u>1&&Qi(f)===v&&h[h.length-1].path!==v?h.findIndex(Zt.bind(null,c[u-2])):p}),i=Ee(()=>s.value>-1&&Yf(n.params,r.value.params)),o=Ee(()=>s.value>-1&&s.value===n.matched.length-1&&Aa(n.params,r.value.params));function a(c={}){return Jf(c)?e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(_n):Promise.resolve()}return{route:r,href:Ee(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gf=la({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(t,{slots:e}){const n=Mn(Xi(t)),{options:r}=je(js),s=Ee(()=>({[Zi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$t=Gf;function Jf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zi=(t,e,n)=>t??e??n,Xf=la({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=je(hs),s=Ee(()=>t.route||r.value),i=je(Yi,0),o=Ee(()=>{let u=Ie(i);const{matched:f}=s.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Ee(()=>s.value.matched[o.value]);Zn(Yi,Ee(()=>o.value+1)),Zn(Kf,a),Zn(hs,s);const c=En();return er(()=>[c.value,a.value,t.name],([u,f,h],[p,v,S])=>{f&&(f.instances[h]=u,v&&v!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!Zt(f,v)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return eo(n.default,{Component:p,route:u});const v=h.props[f],S=v?v===!0?u.params:typeof v=="function"?v(u):v:null,F=Sa(p,q({},S,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return eo(n.default,{Component:F,route:u})||F}}});function eo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ua=Xf;function Qf(t){const e=Af(t.routes,t),n=t.parseQuery||Vf,r=t.stringifyQuery||Ji,s=t.history,i=fn(),o=fn(),a=fn(),c=_l(rt);let u=rt;Bt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Hr.bind(null,_=>""+_),h=Hr.bind(null,Wf),p=Hr.bind(null,fr);function v(_,A){let T,D;return Oa(_)?(T=e.getRecordMatcher(_),D=A):D=_,e.addRoute(D,T)}function S(_){const A=e.getRecordMatcher(_);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(_=>_.record)}function F(_){return!!e.getRecordMatcher(_)}function C(_,A){if(A=q({},A||c.value),typeof _=="string"){const l=jr(n,_,A.path),d=e.resolve({path:l.path},A),g=s.createHref(l.fullPath);return q(l,d,{params:p(d.params),hash:fr(l.hash),redirectedFrom:void 0,href:g})}let T;if("path"in _)T=q({},_,{path:jr(n,_.path,A.path).path});else{const l=q({},_.params);for(const d in l)l[d]==null&&delete l[d];T=q({},_,{params:h(_.params)}),A.params=h(A.params)}const D=e.resolve(T,A),W=_.hash||"";D.params=f(p(D.params));const ee=tf(r,q({},_,{hash:$f(W),path:D.path})),H=s.createHref(ee);return q({fullPath:ee,hash:W,query:r===Ji?zf(_.query):_.query||{}},D,{redirectedFrom:void 0,href:H})}function L(_){return typeof _=="string"?jr(n,_,c.value.path):q({},_)}function k(_,A){if(u!==_)return en(8,{from:A,to:_})}function z(_){return ve(_)}function ie(_){return z(q(L(_),{replace:!0}))}function le(_){const A=_.matched[_.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let D=typeof T=="function"?T(_):T;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=L(D):{path:D},D.params={}),q({query:_.query,hash:_.hash,params:"path"in D?{}:_.params},D)}}function ve(_,A){const T=u=C(_),D=c.value,W=_.state,ee=_.force,H=_.replace===!0,l=le(T);if(l)return ve(q(L(l),{state:typeof l=="object"?q({},W,l.state):W,force:ee,replace:H}),A||T);const d=T;d.redirectedFrom=A;let g;return!ee&&nf(r,D,T)&&(g=en(16,{to:d,from:D}),_t(D,D,!0,!1)),(g?Promise.resolve(g):xe(d,D)).catch(m=>ze(m)?ze(m,2)?m:Re(m):Y(m,d,D)).then(m=>{if(m){if(ze(m,2))return ve(q({replace:H},L(m.to),{state:typeof m.to=="object"?q({},W,m.to.state):W,force:ee}),A||d)}else m=tt(d,D,!0,H,W);return ye(d,D,m),m})}function Te(_,A){const T=k(_,A);return T?Promise.reject(T):Promise.resolve()}function xe(_,A){let T;const[D,W,ee]=Zf(_,A);T=Wr(D.reverse(),"beforeRouteLeave",_,A);for(const l of D)l.leaveGuards.forEach(d=>{T.push(ot(d,_,A))});const H=Te.bind(null,_,A);return T.push(H),Lt(T).then(()=>{T=[];for(const l of i.list())T.push(ot(l,_,A));return T.push(H),Lt(T)}).then(()=>{T=Wr(W,"beforeRouteUpdate",_,A);for(const l of W)l.updateGuards.forEach(d=>{T.push(ot(d,_,A))});return T.push(H),Lt(T)}).then(()=>{T=[];for(const l of _.matched)if(l.beforeEnter&&!A.matched.includes(l))if(Me(l.beforeEnter))for(const d of l.beforeEnter)T.push(ot(d,_,A));else T.push(ot(l.beforeEnter,_,A));return T.push(H),Lt(T)}).then(()=>(_.matched.forEach(l=>l.enterCallbacks={}),T=Wr(ee,"beforeRouteEnter",_,A),T.push(H),Lt(T))).then(()=>{T=[];for(const l of o.list())T.push(ot(l,_,A));return T.push(H),Lt(T)}).catch(l=>ze(l,8)?l:Promise.reject(l))}function ye(_,A,T){for(const D of a.list())D(_,A,T)}function tt(_,A,T,D,W){const ee=k(_,A);if(ee)return ee;const H=A===rt,l=Bt?history.state:{};T&&(D||H?s.replace(_.fullPath,q({scroll:H&&l&&l.scroll},W)):s.push(_.fullPath,W)),c.value=_,_t(_,A,T,H),Re()}let Le;function Nt(){Le||(Le=s.listen((_,A,T)=>{if(!Wn.listening)return;const D=C(_),W=le(D);if(W){ve(q(W,{replace:!0}),D).catch(_n);return}u=D;const ee=c.value;Bt&&ff(Hi(ee.fullPath,T.delta),Pr()),xe(D,ee).catch(H=>ze(H,12)?H:ze(H,2)?(ve(H.to,D).then(l=>{ze(l,20)&&!T.delta&&T.type===Cn.pop&&s.go(-1,!1)}).catch(_n),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Y(H,D,ee))).then(H=>{H=H||tt(D,ee,!1),H&&(T.delta&&!ze(H,8)?s.go(-T.delta,!1):T.type===Cn.pop&&ze(H,20)&&s.go(-1,!1)),ye(D,ee,H)}).catch(_n)}))}let mt=fn(),cn=fn(),ne;function Y(_,A,T){Re(_);const D=cn.list();return D.length?D.forEach(W=>W(_,A,T)):console.error(_),Promise.reject(_)}function G(){return ne&&c.value!==rt?Promise.resolve():new Promise((_,A)=>{mt.add([_,A])})}function Re(_){return ne||(ne=!_,Nt(),mt.list().forEach(([A,T])=>_?T(_):A()),mt.reset()),_}function _t(_,A,T,D){const{scrollBehavior:W}=t;if(!Bt||!W)return Promise.resolve();const ee=!T&&df(Hi(_.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return ea().then(()=>W(_,A,ee)).then(H=>H&&uf(H)).catch(H=>Y(H,_,A))}const Se=_=>s.go(_);let ge;const Mt=new Set,Wn={currentRoute:c,listening:!0,addRoute:v,removeRoute:S,hasRoute:F,getRoutes:P,resolve:C,options:t,push:z,replace:ie,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:cn.add,isReady:G,install(_){const A=this;_.component("RouterLink",$t),_.component("RouterView",Ua),_.config.globalProperties.$router=A,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(c)}),Bt&&!ge&&c.value===rt&&(ge=!0,z(s.location).catch(W=>{}));const T={};for(const W in rt)T[W]=Ee(()=>c.value[W]);_.provide(js,A),_.provide(Ws,Mn(T)),_.provide(hs,c);const D=_.unmount;Mt.add(_),_.unmount=function(){Mt.delete(_),Mt.size<1&&(u=rt,Le&&Le(),Le=null,c.value=rt,ge=!1,ne=!1),D()}}};return Wn}function Lt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Zf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Zt(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Zt(u,c))||s.push(c))}return[n,r,s]}function ed(){return je(Ws)}const Vs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},td=t=>(ia("data-v-94d0abdb"),t=t(),oa(),t),nd={class:"greetings"},rd={class:"green"},sd=td(()=>oe("h3",null,[qe(" You’ve successfully created a project with "),oe("a",{href:"https://vitejs.dev/",target:"_blank",rel:"noopener"},"Vite"),qe(" + "),oe("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"Vue 3"),qe(". ")],-1)),id={__name:"HelloWorld",props:{msg:{type:String,required:!0}},setup(t){return(e,n)=>(Yt(),Sn("div",nd,[oe("h1",rd,Nc(t.msg),1),sd]))}},od=Vs(id,[["__scopeId","data-v-94d0abdb"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ad=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,v=u&63;c||(v=64,o||(p=64)),r.push(n[f],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ad(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new cd;const p=i<<2|a>>4;if(r.push(p),u!==64){const v=a<<4&240|u>>2;if(r.push(v),h!==64){const S=u<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ld=function(t){const e=Fa(t);return Ba.encodeByteArray(e,!0)},$a=function(t){return ld(t).replace(/\./g,"")},Ha=function(t){try{return Ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=()=>ud().__FIREBASE_DEFAULTS__,dd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ha(t[1]);return e&&JSON.parse(e)},zs=()=>{try{return fd()||dd()||hd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pd=t=>{var e,n;return(n=(e=zs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gd=()=>{var t;return(t=zs())===null||t===void 0?void 0:t.config},ja=t=>{var e;return(e=zs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function vd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yd(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function Ed(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wd,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xn.prototype.create)}}class xn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Td(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new gt(s,a,r)}}function Td(t,e){return t.replace(Rd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Rd=/\{\$([^}]+)}/g;function Sd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(to(i)&&to(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function to(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ad(t,e){const n=new Cd(t,e);return n.subscribe.bind(n)}class Cd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Od(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vr),s.error===void 0&&(s.error=Vr),s.complete===void 0&&(s.complete=Vr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Od(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new md;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dd(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(t){return t===It?void 0:t}function Dd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Md={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},xd=Q.INFO,Ld={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},Ud=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ld[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=xd,this._logHandler=Ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Md[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const Fd=(t,e)=>e.some(n=>t instanceof n);let no,ro;function Bd(){return no||(no=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $d(){return ro||(ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,ps=new WeakMap,za=new WeakMap,zr=new WeakMap,Ks=new WeakMap;function Hd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Va.set(n,t)}).catch(()=>{}),Ks.set(e,t),e}function jd(t){if(ps.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ps.set(t,e)}let gs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ps.get(t);if(e==="objectStoreNames")return t.objectStoreNames||za.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wd(t){gs=t(gs)}function Vd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kr(this),e,...n);return za.set(r,e.sort?e.sort():[e]),dt(r)}:$d().includes(t)?function(...e){return t.apply(Kr(this),e),dt(Va.get(this))}:function(...e){return dt(t.apply(Kr(this),e))}}function zd(t){return typeof t=="function"?Vd(t):(t instanceof IDBTransaction&&jd(t),Fd(t,Bd())?new Proxy(t,gs):t)}function dt(t){if(t instanceof IDBRequest)return Hd(t);if(zr.has(t))return zr.get(t);const e=zd(t);return e!==t&&(zr.set(t,e),Ks.set(e,t)),e}const Kr=t=>Ks.get(t);function Kd(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dt(o.result),c.oldVersion,c.newVersion,dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const qd=["get","getKey","getAll","getAllKeys","count"],Gd=["put","add","delete","clear"],qr=new Map;function so(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return qr.set(e,i),i}Wd(t=>({...t,get:(e,n,r)=>so(e,n)||t.get(e,n,r),has:(e,n)=>!!so(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ms="@firebase/app",io="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new Wa("@firebase/app"),Xd="@firebase/app-compat",Qd="@firebase/analytics-compat",Zd="@firebase/analytics",eh="@firebase/app-check-compat",th="@firebase/app-check",nh="@firebase/auth",rh="@firebase/auth-compat",sh="@firebase/database",ih="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",ch="@firebase/installations",lh="@firebase/installations-compat",uh="@firebase/messaging",fh="@firebase/messaging-compat",dh="@firebase/performance",hh="@firebase/performance-compat",ph="@firebase/remote-config",gh="@firebase/remote-config-compat",mh="@firebase/storage",_h="@firebase/storage-compat",vh="@firebase/firestore",bh="@firebase/firestore-compat",yh="firebase",Ih="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]",Eh={[ms]:"fire-core",[Xd]:"fire-core-compat",[Zd]:"fire-analytics",[Qd]:"fire-analytics-compat",[th]:"fire-app-check",[eh]:"fire-app-check-compat",[nh]:"fire-auth",[rh]:"fire-auth-compat",[sh]:"fire-rtdb",[ih]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[ch]:"fire-iid",[lh]:"fire-iid-compat",[uh]:"fire-fcm",[fh]:"fire-fcm-compat",[dh]:"fire-perf",[hh]:"fire-perf-compat",[ph]:"fire-rc",[gh]:"fire-rc-compat",[mh]:"fire-gcs",[_h]:"fire-gcs-compat",[vh]:"fire-fst",[bh]:"fire-fst-compat","fire-js":"fire-js",[yh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Map,vs=new Map;function wh(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(vs.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;vs.set(e,t);for(const n of hr.values())wh(n,t);return!0}function Ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new xn("app","Firebase",Th);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=Ih;function qa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_s,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=gd()),!n)throw ht.create("no-options");const i=hr.get(s);if(i){if(dr(n,i.options)&&dr(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new Nd(s);for(const c of vs.values())o.addComponent(c);const a=new Rh(n,r,o);return hr.set(s,a),a}function Sh(t=_s){const e=hr.get(t);if(!e&&t===_s)return qa();if(!e)throw ht.create("no-app",{appName:t});return e}function zt(t,e,n){var r;let s=(r=Eh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}On(new tn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebase-heartbeat-database",Ch=1,Pn="firebase-heartbeat-store";let Gr=null;function Ga(){return Gr||(Gr=Kd(Ah,Ch,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}}}).catch(t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})})),Gr}async function Oh(t){try{return(await Ga()).transaction(Pn).objectStore(Pn).get(Ja(t))}catch(e){if(e instanceof gt)Pt.warn(e.message);else{const n=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function oo(t,e){try{const r=(await Ga()).transaction(Pn,"readwrite");return await r.objectStore(Pn).put(e,Ja(t)),r.done}catch(n){if(n instanceof gt)Pt.warn(n.message);else{const r=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(r.message)}}}function Ja(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=1024,kh=30*24*60*60*1e3;class Dh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ao();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=kh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ao(),{heartbeatsToSend:n,unsentEntries:r}=Nh(this._heartbeatsCache.heartbeats),s=$a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ao(){return new Date().toISOString().substring(0,10)}function Nh(t,e=Ph){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),co(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),co(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?Ed().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Oh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function co(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){On(new tn("platform-logger",e=>new Jd(e),"PRIVATE")),On(new tn("heartbeat",e=>new Dh(e),"PRIVATE")),zt(ms,io,t),zt(ms,io,"esm2017"),zt("fire-js","")}xh("");function qs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ya(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lh=Ya,Xa=new xn("auth","Firebase",Ya());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Wa("@firebase/auth");function rr(t,...e){lo.logLevel<=Q.ERROR&&lo.error(`Auth (${kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,...e){throw Gs(t,...e)}function We(t,...e){return Gs(t,...e)}function Qa(t,e,n){const r=Object.assign(Object.assign({},Lh()),{[e]:n});return new xn("auth","Firebase",r).create(e,{appName:t.name})}function Uh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&we(t,"argument-error"),Qa(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xa.create(t,...e)}function x(t,e,...n){if(!t)throw Gs(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function Qe(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map;function Ye(t){Qe(t instanceof Function,"Expected a class definition");let e=uo.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){const n=Ka(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dr(i,e??{}))return s;we(s,"already-initialized")}return n.initialize({options:e})}function Bh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $h(){return fo()==="http:"||fo()==="https:"}function fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||vd()||"connection"in navigator)?navigator.onLine:!0}function jh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=_d()||bd()}get(){return Hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Un(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return ec(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Za.fetch()(tc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ec(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wh),e);try{const s=new zh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Yn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qa(t,f,u);we(t,f)}}catch(s){if(s instanceof gt)throw s;we(t,"internal-error",{message:String(s)})}}async function $n(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&we(t,"multi-factor-auth-required",{_serverResponse:i}),i}function tc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Js(t.config,s):`${t.config.apiScheme}://${s}`}class zh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),Vh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=We(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function qh(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gh(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=Ys(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bn(Jr(s.auth_time)),issuedAtTime:bn(Jr(s.iat)),expirationTime:bn(Jr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jr(t){return Number(t)*1e3}function Ys(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ha(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Jh(t){const e=Ys(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&Yh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bn(this.lastLoginAt),this.creationTime=bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await kn(t,qh(n,{idToken:r}));x(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ep(i.providerUserInfo):[],a=Zh(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Qh(t){const e=et(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ep(t){return t.map(e=>{var{providerId:n}=e,r=qs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e){const n=await ec(t,{},async()=>{const r=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=tc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Za.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Dn;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ct{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gh(this,e)}reload(){return Qh(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kn(this,Kh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:z,isAnonymous:ie,providerData:le,stsTokenManager:ve}=n;x(k&&ve,e,"internal-error");const Te=Dn.fromJSON(this.name,ve);x(typeof k=="string",e,"internal-error"),st(h,e.name),st(p,e.name),x(typeof z=="boolean",e,"internal-error"),x(typeof ie=="boolean",e,"internal-error"),st(v,e.name),st(S,e.name),st(P,e.name),st(F,e.name),st(C,e.name),st(L,e.name);const xe=new Ct({uid:k,auth:e,email:p,emailVerified:z,displayName:h,isAnonymous:ie,photoURL:S,phoneNumber:v,tenantId:P,stsTokenManager:Te,createdAt:C,lastLoginAt:L});return le&&Array.isArray(le)&&(xe.providerData=le.map(ye=>Object.assign({},ye))),F&&(xe._redirectEventId=F),xe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Dn;s.updateFromServerResponse(n);const i=new Ct({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rc.type="NONE";const ho=rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class Kt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kt(Ye(ho),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ye(ho);const o=sr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=Ct._fromJSON(e,f);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Kt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Kt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cc(e))return"Blackberry";if(lc(e))return"Webos";if(Xs(e))return"Safari";if((e.includes("chrome/")||ic(e))&&!e.includes("edge/"))return"Chrome";if(ac(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sc(t=de()){return/firefox\//i.test(t)}function Xs(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ic(t=de()){return/crios\//i.test(t)}function oc(t=de()){return/iemobile/i.test(t)}function ac(t=de()){return/android/i.test(t)}function cc(t=de()){return/blackberry/i.test(t)}function lc(t=de()){return/webos/i.test(t)}function Dr(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function np(t=de()){var e;return Dr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rp(){return yd()&&document.documentMode===10}function uc(t=de()){return Dr(t)||ac(t)||lc(t)||cc(t)||/windows phone/i.test(t)||oc(t)}function sp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e=[]){let n;switch(t){case"Browser":n=po(de());break;case"Worker":n=`${po(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new go(this),this.idTokenSubscription=new go(this),this.beforeStateQueue=new ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xa,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function on(t){return et(t)}class go{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ad(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ap(t,e,n){const r=on(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=dc(e),{host:o,port:a}=cp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||lp()}function dc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cp(t){const e=dc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mo(o)}}}function mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function up(t,e){return Bn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t,e){return $n(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e){return $n(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function hp(t,e){return $n(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Qs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Nn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Nn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return fp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dp(e,{email:this._email,oobCode:this._password});default:we(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return up(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hp(e,{idToken:n,email:this._email,oobCode:this._password});default:we(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(t,e){return $n(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="http://localhost";class kt extends Qs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):we("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qt(e,n)}buildRequest(){const e={requestUri:pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mp(t){const e=hn(pn(t)).link,n=e?hn(pn(e)).deep_link_id:null,r=hn(pn(t)).deep_link_id;return(r?hn(pn(r)).link:null)||r||n||e||t}class Zs{constructor(e){var n,r,s,i,o,a;const c=hn(pn(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=gp((s=c.mode)!==null&&s!==void 0?s:null);x(u&&f&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=mp(e);try{return new Zs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,n){return Nn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zs.parseLink(n);return x(r,"argument-error"),Nn._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ei{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Hn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ge.credential(n,r)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Hn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Hn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e){return $n(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ct._fromIdTokenResponse(e,r,s),o=_o(r);return new Dt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_o(r);return new Dt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _o(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new gr(e,n,r,s)}}function hc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,i,e,r):i})}async function vp(t,e,n=!1){const r=await kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await kn(t,hc(r,s,e,t),n);x(i.idToken,r,"internal-error");const o=Ys(i.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Dt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&we(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t,e,n=!1){const r="signIn",s=await hc(t,r,e),i=await Dt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yp(t,e){return pc(on(t),e)}async function Ip(t,e,n){const r=on(t),s=await _p(r,{returnSecureToken:!0,email:e,password:n}),i=await Dt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function em(t,e,n){return yp(et(t),an.credential(e,n))}function Ep(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function wp(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function gc(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function Tp(t){return et(t).signOut()}const mr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(){const t=de();return Xs(t)||Dr(t)}const Sp=1e3,Ap=10;class _c extends mc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Rp()&&sp(),this.fallbackToPolling=uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ap):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Sp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_c.type="LOCAL";const Cp=_c;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends mc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vc.type="SESSION";const bc=vc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Op(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ti("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return window}function kp(t){Ve().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function Dp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Np(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mp(){return yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="firebaseLocalStorageDb",xp=1,_r="firebaseLocalStorage",Ec="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function Lp(){const t=indexedDB.deleteDatabase(Ic);return new jn(t).toPromise()}function ys(){const t=indexedDB.open(Ic,xp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_r,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_r)?e(r):(r.close(),await Lp(),e(await ys()))})})}async function vo(t,e,n){const r=Mr(t,!0).put({[Ec]:e,value:n});return new jn(r).toPromise()}async function Up(t,e){const n=Mr(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function bo(t,e){const n=Mr(t,!0).delete(e);return new jn(n).toPromise()}const Fp=800,Bp=3;class wc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ys(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nr._getInstance(Mp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Dp(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Np()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ys();return await vo(e,mr,"1"),await bo(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Up(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mr(s,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wc.type="LOCAL";const $p=wc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=We("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hp().appendChild(r)})}function Wp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t,e){return e?Ye(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Qs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vp(t){return pc(t.auth,new ni(t),t.bypassAuthState)}function zp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),bp(n,new ni(t),t.bypassAuthState)}async function Kp(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),vp(n,new ni(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vp;case"linkViaPopup":case"linkViaRedirect":return Kp;case"reauthViaPopup":case"reauthViaRedirect":return zp;default:we(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new Un(2e3,1e4);async function Gp(t,e,n){const r=on(t);Uh(t,e,ei);const s=Tc(r,n);return new Rt(r,"signInViaPopup",e,s).executeNotNull()}class Rt extends Rc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,qp.get())};e()}}Rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="pendingRedirect",ir=new Map;class Yp extends Rc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const r=await Xp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xp(t,e){const n=eg(e),r=Zp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qp(t,e){ir.set(t._key(),e)}function Zp(t){return Ye(t._redirectPersistence)}function eg(t){return sr(Jp,t.config.apiKey,t.name)}async function tg(t,e,n=!1){const r=on(t),s=Tc(r,e),o=await new Yp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=10*60*1e3;class rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(We(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(yo(e))}saveEventToCache(e){this.cachedEventUids.add(yo(e)),this.lastProcessedEventTime=Date.now()}}function yo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ag=/^https?/;async function cg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ig(t);for(const n of e)try{if(lg(n))return}catch{}we(t,"unauthorized-domain")}function lg(t){const e=bs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ag.test(n))return!1;if(og.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new Un(3e4,6e4);function Io(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fg(t){return new Promise((e,n)=>{var r,s,i;function o(){Io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Io(),n(We(t,"network-request-failed"))},timeout:ug.get()})}if(!((s=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ve().gapi)===null||i===void 0)&&i.load)o();else{const a=Wp("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(We(t,"network-request-failed"))},jp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw or=null,e})}let or=null;function dg(t){return or=or||fg(t),or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Un(5e3,15e3),pg="__/auth/iframe",gg="emulator/auth/iframe",mg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_g=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vg(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Js(e,gg):`https://${t.config.authDomain}/${pg}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=_g.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ln(r).slice(1)}`}async function bg(t){const e=await dg(t),n=Ve().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:vg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=We(t,"network-request-failed"),a=Ve().setTimeout(()=>{i(o)},hg.get());function c(){Ve().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,Eg=600,wg="_blank",Tg="http://localhost";class Eo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rg(t,e,n,r=Ig,s=Eg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=de().toLowerCase();n&&(a=ic(u)?wg:n),sc(u)&&(e=e||Tg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[v,S])=>`${p}${v}=${S},`,"");if(np(u)&&a!=="_self")return Sg(e||"",a),new Eo(null);const h=window.open(e||"",a,f);x(h,t,"popup-blocked");try{h.focus()}catch{}return new Eo(h)}function Sg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__/auth/handler",Cg="emulator/auth/handler";function wo(t,e,n,r,s,i){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof ei){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Hn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Og(t)}?${Ln(a).slice(1)}`}function Og({config:t}){return t.emulator?Js(t,Cg):`https://${t.authDomain}/${Ag}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="webStorageSupport";class Pg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bc,this._completeRedirectFn=tg,this._overrideRedirectResult=Qp}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=wo(e,n,r,bs(),s);return Rg(e,o,ti())}async _openRedirect(e,n,r,s){return await this._originValidation(e),kp(wo(e,n,r,bs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bg(e),r=new rg(e);return n.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yr,{type:Yr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yr];o!==void 0&&n(!!o),we(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uc()||Xs()||Dr()}}const kg=Pg;var To="@firebase/auth",Ro="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mg(t){On(new tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{x(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fc(t)},f=new op(a,c,u);return Bh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new tn("auth-internal",e=>{const n=on(e.getProvider("auth").getImmediate());return(r=>new Dg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zt(To,Ro,Ng(t)),zt(To,Ro,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=5*60,Lg=ja("authIdTokenMaxAge")||xg;let So=null;const Ug=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Lg)return;const s=n==null?void 0:n.token;So!==s&&(So=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vr(t=Sh()){const e=Ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Fh(t,{popupRedirectResolver:kg,persistence:[$p,Cp,bc]}),r=ja("authTokenSyncURL");if(r){const i=Ug(r);wp(n,i,()=>i(n.currentUser)),Ep(n,o=>i(o))}const s=pd("auth");return s&&ap(n,`http://${s}`),n}Mg("Browser");const Fg="modulepreload",Bg=function(t){return"/Vue3-firebase-chat/"+t},Ao={},Xr=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Bg(i),i in Ao)return;Ao[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Fg,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,h)=>{u.addEventListener("load",f),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},$g={};function Hg(t,e,n,r,s,i){return Yt(),Sn("div")}const jg=Vs($g,[["render",Hg]]),Wg=oe("h1",null,"Create an Account",-1),Vg={__name:"Register",setup(t){const e=En(""),n=En(""),r=ed(),s=()=>{const o=vr();Ip(o,e.value,n.value).then(a=>{console.log("Successfully registered!"),console.log(o.currentUser),r.push("/feed")}).catch(a=>{alert(a)})},i=()=>{const o=new Ge;Gp(vr(),o).then(a=>{console.log(a.user),console.log("register with google"),r.push("/feed")}).catch(a=>{})};return(o,a)=>(Yt(),Sn("div",null,[Wg,oe("p",null,[vi(oe("input",{type:"email",placeholder:"email","onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c)},null,512),[[Li,e.value]])]),oe("p",null,[vi(oe("input",{type:"password",placeholder:"password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[Li,n.value]])]),oe("p",null,[oe("button",{onClick:s},"Submit")]),oe("p",null,[oe("button",{onClick:i},"Sign In With Google")])]))}},ri=Qf({history:mf("/Vue3-firebase-chat/"),routes:[{path:"/",name:"home",component:jg},{path:"/about",name:"about",component:()=>Xr(()=>import("./AboutView-cf3cf92a.js"),["assets/AboutView-cf3cf92a.js","assets/AboutView-4d995ba2.css"])},{path:"/register",name:"register",component:Vg},{path:"/sign-in",component:()=>Xr(()=>import("./SingIn-e3256411.js"),[])},{path:"/feed",component:()=>Xr(()=>import("./Feed-2c0023af.js"),[]),meta:{requiresAuth:!0}}]}),zg=()=>new Promise((t,e)=>{const n=gc(vr(),r=>{n(),t(r),console.log("user:",r)},e)});ri.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await zg()?n():(alert("you dont have access!"),n("/")):n()});const Kg=t=>(ia("data-v-6585bd2b"),t=t(),oa(),t),qg=Kg(()=>oe("img",{alt:"Vue logo",class:"logo",src:Xu,width:"125",height:"125"},null,-1)),Gg={class:"wrapper"},Jg={__name:"App",setup(t){const e=En(!1);let n;da(()=>{n=vr(),gc(n,s=>{s?e.value=!0:e.value=!1})});const r=()=>{Tp(n).then(()=>{ri.push("/")})};return(s,i)=>(Yt(),Sn(Be,null,[oe("header",null,[qg,oe("div",Gg,[se(od,{msg:"You did it!"}),oe("nav",null,[se(Ie($t),{to:"/"},{default:Ut(()=>[qe("Home")]),_:1}),se(Ie($t),{to:"/feed"},{default:Ut(()=>[qe("Feed")]),_:1}),se(Ie($t),{to:"/register"},{default:Ut(()=>[qe("Register")]),_:1}),se(Ie($t),{to:"/sign-in"},{default:Ut(()=>[qe("Sign-In")]),_:1}),se(Ie($t),{to:"/about"},{default:Ut(()=>[qe("About")]),_:1}),e.value?(Yt(),Sn("button",{key:0,onClick:r},"Log out")):pu("",!0)])])]),se(Ie(Ua))],64))}},Yg=Vs(Jg,[["__scopeId","data-v-6585bd2b"]]);var Xg="firebase",Qg="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt(Xg,Qg,"app");const Zg={apiKey:"AIzaSyA0s43-bbC9SAryIi0qiIoegb7WIr21LQs",authDomain:"my-vue-chat-c0b15.firebaseapp.com",projectId:"my-vue-chat-c0b15",storageBucket:"my-vue-chat-c0b15.appspot.com",messagingSenderId:"128453966603",appId:"1:128453966603:web:4aedf3461f94629997000e"};qa(Zg);const si=Ku(Yg);si.use(Yu());si.use(ri);si.mount("#app");export{Ge as G,Vs as _,oe as a,pu as b,Sn as c,Gp as d,vr as g,Yt as o,En as r,em as s,Nc as t,ed as u,Li as v,vi as w};
