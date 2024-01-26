import{r}from"./react-5cc2acaa.js";import{s as c,R as S}from"./react-router-645aa604.js";import{c as v}from"./@remix-run-3dc70d10.js";/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(t){let{basename:f,children:p,future:h,window:R}=t,o=r.useRef();o.current==null&&(o.current=v({window:R,v5Compat:!0}));let e=o.current,[a,s]=r.useState({action:e.action,location:e.location}),{v7_startTransition:n}=h||{},i=r.useCallback(l=>{n&&c?c(()=>s(l)):s(l)},[s,n]);return r.useLayoutEffect(()=>e.listen(i),[e,i]),r.createElement(S,{basename:f,children:p,location:a.location,navigationType:a.action,navigator:e})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(u||(u={}));var m;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{F as B};
