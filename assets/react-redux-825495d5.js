import{r as h}from"./react-dom-5c3c3723.js";import"./hoist-non-react-statics-691fe6cb.js";import{r as c,R as y}from"./react-5cc2acaa.js";import"./react-is-1aacdabe.js";import{w as g}from"./use-sync-external-store-c1aa51b6.js";function m(e){e()}let b=m;const C=e=>b=e,E=()=>b,a=c.createContext(null);function v(){return c.useContext(a)}const w=()=>{throw new Error("uSES not initialized!")};let S=w;const N=e=>{S=e},R=(e,r)=>e===r;function L(e=a){const r=e===a?v:()=>c.useContext(e);return function(t,o=R){const{store:n,subscription:i,getServerState:u}=r(),l=S(i.addNestedSub,n.getState,u||n.getState,t,o);return c.useDebugValue(l),l}}const I=L();function U(){const e=E();let r=null,s=null;return{clear(){r=null,s=null},notify(){e(()=>{let t=r;for(;t;)t.callback(),t=t.next})},get(){let t=[],o=r;for(;o;)t.push(o),o=o.next;return t},subscribe(t){let o=!0,n=s={callback:t,next:null,prev:s};return n.prev?n.prev.next=n:r=n,function(){!o||r===null||(o=!1,n.next?n.next.prev=n.prev:s=n.prev,n.prev?n.prev.next=n.next:r=n.next)}}}}const d={notify(){},get:()=>[]};function B(e,r){let s,t=d;function o(x){return l(),t.subscribe(x)}function n(){t.notify()}function i(){f.onStateChange&&f.onStateChange()}function u(){return Boolean(s)}function l(){s||(s=r?r.addNestedSub(i):e.subscribe(i),t=U())}function p(){s&&(s(),s=void 0,t.clear(),t=d)}const f={addNestedSub:o,notifyNestedSubs:n,handleChangeWrapper:i,isSubscribed:u,trySubscribe:l,tryUnsubscribe:p,getListeners:()=>t};return f}const V=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=V?c.useLayoutEffect:c.useEffect;function q({store:e,context:r,children:s,serverState:t}){const o=c.useMemo(()=>{const u=B(e);return{store:e,subscription:u,getServerState:t?()=>t:void 0}},[e,t]),n=c.useMemo(()=>e.getState(),[e]);z(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),n!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,n]);const i=r||a;return y.createElement(i.Provider,{value:o},s)}N(g.useSyncExternalStoreWithSelector);C(h.unstable_batchedUpdates);export{q as P,I as u};
