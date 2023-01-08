import{u as te,a as x,O as le,b as oe,l as z,W as ae,c as ne}from"./app-3b1c3224.js";import{r as L,h as C,c as se,u as re,L as ie,a8 as ce,o as ue,n as de,j as o,a9 as U,z as ve,K as he,i as pe}from"./framework-35149b8f.js";function fe(t){if(Array.isArray(t)){for(var e=0,l=Array(t.length);e<t.length;e++)l[e]=t[e];return l}else return Array.from(t)}var j=!1;if(typeof window<"u"){var Q={get passive(){j=!0}};window.addEventListener("testPassive",null,Q),window.removeEventListener("testPassive",null,Q)}var V=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),w=[],M=!1,P=-1,S=void 0,H=void 0,q=function(e){return w.some(function(l){return!!(l.options.allowTouchMove&&l.options.allowTouchMove(e))})},O=function(e){var l=e||window.event;return q(l.target)||l.touches.length>1?!0:(l.preventDefault&&l.preventDefault(),!1)},me=function(e){if(H===void 0){var l=!!e&&e.reserveScrollBarGap===!0,a=window.innerWidth-document.documentElement.clientWidth;l&&a>0&&(H=document.body.style.paddingRight,document.body.style.paddingRight=a+"px")}S===void 0&&(S=document.body.style.overflow,document.body.style.overflow="hidden")},ye=function(){H!==void 0&&(document.body.style.paddingRight=H,H=void 0),S!==void 0&&(document.body.style.overflow=S,S=void 0)},ge=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},we=function(e,l){var a=e.targetTouches[0].clientY-P;return q(e.target)?!1:l&&l.scrollTop===0&&a>0||ge(l)&&a<0?O(e):(e.stopPropagation(),!0)},Le=function(e,l){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!w.some(function(n){return n.targetElement===e})){var a={targetElement:e,options:l||{}};w=[].concat(fe(w),[a]),V?(e.ontouchstart=function(n){n.targetTouches.length===1&&(P=n.targetTouches[0].clientY)},e.ontouchmove=function(n){n.targetTouches.length===1&&we(n,e)},M||(document.addEventListener("touchmove",O,j?{passive:!1}:void 0),M=!0)):me(l)}},Se=function(){V?(w.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),M&&(document.removeEventListener("touchmove",O,j?{passive:!1}:void 0),M=!1),P=-1):ye(),w=[]};const He="eJyNVt1S2kAUfhUm1wYG9MoXaG/6BB2nEyFKOvx0IOqFw4z/yk+FCooFpoIWtVNBbVUkIH2Z7C656it0QxJJstmkFzCT/c75zs9+5yTrTICZ1/9EQYzxzDwDem2w20M3lXH3DpQOlPoeM8OEkwmRT4hpZv79QmaGCSwLosXpjSD6YGEffK46GMf5VJwTIoGlWHItHOVSoj8qxmNm93eahQ8+bqLrPKiPrCzrTJTnInxKze5Mgo2b8W0H/j7GRunYyjJ5ak3A5A2/dpWNGhqU0VZ/6m07pXqD50vYyMKTfRwL1XbsNDSYzlcfjVvXJgLjmZ6/0R940gelL6YSCIDKMc5t4bzAyznKPU0JbKce3nI/r1QfcJFKeQQP23YaEqZXlC2j5oN2c2rTsn3YzYFOFd1cmqpzNaL3t1PSpGT013j27q9DZ70jyc8dnJ39ahwxKhOqP8vSkfzSQBWTMmyn9PybPTAsgqMCuh+YSrCe0qu47S9hjFvj08k4j9PVxgpWbmFh01SQh5mb3rHAwMUdPD0EjWul9aRK7qigqUQTDZ4g9EOCzeHfYQH+auFHcLAHij3LlPw/C2vjsORmWU54oy2nuE9R6m5SV5yTDKYUDl6U1clFVrlEmCdWqPLzFElX1OUX9PvAnxd03MZLRh6YpvdDkLUB1EsI+X2wMgLDbVgsydJ3E0eItQFUjlm/ninYzSs19f1gcMyyNsCFIzh5Y3Rrmi3s3QPJNPOYKsg6GrhQhgzKgz0sRwsZrs4KkVJQb2aRSwth4l6wwlFrw+1eVCs8CuPHHpRKlovBrKwZcY6Lf9GVRS08IUFM/nZlUc8C5jZAz1UjmgjgWRtmTYsMp2IDXDMh41ND6um9JqYH1IhYp3zJcGmeS4XJ4TOoSw30cO5dud6hibV1OqyA23TIgzKQygRHiLUBbtMhDy5Qc5PgmMUcFoDKMYcnrNpVzk8JjjnWBji3NS1yiQiXigQwvIphIZngYmw4GY8L5OfXRLzSpTodw6I2/uOrnXFh26PX6tZvDrGPvddmwHUTTWKpr/T7AfiWty4jAvOoFD/Ekx8Fx+p0zIe/r+D2LmUrvzIRX7bUlixkMpl/OzQUeQ==";const B=()=>o(z,{name:"close"},()=>o("path",{d:"m925.468 822.294-303.27-310.288L925.51 201.674c34.683-27.842 38.3-75.802 8.122-107.217-30.135-31.37-82.733-34.259-117.408-6.463L512.001 399.257 207.777 87.993C173.1 60.197 120.504 63.087 90.369 94.456c-30.179 31.415-26.561 79.376 8.122 107.217L401.8 512.005l-303.27 310.29c-34.724 27.82-38.34 75.846-8.117 107.194 30.135 31.437 82.729 34.327 117.408 6.486L512 624.756l304.177 311.22c34.68 27.84 87.272 24.95 117.408-6.487 30.223-31.348 26.56-79.375-8.118-107.195z"}));B.displayName="CloseIcon";const N=()=>o(z,{name:"heading"},()=>o("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));N.displayName="HeadingIcon";const J=()=>o(z,{name:"heart"},()=>o("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));J.displayName="HeartIcon";const W=()=>o(z,{name:"history"},()=>o("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));W.displayName="HistoryIcon";const X=()=>o(z,{name:"title"},()=>o("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));X.displayName="TitleIcon";const ze={},Te=300,E=5,be={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},Ce="search-pro-history-results",y=te(Ce,[]),Me=()=>({history:y,addHistory:t=>{y.value.length<E?y.value=[t,...y.value]:y.value=[t,...y.value.slice(0,E-1)]},removeHistory:t=>{y.value=[...y.value.slice(0,t),...y.value.slice(t+1)]}}),Oe=L(He),De=C(()=>JSON.parse(ae(Oe.value))),b=(t,e)=>{const l=t.toLowerCase(),a=e.toLowerCase(),n=[];let r=0,v=0;const h=(s,p=!1)=>{let i="";v===0?i=s.length>20?`… ${s.slice(-20)}`:s:p?i=s.length+v>100?`${s.slice(0,100-v)}… `:s:i=s.length>20?`${s.slice(0,20)} … ${s.slice(-20)}`:s,i&&n.push(i),v+=i.length,p||(n.push(["strong",e]),v+=e.length,v>=100&&n.push(" …"))};let f=l.indexOf(a,r);if(f===-1)return null;for(;f>=0;){const s=f+a.length;if(h(t.slice(r,f)),r=s,v>100)break;f=l.indexOf(a,r)}return v<100&&h(t.slice(r),!0),n},K=t=>t.reduce((e,{type:l})=>e+(l==="title"?50:l==="heading"?20:l==="custom"?10:1),0),Ie=(t,e)=>{var l;const a={};for(const[n,r]of Object.entries(e)){const v=((l=e[n.replace(/\/[^\\]*$/,"")])==null?void 0:l.title)||"",h=`${v?`${v} > `:""}${r.title}`,f=b(r.title,t);f&&(a[h]=[...a[h]||[],{type:"title",path:n,display:f}]),r.customFields&&Object.entries(r.customFields).forEach(([s,p])=>{p.forEach(i=>{const c=b(i,t);c&&(a[h]=[...a[h]||[],{type:"custom",path:n,index:s,display:c}])})});for(const s of r.contents){const p=b(s.header,t);p&&(a[h]=[...a[h]||[],{type:"heading",path:n+(s.slug?`#${s.slug}`:""),display:p}]);for(const i of s.contents){const c=b(i,t);c&&(a[h]=[...a[h]||[],{type:"content",header:s.header,path:n+(s.slug?`#${s.slug}`:""),display:c}])}}}return Object.keys(a).sort((n,r)=>K(a[n])-K(a[r])).map(n=>({title:n,contents:a[n]}))},Re=t=>{const e=x(),l=L([]),a=C(()=>De.value[e.value]),n=ne(r=>{l.value=r?Ie(r,a.value):[]},Te);return ve([t,e],()=>{n(t.value)}),l};var Ye=se({name:"SearchResult",props:{query:{type:String,required:!0}},emits:{close:()=>!0,updateQuery:t=>!0},setup(t,{emit:e}){const l=re(),a=ie(),n=x(),r=le(be),{history:v,addHistory:h,removeHistory:f}=Me(),s=ce(t,"query"),p=Re(s),i=L(0),c=L(0),Y=L(),D=C(()=>p.value.length>0),I=C(()=>p.value[i.value]||null),G=()=>{i.value=i.value>0?i.value-1:p.value.length-1,c.value=I.value.contents.length-1},Z=()=>{i.value=i.value<p.value.length-1?i.value+1:0,c.value=0},$=()=>{c.value<I.value.contents.length-1?c.value=c.value+1:Z()},_=()=>{c.value>0?c.value=c.value-1:G()},k=u=>u.map(d=>pe(d)?d:o(d[0],d[1])),A=u=>{if(u.type==="custom"){const d=ze[u.index]||"$content",[g,T=""]=he(d)?d[n.value].split("$content"):d.split("$content");return k([g,...u.display,T])}return k(u.display)},R=()=>{i.value=0,c.value=0,e("updateQuery",""),e("close")};return ue(()=>{oe("keydown",u=>{if(D.value){if(u.key==="ArrowUp")_();else if(u.key==="ArrowDown")$();else if(u.key==="Enter"){const d=I.value.contents[c.value];a.path!==d.path&&(h(d),l.push(d.path),R())}}}),Le(Y.value,{reserveScrollBarGap:!0})}),de(()=>{Se()}),()=>o("div",{class:["search-pro-result",{empty:s.value===""?v.value.length===0:!D.value}],ref:Y},s.value===""?v.value.length?o("ul",{class:"search-pro-result-list"},o("li",{class:"search-pro-result-list-item"},[o("div",{class:"search-pro-result-title"},r.value.history),v.value.map((u,d)=>o(U,{to:u.path,class:["search-pro-result-item",{active:c.value===d}],onClick:()=>{console.log("click"),R()}},()=>[o(W,{class:"search-pro-result-type"}),o("div",{class:"search-pro-result-content"},[u.type==="content"&&u.header?o("div",{class:"content-header"},u.header):null,o("div",A(u))]),o("button",{class:"search-pro-close-icon",onClick:g=>{g.preventDefault(),g.stopPropagation(),f(d)}},o(B))]))])):r.value.emptyHistory:D.value?o("ul",{class:"search-pro-result-list"},p.value.map(({title:u,contents:d},g)=>{const T=i.value===g;return o("li",{class:["search-pro-result-list-item",{active:T}]},[o("div",{class:"search-pro-result-title"},u||"Documentation"),d.map((m,ee)=>{const F=T&&c.value===ee;return o(U,{to:m.path,class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{h(m),R()}},()=>[m.type==="content"?null:o(m.type==="title"?X:m.type==="heading"?N:J,{class:"search-pro-result-type"}),o("div",{class:"search-pro-result-content"},[m.type==="content"&&m.header?o("div",{class:"content-header"},m.header):null,o("div",A(m))])])})])})):r.value.emptyResult)}});export{Ye as default};
