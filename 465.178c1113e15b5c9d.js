"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[465],{24991:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var l=n(9725),a=n(67732),r=n(92252),c=n(85439),i=n(36380),s=n(61391),o=n(60319),h=n(46342),Z=n(67550),d=n(7671),u=n(41075),p=n(30609),g=n(5896),m=n(83249),f=n(79906),y=n(56961),x=n(62197),C=n(85801),w=n(2784),v=n(61877),b=n(21548),P=n(73557),k=n(7300),S=n(87985),T=n(50875),X=n(46026),$=n(59236),B=n(29117),I=n(13913),N=n(51650),K=n(97856),z=n(10002),L=n(36617),G=n(82716),V=n(25434),D=n(36893),A=n(45069),M=n(1661),_=n(41015),j=n(52903);let E,H=e=>e;const F=w.lazy((()=>n.e(592).then(n.bind(n,1296)))),W={xs:1,sm:2,md:3,lg:4,xl:4},O={xs:6,sm:8,md:12,lg:16,xl:16},R=Object.keys(A.V3);function U(){const{t:e}=(0,b.$G)(["page_character","charNames_gen"]),{database:t}=(0,w.useContext)(N.t),[n,U]=(0,w.useState)((()=>t.displayCharacter.get()));(0,w.useEffect)((()=>t.displayCharacter.follow(((e,t)=>U(t)))),[t,U]);const[q,J]=(0,w.useState)(""),Q=(0,w.useDeferredValue)(q),ee=(0,w.useRef)(null),te=(0,w.useCallback)(((e,n)=>{var l;null==(l=ee.current)||l.scrollIntoView({behavior:"smooth"}),t.displayCharacter.set({pageIndex:n-1})}),[t,ee]),ne=(0,G.Z)(),le=O[ne],[ae,re]=(0,w.useState)(!1),[ce,ie]=(0,L.Z)();(0,w.useEffect)((()=>(v.ZP.send({hitType:"pageview",page:"/characters"}),t.chars.followAny(((e,t)=>("new"===t||"remove"===t)&&ie())))),[ie,t]),(0,w.useEffect)((()=>t.charMeta.followAny((e=>ie()))),[ie,t]);const se=(0,V.Z)((()=>I.Z.getAll),[]),{gender:oe}=(0,z.Z)(),he=(0,w.useCallback)((async n=>{const l=await I.Z.get(n,oe);let a=null==l?void 0:l.name;"object"==typeof a&&(a=e(`charNames_gen:${(0,D.LP)(n,oe)}`)),window.confirm(e("removeCharacter",{value:a}))&&t.chars.remove(n)}),[t,oe,e]),Ze=(0,K.Z)(),de=(0,P.s0)(),ue=(0,w.useDeferredValue)(n),pe=(0,w.useDeferredValue)(ce),{charKeyList:ge,totalCharNum:me}=(0,w.useMemo)((()=>{var e;const n=t.chars.keys.length;if(!se)return{charKeyList:[],totalCharNum:n};const{element:l,weaponType:a,sortType:r,ascending:c}=ue,i=t.chars.keys.filter((0,M.C)({element:l,weaponType:a,name:Q},(0,A.zU)(t,se))).sort((0,M.e)(null!=(e=A.V3[r])?e:[],c,(0,A._L)(t,se),["new","favorite"]));return pe&&{charKeyList:i,totalCharNum:n}}),[pe,t,se,ue,Q]),{weaponType:fe,element:ye,sortType:xe,ascending:Ce,pageIndex:we=0}=n,{charKeyListToShow:ve,numPages:be,currentPageIndex:Pe}=(0,w.useMemo)((()=>{const e=Math.ceil(ge.length/le),t=(0,_.uZ)(we,0,e-1);return{charKeyListToShow:ge.slice(t*le,(t+1)*le),numPages:e,currentPageIndex:t}}),[ge,we,le]),ke=ge.length!==me?`${ge.length}/${me}`:`${me}`;return(0,j.BX)(Z.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,j.tZ)(w.Suspense,{fallback:!1,children:(0,j.tZ)(F,{newFirst:!0,show:ae,onHide:()=>re(!1),onSelect:Ze})}),(0,j.tZ)(S.Z,{ref:ee,children:(0,j.BX)(d.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,j.BX)(u.ZP,{container:!0,spacing:1,children:[(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(B.Z,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({weaponType:e}),value:fe,size:"small"})}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)($.Z,{sx:{height:"100%"},onChange:e=>t.displayCharacter.set({element:e}),value:ye,size:"small"})}),(0,j.tZ)(u.ZP,{item:!0,flexGrow:1,children:(0,j.tZ)(p.Z,{autoFocus:!0,value:q,onChange:e=>J(e.target.value),label:e("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(X.Z,{sx:{height:"100%"},sortKeys:R,value:xe,onChange:e=>t.displayCharacter.set({sortType:e}),ascending:Ce,onChangeAsc:e=>t.displayCharacter.set({ascending:e})})})]}),(0,j.BX)(u.ZP,{container:!0,alignItems:"flex-end",children:[(0,j.tZ)(u.ZP,{item:!0,flexGrow:1,children:(0,j.tZ)(g.Z,{count:be,page:Pe+1,onChange:te})}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(Y,{numShowing:ve.length,total:ke,t:e})})]})]})}),(0,j.tZ)(m.Z,{fullWidth:!0,onClick:()=>re(!0),color:"info",startIcon:(0,j.tZ)(r.Z,{}),children:e(E||(E=H`addNew`))}),(0,j.tZ)(w.Suspense,{fallback:(0,j.tZ)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,j.tZ)(u.ZP,{container:!0,spacing:1,columns:W,children:ve.map((t=>(0,j.tZ)(u.ZP,{item:!0,xs:1,children:(0,j.tZ)(T.Z,{characterKey:t,onClick:()=>de(`${t}`),footer:(0,j.BX)(j.HY,{children:[(0,j.tZ)(y.Z,{}),(0,j.BX)(Z.Z,{sx:{py:1,px:2,display:"flex",gap:1,justifyContent:"space-between"},children:[(0,j.tZ)(k.Z,{placement:"top",title:(0,j.tZ)(x.Z,{children:e("tabs.talent")}),children:(0,j.tZ)(C.Z,{onClick:()=>de(`${t}/talent`),children:(0,j.tZ)(c.Z,{})})}),(0,j.tZ)(k.Z,{placement:"top",title:(0,j.tZ)(x.Z,{children:e("tabs.teambuffs")}),children:(0,j.tZ)(C.Z,{onClick:()=>de(`${t}/teambuffs`),children:(0,j.tZ)(i.Z,{})})}),(0,j.tZ)(k.Z,{placement:"top",title:(0,j.tZ)(x.Z,{children:e("tabs.optimize")}),children:(0,j.tZ)(C.Z,{onClick:()=>de(`${t}/optimize`),children:(0,j.tZ)(s.Z,{})})}),(0,j.tZ)(k.Z,{placement:"top",title:(0,j.tZ)(x.Z,{children:e("tabs.theorycraft")}),children:(0,j.tZ)(C.Z,{onClick:()=>de(`${t}/theorycraft`),children:(0,j.tZ)(o.Z,{})})}),(0,j.tZ)(y.Z,{orientation:"vertical"}),(0,j.tZ)(k.Z,{placement:"top",title:(0,j.tZ)(x.Z,{children:e("delete")}),children:(0,j.tZ)(C.Z,{color:"error",onClick:()=>he(t),children:(0,j.tZ)(h.Z,{})})})]})]})})},t)))})}),be>1&&(0,j.tZ)(S.Z,{children:(0,j.BX)(d.Z,{sx:{display:"flex",gap:1},children:[(0,j.tZ)(m.Z,{onClick:()=>re(!0),color:"info",sx:{minWidth:0},children:(0,j.tZ)(x.Z,{children:(0,j.tZ)(a.G,{icon:l.r8p,className:"fa-fw"})})}),(0,j.BX)(u.ZP,{container:!0,alignItems:"flex-end",sx:{flexGrow:1},children:[(0,j.tZ)(u.ZP,{item:!0,flexGrow:1,children:(0,j.tZ)(g.Z,{count:be,page:Pe+1,onChange:te})}),(0,j.tZ)(u.ZP,{item:!0,children:(0,j.tZ)(Y,{numShowing:ve.length,total:ke,t:e})})]})]})})]})}function Y({numShowing:e,total:t,t:n}){return(0,j.tZ)(x.Z,{color:"text.secondary",children:(0,j.BX)(b.cC,{t:n,i18nKey:"showingNum",count:e,value:t,children:["Showing ",(0,j.tZ)("b",{children:{count:e}})," out of ",{value:t}," Characters"]})})}},10618:(e,t,n)=>{n.d(t,{X:()=>a});var l=n(41015);function a(e){return(t,n)=>{const a=t.length;return a===e.length?[n]:1===a&&t[0]===n?[...e]:[...new Set((0,l.nh)(t,n))]}}}}]);