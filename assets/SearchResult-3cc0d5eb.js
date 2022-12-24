import{u as te,a as V,M as oe,b as ae,s as b,L as le,c as ne}from"./app-c94329b8.js";import{r as L,h as k,c as se,u as re,L as ie,a8 as ce,o as ue,n as de,j as a,a9 as E,z as ve}from"./framework-35149b8f.js";function he(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}else return Array.from(t)}var z=!1;if(typeof window<"u"){var P={get passive(){z=!0}};window.addEventListener("testPassive",null,P),window.removeEventListener("testPassive",null,P)}var U=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],M=!1,B=-1,H=void 0,S=void 0,q=function(e){return w.some(function(o){return!!(o.options.allowTouchMove&&o.options.allowTouchMove(e))})},$=function(e){var o=e||window.event;return q(o.target)||o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)},pe=function(e){if(S===void 0){var o=!!e&&e.reserveScrollBarGap===!0,l=window.innerWidth-document.documentElement.clientWidth;o&&l>0&&(S=document.body.style.paddingRight,document.body.style.paddingRight=l+"px")}H===void 0&&(H=document.body.style.overflow,document.body.style.overflow="hidden")},fe=function(){S!==void 0&&(document.body.style.paddingRight=S,S=void 0),H!==void 0&&(document.body.style.overflow=H,H=void 0)},ye=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},me=function(e,o){var l=e.targetTouches[0].clientY-B;return q(e.target)?!1:o&&o.scrollTop===0&&l>0||ye(o)&&l<0?$(e):(e.stopPropagation(),!0)},ge=function(e,o){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(n){return n.targetElement===e})){var l={targetElement:e,options:o||{}};w=[].concat(he(w),[l]),U?(e.ontouchstart=function(n){n.targetTouches.length===1&&(B=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&me(n,e)},M||(document.addEventListener("touchmove",$,z?{passive:!1}:void 0),M=!0)):pe(o)}},we=function(){U?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),M&&(document.removeEventListener("touchmove",$,z?{passive:!1}:void 0),M=!1),B=-1):fe(),w=[]};const Le="eJyrVtJXsoISJZklOalKVkpPty992rr9+ZopL9ZteDqh4+XsNiUdpeT8vJLUvJJiJavo2NraWgCcxhjN";const F=()=>a(b,{name:"close"},()=>a("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));F.displayName="CloseIcon";const Y=()=>a(b,{name:"heading"},()=>a("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));Y.displayName="HeadingIcon";const W=()=>a(b,{name:"heart"},()=>a("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));W.displayName="HeartIcon";const Z=()=>a(b,{name:"history"},()=>a("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));Z.displayName="HistoryIcon";const Q=()=>a(b,{name:"title"},()=>a("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));Q.displayName="TitleIcon";const He={},Se=300,J=5,be={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Ce="search-pro-history-results",m=te(Ce,[]),Te=()=>({history:m,addHistory:t=>{m.value.length<J?m.value=[t,...m.value]:m.value=[t,...m.value.slice(0,J-1)]},removeHistory:t=>{m.value=[...m.value.slice(0,t),...m.value.slice(t+1)]}}),ke=L(Le),Me=k(()=>JSON.parse(le(ke.value))),T=(t,e)=>{const o=t.toLowerCase(),l=e.toLowerCase(),n=[];let r=0,v=0;const h=(s,p=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:p?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&n.push(i),v+=i.length,p||(n.push(["strong",e]),v+=e.length,v>=100&&n.push(" …"))};let f=o.indexOf(l,r);if(f===-1)return null;for(;f>=0;){const s=f+l.length;if(h(t.slice(r,f)),r=s,v>100)break;f=o.indexOf(l,r)}return v<100&&h(t.slice(r),!0),n},j=t=>t.reduce((e,{type:o})=>e+(o==="title"?50:o==="heading"?20:o==="custom"?10:1),0),$e=(t,e)=>{var o;const l={};for(const[n,r]of Object.entries(e)){const v=((o=e[n.replace(/\/[^\\]*$/,"")])==null?void 0:o.title)||"",h=`${v?`${v} > `:""}${r.title}`,f=T(r.title,t);f&&(l[h]=[...l[h]||[],{type:"title",path:n,display:f}]),r.customFields&&Object.entries(r.customFields).forEach(([s,p])=>{p.forEach(i=>{const c=T(i,t);c&&(l[h]=[...l[h]||[],{type:"custom",path:n,index:s,display:c}])})});for(const s of r.contents){const p=T(s.header,t);p&&(l[h]=[...l[h]||[],{type:"heading",path:n+(s.slug?`#${s.slug}`:""),display:p}]);for(const i of s.contents){const c=T(i,t);c&&(l[h]=[...l[h]||[],{type:"content",header:s.header,path:n+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(l).sort((n,r)=>j(l[n])-j(l[r])).map(n=>({title:n,contents:l[n]}))},Ae=t=>{const e=V(),o=L([]),l=k(()=>Me.value[e.value]),n=ne(r=>{o.value=r?$e(r,l.value):[]},Se);return ve([t,e],()=>{n(t.value)}),o};var ze=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const o=re(),l=ie(),n=V(),r=oe(be),{history:v,addHistory:h,removeHistory:f}=Te(),s=ce(t,"query"),p=Ae(s),i=L(0),c=L(0),D=L(),A=k(()=>p.value.length>0),O=k(()=>p.value[i.value]||null),X=()=>{i.value=i.value>0?i.value-1:p.value.length-1,c.value=O.value.contents.length-1},_=()=>{i.value=i.value<p.value.length-1?i.value+1:0,c.value=0},G=()=>{c.value<O.value.contents.length-1?c.value=c.value+1:_()},K=()=>{c.value>0?c.value=c.value-1:X()},x=u=>u.map(d=>typeof d=="string"?d:a(d[0],d[1])),I=u=>{if(u.type==="custom"){const d=He[u.index]||"$content",[g,C=""]=typeof d=="object"?d[n.value].split("$content"):d.split("$content");return x([g,...u.display,C])}return x(u.display)},R=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{ae("keydown",u=>{if(A.value){if(u.key==="ArrowUp")K();else if(u.key==="ArrowDown")G();else if(u.key==="Enter"){const d=O.value.contents[c.value];l.path!==d.path&&(h(d),o.push(d.path),R())}}}),ge(D.value,{reserveScrollBarGap:!0})}),de(()=>{we()}),()=>a("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!A.value}],ref:D},s.value===""?v.value.length?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>a(E,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),R()}},()=>[a(Z,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?a("div",{class:"content-header"},u.header):null,a("div",I(u))]),a("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},a(F))]))])):r.value.emptyHistory:A.value?a("ul",{class:"search-pro-result-list"},p.value.map(({title:u,contents:d},g)=>{const C=i.value===g;return a("li",{class:["search-pro-result-list-item",{active:C}]},[a("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((y,ee)=>{const N=C&&c.value===ee;return a(E,{to:y.path,class:["search-pro-result-item",{active:N,"aria-selected":N}],onClick:()=>{h(y),R()}},()=>[y.type==="content"?null:a(y.type==="title"?Q:y.type==="heading"?Y:W,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[y.type==="content"&&y.header?a("div",{class:"content-header"},y.header):null,a("div",I(y))])])})])})):r.value.emptyResult)}});export{ze as default};
