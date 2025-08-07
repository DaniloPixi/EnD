(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},us=[],Jt=()=>{},Dy=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xl=t=>t.startsWith("onUpdate:"),at=Object.assign,Ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oy=Object.prototype.hasOwnProperty,Ne=(t,e)=>Oy.call(t,e),ge=Array.isArray,hs=t=>va(t)==="[object Map]",up=t=>va(t)==="[object Set]",ve=t=>typeof t=="function",tt=t=>typeof t=="string",pr=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",hp=t=>(He(t)||ve(t))&&ve(t.then)&&ve(t.catch),dp=Object.prototype.toString,va=t=>dp.call(t),Ny=t=>va(t).slice(8,-1),fp=t=>va(t)==="[object Object]",Ll=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vy=/-(\w)/g,Wt=Ea(t=>t.replace(Vy,(e,n)=>n?n.toUpperCase():"")),xy=/\B([A-Z])/g,Fr=Ea(t=>t.replace(xy,"-$1").toLowerCase()),Ta=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),mc=Ea(t=>t?`on${Ta(t)}`:""),tr=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gh;const wa=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=tt(r)?Fy(r):Ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(tt(t)||He(t))return t}const My=/;(?![^(]*\))/g,Ly=/:([^]+)/,Uy=/\/\*[^]*?\*\//g;function Fy(t){const e={};return t.replace(Uy,"").split(My).forEach(n=>{if(n){const r=n.split(Ly);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Gt(t){let e="";if(tt(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const r=Gt(t[n]);r&&(e+=r+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",By=Vl($y);function pp(t){return!!t||t===""}const mp=t=>!!(t&&t.__v_isRef===!0),We=t=>tt(t)?t:t==null?"":ge(t)||He(t)&&(t.toString===dp||!ve(t.toString))?mp(t)?We(t.value):JSON.stringify(t,gp,2):String(t),gp=(t,e)=>mp(e)?gp(t,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gc(r,i)+" =>"]=s,n),{})}:up(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:pr(e)?gc(e):He(e)&&!ge(e)&&!fp(e)?String(e):e,gc=(t,e="")=>{var n;return pr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class jy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qy(){return kt}let Ue;const _c=new WeakSet;class _p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_c.has(this)&&(_c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zh(this),Ep(this);const e=Ue,n=Xt;Ue=this,Xt=!0;try{return this.fn()}finally{Tp(this),Ue=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wc(this)&&this.run()}get dirty(){return Wc(this)}}let yp=0,hi,di;function vp(t,e=!1){if(t.flags|=8,e){t.next=di,di=t;return}t.next=hi,hi=t}function Fl(){yp++}function $l(){if(--yp>0)return;if(di){let e=di;for(di=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hi;){let e=hi;for(hi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bl(r),Hy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai)||(t.globalVersion=Ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Wc(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=Xt;Ue=t,Xt=!0;try{Ep(t);const s=t.fn(t._value);(e.version===0||tr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,Xt=r,Tp(t),t.flags&=-3}}function Bl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const Ip=[];function Nn(){Ip.push(Xt),Xt=!1}function Vn(){const t=Ip.pop();Xt=t===void 0?!0:t}function zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Ai=0;class Wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!Xt||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new Wy(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Ap(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){Fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$l()}}}function Ap(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ap(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Kc=new WeakMap,Pr=Symbol(""),Gc=Symbol(""),bi=Symbol("");function Et(t,e,n){if(Xt&&Ue){let r=Kc.get(t);r||Kc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new jl),s.map=r,s.key=n),s.track()}}function Rn(t,e,n,r,s,i){const o=Kc.get(t);if(!o){Ai++;return}const c=l=>{l&&l.trigger()};if(Fl(),e==="clear")o.forEach(c);else{const l=ge(t),h=l&&Ll(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===bi||!pr(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(bi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Pr)),hs(t)&&c(o.get(Gc)));break;case"delete":l||(c(o.get(Pr)),hs(t)&&c(o.get(Gc)));break;case"set":hs(t)&&c(o.get(Pr));break}}$l()}function Jr(t){const e=Oe(t);return e===t?e:(Et(e,"iterate",bi),Bt(t)?e:e.map(dt))}function Ia(t){return Et(t=Oe(t),"iterate",bi),t}const Ky={__proto__:null,[Symbol.iterator](){return yc(this,Symbol.iterator,dt)},concat(...t){return Jr(this).concat(...t.map(e=>ge(e)?Jr(e):e))},entries(){return yc(this,"entries",t=>(t[1]=dt(t[1]),t))},every(t,e){return wn(this,"every",t,e,void 0,arguments)},filter(t,e){return wn(this,"filter",t,e,n=>n.map(dt),arguments)},find(t,e){return wn(this,"find",t,e,dt,arguments)},findIndex(t,e){return wn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wn(this,"findLast",t,e,dt,arguments)},findLastIndex(t,e){return wn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wn(this,"forEach",t,e,void 0,arguments)},includes(...t){return vc(this,"includes",t)},indexOf(...t){return vc(this,"indexOf",t)},join(t){return Jr(this).join(t)},lastIndexOf(...t){return vc(this,"lastIndexOf",t)},map(t,e){return wn(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Qh(this,"reduce",t,e)},reduceRight(t,...e){return Qh(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return wn(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return Jr(this).toReversed()},toSorted(t){return Jr(this).toSorted(t)},toSpliced(...t){return Jr(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return yc(this,"values",dt)}};function yc(t,e,n){const r=Ia(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gy=Array.prototype;function wn(t,e,n,r,s,i){const o=Ia(t),c=o!==t&&!Bt(t),l=o[e];if(l!==Gy[e]){const p=l.apply(t,i);return c?dt(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,dt(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Qh(t,e,n,r){const s=Ia(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,dt(c),l,t)}),s[e](i,...r)}function vc(t,e,n){const r=Oe(t);Et(r,"iterate",bi);const s=r[e](...n);return(s===-1||s===!1)&&Wl(n[0])?(n[0]=Oe(n[0]),r[e](...n)):s}function Js(t,e,n=[]){Nn(),Fl();const r=Oe(t)[e].apply(t,n);return $l(),Vn(),r}const zy=Vl("__proto__,__v_isRef,__isVue"),bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pr));function Qy(t){pr(t)||(t=String(t));const e=Oe(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?iv:kp:i?Cp:Pp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ge(e);if(!s){let l;if(o&&(l=Ky[n]))return l;if(n==="hasOwnProperty")return Qy}const c=Reflect.get(e,n,It(e)?e:r);return(pr(n)?bp.has(n):zy(n))||(s||Et(e,"get",n),i)?c:It(c)?o&&Ll(n)?c:c.value:He(c)?s?Op(c):Bi(c):c}}class Sp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ar(i);if(!Bt(r)&&!ar(r)&&(i=Oe(i),r=Oe(r)),!ge(e)&&It(i)&&!It(r))return l?!1:(i.value=r,!0)}const o=ge(e)&&Ll(n)?Number(n)<e.length:Ne(e,n),c=Reflect.set(e,n,r,It(e)?e:s);return e===Oe(s)&&(o?tr(r,i)&&Rn(e,"set",n,r):Rn(e,"add",n,r)),c}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Rn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pr(n)||!bp.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ge(e)?"length":Pr),Reflect.ownKeys(e)}}class Yy extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jy=new Sp,Xy=new Yy,Zy=new Sp(!0);const zc=t=>t,To=t=>Reflect.getPrototypeOf(t);function ev(t,e,n){return function(...r){const s=this.__v_raw,i=Oe(s),o=hs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?zc:e?Ho:dt;return!e&&Et(i,"iterate",l?Gc:Pr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tv(t,e){const n={get(s){const i=this.__v_raw,o=Oe(i),c=Oe(s);t||(tr(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=To(o),h=e?zc:t?Ho:dt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Oe(s),"iterate",Pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Oe(i),c=Oe(s);return t||(tr(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Oe(c),h=e?zc:t?Ho:dt;return!t&&Et(l,"iterate",Pr),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return at(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Bt(s)&&!ar(s)&&(s=Oe(s));const i=Oe(this);return To(i).has.call(i,s)||(i.add(s),Rn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!ar(i)&&(i=Oe(i));const o=Oe(this),{has:c,get:l}=To(o);let h=c.call(o,s);h||(s=Oe(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?tr(i,d)&&Rn(o,"set",s,i):Rn(o,"add",s,i),this},delete(s){const i=Oe(this),{has:o,get:c}=To(i);let l=o.call(i,s);l||(s=Oe(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Rn(i,"delete",s,void 0),h},clear(){const s=Oe(this),i=s.size!==0,o=s.clear();return i&&Rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ev(s,t,e)}),n}function ql(t,e){const n=tv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const nv={get:ql(!1,!1)},rv={get:ql(!1,!0)},sv={get:ql(!0,!1)};const Pp=new WeakMap,Cp=new WeakMap,kp=new WeakMap,iv=new WeakMap;function ov(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function av(t){return t.__v_skip||!Object.isExtensible(t)?0:ov(Ny(t))}function Bi(t){return ar(t)?t:Hl(t,!1,Jy,nv,Pp)}function Dp(t){return Hl(t,!1,Zy,rv,Cp)}function Op(t){return Hl(t,!0,Xy,sv,kp)}function Hl(t,e,n,r,s){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=av(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function ds(t){return ar(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function Wl(t){return t?!!t.__v_raw:!1}function Oe(t){const e=t&&t.__v_raw;return e?Oe(e):t}function cv(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&qc(t,"__v_skip",!0),t}const dt=t=>He(t)?Bi(t):t,Ho=t=>He(t)?Op(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Ae(t){return Np(t,!1)}function lv(t){return Np(t,!0)}function Np(t,e){return It(t)?t:new uv(t,e)}class uv{constructor(e,n){this.dep=new jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Oe(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||ar(e);e=r?e:Oe(e),tr(e,n)&&(this._rawValue=e,this._value=r?e:dt(e),this.dep.trigger())}}function Cr(t){return It(t)?t.value:t}const hv={get:(t,e,n)=>e==="__v_raw"?t:Cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return ds(t)?t:new Proxy(t,hv)}class dv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return vp(this,!0),!0}get value(){const e=this.dep.track();return wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fv(t,e,n=!1){let r,s;return ve(t)?r=t:(r=t.get,s=t.set),new dv(r,s,n)}const Io={},Wo=new WeakMap;let br;function pv(t,e=!1,n=br){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function mv(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=j=>s?j:Bt(j)||s===!1||s===0?Sn(j,1):Sn(j);let d,p,m,_,C=!1,D=!1;if(It(t)?(p=()=>t.value,C=Bt(t)):ds(t)?(p=()=>h(t),C=!0):ge(t)?(D=!0,C=t.some(j=>ds(j)||Bt(j)),p=()=>t.map(j=>{if(It(j))return j.value;if(ds(j))return h(j);if(ve(j))return l?l(j,2):j()})):ve(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Nn();try{m()}finally{Vn()}}const j=br;br=d;try{return l?l(t,3,[_]):t(_)}finally{br=j}}:p=Jt,e&&s){const j=p,le=s===!0?1/0:s;p=()=>Sn(j(),le)}const P=qy(),M=()=>{d.stop(),P&&P.active&&Ml(P.effects,d)};if(i&&e){const j=e;e=(...le)=>{j(...le),M()}}let B=D?new Array(t.length).fill(Io):Io;const H=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const le=d.run();if(s||C||(D?le.some((de,R)=>tr(de,B[R])):tr(le,B))){m&&m();const de=br;br=d;try{const R=[le,B===Io?void 0:D&&B[0]===Io?[]:B,_];B=le,l?l(e,3,R):e(...R)}finally{br=de}}}else d.run()};return c&&c(H),d=new _p(p),d.scheduler=o?()=>o(H,!1):H,_=j=>pv(j,!1,d),m=d.onStop=()=>{const j=Wo.get(d);if(j){if(l)l(j,4);else for(const le of j)le();Wo.delete(d)}},e?r?H(!0):B=d.run():o?o(H.bind(null,!0),!0):d.run(),M.pause=d.pause.bind(d),M.resume=d.resume.bind(d),M.stop=M,M}function Sn(t,e=1/0,n){if(e<=0||!He(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))Sn(t.value,e,n);else if(ge(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(up(t)||hs(t))t.forEach(r=>{Sn(r,e,n)});else if(fp(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Aa(s,e,n)}}function mn(t,e,n,r){if(ve(t)){const s=ji(t,e,n,r);return s&&hp(s)&&s.catch(i=>{Aa(i,e,n)}),s}if(ge(t)){const s=[];for(let i=0;i<t.length;i++)s.push(mn(t[i],e,n,r));return s}}function Aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){Nn(),ji(i,null,10,[t,l,h]),Vn();return}}gv(t,n,s,r,o)}function gv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let on=-1;const fs=[];let Gn=null,ts=0;const xp=Promise.resolve();let Ko=null;function Mp(t){const e=Ko||xp;return t?e.then(this?t.bind(this):t):e}function _v(t){let e=on+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Kl(t){if(!(t.flags&1)){const e=Ri(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Ri(n)?St.push(t):St.splice(_v(e),0,t),t.flags|=1,Lp()}}function Lp(){Ko||(Ko=xp.then(Fp))}function yv(t){ge(t)?fs.push(...t):Gn&&t.id===-1?Gn.splice(ts+1,0,t):t.flags&1||(fs.push(t),t.flags|=1),Lp()}function Yh(t,e,n=on+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Up(t){if(fs.length){const e=[...new Set(fs)].sort((n,r)=>Ri(n)-Ri(r));if(fs.length=0,Gn){Gn.push(...e);return}for(Gn=e,ts=0;ts<Gn.length;ts++){const n=Gn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,ts=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fp(t){const e=Jt;try{for(on=0;on<St.length;on++){const n=St[on];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ji(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;on<St.length;on++){const n=St[on];n&&(n.flags&=-2)}on=-1,St.length=0,Up(),Ko=null,(St.length||fs.length)&&Fp()}}let Lt=null,$p=null;function Go(t){const e=Lt;return Lt=t,$p=t&&t.type.__scopeId||null,e}function zo(t,e=Lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&id(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&id(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(t,e){if(Lt===null)return t;const n=Ca(Lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Le]=e[s];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Nn(),mn(l,n,8,[t.el,c,t,e]),Vn())}}const vv=Symbol("_vte"),Ev=t=>t.__isTeleport;function Gl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Bp(t,e){return ve(t)?(()=>at({name:t.name},e,{setup:t}))():t}function jp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fi(t,e,n,r,s=!1){if(ge(t)){t.forEach((C,D)=>fi(C,e&&(ge(e)?e[D]:e),n,r,s));return}if(pi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ca(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Le?c.refs={}:c.refs,p=c.setupState,m=Oe(p),_=p===Le?()=>!1:C=>Ne(m,C);if(h!=null&&h!==l&&(tt(h)?(d[h]=null,_(h)&&(p[h]=null)):It(h)&&(h.value=null)),ve(l))ji(l,c,12,[o,d]);else{const C=tt(l),D=It(l);if(C||D){const P=()=>{if(t.f){const M=C?_(l)?p[l]:d[l]:l.value;s?ge(M)&&Ml(M,i):ge(M)?M.includes(i)||M.push(i):C?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else C?(d[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Mt(P,n)):P()}}}wa().requestIdleCallback;wa().cancelIdleCallback;const pi=t=>!!t.type.__asyncLoader,qp=t=>t.type.__isKeepAlive;function Tv(t,e){Hp(t,"a",e)}function wv(t,e){Hp(t,"da",e)}function Hp(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qp(s.parent.vnode)&&Iv(r,e,n,s),s=s.parent}}function Iv(t,e,n,r){const s=ba(e,t,r,!0);Ds(()=>{Ml(r[e],s)},n)}function ba(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const c=qi(n),l=mn(e,n,t,o);return c(),Vn(),l});return r?s.unshift(i):s.push(i),i}}const Fn=t=>(e,n=wt)=>{(!Pi||t==="sp")&&ba(t,(...r)=>e(...r),n)},Av=Fn("bm"),Ra=Fn("m"),bv=Fn("bu"),Rv=Fn("u"),Sv=Fn("bum"),Ds=Fn("um"),Pv=Fn("sp"),Cv=Fn("rtg"),kv=Fn("rtc");function Dv(t,e=wt){ba("ec",t,e)}const Wp="components";function ti(t,e){return Nv(Wp,t,!0,e)||t}const Ov=Symbol.for("v-ndc");function Nv(t,e,n=!0,r=!1){const s=Lt||wt;if(s){const i=s.type;if(t===Wp){const c=TE(i,!1);if(c&&(c===e||c===Wt(e)||c===Ta(Wt(e))))return i}const o=Jh(s[t]||i[t],e)||Jh(s.appContext[t],e);return!o&&r?i:o}}function Jh(t,e){return t&&(t[e]||t[Wt(e)]||t[Ta(Wt(e))])}function zt(t,e,n,r){let s;const i=n&&n[r],o=ge(t);if(o||tt(t)){const c=o&&ds(t);let l=!1,h=!1;c&&(l=!Bt(t),h=ar(t),t=Ia(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(l?h?Ho(dt(t[d])):dt(t[d]):t[d],d,void 0,i&&i[d])}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i&&i[c])}else if(He(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i&&i[l]));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}const Qc=t=>t?lm(t)?Ca(t):Qc(t.parent):null,mi=at(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qc(t.parent),$root:t=>Qc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zl(t),$forceUpdate:t=>t.f||(t.f=()=>{Kl(t.update)}),$nextTick:t=>t.n||(t.n=Mp.bind(t.proxy)),$watch:t=>tE.bind(t)}),Ec=(t,e)=>t!==Le&&!t.__isScriptSetup&&Ne(t,e),Vv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ec(r,e))return o[e]=1,r[e];if(s!==Le&&Ne(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ne(h,e))return o[e]=3,i[e];if(n!==Le&&Ne(n,e))return o[e]=4,n[e];Yc&&(o[e]=0)}}const d=mi[e];let p,m;if(d)return e==="$attrs"&&Et(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Le&&Ne(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ec(s,e)?(s[e]=n,!0):r!==Le&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Le&&Ne(t,o)||Ec(e,o)||(c=i[0])&&Ne(c,o)||Ne(r,o)||Ne(mi,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xh(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Yc=!0;function xv(t){const e=zl(t),n=t.proxy,r=t.ctx;Yc=!1,e.beforeCreate&&Zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:P,beforeDestroy:M,beforeUnmount:B,destroyed:H,unmounted:j,render:le,renderTracked:de,renderTriggered:R,errorCaptured:E,serverPrefetch:A,expose:T,inheritAttrs:I,components:b,directives:v,filters:je}=e;if(h&&Mv(h,r,null),o)for(const J in o){const z=o[J];ve(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);He(J)&&(t.data=Bi(J))}if(Yc=!0,i)for(const J in i){const z=i[J],oe=ve(z)?z.bind(n,n):ve(z.get)?z.get.bind(n,n):Jt,Te=!ve(z)&&ve(z.set)?z.set.bind(n):Jt,Ge=ot({get:oe,set:Te});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Ge.value,set:ke=>Ge.value=ke})}if(c)for(const J in c)Kp(c[J],r,n,J);if(l){const J=ve(l)?l.call(n):l;Reflect.ownKeys(J).forEach(z=>{Oo(z,J[z])})}d&&Zh(d,t,"c");function Z(J,z){ge(z)?z.forEach(oe=>J(oe.bind(n))):z&&J(z.bind(n))}if(Z(Av,p),Z(Ra,m),Z(bv,_),Z(Rv,C),Z(Tv,D),Z(wv,P),Z(Dv,E),Z(kv,de),Z(Cv,R),Z(Sv,B),Z(Ds,j),Z(Pv,A),ge(T))if(T.length){const J=t.exposed||(t.exposed={});T.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:oe=>n[z]=oe,enumerable:!0})})}else t.exposed||(t.exposed={});le&&t.render===Jt&&(t.render=le),I!=null&&(t.inheritAttrs=I),b&&(t.components=b),v&&(t.directives=v),A&&jp(t)}function Mv(t,e,n=Jt){ge(t)&&(t=Jc(t));for(const r in t){const s=t[r];let i;He(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Zh(t,e,n){mn(ge(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kp(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(tt(t)){const i=e[t];ve(i)&&Dn(s,i)}else if(ve(t))Dn(s,t.bind(n));else if(He(t))if(ge(t))t.forEach(i=>Kp(i,e,n,r));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&Dn(s,i,t)}}function zl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Qo(l,h,o,!0)),Qo(l,e,o)),He(e)&&i.set(e,l),l}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Lv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Lv={data:ed,props:td,emits:td,methods:ni,computed:ni,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:ni,directives:ni,watch:Fv,provide:ed,inject:Uv};function ed(t,e){return e?t?function(){return at(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function Uv(t,e){return ni(Jc(t),Jc(e))}function Jc(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?at(Object.create(null),t,e):e}function td(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:at(Object.create(null),Xh(t),Xh(e??{})):e}function Fv(t,e){if(!t)return e;if(!e)return t;const n=at(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Gp(){return{app:null,config:{isNativeTag:Dy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function Bv(t,e){return function(r,s=null){ve(r)||(r=at({},r)),s!=null&&!He(s)&&(s=null);const i=Gp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:$v++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:IE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ve(d.install)?(o.add(d),d.install(h,...p)):ve(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const _=h._ceVNode||Je(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),l=!0,h._container=d,d.__vue_app__=h,Ca(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(mn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ps;ps=h;try{return d()}finally{ps=p}}};return h}}let ps=null;function Oo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=gE();if(r||ps){let s=ps?ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r&&r.proxy):e}}const zp={},Qp=()=>Object.create(zp),Yp=t=>Object.getPrototypeOf(t)===zp;function jv(t,e,n,r=!1){const s={},i=Qp();t.propsDefaults=Object.create(null),Jp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Oe(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Sa(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ne(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const C=Wt(m);s[C]=Xc(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Jp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Ne(e,p)&&((d=Fr(p))===p||!Ne(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Xc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],h=!0)}h&&Rn(t.attrs,"set","")}function Jp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ui(l))continue;const h=e[l];let d;s&&Ne(s,d=Wt(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:Sa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Oe(n),h=c||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Xc(s,l,p,h[p],t,!Ne(h,p))}}return o}function Xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ne(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ve(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=qi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const Hv=new WeakMap;function Xp(t,e,n=!1){const r=n?Hv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ve(t)){const d=p=>{l=!0;const[m,_]=Xp(p,e,!0);at(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return He(t)&&r.set(t,us),us;if(ge(i))for(let d=0;d<i.length;d++){const p=Wt(i[d]);nd(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=Wt(d);if(nd(p)){const m=i[d],_=o[p]=ge(m)||ve(m)?{type:m}:at({},m),C=_.type;let D=!1,P=!0;if(ge(C))for(let M=0;M<C.length;++M){const B=C[M],H=ve(B)&&B.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(P=!1)}else D=ve(C)&&C.name==="Boolean";_[0]=D,_[1]=P,(D||Ne(_,"default"))&&c.push(p)}}const h=[o,c];return He(t)&&r.set(t,h),h}function nd(t){return t[0]!=="$"&&!ui(t)}const Ql=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Yl=t=>ge(t)?t.map(cn):[cn(t)],Wv=(t,e,n)=>{if(e._n)return e;const r=zo((...s)=>Yl(e(...s)),n);return r._c=!1,r},Zp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ql(s))continue;const i=t[s];if(ve(i))e[s]=Wv(s,i,r);else if(i!=null){const o=Yl(i);e[s]=()=>o}}},em=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},tm=(t,e,n)=>{for(const r in e)(n||!Ql(r))&&(t[r]=e[r])},Kv=(t,e,n)=>{const r=t.slots=Qp();if(t.vnode.shapeFlag&32){const s=e.__;s&&qc(r,"__",s,!0);const i=e._;i?(tm(r,e,n),n&&qc(r,"_",i,!0)):Zp(e,r)}else e&&em(t,e)},Gv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:tm(s,e,n):(i=!e.$stable,Zp(e,s)),o=e}else e&&(em(t,e),o={default:1});if(i)for(const c in s)!Ql(c)&&o[c]==null&&delete s[c]},Mt=cE;function zv(t){return Qv(t)}function Qv(t,e){const n=wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Jt,insertStaticContent:C}=t,D=(y,w,k,U=null,N=null,$=null,Q=void 0,K=null,W=!!w.dynamicChildren)=>{if(y===w)return;y&&!Xs(y,w)&&(U=V(y),ke(y,N,$,!0),y=null),w.patchFlag===-2&&(W=!1,w.dynamicChildren=null);const{type:q,ref:ae,shapeFlag:Y}=w;switch(q){case Pa:P(y,w,k,U);break;case cr:M(y,w,k,U);break;case Ic:y==null&&B(w,k,U,Q);break;case Qe:b(y,w,k,U,N,$,Q,K,W);break;default:Y&1?le(y,w,k,U,N,$,Q,K,W):Y&6?v(y,w,k,U,N,$,Q,K,W):(Y&64||Y&128)&&q.process(y,w,k,U,N,$,Q,K,W,ne)}ae!=null&&N?fi(ae,y&&y.ref,$,w||y,!w):ae==null&&y&&y.ref!=null&&fi(y.ref,null,$,y,!0)},P=(y,w,k,U)=>{if(y==null)r(w.el=c(w.children),k,U);else{const N=w.el=y.el;w.children!==y.children&&h(N,w.children)}},M=(y,w,k,U)=>{y==null?r(w.el=l(w.children||""),k,U):w.el=y.el},B=(y,w,k,U)=>{[y.el,y.anchor]=C(y.children,w,k,U,y.el,y.anchor)},H=({el:y,anchor:w},k,U)=>{let N;for(;y&&y!==w;)N=m(y),r(y,k,U),y=N;r(w,k,U)},j=({el:y,anchor:w})=>{let k;for(;y&&y!==w;)k=m(y),s(y),y=k;s(w)},le=(y,w,k,U,N,$,Q,K,W)=>{w.type==="svg"?Q="svg":w.type==="math"&&(Q="mathml"),y==null?de(w,k,U,N,$,Q,K,W):A(y,w,N,$,Q,K,W)},de=(y,w,k,U,N,$,Q,K)=>{let W,q;const{props:ae,shapeFlag:Y,transition:se,dirs:fe}=y;if(W=y.el=o(y.type,$,ae&&ae.is,ae),Y&8?d(W,y.children):Y&16&&E(y.children,W,null,U,N,Tc(y,$),Q,K),fe&&Ir(y,null,U,"created"),R(W,y,y.scopeId,Q,U),ae){for(const Ee in ae)Ee!=="value"&&!ui(Ee)&&i(W,Ee,null,ae[Ee],$,U);"value"in ae&&i(W,"value",null,ae.value,$),(q=ae.onVnodeBeforeMount)&&sn(q,U,y)}fe&&Ir(y,null,U,"beforeMount");const ue=Yv(N,se);ue&&se.beforeEnter(W),r(W,w,k),((q=ae&&ae.onVnodeMounted)||ue||fe)&&Mt(()=>{q&&sn(q,U,y),ue&&se.enter(W),fe&&Ir(y,null,U,"mounted")},N)},R=(y,w,k,U,N)=>{if(k&&_(y,k),U)for(let $=0;$<U.length;$++)_(y,U[$]);if(N){let $=N.subTree;if(w===$||om($.type)&&($.ssContent===w||$.ssFallback===w)){const Q=N.vnode;R(y,Q,Q.scopeId,Q.slotScopeIds,N.parent)}}},E=(y,w,k,U,N,$,Q,K,W=0)=>{for(let q=W;q<y.length;q++){const ae=y[q]=K?zn(y[q]):cn(y[q]);D(null,ae,w,k,U,N,$,Q,K)}},A=(y,w,k,U,N,$,Q)=>{const K=w.el=y.el;let{patchFlag:W,dynamicChildren:q,dirs:ae}=w;W|=y.patchFlag&16;const Y=y.props||Le,se=w.props||Le;let fe;if(k&&Ar(k,!1),(fe=se.onVnodeBeforeUpdate)&&sn(fe,k,w,y),ae&&Ir(w,y,k,"beforeUpdate"),k&&Ar(k,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&d(K,""),q?T(y.dynamicChildren,q,K,k,U,Tc(w,N),$):Q||z(y,w,K,null,k,U,Tc(w,N),$,!1),W>0){if(W&16)I(K,Y,se,k,N);else if(W&2&&Y.class!==se.class&&i(K,"class",null,se.class,N),W&4&&i(K,"style",Y.style,se.style,N),W&8){const ue=w.dynamicProps;for(let Ee=0;Ee<ue.length;Ee++){const Re=ue[Ee],ct=Y[Re],rt=se[Re];(rt!==ct||Re==="value")&&i(K,Re,ct,rt,N,k)}}W&1&&y.children!==w.children&&d(K,w.children)}else!Q&&q==null&&I(K,Y,se,k,N);((fe=se.onVnodeUpdated)||ae)&&Mt(()=>{fe&&sn(fe,k,w,y),ae&&Ir(w,y,k,"updated")},U)},T=(y,w,k,U,N,$,Q)=>{for(let K=0;K<w.length;K++){const W=y[K],q=w[K],ae=W.el&&(W.type===Qe||!Xs(W,q)||W.shapeFlag&198)?p(W.el):k;D(W,q,ae,null,U,N,$,Q,!0)}},I=(y,w,k,U,N)=>{if(w!==k){if(w!==Le)for(const $ in w)!ui($)&&!($ in k)&&i(y,$,w[$],null,N,U);for(const $ in k){if(ui($))continue;const Q=k[$],K=w[$];Q!==K&&$!=="value"&&i(y,$,K,Q,N,U)}"value"in k&&i(y,"value",w.value,k.value,N)}},b=(y,w,k,U,N,$,Q,K,W)=>{const q=w.el=y?y.el:c(""),ae=w.anchor=y?y.anchor:c("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:fe}=w;fe&&(K=K?K.concat(fe):fe),y==null?(r(q,k,U),r(ae,k,U),E(w.children||[],k,ae,N,$,Q,K,W)):Y>0&&Y&64&&se&&y.dynamicChildren?(T(y.dynamicChildren,se,k,N,$,Q,K),(w.key!=null||N&&w===N.subTree)&&nm(y,w,!0)):z(y,w,k,ae,N,$,Q,K,W)},v=(y,w,k,U,N,$,Q,K,W)=>{w.slotScopeIds=K,y==null?w.shapeFlag&512?N.ctx.activate(w,k,U,Q,W):je(w,k,U,N,$,Q,W):qe(y,w,W)},je=(y,w,k,U,N,$,Q)=>{const K=y.component=mE(y,U,N);if(qp(y)&&(K.ctx.renderer=ne),_E(K,!1,Q),K.asyncDep){if(N&&N.registerDep(K,Z,Q),!y.el){const W=K.subTree=Je(cr);M(null,W,w,k),y.placeholder=W.el}}else Z(K,y,w,k,N,$,Q)},qe=(y,w,k)=>{const U=w.component=y.component;if(oE(y,w,k))if(U.asyncDep&&!U.asyncResolved){J(U,w,k);return}else U.next=w,U.update();else w.el=y.el,U.vnode=w},Z=(y,w,k,U,N,$,Q)=>{const K=()=>{if(y.isMounted){let{next:Y,bu:se,u:fe,parent:ue,vnode:Ee}=y;{const st=rm(y);if(st){Y&&(Y.el=Ee.el,J(y,Y,Q)),st.asyncDep.then(()=>{y.isUnmounted||K()});return}}let Re=Y,ct;Ar(y,!1),Y?(Y.el=Ee.el,J(y,Y,Q)):Y=Ee,se&&Do(se),(ct=Y.props&&Y.props.onVnodeBeforeUpdate)&&sn(ct,ue,Y,Ee),Ar(y,!0);const rt=wc(y),Vt=y.subTree;y.subTree=rt,D(Vt,rt,p(Vt.el),V(Vt),y,N,$),Y.el=rt.el,Re===null&&aE(y,rt.el),fe&&Mt(fe,N),(ct=Y.props&&Y.props.onVnodeUpdated)&&Mt(()=>sn(ct,ue,Y,Ee),N)}else{let Y;const{el:se,props:fe}=w,{bm:ue,m:Ee,parent:Re,root:ct,type:rt}=y,Vt=pi(w);if(Ar(y,!1),ue&&Do(ue),!Vt&&(Y=fe&&fe.onVnodeBeforeMount)&&sn(Y,Re,w),Ar(y,!0),se&&xe){const st=()=>{y.subTree=wc(y),xe(se,y.subTree,y,N,null)};Vt&&rt.__asyncHydrate?rt.__asyncHydrate(se,y,st):st()}else{ct.ce&&ct.ce._def.shadowRoot!==!1&&ct.ce._injectChildStyle(rt);const st=y.subTree=wc(y);D(null,st,k,U,y,N,$),w.el=st.el}if(Ee&&Mt(Ee,N),!Vt&&(Y=fe&&fe.onVnodeMounted)){const st=w;Mt(()=>sn(Y,Re,st),N)}(w.shapeFlag&256||Re&&pi(Re.vnode)&&Re.vnode.shapeFlag&256)&&y.a&&Mt(y.a,N),y.isMounted=!0,w=k=U=null}};y.scope.on();const W=y.effect=new _p(K);y.scope.off();const q=y.update=W.run.bind(W),ae=y.job=W.runIfDirty.bind(W);ae.i=y,ae.id=y.uid,W.scheduler=()=>Kl(ae),Ar(y,!0),q()},J=(y,w,k)=>{w.component=y;const U=y.vnode.props;y.vnode=w,y.next=null,qv(y,w.props,U,k),Gv(y,w.children,k),Nn(),Yh(y),Vn()},z=(y,w,k,U,N,$,Q,K,W=!1)=>{const q=y&&y.children,ae=y?y.shapeFlag:0,Y=w.children,{patchFlag:se,shapeFlag:fe}=w;if(se>0){if(se&128){Te(q,Y,k,U,N,$,Q,K,W);return}else if(se&256){oe(q,Y,k,U,N,$,Q,K,W);return}}fe&8?(ae&16&&Ct(q,N,$),Y!==q&&d(k,Y)):ae&16?fe&16?Te(q,Y,k,U,N,$,Q,K,W):Ct(q,N,$,!0):(ae&8&&d(k,""),fe&16&&E(Y,k,U,N,$,Q,K,W))},oe=(y,w,k,U,N,$,Q,K,W)=>{y=y||us,w=w||us;const q=y.length,ae=w.length,Y=Math.min(q,ae);let se;for(se=0;se<Y;se++){const fe=w[se]=W?zn(w[se]):cn(w[se]);D(y[se],fe,k,null,N,$,Q,K,W)}q>ae?Ct(y,N,$,!0,!1,Y):E(w,k,U,N,$,Q,K,W,Y)},Te=(y,w,k,U,N,$,Q,K,W)=>{let q=0;const ae=w.length;let Y=y.length-1,se=ae-1;for(;q<=Y&&q<=se;){const fe=y[q],ue=w[q]=W?zn(w[q]):cn(w[q]);if(Xs(fe,ue))D(fe,ue,k,null,N,$,Q,K,W);else break;q++}for(;q<=Y&&q<=se;){const fe=y[Y],ue=w[se]=W?zn(w[se]):cn(w[se]);if(Xs(fe,ue))D(fe,ue,k,null,N,$,Q,K,W);else break;Y--,se--}if(q>Y){if(q<=se){const fe=se+1,ue=fe<ae?w[fe].el:U;for(;q<=se;)D(null,w[q]=W?zn(w[q]):cn(w[q]),k,ue,N,$,Q,K,W),q++}}else if(q>se)for(;q<=Y;)ke(y[q],N,$,!0),q++;else{const fe=q,ue=q,Ee=new Map;for(q=ue;q<=se;q++){const lt=w[q]=W?zn(w[q]):cn(w[q]);lt.key!=null&&Ee.set(lt.key,q)}let Re,ct=0;const rt=se-ue+1;let Vt=!1,st=0;const Bn=new Array(rt);for(q=0;q<rt;q++)Bn[q]=0;for(q=fe;q<=Y;q++){const lt=y[q];if(ct>=rt){ke(lt,N,$,!0);continue}let $t;if(lt.key!=null)$t=Ee.get(lt.key);else for(Re=ue;Re<=se;Re++)if(Bn[Re-ue]===0&&Xs(lt,w[Re])){$t=Re;break}$t===void 0?ke(lt,N,$,!0):(Bn[$t-ue]=q+1,$t>=st?st=$t:Vt=!0,D(lt,w[$t],k,null,N,$,Q,K,W),ct++)}const Us=Vt?Jv(Bn):us;for(Re=Us.length-1,q=rt-1;q>=0;q--){const lt=ue+q,$t=w[lt],so=w[lt+1],Kr=lt+1<ae?so.el||so.placeholder:U;Bn[q]===0?D(null,$t,k,Kr,N,$,Q,K,W):Vt&&(Re<0||q!==Us[Re]?Ge($t,k,Kr,2):Re--)}}},Ge=(y,w,k,U,N=null)=>{const{el:$,type:Q,transition:K,children:W,shapeFlag:q}=y;if(q&6){Ge(y.component.subTree,w,k,U);return}if(q&128){y.suspense.move(w,k,U);return}if(q&64){Q.move(y,w,k,ne);return}if(Q===Qe){r($,w,k);for(let Y=0;Y<W.length;Y++)Ge(W[Y],w,k,U);r(y.anchor,w,k);return}if(Q===Ic){H(y,w,k);return}if(U!==2&&q&1&&K)if(U===0)K.beforeEnter($),r($,w,k),Mt(()=>K.enter($),N);else{const{leave:Y,delayLeave:se,afterLeave:fe}=K,ue=()=>{y.ctx.isUnmounted?s($):r($,w,k)},Ee=()=>{Y($,()=>{ue(),fe&&fe()})};se?se($,ue,Ee):Ee()}else r($,w,k)},ke=(y,w,k,U=!1,N=!1)=>{const{type:$,props:Q,ref:K,children:W,dynamicChildren:q,shapeFlag:ae,patchFlag:Y,dirs:se,cacheIndex:fe}=y;if(Y===-2&&(N=!1),K!=null&&(Nn(),fi(K,null,k,y,!0),Vn()),fe!=null&&(w.renderCache[fe]=void 0),ae&256){w.ctx.deactivate(y);return}const ue=ae&1&&se,Ee=!pi(y);let Re;if(Ee&&(Re=Q&&Q.onVnodeBeforeUnmount)&&sn(Re,w,y),ae&6)rn(y.component,k,U);else{if(ae&128){y.suspense.unmount(k,U);return}ue&&Ir(y,null,w,"beforeUnmount"),ae&64?y.type.remove(y,w,k,ne,U):q&&!q.hasOnce&&($!==Qe||Y>0&&Y&64)?Ct(q,w,k,!1,!0):($===Qe&&Y&384||!N&&ae&16)&&Ct(W,w,k),U&&Fe(y)}(Ee&&(Re=Q&&Q.onVnodeUnmounted)||ue)&&Mt(()=>{Re&&sn(Re,w,y),ue&&Ir(y,null,w,"unmounted")},k)},Fe=y=>{const{type:w,el:k,anchor:U,transition:N}=y;if(w===Qe){$n(k,U);return}if(w===Ic){j(y);return}const $=()=>{s(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:Q,delayLeave:K}=N,W=()=>Q(k,$);K?K(y.el,$,W):W()}else $()},$n=(y,w)=>{let k;for(;y!==w;)k=m(y),s(y),y=k;s(w)},rn=(y,w,k)=>{const{bum:U,scope:N,job:$,subTree:Q,um:K,m:W,a:q,parent:ae,slots:{__:Y}}=y;rd(W),rd(q),U&&Do(U),ae&&ge(Y)&&Y.forEach(se=>{ae.renderCache[se]=void 0}),N.stop(),$&&($.flags|=8,ke(Q,y,w,k)),K&&Mt(K,w),Mt(()=>{y.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ct=(y,w,k,U=!1,N=!1,$=0)=>{for(let Q=$;Q<y.length;Q++)ke(y[Q],w,k,U,N)},V=y=>{if(y.shapeFlag&6)return V(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=m(y.anchor||y.el),k=w&&w[vv];return k?m(k):w};let ee=!1;const X=(y,w,k)=>{y==null?w._vnode&&ke(w._vnode,null,null,!0):D(w._vnode||null,y,w,null,null,null,k),w._vnode=y,ee||(ee=!0,Yh(),Up(),ee=!1)},ne={p:D,um:ke,m:Ge,r:Fe,mt:je,mc:E,pc:z,pbc:T,n:V,o:t};let Ie,xe;return e&&([Ie,xe]=e(ne)),{render:X,hydrate:Ie,createApp:Bv(X,Ie)}}function Tc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nm(t,e,n=!1){const r=t.children,s=e.children;if(ge(r)&&ge(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&nm(o,c)),c.type===Pa&&(c.el=o.el),c.type===cr&&!c.el&&(c.el=o.el)}}function Jv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function rm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rm(e)}function rd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xv=Symbol.for("v-scx"),Zv=()=>jt(Xv);function eE(t,e){return Jl(t,null,e)}function Dn(t,e,n){return Jl(t,e,n)}function Jl(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,c=at({},n),l=e&&r||!e&&i!=="post";let h;if(Pi){if(i==="sync"){const _=Zv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Jt,_.resume=Jt,_.pause=Jt,_}}const d=wt;c.call=(_,C,D)=>mn(_,d,C,D);let p=!1;i==="post"?c.scheduler=_=>{Mt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():Kl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=mv(t,e,c);return Pi&&(h?h.push(m):l&&m()),m}function tE(t,e,n){const r=this.proxy,s=tt(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;ve(e)?i=e:(i=e.handler,n=e);const o=qi(this),c=Jl(s,i.bind(r),n);return o(),c}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const nE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Wt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function rE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&nE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>tt(d)?d.trim():d)),o.number&&(s=n.map(Hc)));let c,l=r[c=mc(e)]||r[c=mc(Wt(e))];!l&&i&&(l=r[c=mc(Fr(e))]),l&&mn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,mn(h,t,6,s)}}function im(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ve(t)){const l=h=>{const d=im(h,e,!0);d&&(c=!0,at(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(He(t)&&r.set(t,null),null):(ge(i)?i.forEach(l=>o[l]=null):at(o,i),He(t)&&r.set(t,o),o)}function Sa(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Fr(e))||Ne(t,e))}function wc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:C,inheritAttrs:D}=t,P=Go(t);let M,B;try{if(n.shapeFlag&4){const j=s||r,le=j;M=cn(h.call(le,j,d,p,_,m,C)),B=c}else{const j=e;M=cn(j.length>1?j(p,{attrs:c,slots:o,emit:l}):j(p,null)),B=e.props?c:sE(c)}}catch(j){gi.length=0,Aa(j,t,1),M=Je(cr)}let H=M;if(B&&D!==!1){const j=Object.keys(B),{shapeFlag:le}=H;j.length&&le&7&&(i&&j.some(xl)&&(B=iE(B,i)),H=Ts(H,B,!1,!0))}return n.dirs&&(H=Ts(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Gl(H,n.transition),M=H,Go(P),M}const sE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},iE=(t,e)=>{const n={};for(const r in t)(!xl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function oE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sd(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Sa(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?sd(r,o,h):!0:!!o;return!1}function sd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Sa(n,i))return!0}return!1}function aE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const om=t=>t.__isSuspense;function cE(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):yv(t)}const Qe=Symbol.for("v-fgt"),Pa=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Ic=Symbol.for("v-stc"),gi=[];let Ut=null;function ie(t=!1){gi.push(Ut=t?null:[])}function lE(){gi.pop(),Ut=gi[gi.length-1]||null}let Si=1;function id(t,e=!1){Si+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function am(t){return t.dynamicChildren=Si>0?Ut||us:null,lE(),Si>0&&Ut&&Ut.push(t),t}function he(t,e,n,r,s,i){return am(L(t,e,n,r,s,i,!0))}function Es(t,e,n,r,s){return am(Je(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function Xs(t,e){return t.type===e.type&&t.key===e.key}const cm=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?tt(t)||It(t)||ve(t)?{i:Lt,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cm(e),ref:e&&No(e),scopeId:$p,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Lt};return c?(Xl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),Si>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const Je=uE;function uE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ov)&&(t=cr),Yo(t)){const c=Ts(t,e,!0);return n&&Xl(c,n),Si>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(wE(t)&&(t=t.__vccOpts),e){e=hE(e);let{class:c,style:l}=e;c&&!tt(c)&&(e.class=Gt(c)),He(l)&&(Wl(l)&&!ge(l)&&(l=at({},l)),e.style=Ul(l))}const o=tt(t)?1:om(t)?128:Ev(t)?64:He(t)?4:ve(t)?2:0;return L(t,e,n,r,s,o,i,!0)}function hE(t){return t?Wl(t)||Yp(t)?at({},t):t:null}function Ts(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?dE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&cm(h),ref:e&&e.ref?n&&i?ge(i)?i.concat(No(e)):[i,No(e)]:No(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ts(t.ssContent),ssFallback:t.ssFallback&&Ts(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Gl(d,l.clone(d)),d}function Zc(t=" ",e=0){return Je(Pa,null,t,e)}function Dt(t="",e=!1){return e?(ie(),Es(cr,null,t)):Je(cr,null,t)}function cn(t){return t==null||typeof t=="boolean"?Je(cr):ge(t)?Je(Qe,null,t.slice()):Yo(t)?zn(t):Je(Pa,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ts(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Yp(e)?e._ctx=Lt:s===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:Lt},n=32):(e=String(e),r&64?(n=16,e=[Zc(e)]):n=8);t.children=e,t.shapeFlag|=n}function dE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Gt([e.class,r.class]));else if(s==="style")e.style=Ul([e.style,r.style]);else if(ya(s)){const i=e[s],o=r[s];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){mn(t,e,7,[n,r])}const fE=Gp();let pE=0;function mE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fE,i={uid:pE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xp(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const gE=()=>wt||Lt;let Jo,el;{const t=wa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),el=e("__VUE_SSR_SETTERS__",n=>Pi=n)}const qi=t=>{const e=wt;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},od=()=>{wt&&wt.scope.off(),Jo(null)};function lm(t){return t.vnode.shapeFlag&4}let Pi=!1;function _E(t,e=!1,n=!1){e&&el(e);const{props:r,children:s}=t.vnode,i=lm(t);jv(t,r,i,e),Kv(t,s,n||e);const o=i?yE(t,e):void 0;return e&&el(!1),o}function yE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vv);const{setup:r}=n;if(r){Nn();const s=t.setupContext=r.length>1?EE(t):null,i=qi(t),o=ji(r,t,0,[t.props,s]),c=hp(o);if(Vn(),i(),(c||t.sp)&&!pi(t)&&jp(t),c){if(o.then(od,od),e)return o.then(l=>{ad(t,l,e)}).catch(l=>{Aa(l,t,0)});t.asyncDep=o}else ad(t,o,e)}else um(t,e)}function ad(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=Vp(e)),um(t,n)}let cd;function um(t,e,n){const r=t.type;if(!t.render){if(!e&&cd&&!r.render){const s=r.template||zl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=at(at({isCustomElement:i,delimiters:c},o),l);r.render=cd(s,h)}}t.render=r.render||Jt}{const s=qi(t);Nn();try{xv(t)}finally{Vn(),s()}}}const vE={get(t,e){return Et(t,"get",""),t[e]}};function EE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vE),slots:t.slots,emit:t.emit,expose:e}}function Ca(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vp(cv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}})):t.proxy}function TE(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function wE(t){return ve(t)&&"__vccOpts"in t}const ot=(t,e)=>fv(t,e,Pi);function hm(t,e,n){const r=arguments.length;return r===2?He(e)&&!ge(e)?Yo(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yo(n)&&(n=[n]),Je(t,e,n))}const IE="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tl;const ld=typeof window<"u"&&window.trustedTypes;if(ld)try{tl=ld.createPolicy("vue",{createHTML:t=>t})}catch{}const dm=tl?t=>tl.createHTML(t):t=>t,AE="http://www.w3.org/2000/svg",bE="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,ud=An&&An.createElement("template"),RE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(AE,t):e==="mathml"?An.createElementNS(bE,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ud.innerHTML=dm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ud.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},SE=Symbol("_vtc");function PE(t,e,n){const r=t[SE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hd=Symbol("_vod"),CE=Symbol("_vsh"),kE=Symbol(""),DE=/(^|;)\s*display\s*:/;function OE(t,e,n){const r=t.style,s=tt(n);let i=!1;if(n&&!s){if(e)if(tt(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Vo(r,c,"")}else for(const o in e)n[o]==null&&Vo(r,o,"");for(const o in n)o==="display"&&(i=!0),Vo(r,o,n[o])}else if(s){if(e!==n){const o=r[kE];o&&(n+=";"+o),r.cssText=n,i=DE.test(n)}}else e&&t.removeAttribute("style");hd in t&&(t[hd]=i?r.display:"",t[CE]&&(r.display="none"))}const dd=/\s*!important$/;function Vo(t,e,n){if(ge(n))n.forEach(r=>Vo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=NE(t,e);dd.test(n)?t.setProperty(Fr(r),n.replace(dd,""),"important"):t[r]=n}}const fd=["Webkit","Moz","ms"],Ac={};function NE(t,e){const n=Ac[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return Ac[e]=r;r=Ta(r);for(let s=0;s<fd.length;s++){const i=fd[s]+r;if(i in t)return Ac[e]=i}return e}const pd="http://www.w3.org/1999/xlink";function md(t,e,n,r,s,i=By(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pd,e.slice(6,e.length)):t.setAttributeNS(pd,e,n):n==null||i&&!pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":pr(n)?String(n):n)}function gd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ns(t,e,n,r){t.addEventListener(e,n,r)}function VE(t,e,n,r){t.removeEventListener(e,n,r)}const _d=Symbol("_vei");function xE(t,e,n,r,s=null){const i=t[_d]||(t[_d]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=ME(e);if(r){const h=i[e]=FE(r,s);ns(t,c,h,l)}else o&&(VE(t,c,o,l),i[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function ME(t){let e;if(yd.test(t)){e={};let r;for(;r=t.match(yd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let bc=0;const LE=Promise.resolve(),UE=()=>bc||(LE.then(()=>bc=0),bc=Date.now());function FE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mn($E(r,n.value),e,5,[r])};return n.value=t,n.attached=UE(),n}function $E(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,BE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?PE(t,r,o):e==="style"?OE(t,n,r):ya(e)?xl(e)||xE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jE(t,e,r,o))?(gd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&md(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!tt(r))?gd(t,Wt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),md(t,e,r,o))};function jE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&vd(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vd(e)&&tt(n)?!1:e in t}const Ed=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ge(e)?n=>Do(e,n):e};function qE(t){t.target.composing=!0}function Td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rc=Symbol("_assign"),Or={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Rc]=Ed(s);const i=r||s.props&&s.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Hc(c)),t[Rc](c)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",qE),ns(t,"compositionend",Td),ns(t,"change",Td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Rc]=Ed(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Hc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},HE=["ctrl","shift","alt","meta"],WE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>HE.some(n=>t[`${n}Key`]&&!e.includes(n))},an=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=WE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},KE=at({patchProp:BE},RE);let wd;function GE(){return wd||(wd=zv(KE))}const zE=(...t)=>{const e=GE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=YE(r);if(!s)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,QE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function QE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function YE(t){return tt(t)?document.querySelector(t):t}/**
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
 */const fm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},JE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):JE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new XE;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZE=function(t){const e=fm(t);return pm.encodeByteArray(e,!0)},Xo=function(t){return ZE(t).replace(/\./g,"")},mm=function(t){try{return pm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tT=()=>eT().__FIREBASE_DEFAULTS__,nT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mm(t[1]);return e&&JSON.parse(e)},ka=()=>{try{return tT()||nT()||rT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gm=t=>{var e,n;return(n=(e=ka())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_m=t=>{const e=gm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ym=()=>{var t;return(t=ka())===null||t===void 0?void 0:t.config},vm=t=>{var e;return(e=ka())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Em(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Xo(JSON.stringify(n)),Xo(JSON.stringify(o)),c].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function oT(){var t;const e=(t=ka())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hT(){return!oT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dT(){try{return typeof indexedDB=="object"}catch{return!1}}function fT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pT="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pT,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new yn(s,c,r)}}function mT(t,e){return t.replace(gT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gT=/\{\$([^}]+)}/g;function _T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Id(i)&&Id(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Id(t){return t!==null&&typeof t=="object"}/**
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
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yT(t,e){const n=new vT(t,e);return n.subscribe.bind(n)}class vT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ET(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ET(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rr="[DEFAULT]";/**
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
 */class TT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IT(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wT(t){return t===Rr?void 0:t}function IT(t){return t.instantiationMode==="EAGER"}/**
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
 */class AT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const bT={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},RT=be.INFO,ST={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},PT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ST[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=RT,this._logHandler=PT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const CT=(t,e)=>e.some(n=>t instanceof n);let Ad,bd;function kT(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return bd||(bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,nl=new WeakMap,wm=new WeakMap,Pc=new WeakMap,eu=new WeakMap;function OT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function NT(t){if(nl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nl.set(t,e)}let rl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VT(t){rl=t(rl)}function xT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cc(this),e,...n);return wm.set(r,e.sort?e.sort():[e]),nr(r)}:DT().includes(t)?function(...e){return t.apply(Cc(this),e),nr(Tm.get(this))}:function(...e){return nr(t.apply(Cc(this),e))}}function MT(t){return typeof t=="function"?xT(t):(t instanceof IDBTransaction&&NT(t),CT(t,kT())?new Proxy(t,rl):t)}function nr(t){if(t instanceof IDBRequest)return OT(t);if(Pc.has(t))return Pc.get(t);const e=MT(t);return e!==t&&(Pc.set(t,e),eu.set(e,t)),e}const Cc=t=>eu.get(t);function LT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const UT=["get","getKey","getAll","getAllKeys","count"],FT=["put","add","delete","clear"],kc=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kc.get(e))return kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return kc.set(e,i),i}VT(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
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
 */class $T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sl="@firebase/app",Sd="0.10.13";/**
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
 */const xn=new Zl("@firebase/app"),jT="@firebase/app-compat",qT="@firebase/analytics-compat",HT="@firebase/analytics",WT="@firebase/app-check-compat",KT="@firebase/app-check",GT="@firebase/auth",zT="@firebase/auth-compat",QT="@firebase/database",YT="@firebase/data-connect",JT="@firebase/database-compat",XT="@firebase/functions",ZT="@firebase/functions-compat",ew="@firebase/installations",tw="@firebase/installations-compat",nw="@firebase/messaging",rw="@firebase/messaging-compat",sw="@firebase/performance",iw="@firebase/performance-compat",ow="@firebase/remote-config",aw="@firebase/remote-config-compat",cw="@firebase/storage",lw="@firebase/storage-compat",uw="@firebase/firestore",hw="@firebase/vertexai-preview",dw="@firebase/firestore-compat",fw="firebase",pw="10.14.1";/**
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
 */const il="[DEFAULT]",mw={[sl]:"fire-core",[jT]:"fire-core-compat",[HT]:"fire-analytics",[qT]:"fire-analytics-compat",[KT]:"fire-app-check",[WT]:"fire-app-check-compat",[GT]:"fire-auth",[zT]:"fire-auth-compat",[QT]:"fire-rtdb",[YT]:"fire-data-connect",[JT]:"fire-rtdb-compat",[XT]:"fire-fn",[ZT]:"fire-fn-compat",[ew]:"fire-iid",[tw]:"fire-iid-compat",[nw]:"fire-fcm",[rw]:"fire-fcm-compat",[sw]:"fire-perf",[iw]:"fire-perf-compat",[ow]:"fire-rc",[aw]:"fire-rc-compat",[cw]:"fire-gcs",[lw]:"fire-gcs-compat",[uw]:"fire-fst",[dw]:"fire-fst-compat",[hw]:"fire-vertex","fire-js":"fire-js",[fw]:"fire-js-all"};/**
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
 */const ea=new Map,gw=new Map,ol=new Map;function Pd(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nr(t){const e=t.name;if(ol.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;ol.set(e,t);for(const n of ea.values())Pd(n,t);for(const n of gw.values())Pd(n,t);return!0}function Da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
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
 */const _w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Hi("app","Firebase",_w);/**
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
 */class yw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=pw;function Im(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:il,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=ym()),!n)throw rr.create("no-options");const i=ea.get(s);if(i){if(Zo(n,i.options)&&Zo(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new AT(s);for(const l of ol.values())o.addComponent(l);const c=new yw(n,r,o);return ea.set(s,c),c}function tu(t=il){const e=ea.get(t);if(!e&&t===il&&ym())return Im();if(!e)throw rr.create("no-app",{appName:t});return e}function un(t,e,n){var r;let s=(r=mw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(c.join(" "));return}Nr(new lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vw="firebase-heartbeat-database",Ew=1,Ci="firebase-heartbeat-store";let Dc=null;function Am(){return Dc||(Dc=LT(vw,Ew,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function Tw(t){try{const n=(await Am()).transaction(Ci),r=await n.objectStore(Ci).get(bm(t));return await n.done,r}catch(e){if(e instanceof yn)xn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Cd(t,e){try{const r=(await Am()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,bm(t)),await r.done}catch(n){if(n instanceof yn)xn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ww=1024,Iw=30*24*60*60*1e3;class Aw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Iw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kd(),{heartbeatsToSend:r,unsentEntries:s}=bw(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function kd(){return new Date().toISOString().substring(0,10)}function bw(t,e=ww){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dT()?fT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Sw(t){Nr(new lr("platform-logger",e=>new $T(e),"PRIVATE")),Nr(new lr("heartbeat",e=>new Aw(e),"PRIVATE")),un(sl,Sd,t),un(sl,Sd,"esm2017"),un("fire-js","")}Sw("");function nu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pw=Rm,Sm=new Hi("auth","Firebase",Rm());/**
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
 */const ta=new Zl("@firebase/auth");function Cw(t,...e){ta.logLevel<=be.WARN&&ta.warn(`Auth (${$r}): ${t}`,...e)}function xo(t,...e){ta.logLevel<=be.ERROR&&ta.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function Zt(t,...e){throw ru(t,...e)}function hn(t,...e){return ru(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},Pw()),{[e]:n});return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return Pm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sm.create(t,...e)}function pe(t,e,...n){if(!t)throw ru(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Mn(t,e){t||Pn(e)}/**
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
 */function al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kw(){return Od()==="http:"||Od()==="https:"}function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kw()||cT()||"connection"in navigator)?navigator.onLine:!0}function Ow(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=iT()||lT()}get(){return Dw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function su(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vw=new Ki(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,s={}){return km(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Wi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return aT()||(h.referrerPolicy="no-referrer"),Cm.fetch()(Dm(t,t.config.apiHost,n,c),h)})}async function km(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nw),e);try{const s=new Mw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ao(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ao(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ao(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pm(t,d,h);Zt(t,d)}}catch(s){if(s instanceof yn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function Gi(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?su(t.config,s):`${t.config.apiScheme}://${s}`}function xw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),Vw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}function Nd(t){return t!==void 0&&t.enterprise!==void 0}class Lw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Uw(t,e){return gr(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
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
 */async function Fw(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function Om(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $w(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=iu(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(Oc(s.auth_time)),issuedAtTime:_i(Oc(s.iat)),expirationTime:_i(Oc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oc(t){return Number(t)*1e3}function iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=mm(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vd(t){const e=iu(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&Bw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,Om(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nm(i.providerUserInfo):[],c=Hw(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new cl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function qw(t){const e=nt(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Nm(t){return t.map(e=>{var{providerId:n}=e,r=nu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ww(t,e){const n=await km(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Cm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Kw(t,e){return gr(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
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
 */class ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Vd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ww(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ms;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ms,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Wn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $w(this,e)}reload(){return qw(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await ki(this,Fw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:j,isAnonymous:le,providerData:de,stsTokenManager:R}=n;pe(H&&R,e,"internal-error");const E=ms.fromJSON(this.name,R);pe(typeof H=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),pe(typeof j=="boolean",e,"internal-error"),pe(typeof le=="boolean",e,"internal-error"),Wn(_,e.name),Wn(C,e.name),Wn(D,e.name),Wn(P,e.name),Wn(M,e.name),Wn(B,e.name);const A=new Cn({uid:H,auth:e,email:m,emailVerified:j,displayName:p,isAnonymous:le,photoURL:C,phoneNumber:_,tenantId:D,stsTokenManager:E,createdAt:M,lastLoginAt:B});return de&&Array.isArray(de)&&(A.providerData=de.map(T=>Object.assign({},T))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new ms;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ms;c.updateFromIdToken(r);const l=new Cn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const xd=new Map;function kn(t){Mn(t instanceof Function,"Expected a class definition");let e=xd.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xd.set(t,e),e)}/**
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
 */class Vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vm.type="NONE";const Md=Vm;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class gs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new gs(kn(Md),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kn(Md);const o=Mo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Cn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new gs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new gs(i,e,r))}}/**
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
 */function Ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($m(e))return"Blackberry";if(Bm(e))return"Webos";if(Mm(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if(Fm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xm(t=At()){return/firefox\//i.test(t)}function Mm(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(t=At()){return/crios\//i.test(t)}function Um(t=At()){return/iemobile/i.test(t)}function Fm(t=At()){return/android/i.test(t)}function $m(t=At()){return/blackberry/i.test(t)}function Bm(t=At()){return/webos/i.test(t)}function ou(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gw(t=At()){var e;return ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zw(){return uT()&&document.documentMode===10}function jm(t=At()){return ou(t)||Fm(t)||Bm(t)||$m(t)||/windows phone/i.test(t)||Um(t)}/**
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
 */function qm(t,e=[]){let n;switch(t){case"Browser":n=Ld(At());break;case"Worker":n=`${Ld(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class Qw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Yw(t,e={}){return gr(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Jw=6;class Xw{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Zw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ud(this),this.idTokenSubscription=new Ud(this),this.beforeStateQueue=new Qw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await gs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Om(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ow()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(On(this));const n=e?nt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yw(this),n=new Xw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Kw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await gs.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Br(t){return nt(t)}class Ud{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(t){Oa=t}function Hm(t){return Oa.loadJS(t)}function tI(){return Oa.recaptchaEnterpriseScript}function nI(){return Oa.gapiScript}function rI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sI="recaptcha-enterprise",iI="NO_RECAPTCHA";class oI{constructor(e){this.type=sI,this.auth=Br(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Uw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Lw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(iI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Nd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tI();l.length!==0&&(l+=c),Hm(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Fd(t,e,n,r=!1){const s=new oI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ll(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Fd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Fd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function aI(t,e){const n=Da(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zo(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function cI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lI(t,e,n){const r=Br(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Wm(e),{host:o,port:c}=uI(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hI()}function Wm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uI(t){const e=Wm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$d(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$d(o)}}}function $d(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function dI(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fI(t,e){return Gi(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
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
 */async function pI(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function mI(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
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
 */class Di extends au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ll(e,n,"signInWithPassword",fI);case"emailLink":return pI(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ll(e,r,"signUpPassword",dI);case"emailLink":return mI(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _s(t,e){return Gi(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
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
 */const gI="http://localhost";class Vr extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=nu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
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
 */function _I(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yI(t){const e=ri(si(t)).link,n=e?ri(si(e)).deep_link_id:null,r=ri(si(t)).deep_link_id;return(r?ri(si(r)).link:null)||r||n||e||t}class cu{constructor(e){var n,r,s,i,o,c;const l=ri(si(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=_I((s=l.mode)!==null&&s!==void 0?s:null);pe(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=yI(e);try{return new cu(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cu.parseLink(n);return pe(r,"argument-error"),Di._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Km{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends Km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends zi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends zi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends zi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function vI(t,e){return Gi(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
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
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=Bd(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bd(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ra extends yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function Gm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function EI(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",r)}/**
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
 */async function TI(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(On(r));const s="reauthenticate";try{const i=await ki(t,Gm(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=iu(i.idToken);pe(o,r,"internal-error");const{sub:c}=o;return pe(t.uid===c,r,"user-mismatch"),xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function zm(t,e,n=!1){if(ln(t.app))return Promise.reject(On(t));const r="signIn",s=await Gm(t,r,e),i=await xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function wI(t,e){return zm(Br(t),e)}/**
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
 */async function Qm(t){const e=Br(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function II(t,e,n){if(ln(t.app))return Promise.reject(On(t));const r=Br(t),o=await ll(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qm(t),l}),c=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function AI(t,e,n){return ln(t.app)?Promise.reject(On(t)):wI(nt(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(t),r})}function bI(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function RI(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function SI(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function PI(t){return nt(t).signOut()}const sa="__sak";/**
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
 */class Ym{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CI=1e3,kI=10;class Jm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jm.type="LOCAL";const DI=Jm;/**
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
 */class Xm extends Ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xm.type="SESSION";const Zm=Xm;/**
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
 */function OI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await OI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=lu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function VI(t){dn().location.href=t}/**
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
 */function eg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function xI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LI(){return eg()?self:null}/**
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
 */const tg="firebaseLocalStorageDb",UI=1,ia="firebaseLocalStorage",ng="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function FI(){const t=indexedDB.deleteDatabase(tg);return new Qi(t).toPromise()}function ul(){const t=indexedDB.open(tg,UI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:ng})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await FI(),e(await ul()))})})}async function jd(t,e,n){const r=Va(t,!0).put({[ng]:e,value:n});return new Qi(r).toPromise()}async function $I(t,e){const n=Va(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function qd(t,e){const n=Va(t,!0).delete(e);return new Qi(n).toPromise()}const BI=800,jI=3;class rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(LI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xI(),!this.activeServiceWorker)return;this.sender=new NI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ul();return await jd(e,sa,"1"),await qd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$I(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Va(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rg.type="LOCAL";const qI=rg;new Ki(3e4,6e4);/**
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
 */function HI(t,e){return e?kn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WI(t){return zm(t.auth,new uu(t),t.bypassAuthState)}function KI(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),TI(n,new uu(t),t.bypassAuthState)}async function GI(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),EI(n,new uu(t),t.bypassAuthState)}/**
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
 */class sg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WI;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return KI;default:Zt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zI=new Ki(2e3,1e4);class ls extends sg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zI.get())};e()}}ls.currentPopupAction=null;/**
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
 */const QI="pendingRedirect",Lo=new Map;class YI extends sg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await JI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JI(t,e){const n=eA(e),r=ZI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function XI(t,e){Lo.set(t._key(),e)}function ZI(t){return kn(t._redirectPersistence)}function eA(t){return Mo(QI,t.config.apiKey,t.name)}async function tA(t,e,n=!1){if(ln(t.app))return Promise.reject(On(t));const r=Br(t),s=HI(r,e),o=await new YI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nA=10*60*1e3;class rA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ig(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hd(e))}saveEventToCache(e){this.cachedEventUids.add(Hd(e)),this.lastProcessedEventTime=Date.now()}}function Hd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ig({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ig(t);default:return!1}}/**
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
 */async function iA(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const oA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aA=/^https?/;async function cA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iA(t);for(const n of e)try{if(lA(n))return}catch{}Zt(t,"unauthorized-domain")}function lA(t){const e=al(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aA.test(n))return!1;if(oA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uA=new Ki(3e4,6e4);function Wd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hA(t){return new Promise((e,n)=>{var r,s,i;function o(){Wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wd(),n(hn(t,"network-request-failed"))},timeout:uA.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const c=rI("iframefcb");return dn()[c]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},Hm(`${nI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function dA(t){return Uo=Uo||hA(t),Uo}/**
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
 */const fA=new Ki(5e3,15e3),pA="__/auth/iframe",mA="emulator/auth/iframe",gA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?su(e,mA):`https://${t.config.authDomain}/${pA}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=_A.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Wi(r).slice(1)}`}async function vA(t){const e=await dA(t),n=dn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:yA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),c=dn().setTimeout(()=>{i(o)},fA.get());function l(){dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const EA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TA=500,wA=600,IA="_blank",AA="http://localhost";class Kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bA(t,e,n,r=TA,s=wA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},EA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=At().toLowerCase();n&&(c=Lm(h)?IA:n),xm(h)&&(e=e||AA,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(Gw(h)&&c!=="_self")return RA(e||"",c),new Kd(null);const p=window.open(e||"",c,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new Kd(p)}function RA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SA="__/auth/handler",PA="emulator/auth/handler",CA=encodeURIComponent("fac");async function Gd(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_T(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(e instanceof zi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${CA}=${encodeURIComponent(l)}`:"";return`${kA(t)}?${Wi(c).slice(1)}${h}`}function kA({config:t}){return t.emulator?su(t,PA):`https://${t.authDomain}/${SA}`}/**
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
 */const Nc="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zm,this._completeRedirectFn=tA,this._overrideRedirectResult=XI}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Gd(e,n,r,al(),s);return bA(e,o,lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gd(e,n,r,al(),s);return VI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vA(e),r=new rA(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nc];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jm()||Mm()||ou()}}const OA=DA;var zd="@firebase/auth",Qd="1.7.9";/**
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
 */class NA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(t){Nr(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qm(t)},h=new Zw(r,s,i,l);return cI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new lr("auth-internal",e=>{const n=Br(e.getProvider("auth").getImmediate());return(r=>new NA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(zd,Qd,VA(t)),un(zd,Qd,"esm2017")}/**
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
 */const MA=5*60,LA=vm("authIdTokenMaxAge")||MA;let Yd=null;const UA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LA)return;const s=n==null?void 0:n.token;Yd!==s&&(Yd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hu(t=tu()){const e=Da(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aI(t,{popupRedirectResolver:OA,persistence:[qI,DI,Zm]}),r=vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=UA(i.toString());RI(n,o,()=>o(n.currentUser)),bI(n,c=>o(c))}}const s=gm("auth");return s&&lI(n,`http://${s}`),n}function FA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",FA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");function $A(){return og().__VUE_DEVTOOLS_GLOBAL_HOOK__}function og(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const BA=typeof Proxy=="function",jA="devtools-plugin:setup",qA="plugin:settings:set";let Xr,hl;function HA(){var t;return Xr!==void 0||(typeof window<"u"&&window.performance?(Xr=!0,hl=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Xr=!0,hl=globalThis.perf_hooks.performance):Xr=!1),Xr}function WA(){return HA()?hl.now():Date.now()}class KA{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return WA()}},n&&n.on(qA,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:c,args:l,resolve:h})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function GA(t,e){const n=t,r=og(),s=$A(),i=BA&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(jA,t,e);else{const o=i?new KA(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof document<"u";function ag(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ag(t.default)}const De=Object.assign;function Vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const yi=()=>{},en=Array.isArray,cg=/#/g,QA=/&/g,YA=/\//g,JA=/=/g,XA=/\?/g,lg=/\+/g,ZA=/%5B/g,e0=/%5D/g,ug=/%5E/g,t0=/%60/g,hg=/%7B/g,n0=/%7C/g,dg=/%7D/g,r0=/%20/g;function du(t){return encodeURI(""+t).replace(n0,"|").replace(ZA,"[").replace(e0,"]")}function s0(t){return du(t).replace(hg,"{").replace(dg,"}").replace(ug,"^")}function dl(t){return du(t).replace(lg,"%2B").replace(r0,"+").replace(cg,"%23").replace(QA,"%26").replace(t0,"`").replace(hg,"{").replace(dg,"}").replace(ug,"^")}function i0(t){return dl(t).replace(JA,"%3D")}function o0(t){return du(t).replace(cg,"%23").replace(XA,"%3F")}function a0(t){return t==null?"":o0(t).replace(YA,"%2F")}function Oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const c0=/\/$/,l0=t=>t.replace(c0,"");function xc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=f0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Oi(o)}}function u0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ws(e.matched[r],n.matched[s])&&fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!d0(t[n],e[n]))return!1;return!0}function d0(t,e){return en(t)?Xd(t,e):en(e)?Xd(e,t):t===e}function Xd(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function f0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ni;(function(t){t.pop="pop",t.push="push"})(Ni||(Ni={}));var vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vi||(vi={}));function p0(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),l0(t)}const m0=/^[^#]+#/;function g0(t,e){return t.replace(m0,"#")+e}function _0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xa=()=>({left:window.scrollX,top:window.scrollY});function y0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const fl=new Map;function v0(t,e){fl.set(t,e)}function E0(t){const e=fl.get(t);return fl.delete(t),e}let T0=()=>location.protocol+"//"+location.host;function pg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+r+s}function w0(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=pg(t,location),C=n.value,D=e.value;let P=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}P=D?m.position-D.position:0}else r(_);s.forEach(M=>{M(n.value,C,{delta:P,type:Ni.pop,direction:P?P>0?vi.forward:vi.back:vi.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:xa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xa():null}}function I0(t){const{history:e,location:n}=window,r={value:pg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:T0()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,h){const d=De({},e.state,ef(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=De({},s.value,e.state,{forward:l,scroll:xa()});i(d.current,d,!0);const p=De({},ef(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function A0(t){t=p0(t);const e=I0(t),n=w0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:g0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function b0(t){return typeof t=="string"||t&&typeof t=="object"}function mg(t){return typeof t=="string"||typeof t=="symbol"}const gg=Symbol("");var tf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tf||(tf={}));function Is(t,e){return De(new Error,{type:t,[gg]:!0},e)}function In(t,e){return t instanceof Error&&gg in t&&(e==null||!!(t.type&e))}const nf="[^/]+?",R0={sensitive:!1,strict:!1,start:!0,end:!0},S0=/[.+*?^${}()[\]/\\]/g;function P0(t,e){const n=De({},R0,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(S0,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:P,regexp:M}=m;i.push({name:C,repeatable:D,optional:P});const B=M||nf;if(B!==nf){_+=10;try{new RegExp(`(${B})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${C}" (${B}): `+j.message)}}let H=D?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(H=P&&h.length<2?`(?:/${H})`:"/"+H),P&&(H+="?"),s+=H,_+=20,P&&(_+=-8),D&&(_+=-20),B===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:P}=_,M=C in h?h[C]:"";if(en(M)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const B=en(M)?M.join("/"):M;if(!B)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=B}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function C0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _g(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=C0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(rf(r))return 1;if(rf(s))return-1}return s.length-r.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k0={type:0,value:""},D0=/[a-zA-Z0-9_]/;function O0(t){if(!t)return[[]];if(t==="/")return[[k0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:D0.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function N0(t,e,n){const r=P0(O0(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function V0(t,e){const n=[],r=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,D=of(p);D.aliasOf=_&&_.record;const P=cf(e,p),M=[D];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of j)M.push(of(De({},D,{components:_?_.record.components:D.components,path:le,aliasOf:_?_.record:D})))}let B,H;for(const j of M){const{path:le}=j;if(m&&le[0]!=="/"){const de=m.record.path,R=de[de.length-1]==="/"?"":"/";j.path=m.record.path+(le&&R+le)}if(B=N0(j,m,P),_?_.alias.push(B):(H=H||B,H!==B&&H.alias.push(B),C&&p.name&&!af(B)&&o(p.name)),yg(B)&&l(B),D.children){const de=D.children;for(let R=0;R<de.length;R++)i(de[R],B,_&&_.children[R])}_=_||B}return H?()=>{o(H)}:yi}function o(p){if(mg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=L0(p,n);n.splice(m,0,p),p.record.name&&!af(p)&&r.set(p.record.name,p)}function h(p,m){let _,C={},D,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Is(1,{location:p});P=_.record.name,C=De(sf(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&sf(p.params,_.keys.map(H=>H.name))),D=_.stringify(C)}else if(p.path!=null)D=p.path,_=n.find(H=>H.re.test(D)),_&&(C=_.parse(D),P=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw Is(1,{location:p,currentLocation:m});P=_.record.name,C=De({},m.params,p.params),D=_.stringify(C)}const M=[];let B=_;for(;B;)M.unshift(B.record),B=B.parent;return{name:P,path:D,params:C,matched:M,meta:M0(M)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function sf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function of(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:x0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function x0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function M0(t){return t.reduce((e,n)=>De(e,n.meta),{})}function cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function L0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;_g(t,e[i])<0?r=i:n=i+1}const s=U0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function U0(t){let e=t;for(;e=e.parent;)if(yg(e)&&_g(t,e)===0)return e}function yg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function F0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(lg," "),o=i.indexOf("="),c=Oi(o<0?i:i.slice(0,o)),l=o<0?null:Oi(i.slice(o+1));if(c in e){let h=e[c];en(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=i0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&dl(i)):[r&&dl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function $0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const B0=Symbol(""),uf=Symbol(""),Ma=Symbol(""),fu=Symbol(""),pl=Symbol("");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Is(4,{from:n,to:e})):m instanceof Error?l(m):b0(m)?l(Is(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Mc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ag(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Qn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=zA(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Qn(_,n,r,o,c,s)()}))}}return i}function hf(t){const e=jt(Ma),n=jt(fu),r=ot(()=>{const l=Cr(t.to);return e.resolve(l)}),s=ot(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ws.bind(null,d));if(m>-1)return m;const _=df(l[h-2]);return h>1&&df(d)===_&&p[p.length-1].path!==_?p.findIndex(ws.bind(null,l[h-2])):m}),i=ot(()=>s.value>-1&&K0(n.params,r.value.params)),o=ot(()=>s.value>-1&&s.value===n.matched.length-1&&fg(n.params,r.value.params));function c(l={}){if(W0(l)){const h=e[Cr(t.replace)?"replace":"push"](Cr(t.to)).catch(yi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function j0(t){return t.length===1?t[0]:t}const q0=Bp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hf,setup(t,{slots:e}){const n=Bi(hf(t)),{options:r}=jt(Ma),s=ot(()=>({[ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&j0(e.default(n));return t.custom?i:hm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),H0=q0;function W0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function K0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function df(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t??e??n,G0=Bp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(pl),s=ot(()=>t.route||r.value),i=jt(uf,0),o=ot(()=>{let h=Cr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=ot(()=>s.value.matched[o.value]);Oo(uf,ot(()=>o.value+1)),Oo(B0,c),Oo(pl,s);const l=Ae();return Dn(()=>[l.value,c.value,t.name],([h,d,p],[m,_,C])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!ws(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return pf(n.default,{Component:m,route:h});const _=p.props[d],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,P=hm(m,De({},C,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return pf(n.default,{Component:P,route:h})||P}}});function pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z0=G0;function Q0(t){const e=V0(t.routes,t),n=t.parseQuery||F0,r=t.stringifyQuery||lf,s=t.history,i=Zs(),o=Zs(),c=Zs(),l=lv(Kn);let h=Kn;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Vc.bind(null,V=>""+V),p=Vc.bind(null,a0),m=Vc.bind(null,Oi);function _(V,ee){let X,ne;return mg(V)?(X=e.getRecordMatcher(V),ne=ee):ne=V,e.addRoute(ne,X)}function C(V){const ee=e.getRecordMatcher(V);ee&&e.removeRoute(ee)}function D(){return e.getRoutes().map(V=>V.record)}function P(V){return!!e.getRecordMatcher(V)}function M(V,ee){if(ee=De({},ee||l.value),typeof V=="string"){const w=xc(n,V,ee.path),k=e.resolve({path:w.path},ee),U=s.createHref(w.fullPath);return De(w,k,{params:m(k.params),hash:Oi(w.hash),redirectedFrom:void 0,href:U})}let X;if(V.path!=null)X=De({},V,{path:xc(n,V.path,ee.path).path});else{const w=De({},V.params);for(const k in w)w[k]==null&&delete w[k];X=De({},V,{params:p(w)}),ee.params=p(ee.params)}const ne=e.resolve(X,ee),Ie=V.hash||"";ne.params=d(m(ne.params));const xe=u0(r,De({},V,{hash:s0(Ie),path:ne.path})),y=s.createHref(xe);return De({fullPath:xe,hash:Ie,query:r===lf?$0(V.query):V.query||{}},ne,{redirectedFrom:void 0,href:y})}function B(V){return typeof V=="string"?xc(n,V,l.value.path):De({},V)}function H(V,ee){if(h!==V)return Is(8,{from:ee,to:V})}function j(V){return R(V)}function le(V){return j(De(B(V),{replace:!0}))}function de(V){const ee=V.matched[V.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let ne=typeof X=="function"?X(V):X;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=B(ne):{path:ne},ne.params={}),De({query:V.query,hash:V.hash,params:ne.path!=null?{}:V.params},ne)}}function R(V,ee){const X=h=M(V),ne=l.value,Ie=V.state,xe=V.force,y=V.replace===!0,w=de(X);if(w)return R(De(B(w),{state:typeof w=="object"?De({},Ie,w.state):Ie,force:xe,replace:y}),ee||X);const k=X;k.redirectedFrom=ee;let U;return!xe&&h0(r,ne,X)&&(U=Is(16,{to:k,from:ne}),Ge(ne,ne,!0,!1)),(U?Promise.resolve(U):T(k,ne)).catch(N=>In(N)?In(N,2)?N:Te(N):z(N,k,ne)).then(N=>{if(N){if(In(N,2))return R(De({replace:y},B(N.to),{state:typeof N.to=="object"?De({},Ie,N.to.state):Ie,force:xe}),ee||k)}else N=b(k,ne,!0,y,Ie);return I(k,ne,N),N})}function E(V,ee){const X=H(V,ee);return X?Promise.reject(X):Promise.resolve()}function A(V){const ee=$n.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(V):V()}function T(V,ee){let X;const[ne,Ie,xe]=Y0(V,ee);X=Mc(ne.reverse(),"beforeRouteLeave",V,ee);for(const w of ne)w.leaveGuards.forEach(k=>{X.push(Qn(k,V,ee))});const y=E.bind(null,V,ee);return X.push(y),Ct(X).then(()=>{X=[];for(const w of i.list())X.push(Qn(w,V,ee));return X.push(y),Ct(X)}).then(()=>{X=Mc(Ie,"beforeRouteUpdate",V,ee);for(const w of Ie)w.updateGuards.forEach(k=>{X.push(Qn(k,V,ee))});return X.push(y),Ct(X)}).then(()=>{X=[];for(const w of xe)if(w.beforeEnter)if(en(w.beforeEnter))for(const k of w.beforeEnter)X.push(Qn(k,V,ee));else X.push(Qn(w.beforeEnter,V,ee));return X.push(y),Ct(X)}).then(()=>(V.matched.forEach(w=>w.enterCallbacks={}),X=Mc(xe,"beforeRouteEnter",V,ee,A),X.push(y),Ct(X))).then(()=>{X=[];for(const w of o.list())X.push(Qn(w,V,ee));return X.push(y),Ct(X)}).catch(w=>In(w,8)?w:Promise.reject(w))}function I(V,ee,X){c.list().forEach(ne=>A(()=>ne(V,ee,X)))}function b(V,ee,X,ne,Ie){const xe=H(V,ee);if(xe)return xe;const y=ee===Kn,w=rs?history.state:{};X&&(ne||y?s.replace(V.fullPath,De({scroll:y&&w&&w.scroll},Ie)):s.push(V.fullPath,Ie)),l.value=V,Ge(V,ee,X,y),Te()}let v;function je(){v||(v=s.listen((V,ee,X)=>{if(!rn.listening)return;const ne=M(V),Ie=de(ne);if(Ie){R(De(Ie,{replace:!0,force:!0}),ne).catch(yi);return}h=ne;const xe=l.value;rs&&v0(Zd(xe.fullPath,X.delta),xa()),T(ne,xe).catch(y=>In(y,12)?y:In(y,2)?(R(De(B(y.to),{force:!0}),ne).then(w=>{In(w,20)&&!X.delta&&X.type===Ni.pop&&s.go(-1,!1)}).catch(yi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),z(y,ne,xe))).then(y=>{y=y||b(ne,xe,!1),y&&(X.delta&&!In(y,8)?s.go(-X.delta,!1):X.type===Ni.pop&&In(y,20)&&s.go(-1,!1)),I(ne,xe,y)}).catch(yi)}))}let qe=Zs(),Z=Zs(),J;function z(V,ee,X){Te(V);const ne=Z.list();return ne.length?ne.forEach(Ie=>Ie(V,ee,X)):console.error(V),Promise.reject(V)}function oe(){return J&&l.value!==Kn?Promise.resolve():new Promise((V,ee)=>{qe.add([V,ee])})}function Te(V){return J||(J=!V,je(),qe.list().forEach(([ee,X])=>V?X(V):ee()),qe.reset()),V}function Ge(V,ee,X,ne){const{scrollBehavior:Ie}=t;if(!rs||!Ie)return Promise.resolve();const xe=!X&&E0(Zd(V.fullPath,0))||(ne||!X)&&history.state&&history.state.scroll||null;return Mp().then(()=>Ie(V,ee,xe)).then(y=>y&&y0(y)).catch(y=>z(y,V,ee))}const ke=V=>s.go(V);let Fe;const $n=new Set,rn={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:D,resolve:M,options:t,push:j,replace:le,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Z.add,isReady:oe,install(V){const ee=this;V.component("RouterLink",H0),V.component("RouterView",z0),V.config.globalProperties.$router=ee,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Cr(l)}),rs&&!Fe&&l.value===Kn&&(Fe=!0,j(s.location).catch(Ie=>{}));const X={};for(const Ie in Kn)Object.defineProperty(X,Ie,{get:()=>l.value[Ie],enumerable:!0});V.provide(Ma,ee),V.provide(fu,Dp(X)),V.provide(pl,l);const ne=V.unmount;$n.add(V),V.unmount=function(){$n.delete(V),$n.size<1&&(h=Kn,v&&v(),v=null,l.value=Kn,Fe=!1,J=!1),ne()}}};function Ct(V){return V.reduce((ee,X)=>ee.then(()=>A(X)),Promise.resolve())}return rn}function Y0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ws(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ws(h,l))||s.push(l))}return[n,r,s]}function pu(){return jt(Ma)}function J0(t){return jt(fu)}var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,vg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,E){function A(){}A.prototype=E.prototype,R.D=E.prototype,R.prototype=new A,R.prototype.constructor=R,R.C=function(T,I,b){for(var v=Array(arguments.length-2),je=2;je<arguments.length;je++)v[je-2]=arguments[je];return E.prototype[I].apply(T,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,E,A){A||(A=0);var T=Array(16);if(typeof E=="string")for(var I=0;16>I;++I)T[I]=E.charCodeAt(A++)|E.charCodeAt(A++)<<8|E.charCodeAt(A++)<<16|E.charCodeAt(A++)<<24;else for(I=0;16>I;++I)T[I]=E[A++]|E[A++]<<8|E[A++]<<16|E[A++]<<24;E=R.g[0],A=R.g[1],I=R.g[2];var b=R.g[3],v=E+(b^A&(I^b))+T[0]+3614090360&4294967295;E=A+(v<<7&4294967295|v>>>25),v=b+(I^E&(A^I))+T[1]+3905402710&4294967295,b=E+(v<<12&4294967295|v>>>20),v=I+(A^b&(E^A))+T[2]+606105819&4294967295,I=b+(v<<17&4294967295|v>>>15),v=A+(E^I&(b^E))+T[3]+3250441966&4294967295,A=I+(v<<22&4294967295|v>>>10),v=E+(b^A&(I^b))+T[4]+4118548399&4294967295,E=A+(v<<7&4294967295|v>>>25),v=b+(I^E&(A^I))+T[5]+1200080426&4294967295,b=E+(v<<12&4294967295|v>>>20),v=I+(A^b&(E^A))+T[6]+2821735955&4294967295,I=b+(v<<17&4294967295|v>>>15),v=A+(E^I&(b^E))+T[7]+4249261313&4294967295,A=I+(v<<22&4294967295|v>>>10),v=E+(b^A&(I^b))+T[8]+1770035416&4294967295,E=A+(v<<7&4294967295|v>>>25),v=b+(I^E&(A^I))+T[9]+2336552879&4294967295,b=E+(v<<12&4294967295|v>>>20),v=I+(A^b&(E^A))+T[10]+4294925233&4294967295,I=b+(v<<17&4294967295|v>>>15),v=A+(E^I&(b^E))+T[11]+2304563134&4294967295,A=I+(v<<22&4294967295|v>>>10),v=E+(b^A&(I^b))+T[12]+1804603682&4294967295,E=A+(v<<7&4294967295|v>>>25),v=b+(I^E&(A^I))+T[13]+4254626195&4294967295,b=E+(v<<12&4294967295|v>>>20),v=I+(A^b&(E^A))+T[14]+2792965006&4294967295,I=b+(v<<17&4294967295|v>>>15),v=A+(E^I&(b^E))+T[15]+1236535329&4294967295,A=I+(v<<22&4294967295|v>>>10),v=E+(I^b&(A^I))+T[1]+4129170786&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^I&(E^A))+T[6]+3225465664&4294967295,b=E+(v<<9&4294967295|v>>>23),v=I+(E^A&(b^E))+T[11]+643717713&4294967295,I=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(I^b))+T[0]+3921069994&4294967295,A=I+(v<<20&4294967295|v>>>12),v=E+(I^b&(A^I))+T[5]+3593408605&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^I&(E^A))+T[10]+38016083&4294967295,b=E+(v<<9&4294967295|v>>>23),v=I+(E^A&(b^E))+T[15]+3634488961&4294967295,I=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(I^b))+T[4]+3889429448&4294967295,A=I+(v<<20&4294967295|v>>>12),v=E+(I^b&(A^I))+T[9]+568446438&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^I&(E^A))+T[14]+3275163606&4294967295,b=E+(v<<9&4294967295|v>>>23),v=I+(E^A&(b^E))+T[3]+4107603335&4294967295,I=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(I^b))+T[8]+1163531501&4294967295,A=I+(v<<20&4294967295|v>>>12),v=E+(I^b&(A^I))+T[13]+2850285829&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^I&(E^A))+T[2]+4243563512&4294967295,b=E+(v<<9&4294967295|v>>>23),v=I+(E^A&(b^E))+T[7]+1735328473&4294967295,I=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(I^b))+T[12]+2368359562&4294967295,A=I+(v<<20&4294967295|v>>>12),v=E+(A^I^b)+T[5]+4294588738&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^I)+T[8]+2272392833&4294967295,b=E+(v<<11&4294967295|v>>>21),v=I+(b^E^A)+T[11]+1839030562&4294967295,I=b+(v<<16&4294967295|v>>>16),v=A+(I^b^E)+T[14]+4259657740&4294967295,A=I+(v<<23&4294967295|v>>>9),v=E+(A^I^b)+T[1]+2763975236&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^I)+T[4]+1272893353&4294967295,b=E+(v<<11&4294967295|v>>>21),v=I+(b^E^A)+T[7]+4139469664&4294967295,I=b+(v<<16&4294967295|v>>>16),v=A+(I^b^E)+T[10]+3200236656&4294967295,A=I+(v<<23&4294967295|v>>>9),v=E+(A^I^b)+T[13]+681279174&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^I)+T[0]+3936430074&4294967295,b=E+(v<<11&4294967295|v>>>21),v=I+(b^E^A)+T[3]+3572445317&4294967295,I=b+(v<<16&4294967295|v>>>16),v=A+(I^b^E)+T[6]+76029189&4294967295,A=I+(v<<23&4294967295|v>>>9),v=E+(A^I^b)+T[9]+3654602809&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^I)+T[12]+3873151461&4294967295,b=E+(v<<11&4294967295|v>>>21),v=I+(b^E^A)+T[15]+530742520&4294967295,I=b+(v<<16&4294967295|v>>>16),v=A+(I^b^E)+T[2]+3299628645&4294967295,A=I+(v<<23&4294967295|v>>>9),v=E+(I^(A|~b))+T[0]+4096336452&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~I))+T[7]+1126891415&4294967295,b=E+(v<<10&4294967295|v>>>22),v=I+(E^(b|~A))+T[14]+2878612391&4294967295,I=b+(v<<15&4294967295|v>>>17),v=A+(b^(I|~E))+T[5]+4237533241&4294967295,A=I+(v<<21&4294967295|v>>>11),v=E+(I^(A|~b))+T[12]+1700485571&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~I))+T[3]+2399980690&4294967295,b=E+(v<<10&4294967295|v>>>22),v=I+(E^(b|~A))+T[10]+4293915773&4294967295,I=b+(v<<15&4294967295|v>>>17),v=A+(b^(I|~E))+T[1]+2240044497&4294967295,A=I+(v<<21&4294967295|v>>>11),v=E+(I^(A|~b))+T[8]+1873313359&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~I))+T[15]+4264355552&4294967295,b=E+(v<<10&4294967295|v>>>22),v=I+(E^(b|~A))+T[6]+2734768916&4294967295,I=b+(v<<15&4294967295|v>>>17),v=A+(b^(I|~E))+T[13]+1309151649&4294967295,A=I+(v<<21&4294967295|v>>>11),v=E+(I^(A|~b))+T[4]+4149444226&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~I))+T[11]+3174756917&4294967295,b=E+(v<<10&4294967295|v>>>22),v=I+(E^(b|~A))+T[2]+718787259&4294967295,I=b+(v<<15&4294967295|v>>>17),v=A+(b^(I|~E))+T[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,R.g[2]=R.g[2]+I&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,E){E===void 0&&(E=R.length);for(var A=E-this.blockSize,T=this.B,I=this.h,b=0;b<E;){if(I==0)for(;b<=A;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<E;)if(T[I++]=R.charCodeAt(b++),I==this.blockSize){s(this,T),I=0;break}}else for(;b<E;)if(T[I++]=R[b++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=E},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;var A=8*this.o;for(E=R.length-8;E<R.length;++E)R[E]=A&255,A/=256;for(this.u(R),R=Array(16),E=A=0;4>E;++E)for(var T=0;32>T;T+=8)R[A++]=this.g[E]>>>T&255;return R};function i(R,E){var A=c;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=E(R)}function o(R,E){this.h=E;for(var A=[],T=!0,I=R.length-1;0<=I;I--){var b=R[I]|0;T&&b==E||(A[I]=b,T=!1)}this.g=A}var c={};function l(R){return-128<=R&&128>R?i(R,function(E){return new o([E|0],0>E?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return P(h(-R));for(var E=[],A=1,T=0;R>=A;T++)E[T]=R/A|0,A*=4294967296;return new o(E,0)}function d(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return P(d(R.substring(1),E));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=h(Math.pow(E,8)),T=p,I=0;I<R.length;I+=8){var b=Math.min(8,R.length-I),v=parseInt(R.substring(I,I+b),E);8>b?(b=h(Math.pow(E,b)),T=T.j(b).add(h(v))):(T=T.j(A),T=T.add(h(v)))}return T}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-P(this).m();for(var R=0,E=1,A=0;A<this.g.length;A++){var T=this.i(A);R+=(0<=T?T:4294967296+T)*E,E*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(D(this))return"-"+P(this).toString(R);for(var E=h(Math.pow(R,6)),A=this,T="";;){var I=j(A,E).g;A=M(A,I.j(E));var b=((0<A.g.length?A.g[0]:A.h)>>>0).toString(R);if(A=I,C(A))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function D(R){return R.h==-1}t.l=function(R){return R=M(this,R),D(R)?-1:C(R)?0:1};function P(R){for(var E=R.g.length,A=[],T=0;T<E;T++)A[T]=~R.g[T];return new o(A,~R.h).add(m)}t.abs=function(){return D(this)?P(this):this},t.add=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0,I=0;I<=E;I++){var b=T+(this.i(I)&65535)+(R.i(I)&65535),v=(b>>>16)+(this.i(I)>>>16)+(R.i(I)>>>16);T=v>>>16,b&=65535,v&=65535,A[I]=v<<16|b}return new o(A,A[A.length-1]&-2147483648?-1:0)};function M(R,E){return R.add(P(E))}t.j=function(R){if(C(this)||C(R))return p;if(D(this))return D(R)?P(this).j(P(R)):P(P(this).j(R));if(D(R))return P(this.j(P(R)));if(0>this.l(_)&&0>R.l(_))return h(this.m()*R.m());for(var E=this.g.length+R.g.length,A=[],T=0;T<2*E;T++)A[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<R.g.length;I++){var b=this.i(T)>>>16,v=this.i(T)&65535,je=R.i(I)>>>16,qe=R.i(I)&65535;A[2*T+2*I]+=v*qe,B(A,2*T+2*I),A[2*T+2*I+1]+=b*qe,B(A,2*T+2*I+1),A[2*T+2*I+1]+=v*je,B(A,2*T+2*I+1),A[2*T+2*I+2]+=b*je,B(A,2*T+2*I+2)}for(T=0;T<E;T++)A[T]=A[2*T+1]<<16|A[2*T];for(T=E;T<2*E;T++)A[T]=0;return new o(A,0)};function B(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function H(R,E){this.g=R,this.h=E}function j(R,E){if(C(E))throw Error("division by zero");if(C(R))return new H(p,p);if(D(R))return E=j(P(R),E),new H(P(E.g),P(E.h));if(D(E))return E=j(R,P(E)),new H(P(E.g),E.h);if(30<R.g.length){if(D(R)||D(E))throw Error("slowDivide_ only works with positive integers.");for(var A=m,T=E;0>=T.l(R);)A=le(A),T=le(T);var I=de(A,1),b=de(T,1);for(T=de(T,2),A=de(A,2);!C(T);){var v=b.add(T);0>=v.l(R)&&(I=I.add(A),b=v),T=de(T,1),A=de(A,1)}return E=M(R,I.j(E)),new H(I,E)}for(I=p;0<=R.l(E);){for(A=Math.max(1,Math.floor(R.m()/E.m())),T=Math.ceil(Math.log(A)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(A),v=b.j(E);D(v)||0<v.l(R);)A-=T,b=h(A),v=b.j(E);C(b)&&(b=m),I=I.add(b),R=M(R,v)}return new H(I,R)}t.A=function(R){return j(this,R).h},t.and=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0;T<E;T++)A[T]=this.i(T)&R.i(T);return new o(A,this.h&R.h)},t.or=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0;T<E;T++)A[T]=this.i(T)|R.i(T);return new o(A,this.h|R.h)},t.xor=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0;T<E;T++)A[T]=this.i(T)^R.i(T);return new o(A,this.h^R.h)};function le(R){for(var E=R.g.length+1,A=[],T=0;T<E;T++)A[T]=R.i(T)<<1|R.i(T-1)>>>31;return new o(A,R.h)}function de(R,E){var A=E>>5;E%=32;for(var T=R.g.length-A,I=[],b=0;b<T;b++)I[b]=0<E?R.i(b+A)>>>E|R.i(b+A+1)<<32-E:R.i(b+A);return new o(I,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,kr=o}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eg,ii,Tg,Fo,ml,wg,Ig,Ag;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bo=="object"&&bo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var O=f++;return{value:u(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,O){for(var G=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)G[Me-2]=arguments[Me];return u.prototype[S].apply(g,G)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function P(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,O=g.length||0;a.length=S+O;for(let G=0;G<O;G++)a[S+G]=g[G]}else a.push(g)}}class M{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var le=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function de(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function R(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function E(a){const u={};for(const f in a)u[f]=a[f];return u}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let O=0;O<A.length;O++)f=A[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function I(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function b(a){c.setTimeout(()=>{throw a},0)}function v(){var a=oe;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class je{constructor(){this.h=this.g=null}add(u,f){const g=qe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var qe=new M(()=>new Z,a=>a.reset());class Z{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let J,z=!1,oe=new je,Te=()=>{const a=c.Promise.resolve(void 0);J=()=>{a.then(Ge)}};var Ge=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){b(f)}var u=qe;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}z=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var $n=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function rn(a,u){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(le){e:{try{j(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&rn.aa.h.call(this)}}C(rn,Fe);var Ct={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++ee,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ie(a){this.src=a,this.g={},this.h=0}Ie.prototype.add=function(a,u,f,g,S){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var G=y(a,u,g,S);return-1<G?(u=a[G],f||(u.fa=!1)):(u=new X(u,this.src,O,!!g,S),u.fa=f,a.push(u)),u};function xe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),O;(O=0<=S)&&Array.prototype.splice.call(g,S,1),O&&(ne(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,g){for(var S=0;S<a.length;++S){var O=a[S];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==g)return S}return-1}var w="closure_lm_"+(1e6*Math.random()|0),k={};function U(a,u,f,g,S){if(g&&g.once)return Q(a,u,f,g,S);if(Array.isArray(u)){for(var O=0;O<u.length;O++)U(a,u[O],f,g,S);return null}return f=fe(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!!g,S):N(a,u,f,!1,g,S)}function N(a,u,f,g,S,O){if(!u)throw Error("Invalid event type");var G=h(S)?!!S.capture:!!S,Me=Y(a);if(Me||(a[w]=Me=new Ie(a)),f=Me.add(u,f,g,G,O),f.proxy)return f;if(g=$(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)$n||(S=G),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(q(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $(){function a(f){return u.call(a.src,a.listener,f)}const u=ae;return a}function Q(a,u,f,g,S){if(Array.isArray(u)){for(var O=0;O<u.length;O++)Q(a,u[O],f,g,S);return null}return f=fe(f),a&&a[V]?a.L(u,f,h(g)?!!g.capture:!!g,S):N(a,u,f,!0,g,S)}function K(a,u,f,g,S){if(Array.isArray(u))for(var O=0;O<u.length;O++)K(a,u[O],f,g,S);else g=h(g)?!!g.capture:!!g,f=fe(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],f=y(O,f,g,S),-1<f&&(ne(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,g,S)),(f=-1<a?u[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])xe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(q(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(xe(f,a),f.h==0&&(f.src=null,u[w]=null)):ne(a)}}}function q(a){return a in k?k[a]:k[a]="on"+a}function ae(a,u){if(a.da)a=!0;else{u=new rn(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,u)}return a}function Y(a){return a=a[w],a instanceof Ie?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[se]||(a[se]=function(u){return a.handleEvent(u)}),a[se])}function ue(){ke.call(this),this.i=new Ie(this),this.M=this,this.F=null}C(ue,ke),ue.prototype[V]=!0,ue.prototype.removeEventListener=function(a,u,f,g){K(this,a,u,f,g)};function Ee(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Fe(u,a);else if(u instanceof Fe)u.target=u.target||a;else{var S=u;u=new Fe(g,a),T(u,S)}if(S=!0,f)for(var O=f.length-1;0<=O;O--){var G=u.g=f[O];S=Re(G,g,!0,u)&&S}if(G=u.g=a,S=Re(G,g,!0,u)&&S,S=Re(G,g,!1,u)&&S,f)for(O=0;O<f.length;O++)G=u.g=f[O],S=Re(G,g,!1,u)&&S}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)ne(f[g]);delete a.g[u],a.h--}}this.F=null},ue.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ue.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Re(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,O=0;O<u.length;++O){var G=u[O];if(G&&!G.da&&G.capture==f){var Me=G.listener,ut=G.ha||G.src;G.fa&&xe(a.i,G),S=Me.call(ut,g)!==!1&&S}}return S&&!g.defaultPrevented}function ct(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function rt(a){a.g=ct(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Vt extends ke{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){ke.call(this),this.h=a,this.g={}}C(st,ke);var Bn=[];function Us(a){de(a.g,function(u,f){this.g.hasOwnProperty(f)&&W(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),Us(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=c.JSON.stringify,$t=c.JSON.parse,so=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Kr(){}Kr.prototype.h=null;function nh(a){return a.h||(a.h=a.i())}function rh(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tc(){Fe.call(this,"d")}C(tc,Fe);function nc(){Fe.call(this,"c")}C(nc,Fe);var vr={},sh=null;function io(){return sh=sh||new ue}vr.La="serverreachability";function ih(a){Fe.call(this,vr.La,a)}C(ih,Fe);function $s(a){const u=io();Ee(u,new ih(u))}vr.STAT_EVENT="statevent";function oh(a,u){Fe.call(this,vr.STAT_EVENT,a),this.stat=u}C(oh,Fe);function bt(a){const u=io();Ee(u,new oh(u,a))}vr.Ma="timingevent";function ah(a,u){Fe.call(this,vr.Ma,a),this.size=u}C(ah,Fe);function Bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function js(){this.g=!0}js.prototype.xa=function(){this.g=!1};function cy(a,u,f,g,S,O){a.info(function(){if(a.g)if(O)for(var G="",Me=O.split("&"),ut=0;ut<Me.length;ut++){var Pe=Me[ut].split("=");if(1<Pe.length){var gt=Pe[0];Pe=Pe[1];var _t=gt.split("_");G=2<=_t.length&&_t[1]=="type"?G+(gt+"="+Pe+"&"):G+(gt+"=redacted&")}}else G=null;else G=O;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+G})}function ly(a,u,f,g,S,O,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+O+" "+G})}function Gr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+hy(a,f)+(g?" "+g:"")})}function uy(a,u){a.info(function(){return"TIMEOUT: "+u})}js.prototype.info=function(){};function hy(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var O=S[0];if(O!="noop"&&O!="stop"&&O!="close")for(var G=1;G<S.length;G++)S[G]=""}}}}return lt(f)}catch{return u}}var oo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rc;function ao(){}C(ao,Kr),ao.prototype.g=function(){return new XMLHttpRequest},ao.prototype.i=function(){return{}},rc=new ao;function jn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lh}function lh(){this.i=null,this.g="",this.h=!1}var uh={},sc={};function ic(a,u,f){a.L=1,a.v=ho(En(u)),a.m=f,a.P=!0,hh(a,null)}function hh(a,u){a.F=Date.now(),co(a),a.A=En(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),bh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new lh,a.g=qh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Vt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&(Bn[0]=S.toString()),S=Bn);for(var O=0;O<S.length;O++){var G=U(f,S[O],g||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),$s(),cy(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Tn(a)==3?u.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Tn(this.g);var u=this.g.Ba();const Yr=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Oh(this.g)))){this.J||_t!=4||u==7||(u==8||0>=Yr?$s(3):$s(2)),oc(this);var f=this.g.Z();this.X=f;t:if(dh(this)){var g=Oh(this.g);a="";var S=g.length,O=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),qs(this);var G="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(O&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,ly(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ut=this.g;if((Me=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Me)){var Pe=Me;break t}}Pe=null}if(f=Pe)Gr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ac(this,f);else{this.o=!1,this.s=3,bt(12),Er(this),qs(this);break e}}if(this.P){f=!0;let Kt;for(;!this.J&&this.C<G.length;)if(Kt=dy(this,G),Kt==sc){_t==4&&(this.s=4,bt(14),f=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==uh){this.s=4,bt(15),Gr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Gr(this.i,this.l,Kt,null),ac(this,Kt);if(dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||G.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)Gr(this.i,this.l,G,"[Invalid Chunked Response]"),Er(this),qs(this);else if(0<G.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),fc(gt),gt.M=!0,bt(11))}}else Gr(this.i,this.l,G,null),ac(this,G);_t==4&&Er(this),this.o&&!this.J&&(_t==4?Fh(this.j,this):(this.o=!1,co(this)))}else Cy(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Er(this),qs(this)}}}catch{}finally{}};function dh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dy(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?sc:(f=Number(u.substring(f,g)),isNaN(f)?uh:(g+=1,g+f>u.length?sc:(u=u.slice(g,g+f),a.C=g+f,u)))}jn.prototype.cancel=function(){this.J=!0,Er(this)};function co(a){a.S=Date.now()+a.I,fh(a,a.I)}function fh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(m(a.ba,a),u)}function oc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uy(this.i,this.A),this.L!=2&&($s(),bt(17)),Er(this),this.s=2,qs(this)):fh(this,this.S-a)};function qs(a){a.j.G==0||a.J||Fh(a.j,a)}function Er(a){oc(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Us(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ac(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||cc(f.h,a))){if(!a.K&&cc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)yo(f),go(f);else break e;dc(f),bt(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=Bs(m(f.Za,f),6e3));if(1>=gh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else wr(f,11)}else if((a.K||f.g==a)&&yo(f),!B(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Pe=S[u];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const gt=Pe[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const _t=Pe[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const Yr=Pe[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(g=1.5*Yr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Kt=a.g;if(Kt){const Eo=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Eo){var O=g.h;O.g||Eo.indexOf("spdy")==-1&&Eo.indexOf("quic")==-1&&Eo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(lc(O,O.h),O.h=null))}if(g.D){const pc=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(g.ya=pc,$e(g.I,g.D,pc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=jh(g,g.J?g.ia:null,g.W),G.K){_h(g.h,G);var Me=G,ut=g.L;ut&&(Me.I=ut),Me.B&&(oc(Me),co(Me)),g.g=G}else Lh(g);0<f.i.length&&_o(f)}else Pe[0]!="stop"&&Pe[0]!="close"||wr(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?wr(f,7):hc(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}$s(4)}catch{}}var fy=class{constructor(a,u){this.g=a,this.map=u}};function ph(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gh(a){return a.h?1:a.g?a.g.size:0}function cc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function lc(a,u){a.g?a.g.add(u):a.h=u}function _h(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ph.prototype.cancel=function(){if(this.i=yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function py(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function my(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function vh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=my(a),g=py(a),S=g.length,O=0;O<S;O++)u.call(void 0,g[O],f&&f[O],a)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var O=a[f].substring(0,g);S=a[f].substring(g+1)}else O=a[f];u(O,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,lo(this,a.j),this.o=a.o,this.g=a.g,uo(this,a.s),this.l=a.l;var u=a.i,f=new Ks;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Th(this,f),this.m=a.m}else a&&(u=String(a).match(Eh))?(this.h=!1,lo(this,u[1]||"",!0),this.o=Hs(u[2]||""),this.g=Hs(u[3]||"",!0),uo(this,u[4]),this.l=Hs(u[5]||"",!0),Th(this,u[6]||"",!0),this.m=Hs(u[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}Tr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ws(u,wh,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ws(u,wh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ws(f,f.charAt(0)=="/"?vy:yy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ws(f,Ty)),a.join("")};function En(a){return new Tr(a)}function lo(a,u,f){a.j=f?Hs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function uo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Th(a,u,f){u instanceof Ks?(a.i=u,wy(a.i,a.h)):(f||(u=Ws(u,Ey)),a.i=new Ks(u,a.h))}function $e(a,u,f){a.i.set(u,f)}function ho(a){return $e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,_y),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _y(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wh=/[#\/\?@]/g,yy=/[#\?:]/g,vy=/[#\?]/g,Ey=/[#\?@]/g,Ty=/#/g;function Ks(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&gy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ks.prototype,t.add=function(a,u){qn(this),this.i=null,a=zr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Ih(a,u){qn(a),u=zr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ah(a,u){return qn(a),u=zr(a,u),a.g.has(u)}t.forEach=function(a,u){qn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let O=0;O<S.length;O++)f.push(u[g])}return f},t.V=function(a){qn(this);let u=[];if(typeof a=="string")Ah(this,a)&&(u=u.concat(this.g.get(zr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return qn(this),this.i=null,a=zr(this,a),Ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function bh(a,u,f){Ih(a,u),0<f.length&&(a.i=null,a.g.set(zr(a,u),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const O=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var S=O;G[g]!==""&&(S+="="+encodeURIComponent(String(G[g]))),a.push(S)}}return this.i=a.join("&")};function zr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function wy(a,u){u&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(Ih(this,g),bh(this,S,f))},a)),a.j=u}function Iy(a,u){const f=new js;if(c.Image){const g=new Image;g.onload=_(Hn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Hn,f,"TestLoadImage: error",!1,u,g),g.onabort=_(Hn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Hn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Ay(a,u){const f=new js,g=new AbortController,S=setTimeout(()=>{g.abort(),Hn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(S),O.ok?Hn(f,"TestPingServer: ok",!0,u):Hn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Hn(f,"TestPingServer: error",!1,u)})}function Hn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function by(){this.g=new so}function Ry(a,u,f){const g=f||"";try{vh(a,function(S,O){let G=S;h(S)&&(G=lt(S)),u.push(g+O+"="+encodeURIComponent(G))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function fo(a){this.l=a.Ub||null,this.j=a.eb||!1}C(fo,Kr),fo.prototype.g=function(){return new po(this.l,this.j)},fo.prototype.i=function(a){return function(){return a}}({});function po(a,u){ue.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(po,ue),t=po.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Gs(this):zs(this),this.readyState==3&&Rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sh(a){let u="";return de(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function uc(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Sh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):$e(a,u,f))}function ze(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ze,ue);var Sy=/^https?$/i,Py=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rc.g(),this.v=this.o?nh(this.o):nh(rc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Ph(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Py,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of f)this.g.setRequestHeader(O,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Ph(this,O)}};function Ph(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ch(a),mo(a)}function Ch(a){a.A||(a.A=!0,Ee(a,"complete"),Ee(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ee(this,"complete"),Ee(this,"abort"),mo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mo(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kh(this):this.bb())},t.bb=function(){kh(this)};function kh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)ct(a.Ea,0,a);else if(Ee(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=G===0){var S=String(a.D).match(Eh)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Sy.test(S?S.toLowerCase():"")}f=g}if(f)Ee(a,"complete"),Ee(a,"success");else{a.m=6;try{var O=2<Tn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ch(a)}}finally{mo(a)}}}}function mo(a,u){if(a.g){Dh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ee(a,"ready");try{f.onreadystatechange=g}catch{}}}function Dh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$t(u)}};function Oh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cy(a){const u={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(B(a[g]))continue;var f=I(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[S]||[];u[S]=O,O.push(f)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Nh(a){this.Aa=0,this.i=[],this.j=new js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ph(a&&a.concurrentRequestLimit),this.Da=new by,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){bt(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=jh(this,null,this.W),_o(this)};function hc(a){if(Vh(a),a.G==3){var u=a.U++,f=En(a.I);if($e(f,"SID",a.K),$e(f,"RID",u),$e(f,"TYPE","terminate"),Ys(a,f),u=new jn(a,a.j,u),u.L=2,u.v=ho(En(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=qh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),co(u)}Bh(a)}function go(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function Vh(a){go(a),a.u&&(c.clearTimeout(a.u),a.u=null),yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function _o(a){if(!mh(a.h)&&!a.s){a.s=!0;var u=a.Ga;J||Te(),z||(J(),z=!0),oe.add(u,a),a.B=0}}function ky(a,u){return gh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(m(a.Ga,a,u),$h(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=E(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(S.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Mh(this,S,u),f=En(this.I),$e(f,"RID",a),$e(f,"CVER",22),this.D&&$e(f,"X-HTTP-Session-Id",this.D),Ys(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(Sh(O)))+"&"+u:this.m&&uc(f,this.m,O)),lc(this.h,S),this.Ua&&$e(f,"TYPE","init"),this.P?($e(f,"$req",u),$e(f,"SID","null"),S.T=!0,ic(S,f,null)):ic(S,f,u),this.G=2}}else this.G==3&&(a?xh(this,a):this.i.length==0||mh(this.h)||xh(this))};function xh(a,u){var f;u?f=u.l:f=a.U++;const g=En(a.I);$e(g,"SID",a.K),$e(g,"RID",f),$e(g,"AID",a.T),Ys(a,g),a.m&&a.o&&uc(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Mh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),lc(a.h,f),ic(f,g,u)}function Ys(a,u){a.H&&de(a.H,function(f,g){$e(u,g,f)}),a.l&&vh({},function(f,g){$e(u,g,f)})}function Mh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let O=-1;for(;;){const G=["count="+f];O==-1?0<f?(O=S[0].g,G.push("ofs="+O)):O=0:G.push("ofs="+O);let Me=!0;for(let ut=0;ut<f;ut++){let Pe=S[ut].g;const gt=S[ut].map;if(Pe-=O,0>Pe)O=Math.max(0,S[ut].g-100),Me=!1;else try{Ry(gt,G,"req"+Pe+"_")}catch{g&&g(gt)}}if(Me){g=G.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Lh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;J||Te(),z||(J(),z=!0),oe.add(u,a),a.v=0}}function dc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(m(a.Fa,a),$h(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Uh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),go(this),Uh(this))};function fc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Uh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=En(a.qa);$e(u,"RID","rpc"),$e(u,"SID",a.K),$e(u,"AID",a.T),$e(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&$e(u,"TO",a.ja),$e(u,"TYPE","xmlhttp"),Ys(a,u),a.m&&a.o&&uc(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=ho(En(u)),f.m=null,f.P=!0,hh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,go(this),dc(this),bt(19))};function yo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Fh(a,u){var f=null;if(a.g==u){yo(a),fc(a),a.g=null;var g=2}else if(cc(a.h,u))f=u.D,_h(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=io(),Ee(g,new ah(g,f)),_o(a)}else Lh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&ky(a,u)||g==2&&dc(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function $h(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function wr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new Tr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||lo(g,"https"),ho(g),S?Iy(g.toString(),f):Ay(g.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(u),Bh(a),Vh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Bh(a){if(a.G=0,a.ka=[],a.l){const u=yh(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function jh(a,u,f){var g=f instanceof Tr?En(f):new Tr(f);if(g.g!="")u&&(g.g=u+"."+g.g),uo(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var O=new Tr(null);g&&lo(O,g),u&&(O.g=u),S&&uo(O,S),f&&(O.l=f),g=O}return f=a.D,u=a.ya,f&&u&&$e(g,f,u),$e(g,"VER",a.la),Ys(a,g),g}function qh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ze(new fo({eb:f})):new ze(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hh(){}t=Hh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function vo(){}vo.prototype.g=function(a,u){return new xt(a,u)};function xt(a,u){ue.call(this),this.g=new Nh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!B(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Qr(this)}C(xt,ue),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){hc(this.g)},xt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=lt(a),a=f);u.i.push(new fy(u.Ya++,a)),u.G==3&&_o(u)},xt.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,xt.aa.N.call(this)};function Wh(a){tc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Wh,tc);function Kh(){nc.call(this),this.status=1}C(Kh,nc);function Qr(a){this.g=a}C(Qr,Hh),Qr.prototype.ua=function(){Ee(this.g,"a")},Qr.prototype.ta=function(a){Ee(this.g,new Wh(a))},Qr.prototype.sa=function(a){Ee(this.g,new Kh)},Qr.prototype.ra=function(){Ee(this.g,"b")},vo.prototype.createWebChannel=vo.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Ag=function(){return new vo},Ig=function(){return io()},wg=vr,ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,Fo=oo,ch.COMPLETE="complete",Tg=ch,rh.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",ue.prototype.listen=ue.prototype.K,ii=rh,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,Eg=ze}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});const gf="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Ns="10.14.0";/**
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
 */const Mr=new Zl("@firebase/firestore");function ei(){return Mr.logLevel}function re(t,...e){if(Mr.logLevel<=be.DEBUG){const n=e.map(mu);Mr.debug(`Firestore (${Ns}): ${t}`,...n)}}function Ln(t,...e){if(Mr.logLevel<=be.ERROR){const n=e.map(mu);Mr.error(`Firestore (${Ns}): ${t}`,...n)}}function As(t,...e){if(Mr.logLevel<=be.WARN){const n=e.map(mu);Mr.warn(`Firestore (${Ns}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function Ve(t,e){t||me()}function ye(t,e){return t}/**
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class Z0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eb{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new vt(e)}}class tb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ib(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Rg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Xe(0,0))}static max(){return new _e(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Vi{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Vi{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return ob.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new te(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new te(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Be.fromString(e))}static fromName(e){return new ce(Be.fromString(e).popFirst(5))}static empty(){return new ce(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Be(e.slice()))}}function ab(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new ur(s,ce.empty(),e)}function cb(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(_e.min(),ce.empty(),-1)}static max(){return new ur(_e.max(),ce.empty(),-1)}}function lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */const ub="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yi(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==ub)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function db(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gu.oe=-1;function La(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function fb(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function _f(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ro(this.root,e,this.comparator,!0)}}class Ro{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yf(this.data.getIterator())}getIteratorFrom(e){return new yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new pt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Pg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pg("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=pb.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yu(t){const e=t.mapValue.fields.__previous_value__;return _u(e)?yu(e):e}function xi(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class mb{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const So={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:_b(t)?9007199254740991:gb(t)?10:11:me()}function gn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xi(t).isEqual(xi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),c=hr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Lr(s.bytesValue).isEqual(Lr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),c=Ye(i.doubleValue);return o===c?oa(o)===oa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_f(o)!==_f(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!gn(o[l],c[l])))return!1;return!0}(t,e);default:return me()}}function Li(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function Rs(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return vf(t.timestampValue,e.timestampValue);case 4:return vf(xi(t),xi(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Lr(i),l=Lr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Ce(c[h],l[h]);if(d!==0)return d}return Ce(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ce(Ye(i.latitude),Ye(o.latitude));return c!==0?c:Ce(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ef(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=Ce(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:Ef(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===So.mapValue&&o===So.mapValue)return 0;if(i===So.mapValue)return 1;if(o===So.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Ce(l[p],d[p]);if(m!==0)return m;const _=Rs(c[l[p]],h[d[p]]);if(_!==0)return _}return Ce(l.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=hr(t),r=hr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function Ef(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Rs(n[s],r[s]);if(i)return i}return Ce(n.length,r.length)}function Ss(t){return gl(t)}function gl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gl(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function Tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _l(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function wf(t){return!!t&&"nullValue"in t}function If(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function gb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ei(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Ei(this.value))}}function Cg(t){const e=[];return jr(t.fields,(n,r)=>{const s=new ft([n]);if($o(r)){const i=Cg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
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
 */class Tt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Tt(e,0,_e.min(),_e.min(),_e.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new Tt(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Tt(e,2,n,_e.min(),_e.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,_e.min(),_e.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function Af(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ui{constructor(e,n="asc"){this.field=e,this.dir=n}}function yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kg{}class et extends kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Eb(e,n,r):n==="array-contains"?new Ib(e,r):n==="in"?new Ab(e,r):n==="not-in"?new bb(e,r):n==="array-contains-any"?new Rb(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Tb(e,r):new wb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Rs(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new tn(e,n)}matches(e){return Dg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dg(t){return t.op==="and"}function Og(t){return vb(t)&&Dg(t)}function vb(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function yl(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(Og(t))return t.filters.map(e=>yl(e)).join(",");{const e=t.filters.map(n=>yl(n)).join(",");return`${t.op}(${e})`}}function Ng(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Ng(o,s.filters[c]),!0):!1}(t,e):void me()}function Vg(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Ss(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Vg).join(" ,")+"}"}(t):"Filter"}class Eb extends et{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class Tb extends et{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wb extends et{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class Ib extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&Li(n.arrayValue,this.value)}}class Ab extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class bb extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class Rb extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
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
 */class Sb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Rf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Sb(t,e,n,r,s,i,o)}function Eu(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>yl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),La(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ue=n}return e.ue}function Tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ng(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bf(t.startAt,e.startAt)&&bf(t.endAt,e.endAt)}function vl(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pb(t,e,n,r,s,i,o,c){return new Vs(t,e,n,r,s,i,o,c)}function wu(t){return new Vs(t)}function Sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mg(t){return t.collectionGroup!==null}function Ti(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new pt(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ui(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new Ui(ft.keyField(),r))}return e.ce}function fn(t){const e=ye(t);return e.le||(e.le=Cb(e,Ti(t))),e.le}function Cb(t,e){if(t.limitType==="F")return Rf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ui(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return Rf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function El(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tl(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return Tu(fn(t),fn(e))&&t.limitType===e.limitType}function Lg(t){return`${Eu(fn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vg(s)).join(", ")}]`),La(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ss(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Fa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Af(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ti(r),s)||r.endAt&&!function(o,c,l){const h=Af(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ti(r),s))}(t,e)}function kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ug(t){return(e,n)=>{let r=!1;for(const s of Ti(t)){const i=Db(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Db(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Rs(l,h):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Sg(this.inner)}size(){return this.innerSize}}/**
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
 */const Ob=new Ke(ce.comparator);function Un(){return Ob}const Fg=new Ke(ce.comparator);function oi(...t){let e=Fg;for(const n of t)e=e.insert(n.key,n);return e}function $g(t){let e=Fg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return wi()}function Bg(){return wi()}function wi(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nb=new Ke(ce.comparator),Vb=new pt(ce.comparator);function we(...t){let e=Vb;for(const n of t)e=e.add(n);return e}const xb=new pt(Ce);function Mb(){return xb}/**
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
 */function Iu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function jg(t){return{integerValue:""+t}}function Lb(t,e){return fb(e)?jg(e):Iu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class $a{constructor(){this._=void 0}}function Ub(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_u(i)&&(i=yu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Fi?Hg(t,e):t instanceof $i?Wg(t,e):function(s,i){const o=qg(s,i),c=Pf(o)+Pf(s.Pe);return _l(o)&&_l(s.Pe)?jg(c):Iu(s.serializer,c)}(t,e)}function Fb(t,e,n){return t instanceof Fi?Hg(t,e):t instanceof $i?Wg(t,e):n}function qg(t,e){return t instanceof la?function(r){return _l(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends $a{}class Fi extends $a{constructor(e){super(),this.elements=e}}function Hg(t,e){const n=Kg(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class $i extends $a{constructor(e){super(),this.elements=e}}function Wg(t,e){let n=Kg(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class la extends $a{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pf(t){return Ye(t.integerValue||t.doubleValue)}function Kg(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $b(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fi&&s instanceof Fi||r instanceof $i&&s instanceof $i?bs(r.elements,s.elements,gn):r instanceof la&&s instanceof la?gn(r.Pe,s.Pe):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class Bb{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ba{}function Gg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Au(t.key,qt.none()):new Xi(t.key,t.data,qt.none());{const n=t.data,r=Ot.empty();let s=new pt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(t.key,r,new Ft(s.toArray()),qt.none())}}function jb(t,e,n){t instanceof Xi?function(s,i,o){const c=s.value.clone(),l=kf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=kf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(zg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ii(t,e,n,r){return t instanceof Xi?function(i,o,c,l){if(!Bo(i.precondition,o))return c;const h=i.value.clone(),d=Df(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,o,c,l){if(!Bo(i.precondition,o))return c;const h=Df(i.fieldTransforms,l,o),d=o.data;return d.setAll(zg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function qb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qg(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Cf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,o)=>$b(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xi extends Ba{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends Ba{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kf(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Fb(o,c,n[s]))}return r}function Df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ub(i,o,e))}return r}class Au extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hb extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Bg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Gg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>Cf(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>Cf(n,r))}}class bu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return Nb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bu(e,n,r,s)}}/**
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
 */class Kb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,Se;function zb(t){switch(t){default:return me();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Qg(t){if(t===void 0)return Ln("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ze.OK:return x.OK;case Ze.CANCELLED:return x.CANCELLED;case Ze.UNKNOWN:return x.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return x.INTERNAL;case Ze.UNAVAILABLE:return x.UNAVAILABLE;case Ze.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ze.NOT_FOUND:return x.NOT_FOUND;case Ze.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ze.ABORTED:return x.ABORTED;case Ze.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ze.DATA_LOSS:return x.DATA_LOSS;default:return me()}}(Se=Ze||(Ze={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Qb(){return new TextEncoder}/**
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
 */const Yb=new kr([4294967295,4294967295],0);function Of(t){const e=Qb().encode(t),n=new vg;return n.update(e),new Uint8Array(n.digest())}function Nf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kr([n,r],0),new kr([s,i],0)]}class Ru{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ai(`Invalid padding: ${n}`);if(r<0)throw new ai(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ai(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ai(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=kr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(kr.fromNumber(r)));return s.compare(Yb)===1&&(s=new kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Of(e),[r,s]=Nf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ru(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Of(e),[r,s]=Nf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ai extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ja{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Zi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ja(_e.min(),s,new Ke(Ce),Un(),we())}}class Zi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zi(r,n,we(),we(),we())}}/**
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
 */class jo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Yg{constructor(e,n){this.targetId=e,this.me=n}}class Jg{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vf{constructor(){this.fe=0,this.ge=Mf(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new Zi(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Jb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=xf(),this.Qe=new Ke(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(vl(i))if(r===0){const o=new ce(i.path);this.Ue(n,o,Tt.newNoDocument(o,_e.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Lr(r).toUint8Array()}catch(l){if(l instanceof Pg)return As("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ru(o,s,i)}catch(l){return As(l instanceof ai?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&vl(c.target)){const l=new ce(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Tt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ja(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=xf(),this.Qe=new Ke(Ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Vf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Vf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xf(){return new Ke(ce.comparator)}function Mf(){return new Ke(ce.comparator)}const Xb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eR=(()=>({and:"AND",or:"OR"}))();class tR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wl(t,e){return t.useProto3Json||La(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nR(t,e){return ua(t,e.toTimestamp())}function pn(t){return Ve(!!t),_e.fromTimestamp(function(n){const r=hr(n);return new Xe(r.seconds,r.nanos)}(t))}function Su(t,e){return Il(t,e).canonicalString()}function Il(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Zg(t){const e=Be.fromString(t);return Ve(s_(e)),e}function Al(t,e){return Su(t.databaseId,e.path)}function Lc(t,e){const n=Zg(e);if(n.get(1)!==t.databaseId.projectId)throw new te(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(t_(n))}function e_(t,e){return Su(t.databaseId,e)}function rR(t){const e=Zg(t);return e.length===4?Be.emptyPath():t_(e)}function bl(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t_(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lf(t,e,n){return{name:Al(t,e),fields:n.value.mapValue.fields}}function sR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ve(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?x.UNKNOWN:Qg(h.code);return new te(d,h.message||"")}(o);n=new Jg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lc(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):_e.min(),c=new Ot({mapValue:{fields:r.document.fields}}),l=Tt.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new jo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lc(t,r.document),i=r.readTime?pn(r.readTime):_e.min(),o=Tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new jo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lc(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Gb(s,i),c=r.targetId;n=new Yg(c,o)}}return n}function iR(t,e){let n;if(e instanceof Xi)n={update:Lf(t,e.key,e.value)};else if(e instanceof Au)n={delete:Al(t,e.key)};else if(e instanceof _r)n={update:Lf(t,e.key,e.data),updateMask:pR(e.fieldMask)};else{if(!(e instanceof Hb))return me();n={verify:Al(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof $i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof la)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function oR(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(_e.min())&&(o=pn(i)),new Bb(o,s.transformResults||[])}(n,e))):[]}function aR(t,e){return{documents:[e_(t,e.path)]}}function cR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=e_(t,s);const i=function(h){if(h.length!==0)return r_(tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:is(m.field),direction:hR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=wl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function lR(t){let e=rR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=n_(p);return m instanceof tn&&Og(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Ui(os(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,La(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new aa(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new aa(_,m)}(n.endAt)),Pb(e,s,o,i,c,"F",l,h)}function uR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=os(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=os(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=os(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return et.create(os(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>n_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function hR(t){return Xb[t]}function dR(t){return Zb[t]}function fR(t){return eR[t]}function is(t){return{fieldPath:t.canonicalString()}}function os(t){return ft.fromServerFormat(t.fieldPath)}function r_(t){return t instanceof et?function(n){if(n.op==="=="){if(If(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(wf(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(If(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(wf(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:dR(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>r_(s));return r.length===1?r[0]:{compositeFilter:{op:fR(n.op),filters:r}}}(t):me()}function pR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function s_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=_e.min(),o=_e.min(),c=mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mR{constructor(e){this.ct=e}}function gR(t){const e=lR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tl(e,e.limit,"L"):e}/**
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
 */class _R{constructor(){this.un=new yR}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ur.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class yR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(Be.comparator)).toArray()}}/**
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
 */class Ps{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ps(0)}static kn(){return new Ps(-1)}}/**
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
 */class vR{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ER{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ii(r.mutation,s,Ft.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Un();const o=wi(),c=function(){return wi()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof _r)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ii(d.mutation,h,d.mutation.getFieldMask(),Xe.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new ER(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=wi();let s=new Ke((o,c)=>o-c),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ft.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Bg();d.forEach(m=>{if(!i.has(m)){const _=Gg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Sr());let c=-1,l=i;return o.next(h=>F.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,we())).next(d=>({batchId:c,changes:$g(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oi();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,l=>{const h=function(p,m){return new Vs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Tt.newInvalidDocument(d)))});let c=oi();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&Ii(d.mutation,h,Ft.empty(),Xe.now()),Fa(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class wR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:gR(s.bundledQuery),readTime:pn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class IR{constructor(){this.overlays=new Ke(ce.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new ce(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Sr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return F.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kb(n,r));let i=this.Ir.get(n);i===void 0&&(i=we(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class AR{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Pu{constructor(){this.Tr=new pt(it.Er),this.dr=new pt(it.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new it(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ce(new Be([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ce(new Be([])),r=new it(n,e),s=new it(n,e+1);let i=we();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new it(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ce.comparator(e.key,n.key)||Ce(e.wr,n.wr)}static Ar(e,n){return Ce(e.wr,n.wr)||ce.comparator(e.key,n.key)}}/**
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
 */class bR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new pt(it.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Ce);return n.forEach(s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new it(new ce(i),0);let c=new pt(Ce);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),F.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new it(n,0),s=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RR{constructor(e){this.Mr=e,this.docs=function(){return new Ke(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Tt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,c=new ce(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||lb(cb(d),r)<=0||(s.has(d.key)||Fa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return F.resolve(this.size)}}class SR extends vR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class PR{constructor(e){this.persistence=e,this.Nr=new xs(n=>Eu(n),Tu),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pu,this.targetCount=0,this.kr=Ps.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ps(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class CR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gu(0),this.Kr=!1,this.Kr=!0,this.$r=new AR,this.referenceDelegate=e(this),this.Ur=new PR(this),this.indexManager=new _R,this.remoteDocumentCache=function(s){return new RR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mR(n),this.Gr=new wR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new kR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kR extends hb{constructor(e){super(),this.currentSequenceNumber=e}}class Cu{constructor(e){this.persistence=e,this.Jr=new Pu,this.Yr=null}static Zr(e){return new Cu(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const s=ce.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class ku{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ku(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class DR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class OR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hT()?8:db(At())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new DR;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ei()<=be.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ei()<=be.DEBUG&&re("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ei()<=be.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):F.resolve())}Yi(e,n){if(Sf(n))return F.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Tl(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,Tl(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Sf(n)||s.isEqual(_e.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?F.resolve(null):(ei()<=be.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ss(n)),this.rs(e,o,n,ab(s,-1)).next(c=>c))})}ts(e,n){let r=new pt(Ug(e));return n.forEach((s,i)=>{Fa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ei()<=be.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ss(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class NR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ke(Ce),this._s=new xs(i=>Eu(i),Tu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function VR(t,e,n,r){return new NR(t,e,n,r)}async function i_(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=we();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function xR(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let _=F.resolve();return m.forEach(C=>{_=_.next(()=>d.getEntry(l,C)).next(D=>{const P=h.docVersions.get(C);Ve(P!==null),D.version.compareTo(P)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=we();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function o_(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function MR(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(mt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(D,P,M){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,_,d)&&c.push(n.Ur.updateTargetData(i,_))});let l=Un(),h=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(LR(i,o,e.documentUpdates).next(d=>{l=d.Ps,h=d.Is})),!r.isEqual(_e.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function LR(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(_e.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):re("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function UR(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FR(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Rl(t,e,n){const r=ye(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Uf(t,e,n){const r=ye(t);let s=_e.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=ye(l),m=p._s.get(d);return m!==void 0?F.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,o,fn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:we())).next(c=>($R(r,kb(e),c),{documents:c,Ts:i})))}function $R(t,e,n){let r=t.us.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ff{constructor(){this.activeTargetIds=Mb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BR{constructor(){this.so=new Ff,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ff,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class jR{_o(e){}shutdown(){}}/**
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
 */class $f{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Po=null;function Uc(){return Po===null?Po=function(){return 268435456+Math.round(2147483648*Math.random())}():Po++,"0x"+Po.toString(16)}/**
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
 */const qR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class HR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const yt="WebChannelConnection";class WR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Uc(),l=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw As("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=qR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Uc();return new Promise((o,c)=>{const l=new Eg;l.setWithCredentials(!0),l.listenOnce(Tg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fo.NO_ERROR:const d=l.getResponseJson();re(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Fo.TIMEOUT:re(yt,`RPC '${e}' ${i} timed out`),c(new te(x.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const p=l.getStatus();if(re(yt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(P){const M=P.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(M)>=0?M:x.UNKNOWN}(_.status);c(new te(C,_.message))}else c(new te(x.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new te(x.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re(yt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);re(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Uc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ag(),c=Ig(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");re(yt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const C=new HR({Io:P=>{_?re(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(re(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),re(yt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),D=(P,M,B)=>{P.listen(M,H=>{try{B(H)}catch(j){setTimeout(()=>{throw j},0)}})};return D(p,ii.EventType.OPEN,()=>{_||(re(yt,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),D(p,ii.EventType.CLOSE,()=>{_||(_=!0,re(yt,`RPC '${e}' stream ${s} transport closed`),C.So())}),D(p,ii.EventType.ERROR,P=>{_||(_=!0,As(yt,`RPC '${e}' stream ${s} transport errored:`,P),C.So(new te(x.UNAVAILABLE,"The operation could not be completed")))}),D(p,ii.EventType.MESSAGE,P=>{var M;if(!_){const B=P.data[0];Ve(!!B);const H=B,j=H.error||((M=H[0])===null||M===void 0?void 0:M.error);if(j){re(yt,`RPC '${e}' stream ${s} received error:`,j);const le=j.status;let de=function(A){const T=Ze[A];if(T!==void 0)return Qg(T)}(le),R=j.message;de===void 0&&(de=x.INTERNAL,R="Unknown error status: "+le+" with message "+j.message),_=!0,C.So(new te(de,R)),p.close()}else re(yt,`RPC '${e}' stream ${s} received:`,B),C.bo(B)}}),D(c,wg.STAT_EVENT,P=>{P.stat===ml.PROXY?re(yt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===ml.NOPROXY&&re(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Fc(){return typeof document<"u"?document:null}/**
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
 */function qa(t){return new tR(t,!0)}/**
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
 */class a_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class c_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new a_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new te(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KR extends c_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sR(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?pn(o.readTime):_e.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=bl(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=vl(l)?{documents:aR(i,l)}:{query:cR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Xg(i,o.resumeToken);const h=wl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(_e.min())>0){c.readTime=ua(i,o.snapshotVersion.toTimestamp());const h=wl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=uR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=bl(this.serializer),n.removeTarget=e,this.a_(n)}}class GR extends c_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=oR(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=bl(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iR(this.serializer,r))};this.a_(n)}}/**
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
 */class zR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new te(x.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Il(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(x.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Il(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(x.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class QR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class YR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{qr(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ye(l);h.L_.add(4),await eo(h),h.q_.set("Unknown"),h.L_.delete(4),await Ha(h)}(this))})}),this.q_=new QR(r,s)}}async function Ha(t){if(qr(t))for(const e of t.B_)await e(!0)}async function eo(t){for(const e of t.B_)await e(!1)}function l_(t,e){const n=ye(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Vu(n)?Nu(n):Ms(n).r_()&&Ou(n,e))}function Du(t,e){const n=ye(t),r=Ms(n);n.N_.delete(e),r.r_()&&u_(n,e),n.N_.size===0&&(r.r_()?r.o_():qr(n)&&n.q_.set("Unknown"))}function Ou(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).A_(e)}function u_(t,e){t.Q_.xe(e),Ms(t).R_(e)}function Nu(t){t.Q_=new Jb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.q_.v_()}function Vu(t){return qr(t)&&!Ms(t).n_()&&t.N_.size>0}function qr(t){return ye(t).L_.size===0}function h_(t){t.Q_=void 0}async function JR(t){t.q_.set("Online")}async function XR(t){t.N_.forEach((e,n)=>{Ou(t,e)})}async function ZR(t,e){h_(t),Vu(t)?(t.q_.M_(e),Nu(t)):t.q_.set("Unknown")}async function eS(t,e,n){if(t.q_.set("Online"),e instanceof Jg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof jo?t.Q_.Ke(e):e instanceof Yg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(_e.min()))try{const r=await o_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),u_(i,l);const p=new er(d.target,l,h,d.sequenceNumber);Ou(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!Ji(e))throw e;t.L_.add(1),await eo(t),t.q_.set("Offline"),n||(n=()=>o_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ha(t)})}function d_(t,e){return e().catch(n=>ha(t,n,e))}async function Wa(t){const e=ye(t),n=dr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tS(e);)try{const s=await UR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,nS(e,s)}catch(s){await ha(e,s)}f_(e)&&p_(e)}function tS(t){return qr(t)&&t.O_.length<10}function nS(t,e){t.O_.push(e);const n=dr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function f_(t){return qr(t)&&!dr(t).n_()&&t.O_.length>0}function p_(t){dr(t).start()}async function rS(t){dr(t).p_()}async function sS(t){const e=dr(t);for(const n of t.O_)e.m_(n.mutations)}async function iS(t,e,n){const r=t.O_.shift(),s=bu.from(r,e,n);await d_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wa(t)}async function oS(t,e){e&&dr(t).V_&&await async function(r,s){if(function(o){return zb(o)&&o!==x.ABORTED}(s.code)){const i=r.O_.shift();dr(r).s_(),await d_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wa(r)}}(t,e),f_(t)&&p_(t)}async function Bf(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.L_.add(3),await eo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ha(n)}async function aS(t,e){const n=ye(t);e?(n.L_.delete(2),await Ha(n)):e||(n.L_.add(2),await eo(n),n.q_.set("Unknown"))}function Ms(t){return t.K_||(t.K_=function(n,r,s){const i=ye(n);return i.w_(),new KR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:JR.bind(null,t),Ro:XR.bind(null,t),mo:ZR.bind(null,t),d_:eS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Vu(t)?Nu(t):t.q_.set("Unknown")):(await t.K_.stop(),h_(t))})),t.K_}function dr(t){return t.U_||(t.U_=function(n,r,s){const i=ye(n);return i.w_(),new GR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rS.bind(null,t),mo:oS.bind(null,t),f_:sS.bind(null,t),g_:iS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wa(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class xu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new xu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Ji(t))return new te(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=oi(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jf{constructor(){this.W_=new Ke(ce.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Cs(e,n,ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class lS{constructor(){this.queries=qf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=qf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new te(x.ABORTED,"Firestore shutting down"))}}function qf(){return new xs(t=>Lg(t),Ua)}async function m_(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new cS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Mu(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Lu(n)}async function g_(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uS(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Lu(n)}function hS(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Lu(t){t.Y_.forEach(e=>{e.next()})}var Sl,Hf;(Hf=Sl||(Sl={})).ea="default",Hf.Cache="cache";class __{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sl.Cache}}/**
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
 */class y_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class dS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=we(),this.mutatedKeys=we(),this.Aa=Ug(e),this.Ra=new ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new jf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Fa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),P=!0):this.ga(m,_)||(r.track({type:2,doc:_}),P=!0,(l&&this.Aa(_,l)>0||h&&this.Aa(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(l||h)&&(c=!0)),P&&(_?(o=o.add(_),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,C){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return D(_)-D(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Cs(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new jf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=we(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new v_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new y_(r))}),n}ba(e){this.Ta=e.Ts,this.da=we();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Cs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pS{constructor(e){this.key=e,this.va=!1}}class mS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xs(c=>Lg(c),Ua),this.Ma=new Map,this.xa=new Set,this.Oa=new Ke(ce.comparator),this.Na=new Map,this.La=new Pu,this.Ba={},this.ka=new Map,this.qa=Ps.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gS(t,e,n=!0){const r=b_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await E_(r,e,n,!0),s}async function _S(t,e){const n=b_(t);await E_(n,e,!0,!1)}async function E_(t,e,n,r){const s=await FR(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await yS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&l_(t.remoteStore,s),c}async function yS(t,e,n,r,s){t.Ka=(p,m,_)=>async function(D,P,M,B){let H=P.view.ma(M);H.ns&&(H=await Uf(D.localStore,P.query,!1).then(({documents:R})=>P.view.ma(R,H)));const j=B&&B.targetChanges.get(P.targetId),le=B&&B.targetMismatches.get(P.targetId)!=null,de=P.view.applyChanges(H,D.isPrimaryClient,j,le);return Kf(D,P.targetId,de.wa),de.snapshot}(t,p,m,_);const i=await Uf(t.localStore,e,!0),o=new dS(e,i.Ts),c=o.ma(i.documents),l=Zi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Kf(t,n,h.wa);const d=new fS(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function vS(t,e,n){const r=ye(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ua(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Du(r.remoteStore,s.targetId),Pl(r,s.targetId)}).catch(Yi)):(Pl(r,s.targetId),await Rl(r.localStore,s.targetId,!0))}async function ES(t,e){const n=ye(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Du(n.remoteStore,r.targetId))}async function TS(t,e,n){const r=PS(t);try{const s=await function(o,c){const l=ye(o),h=Xe.now(),d=c.reduce((_,C)=>_.add(C.key),we());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Un(),D=we();return l.cs.getEntries(_,d).next(P=>{C=P,C.forEach((M,B)=>{B.isValidDocument()||(D=D.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(P=>{p=P;const M=[];for(const B of c){const H=qb(B,p.get(B.key).overlayedDocument);H!=null&&M.push(new _r(B.key,H,Cg(H.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,M,c)}).next(P=>{m=P;const M=P.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(_,P.batchId,M)})}).then(()=>({batchId:m.batchId,changes:$g(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ke(Ce)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await to(r,s.changes),await Wa(r.remoteStore)}catch(s){const i=Mu(s,"Failed to persist write");n.reject(i)}}async function T_(t,e){const n=ye(t);try{const r=await MR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ve(o.va):s.removedDocuments.size>0&&(Ve(o.va),o.va=!1))}),await to(n,r,e)}catch(r){await Yi(r)}}function Wf(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ye(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(h=!0)}),h&&Lu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wS(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ke(ce.comparator);o=o.insert(i,Tt.newNoDocument(i,_e.min()));const c=we().add(i),l=new ja(_e.min(),new Map,new Ke(Ce),o,c);await T_(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Uu(r)}else await Rl(r.localStore,e,!1).then(()=>Pl(r,e,n)).catch(Yi)}async function IS(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await xR(n.localStore,e);I_(n,r,null),w_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await to(n,s)}catch(s){await Yi(s)}}async function AS(t,e,n){const r=ye(t);try{const s=await function(o,c){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ve(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);I_(r,e,n),w_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await to(r,s)}catch(s){await Yi(s)}}function w_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function I_(t,e,n){const r=ye(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Pl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||A_(t,r)})}function A_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Du(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Uu(t))}function Kf(t,e,n){for(const r of n)r instanceof y_?(t.La.addReference(r.key,e),bS(t,r)):r instanceof v_?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||A_(t,r.key)):me()}function bS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),Uu(t))}function Uu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ce(Be.fromString(e)),r=t.qa.next();t.Na.set(r,new pS(n)),t.Oa=t.Oa.insert(n,r),l_(t.remoteStore,new er(fn(wu(n.path)),r,"TargetPurposeLimboResolution",gu.oe))}}async function to(t,e,n){const r=ye(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ku.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const d=ye(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,m=>F.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>F.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ji(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,D)}}}(r.localStore,i))}async function RS(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await i_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new te(x.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await to(n,r.hs)}}function SS(t,e){const n=ye(t),r=n.Na.get(e);if(r&&r.va)return we().add(r.key);{let s=we();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function b_(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=T_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wS.bind(null,e),e.Ca.d_=uS.bind(null,e.eventManager),e.Ca.$a=hS.bind(null,e.eventManager),e}function PS(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AS.bind(null,e),e}class da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return VR(this.persistence,new OR,e.initialUser,this.serializer)}Ga(e){return new CR(Cu.Zr,this.serializer)}Wa(e){return new BR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}da.provider={build:()=>new da};class Cl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RS.bind(null,this.syncEngine),await aS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lS}()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=function(i){return new WR(i)}(e.databaseInfo);return function(i,o,c,l){return new zR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new YR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Wf(this.syncEngine,n,0),function(){return $f.D()?new $f:new jR}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new mS(s,i,o,c,l,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await eo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cl.provider={build:()=>new Cl};/**
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
 */class R_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await i_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kS(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Bf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Bf(e.remoteStore,s)),t._onlineComponents=e}async function kS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;As("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new da)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await $c(t,new da);return t._offlineComponents}async function S_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await Gf(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await Gf(t,new Cl))),t._onlineComponents}function DS(t){return S_(t).then(e=>e.syncEngine)}async function kl(t){const e=await S_(t),n=e.eventManager;return n.onListen=gS.bind(null,e.syncEngine),n.onUnlisten=vS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_S.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ES.bind(null,e.syncEngine),n}function OS(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new R_({next:m=>{d.Za(),o.enqueueAndForget(()=>g_(i,p)),m.fromCache&&l.source==="server"?h.reject(new te(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new __(c,d,{includeMetadataChanges:!0,_a:!0});return m_(i,p)}(await kl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function P_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zf=new Map;/**
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
 */function C_(t,e,n){if(!n)throw new te(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NS(t,e,n,r){if(e===!0&&r===!0)throw new te(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(!ce.isDocumentKey(t))throw new te(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(ce.isDocumentKey(t))throw new te(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ka(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function Ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(t);throw new te(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ga{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new X0;switch(r.type){case"firstParty":return new nb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zf.get(n);r&&(re("ComponentProvider","Removing Datastore"),zf.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var s;const i=(t=Ht(t,Ga))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&As("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=vt.MOCK_USER;else{c=Em(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(h)}t._authCredentials=new Z0(new bg(c,l))}}/**
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
 */class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class ir extends yr{constructor(e,n,r){super(e,n,wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new ce(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function vs(t,e,...n){if(t=nt(t),C_("collection","path",e),t instanceof Ga){const r=Be.fromString(e,...n);return Yf(r),new ir(t,null,r)}{if(!(t instanceof Pt||t instanceof ir))throw new te(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Yf(r),new ir(t.firestore,null,r)}}function or(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Rg.newId()),C_("doc","path",e),t instanceof Ga){const r=Be.fromString(e,...n);return Qf(r),new Pt(t,null,new ce(r))}{if(!(t instanceof Pt||t instanceof ir))throw new te(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Qf(r),new Pt(t.firestore,t instanceof ir?t.converter:null,new ce(r))}}/**
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
 */class Xf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new a_(this,"async_queue_retry"),this.Vu=()=>{const r=Fc();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ji(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=xu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&me()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Zf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class fr extends Ga{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,await e}}}function ci(t,e){const n=typeof t=="object"?t:tu(),r=typeof t=="string"?t:e||"(default)",s=Da(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_m("firestore");i&&VS(s,...i)}return s}function Fu(t){if(t._terminated)throw new te(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xS(t),t._firestoreClient}function xS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new mb(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,P_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new CS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(mt.fromBase64String(e))}catch(n){throw new te(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class za{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $u{constructor(e){this._methodName=e}}/**
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
 */class Bu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ju{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const MS=/^__.*__$/;class LS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xi(e,this.data,n,this.fieldTransforms)}}class k_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(D_(this.Cu)&&MS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class US{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}Qu(e,n,r,s=!1){return new qu({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new US(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Hu("Data must be an object, but it was:",o,r);const c=N_(r,o);let l,h;if(i.merge)l=new Ft(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Dl(e,p,n);if(!o.contains(m))throw new te(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);x_(d,m)||d.push(m)}l=new Ft(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new LS(new Ot(c),l,h)}class Ya extends $u{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ya}}function FS(t,e,n,r){const s=t.Qu(1,e,n);Hu("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();jr(r,(l,h)=>{const d=Wu(e,l,n);h=nt(h);const p=s.Nu(d);if(h instanceof Ya)i.push(d);else{const m=no(h,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Ft(i);return new k_(o,c,s.fieldTransforms)}function $S(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[Dl(e,r,n)],l=[s];if(i.length%2!=0)throw new te(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Dl(e,i[m])),l.push(i[m+1]);const h=[],d=Ot.empty();for(let m=c.length-1;m>=0;--m)if(!x_(h,c[m])){const _=c[m];let C=l[m];C=nt(C);const D=o.Nu(_);if(C instanceof Ya)h.push(_);else{const P=no(C,D);P!=null&&(h.push(_),d.set(_,P))}}const p=new Ft(h);return new k_(d,p,o.fieldTransforms)}function BS(t,e,n,r=!1){return no(n,t.Qu(r?4:3,e))}function no(t,e){if(V_(t=nt(t)))return Hu("Unsupported field value:",e,t),N_(t,e);if(t instanceof $u)return function(r,s){if(!D_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=no(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Bu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ks)return{bytesValue:Xg(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Su(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ju)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Iu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ka(r)}`)}(t,e)}function N_(t,e){const n={};return Sg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,s)=>{const i=no(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function V_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof Bu||t instanceof ks||t instanceof Pt||t instanceof $u||t instanceof ju)}function Hu(t,e,n){if(!V_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ka(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Dl(t,e,n){if((e=nt(e))instanceof za)return e._internalPath;if(typeof e=="string")return Wu(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function Wu(t,e,n){if(e.search(jS)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new za(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new te(x.INVALID_ARGUMENT,c+t+l)}function x_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class M_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ja("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qS extends M_{data(){return super.data()}}function Ja(t,e){return typeof e=="string"?Wu(t,e):e instanceof za?e._internalPath:e._delegate._internalPath}/**
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
 */function L_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ku{}class U_ extends Ku{}function as(t,e,...n){let r=[];e instanceof Ku&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Gu).length,c=i.filter(l=>l instanceof Xa).length;if(o>1||o>0&&c>0)throw new te(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xa extends U_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xa(e,n,r)}_apply(e){const n=this._parse(e);return F_(e._query,n),new yr(e.firestore,e.converter,El(e._query,n))}_parse(e){const n=Qa(e.firestore);return function(i,o,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new te(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){tp(p,d);const _=[];for(const C of p)_.push(ep(l,i,C));m={arrayValue:{values:_}}}else m=ep(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||tp(p,d),m=BS(c,o,p,d==="in"||d==="not-in");return et.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cs(t,e,n){const r=e,s=Ja("where",t);return Xa._create(s,r,n)}class Gu extends Ku{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)F_(o,l),o=El(o,l)}(e._query,n),new yr(e.firestore,e.converter,El(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zu extends U_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new te(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new te(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ui(i,o)}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function HS(t,e="asc"){const n=e,r=Ja("orderBy",t);return zu._create(r,n)}function ep(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new te(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mg(e)&&n.indexOf("/")!==-1)throw new te(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!ce.isDocumentKey(r))throw new te(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tf(t,new ce(r))}if(n instanceof Pt)return Tf(t,n._key);throw new te(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(n)}.`)}function tp(t,e){if(!Array.isArray(t)||t.length===0)throw new te(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function F_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new te(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WS{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new ju(i)}convertGeoPoint(e){return new Bu(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Ve(s_(r));const s=new Mi(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function $_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class B_ extends M_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ja("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qo extends B_{data(e={}){return super.data(e)}}class j_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qo(this._firestore,this._userDataWriter,r.key,r,new li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new qo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new qo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:KS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class Qu extends WS{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Yu(t){t=Ht(t,yr);const e=Ht(t.firestore,fr),n=Fu(e),r=new Qu(e);return L_(t._query),OS(n,t._query).then(s=>new j_(e,r,t,s))}function GS(t,e,n){t=Ht(t,Pt);const r=Ht(t.firestore,fr),s=$_(t.converter,e,n);return Za(r,[O_(Qa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qt.none())])}function Ol(t,e,n,...r){t=Ht(t,Pt);const s=Ht(t.firestore,fr),i=Qa(s);let o;return o=typeof(e=nt(e))=="string"||e instanceof za?$S(i,"updateDoc",t._key,e,n,r):FS(i,"updateDoc",t._key,e),Za(s,[o.toMutation(t._key,qt.exists(!0))])}function q_(t){return Za(Ht(t.firestore,fr),[new Au(t._key,qt.none())])}function H_(t,e){const n=Ht(t.firestore,fr),r=or(t),s=$_(t.converter,e);return Za(n,[O_(Qa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function W_(t,...e){var n,r,s;t=nt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Zf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Zf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof Pt)h=Ht(t.firestore,fr),d=wu(t._key.path),l={next:p=>{e[o]&&e[o](zS(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ht(t,yr);h=Ht(p.firestore,fr),d=p._query;const m=new Qu(h);l={next:_=>{e[o]&&e[o](new j_(h,m,p,_))},error:e[o+1],complete:e[o+2]},L_(t._query)}return function(m,_,C,D){const P=new R_(D),M=new __(_,P,C);return m.asyncQueue.enqueueAndForget(async()=>m_(await kl(m),M)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>g_(await kl(m),M))}}(Fu(h),d,c,l)}function Za(t,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>TS(await DS(r),s,i)),i.promise}(Fu(t),e)}function zS(t,e,n){const r=n.docs.get(e._key),s=new Qu(t);return new B_(t,s,e._key,r,new li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ns=s})($r),Nr(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new fr(new eb(r.getProvider("auth-internal")),new sb(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),un(gf,"4.7.3",e),un(gf,"4.7.3","esm2017")})();var QS="firebase",YS="10.14.1";/**
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
 */un(QS,YS,"app");/**
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
 */const K_="firebasestorage.googleapis.com",JS="storageBucket",XS=2*60*1e3,ZS=10*60*1e3;/**
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
 */class vn extends yn{constructor(e,n,r=0){super(Bc(e),`Firebase Storage: ${n} (${Bc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,vn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _n;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_n||(_n={}));function Bc(t){return"storage/"+t}function eP(){const t="An unknown error occurred, please check the error payload for server response.";return new vn(_n.UNKNOWN,t)}function tP(){return new vn(_n.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nP(){return new vn(_n.CANCELED,"User canceled the upload/download.")}function rP(t){return new vn(_n.INVALID_URL,"Invalid URL '"+t+"'.")}function sP(t){return new vn(_n.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function np(t){return new vn(_n.INVALID_ARGUMENT,t)}function G_(){return new vn(_n.APP_DELETED,"The Firebase app was deleted.")}function iP(t){return new vn(_n.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw sP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},D=n===K_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",M=new RegExp(`^https?://${D}/${s}/${P}`,"i"),H=[{regex:c,indices:l,postModify:i},{regex:_,indices:C,postModify:h},{regex:M,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<H.length;j++){const le=H[j],de=le.regex.exec(e);if(de){const R=de[le.indices.bucket];let E=de[le.indices.path];E||(E=""),r=new Yt(R,E),le.postModify(r);break}}if(r==null)throw rP(e);return r}}class oP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...P){h||(h=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,t(_,l())},P)}function m(){i&&clearTimeout(i)}function _(P,...M){if(h){m();return}if(P){m(),d.call(null,P,...M);return}if(l()||o){m(),d.call(null,P,...M);return}r<64&&(r*=2);let H;c===1?(c=2,H=0):H=(r+Math.random())*1e3,p(H)}let C=!1;function D(P){C||(C=!0,m(),!h&&(s!==null?(P||(c=2),clearTimeout(s),p(0)):P||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function cP(t){t(!1)}/**
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
 */function lP(t){return t!==void 0}function rp(t,e,n,r){if(r<e)throw np(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw np(`Invalid value for '${t}'. Expected ${n} or less.`)}function uP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var pa;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pa||(pa={}));/**
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
 */function hP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class dP{constructor(e,n,r,s,i,o,c,l,h,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===pa.NO_ERROR,l=i.getStatus();if(!c||hP(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===pa.ABORT;r(!1,new Co(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Co(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());lP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=eP();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?G_():nP();o(l)}else{const l=tP();o(l)}};this.canceled_?n(!1,new Co(!1,null,!0)):this.backoffId_=aP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _P(t,e,n,r,s,i,o=!0){const c=uP(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return mP(h,e),fP(h,n),pP(h,i),gP(h,r),new dP(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function yP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ma{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ma(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vP(this._location.path)}get storage(){return this._service}get parent(){const e=yP(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new ma(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iP(e)}}function sp(t,e){const n=e==null?void 0:e[JS];return n==null?null:Yt.makeFromBucketSpec(n,t)}function EP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Em(s,t.app.options.projectId))}class TP{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=K_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XS,this._maxUploadRetryTime=ZS,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=sp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=sp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ma(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new oP(G_());{const o=_P(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ip="@firebase/storage",op="0.13.2";/**
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
 */const z_="storage";function wP(t=tu(),e){t=nt(t);const r=Da(t,z_).getImmediate({identifier:e}),s=_m("storage");return s&&IP(r,...s),r}function IP(t,e,n,r={}){EP(t,e,n,r)}function AP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new TP(n,r,s,e,$r)}function bP(){Nr(new lr(z_,AP,"PUBLIC").setMultipleInstances(!0)),un(ip,op,""),un(ip,op,"esm2017")}bP();const RP={apiKey:"AIzaSyDUZDNdbmUh9-ubM3uyYyv7171aLpFK5yk",authDomain:"whatever-5ad68.firebaseapp.com",projectId:"whatever-5ad68",storageBucket:"whatever-5ad68.firebasestorage.app",messagingSenderId:"951449852897",appId:"1:951449852897:web:ab8f7901ddd434ba1b90a0",measurementId:"G-RF2ZY5QWHF"},Ju=Im(RP),Qt=hu(Ju),bn=ci(Ju);wP(Ju);/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Q_="store";function SP(t){return t===void 0&&(t=null),jt(t!==null?t:Q_)}function Ls(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function PP(t){return t!==null&&typeof t=="object"}function CP(t){return t&&typeof t.then=="function"}function kP(t,e){return function(){return t(e)}}function Y_(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function J_(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ec(t,n,[],t._modules.root,!0),Xu(t,n,e)}function Xu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Ls(s,function(o,c){i[c]=kP(o,t),Object.defineProperty(t.getters,c,{get:function(){return i[c]()},enumerable:!0})}),t._state=Bi({data:e}),t.strict&&xP(t),r&&n&&t._withCommit(function(){r.data=null})}function ec(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=Zu(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var h=r.context=DP(t,o,n);r.forEachMutation(function(d,p){var m=o+p;OP(t,m,d,h)}),r.forEachAction(function(d,p){var m=d.root?p:o+p,_=d.handler||d;NP(t,m,_,h)}),r.forEachGetter(function(d,p){var m=o+p;VP(t,m,d,h)}),r.forEachChild(function(d,p){ec(t,e,n.concat(p),d,s)})}function DP(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=ga(i,o,c),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=e+p),t.dispatch(p,h)},commit:r?t.commit:function(i,o,c){var l=ga(i,o,c),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=e+p),t.commit(p,h,d)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return X_(t,e)}},state:{get:function(){return Zu(t.state,n)}}}),s}function X_(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function OP(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function NP(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return CP(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function VP(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function xP(t){Dn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Zu(t,e){return e.reduce(function(n,r){return n[r]},t)}function ga(t,e,n){return PP(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var MP="vuex bindings",ap="vuex:mutations",jc="vuex:actions",Zr="vuex",LP=0;function UP(t,e){GA({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[MP]},function(n){n.addTimelineLayer({id:ap,label:"Vuex Mutations",color:cp}),n.addTimelineLayer({id:jc,label:"Vuex Actions",color:cp}),n.addInspector({id:Zr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Zr)if(r.filter){var s=[];ny(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[ty(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Zr){var s=r.nodeId;X_(e,s),r.state=BP(qP(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Zr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Zr),n.sendInspectorState(Zr),n.addTimelineEvent({layerId:ap,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=LP++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:jc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:jc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var cp=8702998,FP=6710886,$P=16777215,Z_={label:"namespaced",textColor:$P,backgroundColor:FP};function ey(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function ty(t,e){return{id:e||"root",label:ey(e),tags:t.namespaced?[Z_]:[],children:Object.keys(t._children).map(function(n){return ty(t._children[n],e+n+"/")})}}function ny(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Z_]:[]}),Object.keys(e._children).forEach(function(s){ny(t,e._children[s],n,r+s+"/")})}function BP(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=jP(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?ey(o):o,editable:!1,value:Nl(function(){return i[o]})}})}return s}function jP(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Nl(function(){return t[n]})}else e[n]=Nl(function(){return t[n]})}),e}function qP(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Nl(t){try{return t()}catch(e){return e}}var nn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ry={namespaced:{configurable:!0}};ry.namespaced.get=function(){return!!this._rawModule.namespaced};nn.prototype.addChild=function(e,n){this._children[e]=n};nn.prototype.removeChild=function(e){delete this._children[e]};nn.prototype.getChild=function(e){return this._children[e]};nn.prototype.hasChild=function(e){return e in this._children};nn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};nn.prototype.forEachChild=function(e){Ls(this._children,e)};nn.prototype.forEachGetter=function(e){this._rawModule.getters&&Ls(this._rawModule.getters,e)};nn.prototype.forEachAction=function(e){this._rawModule.actions&&Ls(this._rawModule.actions,e)};nn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ls(this._rawModule.mutations,e)};Object.defineProperties(nn.prototype,ry);var Hr=function(e){this.register([],e,!1)};Hr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Hr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Hr.prototype.update=function(e){sy([],this.root,e)};Hr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new nn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Ls(n.modules,function(c,l){s.register(e.concat(l),c,r)})};Hr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Hr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function sy(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;sy(t.concat(r),e.getChild(r),n.modules[r])}}function HP(t){return new Nt(t)}var Nt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Hr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,c=this,l=c.dispatch,h=c.commit;this.dispatch=function(m,_){return l.call(o,m,_)},this.commit=function(m,_,C){return h.call(o,m,_,C)},this.strict=s;var d=this._modules.root.state;ec(this,d,[],this._modules.root),Xu(this,d),r.forEach(function(p){return p(n)})},eh={state:{configurable:!0}};Nt.prototype.install=function(e,n){e.provide(n||Q_,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&UP(e,this)};eh.state.get=function(){return this._state.data};eh.state.set=function(t){};Nt.prototype.commit=function(e,n,r){var s=this,i=ga(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},h=this._mutations[o];h&&(this._withCommit(function(){h.forEach(function(p){p(c)})}),this._subscribers.slice().forEach(function(d){return d(l,s.state)}))};Nt.prototype.dispatch=function(e,n){var r=this,s=ga(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(c,r.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(o)})):l[0](o);return new Promise(function(d,p){h.then(function(m){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}d(m)},function(m){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,m)})}catch{}p(m)})})}};Nt.prototype.subscribe=function(e,n){return Y_(e,this._subscribers,n)};Nt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Y_(r,this._actionSubscribers,n)};Nt.prototype.watch=function(e,n,r){var s=this;return Dn(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Nt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Nt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ec(this,this.state,e,this._modules.get(e),r.preserveState),Xu(this,this.state)};Nt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Zu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),J_(this)};Nt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Nt.prototype.hotUpdate=function(e){this._modules.update(e),J_(this,!0)};Nt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Nt.prototype,eh);const iy=Symbol(),WP=HP({state:{memos:[],filterSettings:{hashtags:[],date:null,dateRange:"all"},currentUser:null},mutations:{setMemos(t,e){t.memos=e},addMemo(t,e){t.memos.unshift(e)},deleteMemo(t,e){t.memos=t.memos.filter(n=>n.id!==e)},editMemo(t,e){const n=t.memos.findIndex(r=>r.id===e.id);n!==-1&&(t.memos[n]={...t.memos[n],...e})},updateFilterSettings(t,e){t.filterSettings={...t.filterSettings,...e}},setUser(t,e){t.currentUser=e}},actions:{async fetchMemos({commit:t}){const e=ci(),n=vs(e,"memos");try{const r=await Yu(n),s=[];r.forEach(i=>{const o=i.data(),c=o.imageUrls||(o.imageUrl?[o.imageUrl]:[]);s.push({id:i.id,...o,imageUrls:c,timestamp:o.timestamp})}),t("setMemos",s)}catch(r){console.error("Error fetching memos: ",r)}},async addMemo({commit:t},e){const n=ci(),r=vs(n,"memos"),s={...e,timestamp:new Date};try{const i=await H_(r,s);t("addMemo",{id:i.id,...s})}catch(i){console.error("Error adding memo: ",i)}},async deleteMemo({commit:t},e){const n=ci(),r=or(n,"memos",e);try{await q_(r),t("deleteMemo",e)}catch(s){console.error("Error deleting memo: ",s)}},async editMemo({commit:t},e){const n=ci(),r=or(n,"memos",e.id);try{const s={content:e.content,tags:e.tags};e.imageUrls!==void 0&&(s.imageUrls=e.imageUrls),await Ol(r,s),t("editMemo",e)}catch(s){console.error("Error editing memo: ",s)}},updateFilterSettings({commit:t},e){t("updateFilterSettings",e)},setUser({commit:t},e){t("setUser",e)}},plugins:[]});function ro(){return SP(iy)}const KP={id:"app"},GP={key:1},zP={class:"app-header"},QP={class:"header-content"},YP={key:0,class:"user-label"},JP={class:"main-content-wrapper"},XP={class:"routerViewContainer"},ZP={key:1,class:"login-wrapper"},eC={__name:"App",setup(t){const e=ro(),n=hu(),r=pu(),s=J0(),i=Ae(null),o=Ae(!1);let c=null;Ra(()=>{const d=SI(n,async p=>{if(i.value=p,p){const m=or(bn,"users",p.uid);c=W_(m,_=>{o.value=_.exists(),_.exists()&&e.dispatch("setUser",{uid:p.uid,email:p.email,nickname:_.data().nickname})}),s.path==="/login"&&r.push("/")}else o.value=!1,c&&c(),s.path!=="/login"&&r.push("/login")});Ds(()=>{d(),c&&c()})});const l=ot(()=>{var d;return(d=e.state.currentUser)==null?void 0:d.nickname}),h=async()=>{try{await PI(n),r.push("/login")}catch(d){console.error("Logout error:",d)}};return(d,p)=>{const m=ti("setNickname"),_=ti("router-link"),C=ti("sidebar"),D=ti("router-view");return ie(),he("div",KP,[i.value?(ie(),he(Qe,{key:0},[o.value?(ie(),he("div",GP,[L("header",zP,[L("div",QP,[l.value?(ie(),he("p",YP," Welcome, "+We(l.value),1)):Dt("",!0),Je(_,{to:"/",class:"home-link"},{default:zo(()=>p[0]||(p[0]=[L("h1",null,"My App",-1)])),_:1,__:[0]}),L("button",{onClick:h,class:"logout-button"},"Logout")])]),L("div",JP,[Je(C),L("div",XP,[Je(D)])])])):(ie(),Es(m,{key:0}))],64)):(ie(),he("div",ZP,[Je(D)]))])}}};const Wr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tC={class:"homepage-container"},nC={class:"quick-links"},rC={__name:"homePage",setup(t){return(e,n)=>{const r=ti("router-link");return ie(),he("div",tC,[n[2]||(n[2]=L("h2",null,"Our shared digital space",-1)),L("div",nC,[Je(r,{to:"/memos",class:"nav-button"},{default:zo(()=>n[0]||(n[0]=[Zc("View Memos",-1)])),_:1,__:[0]}),Je(r,{to:"/plans",class:"nav-button"},{default:zo(()=>n[1]||(n[1]=[Zc("Check Plans",-1)])),_:1,__:[1]})])])}}},sC=Wr(rC,[["__scopeId","data-v-6f2d4cb3"]]);const iC={class:"auth-container"},oC={class:"form-group"},aC={class:"form-group"},cC=["disabled"],lC={key:0,class:"error-message"},uC={__name:"authComponent",setup(t){const e=Ae(""),n=Ae(""),r=Ae(!0),s=Ae(!1),i=Ae(null),o=pu(),c=ro(),l=async()=>{s.value=!0,i.value=null;try{if(r.value){const d=(await AI(Qt,e.value,n.value)).user;c.dispatch("setUser",{uid:d.uid,email:d.email,nickname:d.email.split("@")[0]}),o.push("/")}else{const d=(await II(Qt,e.value,n.value)).user;c.dispatch("setUser",{uid:d.uid,email:d.email,nickname:d.email.split("@")[0]}),o.push("/set-nickname")}}catch(h){switch(h.code){case"auth/invalid-email":i.value="Invalid email address.";break;case"auth/user-not-found":i.value="No user found with this email.";break;case"auth/wrong-password":i.value="Incorrect password.";break;case"auth/email-already-in-use":i.value="This email is already registered.";break;case"auth/weak-password":i.value="Password should be at least 6 characters.";break;default:i.value=`An unknown error occurred: ${h.message}`}}finally{s.value=!1}};return(h,d)=>(ie(),he("div",iC,[L("h2",null,We(r.value?"Login":"Register"),1),L("form",{onSubmit:an(l,["prevent"])},[L("div",oC,[d[3]||(d[3]=L("label",{for:"auth-email"},"Email",-1)),Dr(L("input",{type:"email",id:"auth-email","onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),required:""},null,512),[[Or,e.value]])]),L("div",aC,[d[4]||(d[4]=L("label",{for:"auth-password"},"Password",-1)),Dr(L("input",{type:"password",id:"auth-password","onUpdate:modelValue":d[1]||(d[1]=p=>n.value=p),required:""},null,512),[[Or,n.value]])]),L("button",{type:"submit",disabled:s.value},We(r.value?"Login":"Register"),9,cC),i.value?(ie(),he("div",lC,We(i.value),1)):Dt("",!0)],32),L("button",{class:"toggle-mode-button",onClick:d[2]||(d[2]=p=>r.value=!r.value)},We(r.value?"Need an account? Register":"Have an account? Login"),1)]))}},hC=Wr(uC,[["__scopeId","data-v-9823c038"]]);const dC={class:"sidebar-header"},fC={key:0},pC={class:"sidebar-content"},mC={class:"filter-section"},gC={class:"hashtag-filter-buttons"},_C=["onClick"],yC={class:"filter-section"},vC={class:"date-filter-options"},EC=["value"],TC={class:"date-range-buttons"},wC={class:"filter-actions"},IC={key:0},AC={key:1},bC={__name:"sidebar",setup(t){const e=ro(),n=Ae(!1),r=Ae(!1),s=()=>{r.value||(n.value=!0)},i=()=>{r.value||(n.value=!1)},o=()=>{r.value=window.innerWidth<768,r.value||(n.value=!1)};Ra(()=>{o(),window.addEventListener("resize",o)}),Ds(()=>{window.removeEventListener("resize",o)});const c=Ae(["Family","Friends","Travel","Event","Work","Home","Food","Fun","Important","Reminder"]),l=ot(()=>e.state.filterSettings),h=D=>{const P=[...l.value.hashtags],M=P.indexOf(D);M>-1?P.splice(M,1):P.push(D),e.dispatch("updateFilterSettings",{hashtags:P})},d=()=>{e.dispatch("updateFilterSettings",{hashtags:[]})},p=D=>{e.dispatch("updateFilterSettings",{dateRange:D,date:null})},m=D=>{e.dispatch("updateFilterSettings",{date:D.target.value,dateRange:"specific"})},_=()=>{e.dispatch("updateFilterSettings",{date:null,dateRange:"all"})},C=()=>{e.dispatch("updateFilterSettings",{hashtags:[],date:null,dateRange:"all"})};return(D,P)=>(ie(),he(Qe,null,[L("aside",{class:Gt(["sidebar-container",{expanded:n.value}]),onMouseenter:s,onMouseleave:i},[L("div",dC,[L("h3",null,[n.value?(ie(),he("span",fC,"Filter Content")):Dt("",!0)])]),L("div",pC,[L("div",mC,[P[5]||(P[5]=L("h4",null,"By Hashtag:",-1)),L("div",gC,[(ie(!0),he(Qe,null,zt(c.value,M=>(ie(),he("button",{key:M,onClick:an(B=>h(M),["stop"]),class:Gt([{selected:l.value.hashtags.includes(M)},"filter-hashtag-button"])}," #"+We(M),11,_C))),128))]),L("button",{onClick:an(d,["stop"]),class:"clear-filters-button"}," Clear Hashtag Filters ")]),L("div",yC,[P[7]||(P[7]=L("h4",null,"By Date:",-1)),L("div",vC,[P[6]||(P[6]=L("label",{for:"specific-date"},"Specific Date:",-1)),L("input",{type:"date",id:"specific-date",value:l.value.date,onChange:m,class:"date-input"},null,40,EC),L("div",TC,[L("button",{onClick:P[0]||(P[0]=an(M=>p("today"),["stop"])),class:Gt([{selected:l.value.dateRange==="today"},"filter-date-button"])}," Today ",2),L("button",{onClick:P[1]||(P[1]=an(M=>p("last7days"),["stop"])),class:Gt([{selected:l.value.dateRange==="last7days"},"filter-date-button"])}," Last 7 Days ",2),L("button",{onClick:P[2]||(P[2]=an(M=>p("last30days"),["stop"])),class:Gt([{selected:l.value.dateRange==="last30days"},"filter-date-button"])}," Last 30 Days ",2),L("button",{onClick:P[3]||(P[3]=an(M=>p("all"),["stop"])),class:Gt([{selected:l.value.dateRange==="all"},"filter-date-button"])}," All Time ",2)])]),L("button",{onClick:an(_,["stop"]),class:"clear-filters-button"}," Clear Date Filters ")]),L("div",wC,[L("button",{onClick:an(C,["stop"]),class:"reset-all-filters-button"}," Reset All Filters ")])])],34),r.value?(ie(),he("button",{key:0,class:"menu-button",onClick:P[4]||(P[4]=M=>n.value=!n.value)},[n.value?(ie(),he("span",AC,"✕")):(ie(),he("span",IC,"☰"))])):Dt("",!0)],64))}},oy=Wr(bC,[["__scopeId","data-v-99a23c7b"]]);const RC={__name:"hashtagButton",props:{tag:{type:String,required:!0},isSelected:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:e}){const n=t,r=e,s=()=>{n.isDisabled||r("click",n.tag)};return(i,o)=>(ie(),he("button",{onClick:s,class:Gt([{selected:t.isSelected,disabled:t.isDisabled},"hashtagButton"])}," #"+We(t.tag),3))}},_a=Wr(RC,[["__scopeId","data-v-b3b4276f"]]);const SC={class:"page-container"},PC={class:"sectionContainer"},CC={key:0,class:"memoInputForm"},kC={class:"memoInput"},DC={class:"fileInputContainer"},OC={for:"fileInput",class:"customFileInputLabel"},NC={key:0,class:"uploadProgress"},VC={class:"hashtagSelector"},xC={class:"hashtagButtons"},MC={class:"memoFormActions"},LC=["disabled"],UC={class:"memos-grid"},FC={key:0,class:"memo-photos-grid"},$C=["src"],BC={key:1,class:"memo-content"},jC=["innerHTML"],qC={class:"memoMeta"},HC={class:"memoMetaRow"},WC={class:"memoCreator"},KC={class:"memoTimestamp"},GC={key:0,class:"memoTags"},zC={class:"memoActions"},QC=["onClick"],YC=["onClick"],JC={key:2,class:"memoEditMode"},XC={class:"hashtagSelector"},ZC={class:"hashtagButtons"},ek={key:0,class:"editing-photos-grid"},tk=["src"],nk=["onClick"],rk={class:"fileInputContainer"},sk={class:"customFileInputLabel"},ik={class:"memoEditActions"},ok=["onClick"],ko=4,ak={__name:"memoSection",setup(t){const e=ro(),n=ot(()=>e.state.memos),r=Ae(!1),s=Ae(""),i=Ae(null),o=Ae([]),c=ot(()=>o.value.length?`${o.value.length} file(s) selected`:"Select Images"),l=Ae(""),h=Ae(null),d=Ae(""),p=Ae([]),m=Ae([]),_=Ae([]),C=Ae({}),D=Ae(["Family","Friends","Travel","Event","Work","Home","Food","Fun","Important","Reminder"]),P=ot(()=>e.state.filterSettings),M=Z=>Z?Z.seconds?new Date(Z.seconds*1e3).toLocaleDateString():new Date(Z).toLocaleDateString():"No Date",B=ot(()=>n.value.filter(Z=>(P.value.hashtags.length===0||P.value.hashtags.every(oe=>Z.tags.includes(oe)))&&(()=>{if(P.value.dateRange==="all")return!0;const oe=new Date(Z.timestamp.seconds*1e3),Te=new Date;switch(P.value.dateRange){case"today":return oe.toDateString()===Te.toDateString();case"last7days":const Ge=new Date(Te);return Ge.setDate(Te.getDate()-7),oe>=Ge;case"last30days":const ke=new Date(Te);return ke.setDate(Te.getDate()-30),oe>=ke;case"specific":if(!P.value.date)return!0;const Fe=new Date(P.value.date);return oe.toDateString()===Fe.toDateString()}})()));Dn(n,async()=>{const Z=new Set;if(n.value.forEach(J=>{J.creator&&!C.value[J.creator]&&Z.add(J.creator)}),Z.size!==0)try{const J=Array.from(Z).map(async oe=>{const Te=vs(bn,"users"),Ge=as(Te,cs("__name__","==",oe)),ke=await Yu(Ge);return{uid:oe,snapshot:ke}});(await Promise.all(J)).forEach(({uid:oe,snapshot:Te})=>{Te.forEach(Ge=>{const ke=Ge.data();C.value[oe]=ke.nickname})})}catch(J){console.error("Error fetching user nicknames:",J)}});const j=Z=>{o.value=Array.from(Z.target.files)},le=Z=>{p.value=Array.from(Z.target.files)},de=async Z=>{const J="dknmcj1qj",z="our_memo_preset",oe=new FormData;oe.append("file",Z),oe.append("upload_preset",z),l.value="Uploading...";try{const Te=await fetch(`https://api.cloudinary.com/v1_1/${J}/image/upload`,{method:"POST",body:oe});if(!Te.ok)throw new Error(`Cloudinary upload failed with status: ${Te.status}`);const Ge=await Te.json();return l.value="",Ge.secure_url}catch(Te){return console.error("Cloudinary upload failed",Te),l.value="Upload failed!",null}},R=async Z=>{if(!Z||Z.length===0)return[];const J=[];l.value=`Uploading ${Z.length} files...`;for(const z of Z){const oe=await de(z);if(oe)J.push(oe);else return l.value="Upload failed!",[]}return l.value="",J},E=async()=>{if(!s.value){alert("Please write a memo before adding.");return}let Z=[];if(o.value.length>0&&(Z=await R(o.value),Z.length===0&&o.value.length>0)){l.value="Upload failed!";return}await e.dispatch("addMemo",{content:s.value,imageUrls:Z,tags:m.value,creator:Qt.currentUser.uid}),A()},A=()=>{r.value=!1,s.value="",o.value=[],c.value="",l.value="",m.value=[],i.value&&(i.value.value="")},T=Z=>{e.dispatch("deleteMemo",Z)},I=Z=>{h.value=Z.id,d.value=Z.content,_.value=Z.tags?[...Z.tags]:[],p.value=Z.imageUrls?[...Z.imageUrls]:[]},b=async Z=>{let J=Z.imageUrls;if(p.value.length>0){l.value="Uploading new photo...";const z=await R(p.value);if(z.length===0&&p.value.length>0){l.value="Upload failed!";return}J=z}e.dispatch("editMemo",{id:h.value,content:d.value,tags:_.value,imageUrls:J,creator:Qt.currentUser.uid}),v()},v=()=>{h.value=null,d.value="",p.value=[],_.value=[]},je=Z=>{p.value.splice(Z,1)},qe=(Z,J)=>{let z=J==="new"?m.value:_.value;const oe=z.indexOf(Z);oe>-1?z.splice(oe,1):z.length<ko?z.push(Z):alert(`You can select a maximum of ${ko} hashtags.`)};return Dn(P,Z=>{console.log("Filters updated:",Z)},{deep:!0}),Ra(()=>{e.dispatch("fetchMemos")}),Ds(()=>{}),(Z,J)=>(ie(),he("div",SC,[Je(oy),L("div",PC,[J[3]||(J[3]=L("h2",null,"Memos",-1)),L("button",{onClick:J[0]||(J[0]=z=>r.value=!0),class:"newMemoButton"}," Create New Memo "),r.value?(ie(),he("div",CC,[L("div",kC,[Dr(L("textarea",{"onUpdate:modelValue":J[1]||(J[1]=z=>s.value=z),placeholder:"Write a new memo...",class:"memoInputTextarea"},null,512),[[Or,s.value]])]),L("div",DC,[L("input",{type:"file",onChange:j,ref_key:"fileInput",ref:i,accept:"image/*",multiple:"",id:"fileInput"},null,544),L("label",OC,We(c.value||"Select Images"),1)]),l.value?(ie(),he("p",NC,We(l.value),1)):Dt("",!0),L("div",VC,[L("h4",null,"Add Hashtags (max "+We(ko)+"):"),L("div",xC,[(ie(!0),he(Qe,null,zt(D.value,z=>(ie(),Es(_a,{key:z,tag:z,isSelected:m.value.includes(z),isDisabled:m.value.length>=ko&&!m.value.includes(z),onClick:oe=>qe(z,"new")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),L("div",MC,[L("button",{onClick:E,disabled:!s.value,class:"baseButton addMemoButton"}," Add Memo ",8,LC),L("button",{onClick:A,class:"baseButton cancelButton"},"Cancel")])])):Dt("",!0),L("div",UC,[(ie(!0),he(Qe,null,zt(B.value,z=>(ie(),he("div",{key:z.id,class:"memo-card"},[z.imageUrls&&z.imageUrls.length?(ie(),he("div",FC,[(ie(!0),he(Qe,null,zt(z.imageUrls,(oe,Te)=>(ie(),he("div",{key:Te,class:"memo-photo-wrapper"},[L("img",{src:oe,alt:"Memo Image",class:"memo-photo"},null,8,$C)]))),128))])):Dt("",!0),h.value!==z.id?(ie(),he("div",BC,[L("p",{innerHTML:z.content},null,8,jC),L("div",qC,[L("div",HC,[L("span",WC,We(C.value[z.creator]||"Loading..."),1),L("span",KC,We(M(z.timestamp)),1)]),z.tags&&z.tags.length?(ie(),he("div",GC,[(ie(!0),he(Qe,null,zt(z.tags,oe=>(ie(),he("span",{key:oe,class:"memoTag"},"#"+We(oe),1))),128))])):Dt("",!0)]),L("div",zC,[L("button",{class:"editButton",onClick:oe=>I(z)},"Edit",8,QC),L("button",{class:"deleteButton",onClick:oe=>T(z.id)},"Delete",8,YC)])])):(ie(),he("div",JC,[Dr(L("textarea",{"onUpdate:modelValue":J[2]||(J[2]=oe=>d.value=oe),class:"editTextarea"},null,512),[[Or,d.value]]),L("div",XC,[L("div",ZC,[(ie(!0),he(Qe,null,zt(D.value,oe=>(ie(),Es(_a,{key:oe,tag:oe,isSelected:_.value.includes(oe),onClick:Te=>qe(oe,"edit")},null,8,["tag","isSelected","onClick"]))),128))])]),p.value&&p.value.length>0?(ie(),he("div",ek,[(ie(!0),he(Qe,null,zt(p.value,(oe,Te)=>(ie(),he("div",{key:Te,class:"editing-photo-item"},[L("img",{src:oe,alt:"Memo Image",class:"editing-photo"},null,8,tk),L("button",{onClick:Ge=>je(Te),class:"remove-photo-button"},"×",8,nk)]))),128))])):Dt("",!0),L("div",rk,[L("input",{type:"file",multiple:"",onChange:le},null,32),L("label",sk,We(p.value.length>0?`${p.value.length} file(s) selected`:"Select Images"),1)]),L("div",ik,[L("button",{class:"saveButton",onClick:oe=>b(z)},"Save",8,ok),L("button",{class:"cancelButton",onClick:v},"Cancel")])]))]))),128))])])]))}},ck=Wr(ak,[["__scopeId","data-v-f7d103fd"]]),lk=t=>t?(t.toDate?t.toDate():new Date(t)).toLocaleString():"";const uk={class:"page-container"},hk={class:"sectionContainer planSectionContainer"},dk={key:1,class:"planInputForm"},fk={class:"planInput"},pk={class:"hashtagSelector"},mk={class:"hashtagButtons"},gk={class:"planList"},_k={key:0},yk={key:0,class:"planDisplayMode"},vk={class:"planMeta"},Ek={class:"planCreator"},Tk={class:"planActions"},wk=["onClick"],Ik=["onClick"],Ak=["onClick"],bk={key:1,class:"planEditMode"},Rk={class:"hashtagSelector"},Sk={class:"hashtagButtons"},Pk={class:"planEditActions"},Ck=["onClick"],kk={key:1},lp="our_cozy_shared_space_alpha",es=4,Dk={__name:"planSection",setup(t){const e=ro(),n=Ae(null),r=Ae([]),s=Ae({});let i=null;const o=Ae(""),c=Ae(null),l=Ae(""),h=Ae(!1),d=Ae(["Family","Friends","Travel","Event","Work","Home","Food","Fun","Important","Reminder"]),p=Ae([]),m=Ae([]),_=(T,I)=>{let b=I==="new"?p.value:m.value;const v=b.indexOf(T);v>-1?b.splice(v,1):b.length<es?b.push(T):alert(`You can select a maximum of ${es} hashtags.`)},C=async()=>{if(o.value.trim()===""){alert("Plan text is required!");return}if(!Qt.currentUser){alert("You must be logged in to add a plan.");return}try{await H_(vs(bn,"plans"),{text:o.value,createdAt:new Date,creatorId:Qt.currentUser.uid,sharedSpaceId:lp,hashtags:p.value,completed:!1}),o.value="",p.value=[],h.value=!1}catch(T){console.error("Error adding document to Firestore: ",T),alert("Failed to add plan. Check console for details.")}},D=()=>{o.value="",p.value=[],h.value=!1},P=T=>{c.value=T.id,l.value=T.text,m.value=T.hashtags?[...T.hashtags]:[]},M=async T=>{if(l.value.trim()===""){alert("Edited plan text is required!");return}if(!Qt.currentUser){alert("You must be logged in to edit a plan.");return}try{const I=or(bn,"plans",T);await Ol(I,{text:l.value,hashtags:m.value,creatorId:Qt.currentUser.uid}),B()}catch(I){console.error("Error updating plan: ",I),alert("Failed to update plan. Check console for details.")}},B=()=>{c.value=null,l.value="",m.value=[]},H=async(T,I)=>{const b=or(bn,"plans",T);try{await Ol(b,{completed:I})}catch(v){console.error("Error updating plan completion: ",v),alert("Failed to update plan. Check console for details.")}},j=async T=>{if(!Qt.currentUser){alert("You must be logged in to delete a plan.");return}if(confirm("Are you sure you want to delete this plan?")){const I=or(bn,"plans",T);try{await q_(I)}catch(b){console.error("Error deleting plan: ",b),alert("Failed to delete plan. Check console for details.")}}},le=T=>{const I=new Date(T);return I.setHours(0,0,0,0),I},de=T=>{const I=new Date(T);return I.setHours(23,59,59,999),I},R=(T,I)=>{if(i&&i(),!I){r.value=[];return}let b=as(vs(bn,"plans"),cs("sharedSpaceId","==",lp));T.hashtags&&T.hashtags.length>0&&(b=as(b,cs("hashtags","array-contains-any",T.hashtags)));const{dateRange:v,date:je}=T;let qe=null,Z=null;if(v==="today")qe=le(new Date),Z=de(new Date);else if(v==="last7days"){const J=new Date;qe=le(new Date(J.setDate(J.getDate()-6))),Z=de(new Date)}else if(v==="last30days"){const J=new Date;qe=le(new Date(J.setDate(J.getDate()-29))),Z=de(new Date)}else if(v==="specific"&&je){const J=new Date(je);qe=le(J),Z=de(J)}qe&&Z&&(b=as(b,cs("createdAt",">=",Xe.fromDate(qe)),cs("createdAt","<=",Xe.fromDate(Z)))),b=as(b,HS("createdAt","desc")),i=W_(b,J=>{const z=[];J.forEach(oe=>{const Te=oe.data();z.push({id:oe.id,...Te,hashtags:Te.hashtags||[]})}),r.value=z},J=>{console.error("Error listening to plans: ",J),alert("Failed to load plans. Check console for details.")})};Dn(r,async()=>{const T=new Set;if(r.value.forEach(I=>{I.creatorId&&!s.value[I.creatorId]&&T.add(I.creatorId)}),T.size!==0)try{const I=Array.from(T).map(v=>Yu(as(vs(bn,"users"),cs("__name__","==",v))));(await Promise.all(I)).forEach(v=>{v.forEach(je=>{const qe=je.data();s.value[je.id]=qe.nickname})})}catch(I){console.error("Error fetching user nicknames:",I)}}),eE(()=>{const T=e.state.filterSettings,I=Qt.currentUser;I?(n.value=I.uid,R(T,I.uid)):(n.value=null,i&&i(),r.value=[])}),Ds(()=>{i&&i()});const A=ot(()=>{const T=e.state.filterSettings;return T.hashtags.length===0?r.value:r.value.filter(I=>T.hashtags.every(b=>I.hashtags.includes(b)))});return(T,I)=>(ie(),he("div",uk,[Je(oy),L("section",hk,[I[6]||(I[6]=L("h2",null,"Our Plans",-1)),h.value?Dt("",!0):(ie(),he("button",{key:0,onClick:I[0]||(I[0]=b=>h.value=!0),class:"newPlanButton"}," + New Plan ")),h.value?(ie(),he("div",dk,[I[4]||(I[4]=L("h3",null,"Add a New Plan",-1)),L("div",fk,[Dr(L("textarea",{"onUpdate:modelValue":I[1]||(I[1]=b=>o.value=b),placeholder:"Write a new plan..."},null,512),[[Or,o.value]])]),L("div",pk,[L("h4",null,"Add Hashtags (max "+We(es)+"):"),L("div",mk,[(ie(!0),he(Qe,null,zt(d.value,b=>(ie(),Es(_a,{key:b,tag:b,isSelected:p.value.includes(b),isDisabled:p.value.length>=es&&!p.value.includes(b),onClick:v=>_(b,"new")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),L("div",{class:"planFormActions"},[L("button",{onClick:C},"Add Plan"),L("button",{onClick:D,class:"cancelButton"},"Cancel")])])):Dt("",!0),L("div",gk,[I[5]||(I[5]=L("h3",null,"Existing Plans:",-1)),A.value.length?(ie(),he("ul",_k,[(ie(!0),he(Qe,null,zt(A.value,b=>(ie(),he("li",{key:b.id,class:Gt({editing:c.value===b.id,"plan-completed":b.completed})},[c.value!==b.id?(ie(),he("div",yk,[L("p",null,We(b.text),1),L("div",vk,[L("small",null,We(Cr(lk)(b.createdAt)),1),L("span",Ek," by "+We(s.value[b.creatorId]||"..."),1),(ie(!0),he(Qe,null,zt(b.hashtags,v=>(ie(),he("span",{key:v,class:"planTag"}," #"+We(v),1))),128))]),L("div",Tk,[b.creatorId===n.value?(ie(),he("button",{key:0,onClick:v=>H(b.id,!b.completed),class:"completeButton"},We(b.completed?"Uncomplete":"Complete"),9,wk)):Dt("",!0),b.creatorId===n.value?(ie(),he("button",{key:1,onClick:v=>P(b),class:"editButton"}," Edit ",8,Ik)):Dt("",!0),b.creatorId===n.value?(ie(),he("button",{key:2,onClick:v=>j(b.id),class:"deleteButton"}," Delete ",8,Ak)):Dt("",!0)])])):(ie(),he("div",bk,[Dr(L("textarea",{"onUpdate:modelValue":I[2]||(I[2]=v=>l.value=v),class:"editTextarea"},null,512),[[Or,l.value]]),L("div",Rk,[L("h4",null,"Edit Hashtags (max "+We(es)+"):"),L("div",Sk,[(ie(!0),he(Qe,null,zt(d.value,v=>(ie(),Es(_a,{key:v,tag:v,isSelected:m.value.includes(v),isDisabled:m.value.length>=es&&!m.value.includes(v),onClick:je=>_(v,"edit")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),L("div",Pk,[L("button",{onClick:v=>M(b.id),class:"saveButton"},"Save",8,Ck),L("button",{onClick:I[3]||(I[3]=v=>B()),class:"cancelButton"},"Cancel")])]))],2))),128))])):(ie(),he("p",kk,'No plans yet! Be the first to add one by clicking "New Plan".'))])])]))}},Ok=Wr(Dk,[["__scopeId","data-v-561c98a8"]]);const Nk={class:"user-setup-container"},Vk={class:"nickname-card"},xk=["disabled"],Mk={__name:"setNickname",setup(t){const e=Ae(""),n=Ae(!1),r=pu(),s=async()=>{if(!e.value||n.value)return;n.value=!0;const i=Qt.currentUser;if(!i){console.error("No user authenticated. Cannot save nickname."),n.value=!1;return}try{const o=or(bn,"users",i.uid);await GS(o,{nickname:e.value,createdAt:new Date}),console.log("Nickname saved successfully for user:",i.uid),r.push("/")}catch(o){console.error("Error saving nickname:",o),alert("Failed to save nickname. Please try again.")}finally{n.value=!1}};return(i,o)=>(ie(),he("div",Nk,[L("div",Vk,[o[1]||(o[1]=L("h2",null,"Welcome!",-1)),o[2]||(o[2]=L("p",null,"Please choose a nickname to use in the shared space.",-1)),L("form",{onSubmit:an(s,["prevent"])},[Dr(L("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),type:"text",placeholder:"Enter your nickname",required:"",minlength:"3",maxlength:"20"},null,512),[[Or,e.value]]),L("button",{type:"submit",disabled:n.value},We(n.value?"Saving...":"Save Nickname"),9,xk)],32)])]))}},Lk=Wr(Mk,[["__scopeId","data-v-9965df87"]]),Uk=[{path:"/",name:"Home",component:sC,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:hC,meta:{requiresAuth:!1}},{path:"/memos",name:"Memos",component:ck,meta:{requiresAuth:!0}},{path:"/plans",name:"Plans",component:Ok,meta:{requiresAuth:!0}},{path:"/set-nickname",name:"SetNickname",component:Lk,meta:{requiresAuth:!0}}],ay=Q0({history:A0(),routes:Uk});ay.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=hu().currentUser;r&&!s?n("/login"):!r&&s?n("/"):n()});const th=zE(eC);th.use(ay);th.use(WP,iy);th.mount("#app");
