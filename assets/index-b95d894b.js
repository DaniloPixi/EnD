(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},hs=[],Yt=()=>{},Dy=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),it=Object.assign,xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oy=Object.prototype.hasOwnProperty,Oe=(t,e)=>Oy.call(t,e),ge=Array.isArray,ds=t=>va(t)==="[object Map]",up=t=>va(t)==="[object Set]",Ee=t=>typeof t=="function",Ze=t=>typeof t=="string",pr=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",hp=t=>(je(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),dp=Object.prototype.toString,va=t=>dp.call(t),Ny=t=>va(t).slice(8,-1),fp=t=>va(t)==="[object Object]",Ml=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ui=Nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vy=/-(\w)/g,Ht=Ea(t=>t.replace(Vy,(e,n)=>n?n.toUpperCase():"")),xy=/\B([A-Z])/g,Ur=Ea(t=>t.replace(xy,"-$1").toLowerCase()),Ta=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=Ea(t=>t?`on${Ta(t)}`:""),tr=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jc=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gh;const Ia=()=>Gh||(Gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ll(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Uy(r):Ll(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||je(t))return t}const My=/;(?![^(]*\))/g,Ly=/:([^]+)/,Fy=/\/\*[^]*?\*\//g;function Uy(t){const e={};return t.replace(Fy,"").split(My).forEach(n=>{if(n){const r=n.split(Ly);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kt(t){let e="";if(Ze(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const r=Kt(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const By="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$y=Nl(By);function pp(t){return!!t||t===""}const mp=t=>!!(t&&t.__v_isRef===!0),Fe=t=>Ze(t)?t:t==null?"":ge(t)||je(t)&&(t.toString===dp||!Ee(t.toString))?mp(t)?Fe(t.value):JSON.stringify(t,gp,2):String(t),gp=(t,e)=>mp(e)?gp(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[mc(r,i)+" =>"]=s,n),{})}:up(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>mc(n))}:pr(e)?mc(e):je(e)&&!ge(e)&&!fp(e)?String(e):e,mc=(t,e="")=>{var n;return pr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class jy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qy(){return kt}let Le;const gc=new WeakSet;class _p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gc.has(this)&&(gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zh(this),Ep(this);const e=Le,n=Jt;Le=this,Jt=!0;try{return this.fn()}finally{Tp(this),Le=e,Jt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bl(e);this.deps=this.depsTail=void 0,zh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hc(this)&&this.run()}get dirty(){return Hc(this)}}let yp=0,hi,di;function vp(t,e=!1){if(t.flags|=8,e){t.next=di,di=t;return}t.next=hi,hi=t}function Fl(){yp++}function Ul(){if(--yp>0)return;if(di){let e=di;for(di=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hi;){let e=hi;for(hi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Bl(r),Hy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Hc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ip(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ip(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ai)||(t.globalVersion=Ai,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hc(t))))return;t.flags|=2;const e=t.dep,n=Le,r=Jt;Le=t,Jt=!0;try{Ep(t);const s=t.fn(t._value);(e.version===0||tr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,Jt=r,Tp(t),t.flags&=-3}}function Bl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Bl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Jt=!0;const wp=[];function Nn(){wp.push(Jt),Jt=!1}function Vn(){const t=wp.pop();Jt=t===void 0?!0:t}function zh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let Ai=0;class Wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!Jt||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new Wy(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,Ap(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,Ai++,this.notify(e)}notify(e){Fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ul()}}}function Ap(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ap(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wc=new WeakMap,Pr=Symbol(""),Kc=Symbol(""),bi=Symbol("");function vt(t,e,n){if(Jt&&Le){let r=Wc.get(t);r||Wc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $l),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=Wc.get(t);if(!o){Ai++;return}const c=l=>{l&&l.trigger()};if(Fl(),e==="clear")o.forEach(c);else{const l=ge(t),h=l&&Ml(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===bi||!pr(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(bi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Pr)),ds(t)&&c(o.get(Kc)));break;case"delete":l||(c(o.get(Pr)),ds(t)&&c(o.get(Kc)));break;case"set":ds(t)&&c(o.get(Pr));break}}Ul()}function Jr(t){const e=De(t);return e===t?e:(vt(e,"iterate",bi),Bt(t)?e:e.map(ut))}function wa(t){return vt(t=De(t),"iterate",bi),t}const Ky={__proto__:null,[Symbol.iterator](){return _c(this,Symbol.iterator,ut)},concat(...t){return Jr(this).concat(...t.map(e=>ge(e)?Jr(e):e))},entries(){return _c(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return Tn(this,"every",t,e,void 0,arguments)},filter(t,e){return Tn(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return Tn(this,"find",t,e,ut,arguments)},findIndex(t,e){return Tn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Tn(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return Tn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Tn(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return Jr(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return Tn(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Qh(this,"reduce",t,e)},reduceRight(t,...e){return Qh(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return Tn(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return Jr(this).toReversed()},toSorted(t){return Jr(this).toSorted(t)},toSpliced(...t){return Jr(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return _c(this,"values",ut)}};function _c(t,e,n){const r=wa(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Gy=Array.prototype;function Tn(t,e,n,r,s,i){const o=wa(t),c=o!==t&&!Bt(t),l=o[e];if(l!==Gy[e]){const p=l.apply(t,i);return c?ut(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,ut(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Qh(t,e,n,r){const s=wa(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ut(c),l,t)}),s[e](i,...r)}function yc(t,e,n){const r=De(t);vt(r,"iterate",bi);const s=r[e](...n);return(s===-1||s===!1)&&Hl(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function Js(t,e,n=[]){Nn(),Fl();const r=De(t)[e].apply(t,n);return Ul(),Vn(),r}const zy=Nl("__proto__,__v_isRef,__isVue"),bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pr));function Qy(t){pr(t)||(t=String(t));const e=De(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?iv:kp:i?Cp:Pp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ge(e);if(!s){let l;if(o&&(l=Ky[n]))return l;if(n==="hasOwnProperty")return Qy}const c=Reflect.get(e,n,It(e)?e:r);return(pr(n)?bp.has(n):zy(n))||(s||vt(e,"get",n),i)?c:It(c)?o&&Ml(n)?c:c.value:je(c)?s?Op(c):$i(c):c}}class Sp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ar(i);if(!Bt(r)&&!ar(r)&&(i=De(i),r=De(r)),!ge(e)&&It(i)&&!It(r))return l?!1:(i.value=r,!0)}const o=ge(e)&&Ml(n)?Number(n)<e.length:Oe(e,n),c=Reflect.set(e,n,r,It(e)?e:s);return e===De(s)&&(o?tr(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),c}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!pr(n)||!bp.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",ge(e)?"length":Pr),Reflect.ownKeys(e)}}class Yy extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jy=new Sp,Xy=new Yy,Zy=new Sp(!0);const Gc=t=>t,Io=t=>Reflect.getPrototypeOf(t);function ev(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?Gc:e?Ho:ut;return!e&&vt(i,"iterate",l?Kc:Pr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tv(t,e){const n={get(s){const i=this.__v_raw,o=De(i),c=De(s);t||(tr(s,c)&&vt(o,"get",s),vt(o,"get",c));const{has:l}=Io(o),h=e?Gc:t?Ho:ut;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(De(s),"iterate",Pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),c=De(s);return t||(tr(s,c)&&vt(o,"has",s),vt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=De(c),h=e?Gc:t?Ho:ut;return!t&&vt(l,"iterate",Pr),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return it(n,t?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(s){!e&&!Bt(s)&&!ar(s)&&(s=De(s));const i=De(this);return Io(i).has.call(i,s)||(i.add(s),bn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!ar(i)&&(i=De(i));const o=De(this),{has:c,get:l}=Io(o);let h=c.call(o,s);h||(s=De(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?tr(i,d)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:c}=Io(i);let l=o.call(i,s);l||(s=De(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&bn(i,"delete",s,void 0),h},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ev(s,t,e)}),n}function jl(t,e){const n=tv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const nv={get:jl(!1,!1)},rv={get:jl(!1,!0)},sv={get:jl(!0,!1)};const Pp=new WeakMap,Cp=new WeakMap,kp=new WeakMap,iv=new WeakMap;function ov(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function av(t){return t.__v_skip||!Object.isExtensible(t)?0:ov(Ny(t))}function $i(t){return ar(t)?t:ql(t,!1,Jy,nv,Pp)}function Dp(t){return ql(t,!1,Zy,rv,Cp)}function Op(t){return ql(t,!0,Xy,sv,kp)}function ql(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=av(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function fs(t){return ar(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function Hl(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function cv(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&jc(t,"__v_skip",!0),t}const ut=t=>je(t)?$i(t):t,Ho=t=>je(t)?Op(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Ie(t){return Np(t,!1)}function lv(t){return Np(t,!0)}function Np(t,e){return It(t)?t:new uv(t,e)}class uv{constructor(e,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||ar(e);e=r?e:De(e),tr(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function Cr(t){return It(t)?t.value:t}const hv={get:(t,e,n)=>e==="__v_raw"?t:Cr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vp(t){return fs(t)?t:new Proxy(t,hv)}class dv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return vp(this,!0),!0}get value(){const e=this.dep.track();return Ip(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fv(t,e,n=!1){let r,s;return Ee(t)?r=t:(r=t.get,s=t.set),new dv(r,s,n)}const Ao={},Wo=new WeakMap;let br;function pv(t,e=!1,n=br){if(n){let r=Wo.get(n);r||Wo.set(n,r=[]),r.push(t)}}function mv(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=j=>s?j:Bt(j)||s===!1||s===0?Rn(j,1):Rn(j);let d,p,m,_,C=!1,D=!1;if(It(t)?(p=()=>t.value,C=Bt(t)):fs(t)?(p=()=>h(t),C=!0):ge(t)?(D=!0,C=t.some(j=>fs(j)||Bt(j)),p=()=>t.map(j=>{if(It(j))return j.value;if(fs(j))return h(j);if(Ee(j))return l?l(j,2):j()})):Ee(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Nn();try{m()}finally{Vn()}}const j=br;br=d;try{return l?l(t,3,[_]):t(_)}finally{br=j}}:p=Yt,e&&s){const j=p,ce=s===!0?1/0:s;p=()=>Rn(j(),ce)}const P=qy(),L=()=>{d.stop(),P&&P.active&&xl(P.effects,d)};if(i&&e){const j=e;e=(...ce)=>{j(...ce),L()}}let $=D?new Array(t.length).fill(Ao):Ao;const H=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const ce=d.run();if(s||C||(D?ce.some((le,R)=>tr(le,$[R])):tr(ce,$))){m&&m();const le=br;br=d;try{const R=[ce,$===Ao?void 0:D&&$[0]===Ao?[]:$,_];$=ce,l?l(e,3,R):e(...R)}finally{br=le}}}else d.run()};return c&&c(H),d=new _p(p),d.scheduler=o?()=>o(H,!1):H,_=j=>pv(j,!1,d),m=d.onStop=()=>{const j=Wo.get(d);if(j){if(l)l(j,4);else for(const ce of j)ce();Wo.delete(d)}},e?r?H(!0):$=d.run():o?o(H.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function Rn(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))Rn(t.value,e,n);else if(ge(t))for(let r=0;r<t.length;r++)Rn(t[r],e,n);else if(up(t)||ds(t))t.forEach(r=>{Rn(r,e,n)});else if(fp(t)){for(const r in t)Rn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Rn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Aa(s,e,n)}}function pn(t,e,n,r){if(Ee(t)){const s=ji(t,e,n,r);return s&&hp(s)&&s.catch(i=>{Aa(i,e,n)}),s}if(ge(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function Aa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){Nn(),ji(i,null,10,[t,l,h]),Vn();return}}gv(t,n,s,r,o)}function gv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let sn=-1;const ps=[];let Gn=null,ns=0;const xp=Promise.resolve();let Ko=null;function Mp(t){const e=Ko||xp;return t?e.then(this?t.bind(this):t):e}function _v(t){let e=sn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Wl(t){if(!(t.flags&1)){const e=Ri(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Ri(n)?Rt.push(t):Rt.splice(_v(e),0,t),t.flags|=1,Lp()}}function Lp(){Ko||(Ko=xp.then(Up))}function yv(t){ge(t)?ps.push(...t):Gn&&t.id===-1?Gn.splice(ns+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),Lp()}function Yh(t,e,n=sn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Fp(t){if(ps.length){const e=[...new Set(ps)].sort((n,r)=>Ri(n)-Ri(r));if(ps.length=0,Gn){Gn.push(...e);return}for(Gn=e,ns=0;ns<Gn.length;ns++){const n=Gn[ns];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,ns=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Up(t){const e=Yt;try{for(sn=0;sn<Rt.length;sn++){const n=Rt[sn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ji(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;sn<Rt.length;sn++){const n=Rt[sn];n&&(n.flags&=-2)}sn=-1,Rt.length=0,Fp(),Ko=null,(Rt.length||ps.length)&&Up()}}let Mt=null,Bp=null;function Go(t){const e=Mt;return Mt=t,Bp=t&&t.type.__scopeId||null,e}function zo(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&id(-1);const i=Go(e);let o;try{o=t(...s)}finally{Go(i),r._d&&id(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(t,e){if(Mt===null)return t;const n=Pa(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Me]=e[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&Rn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Nn(),pn(l,n,8,[t.el,c,t,e]),Vn())}}const vv=Symbol("_vte"),Ev=t=>t.__isTeleport;function Kl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function $p(t,e){return Ee(t)?(()=>it({name:t.name},e,{setup:t}))():t}function jp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fi(t,e,n,r,s=!1){if(ge(t)){t.forEach((C,D)=>fi(C,e&&(ge(e)?e[D]:e),n,r,s));return}if(pi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pa(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Me?c.refs={}:c.refs,p=c.setupState,m=De(p),_=p===Me?()=>!1:C=>Oe(m,C);if(h!=null&&h!==l&&(Ze(h)?(d[h]=null,_(h)&&(p[h]=null)):It(h)&&(h.value=null)),Ee(l))ji(l,c,12,[o,d]);else{const C=Ze(l),D=It(l);if(C||D){const P=()=>{if(t.f){const L=C?_(l)?p[l]:d[l]:l.value;s?ge(L)&&xl(L,i):ge(L)?L.includes(i)||L.push(i):C?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else C?(d[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,xt(P,n)):P()}}}Ia().requestIdleCallback;Ia().cancelIdleCallback;const pi=t=>!!t.type.__asyncLoader,qp=t=>t.type.__isKeepAlive;function Tv(t,e){Hp(t,"a",e)}function Iv(t,e){Hp(t,"da",e)}function Hp(t,e,n=Tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ba(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qp(s.parent.vnode)&&wv(r,e,n,s),s=s.parent}}function wv(t,e,n,r){const s=ba(e,t,r,!0);qi(()=>{xl(r[e],s)},n)}function ba(t,e,n=Tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const c=Hi(n),l=pn(e,n,t,o);return c(),Vn(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=Tt)=>{(!Pi||t==="sp")&&ba(t,(...r)=>e(...r),n)},Av=Un("bm"),Gl=Un("m"),bv=Un("bu"),Rv=Un("u"),Sv=Un("bum"),qi=Un("um"),Pv=Un("sp"),Cv=Un("rtg"),kv=Un("rtc");function Dv(t,e=Tt){ba("ec",t,e)}const Wp="components";function ti(t,e){return Nv(Wp,t,!0,e)||t}const Ov=Symbol.for("v-ndc");function Nv(t,e,n=!0,r=!1){const s=Mt||Tt;if(s){const i=s.type;if(t===Wp){const c=TE(i,!1);if(c&&(c===e||c===Ht(e)||c===Ta(Ht(e))))return i}const o=Jh(s[t]||i[t],e)||Jh(s.appContext[t],e);return!o&&r?i:o}}function Jh(t,e){return t&&(t[e]||t[Ht(e)]||t[Ta(Ht(e))])}function Sn(t,e,n,r){let s;const i=n&&n[r],o=ge(t);if(o||Ze(t)){const c=o&&fs(t);let l=!1,h=!1;c&&(l=!Bt(t),h=ar(t),t=wa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(l?h?Ho(ut(t[d])):ut(t[d]):t[d],d,void 0,i&&i[d])}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i&&i[c])}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i&&i[l]));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}const zc=t=>t?lm(t)?Pa(t):zc(t.parent):null,mi=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zc(t.parent),$root:t=>zc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zl(t),$forceUpdate:t=>t.f||(t.f=()=>{Wl(t.update)}),$nextTick:t=>t.n||(t.n=Mp.bind(t.proxy)),$watch:t=>tE.bind(t)}),vc=(t,e)=>t!==Me&&!t.__isScriptSetup&&Oe(t,e),Vv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vc(r,e))return o[e]=1,r[e];if(s!==Me&&Oe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Oe(h,e))return o[e]=3,i[e];if(n!==Me&&Oe(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const d=mi[e];let p,m;if(d)return e==="$attrs"&&vt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Oe(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vc(s,e)?(s[e]=n,!0):r!==Me&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Me&&Oe(t,o)||vc(e,o)||(c=i[0])&&Oe(c,o)||Oe(r,o)||Oe(mi,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xh(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function xv(t){const e=zl(t),n=t.proxy,r=t.ctx;Qc=!1,e.beforeCreate&&Zh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:P,beforeDestroy:L,beforeUnmount:$,destroyed:H,unmounted:j,render:ce,renderTracked:le,renderTriggered:R,errorCaptured:E,serverPrefetch:A,expose:T,inheritAttrs:w,components:b,directives:v,filters:se}=e;if(h&&Mv(h,r,null),o)for(const K in o){const ie=o[K];Ee(ie)&&(r[K]=ie.bind(n))}if(s){const K=s.call(n,n);je(K)&&(t.data=$i(K))}if(Qc=!0,i)for(const K in i){const ie=i[K],Ue=Ee(ie)?ie.bind(n,n):Ee(ie.get)?ie.get.bind(n,n):Yt,Ge=!Ee(ie)&&Ee(ie.set)?ie.set.bind(n):Yt,Pt=ht({get:Ue,set:Ge});Object.defineProperty(r,K,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:qe=>Pt.value=qe})}if(c)for(const K in c)Kp(c[K],r,n,K);if(l){const K=Ee(l)?l.call(n):l;Reflect.ownKeys(K).forEach(ie=>{Oo(ie,K[ie])})}d&&Zh(d,t,"c");function re(K,ie){ge(ie)?ie.forEach(Ue=>K(Ue.bind(n))):ie&&K(ie.bind(n))}if(re(Av,p),re(Gl,m),re(bv,_),re(Rv,C),re(Tv,D),re(Iv,P),re(Dv,E),re(kv,le),re(Cv,R),re(Sv,$),re(qi,j),re(Pv,A),ge(T))if(T.length){const K=t.exposed||(t.exposed={});T.forEach(ie=>{Object.defineProperty(K,ie,{get:()=>n[ie],set:Ue=>n[ie]=Ue,enumerable:!0})})}else t.exposed||(t.exposed={});ce&&t.render===Yt&&(t.render=ce),w!=null&&(t.inheritAttrs=w),b&&(t.components=b),v&&(t.directives=v),A&&jp(t)}function Mv(t,e,n=Yt){ge(t)&&(t=Yc(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Zh(t,e,n){pn(ge(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kp(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(Ze(t)){const i=e[t];Ee(i)&&Dn(s,i)}else if(Ee(t))Dn(s,t.bind(n));else if(je(t))if(ge(t))t.forEach(i=>Kp(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&Dn(s,i,t)}}function zl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Qo(l,h,o,!0)),Qo(l,e,o)),je(e)&&i.set(e,l),l}function Qo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qo(t,i,n,!0),s&&s.forEach(o=>Qo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Lv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Lv={data:ed,props:td,emits:td,methods:ni,computed:ni,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:ni,directives:ni,watch:Uv,provide:ed,inject:Fv};function ed(t,e){return e?t?function(){return it(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function Fv(t,e){return ni(Yc(t),Yc(e))}function Yc(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function ni(t,e){return t?it(Object.create(null),t,e):e}function td(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:it(Object.create(null),Xh(t),Xh(e??{})):e}function Uv(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Gp(){return{app:null,config:{isNativeTag:Dy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bv=0;function $v(t,e){return function(r,s=null){Ee(r)||(r=it({},r)),s!=null&&!je(s)&&(s=null);const i=Gp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Bv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:wE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&Ee(d.install)?(o.add(d),d.install(h,...p)):Ee(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const _=h._ceVNode||Qe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),l=!0,h._container=d,d.__vue_app__=h,Pa(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(pn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ms;ms=h;try{return d()}finally{ms=p}}};return h}}let ms=null;function Oo(t,e){if(Tt){let n=Tt.provides;const r=Tt.parent&&Tt.parent.provides;r===n&&(n=Tt.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=gE();if(r||ms){let s=ms?ms._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}const zp={},Qp=()=>Object.create(zp),Yp=t=>Object.getPrototypeOf(t)===zp;function jv(t,e,n,r=!1){const s={},i=Qp();t.propsDefaults=Object.create(null),Jp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Dp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=De(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ra(t.emitsOptions,m))continue;const _=e[m];if(l)if(Oe(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const C=Ht(m);s[C]=Jc(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{Jp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Oe(e,p)&&((d=Ur(p))===p||!Oe(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Jc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],h=!0)}h&&bn(t.attrs,"set","")}function Jp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ui(l))continue;const h=e[l];let d;s&&Oe(s,d=Ht(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:Ra(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=De(n),h=c||Me;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Jc(s,l,p,h[p],t,!Oe(h,p))}}return o}function Jc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Oe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Hi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ur(n))&&(r=!0))}return r}const Hv=new WeakMap;function Xp(t,e,n=!1){const r=n?Hv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!Ee(t)){const d=p=>{l=!0;const[m,_]=Xp(p,e,!0);it(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return je(t)&&r.set(t,hs),hs;if(ge(i))for(let d=0;d<i.length;d++){const p=Ht(i[d]);nd(p)&&(o[p]=Me)}else if(i)for(const d in i){const p=Ht(d);if(nd(p)){const m=i[d],_=o[p]=ge(m)||Ee(m)?{type:m}:it({},m),C=_.type;let D=!1,P=!0;if(ge(C))for(let L=0;L<C.length;++L){const $=C[L],H=Ee($)&&$.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(P=!1)}else D=Ee(C)&&C.name==="Boolean";_[0]=D,_[1]=P,(D||Oe(_,"default"))&&c.push(p)}}const h=[o,c];return je(t)&&r.set(t,h),h}function nd(t){return t[0]!=="$"&&!ui(t)}const Ql=t=>t==="_"||t==="__"||t==="_ctx"||t==="$stable",Yl=t=>ge(t)?t.map(an):[an(t)],Wv=(t,e,n)=>{if(e._n)return e;const r=zo((...s)=>Yl(e(...s)),n);return r._c=!1,r},Zp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ql(s))continue;const i=t[s];if(Ee(i))e[s]=Wv(s,i,r);else if(i!=null){const o=Yl(i);e[s]=()=>o}}},em=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},tm=(t,e,n)=>{for(const r in e)(n||!Ql(r))&&(t[r]=e[r])},Kv=(t,e,n)=>{const r=t.slots=Qp();if(t.vnode.shapeFlag&32){const s=e.__;s&&jc(r,"__",s,!0);const i=e._;i?(tm(r,e,n),n&&jc(r,"_",i,!0)):Zp(e,r)}else e&&em(t,e)},Gv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:tm(s,e,n):(i=!e.$stable,Zp(e,s)),o=e}else e&&(em(t,e),o={default:1});if(i)for(const c in s)!Ql(c)&&o[c]==null&&delete s[c]},xt=cE;function zv(t){return Qv(t)}function Qv(t,e){const n=Ia();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Yt,insertStaticContent:C}=t,D=(y,I,k,F=null,N=null,B=null,Q=void 0,G=null,W=!!I.dynamicChildren)=>{if(y===I)return;y&&!Xs(y,I)&&(F=V(y),qe(y,N,B,!0),y=null),I.patchFlag===-2&&(W=!1,I.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Y}=I;switch(q){case Sa:P(y,I,k,F);break;case cr:L(y,I,k,F);break;case Ic:y==null&&$(I,k,F,Q);break;case rt:b(y,I,k,F,N,B,Q,G,W);break;default:Y&1?ce(y,I,k,F,N,B,Q,G,W):Y&6?v(y,I,k,F,N,B,Q,G,W):(Y&64||Y&128)&&q.process(y,I,k,F,N,B,Q,G,W,ee)}oe!=null&&N?fi(oe,y&&y.ref,B,I||y,!I):oe==null&&y&&y.ref!=null&&fi(y.ref,null,B,y,!0)},P=(y,I,k,F)=>{if(y==null)r(I.el=c(I.children),k,F);else{const N=I.el=y.el;I.children!==y.children&&h(N,I.children)}},L=(y,I,k,F)=>{y==null?r(I.el=l(I.children||""),k,F):I.el=y.el},$=(y,I,k,F)=>{[y.el,y.anchor]=C(y.children,I,k,F,y.el,y.anchor)},H=({el:y,anchor:I},k,F)=>{let N;for(;y&&y!==I;)N=m(y),r(y,k,F),y=N;r(I,k,F)},j=({el:y,anchor:I})=>{let k;for(;y&&y!==I;)k=m(y),s(y),y=k;s(I)},ce=(y,I,k,F,N,B,Q,G,W)=>{I.type==="svg"?Q="svg":I.type==="math"&&(Q="mathml"),y==null?le(I,k,F,N,B,Q,G,W):A(y,I,N,B,Q,G,W)},le=(y,I,k,F,N,B,Q,G)=>{let W,q;const{props:oe,shapeFlag:Y,transition:ne,dirs:de}=y;if(W=y.el=o(y.type,B,oe&&oe.is,oe),Y&8?d(W,y.children):Y&16&&E(y.children,W,null,F,N,Ec(y,B),Q,G),de&&wr(y,null,F,"created"),R(W,y,y.scopeId,Q,F),oe){for(const Te in oe)Te!=="value"&&!ui(Te)&&i(W,Te,null,oe[Te],B,F);"value"in oe&&i(W,"value",null,oe.value,B),(q=oe.onVnodeBeforeMount)&&rn(q,F,y)}de&&wr(y,null,F,"beforeMount");const ue=Yv(N,ne);ue&&ne.beforeEnter(W),r(W,I,k),((q=oe&&oe.onVnodeMounted)||ue||de)&&xt(()=>{q&&rn(q,F,y),ue&&ne.enter(W),de&&wr(y,null,F,"mounted")},N)},R=(y,I,k,F,N)=>{if(k&&_(y,k),F)for(let B=0;B<F.length;B++)_(y,F[B]);if(N){let B=N.subTree;if(I===B||om(B.type)&&(B.ssContent===I||B.ssFallback===I)){const Q=N.vnode;R(y,Q,Q.scopeId,Q.slotScopeIds,N.parent)}}},E=(y,I,k,F,N,B,Q,G,W=0)=>{for(let q=W;q<y.length;q++){const oe=y[q]=G?zn(y[q]):an(y[q]);D(null,oe,I,k,F,N,B,Q,G)}},A=(y,I,k,F,N,B,Q)=>{const G=I.el=y.el;let{patchFlag:W,dynamicChildren:q,dirs:oe}=I;W|=y.patchFlag&16;const Y=y.props||Me,ne=I.props||Me;let de;if(k&&Ar(k,!1),(de=ne.onVnodeBeforeUpdate)&&rn(de,k,I,y),oe&&wr(I,y,k,"beforeUpdate"),k&&Ar(k,!0),(Y.innerHTML&&ne.innerHTML==null||Y.textContent&&ne.textContent==null)&&d(G,""),q?T(y.dynamicChildren,q,G,k,F,Ec(I,N),B):Q||ie(y,I,G,null,k,F,Ec(I,N),B,!1),W>0){if(W&16)w(G,Y,ne,k,N);else if(W&2&&Y.class!==ne.class&&i(G,"class",null,ne.class,N),W&4&&i(G,"style",Y.style,ne.style,N),W&8){const ue=I.dynamicProps;for(let Te=0;Te<ue.length;Te++){const Re=ue[Te],ot=Y[Re],tt=ne[Re];(tt!==ot||Re==="value")&&i(G,Re,ot,tt,N,k)}}W&1&&y.children!==I.children&&d(G,I.children)}else!Q&&q==null&&w(G,Y,ne,k,N);((de=ne.onVnodeUpdated)||oe)&&xt(()=>{de&&rn(de,k,I,y),oe&&wr(I,y,k,"updated")},F)},T=(y,I,k,F,N,B,Q)=>{for(let G=0;G<I.length;G++){const W=y[G],q=I[G],oe=W.el&&(W.type===rt||!Xs(W,q)||W.shapeFlag&198)?p(W.el):k;D(W,q,oe,null,F,N,B,Q,!0)}},w=(y,I,k,F,N)=>{if(I!==k){if(I!==Me)for(const B in I)!ui(B)&&!(B in k)&&i(y,B,I[B],null,N,F);for(const B in k){if(ui(B))continue;const Q=k[B],G=I[B];Q!==G&&B!=="value"&&i(y,B,G,Q,N,F)}"value"in k&&i(y,"value",I.value,k.value,N)}},b=(y,I,k,F,N,B,Q,G,W)=>{const q=I.el=y?y.el:c(""),oe=I.anchor=y?y.anchor:c("");let{patchFlag:Y,dynamicChildren:ne,slotScopeIds:de}=I;de&&(G=G?G.concat(de):de),y==null?(r(q,k,F),r(oe,k,F),E(I.children||[],k,oe,N,B,Q,G,W)):Y>0&&Y&64&&ne&&y.dynamicChildren?(T(y.dynamicChildren,ne,k,N,B,Q,G),(I.key!=null||N&&I===N.subTree)&&nm(y,I,!0)):ie(y,I,k,oe,N,B,Q,G,W)},v=(y,I,k,F,N,B,Q,G,W)=>{I.slotScopeIds=G,y==null?I.shapeFlag&512?N.ctx.activate(I,k,F,Q,W):se(I,k,F,N,B,Q,W):pe(y,I,W)},se=(y,I,k,F,N,B,Q)=>{const G=y.component=mE(y,F,N);if(qp(y)&&(G.ctx.renderer=ee),_E(G,!1,Q),G.asyncDep){if(N&&N.registerDep(G,re,Q),!y.el){const W=G.subTree=Qe(cr);L(null,W,I,k),y.placeholder=W.el}}else re(G,y,I,k,N,B,Q)},pe=(y,I,k)=>{const F=I.component=y.component;if(oE(y,I,k))if(F.asyncDep&&!F.asyncResolved){K(F,I,k);return}else F.next=I,F.update();else I.el=y.el,F.vnode=I},re=(y,I,k,F,N,B,Q)=>{const G=()=>{if(y.isMounted){let{next:Y,bu:ne,u:de,parent:ue,vnode:Te}=y;{const nt=rm(y);if(nt){Y&&(Y.el=Te.el,K(y,Y,Q)),nt.asyncDep.then(()=>{y.isUnmounted||G()});return}}let Re=Y,ot;Ar(y,!1),Y?(Y.el=Te.el,K(y,Y,Q)):Y=Te,ne&&Do(ne),(ot=Y.props&&Y.props.onVnodeBeforeUpdate)&&rn(ot,ue,Y,Te),Ar(y,!0);const tt=Tc(y),Nt=y.subTree;y.subTree=tt,D(Nt,tt,p(Nt.el),V(Nt),y,N,B),Y.el=tt.el,Re===null&&aE(y,tt.el),de&&xt(de,N),(ot=Y.props&&Y.props.onVnodeUpdated)&&xt(()=>rn(ot,ue,Y,Te),N)}else{let Y;const{el:ne,props:de}=I,{bm:ue,m:Te,parent:Re,root:ot,type:tt}=y,Nt=pi(I);if(Ar(y,!1),ue&&Do(ue),!Nt&&(Y=de&&de.onVnodeBeforeMount)&&rn(Y,Re,I),Ar(y,!0),ne&&Ve){const nt=()=>{y.subTree=Tc(y),Ve(ne,y.subTree,y,N,null)};Nt&&tt.__asyncHydrate?tt.__asyncHydrate(ne,y,nt):nt()}else{ot.ce&&ot.ce._def.shadowRoot!==!1&&ot.ce._injectChildStyle(tt);const nt=y.subTree=Tc(y);D(null,nt,k,F,y,N,B),I.el=nt.el}if(Te&&xt(Te,N),!Nt&&(Y=de&&de.onVnodeMounted)){const nt=I;xt(()=>rn(Y,Re,nt),N)}(I.shapeFlag&256||Re&&pi(Re.vnode)&&Re.vnode.shapeFlag&256)&&y.a&&xt(y.a,N),y.isMounted=!0,I=k=F=null}};y.scope.on();const W=y.effect=new _p(G);y.scope.off();const q=y.update=W.run.bind(W),oe=y.job=W.runIfDirty.bind(W);oe.i=y,oe.id=y.uid,W.scheduler=()=>Wl(oe),Ar(y,!0),q()},K=(y,I,k)=>{I.component=y;const F=y.vnode.props;y.vnode=I,y.next=null,qv(y,I.props,F,k),Gv(y,I.children,k),Nn(),Yh(y),Vn()},ie=(y,I,k,F,N,B,Q,G,W=!1)=>{const q=y&&y.children,oe=y?y.shapeFlag:0,Y=I.children,{patchFlag:ne,shapeFlag:de}=I;if(ne>0){if(ne&128){Ge(q,Y,k,F,N,B,Q,G,W);return}else if(ne&256){Ue(q,Y,k,F,N,B,Q,G,W);return}}de&8?(oe&16&&Ct(q,N,B),Y!==q&&d(k,Y)):oe&16?de&16?Ge(q,Y,k,F,N,B,Q,G,W):Ct(q,N,B,!0):(oe&8&&d(k,""),de&16&&E(Y,k,F,N,B,Q,G,W))},Ue=(y,I,k,F,N,B,Q,G,W)=>{y=y||hs,I=I||hs;const q=y.length,oe=I.length,Y=Math.min(q,oe);let ne;for(ne=0;ne<Y;ne++){const de=I[ne]=W?zn(I[ne]):an(I[ne]);D(y[ne],de,k,null,N,B,Q,G,W)}q>oe?Ct(y,N,B,!0,!1,Y):E(I,k,F,N,B,Q,G,W,Y)},Ge=(y,I,k,F,N,B,Q,G,W)=>{let q=0;const oe=I.length;let Y=y.length-1,ne=oe-1;for(;q<=Y&&q<=ne;){const de=y[q],ue=I[q]=W?zn(I[q]):an(I[q]);if(Xs(de,ue))D(de,ue,k,null,N,B,Q,G,W);else break;q++}for(;q<=Y&&q<=ne;){const de=y[Y],ue=I[ne]=W?zn(I[ne]):an(I[ne]);if(Xs(de,ue))D(de,ue,k,null,N,B,Q,G,W);else break;Y--,ne--}if(q>Y){if(q<=ne){const de=ne+1,ue=de<oe?I[de].el:F;for(;q<=ne;)D(null,I[q]=W?zn(I[q]):an(I[q]),k,ue,N,B,Q,G,W),q++}}else if(q>ne)for(;q<=Y;)qe(y[q],N,B,!0),q++;else{const de=q,ue=q,Te=new Map;for(q=ue;q<=ne;q++){const at=I[q]=W?zn(I[q]):an(I[q]);at.key!=null&&Te.set(at.key,q)}let Re,ot=0;const tt=ne-ue+1;let Nt=!1,nt=0;const $n=new Array(tt);for(q=0;q<tt;q++)$n[q]=0;for(q=de;q<=Y;q++){const at=y[q];if(ot>=tt){qe(at,N,B,!0);continue}let Ut;if(at.key!=null)Ut=Te.get(at.key);else for(Re=ue;Re<=ne;Re++)if($n[Re-ue]===0&&Xs(at,I[Re])){Ut=Re;break}Ut===void 0?qe(at,N,B,!0):($n[Ut-ue]=q+1,Ut>=nt?nt=Ut:Nt=!0,D(at,I[Ut],k,null,N,B,Q,G,W),ot++)}const Fs=Nt?Jv($n):hs;for(Re=Fs.length-1,q=tt-1;q>=0;q--){const at=ue+q,Ut=I[at],io=I[at+1],Kr=at+1<oe?io.el||io.placeholder:F;$n[q]===0?D(null,Ut,k,Kr,N,B,Q,G,W):Nt&&(Re<0||q!==Fs[Re]?Pt(Ut,k,Kr,2):Re--)}}},Pt=(y,I,k,F,N=null)=>{const{el:B,type:Q,transition:G,children:W,shapeFlag:q}=y;if(q&6){Pt(y.component.subTree,I,k,F);return}if(q&128){y.suspense.move(I,k,F);return}if(q&64){Q.move(y,I,k,ee);return}if(Q===rt){r(B,I,k);for(let Y=0;Y<W.length;Y++)Pt(W[Y],I,k,F);r(y.anchor,I,k);return}if(Q===Ic){H(y,I,k);return}if(F!==2&&q&1&&G)if(F===0)G.beforeEnter(B),r(B,I,k),xt(()=>G.enter(B),N);else{const{leave:Y,delayLeave:ne,afterLeave:de}=G,ue=()=>{y.ctx.isUnmounted?s(B):r(B,I,k)},Te=()=>{Y(B,()=>{ue(),de&&de()})};ne?ne(B,ue,Te):Te()}else r(B,I,k)},qe=(y,I,k,F=!1,N=!1)=>{const{type:B,props:Q,ref:G,children:W,dynamicChildren:q,shapeFlag:oe,patchFlag:Y,dirs:ne,cacheIndex:de}=y;if(Y===-2&&(N=!1),G!=null&&(Nn(),fi(G,null,k,y,!0),Vn()),de!=null&&(I.renderCache[de]=void 0),oe&256){I.ctx.deactivate(y);return}const ue=oe&1&&ne,Te=!pi(y);let Re;if(Te&&(Re=Q&&Q.onVnodeBeforeUnmount)&&rn(Re,I,y),oe&6)nn(y.component,k,F);else{if(oe&128){y.suspense.unmount(k,F);return}ue&&wr(y,null,I,"beforeUnmount"),oe&64?y.type.remove(y,I,k,ee,F):q&&!q.hasOnce&&(B!==rt||Y>0&&Y&64)?Ct(q,I,k,!1,!0):(B===rt&&Y&384||!N&&oe&16)&&Ct(W,I,k),F&&He(y)}(Te&&(Re=Q&&Q.onVnodeUnmounted)||ue)&&xt(()=>{Re&&rn(Re,I,y),ue&&wr(y,null,I,"unmounted")},k)},He=y=>{const{type:I,el:k,anchor:F,transition:N}=y;if(I===rt){Bn(k,F);return}if(I===Ic){j(y);return}const B=()=>{s(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(y.shapeFlag&1&&N&&!N.persisted){const{leave:Q,delayLeave:G}=N,W=()=>Q(k,B);G?G(y.el,B,W):W()}else B()},Bn=(y,I)=>{let k;for(;y!==I;)k=m(y),s(y),y=k;s(I)},nn=(y,I,k)=>{const{bum:F,scope:N,job:B,subTree:Q,um:G,m:W,a:q,parent:oe,slots:{__:Y}}=y;rd(W),rd(q),F&&Do(F),oe&&ge(Y)&&Y.forEach(ne=>{oe.renderCache[ne]=void 0}),N.stop(),B&&(B.flags|=8,qe(Q,y,I,k)),G&&xt(G,I),xt(()=>{y.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ct=(y,I,k,F=!1,N=!1,B=0)=>{for(let Q=B;Q<y.length;Q++)qe(y[Q],I,k,F,N)},V=y=>{if(y.shapeFlag&6)return V(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const I=m(y.anchor||y.el),k=I&&I[vv];return k?m(k):I};let X=!1;const J=(y,I,k)=>{y==null?I._vnode&&qe(I._vnode,null,null,!0):D(I._vnode||null,y,I,null,null,null,k),I._vnode=y,X||(X=!0,Yh(),Fp(),X=!1)},ee={p:D,um:qe,m:Pt,r:He,mt:se,mc:E,pc:ie,pbc:T,n:V,o:t};let Ae,Ve;return e&&([Ae,Ve]=e(ee)),{render:J,hydrate:Ae,createApp:$v(J,Ae)}}function Ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Yv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nm(t,e,n=!1){const r=t.children,s=e.children;if(ge(r)&&ge(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&nm(o,c)),c.type===Sa&&(c.el=o.el),c.type===cr&&!c.el&&(c.el=o.el)}}function Jv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function rm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rm(e)}function rd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Xv=Symbol.for("v-scx"),Zv=()=>$t(Xv);function eE(t,e){return Jl(t,null,e)}function Dn(t,e,n){return Jl(t,e,n)}function Jl(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,c=it({},n),l=e&&r||!e&&i!=="post";let h;if(Pi){if(i==="sync"){const _=Zv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Yt,_.resume=Yt,_.pause=Yt,_}}const d=Tt;c.call=(_,C,D)=>pn(_,d,C,D);let p=!1;i==="post"?c.scheduler=_=>{xt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():Wl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=mv(t,e,c);return Pi&&(h?h.push(m):l&&m()),m}function tE(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=Hi(this),c=Jl(s,i.bind(r),n);return o(),c}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const nE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Ur(e)}Modifiers`];function rE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&nE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map(qc)));let c,l=r[c=pc(e)]||r[c=pc(Ht(e))];!l&&i&&(l=r[c=pc(Ur(e))]),l&&pn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,pn(h,t,6,s)}}function im(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!Ee(t)){const l=h=>{const d=im(h,e,!0);d&&(c=!0,it(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(je(t)&&r.set(t,null),null):(ge(i)?i.forEach(l=>o[l]=null):it(o,i),je(t)&&r.set(t,o),o)}function Ra(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Ur(e))||Oe(t,e))}function Tc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:C,inheritAttrs:D}=t,P=Go(t);let L,$;try{if(n.shapeFlag&4){const j=s||r,ce=j;L=an(h.call(ce,j,d,p,_,m,C)),$=c}else{const j=e;L=an(j.length>1?j(p,{attrs:c,slots:o,emit:l}):j(p,null)),$=e.props?c:sE(c)}}catch(j){gi.length=0,Aa(j,t,1),L=Qe(cr)}let H=L;if($&&D!==!1){const j=Object.keys($),{shapeFlag:ce}=H;j.length&&ce&7&&(i&&j.some(Vl)&&($=iE($,i)),H=Is(H,$,!1,!0))}return n.dirs&&(H=Is(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&Kl(H,n.transition),L=H,Go(P),L}const sE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},iE=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function oE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sd(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ra(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?sd(r,o,h):!0:!!o;return!1}function sd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ra(n,i))return!0}return!1}function aE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const om=t=>t.__isSuspense;function cE(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):yv(t)}const rt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Ic=Symbol.for("v-stc"),gi=[];let Lt=null;function he(t=!1){gi.push(Lt=t?null:[])}function lE(){gi.pop(),Lt=gi[gi.length-1]||null}let Si=1;function id(t,e=!1){Si+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function am(t){return t.dynamicChildren=Si>0?Lt||hs:null,lE(),Si>0&&Lt&&Lt.push(t),t}function _e(t,e,n,r,s,i){return am(x(t,e,n,r,s,i,!0))}function Ts(t,e,n,r,s){return am(Qe(t,e,n,r,s,!0))}function Yo(t){return t?t.__v_isVNode===!0:!1}function Xs(t,e){return t.type===e.type&&t.key===e.key}const cm=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||It(t)||Ee(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===rt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cm(e),ref:e&&No(e),scopeId:Bp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(Xl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),Si>0&&!o&&Lt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Lt.push(l),l}const Qe=uE;function uE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ov)&&(t=cr),Yo(t)){const c=Is(t,e,!0);return n&&Xl(c,n),Si>0&&!i&&Lt&&(c.shapeFlag&6?Lt[Lt.indexOf(t)]=c:Lt.push(c)),c.patchFlag=-2,c}if(IE(t)&&(t=t.__vccOpts),e){e=hE(e);let{class:c,style:l}=e;c&&!Ze(c)&&(e.class=Kt(c)),je(l)&&(Hl(l)&&!ge(l)&&(l=it({},l)),e.style=Ll(l))}const o=Ze(t)?1:om(t)?128:Ev(t)?64:je(t)?4:Ee(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function hE(t){return t?Hl(t)||Yp(t)?it({},t):t:null}function Is(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?dE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&cm(h),ref:e&&e.ref?n&&i?ge(i)?i.concat(No(e)):[i,No(e)]:No(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==rt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Kl(d,l.clone(d)),d}function Xc(t=" ",e=0){return Qe(Sa,null,t,e)}function zt(t="",e=!1){return e?(he(),Ts(cr,null,t)):Qe(cr,null,t)}function an(t){return t==null||typeof t=="boolean"?Qe(cr):ge(t)?Qe(rt,null,t.slice()):Yo(t)?zn(t):Qe(Sa,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function Xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Yp(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[Xc(e)]):n=8);t.children=e,t.shapeFlag|=n}function dE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kt([e.class,r.class]));else if(s==="style")e.style=Ll([e.style,r.style]);else if(ya(s)){const i=e[s],o=r[s];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function rn(t,e,n,r=null){pn(t,e,7,[n,r])}const fE=Gp();let pE=0;function mE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fE,i={uid:pE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xp(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rE.bind(null,i),t.ce&&t.ce(i),i}let Tt=null;const gE=()=>Tt||Mt;let Jo,Zc;{const t=Ia(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>Tt=n),Zc=e("__VUE_SSR_SETTERS__",n=>Pi=n)}const Hi=t=>{const e=Tt;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},od=()=>{Tt&&Tt.scope.off(),Jo(null)};function lm(t){return t.vnode.shapeFlag&4}let Pi=!1;function _E(t,e=!1,n=!1){e&&Zc(e);const{props:r,children:s}=t.vnode,i=lm(t);jv(t,r,i,e),Kv(t,s,n||e);const o=i?yE(t,e):void 0;return e&&Zc(!1),o}function yE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vv);const{setup:r}=n;if(r){Nn();const s=t.setupContext=r.length>1?EE(t):null,i=Hi(t),o=ji(r,t,0,[t.props,s]),c=hp(o);if(Vn(),i(),(c||t.sp)&&!pi(t)&&jp(t),c){if(o.then(od,od),e)return o.then(l=>{ad(t,l,e)}).catch(l=>{Aa(l,t,0)});t.asyncDep=o}else ad(t,o,e)}else um(t,e)}function ad(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=Vp(e)),um(t,n)}let cd;function um(t,e,n){const r=t.type;if(!t.render){if(!e&&cd&&!r.render){const s=r.template||zl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=it(it({isCustomElement:i,delimiters:c},o),l);r.render=cd(s,h)}}t.render=r.render||Yt}{const s=Hi(t);Nn();try{xv(t)}finally{Vn(),s()}}}const vE={get(t,e){return vt(t,"get",""),t[e]}};function EE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vE),slots:t.slots,emit:t.emit,expose:e}}function Pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vp(cv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}})):t.proxy}function TE(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function IE(t){return Ee(t)&&"__vccOpts"in t}const ht=(t,e)=>fv(t,e,Pi);function hm(t,e,n){const r=arguments.length;return r===2?je(e)&&!ge(e)?Yo(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yo(n)&&(n=[n]),Qe(t,e,n))}const wE="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const ld=typeof window<"u"&&window.trustedTypes;if(ld)try{el=ld.createPolicy("vue",{createHTML:t=>t})}catch{}const dm=el?t=>el.createHTML(t):t=>t,AE="http://www.w3.org/2000/svg",bE="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,ud=wn&&wn.createElement("template"),RE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?wn.createElementNS(AE,t):e==="mathml"?wn.createElementNS(bE,t):n?wn.createElement(t,{is:n}):wn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>wn.createTextNode(t),createComment:t=>wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ud.innerHTML=dm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=ud.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},SE=Symbol("_vtc");function PE(t,e,n){const r=t[SE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hd=Symbol("_vod"),CE=Symbol("_vsh"),kE=Symbol(""),DE=/(^|;)\s*display\s*:/;function OE(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Vo(r,c,"")}else for(const o in e)n[o]==null&&Vo(r,o,"");for(const o in n)o==="display"&&(i=!0),Vo(r,o,n[o])}else if(s){if(e!==n){const o=r[kE];o&&(n+=";"+o),r.cssText=n,i=DE.test(n)}}else e&&t.removeAttribute("style");hd in t&&(t[hd]=i?r.display:"",t[CE]&&(r.display="none"))}const dd=/\s*!important$/;function Vo(t,e,n){if(ge(n))n.forEach(r=>Vo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=NE(t,e);dd.test(n)?t.setProperty(Ur(r),n.replace(dd,""),"important"):t[r]=n}}const fd=["Webkit","Moz","ms"],wc={};function NE(t,e){const n=wc[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return wc[e]=r;r=Ta(r);for(let s=0;s<fd.length;s++){const i=fd[s]+r;if(i in t)return wc[e]=i}return e}const pd="http://www.w3.org/1999/xlink";function md(t,e,n,r,s,i=$y(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pd,e.slice(6,e.length)):t.setAttributeNS(pd,e,n):n==null||i&&!pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":pr(n)?String(n):n)}function gd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=pp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function rs(t,e,n,r){t.addEventListener(e,n,r)}function VE(t,e,n,r){t.removeEventListener(e,n,r)}const _d=Symbol("_vei");function xE(t,e,n,r,s=null){const i=t[_d]||(t[_d]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=ME(e);if(r){const h=i[e]=UE(r,s);rs(t,c,h,l)}else o&&(VE(t,c,o,l),i[e]=void 0)}}const yd=/(?:Once|Passive|Capture)$/;function ME(t){let e;if(yd.test(t)){e={};let r;for(;r=t.match(yd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ur(t.slice(2)),e]}let Ac=0;const LE=Promise.resolve(),FE=()=>Ac||(LE.then(()=>Ac=0),Ac=Date.now());function UE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(BE(r,n.value),e,5,[r])};return n.value=t,n.attached=FE(),n}function BE(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$E=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?PE(t,r,o):e==="style"?OE(t,n,r):ya(e)?Vl(e)||xE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jE(t,e,r,o))?(gd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&md(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?gd(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),md(t,e,r,o))};function jE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&vd(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vd(e)&&Ze(n)?!1:e in t}const Ed=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ge(e)?n=>Do(e,n):e};function qE(t){t.target.composing=!0}function Td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bc=Symbol("_assign"),Or={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bc]=Ed(s);const i=r||s.props&&s.props.type==="number";rs(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=qc(c)),t[bc](c)}),n&&rs(t,"change",()=>{t.value=t.value.trim()}),e||(rs(t,"compositionstart",qE),rs(t,"compositionend",Td),rs(t,"change",Td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[bc]=Ed(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?qc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},HE=["ctrl","shift","alt","meta"],WE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>HE.some(n=>t[`${n}Key`]&&!e.includes(n))},on=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=WE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},KE=it({patchProp:$E},RE);let Id;function GE(){return Id||(Id=zv(KE))}const zE=(...t)=>{const e=GE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=YE(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,QE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function QE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function YE(t){return Ze(t)?document.querySelector(t):t}/**
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
 */const tT=()=>eT().__FIREBASE_DEFAULTS__,nT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&mm(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return tT()||nT()||rT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gm=t=>{var e,n;return(n=(e=Ca())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_m=t=>{const e=gm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ym=()=>{var t;return(t=Ca())===null||t===void 0?void 0:t.config},vm=t=>{var e;return(e=Ca())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function oT(){var t;const e=(t=Ca())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hT(){return!oT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dT(){try{return typeof indexedDB=="object"}catch{return!1}}function fT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pT="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pT,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mT(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new _n(s,c,r)}}function mT(t,e){return t.replace(gT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gT=/\{\$([^}]+)}/g;function _T(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wd(i)&&wd(o)){if(!Zo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function si(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yT(t,e){const n=new vT(t,e);return n.subscribe.bind(n)}class vT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ET(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rc),s.error===void 0&&(s.error=Rc),s.complete===void 0&&(s.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ET(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class TT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:IT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function IT(t){return t===Rr?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const bT={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},RT=be.INFO,ST={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},PT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ST[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=RT,this._logHandler=PT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const CT=(t,e)=>e.some(n=>t instanceof n);let Ad,bd;function kT(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return bd||(bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,tl=new WeakMap,Im=new WeakMap,Sc=new WeakMap,eu=new WeakMap;function OT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function NT(t){if(tl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tl.set(t,e)}let nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VT(t){nl=t(nl)}function xT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return Im.set(r,e.sort?e.sort():[e]),nr(r)}:DT().includes(t)?function(...e){return t.apply(Pc(this),e),nr(Tm.get(this))}:function(...e){return nr(t.apply(Pc(this),e))}}function MT(t){return typeof t=="function"?xT(t):(t instanceof IDBTransaction&&NT(t),CT(t,kT())?new Proxy(t,nl):t)}function nr(t){if(t instanceof IDBRequest)return OT(t);if(Sc.has(t))return Sc.get(t);const e=MT(t);return e!==t&&(Sc.set(t,e),eu.set(e,t)),e}const Pc=t=>eu.get(t);function LT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const FT=["get","getKey","getAll","getAllKeys","count"],UT=["put","add","delete","clear"],Cc=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=UT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||FT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Cc.set(e,i),i}VT(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
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
 */class BT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($T(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $T(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rl="@firebase/app",Sd="0.10.13";/**
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
 */const xn=new Zl("@firebase/app"),jT="@firebase/app-compat",qT="@firebase/analytics-compat",HT="@firebase/analytics",WT="@firebase/app-check-compat",KT="@firebase/app-check",GT="@firebase/auth",zT="@firebase/auth-compat",QT="@firebase/database",YT="@firebase/data-connect",JT="@firebase/database-compat",XT="@firebase/functions",ZT="@firebase/functions-compat",eI="@firebase/installations",tI="@firebase/installations-compat",nI="@firebase/messaging",rI="@firebase/messaging-compat",sI="@firebase/performance",iI="@firebase/performance-compat",oI="@firebase/remote-config",aI="@firebase/remote-config-compat",cI="@firebase/storage",lI="@firebase/storage-compat",uI="@firebase/firestore",hI="@firebase/vertexai-preview",dI="@firebase/firestore-compat",fI="firebase",pI="10.14.1";/**
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
 */const sl="[DEFAULT]",mI={[rl]:"fire-core",[jT]:"fire-core-compat",[HT]:"fire-analytics",[qT]:"fire-analytics-compat",[KT]:"fire-app-check",[WT]:"fire-app-check-compat",[GT]:"fire-auth",[zT]:"fire-auth-compat",[QT]:"fire-rtdb",[YT]:"fire-data-connect",[JT]:"fire-rtdb-compat",[XT]:"fire-fn",[ZT]:"fire-fn-compat",[eI]:"fire-iid",[tI]:"fire-iid-compat",[nI]:"fire-fcm",[rI]:"fire-fcm-compat",[sI]:"fire-perf",[iI]:"fire-perf-compat",[oI]:"fire-rc",[aI]:"fire-rc-compat",[cI]:"fire-gcs",[lI]:"fire-gcs-compat",[uI]:"fire-fst",[dI]:"fire-fst-compat",[hI]:"fire-vertex","fire-js":"fire-js",[fI]:"fire-js-all"};/**
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
 */const ea=new Map,gI=new Map,il=new Map;function Pd(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nr(t){const e=t.name;if(il.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of ea.values())Pd(n,t);for(const n of gI.values())Pd(n,t);return!0}function ka(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
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
 */const _I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Wi("app","Firebase",_I);/**
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
 */class yI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=pI;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=ym()),!n)throw rr.create("no-options");const i=ea.get(s);if(i){if(Zo(n,i.options)&&Zo(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const o=new AT(s);for(const l of il.values())o.addComponent(l);const c=new yI(n,r,o);return ea.set(s,c),c}function tu(t=sl){const e=ea.get(t);if(!e&&t===sl&&ym())return wm();if(!e)throw rr.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=mI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(c.join(" "));return}Nr(new lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const vI="firebase-heartbeat-database",EI=1,Ci="firebase-heartbeat-store";let kc=null;function Am(){return kc||(kc=LT(vI,EI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function TI(t){try{const n=(await Am()).transaction(Ci),r=await n.objectStore(Ci).get(bm(t));return await n.done,r}catch(e){if(e instanceof _n)xn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Cd(t,e){try{const r=(await Am()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,bm(t)),await r.done}catch(n){if(n instanceof _n)xn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const II=1024,wI=30*24*60*60*1e3;class AI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=wI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kd(),{heartbeatsToSend:r,unsentEntries:s}=bI(this._heartbeatsCache.heartbeats),i=Xo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function kd(){return new Date().toISOString().substring(0,10)}function bI(t,e=II){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dT()?fT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dd(t){return Xo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SI(t){Nr(new lr("platform-logger",e=>new BT(e),"PRIVATE")),Nr(new lr("heartbeat",e=>new AI(e),"PRIVATE")),ln(rl,Sd,t),ln(rl,Sd,"esm2017"),ln("fire-js","")}SI("");function nu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PI=Rm,Sm=new Wi("auth","Firebase",Rm());/**
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
 */const ta=new Zl("@firebase/auth");function CI(t,...e){ta.logLevel<=be.WARN&&ta.warn(`Auth (${Br}): ${t}`,...e)}function xo(t,...e){ta.logLevel<=be.ERROR&&ta.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw ru(t,...e)}function un(t,...e){return ru(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},PI()),{[e]:n});return new Wi("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return Pm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sm.create(t,...e)}function fe(t,e,...n){if(!t)throw ru(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function Mn(t,e){t||Pn(e)}/**
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
 */function ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kI(){return Od()==="http:"||Od()==="https:"}function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kI()||cT()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=iT()||lT()}get(){return DI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */const NI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VI=new Gi(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,s={}){return km(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return aT()||(h.referrerPolicy="no-referrer"),Cm.fetch()(Dm(t,t.config.apiHost,n,c),h)})}async function km(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NI),e);try{const s=new MI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pm(t,d,h);Xt(t,d)}}catch(s){if(s instanceof _n)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function zi(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?su(t.config,s):`${t.config.apiScheme}://${s}`}function xI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),VI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}function Nd(t){return t!==void 0&&t.enterprise!==void 0}class LI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function FI(t,e){return gr(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
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
 */async function UI(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function Om(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BI(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=iu(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(Dc(s.auth_time)),issuedAtTime:_i(Dc(s.iat)),expirationTime:_i(Dc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dc(t){return Number(t)*1e3}function iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=mm(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vd(t){const e=iu(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&$I(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $I({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class al{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ki(t,Om(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nm(i.providerUserInfo):[],c=HI(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new al(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function qI(t){const e=et(t);await na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Nm(t){return t.map(e=>{var{providerId:n}=e,r=nu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WI(t,e){const n=await km(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Dm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Cm.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KI(t,e){return gr(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
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
 */class gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Vd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new gs;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Wn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new al(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BI(this,e)}reload(){return qI(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await ki(this,UI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,L=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:H,emailVerified:j,isAnonymous:ce,providerData:le,stsTokenManager:R}=n;fe(H&&R,e,"internal-error");const E=gs.fromJSON(this.name,R);fe(typeof H=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),fe(typeof j=="boolean",e,"internal-error"),fe(typeof ce=="boolean",e,"internal-error"),Wn(_,e.name),Wn(C,e.name),Wn(D,e.name),Wn(P,e.name),Wn(L,e.name),Wn($,e.name);const A=new Cn({uid:H,auth:e,email:m,emailVerified:j,displayName:p,isAnonymous:ce,photoURL:C,phoneNumber:_,tenantId:D,stsTokenManager:E,createdAt:L,lastLoginAt:$});return le&&Array.isArray(le)&&(A.providerData=le.map(T=>Object.assign({},T))),P&&(A._redirectEventId=P),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new gs;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Nm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new gs;c.updateFromIdToken(r);const l=new Cn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new al(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class _s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _s(kn(Md),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kn(Md);const o=Mo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Cn._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new _s(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new _s(i,e,r))}}/**
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
 */function Ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bm(e))return"Blackberry";if($m(e))return"Webos";if(Mm(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if(Um(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xm(t=wt()){return/firefox\//i.test(t)}function Mm(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(t=wt()){return/crios\//i.test(t)}function Fm(t=wt()){return/iemobile/i.test(t)}function Um(t=wt()){return/android/i.test(t)}function Bm(t=wt()){return/blackberry/i.test(t)}function $m(t=wt()){return/webos/i.test(t)}function ou(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GI(t=wt()){var e;return ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zI(){return uT()&&document.documentMode===10}function jm(t=wt()){return ou(t)||Um(t)||$m(t)||Bm(t)||/windows phone/i.test(t)||Fm(t)}/**
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
 */function qm(t,e=[]){let n;switch(t){case"Browser":n=Ld(wt());break;case"Worker":n=`${Ld(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class QI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YI(t,e={}){return gr(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
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
 */const JI=6;class XI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ZI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fd(this),this.idTokenSubscription=new Fd(this),this.beforeStateQueue=new QI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Om(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(On(this));const n=e?et(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YI(this),n=new XI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await _s.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return et(t)}class Fd{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Da={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ew(t){Da=t}function Hm(t){return Da.loadJS(t)}function tw(){return Da.recaptchaEnterpriseScript}function nw(){return Da.gapiScript}function rw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const sw="recaptcha-enterprise",iw="NO_RECAPTCHA";class ow{constructor(e){this.type=sw,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{FI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new LI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Nd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(iw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Nd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tw();l.length!==0&&(l+=c),Hm(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Ud(t,e,n,r=!1){const s=new ow(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ud(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ud(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function aw(t,e){const n=ka(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zo(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function cw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lw(t,e,n){const r=$r(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Wm(e),{host:o,port:c}=uw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hw()}function Wm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uw(t){const e=Wm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bd(o)}}}function Bd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function dw(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fw(t,e){return zi(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
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
 */async function pw(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function mw(t,e){return zi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
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
 */class Di extends au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Di(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Di(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cl(e,n,"signInWithPassword",fw);case"emailLink":return pw(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cl(e,r,"signUpPassword",dw);case"emailLink":return mw(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ys(t,e){return zi(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
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
 */const gw="http://localhost";class Vr extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=nu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ys(e,n)}buildRequest(){const e={requestUri:gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
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
 */function _w(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yw(t){const e=ri(si(t)).link,n=e?ri(si(e)).deep_link_id:null,r=ri(si(t)).deep_link_id;return(r?ri(si(r)).link:null)||r||n||e||t}class cu{constructor(e){var n,r,s,i,o,c;const l=ri(si(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=_w((s=l.mode)!==null&&s!==void 0?s:null);fe(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=yw(e);try{return new cu(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Di._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cu.parseLink(n);return fe(r,"argument-error"),Di._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qi extends Km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Qi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends Qi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function vw(t,e){return zi(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
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
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=$d(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$d(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ra extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ra(e,n,r,s)}}function Gm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ra._fromErrorAndOperation(t,i,e,r):i})}async function Ew(t,e,n=!1){const r=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",r)}/**
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
 */async function Tw(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(On(r));const s="reauthenticate";try{const i=await ki(t,Gm(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=iu(i.idToken);fe(o,r,"internal-error");const{sub:c}=o;return fe(t.uid===c,r,"user-mismatch"),xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
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
 */async function zm(t,e,n=!1){if(cn(t.app))return Promise.reject(On(t));const r="signIn",s=await Gm(t,r,e),i=await xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Iw(t,e){return zm($r(t),e)}/**
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
 */async function Qm(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ww(t,e,n){if(cn(t.app))return Promise.reject(On(t));const r=$r(t),o=await cl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qm(t),l}),c=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Aw(t,e,n){return cn(t.app)?Promise.reject(On(t)):Iw(et(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(t),r})}function bw(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function Rw(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function Sw(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function Pw(t){return et(t).signOut()}const sa="__sak";/**
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
 */const Cw=1e3,kw=10;class Jm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);zI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jm.type="LOCAL";const Dw=Jm;/**
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
 */function Ow(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Ow(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oa.receivers=[];/**
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
 */class Nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=lu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function Vw(t){hn().location.href=t}/**
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
 */function eg(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lw(){return eg()?self:null}/**
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
 */const tg="firebaseLocalStorageDb",Fw=1,ia="firebaseLocalStorage",ng="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([ia],e?"readwrite":"readonly").objectStore(ia)}function Uw(){const t=indexedDB.deleteDatabase(tg);return new Yi(t).toPromise()}function ll(){const t=indexedDB.open(tg,Fw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ia,{keyPath:ng})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ia)?e(r):(r.close(),await Uw(),e(await ll()))})})}async function jd(t,e,n){const r=Na(t,!0).put({[ng]:e,value:n});return new Yi(r).toPromise()}async function Bw(t,e){const n=Na(t,!1).get(e),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function qd(t,e){const n=Na(t,!0).delete(e);return new Yi(n).toPromise()}const $w=800,jw=3;class rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oa._getInstance(Lw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xw(),!this.activeServiceWorker)return;this.sender=new Nw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ll();return await jd(e,sa,"1"),await qd(e,sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$w)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rg.type="LOCAL";const qw=rg;new Gi(3e4,6e4);/**
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
 */function Hw(t,e){return e?kn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ww(t){return zm(t.auth,new uu(t),t.bypassAuthState)}function Kw(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),Tw(n,new uu(t),t.bypassAuthState)}async function Gw(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),Ew(n,new uu(t),t.bypassAuthState)}/**
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
 */class sg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ww;case"linkViaPopup":case"linkViaRedirect":return Gw;case"reauthViaPopup":case"reauthViaRedirect":return Kw;default:Xt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zw=new Gi(2e3,1e4);class us extends sg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zw.get())};e()}}us.currentPopupAction=null;/**
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
 */const Qw="pendingRedirect",Lo=new Map;class Yw extends sg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await Jw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jw(t,e){const n=eA(e),r=Zw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Xw(t,e){Lo.set(t._key(),e)}function Zw(t){return kn(t._redirectPersistence)}function eA(t){return Mo(Qw,t.config.apiKey,t.name)}async function tA(t,e,n=!1){if(cn(t.app))return Promise.reject(On(t));const r=$r(t),s=Hw(r,e),o=await new Yw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nA=10*60*1e3;class rA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ig(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hd(e))}saveEventToCache(e){this.cachedEventUids.add(Hd(e)),this.lastProcessedEventTime=Date.now()}}function Hd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ig({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ig(t);default:return!1}}/**
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
 */const oA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aA=/^https?/;async function cA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iA(t);for(const n of e)try{if(lA(n))return}catch{}Xt(t,"unauthorized-domain")}function lA(t){const e=ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aA.test(n))return!1;if(oA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const uA=new Gi(3e4,6e4);function Wd(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hA(t){return new Promise((e,n)=>{var r,s,i;function o(){Wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wd(),n(un(t,"network-request-failed"))},timeout:uA.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)o();else{const c=rw("iframefcb");return hn()[c]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},Hm(`${nw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function dA(t){return Fo=Fo||hA(t),Fo}/**
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
 */const fA=new Gi(5e3,15e3),pA="__/auth/iframe",mA="emulator/auth/iframe",gA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_A=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?su(e,mA):`https://${t.config.authDomain}/${pA}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=_A.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function vA(t){const e=await dA(t),n=hn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:yA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),c=hn().setTimeout(()=>{i(o)},fA.get());function l(){hn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const EA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TA=500,IA=600,wA="_blank",AA="http://localhost";class Kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bA(t,e,n,r=TA,s=IA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},EA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=wt().toLowerCase();n&&(c=Lm(h)?wA:n),xm(h)&&(e=e||AA,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(GI(h)&&c!=="_self")return RA(e||"",c),new Kd(null);const p=window.open(e||"",c,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Kd(p)}function RA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SA="__/auth/handler",PA="emulator/auth/handler",CA=encodeURIComponent("fac");async function Gd(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof Km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_T(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(e instanceof Qi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${CA}=${encodeURIComponent(l)}`:"";return`${kA(t)}?${Ki(c).slice(1)}${h}`}function kA({config:t}){return t.emulator?su(t,PA):`https://${t.authDomain}/${SA}`}/**
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
 */const Oc="webStorageSupport";class DA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zm,this._completeRedirectFn=tA,this._overrideRedirectResult=Xw}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Gd(e,n,r,ol(),s);return bA(e,o,lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gd(e,n,r,ol(),s);return Vw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vA(e),r=new rA(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Oc];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jm()||Mm()||ou()}}const OA=DA;var zd="@firebase/auth",Qd="1.7.9";/**
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
 */class NA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(t){Nr(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qm(t)},h=new ZI(r,s,i,l);return cw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new lr("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new NA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(zd,Qd,VA(t)),ln(zd,Qd,"esm2017")}/**
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
 */const MA=5*60,LA=vm("authIdTokenMaxAge")||MA;let Yd=null;const FA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LA)return;const s=n==null?void 0:n.token;Yd!==s&&(Yd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hu(t=tu()){const e=ka(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aw(t,{popupRedirectResolver:OA,persistence:[qw,Dw,Zm]}),r=vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=FA(i.toString());Rw(n,o,()=>o(n.currentUser)),bw(n,c=>o(c))}}const s=gm("auth");return s&&lw(n,`http://${s}`),n}function UA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ew({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",UA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");function BA(){return og().__VUE_DEVTOOLS_GLOBAL_HOOK__}function og(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const $A=typeof Proxy=="function",jA="devtools-plugin:setup",qA="plugin:settings:set";let Xr,ul;function HA(){var t;return Xr!==void 0||(typeof window<"u"&&window.performance?(Xr=!0,ul=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Xr=!0,ul=globalThis.perf_hooks.performance):Xr=!1),Xr}function WA(){return HA()?ul.now():Date.now()}class KA{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return WA()}},n&&n.on(qA,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:c,args:l,resolve:h})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function GA(t,e){const n=t,r=og(),s=BA(),i=$A&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(jA,t,e);else{const o=i?new KA(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ss=typeof document<"u";function ag(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ag(t.default)}const ke=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Zt(s)?s.map(t):t(s)}return n}const yi=()=>{},Zt=Array.isArray,cg=/#/g,QA=/&/g,YA=/\//g,JA=/=/g,XA=/\?/g,lg=/\+/g,ZA=/%5B/g,e0=/%5D/g,ug=/%5E/g,t0=/%60/g,hg=/%7B/g,n0=/%7C/g,dg=/%7D/g,r0=/%20/g;function du(t){return encodeURI(""+t).replace(n0,"|").replace(ZA,"[").replace(e0,"]")}function s0(t){return du(t).replace(hg,"{").replace(dg,"}").replace(ug,"^")}function hl(t){return du(t).replace(lg,"%2B").replace(r0,"+").replace(cg,"%23").replace(QA,"%26").replace(t0,"`").replace(hg,"{").replace(dg,"}").replace(ug,"^")}function i0(t){return hl(t).replace(JA,"%3D")}function o0(t){return du(t).replace(cg,"%23").replace(XA,"%3F")}function a0(t){return t==null?"":o0(t).replace(YA,"%2F")}function Oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const c0=/\/$/,l0=t=>t.replace(c0,"");function Vc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=f0(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Oi(o)}}function u0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function h0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ws(e.matched[r],n.matched[s])&&fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!d0(t[n],e[n]))return!1;return!0}function d0(t,e){return Zt(t)?Xd(t,e):Zt(e)?Xd(e,t):t===e}function Xd(t,e){return Zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function f0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ni;(function(t){t.pop="pop",t.push="push"})(Ni||(Ni={}));var vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vi||(vi={}));function p0(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),l0(t)}const m0=/^[^#]+#/;function g0(t,e){return t.replace(m0,"#")+e}function _0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Va=()=>({left:window.scrollX,top:window.scrollY});function y0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=_0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const dl=new Map;function v0(t,e){dl.set(t,e)}function E0(t){const e=dl.get(t);return dl.delete(t),e}let T0=()=>location.protocol+"//"+location.host;function pg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+r+s}function I0(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=pg(t,location),C=n.value,D=e.value;let P=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}P=D?m.position-D.position:0}else r(_);s.forEach(L=>{L(n.value,C,{delta:P,type:Ni.pop,direction:P?P>0?vi.forward:vi.back:vi.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(ke({},m.state,{scroll:Va()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Va():null}}function w0(t){const{history:e,location:n}=window,r={value:pg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:T0()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,h){const d=ke({},e.state,ef(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=ke({},s.value,e.state,{forward:l,scroll:Va()});i(d.current,d,!0);const p=ke({},ef(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function A0(t){t=p0(t);const e=w0(t),n=I0(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:g0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function b0(t){return typeof t=="string"||t&&typeof t=="object"}function mg(t){return typeof t=="string"||typeof t=="symbol"}const gg=Symbol("");var tf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tf||(tf={}));function As(t,e){return ke(new Error,{type:t,[gg]:!0},e)}function In(t,e){return t instanceof Error&&gg in t&&(e==null||!!(t.type&e))}const nf="[^/]+?",R0={sensitive:!1,strict:!1,start:!0,end:!0},S0=/[.+*?^${}()[\]/\\]/g;function P0(t,e){const n=ke({},R0,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(S0,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:P,regexp:L}=m;i.push({name:C,repeatable:D,optional:P});const $=L||nf;if($!==nf){_+=10;try{new RegExp(`(${$})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${C}" (${$}): `+j.message)}}let H=D?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(H=P&&h.length<2?`(?:/${H})`:"/"+H),P&&(H+="?"),s+=H,_+=20,P&&(_+=-8),D&&(_+=-20),$===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:P}=_,L=C in h?h[C]:"";if(Zt(L)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const $=Zt(L)?L.join("/"):L;if(!$)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=$}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function C0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function _g(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=C0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(rf(r))return 1;if(rf(s))return-1}return s.length-r.length}function rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k0={type:0,value:""},D0=/[a-zA-Z0-9_]/;function O0(t){if(!t)return[[]];if(t==="/")return[[k0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:D0.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function N0(t,e,n){const r=P0(O0(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function V0(t,e){const n=[],r=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,D=of(p);D.aliasOf=_&&_.record;const P=cf(e,p),L=[D];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of j)L.push(of(ke({},D,{components:_?_.record.components:D.components,path:ce,aliasOf:_?_.record:D})))}let $,H;for(const j of L){const{path:ce}=j;if(m&&ce[0]!=="/"){const le=m.record.path,R=le[le.length-1]==="/"?"":"/";j.path=m.record.path+(ce&&R+ce)}if($=N0(j,m,P),_?_.alias.push($):(H=H||$,H!==$&&H.alias.push($),C&&p.name&&!af($)&&o(p.name)),yg($)&&l($),D.children){const le=D.children;for(let R=0;R<le.length;R++)i(le[R],$,_&&_.children[R])}_=_||$}return H?()=>{o(H)}:yi}function o(p){if(mg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=L0(p,n);n.splice(m,0,p),p.record.name&&!af(p)&&r.set(p.record.name,p)}function h(p,m){let _,C={},D,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw As(1,{location:p});P=_.record.name,C=ke(sf(m.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&sf(p.params,_.keys.map(H=>H.name))),D=_.stringify(C)}else if(p.path!=null)D=p.path,_=n.find(H=>H.re.test(D)),_&&(C=_.parse(D),P=_.record.name);else{if(_=m.name?r.get(m.name):n.find(H=>H.re.test(m.path)),!_)throw As(1,{location:p,currentLocation:m});P=_.record.name,C=ke({},m.params,p.params),D=_.stringify(C)}const L=[];let $=_;for(;$;)L.unshift($.record),$=$.parent;return{name:P,path:D,params:C,matched:L,meta:M0(L)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function sf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function of(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:x0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function x0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function M0(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function L0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;_g(t,e[i])<0?r=i:n=i+1}const s=F0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function F0(t){let e=t;for(;e=e.parent;)if(yg(e)&&_g(t,e)===0)return e}function yg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function U0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(lg," "),o=i.indexOf("="),c=Oi(o<0?i:i.slice(0,o)),l=o<0?null:Oi(i.slice(o+1));if(c in e){let h=e[c];Zt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=i0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Zt(r)?r.map(i=>i&&hl(i)):[r&&hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function B0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $0=Symbol(""),uf=Symbol(""),xa=Symbol(""),fu=Symbol(""),fl=Symbol("");function Zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(As(4,{from:n,to:e})):m instanceof Error?l(m):b0(m)?l(As(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ag(l)){const d=(l.__vccOpts||l)[e];d&&i.push(Qn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=zA(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&Qn(_,n,r,o,c,s)()}))}}return i}function hf(t){const e=$t(xa),n=$t(fu),r=ht(()=>{const l=Cr(t.to);return e.resolve(l)}),s=ht(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ws.bind(null,d));if(m>-1)return m;const _=df(l[h-2]);return h>1&&df(d)===_&&p[p.length-1].path!==_?p.findIndex(ws.bind(null,l[h-2])):m}),i=ht(()=>s.value>-1&&K0(n.params,r.value.params)),o=ht(()=>s.value>-1&&s.value===n.matched.length-1&&fg(n.params,r.value.params));function c(l={}){if(W0(l)){const h=e[Cr(t.replace)?"replace":"push"](Cr(t.to)).catch(yi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:ht(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function j0(t){return t.length===1?t[0]:t}const q0=$p({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hf,setup(t,{slots:e}){const n=$i(hf(t)),{options:r}=$t(xa),s=ht(()=>({[ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&j0(e.default(n));return t.custom?i:hm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),H0=q0;function W0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function K0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function df(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t??e??n,G0=$p({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(fl),s=ht(()=>t.route||r.value),i=$t(uf,0),o=ht(()=>{let h=Cr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=ht(()=>s.value.matched[o.value]);Oo(uf,ht(()=>o.value+1)),Oo($0,c),Oo(fl,s);const l=Ie();return Dn(()=>[l.value,c.value,t.name],([h,d,p],[m,_,C])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!ws(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return pf(n.default,{Component:m,route:h});const _=p.props[d],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,P=hm(m,ke({},C,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return pf(n.default,{Component:P,route:h})||P}}});function pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z0=G0;function Q0(t){const e=V0(t.routes,t),n=t.parseQuery||U0,r=t.stringifyQuery||lf,s=t.history,i=Zs(),o=Zs(),c=Zs(),l=lv(Kn);let h=Kn;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Nc.bind(null,V=>""+V),p=Nc.bind(null,a0),m=Nc.bind(null,Oi);function _(V,X){let J,ee;return mg(V)?(J=e.getRecordMatcher(V),ee=X):ee=V,e.addRoute(ee,J)}function C(V){const X=e.getRecordMatcher(V);X&&e.removeRoute(X)}function D(){return e.getRoutes().map(V=>V.record)}function P(V){return!!e.getRecordMatcher(V)}function L(V,X){if(X=ke({},X||l.value),typeof V=="string"){const I=Vc(n,V,X.path),k=e.resolve({path:I.path},X),F=s.createHref(I.fullPath);return ke(I,k,{params:m(k.params),hash:Oi(I.hash),redirectedFrom:void 0,href:F})}let J;if(V.path!=null)J=ke({},V,{path:Vc(n,V.path,X.path).path});else{const I=ke({},V.params);for(const k in I)I[k]==null&&delete I[k];J=ke({},V,{params:p(I)}),X.params=p(X.params)}const ee=e.resolve(J,X),Ae=V.hash||"";ee.params=d(m(ee.params));const Ve=u0(r,ke({},V,{hash:s0(Ae),path:ee.path})),y=s.createHref(Ve);return ke({fullPath:Ve,hash:Ae,query:r===lf?B0(V.query):V.query||{}},ee,{redirectedFrom:void 0,href:y})}function $(V){return typeof V=="string"?Vc(n,V,l.value.path):ke({},V)}function H(V,X){if(h!==V)return As(8,{from:X,to:V})}function j(V){return R(V)}function ce(V){return j(ke($(V),{replace:!0}))}function le(V){const X=V.matched[V.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let ee=typeof J=="function"?J(V):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=$(ee):{path:ee},ee.params={}),ke({query:V.query,hash:V.hash,params:ee.path!=null?{}:V.params},ee)}}function R(V,X){const J=h=L(V),ee=l.value,Ae=V.state,Ve=V.force,y=V.replace===!0,I=le(J);if(I)return R(ke($(I),{state:typeof I=="object"?ke({},Ae,I.state):Ae,force:Ve,replace:y}),X||J);const k=J;k.redirectedFrom=X;let F;return!Ve&&h0(r,ee,J)&&(F=As(16,{to:k,from:ee}),Pt(ee,ee,!0,!1)),(F?Promise.resolve(F):T(k,ee)).catch(N=>In(N)?In(N,2)?N:Ge(N):ie(N,k,ee)).then(N=>{if(N){if(In(N,2))return R(ke({replace:y},$(N.to),{state:typeof N.to=="object"?ke({},Ae,N.to.state):Ae,force:Ve}),X||k)}else N=b(k,ee,!0,y,Ae);return w(k,ee,N),N})}function E(V,X){const J=H(V,X);return J?Promise.reject(J):Promise.resolve()}function A(V){const X=Bn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(V):V()}function T(V,X){let J;const[ee,Ae,Ve]=Y0(V,X);J=xc(ee.reverse(),"beforeRouteLeave",V,X);for(const I of ee)I.leaveGuards.forEach(k=>{J.push(Qn(k,V,X))});const y=E.bind(null,V,X);return J.push(y),Ct(J).then(()=>{J=[];for(const I of i.list())J.push(Qn(I,V,X));return J.push(y),Ct(J)}).then(()=>{J=xc(Ae,"beforeRouteUpdate",V,X);for(const I of Ae)I.updateGuards.forEach(k=>{J.push(Qn(k,V,X))});return J.push(y),Ct(J)}).then(()=>{J=[];for(const I of Ve)if(I.beforeEnter)if(Zt(I.beforeEnter))for(const k of I.beforeEnter)J.push(Qn(k,V,X));else J.push(Qn(I.beforeEnter,V,X));return J.push(y),Ct(J)}).then(()=>(V.matched.forEach(I=>I.enterCallbacks={}),J=xc(Ve,"beforeRouteEnter",V,X,A),J.push(y),Ct(J))).then(()=>{J=[];for(const I of o.list())J.push(Qn(I,V,X));return J.push(y),Ct(J)}).catch(I=>In(I,8)?I:Promise.reject(I))}function w(V,X,J){c.list().forEach(ee=>A(()=>ee(V,X,J)))}function b(V,X,J,ee,Ae){const Ve=H(V,X);if(Ve)return Ve;const y=X===Kn,I=ss?history.state:{};J&&(ee||y?s.replace(V.fullPath,ke({scroll:y&&I&&I.scroll},Ae)):s.push(V.fullPath,Ae)),l.value=V,Pt(V,X,J,y),Ge()}let v;function se(){v||(v=s.listen((V,X,J)=>{if(!nn.listening)return;const ee=L(V),Ae=le(ee);if(Ae){R(ke(Ae,{replace:!0,force:!0}),ee).catch(yi);return}h=ee;const Ve=l.value;ss&&v0(Zd(Ve.fullPath,J.delta),Va()),T(ee,Ve).catch(y=>In(y,12)?y:In(y,2)?(R(ke($(y.to),{force:!0}),ee).then(I=>{In(I,20)&&!J.delta&&J.type===Ni.pop&&s.go(-1,!1)}).catch(yi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ie(y,ee,Ve))).then(y=>{y=y||b(ee,Ve,!1),y&&(J.delta&&!In(y,8)?s.go(-J.delta,!1):J.type===Ni.pop&&In(y,20)&&s.go(-1,!1)),w(ee,Ve,y)}).catch(yi)}))}let pe=Zs(),re=Zs(),K;function ie(V,X,J){Ge(V);const ee=re.list();return ee.length?ee.forEach(Ae=>Ae(V,X,J)):console.error(V),Promise.reject(V)}function Ue(){return K&&l.value!==Kn?Promise.resolve():new Promise((V,X)=>{pe.add([V,X])})}function Ge(V){return K||(K=!V,se(),pe.list().forEach(([X,J])=>V?J(V):X()),pe.reset()),V}function Pt(V,X,J,ee){const{scrollBehavior:Ae}=t;if(!ss||!Ae)return Promise.resolve();const Ve=!J&&E0(Zd(V.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return Mp().then(()=>Ae(V,X,Ve)).then(y=>y&&y0(y)).catch(y=>ie(y,V,X))}const qe=V=>s.go(V);let He;const Bn=new Set,nn={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:D,resolve:L,options:t,push:j,replace:ce,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:Ue,install(V){const X=this;V.component("RouterLink",H0),V.component("RouterView",z0),V.config.globalProperties.$router=X,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Cr(l)}),ss&&!He&&l.value===Kn&&(He=!0,j(s.location).catch(Ae=>{}));const J={};for(const Ae in Kn)Object.defineProperty(J,Ae,{get:()=>l.value[Ae],enumerable:!0});V.provide(xa,X),V.provide(fu,Dp(J)),V.provide(fl,l);const ee=V.unmount;Bn.add(V),V.unmount=function(){Bn.delete(V),Bn.size<1&&(h=Kn,v&&v(),v=null,l.value=Kn,He=!1,K=!1),ee()}}};function Ct(V){return V.reduce((X,J)=>X.then(()=>A(J)),Promise.resolve())}return nn}function Y0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ws(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ws(h,l))||s.push(l))}return[n,r,s]}function pu(){return $t(xa)}function J0(t){return $t(fu)}var mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kr,vg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,E){function A(){}A.prototype=E.prototype,R.D=E.prototype,R.prototype=new A,R.prototype.constructor=R,R.C=function(T,w,b){for(var v=Array(arguments.length-2),se=2;se<arguments.length;se++)v[se-2]=arguments[se];return E.prototype[w].apply(T,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,E,A){A||(A=0);var T=Array(16);if(typeof E=="string")for(var w=0;16>w;++w)T[w]=E.charCodeAt(A++)|E.charCodeAt(A++)<<8|E.charCodeAt(A++)<<16|E.charCodeAt(A++)<<24;else for(w=0;16>w;++w)T[w]=E[A++]|E[A++]<<8|E[A++]<<16|E[A++]<<24;E=R.g[0],A=R.g[1],w=R.g[2];var b=R.g[3],v=E+(b^A&(w^b))+T[0]+3614090360&4294967295;E=A+(v<<7&4294967295|v>>>25),v=b+(w^E&(A^w))+T[1]+3905402710&4294967295,b=E+(v<<12&4294967295|v>>>20),v=w+(A^b&(E^A))+T[2]+606105819&4294967295,w=b+(v<<17&4294967295|v>>>15),v=A+(E^w&(b^E))+T[3]+3250441966&4294967295,A=w+(v<<22&4294967295|v>>>10),v=E+(b^A&(w^b))+T[4]+4118548399&4294967295,E=A+(v<<7&4294967295|v>>>25),v=b+(w^E&(A^w))+T[5]+1200080426&4294967295,b=E+(v<<12&4294967295|v>>>20),v=w+(A^b&(E^A))+T[6]+2821735955&4294967295,w=b+(v<<17&4294967295|v>>>15),v=A+(E^w&(b^E))+T[7]+4249261313&4294967295,A=w+(v<<22&4294967295|v>>>10),v=E+(b^A&(w^b))+T[8]+1770035416&4294967295,E=A+(v<<7&4294967295|v>>>25),v=b+(w^E&(A^w))+T[9]+2336552879&4294967295,b=E+(v<<12&4294967295|v>>>20),v=w+(A^b&(E^A))+T[10]+4294925233&4294967295,w=b+(v<<17&4294967295|v>>>15),v=A+(E^w&(b^E))+T[11]+2304563134&4294967295,A=w+(v<<22&4294967295|v>>>10),v=E+(b^A&(w^b))+T[12]+1804603682&4294967295,E=A+(v<<7&4294967295|v>>>25),v=b+(w^E&(A^w))+T[13]+4254626195&4294967295,b=E+(v<<12&4294967295|v>>>20),v=w+(A^b&(E^A))+T[14]+2792965006&4294967295,w=b+(v<<17&4294967295|v>>>15),v=A+(E^w&(b^E))+T[15]+1236535329&4294967295,A=w+(v<<22&4294967295|v>>>10),v=E+(w^b&(A^w))+T[1]+4129170786&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^w&(E^A))+T[6]+3225465664&4294967295,b=E+(v<<9&4294967295|v>>>23),v=w+(E^A&(b^E))+T[11]+643717713&4294967295,w=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(w^b))+T[0]+3921069994&4294967295,A=w+(v<<20&4294967295|v>>>12),v=E+(w^b&(A^w))+T[5]+3593408605&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^w&(E^A))+T[10]+38016083&4294967295,b=E+(v<<9&4294967295|v>>>23),v=w+(E^A&(b^E))+T[15]+3634488961&4294967295,w=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(w^b))+T[4]+3889429448&4294967295,A=w+(v<<20&4294967295|v>>>12),v=E+(w^b&(A^w))+T[9]+568446438&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^w&(E^A))+T[14]+3275163606&4294967295,b=E+(v<<9&4294967295|v>>>23),v=w+(E^A&(b^E))+T[3]+4107603335&4294967295,w=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(w^b))+T[8]+1163531501&4294967295,A=w+(v<<20&4294967295|v>>>12),v=E+(w^b&(A^w))+T[13]+2850285829&4294967295,E=A+(v<<5&4294967295|v>>>27),v=b+(A^w&(E^A))+T[2]+4243563512&4294967295,b=E+(v<<9&4294967295|v>>>23),v=w+(E^A&(b^E))+T[7]+1735328473&4294967295,w=b+(v<<14&4294967295|v>>>18),v=A+(b^E&(w^b))+T[12]+2368359562&4294967295,A=w+(v<<20&4294967295|v>>>12),v=E+(A^w^b)+T[5]+4294588738&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^w)+T[8]+2272392833&4294967295,b=E+(v<<11&4294967295|v>>>21),v=w+(b^E^A)+T[11]+1839030562&4294967295,w=b+(v<<16&4294967295|v>>>16),v=A+(w^b^E)+T[14]+4259657740&4294967295,A=w+(v<<23&4294967295|v>>>9),v=E+(A^w^b)+T[1]+2763975236&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^w)+T[4]+1272893353&4294967295,b=E+(v<<11&4294967295|v>>>21),v=w+(b^E^A)+T[7]+4139469664&4294967295,w=b+(v<<16&4294967295|v>>>16),v=A+(w^b^E)+T[10]+3200236656&4294967295,A=w+(v<<23&4294967295|v>>>9),v=E+(A^w^b)+T[13]+681279174&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^w)+T[0]+3936430074&4294967295,b=E+(v<<11&4294967295|v>>>21),v=w+(b^E^A)+T[3]+3572445317&4294967295,w=b+(v<<16&4294967295|v>>>16),v=A+(w^b^E)+T[6]+76029189&4294967295,A=w+(v<<23&4294967295|v>>>9),v=E+(A^w^b)+T[9]+3654602809&4294967295,E=A+(v<<4&4294967295|v>>>28),v=b+(E^A^w)+T[12]+3873151461&4294967295,b=E+(v<<11&4294967295|v>>>21),v=w+(b^E^A)+T[15]+530742520&4294967295,w=b+(v<<16&4294967295|v>>>16),v=A+(w^b^E)+T[2]+3299628645&4294967295,A=w+(v<<23&4294967295|v>>>9),v=E+(w^(A|~b))+T[0]+4096336452&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~w))+T[7]+1126891415&4294967295,b=E+(v<<10&4294967295|v>>>22),v=w+(E^(b|~A))+T[14]+2878612391&4294967295,w=b+(v<<15&4294967295|v>>>17),v=A+(b^(w|~E))+T[5]+4237533241&4294967295,A=w+(v<<21&4294967295|v>>>11),v=E+(w^(A|~b))+T[12]+1700485571&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~w))+T[3]+2399980690&4294967295,b=E+(v<<10&4294967295|v>>>22),v=w+(E^(b|~A))+T[10]+4293915773&4294967295,w=b+(v<<15&4294967295|v>>>17),v=A+(b^(w|~E))+T[1]+2240044497&4294967295,A=w+(v<<21&4294967295|v>>>11),v=E+(w^(A|~b))+T[8]+1873313359&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~w))+T[15]+4264355552&4294967295,b=E+(v<<10&4294967295|v>>>22),v=w+(E^(b|~A))+T[6]+2734768916&4294967295,w=b+(v<<15&4294967295|v>>>17),v=A+(b^(w|~E))+T[13]+1309151649&4294967295,A=w+(v<<21&4294967295|v>>>11),v=E+(w^(A|~b))+T[4]+4149444226&4294967295,E=A+(v<<6&4294967295|v>>>26),v=b+(A^(E|~w))+T[11]+3174756917&4294967295,b=E+(v<<10&4294967295|v>>>22),v=w+(E^(b|~A))+T[2]+718787259&4294967295,w=b+(v<<15&4294967295|v>>>17),v=A+(b^(w|~E))+T[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,R.g[2]=R.g[2]+w&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,E){E===void 0&&(E=R.length);for(var A=E-this.blockSize,T=this.B,w=this.h,b=0;b<E;){if(w==0)for(;b<=A;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<E;)if(T[w++]=R.charCodeAt(b++),w==this.blockSize){s(this,T),w=0;break}}else for(;b<E;)if(T[w++]=R[b++],w==this.blockSize){s(this,T),w=0;break}}this.h=w,this.o+=E},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;var A=8*this.o;for(E=R.length-8;E<R.length;++E)R[E]=A&255,A/=256;for(this.u(R),R=Array(16),E=A=0;4>E;++E)for(var T=0;32>T;T+=8)R[A++]=this.g[E]>>>T&255;return R};function i(R,E){var A=c;return Object.prototype.hasOwnProperty.call(A,R)?A[R]:A[R]=E(R)}function o(R,E){this.h=E;for(var A=[],T=!0,w=R.length-1;0<=w;w--){var b=R[w]|0;T&&b==E||(A[w]=b,T=!1)}this.g=A}var c={};function l(R){return-128<=R&&128>R?i(R,function(E){return new o([E|0],0>E?-1:0)}):new o([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return P(h(-R));for(var E=[],A=1,T=0;R>=A;T++)E[T]=R/A|0,A*=4294967296;return new o(E,0)}function d(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return P(d(R.substring(1),E));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=h(Math.pow(E,8)),T=p,w=0;w<R.length;w+=8){var b=Math.min(8,R.length-w),v=parseInt(R.substring(w,w+b),E);8>b?(b=h(Math.pow(E,b)),T=T.j(b).add(h(v))):(T=T.j(A),T=T.add(h(v)))}return T}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-P(this).m();for(var R=0,E=1,A=0;A<this.g.length;A++){var T=this.i(A);R+=(0<=T?T:4294967296+T)*E,E*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(D(this))return"-"+P(this).toString(R);for(var E=h(Math.pow(R,6)),A=this,T="";;){var w=j(A,E).g;A=L(A,w.j(E));var b=((0<A.g.length?A.g[0]:A.h)>>>0).toString(R);if(A=w,C(A))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function D(R){return R.h==-1}t.l=function(R){return R=L(this,R),D(R)?-1:C(R)?0:1};function P(R){for(var E=R.g.length,A=[],T=0;T<E;T++)A[T]=~R.g[T];return new o(A,~R.h).add(m)}t.abs=function(){return D(this)?P(this):this},t.add=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0,w=0;w<=E;w++){var b=T+(this.i(w)&65535)+(R.i(w)&65535),v=(b>>>16)+(this.i(w)>>>16)+(R.i(w)>>>16);T=v>>>16,b&=65535,v&=65535,A[w]=v<<16|b}return new o(A,A[A.length-1]&-2147483648?-1:0)};function L(R,E){return R.add(P(E))}t.j=function(R){if(C(this)||C(R))return p;if(D(this))return D(R)?P(this).j(P(R)):P(P(this).j(R));if(D(R))return P(this.j(P(R)));if(0>this.l(_)&&0>R.l(_))return h(this.m()*R.m());for(var E=this.g.length+R.g.length,A=[],T=0;T<2*E;T++)A[T]=0;for(T=0;T<this.g.length;T++)for(var w=0;w<R.g.length;w++){var b=this.i(T)>>>16,v=this.i(T)&65535,se=R.i(w)>>>16,pe=R.i(w)&65535;A[2*T+2*w]+=v*pe,$(A,2*T+2*w),A[2*T+2*w+1]+=b*pe,$(A,2*T+2*w+1),A[2*T+2*w+1]+=v*se,$(A,2*T+2*w+1),A[2*T+2*w+2]+=b*se,$(A,2*T+2*w+2)}for(T=0;T<E;T++)A[T]=A[2*T+1]<<16|A[2*T];for(T=E;T<2*E;T++)A[T]=0;return new o(A,0)};function $(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function H(R,E){this.g=R,this.h=E}function j(R,E){if(C(E))throw Error("division by zero");if(C(R))return new H(p,p);if(D(R))return E=j(P(R),E),new H(P(E.g),P(E.h));if(D(E))return E=j(R,P(E)),new H(P(E.g),E.h);if(30<R.g.length){if(D(R)||D(E))throw Error("slowDivide_ only works with positive integers.");for(var A=m,T=E;0>=T.l(R);)A=ce(A),T=ce(T);var w=le(A,1),b=le(T,1);for(T=le(T,2),A=le(A,2);!C(T);){var v=b.add(T);0>=v.l(R)&&(w=w.add(A),b=v),T=le(T,1),A=le(A,1)}return E=L(R,w.j(E)),new H(w,E)}for(w=p;0<=R.l(E);){for(A=Math.max(1,Math.floor(R.m()/E.m())),T=Math.ceil(Math.log(A)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(A),v=b.j(E);D(v)||0<v.l(R);)A-=T,b=h(A),v=b.j(E);C(b)&&(b=m),w=w.add(b),R=L(R,v)}return new H(w,R)}t.A=function(R){return j(this,R).h},t.and=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0;T<E;T++)A[T]=this.i(T)&R.i(T);return new o(A,this.h&R.h)},t.or=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0;T<E;T++)A[T]=this.i(T)|R.i(T);return new o(A,this.h|R.h)},t.xor=function(R){for(var E=Math.max(this.g.length,R.g.length),A=[],T=0;T<E;T++)A[T]=this.i(T)^R.i(T);return new o(A,this.h^R.h)};function ce(R){for(var E=R.g.length+1,A=[],T=0;T<E;T++)A[T]=R.i(T)<<1|R.i(T-1)>>>31;return new o(A,R.h)}function le(R,E){var A=E>>5;E%=32;for(var T=R.g.length-A,w=[],b=0;b<T;b++)w[b]=0<E?R.i(b+A)>>>E|R.i(b+A+1)<<32-E:R.i(b+A);return new o(w,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,kr=o}).apply(typeof mf<"u"?mf:typeof self<"u"?self:typeof window<"u"?window:{});var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Eg,ii,Tg,Uo,pl,Ig,wg,Ag;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ro=="object"&&Ro];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,S={next:function(){if(!g&&f<a.length){var O=f++;return{value:u(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),a.apply(u,S)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,S,O){for(var z=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)z[xe-2]=arguments[xe];return u.prototype[S].apply(g,z)}}function D(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function P(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const S=a.length||0,O=g.length||0;a.length=S+O;for(let z=0;z<O;z++)a[S+z]=g[z]}else a.push(g)}}class L{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var ce=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function le(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function R(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function E(a){const u={};for(const f in a)u[f]=a[f];return u}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let O=0;O<A.length;O++)f=A[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function w(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function b(a){c.setTimeout(()=>{throw a},0)}function v(){var a=Ue;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class se{constructor(){this.h=this.g=null}add(u,f){const g=pe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var pe=new L(()=>new re,a=>a.reset());class re{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let K,ie=!1,Ue=new se,Ge=()=>{const a=c.Promise.resolve(void 0);K=()=>{a.then(Pt)}};var Pt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){b(f)}var u=pe;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ie=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Bn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function nn(a,u){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{j(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}C(nn,He);var Ct={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(a,u,f,g,S){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,u,f,g,S){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=y(a,u,g,S);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new J(u,this.src,O,!!g,S),u.fa=f,a.push(u)),u};function Ve(a,u){var f=u.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,u,void 0),O;(O=0<=S)&&Array.prototype.splice.call(g,S,1),O&&(ee(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,g){for(var S=0;S<a.length;++S){var O=a[S];if(!O.da&&O.listener==u&&O.capture==!!f&&O.ha==g)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),k={};function F(a,u,f,g,S){if(g&&g.once)return Q(a,u,f,g,S);if(Array.isArray(u)){for(var O=0;O<u.length;O++)F(a,u[O],f,g,S);return null}return f=de(f),a&&a[V]?a.K(u,f,h(g)?!!g.capture:!!g,S):N(a,u,f,!1,g,S)}function N(a,u,f,g,S,O){if(!u)throw Error("Invalid event type");var z=h(S)?!!S.capture:!!S,xe=Y(a);if(xe||(a[I]=xe=new Ae(a)),f=xe.add(u,f,g,z,O),f.proxy)return f;if(g=B(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Bn||(S=z),S===void 0&&(S=!1),a.addEventListener(u.toString(),g,S);else if(a.attachEvent)a.attachEvent(q(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function B(){function a(f){return u.call(a.src,a.listener,f)}const u=oe;return a}function Q(a,u,f,g,S){if(Array.isArray(u)){for(var O=0;O<u.length;O++)Q(a,u[O],f,g,S);return null}return f=de(f),a&&a[V]?a.L(u,f,h(g)?!!g.capture:!!g,S):N(a,u,f,!0,g,S)}function G(a,u,f,g,S){if(Array.isArray(u))for(var O=0;O<u.length;O++)G(a,u[O],f,g,S);else g=h(g)?!!g.capture:!!g,f=de(f),a&&a[V]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],f=y(O,f,g,S),-1<f&&(ee(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=Y(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,g,S)),(f=-1<a?u[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[V])Ve(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(q(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(Ve(f,a),f.h==0&&(f.src=null,u[I]=null)):ee(a)}}}function q(a){return a in k?k[a]:k[a]="on"+a}function oe(a,u){if(a.da)a=!0;else{u=new nn(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&W(a),a=f.call(g,u)}return a}function Y(a){return a=a[I],a instanceof Ae?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(u){return a.handleEvent(u)}),a[ne])}function ue(){qe.call(this),this.i=new Ae(this),this.M=this,this.F=null}C(ue,qe),ue.prototype[V]=!0,ue.prototype.removeEventListener=function(a,u,f,g){G(this,a,u,f,g)};function Te(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new He(u,a);else if(u instanceof He)u.target=u.target||a;else{var S=u;u=new He(g,a),T(u,S)}if(S=!0,f)for(var O=f.length-1;0<=O;O--){var z=u.g=f[O];S=Re(z,g,!0,u)&&S}if(z=u.g=a,S=Re(z,g,!0,u)&&S,S=Re(z,g,!1,u)&&S,f)for(O=0;O<f.length;O++)z=u.g=f[O],S=Re(z,g,!1,u)&&S}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)ee(f[g]);delete a.g[u],a.h--}}this.F=null},ue.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ue.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Re(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,O=0;O<u.length;++O){var z=u[O];if(z&&!z.da&&z.capture==f){var xe=z.listener,ct=z.ha||z.src;z.fa&&Ve(a.i,z),S=xe.call(ct,g)!==!1&&S}}return S&&!g.defaultPrevented}function ot(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function tt(a){a.g=ot(()=>{a.g=null,a.i&&(a.i=!1,tt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Nt extends qe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:tt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(a){qe.call(this),this.h=a,this.g={}}C(nt,qe);var $n=[];function Fs(a){le(a.g,function(u,f){this.g.hasOwnProperty(f)&&W(u)},a),a.g={}}nt.prototype.N=function(){nt.aa.N.call(this),Fs(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var at=c.JSON.stringify,Ut=c.JSON.parse,io=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Kr(){}Kr.prototype.h=null;function nh(a){return a.h||(a.h=a.i())}function rh(){}var Us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ec(){He.call(this,"d")}C(ec,He);function tc(){He.call(this,"c")}C(tc,He);var vr={},sh=null;function oo(){return sh=sh||new ue}vr.La="serverreachability";function ih(a){He.call(this,vr.La,a)}C(ih,He);function Bs(a){const u=oo();Te(u,new ih(u))}vr.STAT_EVENT="statevent";function oh(a,u){He.call(this,vr.STAT_EVENT,a),this.stat=u}C(oh,He);function At(a){const u=oo();Te(u,new oh(u,a))}vr.Ma="timingevent";function ah(a,u){He.call(this,vr.Ma,a),this.size=u}C(ah,He);function $s(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function js(){this.g=!0}js.prototype.xa=function(){this.g=!1};function cy(a,u,f,g,S,O){a.info(function(){if(a.g)if(O)for(var z="",xe=O.split("&"),ct=0;ct<xe.length;ct++){var Pe=xe[ct].split("=");if(1<Pe.length){var mt=Pe[0];Pe=Pe[1];var gt=mt.split("_");z=2<=gt.length&&gt[1]=="type"?z+(mt+"="+Pe+"&"):z+(mt+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+z})}function ly(a,u,f,g,S,O,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+O+" "+z})}function Gr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+hy(a,f)+(g?" "+g:"")})}function uy(a,u){a.info(function(){return"TIMEOUT: "+u})}js.prototype.info=function(){};function hy(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var O=S[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<S.length;z++)S[z]=""}}}}return at(f)}catch{return u}}var ao={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nc;function co(){}C(co,Kr),co.prototype.g=function(){return new XMLHttpRequest},co.prototype.i=function(){return{}},nc=new co;function jn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lh}function lh(){this.i=null,this.g="",this.h=!1}var uh={},rc={};function sc(a,u,f){a.L=1,a.v=fo(vn(u)),a.m=f,a.P=!0,hh(a,null)}function hh(a,u){a.F=Date.now(),lo(a),a.A=vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),bh(f.i,"t",g),a.C=0,f=a.j.J,a.h=new lh,a.g=qh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Nt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var S="readystatechange";Array.isArray(S)||(S&&($n[0]=S.toString()),S=$n);for(var O=0;O<S.length;O++){var z=F(f,S[O],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Bs(),cy(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const u=this.M;u&&En(a)==3?u.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=En(this.g);var u=this.g.Ba();const Yr=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Oh(this.g)))){this.J||gt!=4||u==7||(u==8||0>=Yr?Bs(3):Bs(2)),ic(this);var f=this.g.Z();this.X=f;t:if(dh(this)){var g=Oh(this.g);a="";var S=g.length,O=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),qs(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(O&&u==S-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,ly(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ct=this.g;if((xe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(xe)){var Pe=xe;break t}}Pe=null}if(f=Pe)Gr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oc(this,f);else{this.o=!1,this.s=3,At(12),Er(this),qs(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<z.length;)if(Wt=dy(this,z),Wt==rc){gt==4&&(this.s=4,At(14),f=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==uh){this.s=4,At(15),Gr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Gr(this.i,this.l,Wt,null),oc(this,Wt);if(dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||z.length!=0||this.h.h||(this.s=1,At(16),f=!1),this.o=this.o&&f,!f)Gr(this.i,this.l,z,"[Invalid Chunked Response]"),Er(this),qs(this);else if(0<z.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),dc(mt),mt.M=!0,At(11))}}else Gr(this.i,this.l,z,null),oc(this,z);gt==4&&Er(this),this.o&&!this.J&&(gt==4?Uh(this.j,this):(this.o=!1,lo(this)))}else Cy(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Er(this),qs(this)}}}catch{}finally{}};function dh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dy(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?rc:(f=Number(u.substring(f,g)),isNaN(f)?uh:(g+=1,g+f>u.length?rc:(u=u.slice(g,g+f),a.C=g+f,u)))}jn.prototype.cancel=function(){this.J=!0,Er(this)};function lo(a){a.S=Date.now()+a.I,fh(a,a.I)}function fh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$s(m(a.ba,a),u)}function ic(a){a.B&&(c.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uy(this.i,this.A),this.L!=2&&(Bs(),At(17)),Er(this),this.s=2,qs(this)):fh(this,this.S-a)};function qs(a){a.j.G==0||a.J||Uh(a.j,a)}function Er(a){ic(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Fs(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function oc(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||ac(f.h,a))){if(!a.K&&ac(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)vo(f),_o(f);else break e;hc(f),At(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=$s(m(f.Za,f),6e3));if(1>=gh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ir(f,11)}else if((a.K||f.g==a)&&vo(f),!$(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let Pe=S[u];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const mt=Pe[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const gt=Pe[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const Yr=Pe[5];Yr!=null&&typeof Yr=="number"&&0<Yr&&(g=1.5*Yr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Wt=a.g;if(Wt){const To=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(To){var O=g.h;O.g||To.indexOf("spdy")==-1&&To.indexOf("quic")==-1&&To.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(cc(O,O.h),O.h=null))}if(g.D){const fc=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(g.ya=fc,Be(g.I,g.D,fc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=jh(g,g.J?g.ia:null,g.W),z.K){_h(g.h,z);var xe=z,ct=g.L;ct&&(xe.I=ct),xe.B&&(ic(xe),lo(xe)),g.g=z}else Lh(g);0<f.i.length&&yo(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Ir(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Ir(f,7):uc(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Bs(4)}catch{}}var fy=class{constructor(a,u){this.g=a,this.map=u}};function ph(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gh(a){return a.h?1:a.g?a.g.size:0}function ac(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function cc(a,u){a.g?a.g.add(u):a.h=u}function _h(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ph.prototype.cancel=function(){if(this.i=yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function yh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return D(a.i)}function py(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function my(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function vh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=my(a),g=py(a),S=g.length,O=0;O<S;O++)u.call(void 0,g[O],f&&f[O],a)}var Eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gy(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),S=null;if(0<=g){var O=a[f].substring(0,g);S=a[f].substring(g+1)}else O=a[f];u(O,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,uo(this,a.j),this.o=a.o,this.g=a.g,ho(this,a.s),this.l=a.l;var u=a.i,f=new Ks;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Th(this,f),this.m=a.m}else a&&(u=String(a).match(Eh))?(this.h=!1,uo(this,u[1]||"",!0),this.o=Hs(u[2]||""),this.g=Hs(u[3]||"",!0),ho(this,u[4]),this.l=Hs(u[5]||"",!0),Th(this,u[6]||"",!0),this.m=Hs(u[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}Tr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ws(u,Ih,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ws(u,Ih,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ws(f,f.charAt(0)=="/"?vy:yy,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ws(f,Ty)),a.join("")};function vn(a){return new Tr(a)}function uo(a,u,f){a.j=f?Hs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ho(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Th(a,u,f){u instanceof Ks?(a.i=u,Iy(a.i,a.h)):(f||(u=Ws(u,Ey)),a.i=new Ks(u,a.h))}function Be(a,u,f){a.i.set(u,f)}function fo(a){return Be(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Hs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,_y),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _y(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ih=/[#\/\?@]/g,yy=/[#\?:]/g,vy=/[#\?]/g,Ey=/[#\?@]/g,Ty=/#/g;function Ks(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&gy(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ks.prototype,t.add=function(a,u){qn(this),this.i=null,a=zr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function wh(a,u){qn(a),u=zr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ah(a,u){return qn(a),u=zr(a,u),a.g.has(u)}t.forEach=function(a,u){qn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(u,S,g,this)},this)},this)},t.na=function(){qn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=a[g];for(let O=0;O<S.length;O++)f.push(u[g])}return f},t.V=function(a){qn(this);let u=[];if(typeof a=="string")Ah(this,a)&&(u=u.concat(this.g.get(zr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return qn(this),this.i=null,a=zr(this,a),Ah(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function bh(a,u,f){wh(a,u),0<f.length&&(a.i=null,a.g.set(zr(a,u),D(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const O=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var S=O;z[g]!==""&&(S+="="+encodeURIComponent(String(z[g]))),a.push(S)}}return this.i=a.join("&")};function zr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Iy(a,u){u&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(wh(this,g),bh(this,S,f))},a)),a.j=u}function wy(a,u){const f=new js;if(c.Image){const g=new Image;g.onload=_(Hn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Hn,f,"TestLoadImage: error",!1,u,g),g.onabort=_(Hn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Hn,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Ay(a,u){const f=new js,g=new AbortController,S=setTimeout(()=>{g.abort(),Hn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(S),O.ok?Hn(f,"TestPingServer: ok",!0,u):Hn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Hn(f,"TestPingServer: error",!1,u)})}function Hn(a,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function by(){this.g=new io}function Ry(a,u,f){const g=f||"";try{vh(a,function(S,O){let z=S;h(S)&&(z=at(S)),u.push(g+O+"="+encodeURIComponent(z))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function po(a){this.l=a.Ub||null,this.j=a.eb||!1}C(po,Kr),po.prototype.g=function(){return new mo(this.l,this.j)},po.prototype.i=function(a){return function(){return a}}({});function mo(a,u){ue.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(mo,ue),t=mo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Gs(this):zs(this),this.readyState==3&&Rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sh(a){let u="";return le(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function lc(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Sh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Be(a,u,f))}function Ke(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ke,ue);var Sy=/^https?$/i,Py=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nc.g(),this.v=this.o?nh(this.o):nh(nc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Ph(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),S=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Py,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of f)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Dh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Ph(this,O)}};function Ph(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ch(a),go(a)}function Ch(a){a.A||(a.A=!0,Te(a,"complete"),Te(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Te(this,"complete"),Te(this,"abort"),go(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),go(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?kh(this):this.bb())},t.bb=function(){kh(this)};function kh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||En(a)!=4||a.Z()!=2)){if(a.u&&En(a)==4)ot(a.Ea,0,a);else if(Te(a,"readystatechange"),En(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var S=String(a.D).match(Eh)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!Sy.test(S?S.toLowerCase():"")}f=g}if(f)Te(a,"complete"),Te(a,"success");else{a.m=6;try{var O=2<En(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ch(a)}}finally{go(a)}}}}function go(a,u){if(a.g){Dh(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Te(a,"ready");try{f.onreadystatechange=g}catch{}}}function Dh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function En(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ut(u)}};function Oh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cy(a){const u={};a=(a.g&&2<=En(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if($(a[g]))continue;var f=w(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=u[S]||[];u[S]=O,O.push(f)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Nh(a){this.Aa=0,this.i=[],this.j=new js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qs("baseRetryDelayMs",5e3,a),this.cb=Qs("retryDelaySeedMs",1e4,a),this.Wa=Qs("forwardChannelMaxRetries",2,a),this.wa=Qs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ph(a&&a.concurrentRequestLimit),this.Da=new by,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){At(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=jh(this,null,this.W),yo(this)};function uc(a){if(Vh(a),a.G==3){var u=a.U++,f=vn(a.I);if(Be(f,"SID",a.K),Be(f,"RID",u),Be(f,"TYPE","terminate"),Ys(a,f),u=new jn(a,a.j,u),u.L=2,u.v=fo(vn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=qh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),lo(u)}$h(a)}function _o(a){a.g&&(dc(a),a.g.cancel(),a.g=null)}function Vh(a){_o(a),a.u&&(c.clearTimeout(a.u),a.u=null),vo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function yo(a){if(!mh(a.h)&&!a.s){a.s=!0;var u=a.Ga;K||Ge(),ie||(K(),ie=!0),Ue.add(u,a),a.B=0}}function ky(a,u){return gh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$s(m(a.Ga,a,u),Bh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const S=new jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=E(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(S.H=O,O=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Mh(this,S,u),f=vn(this.I),Be(f,"RID",a),Be(f,"CVER",22),this.D&&Be(f,"X-HTTP-Session-Id",this.D),Ys(this,f),O&&(this.O?u="headers="+encodeURIComponent(String(Sh(O)))+"&"+u:this.m&&lc(f,this.m,O)),cc(this.h,S),this.Ua&&Be(f,"TYPE","init"),this.P?(Be(f,"$req",u),Be(f,"SID","null"),S.T=!0,sc(S,f,null)):sc(S,f,u),this.G=2}}else this.G==3&&(a?xh(this,a):this.i.length==0||mh(this.h)||xh(this))};function xh(a,u){var f;u?f=u.l:f=a.U++;const g=vn(a.I);Be(g,"SID",a.K),Be(g,"RID",f),Be(g,"AID",a.T),Ys(a,g),a.m&&a.o&&lc(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Mh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),cc(a.h,f),sc(f,g,u)}function Ys(a,u){a.H&&le(a.H,function(f,g){Be(u,g,f)}),a.l&&vh({},function(f,g){Be(u,g,f)})}function Mh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var S=a.i;let O=-1;for(;;){const z=["count="+f];O==-1?0<f?(O=S[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let xe=!0;for(let ct=0;ct<f;ct++){let Pe=S[ct].g;const mt=S[ct].map;if(Pe-=O,0>Pe)O=Math.max(0,S[ct].g-100),xe=!1;else try{Ry(mt,z,"req"+Pe+"_")}catch{g&&g(mt)}}if(xe){g=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function Lh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;K||Ge(),ie||(K(),ie=!0),Ue.add(u,a),a.v=0}}function hc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$s(m(a.Fa,a),Bh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Fh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$s(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),_o(this),Fh(this))};function dc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Fh(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=vn(a.qa);Be(u,"RID","rpc"),Be(u,"SID",a.K),Be(u,"AID",a.T),Be(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Be(u,"TO",a.ja),Be(u,"TYPE","xmlhttp"),Ys(a,u),a.m&&a.o&&lc(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=fo(vn(u)),f.m=null,f.P=!0,hh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,_o(this),hc(this),At(19))};function vo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Uh(a,u){var f=null;if(a.g==u){vo(a),dc(a),a.g=null;var g=2}else if(ac(a.h,u))f=u.D,_h(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=a.B;g=oo(),Te(g,new ah(g,f)),yo(a)}else Lh(a);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&ky(a,u)||g==2&&hc(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),S){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function Bh(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Ir(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const S=!g;g=new Tr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||uo(g,"https"),fo(g),S?wy(g.toString(),f):Ay(g.toString(),f)}else At(2);a.G=0,a.l&&a.l.sa(u),$h(a),Vh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function $h(a){if(a.G=0,a.ka=[],a.l){const u=yh(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ka,u),P(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function jh(a,u,f){var g=f instanceof Tr?vn(f):new Tr(f);if(g.g!="")u&&(g.g=u+"."+g.g),ho(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var O=new Tr(null);g&&uo(O,g),u&&(O.g=u),S&&ho(O,S),f&&(O.l=f),g=O}return f=a.D,u=a.ya,f&&u&&Be(g,f,u),Be(g,"VER",a.la),Ys(a,g),g}function qh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ke(new po({eb:f})):new Ke(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hh(){}t=Hh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Eo(){}Eo.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){ue.call(this),this.g=new Nh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Qr(this)}C(Vt,ue),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){uc(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=at(a),a=f);u.i.push(new fy(u.Ya++,a)),u.G==3&&yo(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,Vt.aa.N.call(this)};function Wh(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Wh,ec);function Kh(){tc.call(this),this.status=1}C(Kh,tc);function Qr(a){this.g=a}C(Qr,Hh),Qr.prototype.ua=function(){Te(this.g,"a")},Qr.prototype.ta=function(a){Te(this.g,new Wh(a))},Qr.prototype.sa=function(a){Te(this.g,new Kh)},Qr.prototype.ra=function(){Te(this.g,"b")},Eo.prototype.createWebChannel=Eo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,Ag=function(){return new Eo},wg=function(){return oo()},Ig=vr,pl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ao.NO_ERROR=0,ao.TIMEOUT=8,ao.HTTP_ERROR=6,Uo=ao,ch.COMPLETE="complete",Tg=ch,rh.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",ue.prototype.listen=ue.prototype.K,ii=rh,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Eg=Ke}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});const gf="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */const Mr=new Zl("@firebase/firestore");function ei(){return Mr.logLevel}function te(t,...e){if(Mr.logLevel<=be.DEBUG){const n=e.map(mu);Mr.debug(`Firestore (${Ns}): ${t}`,...n)}}function Ln(t,...e){if(Mr.logLevel<=be.ERROR){const n=e.map(mu);Mr.error(`Firestore (${Ns}): ${t}`,...n)}}function bs(t,...e){if(Mr.logLevel<=be.WARN){const n=e.map(mu);Mr.warn(`Firestore (${Ns}): ${t}`,...n)}}function mu(t){if(typeof t=="string")return t;try{/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Ln(e),new Error(e)}function Ne(t,e){t||me()}function ve(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Z0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eb{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new bg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new yt(e)}}class tb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new tb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new rb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class Rg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ib(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Ye(0,0))}static max(){return new ye(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Vi{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const ob=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Vi{construct(e,n,r){return new dt(e,n,r)}static isValidIdentifier(e){return ob.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(n)}static emptyPath(){return new dt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae($e.fromString(e))}static fromName(e){return new ae($e.fromString(e).popFirst(5))}static empty(){return new ae($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new $e(e.slice()))}}function ab(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new ur(s,ae.empty(),e)}function cb(t){return new ur(t.readTime,t.key,-1)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(ye.min(),ae.empty(),-1)}static max(){return new ur(ye.max(),ae.empty(),-1)}}function lb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
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
 */async function Ji(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==ub)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function db(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gu.oe=-1;function Ma(t){return t==null}function oa(t){return t===0&&1/t==-1/0}function fb(t){return typeof t=="number"&&Number.isInteger(t)&&!oa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new So(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new So(this.root,e,this.comparator,!1)}getReverseIterator(){return new So(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new So(this.root,e,this.comparator,!0)}}class So{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new yf(this.data.getIterator())}getIteratorFrom(e){return new yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ft(dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Pg("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=pb.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Lr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yu(t){const e=t.mapValue.fields.__previous_value__;return _u(e)?yu(e):e}function xi(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */const Po={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:_b(t)?9007199254740991:gb(t)?10:11:me()}function mn(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xi(t).isEqual(xi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=hr(s.timestampValue),c=hr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Lr(s.bytesValue).isEqual(Lr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),c=ze(i.doubleValue);return o===c?oa(o)===oa(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Rs(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_f(o)!==_f(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!mn(o[l],c[l])))return!1;return!0}(t,e);default:return me()}}function Li(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function Ss(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return vf(t.timestampValue,e.timestampValue);case 4:return vf(xi(t),xi(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Lr(i),l=Lr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=Ce(c[h],l[h]);if(d!==0)return d}return Ce(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ce(ze(i.latitude),ze(o.latitude));return c!==0?c:Ce(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ef(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,C=(l=m.value)===null||l===void 0?void 0:l.arrayValue,D=Ce(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:Ef(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Po.mapValue&&o===Po.mapValue)return 0;if(i===Po.mapValue)return 1;if(o===Po.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Ce(l[p],d[p]);if(m!==0)return m;const _=Ss(c[l[p]],h[d[p]]);if(_!==0)return _}return Ce(l.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=hr(t),r=hr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function Ef(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ss(n[s],r[s]);if(i)return i}return Ce(n.length,r.length)}function Ps(t){return ml(t)}function ml(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Lr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ml(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ml(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function Tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gl(t){return!!t&&"integerValue"in t}function vu(t){return!!t&&"arrayValue"in t}function If(t){return!!t&&"nullValue"in t}function wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function gb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _b(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ei(n)}setAll(e){let n=dt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ei(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Ei(this.value))}}function Cg(t){const e=[];return jr(t.fields,(n,r)=>{const s=new dt([n]);if(Bo(r)){const i=Cg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,ye.min(),ye.min(),ye.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ye.min(),ye.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ye.min(),ye.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class aa{constructor(e,n){this.position=e,this.inclusive=n}}function Af(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(o.referenceValue),n.key):r=Ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Fi{constructor(e,n="asc"){this.field=e,this.dir=n}}function yb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kg{}class Xe extends kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Eb(e,n,r):n==="array-contains"?new wb(e,r):n==="in"?new Ab(e,r):n==="not-in"?new bb(e,r):n==="array-contains-any"?new Rb(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Tb(e,r):new Ib(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ss(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new en(e,n)}matches(e){return Dg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Dg(t){return t.op==="and"}function Og(t){return vb(t)&&Dg(t)}function vb(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function _l(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(Og(t))return t.filters.map(e=>_l(e)).join(",");{const e=t.filters.map(n=>_l(n)).join(",");return`${t.op}(${e})`}}function Ng(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof en?function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Ng(o,s.filters[c]),!0):!1}(t,e):void me()}function Vg(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(Vg).join(" ,")+"}"}(t):"Filter"}class Eb extends Xe{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class Tb extends Xe{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ib extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class wb extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vu(n)&&Li(n.arrayValue,this.value)}}class Ab extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Li(this.value.arrayValue,n)}}class bb extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Li(this.value.arrayValue,n)}}class Rb extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Li(this.value.arrayValue,r))}}/**
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
 */class Sb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Rf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Sb(t,e,n,r,s,i,o)}function Eu(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_l(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.ue=n}return e.ue}function Tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ng(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bf(t.startAt,e.startAt)&&bf(t.endAt,e.endAt)}function yl(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pb(t,e,n,r,s,i,o,c){return new Vs(t,e,n,r,s,i,o,c)}function Iu(t){return new Vs(t)}function Sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mg(t){return t.collectionGroup!==null}function Ti(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ft(dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Fi(i,r))}),n.has(dt.keyField().canonicalString())||e.ce.push(new Fi(dt.keyField(),r))}return e.ce}function dn(t){const e=ve(t);return e.le||(e.le=Cb(e,Ti(t))),e.le}function Cb(t,e){if(t.limitType==="F")return Rf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Fi(s.field,i)});const n=t.endAt?new aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new aa(t.startAt.position,t.startAt.inclusive):null;return Rf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vl(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function El(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function La(t,e){return Tu(dn(t),dn(e))&&t.limitType===e.limitType}function Lg(t){return`${Eu(dn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vg(s)).join(", ")}]`),Ma(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ps(s)).join(",")),`Target(${r})`}(dn(t))}; limitType=${t.limitType})`}function Fa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Af(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Ti(r),s)||r.endAt&&!function(o,c,l){const h=Af(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Ti(r),s))}(t,e)}function kb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Fg(t){return(e,n)=>{let r=!1;for(const s of Ti(t)){const i=Db(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Db(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Ss(l,h):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */const Ob=new We(ae.comparator);function Fn(){return Ob}const Ug=new We(ae.comparator);function oi(...t){let e=Ug;for(const n of t)e=e.insert(n.key,n);return e}function Bg(t){let e=Ug;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return Ii()}function $g(){return Ii()}function Ii(){return new xs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nb=new We(ae.comparator),Vb=new ft(ae.comparator);function we(...t){let e=Vb;for(const n of t)e=e.add(n);return e}const xb=new ft(Ce);function Mb(){return xb}/**
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
 */function wu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oa(e)?"-0":e}}function jg(t){return{integerValue:""+t}}function Lb(t,e){return fb(e)?jg(e):wu(t,e)}/**
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
 */class Ua{constructor(){this._=void 0}}function Fb(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_u(i)&&(i=yu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ui?Hg(t,e):t instanceof Bi?Wg(t,e):function(s,i){const o=qg(s,i),c=Pf(o)+Pf(s.Pe);return gl(o)&&gl(s.Pe)?jg(c):wu(s.serializer,c)}(t,e)}function Ub(t,e,n){return t instanceof Ui?Hg(t,e):t instanceof Bi?Wg(t,e):n}function qg(t,e){return t instanceof la?function(r){return gl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends Ua{}class Ui extends Ua{constructor(e){super(),this.elements=e}}function Hg(t,e){const n=Kg(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bi extends Ua{constructor(e){super(),this.elements=e}}function Wg(t,e){let n=Kg(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class la extends Ua{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Pf(t){return ze(t.integerValue||t.doubleValue)}function Kg(t){return vu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Bb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ui&&s instanceof Ui||r instanceof Bi&&s instanceof Bi?Rs(r.elements,s.elements,mn):r instanceof la&&s instanceof la?mn(r.Pe,s.Pe):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class $b{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $o(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ba{}function Gg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Au(t.key,jt.none()):new Zi(t.key,t.data,jt.none());{const n=t.data,r=Dt.empty();let s=new ft(dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new _r(t.key,r,new Ft(s.toArray()),jt.none())}}function jb(t,e,n){t instanceof Zi?function(s,i,o){const c=s.value.clone(),l=kf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof _r?function(s,i,o){if(!$o(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=kf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(zg(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wi(t,e,n,r){return t instanceof Zi?function(i,o,c,l){if(!$o(i.precondition,o))return c;const h=i.value.clone(),d=Df(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof _r?function(i,o,c,l){if(!$o(i.precondition,o))return c;const h=Df(i.fieldTransforms,l,o),d=o.data;return d.setAll(zg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return $o(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function qb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=qg(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function Cf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Rs(r,s,(i,o)=>Bb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zi extends Ba{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _r extends Ba{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kf(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Ub(o,c,n[s]))}return r}function Df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Fb(i,o,e))}return r}class Au extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hb extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$g();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Gg(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Rs(this.mutations,e.mutations,(n,r)=>Cf(n,r))&&Rs(this.baseMutations,e.baseMutations,(n,r)=>Cf(n,r))}}class bu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return Nb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new bu(e,n,r,s)}}/**
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
 */var Je,Se;function zb(t){switch(t){default:return me();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Qg(t){if(t===void 0)return Ln("GRPC error has no .code"),M.UNKNOWN;switch(t){case Je.OK:return M.OK;case Je.CANCELLED:return M.CANCELLED;case Je.UNKNOWN:return M.UNKNOWN;case Je.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Je.INTERNAL:return M.INTERNAL;case Je.UNAVAILABLE:return M.UNAVAILABLE;case Je.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Je.NOT_FOUND:return M.NOT_FOUND;case Je.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Je.ABORTED:return M.ABORTED;case Je.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Je.DATA_LOSS:return M.DATA_LOSS;default:return me()}}(Se=Je||(Je={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(ye.min(),s,new We(Ce),Fn(),we())}}class eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new eo(r,n,we(),we(),we())}}/**
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
 */class jo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Yg{constructor(e,n){this.targetId=e,this.me=n}}class Jg{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vf{constructor(){this.fe=0,this.ge=Mf(),this.pe=pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new eo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Jb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=xf(),this.Qe=new We(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(yl(i))if(r===0){const o=new ae(i.path);this.Ue(n,o,Et.newNoDocument(o,ye.min()))}else Ne(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Lr(r).toUint8Array()}catch(l){if(l instanceof Pg)return bs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ru(o,s,i)}catch(l){return bs(l instanceof ai?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&yl(c.target)){const l=new ae(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Et.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new $a(e,n,this.Qe,this.ke,r);return this.ke=Fn(),this.qe=xf(),this.Qe=new We(Ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Vf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ft(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Vf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xf(){return new We(ae.comparator)}function Mf(){return new We(ae.comparator)}const Xb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),eR=(()=>({and:"AND",or:"OR"}))();class tR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tl(t,e){return t.useProto3Json||Ma(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nR(t,e){return ua(t,e.toTimestamp())}function fn(t){return Ne(!!t),ye.fromTimestamp(function(n){const r=hr(n);return new Ye(r.seconds,r.nanos)}(t))}function Su(t,e){return Il(t,e).canonicalString()}function Il(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Zg(t){const e=$e.fromString(t);return Ne(s_(e)),e}function wl(t,e){return Su(t.databaseId,e.path)}function Mc(t,e){const n=Zg(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(t_(n))}function e_(t,e){return Su(t.databaseId,e)}function rR(t){const e=Zg(t);return e.length===4?$e.emptyPath():t_(e)}function Al(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function t_(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lf(t,e,n){return{name:wl(t,e),fields:n.value.mapValue.fields}}function sR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ne(d===void 0||typeof d=="string"),pt.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),pt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?M.UNKNOWN:Qg(h.code);return new Z(d,h.message||"")}(o);n=new Jg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mc(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):ye.min(),c=new Dt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new jo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mc(t,r.document),i=r.readTime?fn(r.readTime):ye.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new jo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mc(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Gb(s,i),c=r.targetId;n=new Yg(c,o)}}return n}function iR(t,e){let n;if(e instanceof Zi)n={update:Lf(t,e.key,e.value)};else if(e instanceof Au)n={delete:wl(t,e.key)};else if(e instanceof _r)n={update:Lf(t,e.key,e.data),updateMask:pR(e.fieldMask)};else{if(!(e instanceof Hb))return me();n={verify:wl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Bi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof la)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function oR(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(ye.min())&&(o=fn(i)),new $b(o,s.transformResults||[])}(n,e))):[]}function aR(t,e){return{documents:[e_(t,e.path)]}}function cR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=e_(t,s);const i=function(h){if(h.length!==0)return r_(en.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:os(m.field),direction:hR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Tl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function lR(t){let e=rR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=n_(p);return m instanceof en&&Og(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Fi(as(C.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Ma(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new aa(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new aa(_,m)}(n.endAt)),Pb(e,s,o,i,c,"F",l,h)}function uR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function n_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=as(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=as(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=as(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(as(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>n_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function hR(t){return Xb[t]}function dR(t){return Zb[t]}function fR(t){return eR[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return dt.fromServerFormat(t.fieldPath)}function r_(t){return t instanceof Xe?function(n){if(n.op==="=="){if(wf(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(If(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wf(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(If(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:dR(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(s=>r_(s));return r.length===1?r[0]:{compositeFilter:{op:fR(n.op),filters:r}}}(t):me()}function pR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function s_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=ye.min(),o=ye.min(),c=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mR{constructor(e){this.ct=e}}function gR(t){const e=lR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?El(e,e.limit,"L"):e}/**
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
 */class _R{constructor(){this.un=new yR}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(ur.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class yR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft($e.comparator)).toArray()}}/**
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
 */class Cs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Cs(0)}static kn(){return new Cs(-1)}}/**
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
 */class vR{constructor(){this.changes=new xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wi(r.mutation,s,Ft.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Fn();const o=Ii(),c=function(){return Ii()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof _r)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),wi(d.mutation,h,d.mutation.getFieldMask(),Ye.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new ER(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ii();let s=new We((o,c)=>o-c),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ft.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=$g();d.forEach(m=>{if(!i.has(m)){const _=Gg(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(Sr());let c=-1,l=i;return o.next(h=>U.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,we())).next(d=>({batchId:c,changes:Bg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=oi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oi();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(p,m){return new Vs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let c=oi();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&wi(d.mutation,h,Ft.empty(),Ye.now()),Fa(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class IR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:gR(s.bundledQuery),readTime:fn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class wR{constructor(){this.overlays=new We(ae.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new ae(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Sr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Kb(n,r));let i=this.Ir.get(n);i===void 0&&(i=we(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class AR{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
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
 */class Pu{constructor(){this.Tr=new ft(st.Er),this.dr=new ft(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ae(new $e([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ae(new $e([])),r=new st(n,e),s=new st(n,e+1);let i=we();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ae.comparator(e.key,n.key)||Ce(e.wr,n.wr)}static Ar(e,n){return Ce(e.wr,n.wr)||ae.comparator(e.key,n.key)}}/**
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
 */class bR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ft(st.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(Ce);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const o=new st(new ae(i),0);let c=new ft(Ce);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),U.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RR{constructor(e){this.Mr=e,this.docs=function(){return new We(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,c=new ae(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||lb(cb(d),r)<=0||(s.has(d.key)||Fa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return U.resolve(this.size)}}class SR extends vR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class PR{constructor(e){this.persistence=e,this.Nr=new xs(n=>Eu(n),Tu),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Pu,this.targetCount=0,this.kr=Cs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
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
 */class CR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new gu(0),this.Kr=!1,this.Kr=!0,this.$r=new AR,this.referenceDelegate=e(this),this.Ur=new PR(this),this.indexManager=new _R,this.remoteDocumentCache=function(s){return new RR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mR(n),this.Gr=new IR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new kR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kR extends hb{constructor(e){super(),this.currentSequenceNumber=e}}class Cu{constructor(e){this.persistence=e,this.Jr=new Pu,this.Yr=null}static Zr(e){return new Cu(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=ae.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class OR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return hT()?8:db(wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new DR;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ei()<=be.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(ei()<=be.DEBUG&&te("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ei()<=be.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dn(n))):U.resolve())}Yi(e,n){if(Sf(n))return U.resolve(null);let r=dn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=El(n,null,"F"),r=dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,c);return this.ns(n,h,o,l.readTime)?this.Yi(e,El(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return Sf(n)||s.isEqual(ye.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(ei()<=be.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),is(n)),this.rs(e,o,n,ab(s,-1)).next(c=>c))})}ts(e,n){let r=new ft(Fg(e));return n.forEach((s,i)=>{Fa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ei()<=be.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,ur.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class NR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(Ce),this._s=new xs(i=>Eu(i),Tu),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function VR(t,e,n,r){return new NR(t,e,n,r)}async function i_(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=we();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function xR(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let _=U.resolve();return m.forEach(C=>{_=_.next(()=>d.getEntry(l,C)).next(D=>{const P=h.docVersions.get(C);Ne(P!==null),D.version.compareTo(P)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=we();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function o_(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function MR(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(pt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(D,P,L){return D.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,_,d)&&c.push(n.Ur.updateTargetData(i,_))});let l=Fn(),h=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(LR(i,o,e.documentUpdates).next(d=>{l=d.Ps,h=d.Is})),!r.isEqual(ye.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function LR(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):te("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function FR(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UR(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function bl(t,e,n){const r=ve(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Ff(t,e,n){const r=ve(t);let s=ye.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=ve(l),m=p._s.get(d);return m!==void 0?U.resolve(p.os.get(m)):p.Ur.getTargetData(h,d)}(r,o,dn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:we())).next(c=>(BR(r,kb(e),c),{documents:c,Ts:i})))}function BR(t,e,n){let r=t.us.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Uf{constructor(){this.activeTargetIds=Mb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $R{constructor(){this.so=new Uf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Uf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Bf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Co=null;function Lc(){return Co===null?Co=function(){return 268435456+Math.round(2147483648*Math.random())}():Co++,"0x"+Co.toString(16)}/**
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
 */const _t="WebChannelConnection";class WR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Lc(),l=this.xo(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw bs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=qR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Lc();return new Promise((o,c)=>{const l=new Eg;l.setWithCredentials(!0),l.listenOnce(Tg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Uo.NO_ERROR:const d=l.getResponseJson();te(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Uo.TIMEOUT:te(_t,`RPC '${e}' ${i} timed out`),c(new Z(M.DEADLINE_EXCEEDED,"Request time out"));break;case Uo.HTTP_ERROR:const p=l.getStatus();if(te(_t,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(P){const L=P.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(L)>=0?L:M.UNKNOWN}(_.status);c(new Z(C,_.message))}else c(new Z(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Z(M.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{te(_t,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);te(_t,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Lc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ag(),c=wg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");te(_t,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const C=new HR({Io:P=>{_?te(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(te(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(_t,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},To:()=>p.close()}),D=(P,L,$)=>{P.listen(L,H=>{try{$(H)}catch(j){setTimeout(()=>{throw j},0)}})};return D(p,ii.EventType.OPEN,()=>{_||(te(_t,`RPC '${e}' stream ${s} transport opened.`),C.yo())}),D(p,ii.EventType.CLOSE,()=>{_||(_=!0,te(_t,`RPC '${e}' stream ${s} transport closed`),C.So())}),D(p,ii.EventType.ERROR,P=>{_||(_=!0,bs(_t,`RPC '${e}' stream ${s} transport errored:`,P),C.So(new Z(M.UNAVAILABLE,"The operation could not be completed")))}),D(p,ii.EventType.MESSAGE,P=>{var L;if(!_){const $=P.data[0];Ne(!!$);const H=$,j=H.error||((L=H[0])===null||L===void 0?void 0:L.error);if(j){te(_t,`RPC '${e}' stream ${s} received error:`,j);const ce=j.status;let le=function(A){const T=Je[A];if(T!==void 0)return Qg(T)}(ce),R=j.message;le===void 0&&(le=M.INTERNAL,R="Unknown error status: "+ce+" with message "+j.message),_=!0,C.So(new Z(le,R)),p.close()}else te(_t,`RPC '${e}' stream ${s} received:`,$),C.bo($)}}),D(c,Ig.STAT_EVENT,P=>{P.stat===pl.PROXY?te(_t,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===pl.NOPROXY&&te(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.wo()},0),C}}function Fc(){return typeof document<"u"?document:null}/**
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
 */function ja(t){return new tR(t,!0)}/**
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
 */class a_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class c_{constructor(e,n,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new a_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KR extends c_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?fn(o.readTime):ye.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Al(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=yl(l)?{documents:aR(i,l)}:{query:cR(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Xg(i,o.resumeToken);const h=Tl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ye.min())>0){c.readTime=ua(i,o.snapshotVersion.toTimestamp());const h=Tl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=uR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Al(this.serializer),n.removeTarget=e,this.a_(n)}}class GR extends c_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=oR(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Al(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iR(this.serializer,r))};this.a_(n)}}/**
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
 */class zR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Il(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Il(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class QR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ln(n),this.D_=!1):te("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class YR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{qr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ve(l);h.L_.add(4),await to(h),h.q_.set("Unknown"),h.L_.delete(4),await qa(h)}(this))})}),this.q_=new QR(r,s)}}async function qa(t){if(qr(t))for(const e of t.B_)await e(!0)}async function to(t){for(const e of t.B_)await e(!1)}function l_(t,e){const n=ve(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Vu(n)?Nu(n):Ms(n).r_()&&Ou(n,e))}function Du(t,e){const n=ve(t),r=Ms(n);n.N_.delete(e),r.r_()&&u_(n,e),n.N_.size===0&&(r.r_()?r.o_():qr(n)&&n.q_.set("Unknown"))}function Ou(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).A_(e)}function u_(t,e){t.Q_.xe(e),Ms(t).R_(e)}function Nu(t){t.Q_=new Jb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.q_.v_()}function Vu(t){return qr(t)&&!Ms(t).n_()&&t.N_.size>0}function qr(t){return ve(t).L_.size===0}function h_(t){t.Q_=void 0}async function JR(t){t.q_.set("Online")}async function XR(t){t.N_.forEach((e,n)=>{Ou(t,e)})}async function ZR(t,e){h_(t),Vu(t)?(t.q_.M_(e),Nu(t)):t.q_.set("Unknown")}async function eS(t,e,n){if(t.q_.set("Online"),e instanceof Jg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof jo?t.Q_.Ke(e):e instanceof Yg?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ye.min()))try{const r=await o_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.N_.get(l);if(!d)return;i.N_.set(l,d.withResumeToken(pt.EMPTY_BYTE_STRING,d.snapshotVersion)),u_(i,l);const p=new er(d.target,l,h,d.sequenceNumber);Ou(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!Xi(e))throw e;t.L_.add(1),await to(t),t.q_.set("Offline"),n||(n=()=>o_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qa(t)})}function d_(t,e){return e().catch(n=>ha(t,n,e))}async function Ha(t){const e=ve(t),n=dr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tS(e);)try{const s=await FR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,nS(e,s)}catch(s){await ha(e,s)}f_(e)&&p_(e)}function tS(t){return qr(t)&&t.O_.length<10}function nS(t,e){t.O_.push(e);const n=dr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function f_(t){return qr(t)&&!dr(t).n_()&&t.O_.length>0}function p_(t){dr(t).start()}async function rS(t){dr(t).p_()}async function sS(t){const e=dr(t);for(const n of t.O_)e.m_(n.mutations)}async function iS(t,e,n){const r=t.O_.shift(),s=bu.from(r,e,n);await d_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ha(t)}async function oS(t,e){e&&dr(t).V_&&await async function(r,s){if(function(o){return zb(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();dr(r).s_(),await d_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ha(r)}}(t,e),f_(t)&&p_(t)}async function $f(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.L_.add(3),await to(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qa(n)}async function aS(t,e){const n=ve(t);e?(n.L_.delete(2),await qa(n)):e||(n.L_.add(2),await to(n),n.q_.set("Unknown"))}function Ms(t){return t.K_||(t.K_=function(n,r,s){const i=ve(n);return i.w_(),new KR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:JR.bind(null,t),Ro:XR.bind(null,t),mo:ZR.bind(null,t),d_:eS.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Vu(t)?Nu(t):t.q_.set("Unknown")):(await t.K_.stop(),h_(t))})),t.K_}function dr(t){return t.U_||(t.U_=function(n,r,s){const i=ve(n);return i.w_(),new GR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rS.bind(null,t),mo:oS.bind(null,t),f_:sS.bind(null,t),g_:iS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ha(t)):(await t.U_.stop(),t.O_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class xu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new xu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Xi(t))return new Z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=oi(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jf{constructor(){this.W_=new We(ae.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ks(e,n,vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&La(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class lS{constructor(){this.queries=qf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=qf(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new Z(M.ABORTED,"Firestore shutting down"))}}function qf(){return new xs(t=>Lg(t),La)}async function m_(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new cS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Mu(o,`Initialization of query '${is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Lu(n)}async function g_(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uS(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Lu(n)}function hS(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Lu(t){t.Y_.forEach(e=>{e.next()})}var Rl,Hf;(Hf=Rl||(Rl={})).ea="default",Hf.Cache="cache";class __{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Rl.Cache}}/**
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
 */class y_{constructor(e){this.key=e}}class v_{constructor(e){this.key=e}}class dS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=we(),this.mutatedKeys=we(),this.Aa=Fg(e),this.Ra=new vs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new jf,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=Fa(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),P=!0):this.ga(m,_)||(r.track({type:2,doc:_}),P=!0,(l&&this.Aa(_,l)>0||h&&this.Aa(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(l||h)&&(c=!0)),P&&(_?(o=o.add(_),i=D?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,C){const D=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return D(_)-D(C)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new ks(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new jf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=we(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new v_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new y_(r))}),n}ba(e){this.Ta=e.Ts,this.da=we();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ks.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pS{constructor(e){this.key=e,this.va=!1}}class mS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xs(c=>Lg(c),La),this.Ma=new Map,this.xa=new Set,this.Oa=new We(ae.comparator),this.Na=new Map,this.La=new Pu,this.Ba={},this.ka=new Map,this.qa=Cs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gS(t,e,n=!0){const r=b_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await E_(r,e,n,!0),s}async function _S(t,e){const n=b_(t);await E_(n,e,!0,!1)}async function E_(t,e,n,r){const s=await UR(t.localStore,dn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await yS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&l_(t.remoteStore,s),c}async function yS(t,e,n,r,s){t.Ka=(p,m,_)=>async function(D,P,L,$){let H=P.view.ma(L);H.ns&&(H=await Ff(D.localStore,P.query,!1).then(({documents:R})=>P.view.ma(R,H)));const j=$&&$.targetChanges.get(P.targetId),ce=$&&$.targetMismatches.get(P.targetId)!=null,le=P.view.applyChanges(H,D.isPrimaryClient,j,ce);return Kf(D,P.targetId,le.wa),le.snapshot}(t,p,m,_);const i=await Ff(t.localStore,e,!0),o=new dS(e,i.Ts),c=o.ma(i.documents),l=eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Kf(t,n,h.wa);const d=new fS(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function vS(t,e,n){const r=ve(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!La(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Du(r.remoteStore,s.targetId),Sl(r,s.targetId)}).catch(Ji)):(Sl(r,s.targetId),await bl(r.localStore,s.targetId,!0))}async function ES(t,e){const n=ve(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Du(n.remoteStore,r.targetId))}async function TS(t,e,n){const r=PS(t);try{const s=await function(o,c){const l=ve(o),h=Ye.now(),d=c.reduce((_,C)=>_.add(C.key),we());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Fn(),D=we();return l.cs.getEntries(_,d).next(P=>{C=P,C.forEach((L,$)=>{$.isValidDocument()||(D=D.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(P=>{p=P;const L=[];for(const $ of c){const H=qb($,p.get($.key).overlayedDocument);H!=null&&L.push(new _r($.key,H,Cg(H.value.mapValue),jt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,L,c)}).next(P=>{m=P;const L=P.applyToLocalDocumentSet(p,D);return l.documentOverlayCache.saveOverlays(_,P.batchId,L)})}).then(()=>({batchId:m.batchId,changes:Bg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new We(Ce)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await no(r,s.changes),await Ha(r.remoteStore)}catch(s){const i=Mu(s,"Failed to persist write");n.reject(i)}}async function T_(t,e){const n=ve(t);try{const r=await MR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ne(o.va):s.removedDocuments.size>0&&(Ne(o.va),o.va=!1))}),await no(n,r,e)}catch(r){await Ji(r)}}function Wf(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ve(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(c)&&(h=!0)}),h&&Lu(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IS(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(ae.comparator);o=o.insert(i,Et.newNoDocument(i,ye.min()));const c=we().add(i),l=new $a(ye.min(),new Map,new We(Ce),o,c);await T_(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Fu(r)}else await bl(r.localStore,e,!1).then(()=>Sl(r,e,n)).catch(Ji)}async function wS(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await xR(n.localStore,e);w_(n,r,null),I_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await no(n,s)}catch(s){await Ji(s)}}async function AS(t,e,n){const r=ve(t);try{const s=await function(o,c){const l=ve(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ne(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);w_(r,e,n),I_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await no(r,s)}catch(s){await Ji(s)}}function I_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function w_(t,e,n){const r=ve(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Sl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||A_(t,r)})}function A_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Du(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Fu(t))}function Kf(t,e,n){for(const r of n)r instanceof y_?(t.La.addReference(r.key,e),bS(t,r)):r instanceof v_?(te("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||A_(t,r.key)):me()}function bS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(te("SyncEngine","New document in limbo: "+n),t.xa.add(r),Fu(t))}function Fu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ae($e.fromString(e)),r=t.qa.next();t.Na.set(r,new pS(n)),t.Oa=t.Oa.insert(n,r),l_(t.remoteStore,new er(dn(Iu(n.path)),r,"TargetPurposeLimboResolution",gu.oe))}}async function no(t,e,n){const r=ve(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=ku.Wi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const d=ve(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,m=>U.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>U.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Xi(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);d.os=d.os.insert(m,D)}}}(r.localStore,i))}async function RS(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await i_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new Z(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await no(n,r.hs)}}function SS(t,e){const n=ve(t),r=n.Na.get(e);if(r&&r.va)return we().add(r.key);{let s=we();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function b_(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=T_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IS.bind(null,e),e.Ca.d_=uS.bind(null,e.eventManager),e.Ca.$a=hS.bind(null,e.eventManager),e}function PS(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AS.bind(null,e),e}class da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ja(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return VR(this.persistence,new OR,e.initialUser,this.serializer)}Ga(e){return new CR(Cu.Zr,this.serializer)}Wa(e){return new $R}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}da.provider={build:()=>new da};class Pl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RS.bind(null,this.syncEngine),await aS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lS}()}createDatastore(e){const n=ja(e.databaseInfo.databaseId),r=function(i){return new WR(i)}(e.databaseInfo);return function(i,o,c,l){return new zR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new YR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Wf(this.syncEngine,n,0),function(){return Bf.D()?new Bf:new jR}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new mS(s,i,o,c,l,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);te("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await to(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Pl.provider={build:()=>new Pl};/**
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
 */class CS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Mu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await i_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kS(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$f(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>$f(e.remoteStore,s)),t._onlineComponents=e}async function kS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;bs("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new da)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new da);return t._offlineComponents}async function S_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Gf(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Gf(t,new Pl))),t._onlineComponents}function DS(t){return S_(t).then(e=>e.syncEngine)}async function Cl(t){const e=await S_(t),n=e.eventManager;return n.onListen=gS.bind(null,e.syncEngine),n.onUnlisten=vS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_S.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ES.bind(null,e.syncEngine),n}function OS(t,e,n={}){const r=new sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new R_({next:m=>{d.Za(),o.enqueueAndForget(()=>g_(i,p)),m.fromCache&&l.source==="server"?h.reject(new Z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new __(c,d,{includeMetadataChanges:!0,_a:!0});return m_(i,p)}(await Cl(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function C_(t,e,n){if(!n)throw new Z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NS(t,e,n,r){if(e===!0&&r===!0)throw new Z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(!ae.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(ae.isDocumentKey(t))throw new Z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wa(t);throw new Z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new X0;switch(r.type){case"firstParty":return new nb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zf.get(n);r&&(te("ComponentProvider","Removing Datastore"),zf.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var s;const i=(t=qt(t,Ka))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&bs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=yt.MOCK_USER;else{c=Em(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(h)}t._authCredentials=new Z0(new bg(c,l))}}/**
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
 */class yr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yr(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class ir extends yr{constructor(e,n,r){super(e,n,Iu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new ae(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Es(t,e,...n){if(t=et(t),C_("collection","path",e),t instanceof Ka){const r=$e.fromString(e,...n);return Yf(r),new ir(t,null,r)}{if(!(t instanceof St||t instanceof ir))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Yf(r),new ir(t.firestore,null,r)}}function or(t,e,...n){if(t=et(t),arguments.length===1&&(e=Rg.newId()),C_("doc","path",e),t instanceof Ka){const r=$e.fromString(e,...n);return Qf(r),new St(t,null,new ae(r))}{if(!(t instanceof St||t instanceof ir))throw new Z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Qf(r),new St(t.firestore,t instanceof ir?t.converter:null,new ae(r))}}/**
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
 */class Xf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new a_(this,"async_queue_retry"),this.Vu=()=>{const r=Fc();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xi(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=xu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&me()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Zf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class fr extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xf(e),this._firestoreClient=void 0,await e}}}function ci(t,e){const n=typeof t=="object"?t:tu(),r=typeof t=="string"?t:e||"(default)",s=ka(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_m("firestore");i&&VS(s,...i)}return s}function Uu(t){if(t._terminated)throw new Z(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||xS(t),t._firestoreClient}function xS(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new mb(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,P_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new CS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ds(pt.fromBase64String(e))}catch(n){throw new Z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ds(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bu{constructor(e){this._methodName=e}}/**
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
 */class $u{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */const MS=/^__.*__$/;class LS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new _r(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zi(e,this.data,n,this.fieldTransforms)}}class k_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new _r(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class qu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(D_(this.Cu)&&MS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class FS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ja(e)}Qu(e,n,r,s=!1){return new qu({Cu:e,methodName:n,qu:r,path:dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function za(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new FS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function O_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Hu("Data must be an object, but it was:",o,r);const c=N_(r,o);let l,h;if(i.merge)l=new Ft(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=kl(e,p,n);if(!o.contains(m))throw new Z(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);x_(d,m)||d.push(m)}l=new Ft(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new LS(new Dt(c),l,h)}class Qa extends Bu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}function US(t,e,n,r){const s=t.Qu(1,e,n);Hu("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();jr(r,(l,h)=>{const d=Wu(e,l,n);h=et(h);const p=s.Nu(d);if(h instanceof Qa)i.push(d);else{const m=ro(h,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Ft(i);return new k_(o,c,s.fieldTransforms)}function BS(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[kl(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(kl(e,i[m])),l.push(i[m+1]);const h=[],d=Dt.empty();for(let m=c.length-1;m>=0;--m)if(!x_(h,c[m])){const _=c[m];let C=l[m];C=et(C);const D=o.Nu(_);if(C instanceof Qa)h.push(_);else{const P=ro(C,D);P!=null&&(h.push(_),d.set(_,P))}}const p=new Ft(h);return new k_(d,p,o.fieldTransforms)}function $S(t,e,n,r=!1){return ro(n,t.Qu(r?4:3,e))}function ro(t,e){if(V_(t=et(t)))return Hu("Unsupported field value:",e,t),N_(t,e);if(t instanceof Bu)return function(r,s){if(!D_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ro(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Lb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof $u)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ds)return{bytesValue:Xg(s.serializer,r._byteString)};if(r instanceof St){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Su(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof ju)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return wu(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Wa(r)}`)}(t,e)}function N_(t,e){const n={};return Sg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,s)=>{const i=ro(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function V_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof $u||t instanceof Ds||t instanceof St||t instanceof Bu||t instanceof ju)}function Hu(t,e,n){if(!V_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Wa(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function kl(t,e,n){if((e=et(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return Wu(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function Wu(t,e,n){if(e.search(jS)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ga(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(M.INVALID_ARGUMENT,c+t+l)}function x_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class M_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ya("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qS extends M_{data(){return super.data()}}function Ya(t,e){return typeof e=="string"?Wu(t,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}/**
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
 */function L_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ku{}class F_ extends Ku{}function cs(t,e,...n){let r=[];e instanceof Ku&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Gu).length,c=i.filter(l=>l instanceof Ja).length;if(o>1||o>0&&c>0)throw new Z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ja extends F_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ja(e,n,r)}_apply(e){const n=this._parse(e);return U_(e._query,n),new yr(e.firestore,e.converter,vl(e._query,n))}_parse(e){const n=za(e.firestore);return function(i,o,c,l,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new Z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){tp(p,d);const _=[];for(const C of p)_.push(ep(l,i,C));m={arrayValue:{values:_}}}else m=ep(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||tp(p,d),m=$S(c,o,p,d==="in"||d==="not-in");return Xe.create(h,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ls(t,e,n){const r=e,s=Ya("where",t);return Ja._create(s,r,n)}class Gu extends Ku{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)U_(o,l),o=vl(o,l)}(e._query,n),new yr(e.firestore,e.converter,vl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zu extends F_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fi(i,o)}(e._query,this._field,this._direction);return new yr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function HS(t,e="asc"){const n=e,r=Ya("orderBy",t);return zu._create(r,n)}function ep(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new Z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Mg(e)&&n.indexOf("/")!==-1)throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!ae.isDocumentKey(r))throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tf(t,new ae(r))}if(n instanceof St)return Tf(t,n._key);throw new Z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wa(n)}.`)}function tp(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function U_(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WS{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Lr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new ju(i)}convertGeoPoint(e){return new $u(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ne(s_(r));const s=new Mi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function B_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class li{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $_ extends M_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ya("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qo extends $_{data(e={}){return super.data(e)}}class j_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new li(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qo(this._firestore,this._userDataWriter,r.key,r,new li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new qo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new qo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new li(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:KS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function KS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}class Qu extends WS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function Yu(t){t=qt(t,yr);const e=qt(t.firestore,fr),n=Uu(e),r=new Qu(e);return L_(t._query),OS(n,t._query).then(s=>new j_(e,r,t,s))}function GS(t,e,n){t=qt(t,St);const r=qt(t.firestore,fr),s=B_(t.converter,e,n);return Xa(r,[O_(za(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jt.none())])}function Dl(t,e,n,...r){t=qt(t,St);const s=qt(t.firestore,fr),i=za(s);let o;return o=typeof(e=et(e))=="string"||e instanceof Ga?BS(i,"updateDoc",t._key,e,n,r):US(i,"updateDoc",t._key,e),Xa(s,[o.toMutation(t._key,jt.exists(!0))])}function q_(t){return Xa(qt(t.firestore,fr),[new Au(t._key,jt.none())])}function H_(t,e){const n=qt(t.firestore,fr),r=or(t),s=B_(t.converter,e);return Xa(n,[O_(za(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function W_(t,...e){var n,r,s;t=et(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Zf(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Zf(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,d;if(t instanceof St)h=qt(t.firestore,fr),d=Iu(t._key.path),l={next:p=>{e[o]&&e[o](zS(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=qt(t,yr);h=qt(p.firestore,fr),d=p._query;const m=new Qu(h);l={next:_=>{e[o]&&e[o](new j_(h,m,p,_))},error:e[o+1],complete:e[o+2]},L_(t._query)}return function(m,_,C,D){const P=new R_(D),L=new __(_,P,C);return m.asyncQueue.enqueueAndForget(async()=>m_(await Cl(m),L)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>g_(await Cl(m),L))}}(Uu(h),d,c,l)}function Xa(t,e){return function(r,s){const i=new sr;return r.asyncQueue.enqueueAndForget(async()=>TS(await DS(r),s,i)),i.promise}(Uu(t),e)}function zS(t,e,n){const r=n.docs.get(e._key),s=new Qu(t);return new $_(t,s,e._key,r,new li(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ns=s})(Br),Nr(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new fr(new eb(r.getProvider("auth-internal")),new sb(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ln(gf,"4.7.3",e),ln(gf,"4.7.3","esm2017")})();var QS="firebase",YS="10.14.1";/**
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
 */ln(QS,YS,"app");/**
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
 */class yn extends _n{constructor(e,n,r=0){super(Bc(e),`Firebase Storage: ${n} (${Bc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var gn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(gn||(gn={}));function Bc(t){return"storage/"+t}function eP(){const t="An unknown error occurred, please check the error payload for server response.";return new yn(gn.UNKNOWN,t)}function tP(){return new yn(gn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nP(){return new yn(gn.CANCELED,"User canceled the upload/download.")}function rP(t){return new yn(gn.INVALID_URL,"Invalid URL '"+t+"'.")}function sP(t){return new yn(gn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function np(t){return new yn(gn.INVALID_ARGUMENT,t)}function G_(){return new yn(gn.APP_DELETED,"The Firebase app was deleted.")}function iP(t){return new yn(gn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Qt.makeFromUrl(e,n)}catch{return new Qt(e,"")}if(r.path==="")return r;throw sP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(j){j.path_=decodeURIComponent(j.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},D=n===K_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",L=new RegExp(`^https?://${D}/${s}/${P}`,"i"),H=[{regex:c,indices:l,postModify:i},{regex:_,indices:C,postModify:h},{regex:L,indices:{bucket:1,path:2},postModify:h}];for(let j=0;j<H.length;j++){const ce=H[j],le=ce.regex.exec(e);if(le){const R=le[ce.indices.bucket];let E=le[ce.indices.path];E||(E=""),r=new Qt(R,E),ce.postModify(r);break}}if(r==null)throw rP(e);return r}}class oP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function aP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function d(...P){h||(h=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,t(_,l())},P)}function m(){i&&clearTimeout(i)}function _(P,...L){if(h){m();return}if(P){m(),d.call(null,P,...L);return}if(l()||o){m(),d.call(null,P,...L);return}r<64&&(r*=2);let H;c===1?(c=2,H=0):H=(r+Math.random())*1e3,p(H)}let C=!1;function D(P){C||(C=!0,m(),!h&&(s!==null?(P||(c=2),clearTimeout(s),p(0)):P||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,D(!0)},n),D}function cP(t){t(!1)}/**
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
 */class dP{constructor(e,n,r,s,i,o,c,l,h,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,C)=>{this.resolve_=_,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ko(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===pa.NO_ERROR,l=i.getStatus();if(!c||hP(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===pa.ABORT;r(!1,new ko(!1,null,d));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new ko(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());lP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=eP();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?G_():nP();o(l)}else{const l=tP();o(l)}};this.canceled_?n(!1,new ko(!1,null,!0)):this.backoffId_=aP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&cP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ko{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function fP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function pP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function mP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function _P(t,e,n,r,s,i,o=!0){const c=uP(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return mP(h,e),fP(h,n),pP(h,i),gP(h,r),new dP(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */class ma{constructor(e,n){this._service=e,n instanceof Qt?this._location=n:this._location=Qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ma(e,n)}get root(){const e=new Qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vP(this._location.path)}get storage(){return this._service}get parent(){const e=yP(this._location.path);if(e===null)return null;const n=new Qt(this._location.bucket,e);return new ma(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iP(e)}}function sp(t,e){const n=e==null?void 0:e[JS];return n==null?null:Qt.makeFromBucketSpec(n,t)}function EP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Em(s,t.app.options.projectId))}class TP{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=K_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=XS,this._maxUploadRetryTime=ZS,this._requests=new Set,s!=null?this._bucket=Qt.makeFromBucketSpec(s,this._host):this._bucket=sp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qt.makeFromBucketSpec(this._url,e):this._bucket=sp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){rp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ma(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new oP(G_());{const o=_P(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ip="@firebase/storage",op="0.13.2";/**
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
 */const z_="storage";function IP(t=tu(),e){t=et(t);const r=ka(t,z_).getImmediate({identifier:e}),s=_m("storage");return s&&wP(r,...s),r}function wP(t,e,n,r={}){EP(t,e,n,r)}function AP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new TP(n,r,s,e,Br)}function bP(){Nr(new lr(z_,AP,"PUBLIC").setMultipleInstances(!0)),ln(ip,op,""),ln(ip,op,"esm2017")}bP();const RP={apiKey:"AIzaSyDUZDNdbmUh9-ubM3uyYyv7171aLpFK5yk",authDomain:"whatever-5ad68.firebaseapp.com",projectId:"whatever-5ad68",storageBucket:"whatever-5ad68.firebasestorage.app",messagingSenderId:"951449852897",appId:"1:951449852897:web:ab8f7901ddd434ba1b90a0",measurementId:"G-RF2ZY5QWHF"},Ju=wm(RP),Gt=hu(Ju),An=ci(Ju);IP(Ju);/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Q_="store";function SP(t){return t===void 0&&(t=null),$t(t!==null?t:Q_)}function Ls(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function PP(t){return t!==null&&typeof t=="object"}function CP(t){return t&&typeof t.then=="function"}function kP(t,e){return function(){return t(e)}}function Y_(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function J_(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Za(t,n,[],t._modules.root,!0),Xu(t,n,e)}function Xu(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};Ls(s,function(o,c){i[c]=kP(o,t),Object.defineProperty(t.getters,c,{get:function(){return i[c]()},enumerable:!0})}),t._state=$i({data:e}),t.strict&&xP(t),r&&n&&t._withCommit(function(){r.data=null})}function Za(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=Zu(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var h=r.context=DP(t,o,n);r.forEachMutation(function(d,p){var m=o+p;OP(t,m,d,h)}),r.forEachAction(function(d,p){var m=d.root?p:o+p,_=d.handler||d;NP(t,m,_,h)}),r.forEachGetter(function(d,p){var m=o+p;VP(t,m,d,h)}),r.forEachChild(function(d,p){Za(t,e,n.concat(p),d,s)})}function DP(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=ga(i,o,c),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=e+p),t.dispatch(p,h)},commit:r?t.commit:function(i,o,c){var l=ga(i,o,c),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=e+p),t.commit(p,h,d)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return X_(t,e)}},state:{get:function(){return Zu(t.state,n)}}}),s}function X_(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function OP(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function NP(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return CP(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function VP(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function xP(t){Dn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Zu(t,e){return e.reduce(function(n,r){return n[r]},t)}function ga(t,e,n){return PP(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var MP="vuex bindings",ap="vuex:mutations",$c="vuex:actions",Zr="vuex",LP=0;function FP(t,e){GA({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[MP]},function(n){n.addTimelineLayer({id:ap,label:"Vuex Mutations",color:cp}),n.addTimelineLayer({id:$c,label:"Vuex Actions",color:cp}),n.addInspector({id:Zr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Zr)if(r.filter){var s=[];ny(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[ty(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Zr){var s=r.nodeId;X_(e,s),r.state=$P(qP(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Zr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Zr),n.sendInspectorState(Zr),n.addTimelineEvent({layerId:ap,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=LP++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:$c,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:$c,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var cp=8702998,UP=6710886,BP=16777215,Z_={label:"namespaced",textColor:BP,backgroundColor:UP};function ey(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function ty(t,e){return{id:e||"root",label:ey(e),tags:t.namespaced?[Z_]:[],children:Object.keys(t._children).map(function(n){return ty(t._children[n],e+n+"/")})}}function ny(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Z_]:[]}),Object.keys(e._children).forEach(function(s){ny(t,e._children[s],n,r+s+"/")})}function $P(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=jP(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?ey(o):o,editable:!1,value:Ol(function(){return i[o]})}})}return s}function jP(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Ol(function(){return t[n]})}else e[n]=Ol(function(){return t[n]})}),e}function qP(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Ol(t){try{return t()}catch(e){return e}}var tn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},ry={namespaced:{configurable:!0}};ry.namespaced.get=function(){return!!this._rawModule.namespaced};tn.prototype.addChild=function(e,n){this._children[e]=n};tn.prototype.removeChild=function(e){delete this._children[e]};tn.prototype.getChild=function(e){return this._children[e]};tn.prototype.hasChild=function(e){return e in this._children};tn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};tn.prototype.forEachChild=function(e){Ls(this._children,e)};tn.prototype.forEachGetter=function(e){this._rawModule.getters&&Ls(this._rawModule.getters,e)};tn.prototype.forEachAction=function(e){this._rawModule.actions&&Ls(this._rawModule.actions,e)};tn.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ls(this._rawModule.mutations,e)};Object.defineProperties(tn.prototype,ry);var Hr=function(e){this.register([],e,!1)};Hr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};Hr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};Hr.prototype.update=function(e){sy([],this.root,e)};Hr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new tn(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&Ls(n.modules,function(c,l){s.register(e.concat(l),c,r)})};Hr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};Hr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function sy(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;sy(t.concat(r),e.getChild(r),n.modules[r])}}function HP(t){return new Ot(t)}var Ot=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Hr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,c=this,l=c.dispatch,h=c.commit;this.dispatch=function(m,_){return l.call(o,m,_)},this.commit=function(m,_,C){return h.call(o,m,_,C)},this.strict=s;var d=this._modules.root.state;Za(this,d,[],this._modules.root),Xu(this,d),r.forEach(function(p){return p(n)})},eh={state:{configurable:!0}};Ot.prototype.install=function(e,n){e.provide(n||Q_,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&FP(e,this)};eh.state.get=function(){return this._state.data};eh.state.set=function(t){};Ot.prototype.commit=function(e,n,r){var s=this,i=ga(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},h=this._mutations[o];h&&(this._withCommit(function(){h.forEach(function(p){p(c)})}),this._subscribers.slice().forEach(function(d){return d(l,s.state)}))};Ot.prototype.dispatch=function(e,n){var r=this,s=ga(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(c,r.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(o)})):l[0](o);return new Promise(function(d,p){h.then(function(m){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}d(m)},function(m){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,m)})}catch{}p(m)})})}};Ot.prototype.subscribe=function(e,n){return Y_(e,this._subscribers,n)};Ot.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Y_(r,this._actionSubscribers,n)};Ot.prototype.watch=function(e,n,r){var s=this;return Dn(function(){return e(s.state,s.getters)},n,Object.assign({},r))};Ot.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};Ot.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Za(this,this.state,e,this._modules.get(e),r.preserveState),Xu(this,this.state)};Ot.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Zu(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),J_(this)};Ot.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ot.prototype.hotUpdate=function(e){this._modules.update(e),J_(this,!0)};Ot.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(Ot.prototype,eh);const iy=Symbol(),WP=HP({state:{memos:[],filterSettings:{hashtags:[],date:null,dateRange:"all"},currentUser:null},mutations:{setMemos(t,e){t.memos=e},addMemo(t,e){t.memos.unshift(e)},deleteMemo(t,e){t.memos=t.memos.filter(n=>n.id!==e)},editMemo(t,e){const n=t.memos.findIndex(r=>r.id===e.id);n!==-1&&(t.memos[n]={...t.memos[n],...e})},updateFilterSettings(t,e){t.filterSettings={...t.filterSettings,...e}},setUser(t,e){t.currentUser=e}},actions:{async fetchMemos({commit:t}){const e=ci(),n=Es(e,"memos");try{const r=await Yu(n),s=[];r.forEach(i=>{const o=i.data();s.push({id:i.id,...o,timestamp:o.timestamp})}),t("setMemos",s)}catch(r){console.error("Error fetching memos: ",r)}},async addMemo({commit:t},e){const n=ci(),r=Es(n,"memos"),s={...e,timestamp:new Date};try{const i=await H_(r,s);t("addMemo",{id:i.id,...s})}catch(i){console.error("Error adding memo: ",i)}},async deleteMemo({commit:t},e){const n=ci(),r=or(n,"memos",e);try{await q_(r),t("deleteMemo",e)}catch(s){console.error("Error deleting memo: ",s)}},async editMemo({commit:t},e){const n=ci(),r=or(n,"memos",e.id);try{const s={content:e.content,tags:e.tags};e.imageUrl!==void 0&&(s.imageUrl=e.imageUrl),await Dl(r,s),t("editMemo",e)}catch(s){console.error("Error editing memo: ",s)}},updateFilterSettings({commit:t},e){t("updateFilterSettings",e)},setUser({commit:t},e){t("setUser",e)}},plugins:[]});function so(){return SP(iy)}const KP={id:"app"},GP={key:1},zP={class:"app-header"},QP={class:"header-content"},YP={key:0,class:"user-label"},JP={class:"main-content-wrapper"},XP={class:"routerViewContainer"},ZP={key:1,class:"login-wrapper"},eC={__name:"App",setup(t){const e=so(),n=hu(),r=pu(),s=J0(),i=Ie(null),o=Ie(!1);let c=null;Gl(()=>{const d=Sw(n,async p=>{if(i.value=p,p){const m=or(An,"users",p.uid);c=W_(m,_=>{o.value=_.exists(),_.exists()&&e.dispatch("setUser",{uid:p.uid,email:p.email,nickname:_.data().nickname})}),s.path==="/login"&&r.push("/")}else o.value=!1,c&&c(),s.path!=="/login"&&r.push("/login")});qi(()=>{d(),c&&c()})});const l=ht(()=>{var d;return(d=e.state.currentUser)==null?void 0:d.nickname}),h=async()=>{try{await Pw(n),r.push("/login")}catch(d){console.error("Logout error:",d)}};return(d,p)=>{const m=ti("setNickname"),_=ti("router-link"),C=ti("sidebar"),D=ti("router-view");return he(),_e("div",KP,[i.value?(he(),_e(rt,{key:0},[o.value?(he(),_e("div",GP,[x("header",zP,[x("div",QP,[Qe(_,{to:"/",class:"home-link"},{default:zo(()=>p[0]||(p[0]=[x("h1",null,"My App",-1)])),_:1,__:[0]}),l.value?(he(),_e("p",YP," Welcome, "+Fe(l.value),1)):zt("",!0),x("button",{onClick:h,class:"logout-button"},"Logout")])]),x("div",JP,[Qe(C),x("div",XP,[Qe(D)])])])):(he(),Ts(m,{key:0}))],64)):(he(),_e("div",ZP,[Qe(D)]))])}}};const Wr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tC={class:"homepage-container"},nC={class:"quick-links"},rC={__name:"homePage",setup(t){return(e,n)=>{const r=ti("router-link");return he(),_e("div",tC,[n[2]||(n[2]=x("h2",null,"Welcome to Our Shared Space!",-1)),n[3]||(n[3]=x("p",null,"This is your personalized homepage.",-1)),n[4]||(n[4]=x("p",null,"Use the navigation above to explore Memos and Plans.",-1)),x("div",nC,[Qe(r,{to:"/memos",class:"nav-button"},{default:zo(()=>n[0]||(n[0]=[Xc("View Memos",-1)])),_:1,__:[0]}),Qe(r,{to:"/plans",class:"nav-button"},{default:zo(()=>n[1]||(n[1]=[Xc("Check Plans",-1)])),_:1,__:[1]})])])}}},sC=Wr(rC,[["__scopeId","data-v-45e30cee"]]);const iC={class:"auth-container"},oC={class:"form-group"},aC={class:"form-group"},cC=["disabled"],lC={key:0,class:"error-message"},uC={__name:"authComponent",setup(t){const e=Ie(""),n=Ie(""),r=Ie(!0),s=Ie(!1),i=Ie(null),o=pu(),c=so(),l=async()=>{s.value=!0,i.value=null;try{if(r.value){const d=(await Aw(Gt,e.value,n.value)).user;c.dispatch("setUser",{uid:d.uid,email:d.email,nickname:d.email.split("@")[0]}),o.push("/")}else{const d=(await ww(Gt,e.value,n.value)).user;c.dispatch("setUser",{uid:d.uid,email:d.email,nickname:d.email.split("@")[0]}),o.push("/set-nickname")}}catch(h){switch(h.code){case"auth/invalid-email":i.value="Invalid email address.";break;case"auth/user-not-found":i.value="No user found with this email.";break;case"auth/wrong-password":i.value="Incorrect password.";break;case"auth/email-already-in-use":i.value="This email is already registered.";break;case"auth/weak-password":i.value="Password should be at least 6 characters.";break;default:i.value=`An unknown error occurred: ${h.message}`}}finally{s.value=!1}};return(h,d)=>(he(),_e("div",iC,[x("h2",null,Fe(r.value?"Login":"Register"),1),x("form",{onSubmit:on(l,["prevent"])},[x("div",oC,[d[3]||(d[3]=x("label",{for:"auth-email"},"Email",-1)),Dr(x("input",{type:"email",id:"auth-email","onUpdate:modelValue":d[0]||(d[0]=p=>e.value=p),required:""},null,512),[[Or,e.value]])]),x("div",aC,[d[4]||(d[4]=x("label",{for:"auth-password"},"Password",-1)),Dr(x("input",{type:"password",id:"auth-password","onUpdate:modelValue":d[1]||(d[1]=p=>n.value=p),required:""},null,512),[[Or,n.value]])]),x("button",{type:"submit",disabled:s.value},Fe(r.value?"Login":"Register"),9,cC),i.value?(he(),_e("div",lC,Fe(i.value),1)):zt("",!0)],32),x("button",{class:"toggle-mode-button",onClick:d[2]||(d[2]=p=>r.value=!r.value)},Fe(r.value?"Need an account? Register":"Have an account? Login"),1)]))}},hC=Wr(uC,[["__scopeId","data-v-9823c038"]]);const dC={class:"sidebar-header"},fC={key:0},pC={key:1,class:"collapsed-icon"},mC={class:"sidebar-content"},gC={class:"filter-section"},_C={class:"hashtag-filter-buttons"},yC=["onClick"],vC={class:"filter-section"},EC={class:"date-filter-options"},TC=["value"],IC={class:"date-range-buttons"},wC={class:"filter-actions"},AC={__name:"sidebar",setup(t){const e=so(),n=Ie(!1),r=Ie(!1),s=()=>{n.value=!n.value},i=()=>{r.value=!0},o=()=>{r.value=!1},c=Ie(["Family","Friends","Travel","Event","Work","Home","Food","Fun","Important","Reminder"]),l=ht(()=>e.state.filterSettings),h=D=>{const P=[...l.value.hashtags],L=P.indexOf(D);L>-1?P.splice(L,1):P.push(D),e.dispatch("updateFilterSettings",{hashtags:P})},d=()=>{e.dispatch("updateFilterSettings",{hashtags:[]})},p=D=>{e.dispatch("updateFilterSettings",{dateRange:D,date:null})},m=D=>{e.dispatch("updateFilterSettings",{date:D.target.value,dateRange:"specific"})},_=()=>{e.dispatch("updateFilterSettings",{date:null,dateRange:"all"})},C=()=>{e.dispatch("updateFilterSettings",{hashtags:[],date:null,dateRange:"all"})};return(D,P)=>(he(),_e("aside",{class:Kt(["sidebar-container",{expanded:n.value}]),onMouseenter:i,onMouseleave:o,onClick:s},[x("div",dC,[x("h3",null,[n.value?(he(),_e("span",fC,"Filter Content")):(he(),_e("span",pC,"☰"))])]),x("div",mC,[x("div",gC,[P[4]||(P[4]=x("h4",null,"By Hashtag:",-1)),x("div",_C,[(he(!0),_e(rt,null,Sn(c.value,L=>(he(),_e("button",{key:L,onClick:on($=>h(L),["stop"]),class:Kt([{selected:l.value.hashtags.includes(L)},"filter-hashtag-button"])}," #"+Fe(L),11,yC))),128))]),x("button",{onClick:on(d,["stop"]),class:"clear-filters-button"}," Clear Hashtag Filters ")]),x("div",vC,[P[6]||(P[6]=x("h4",null,"By Date:",-1)),x("div",EC,[P[5]||(P[5]=x("label",{for:"specific-date"},"Specific Date:",-1)),x("input",{type:"date",id:"specific-date",value:l.value.date,onChange:m,class:"date-input"},null,40,TC),x("div",IC,[x("button",{onClick:P[0]||(P[0]=on(L=>p("today"),["stop"])),class:Kt([{selected:l.value.dateRange==="today"},"filter-date-button"])}," Today ",2),x("button",{onClick:P[1]||(P[1]=on(L=>p("last7days"),["stop"])),class:Kt([{selected:l.value.dateRange==="last7days"},"filter-date-button"])}," Last 7 Days ",2),x("button",{onClick:P[2]||(P[2]=on(L=>p("last30days"),["stop"])),class:Kt([{selected:l.value.dateRange==="last30days"},"filter-date-button"])}," Last 30 Days ",2),x("button",{onClick:P[3]||(P[3]=on(L=>p("all"),["stop"])),class:Kt([{selected:l.value.dateRange==="all"},"filter-date-button"])}," All Time ",2)])]),x("button",{onClick:on(_,["stop"]),class:"clear-filters-button"}," Clear Date Filters ")]),x("div",wC,[x("button",{onClick:on(C,["stop"]),class:"reset-all-filters-button"}," Reset All Filters ")])])],34))}},oy=Wr(AC,[["__scopeId","data-v-7719ec67"]]);const bC={__name:"hashtagButton",props:{tag:{type:String,required:!0},isSelected:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:e}){const n=t,r=e,s=()=>{n.isDisabled||r("click",n.tag)};return(i,o)=>(he(),_e("button",{onClick:s,class:Kt([{selected:t.isSelected,disabled:t.isDisabled},"hashtagButton"])}," #"+Fe(t.tag),3))}},_a=Wr(bC,[["__scopeId","data-v-b3b4276f"]]);const RC={class:"page-container"},SC={class:"sectionContainer"},PC={key:0,class:"memoInputForm"},CC={class:"memoInput"},kC={class:"fileInputContainer"},DC={for:"fileInput",class:"customFileInputLabel"},OC={key:0,class:"uploadProgress"},NC={class:"hashtagSelector"},VC={class:"hashtagButtons"},xC={class:"memoFormActions"},MC=["disabled"],LC={class:"memos-grid"},FC={key:0,class:"memoDisplayMode"},UC={key:0,class:"memo-photo-wrapper"},BC=["src"],$C={class:"memo-content"},jC={class:"memoMeta"},qC={class:"memoMetaRow"},HC={class:"memoCreator"},WC={class:"memoTags"},KC={class:"memoActions"},GC=["onClick"],zC=["onClick"],QC={key:1,class:"memoEditMode"},YC={class:"fileInputContainer"},JC={for:"editFileInput",class:"customFileInputLabel"},XC={key:0,class:"uploadProgress"},ZC={class:"hashtagSelector"},ek={class:"hashtagButtons"},tk={class:"memoEditActions"},nk=["onClick"],es=4,rk={__name:"memoSection",setup(t){const e=so(),n=ht(()=>e.state.memos),r=Ie(!1),s=Ie(""),i=Ie(null),o=Ie(null),c=Ie(""),l=Ie(""),h=Ie(null),d=Ie(""),p=Ie(null),m=Ie([]),_=Ie([]),C=Ie({}),D=Ie(["Family","Friends","Travel","Event","Work","Home","Food","Fun","Important","Reminder"]),P=ht(()=>e.state.filterSettings),L=se=>se?se.seconds?new Date(se.seconds*1e3).toLocaleDateString():new Date(se).toLocaleDateString():"No Date",$=ht(()=>n.value.filter(se=>(P.value.hashtags.length===0||P.value.hashtags.every(K=>se.tags.includes(K)))&&(()=>{if(P.value.dateRange==="all")return!0;const K=new Date(se.timestamp.seconds*1e3),ie=new Date;switch(P.value.dateRange){case"today":return K.toDateString()===ie.toDateString();case"last7days":const Ue=new Date(ie);return Ue.setDate(ie.getDate()-7),K>=Ue;case"last30days":const Ge=new Date(ie);return Ge.setDate(ie.getDate()-30),K>=Ge;case"specific":if(!P.value.date)return!0;const Pt=new Date(P.value.date);return K.toDateString()===Pt.toDateString()}})()));Dn(n,async()=>{const se=new Set;if(n.value.forEach(pe=>{pe.creator&&!C.value[pe.creator]&&se.add(pe.creator)}),se.size!==0)try{const pe=Array.from(se).map(async K=>{const ie=Es(An,"users"),Ue=cs(ie,ls("__name__","==",K)),Ge=await Yu(Ue);return{uid:K,snapshot:Ge}});(await Promise.all(pe)).forEach(({uid:K,snapshot:ie})=>{ie.forEach(Ue=>{const Ge=Ue.data();C.value[K]=Ge.nickname})})}catch(pe){console.error("Error fetching user nicknames:",pe)}});const j=se=>{o.value=se.target.files[0],o.value?c.value=o.value.name:c.value=""},ce=se=>{p.value=se.target.files[0]},le=async se=>{const pe="dknmcj1qj",re="our_memo_preset",K=new FormData;K.append("file",se),K.append("upload_preset",re),l.value="Uploading...";try{const ie=await fetch(`https://api.cloudinary.com/v1_1/${pe}/image/upload`,{method:"POST",body:K});if(!ie.ok)throw new Error(`Cloudinary upload failed with status: ${ie.status}`);const Ue=await ie.json();return l.value="",Ue.secure_url}catch(ie){return console.error("Cloudinary upload failed",ie),l.value="Upload failed!",null}},R=async()=>{if(!s.value){alert("Please write a memo before adding.");return}let se=null;if(o.value){if(l.value="Uploading...",se=await le(o.value),!se){l.value="Upload failed!";return}l.value="Upload successful!"}await e.dispatch("addMemo",{content:s.value,imageUrl:se,tags:m.value,creator:Gt.currentUser.uid}),E()},E=()=>{r.value=!1,s.value="",o.value=null,c.value="",l.value="",m.value=[],i.value&&(i.value.value="")},A=se=>{e.dispatch("deleteMemo",se)},T=se=>{h.value=se.id,d.value=se.content,_.value=se.tags?[...se.tags]:[]},w=async se=>{let pe=se;if(p.value){l.value="Uploading new photo...";const re=await le(p.value);if(!re){l.value="Upload failed!";return}pe=re}e.dispatch("editMemo",{id:h.value,content:d.value,tags:_.value,imageUrl:pe,creator:Gt.currentUser.uid}),b()},b=()=>{h.value=null,d.value="",p.value=null,_.value=[]},v=(se,pe)=>{let re=pe==="new"?m.value:_.value;const K=re.indexOf(se);K>-1?re.splice(K,1):re.length<es?re.push(se):alert(`You can select a maximum of ${es} hashtags.`)};return Dn(P,se=>{console.log("Filters updated:",se)},{deep:!0}),Gl(()=>{e.dispatch("fetchMemos")}),qi(()=>{}),(se,pe)=>(he(),_e("div",RC,[Qe(oy),x("div",SC,[pe[3]||(pe[3]=x("h2",null,"Memos",-1)),x("button",{onClick:pe[0]||(pe[0]=re=>r.value=!0),class:"newMemoButton"}," Create New Memo "),r.value?(he(),_e("div",PC,[x("div",CC,[Dr(x("textarea",{"onUpdate:modelValue":pe[1]||(pe[1]=re=>s.value=re),placeholder:"Write a new memo...",class:"memoInputTextarea"},null,512),[[Or,s.value]])]),x("div",kC,[x("input",{type:"file",onChange:j,ref_key:"fileInput",ref:i,accept:"image/*",id:"fileInput"},null,544),x("label",DC,Fe(c.value||"Select an Image"),1)]),l.value?(he(),_e("p",OC,Fe(l.value),1)):zt("",!0),x("div",NC,[x("h4",null,"Add Hashtags (max "+Fe(es)+"):"),x("div",VC,[(he(!0),_e(rt,null,Sn(D.value,re=>(he(),Ts(_a,{key:re,tag:re,isSelected:m.value.includes(re),isDisabled:m.value.length>=es&&!m.value.includes(re),onClick:K=>v(re,"new")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),x("div",xC,[x("button",{onClick:R,disabled:!s.value,class:"baseButton addMemoButton"}," Add Memo ",8,MC),x("button",{onClick:E,class:"baseButton cancelButton"},"Cancel")])])):zt("",!0),x("div",LC,[(he(!0),_e(rt,null,Sn($.value,re=>(he(),_e("div",{key:re.id,class:"memo-card"},[h.value!==re.id?(he(),_e("div",FC,[re.imageUrl?(he(),_e("div",UC,[x("img",{src:re.imageUrl,alt:"Memo Image",class:"memo-photo"},null,8,BC)])):zt("",!0),x("div",$C,[x("p",null,Fe(re.content),1),x("div",jC,[x("div",qC,[x("span",HC,"By: "+Fe(C.value[re.creator]||"..."),1),x("small",null,Fe(L(re.timestamp)),1)]),x("div",WC,[(he(!0),_e(rt,null,Sn(re.tags,K=>(he(),_e("span",{key:K,class:"memoTag"},"#"+Fe(K),1))),128))])]),x("div",KC,[x("button",{onClick:K=>T(re),class:"editButton"},"Edit",8,GC),x("button",{onClick:K=>A(re.id),class:"deleteButton"},"Delete",8,zC)])])])):(he(),_e("div",QC,[Dr(x("textarea",{"onUpdate:modelValue":pe[2]||(pe[2]=K=>d.value=K),class:"editTextarea"},null,512),[[Or,d.value]]),x("div",YC,[x("input",{type:"file",onChange:ce,ref_for:!0,ref:"editingFileInput",accept:"image/*",id:"editFileInput"},null,544),x("label",JC,Fe(p.value?p.value.name:"Select a new image"),1)]),l.value?(he(),_e("p",XC,Fe(l.value),1)):zt("",!0),x("div",ZC,[x("h4",null,"Edit Hashtags (max "+Fe(es)+"):"),x("div",ek,[(he(!0),_e(rt,null,Sn(D.value,K=>(he(),Ts(_a,{key:K,tag:K,isSelected:_.value.includes(K),isDisabled:_.value.length>=es&&!_.value.includes(K),onClick:ie=>v(K,"edit")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),x("div",tk,[x("button",{onClick:K=>w(re.imageUrl),class:"saveButton"},"Save",8,nk),x("button",{onClick:b,class:"cancelButton"},"Cancel")])]))]))),128))])])]))}},sk=Wr(rk,[["__scopeId","data-v-45131e1d"]]),ik=t=>t?(t.toDate?t.toDate():new Date(t)).toLocaleString():"";const ok={class:"page-container"},ak={class:"sectionContainer planSectionContainer"},ck={key:1,class:"planInputForm"},lk={class:"planInput"},uk={class:"hashtagSelector"},hk={class:"hashtagButtons"},dk={class:"planList"},fk={key:0},pk={key:0,class:"planDisplayMode"},mk={class:"planMeta"},gk={class:"planCreator"},_k={class:"planActions"},yk=["onClick"],vk=["onClick"],Ek=["onClick"],Tk={key:1,class:"planEditMode"},Ik={class:"hashtagSelector"},wk={class:"hashtagButtons"},Ak={class:"planEditActions"},bk=["onClick"],Rk={key:1},lp="our_cozy_shared_space_alpha",ts=4,Sk={__name:"planSection",setup(t){const e=so(),n=Ie(null),r=Ie([]),s=Ie({});let i=null;const o=Ie(""),c=Ie(null),l=Ie(""),h=Ie(!1),d=Ie(["Family","Friends","Travel","Event","Work","Home","Food","Fun","Important","Reminder"]),p=Ie([]),m=Ie([]),_=(T,w)=>{let b=w==="new"?p.value:m.value;const v=b.indexOf(T);v>-1?b.splice(v,1):b.length<ts?b.push(T):alert(`You can select a maximum of ${ts} hashtags.`)},C=async()=>{if(o.value.trim()===""){alert("Plan text is required!");return}if(!Gt.currentUser){alert("You must be logged in to add a plan.");return}try{await H_(Es(An,"plans"),{text:o.value,createdAt:new Date,creatorId:Gt.currentUser.uid,sharedSpaceId:lp,hashtags:p.value,completed:!1}),o.value="",p.value=[],h.value=!1}catch(T){console.error("Error adding document to Firestore: ",T),alert("Failed to add plan. Check console for details.")}},D=()=>{o.value="",p.value=[],h.value=!1},P=T=>{c.value=T.id,l.value=T.text,m.value=T.hashtags?[...T.hashtags]:[]},L=async T=>{if(l.value.trim()===""){alert("Edited plan text is required!");return}if(!Gt.currentUser){alert("You must be logged in to edit a plan.");return}try{const w=or(An,"plans",T);await Dl(w,{text:l.value,hashtags:m.value,creatorId:Gt.currentUser.uid}),$()}catch(w){console.error("Error updating plan: ",w),alert("Failed to update plan. Check console for details.")}},$=()=>{c.value=null,l.value="",m.value=[]},H=async(T,w)=>{const b=or(An,"plans",T);try{await Dl(b,{completed:w})}catch(v){console.error("Error updating plan completion: ",v),alert("Failed to update plan. Check console for details.")}},j=async T=>{if(!Gt.currentUser){alert("You must be logged in to delete a plan.");return}if(confirm("Are you sure you want to delete this plan?")){const w=or(An,"plans",T);try{await q_(w)}catch(b){console.error("Error deleting plan: ",b),alert("Failed to delete plan. Check console for details.")}}},ce=T=>{const w=new Date(T);return w.setHours(0,0,0,0),w},le=T=>{const w=new Date(T);return w.setHours(23,59,59,999),w},R=(T,w)=>{if(i&&i(),!w){r.value=[];return}let b=cs(Es(An,"plans"),ls("sharedSpaceId","==",lp));T.hashtags&&T.hashtags.length>0&&(b=cs(b,ls("hashtags","array-contains-any",T.hashtags)));const{dateRange:v,date:se}=T;let pe=null,re=null;if(v==="today")pe=ce(new Date),re=le(new Date);else if(v==="last7days"){const K=new Date;pe=ce(new Date(K.setDate(K.getDate()-6))),re=le(new Date)}else if(v==="last30days"){const K=new Date;pe=ce(new Date(K.setDate(K.getDate()-29))),re=le(new Date)}else if(v==="specific"&&se){const K=new Date(se);pe=ce(K),re=le(K)}pe&&re&&(b=cs(b,ls("createdAt",">=",Ye.fromDate(pe)),ls("createdAt","<=",Ye.fromDate(re)))),b=cs(b,HS("createdAt","desc")),i=W_(b,K=>{const ie=[];K.forEach(Ue=>{const Ge=Ue.data();ie.push({id:Ue.id,...Ge,hashtags:Ge.hashtags||[]})}),r.value=ie},K=>{console.error("Error listening to plans: ",K),alert("Failed to load plans. Check console for details.")})};Dn(r,async()=>{const T=new Set;if(r.value.forEach(w=>{w.creatorId&&!s.value[w.creatorId]&&T.add(w.creatorId)}),T.size!==0)try{const w=Array.from(T).map(v=>Yu(cs(Es(An,"users"),ls("__name__","==",v))));(await Promise.all(w)).forEach(v=>{v.forEach(se=>{const pe=se.data();s.value[se.id]=pe.nickname})})}catch(w){console.error("Error fetching user nicknames:",w)}}),eE(()=>{const T=e.state.filterSettings,w=Gt.currentUser;w?(n.value=w.uid,R(T,w.uid)):(n.value=null,i&&i(),r.value=[])}),qi(()=>{i&&i()});const A=ht(()=>{const T=e.state.filterSettings;return T.hashtags.length===0?r.value:r.value.filter(w=>T.hashtags.every(b=>w.hashtags.includes(b)))});return(T,w)=>(he(),_e("div",ok,[Qe(oy),x("section",ak,[w[6]||(w[6]=x("h2",null,"Our Plans",-1)),h.value?zt("",!0):(he(),_e("button",{key:0,onClick:w[0]||(w[0]=b=>h.value=!0),class:"newPlanButton"}," + New Plan ")),h.value?(he(),_e("div",ck,[w[4]||(w[4]=x("h3",null,"Add a New Plan",-1)),x("div",lk,[Dr(x("textarea",{"onUpdate:modelValue":w[1]||(w[1]=b=>o.value=b),placeholder:"Write a new plan..."},null,512),[[Or,o.value]])]),x("div",uk,[x("h4",null,"Add Hashtags (max "+Fe(ts)+"):"),x("div",hk,[(he(!0),_e(rt,null,Sn(d.value,b=>(he(),Ts(_a,{key:b,tag:b,isSelected:p.value.includes(b),isDisabled:p.value.length>=ts&&!p.value.includes(b),onClick:v=>_(b,"new")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),x("div",{class:"planFormActions"},[x("button",{onClick:C},"Add Plan"),x("button",{onClick:D,class:"cancelButton"},"Cancel")])])):zt("",!0),x("div",dk,[w[5]||(w[5]=x("h3",null,"Existing Plans:",-1)),A.value.length?(he(),_e("ul",fk,[(he(!0),_e(rt,null,Sn(A.value,b=>(he(),_e("li",{key:b.id,class:Kt({editing:c.value===b.id,"plan-completed":b.completed})},[c.value!==b.id?(he(),_e("div",pk,[x("p",null,Fe(b.text),1),x("div",mk,[x("small",null,Fe(Cr(ik)(b.createdAt)),1),x("span",gk," by "+Fe(s.value[b.creatorId]||"..."),1),(he(!0),_e(rt,null,Sn(b.hashtags,v=>(he(),_e("span",{key:v,class:"planTag"}," #"+Fe(v),1))),128))]),x("div",_k,[b.creatorId===n.value?(he(),_e("button",{key:0,onClick:v=>H(b.id,!b.completed),class:"completeButton"},Fe(b.completed?"Uncomplete":"Complete"),9,yk)):zt("",!0),b.creatorId===n.value?(he(),_e("button",{key:1,onClick:v=>P(b),class:"editButton"}," Edit ",8,vk)):zt("",!0),b.creatorId===n.value?(he(),_e("button",{key:2,onClick:v=>j(b.id),class:"deleteButton"}," Delete ",8,Ek)):zt("",!0)])])):(he(),_e("div",Tk,[Dr(x("textarea",{"onUpdate:modelValue":w[2]||(w[2]=v=>l.value=v),class:"editTextarea"},null,512),[[Or,l.value]]),x("div",Ik,[x("h4",null,"Edit Hashtags (max "+Fe(ts)+"):"),x("div",wk,[(he(!0),_e(rt,null,Sn(d.value,v=>(he(),Ts(_a,{key:v,tag:v,isSelected:m.value.includes(v),isDisabled:m.value.length>=ts&&!m.value.includes(v),onClick:se=>_(v,"edit")},null,8,["tag","isSelected","isDisabled","onClick"]))),128))])]),x("div",Ak,[x("button",{onClick:v=>L(b.id),class:"saveButton"},"Save",8,bk),x("button",{onClick:w[3]||(w[3]=v=>$()),class:"cancelButton"},"Cancel")])]))],2))),128))])):(he(),_e("p",Rk,'No plans yet! Be the first to add one by clicking "New Plan".'))])])]))}},Pk=Wr(Sk,[["__scopeId","data-v-561c98a8"]]);const Ck={class:"user-setup-container"},kk={class:"nickname-card"},Dk=["disabled"],Ok={__name:"setNickname",setup(t){const e=Ie(""),n=Ie(!1),r=pu(),s=async()=>{if(!e.value||n.value)return;n.value=!0;const i=Gt.currentUser;if(!i){console.error("No user authenticated. Cannot save nickname."),n.value=!1;return}try{const o=or(An,"users",i.uid);await GS(o,{nickname:e.value,createdAt:new Date}),console.log("Nickname saved successfully for user:",i.uid),r.push("/")}catch(o){console.error("Error saving nickname:",o),alert("Failed to save nickname. Please try again.")}finally{n.value=!1}};return(i,o)=>(he(),_e("div",Ck,[x("div",kk,[o[1]||(o[1]=x("h2",null,"Welcome!",-1)),o[2]||(o[2]=x("p",null,"Please choose a nickname to use in the shared space.",-1)),x("form",{onSubmit:on(s,["prevent"])},[Dr(x("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),type:"text",placeholder:"Enter your nickname",required:"",minlength:"3",maxlength:"20"},null,512),[[Or,e.value]]),x("button",{type:"submit",disabled:n.value},Fe(n.value?"Saving...":"Save Nickname"),9,Dk)],32)])]))}},Nk=Wr(Ok,[["__scopeId","data-v-9965df87"]]),Vk=[{path:"/",name:"Home",component:sC,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:hC,meta:{requiresAuth:!1}},{path:"/memos",name:"Memos",component:sk,meta:{requiresAuth:!0}},{path:"/plans",name:"Plans",component:Pk,meta:{requiresAuth:!0}},{path:"/set-nickname",name:"SetNickname",component:Nk,meta:{requiresAuth:!0}}],ay=Q0({history:A0(),routes:Vk});ay.beforeEach((t,e,n)=>{const r=t.matched.some(i=>i.meta.requiresAuth),s=hu().currentUser;r&&!s?n("/login"):!r&&s?n("/"):n()});const th=zE(eC);th.use(ay);th.use(WP,iy);th.mount("#app");
