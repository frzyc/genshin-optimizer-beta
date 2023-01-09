"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[227,334],{32510:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(6620),l=n(52322);const i=(0,r.Z)((0,l.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay")},107:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(31461),l=n(7896),i=n(2784),o=n(6277),a=n(69075),c=n(47591),s=n(65992),d=n(43853),u=n(7342),Z=n(17377),h=n(69222),f=n(15672);function p(e){return(0,f.Z)("MuiAlert",e)}const m=(0,h.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]);var x=n(85801),v=n(6620),g=n(52322);const y=(0,v.Z)((0,g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),b=(0,v.Z)((0,g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),S=(0,v.Z)((0,g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),k=(0,v.Z)((0,g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var C=n(80592);const w=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],A=(0,s.ZP)(Z.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,u.Z)(n.color||n.severity)}`]]}})((({theme:e,ownerState:t})=>{const n="light"===e.palette.mode?c._j:c.$n,r="light"===e.palette.mode?c.$n:c._j,i=t.color||t.severity;return(0,l.Z)({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${i}StandardBg`]:r(e.palette[i].light,.9),[`& .${m.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&"outlined"===t.variant&&{color:e.vars?e.vars.palette.Alert[`${i}Color`]:n(e.palette[i].light,.6),border:`1px solid ${(e.vars||e).palette[i].light}`,[`& .${m.icon}`]:e.vars?{color:e.vars.palette.Alert[`${i}IconColor`]}:{color:e.palette[i].main}},i&&"filled"===t.variant&&(0,l.Z)({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${i}FilledColor`],backgroundColor:e.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:"dark"===e.palette.mode?e.palette[i].dark:e.palette[i].main,color:e.palette.getContrastText(e.palette[i].main)}))})),$=(0,s.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),B=(0,s.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),M=(0,s.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),P={success:(0,g.jsx)(y,{fontSize:"inherit"}),warning:(0,g.jsx)(b,{fontSize:"inherit"}),error:(0,g.jsx)(S,{fontSize:"inherit"}),info:(0,g.jsx)(k,{fontSize:"inherit"})},E=i.forwardRef((function(e,t){var n,i,c,s,Z,h;const f=(0,d.Z)({props:e,name:"MuiAlert"}),{action:m,children:v,className:y,closeText:b="Close",color:S,components:k={},componentsProps:E={},icon:I,iconMapping:j=P,onClose:z,role:X="alert",severity:N="success",slotProps:L={},slots:R={},variant:W="standard"}=f,D=(0,r.Z)(f,w),G=(0,l.Z)({},f,{color:S,severity:N,variant:W}),V=(e=>{const{variant:t,color:n,severity:r,classes:l}=e,i={root:["root",`${t}${(0,u.Z)(n||r)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,a.Z)(i,p,l)})(G),F=null!=(n=null!=(i=R.closeButton)?i:k.CloseButton)?n:x.Z,_=null!=(c=null!=(s=R.closeIcon)?s:k.CloseIcon)?c:C.Z,O=null!=(Z=L.closeButton)?Z:E.closeButton,H=null!=(h=L.closeIcon)?h:E.closeIcon;return(0,g.jsxs)(A,(0,l.Z)({role:X,elevation:0,ownerState:G,className:(0,o.Z)(V.root,y),ref:t},D,{children:[!1!==I?(0,g.jsx)($,{ownerState:G,className:V.icon,children:I||j[N]||P[N]}):null,(0,g.jsx)(B,{ownerState:G,className:V.message,children:v}),null!=m?(0,g.jsx)(M,{ownerState:G,className:V.action,children:m}):null,null==m&&z?(0,g.jsx)(M,{ownerState:G,className:V.action,children:(0,g.jsx)(F,(0,l.Z)({size:"small","aria-label":b,title:b,color:"inherit",onClick:z},O,{children:(0,g.jsx)(_,(0,l.Z)({fontSize:"small"},H))}))}):null]}))}))},23119:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(31461),l=n(7896),i=n(2784),o=n(6277),a=n(69075),c=n(7342),s=n(65992),d=n(43853),u=n(8250),Z=n(98659),h=n(62197),f=n(69222),p=n(15672);function m(e){return(0,p.Z)("MuiLink",e)}const x=(0,f.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var v=n(2818),g=n(47591);const y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=({theme:e,ownerState:t})=>{const n=(e=>y[e]||e)(t.color),r=(0,v.DW)(e,`palette.${n}`,!1)||t.color,l=(0,v.DW)(e,`palette.${n}Channel`);return"vars"in e&&l?`rgba(${l} / 0.4)`:(0,g.Fq)(r,.4)};var S=n(52322);const k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],C=(0,s.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,c.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,l.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:b({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}}))),w=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:s,color:h="primary",component:f="a",onBlur:p,onFocus:x,TypographyClasses:v,underline:g="always",variant:b="inherit",sx:w}=n,A=(0,r.Z)(n,k),{isFocusVisibleRef:$,onBlur:B,onFocus:M,ref:P}=(0,u.Z)(),[E,I]=i.useState(!1),j=(0,Z.Z)(t,P),z=(0,l.Z)({},n,{color:h,component:f,focusVisible:E,underline:g,variant:b}),X=(e=>{const{classes:t,component:n,focusVisible:r,underline:l}=e,i={root:["root",`underline${(0,c.Z)(l)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,a.Z)(i,m,t)})(z);return(0,S.jsx)(C,(0,l.Z)({color:h,className:(0,o.Z)(X.root,s),classes:v,component:f,onBlur:e=>{B(e),!1===$.current&&I(!1),p&&p(e)},onFocus:e=>{M(e),!0===$.current&&I(!0),x&&x(e)},ref:j,ownerState:z,variant:b,sx:[...Object.keys(y).includes(h)?[]:[{color:h}],...Array.isArray(w)?w:[w]]},A))}))},85213:(e,t,n)=>{n.d(t,{A:()=>f,Z:()=>h});var r=n(79906),l=n(33927),i=n(67550),o=n(62197),a=n(2784),c=n(21548),s=n(7300),d=n(83673),u=n(21845),Z=n(52903);function h({children:e,artifactSheet:t,numInSet:n=5}){return(0,Z.tZ)(s.Z,{placement:"top",title:(0,Z.tZ)(f,{artifactSheet:t,numInSet:n}),disableInteractive:!0,children:e})}function f({artifactSheet:e,numInSet:t=5}){return(0,Z.tZ)(a.Suspense,{fallback:(0,Z.tZ)(r.Z,{variant:"rectangular",width:100,height:100}),children:(0,Z.tZ)(p,{artifactSheet:e,numInSet:t})})}function p({artifactSheet:e,numInSet:t=5}){const{t:n}=(0,c.$G)("sheet");return(0,Z.tZ)(l.Z,{spacing:2,sx:{p:1},children:Object.keys(e.setEffects).map((r=>(0,Z.BX)(i.Z,{sx:{opacity:parseInt(r)<=t?1:.5},children:[(0,Z.tZ)(o.Z,{children:(0,Z.tZ)(d.Z,{color:"success",children:n(`${r}set`)})}),(0,Z.tZ)(o.Z,{children:(0,Z.tZ)(u.v,{ns:`artifact_${e.key}_gen`,key18:`setEffects.${r}`})})]},r)))})}},12121:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(41075),l=n(92794),i=n(67550),o=n(19807),a=n(69190),c=n(29432),s=n(52972),d=n(52903);function u({selectedKeys:e,onChange:t}){const n=a._.slice(0,6),u=a._.slice(6),Z=e.filter((e=>n.includes(e))),h=e.filter((e=>u.includes(e)));return(0,d.BX)(r.ZP,{container:!0,spacing:1,children:[(0,d.tZ)(r.ZP,{item:!0,xs:12,md:6,children:(0,d.tZ)(c.Z,{fullWidth:!0,value:Z,onChange:(e,n)=>t([...h,...n]),sx:{height:"100%"},children:n.map((e=>(0,d.tZ)(l.Z,{size:"small",value:e,children:(0,d.BX)(i.Z,{display:"flex",gap:1,alignItems:"center",children:[s.Z[e],o.ZP.getArtStr(e)]})},e)))})}),(0,d.tZ)(r.ZP,{item:!0,xs:12,md:6,children:(0,d.tZ)(c.Z,{fullWidth:!0,value:h,onChange:(e,n)=>t([...Z,...n]),sx:{height:"100%"},children:u.map((e=>(0,d.tZ)(l.Z,{size:"small",value:e,children:(0,d.BX)(i.Z,{display:"flex",gap:1,alignItems:"center",children:[s.Z[e],o.ZP.getArtStr(e)]})},e)))})})]})}},82334:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(31461),l=n(9725),i=n(67732),o=n(67550),a=n(7300),c=n(52903);const s=["className"],d=e=>{let{className:t}=e,n=(0,r.Z)(e,s);return(0,c.tZ)(a.Z,Object.assign({placement:"top"},n,{className:t,children:(0,c.tZ)(o.Z,{component:"span",sx:{cursor:"help"},children:(0,c.tZ)(i.G,{icon:l.sqG})})}))}},45220:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(83673),l=n(41015),i=n(52903);function o({value:e,max:t=1,valid:n}){let[o,a]="number"==typeof e?[`roll${(0,l.uZ)(Math.floor(e/t*10)-4,1,6)}`,e.toFixed()+"%"]:["secondary",e];return n||(o="error"),(0,i.tZ)(r.Z,{color:o,children:a})}},85563:(e,t,n)=>{n.d(t,{N:()=>K,Z:()=>T});var r=n(9725),l=n(67732),i=n(54278),o=n(40535),a=n(75213),c=n(67550),s=n(79906),d=n(62197),u=n(85801),Z=n(66198),h=n(7671),f=n(38553),p=n(99479),m=n(83249),x=n(2784),v=n(21548),g=n(85213),y=n(9510),b=n(67937),S=n(43007),k=n(37923),C=n(2344),w=n(57889),A=n(82334),$=n(45220),B=n(71765),M=n(52972),P=n(54878),E=n(74637),I=n(51650),j=n(19807),z=n(53163),X=n(25434),N=n(69190),L=n(36893),R=n(41015),W=n(52903);let D,G,V,F,_=e=>e;const O=(0,x.lazy)((()=>Promise.all([n.e(592),n.e(794),n.e(49)]).then(n.bind(n,52267)))),H=new Set(N._);function T({artifactId:e,artifactObj:t,onClick:n,onDelete:R,mainStatAssumptionLevel:T=0,effFilter:K=H,editorProps:J,canExclude:Q=!1,canEquip:U=!1,extraButtons:Y}){var ee,te,ne;const{t:re}=(0,v.$G)(["artifact","ui"]),{database:le}=(0,x.useContext)(I.t),ie=(0,z.Z)(e),oe=(0,X.Z)((()=>{var e;return E.y.get(null==(e=null!=t?t:ie)?void 0:e.setKey)}),[t,ie]),ae=(0,x.useCallback)((t=>e&&le.arts.set(e,{location:t})),[le,e]),ce=!t,[se,de]=(0,x.useState)(!1),ue=(0,x.useCallback)((()=>de(!1)),[de]),Ze=(0,x.useCallback)((()=>ce&&de(!0)),[ce,de]),he=(0,x.useCallback)((t=>(0,W.tZ)(a.Z,{onClick:()=>e&&(null==n?void 0:n(e)),sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:t})),[n,e]),fe=(0,x.useCallback)((e=>(0,W.tZ)(c.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})),[]),pe=null!=t?t:ie,{currentEfficiency:me,maxEfficiency:xe,currentEfficiency_:ve,maxEfficiency_:ge}=(0,x.useMemo)((()=>{if(!pe)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};const{currentEfficiency:e,maxEfficiency:t}=P.ZP.getArtifactEfficiency(pe,K),{currentEfficiency:n,maxEfficiency:r}=P.ZP.getArtifactEfficiency(pe,new Set(N._));return{currentEfficiency:e,maxEfficiency:t,currentEfficiency_:n,maxEfficiency_:r}}),[pe,K]);if(!pe)return null;const{id:ye,lock:be,slotKey:Se,rarity:ke,level:Ce,mainStatKey:we,substats:Ae,exclude:$e,location:Be=""}=pe,Me=Math.max(Math.min(T,4*ke),Ce),Pe=j.ZP.unit(we),Ee=0!==xe,Ie=null==oe?void 0:oe.getSlotName(Se),je=null==oe?void 0:oe.getSlotDesc(Se),ze=je&&(0,W.tZ)(A.Z,{title:(0,W.BX)(c.Z,{children:[(0,W.tZ)(x.Suspense,{fallback:(0,W.tZ)(s.Z,{variant:"text",width:100}),children:(0,W.tZ)(d.Z,{variant:"h6",children:Ie})}),(0,W.tZ)(d.Z,{children:je})]})}),Xe=L.Kj.find((e=>we.startsWith(e))),Ne=Xe?(0,W.tZ)(C.Z,{color:Xe,children:M.Z[we]}):M.Z[we];return(0,W.BX)(x.Suspense,{fallback:(0,W.tZ)(s.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[J&&(0,W.tZ)(x.Suspense,{fallback:!1,children:(0,W.tZ)(O,Object.assign({artifactIdToEdit:se?e:"",cancelEdit:ue},J))}),(0,W.BX)(b.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,W.BX)(w.Z,{condition:!!n,wrapper:he,falseWrapper:fe,children:[(0,W.BX)(c.Z,{className:`grad-${ke}star`,sx:{position:"relative",width:"100%"},children:[!n&&(0,W.tZ)(u.Z,{color:"primary",disabled:!ce,onClick:()=>le.arts.set(ye,{lock:!be}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:be?(0,W.tZ)(i.Z,{}):(0,W.tZ)(o.Z,{})}),(0,W.BX)(c.Z,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[(0,W.BX)(c.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,W.tZ)(Z.Z,{size:"small",label:(0,W.tZ)("strong",{children:` +${Ce}`}),color:P.ZP.levelVariant(Ce)}),!Ie&&(0,W.tZ)(s.Z,{variant:"text",width:100}),Ie&&(0,W.tZ)(d.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,W.tZ)("strong",{children:Ie})}),!ze&&(0,W.tZ)(s.Z,{width:10}),ze]}),(0,W.tZ)(d.Z,{color:"text.secondary",variant:"body2",children:(0,W.tZ)(y.ZP,{slotKey:Se})}),(0,W.BX)(d.Z,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[Ne,(0,W.tZ)("span",{children:j.ZP.get(we)})]}),(0,W.tZ)(d.Z,{variant:"h5",children:(0,W.tZ)("strong",{children:(0,W.BX)(C.Z,{color:Me!==Ce?"warning":void 0,children:[(0,j.qs)(null!=(ee=P.ZP.mainStatValue(we,ke,Me))?ee:0,j.ZP.unit(we)),Pe]})})}),(0,W.tZ)(B.q,{stars:ke,colored:!0})]}),(0,W.tZ)(c.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,W.tZ)(c.Z,{component:"img",src:null!=(te=null==oe?void 0:oe.slotIcons[Se])?te:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,W.BX)(h.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0,width:"100%"},children:[Ae.map((e=>!!e.value&&(0,W.tZ)(q,{stat:e,effFilter:K,rarity:ke},e.key))),(0,W.BX)(d.Z,{variant:"caption",sx:{display:"flex",gap:1,my:1},children:[(0,W.tZ)(C.Z,{color:"secondary",sx:{flexGrow:1},children:re(D||(D=_`artifact:editor.curSubEff`))}),(0,W.tZ)($.Z,{value:me,max:900,valid:Ee}),me!==ve&&(0,W.tZ)("span",{children:"/"}),me!==ve&&(0,W.tZ)($.Z,{value:ve,max:900,valid:Ee})]}),me!==xe&&(0,W.BX)(d.Z,{variant:"caption",sx:{display:"flex",gap:1},children:[(0,W.tZ)(C.Z,{color:"secondary",sx:{flexGrow:1},children:re(G||(G=_`artifact:editor.maxSubEff`))}),(0,W.tZ)($.Z,{value:xe,max:900,valid:Ee}),xe!==ge&&(0,W.tZ)("span",{children:"/"}),xe!==ge&&(0,W.tZ)($.Z,{value:ge,max:900,valid:Ee})]}),(0,W.tZ)(c.Z,{flexGrow:1}),void 0!==pe.probability&&pe.probability>=0&&(0,W.BX)("strong",{children:["Probability: ",(100*pe.probability).toFixed(2),"%"]}),(0,W.BX)(d.Z,{color:"success.main",children:[null!=(ne=null==oe?void 0:oe.name)?ne:"Artifact Set"," ",oe&&(0,W.tZ)(A.Z,{title:(0,W.tZ)(g.A,{artifactSheet:oe})})]})]})]}),(0,W.BX)(c.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,W.tZ)(c.Z,{sx:{flexGrow:1},children:ce&&U?(0,W.tZ)(S.W,{location:Be,setLocation:ae}):(0,W.tZ)(k.Z,{location:Be})}),ce&&(0,W.BX)(f.Z,{sx:{height:"100%"},children:[J&&(0,W.tZ)(p.Z,{title:(0,W.tZ)(d.Z,{children:re(V||(V=_`artifact:edit`))}),placement:"top",arrow:!0,children:(0,W.tZ)(m.Z,{color:"info",size:"small",onClick:Ze,children:(0,W.tZ)(l.G,{icon:r.Xcf,className:"fa-fw"})})}),Q&&(0,W.tZ)(p.Z,{title:(0,W.BX)(c.Z,{children:[(0,W.tZ)(d.Z,{children:re(F||(F=_`artifact:excludeArtifactTip`))}),(0,W.tZ)(d.Z,{children:(0,W.tZ)(C.Z,{color:$e?"error":"success",children:re("artifact:"+($e?"excluded":"included"))})})]}),placement:"top",arrow:!0,children:(0,W.tZ)(m.Z,{onClick:()=>le.arts.set(ye,{exclude:!$e}),color:$e?"error":"success",size:"small",children:(0,W.tZ)(l.G,{icon:$e?r.gPx:r.Stf,className:"fa-fw"})})}),!!R&&(0,W.tZ)(m.Z,{color:"error",size:"small",onClick:()=>R(ye),disabled:be,children:(0,W.tZ)(l.G,{icon:r.I7k,className:"fa-fw"})}),Y]})]})]})]})}function q({stat:e,effFilter:t,rarity:n}){var r,l,i;const o=null!=(r=null==(l=e.rolls)?void 0:l.length)?r:0,a=e.key?P.ZP.substatValue(e.key):0,s=(0,x.useMemo)((()=>e.key?P.ZP.getSubstatRollData(e.key,n):[]),[e.key,n]),u=7-s.length,Z=`roll${(0,R.uZ)(o,1,6)}`,h=null!=(i=e.efficiency)?i:0,f=e.key&&t.has(e.key),p=(0,R.V2)(.5+h/500*.5),m=j.ZP.getStr(e.key),v=j.ZP.unit(e.key),g=(0,x.useMemo)((()=>(0,W.tZ)(c.Z,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:f?1:.3},children:[...e.rolls].sort().map(((e,t)=>(0,W.tZ)(K,{value:100*e/a,color:`roll${(0,R.uZ)(u+s.indexOf(e),1,6)}.main`},`${t}${e}`)))})),[f,e.rolls,a,s,u]);return(0,W.BX)(c.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,W.BX)(d.Z,{sx:{flexGrow:1},color:o?`${Z}.main`:"error.main",component:"span",children:[M.Z[e.key]," ",m,`+${(0,j.qs)(e.value,j.ZP.unit(e.key))}${v}`]}),g,(0,W.BX)(d.Z,{sx:{opacity:p,minWidth:40,textAlign:"right"},children:[h.toFixed(),"%"]})]})}function K({color:e="red",value:t=50}){return(0,W.tZ)(c.Z,{sx:{width:7,height:"100%",bgcolor:e,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,W.tZ)(c.Z,{sx:{width:10,height:100-(0,R.uZ)(t,0,100)+"%",bgcolor:"gray"}})})}},53163:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),l=n(51650);function i(e=""){const{database:t}=(0,r.useContext)(l.t),[n,i]=(0,r.useState)(t.arts.get(e));return(0,r.useEffect)((()=>i(t.arts.get(e))),[t,e]),(0,r.useEffect)((()=>e?t.arts.follow(e,((e,t,n)=>"update"===t&&i(n))):void 0),[e,i,t]),n}}}]);