import{h as X,f as Y,g as k}from"./@babel-54babf39.js";import{T as M}from"./@rc-component-8d39d47a.js";import{r}from"./react-5cc2acaa.js";import{c as W}from"./classnames-5c20d0be.js";var a={shiftX:64,adjustY:1},i={adjustX:1,shiftY:!0},t=[0,0],q={left:{points:["cr","cl"],overflow:i,offset:[-4,0],targetOffset:t},right:{points:["cl","cr"],overflow:i,offset:[4,0],targetOffset:t},top:{points:["bc","tc"],overflow:a,offset:[0,-4],targetOffset:t},bottom:{points:["tc","bc"],overflow:a,offset:[0,4],targetOffset:t},topLeft:{points:["bl","tl"],overflow:a,offset:[0,-4],targetOffset:t},leftTop:{points:["tr","tl"],overflow:i,offset:[-4,0],targetOffset:t},topRight:{points:["br","tr"],overflow:a,offset:[0,-4],targetOffset:t},rightTop:{points:["tl","tr"],overflow:i,offset:[4,0],targetOffset:t},bottomRight:{points:["tr","br"],overflow:a,offset:[0,4],targetOffset:t},rightBottom:{points:["bl","br"],overflow:i,offset:[4,0],targetOffset:t},bottomLeft:{points:["tl","bl"],overflow:a,offset:[0,4],targetOffset:t},leftBottom:{points:["br","bl"],overflow:i,offset:[-4,0],targetOffset:t}};function z(o){var e=o.children,l=o.prefixCls,f=o.id,n=o.overlayInnerStyle,v=o.className,s=o.style;return r.createElement("div",{className:W("".concat(l,"-content"),v),style:s},r.createElement("div",{className:"".concat(l,"-inner"),id:f,role:"tooltip",style:n},typeof e=="function"?e():e))}var F=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],G=function(e,l){var f=e.overlayClassName,n=e.trigger,v=n===void 0?["hover"]:n,s=e.mouseEnterDelay,w=s===void 0?0:s,m=e.mouseLeaveDelay,C=m===void 0?.1:m,O=e.overlayStyle,u=e.prefixCls,p=u===void 0?"rc-tooltip":u,T=e.children,x=e.onVisibleChange,N=e.afterVisibleChange,P=e.transitionName,V=e.animation,E=e.motion,g=e.placement,_=g===void 0?"right":g,c=e.align,D=c===void 0?{}:c,y=e.destroyTooltipOnHide,S=y===void 0?!1:y,$=e.defaultVisible,A=e.getTooltipContainer,L=e.overlayInnerStyle;e.arrowContent;var I=e.overlay,j=e.id,d=e.showArrow,R=d===void 0?!0:d,H=X(e,F),b=r.useRef(null);r.useImperativeHandle(l,function(){return b.current});var h=Y({},H);"visible"in e&&(h.popupVisible=e.visible);var B=function(){return r.createElement(z,{key:"content",prefixCls:p,id:j,overlayInnerStyle:L},I)};return r.createElement(M,k({popupClassName:f,prefixCls:p,popup:B,action:v,builtinPlacements:q,popupPlacement:_,ref:b,popupAlign:D,getPopupContainer:A,onPopupVisibleChange:x,afterPopupVisibleChange:N,popupTransitionName:P,popupAnimation:V,popupMotion:E,defaultPopupVisible:$,autoDestroy:S,mouseLeaveDelay:C,popupStyle:O,mouseEnterDelay:w,arrow:R},h),T)};const ee=r.forwardRef(G);export{z as P,ee as T};
