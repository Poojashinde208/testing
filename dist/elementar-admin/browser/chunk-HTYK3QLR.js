import{d as y}from"./chunk-MPVAKSUD.js";import{$ as g,Aa as d,Fb as b,Ja as c,Sc as w,da as a,ga as S,h as f,ma as s,vb as u}from"./chunk-5NFIDSHC.js";function p(r){r||(d(p),r=s(c));let t=new f(e=>r.onDestroy(e.next.bind(e)));return e=>e.pipe(g(t))}function v(r,t){let e=!t?.manualCleanup;e&&!t?.injector&&d(v);let n=e?t?.injector?.get(c)??s(c):null,h=k(t?.equal),i;t?.requireSync?i=u({kind:0},{equal:h}):i=u({kind:1,value:t?.initialValue},{equal:h});let m=r.subscribe({next:o=>i.set({kind:1,value:o}),error:o=>{if(t?.rejectErrors)throw o;i.set({kind:2,error:o})}});if(t?.requireSync&&i().kind===0)throw new a(601,!1);return n?.onDestroy(m.unsubscribe.bind(m)),w(()=>{let o=i();switch(o.kind){case 1:return o.value;case 2:throw o.error;case 0:throw new a(601,!1)}},{equal:t?.equal})}function k(r=Object.is){return(t,e)=>t.kind===1&&e.kind===1&&r(t.value,e.value)}var l="emr-admin",F=(()=>{class r{constructor(){this._document=s(y),this._window=this._document.defaultView,b(()=>{this._window!==null&&this._window.matchMedia&&this._window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{let e=this._getStoredColorScheme();e!=="light"&&e!=="dark"&&this.setColorScheme(this.getPreferredColorScheme())})})}getColorScheme(){return this._colorScheme}toggleColorScheme(){this._getStoredColorScheme()==="dark"?this.changeColorScheme("light"):this.changeColorScheme("dark")}changeColorScheme(e){this._colorScheme=e,this._setStoredColorScheme(e),this.setColorScheme(e)}_getStoredColorScheme(){if(!(typeof localStorage>"u"))return JSON.parse(localStorage.getItem(l)??"{}").colorScheme}_setStoredColorScheme(e){if(typeof localStorage>"u")return;let n=JSON.parse(localStorage.getItem(l)??"{}");n.colorScheme=e,localStorage.setItem(l,JSON.stringify(n))}getPreferredColorScheme(){let e=this._getStoredColorScheme();return e||(this._window!==null&&this._window.matchMedia&&this._window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}setColorScheme(e){this._window!==null&&this._window.matchMedia&&(e==="auto"&&this._window.matchMedia("(prefers-color-scheme: dark)").matches?(this._colorScheme="dark",this._document.documentElement.classList.add("dark")):e==="dark"?(this._colorScheme="dark",this._document.documentElement.classList.add("dark")):(this._colorScheme="light",this._document.documentElement.classList.remove("dark")))}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=S({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();export{p as a,v as b,F as c};
