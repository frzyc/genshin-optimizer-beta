"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[647],{15678:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(93433),i=t(61889),a=t(90388),l=t(68870),o=t(79406),c=t(50765),s=t(91839),u=t(75545),f=t(80184);function d(e){var n=e.selectedKeys,t=e.onChange,d=c._.slice(0,6),h=c._.slice(6),v=n.filter((function(e){return d.includes(e)})),x=n.filter((function(e){return h.includes(e)}));return(0,f.jsxs)(i.ZP,{container:!0,spacing:1,children:[(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(s.Z,{fullWidth:!0,value:v,onChange:function(e,n){return t([].concat((0,r.Z)(x),(0,r.Z)(n)))},sx:{height:"100%"},children:d.map((function(e){return(0,f.jsx)(a.Z,{size:"small",value:e,children:(0,f.jsxs)(l.Z,{display:"flex",gap:1,alignItems:"center",children:[u.ZP[e],o.ZP.getArtStr(e)]})},e)}))})}),(0,f.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(s.Z,{fullWidth:!0,value:x,onChange:function(e,n){return t([].concat((0,r.Z)(v),(0,r.Z)(n)))},sx:{height:"100%"},children:h.map((function(e){return(0,f.jsx)(a.Z,{size:"small",value:e,children:(0,f.jsxs)(l.Z,{display:"flex",gap:1,alignItems:"center",children:[u.ZP[e],o.ZP.getArtStr(e)]})},e)}))})})]})}},31038:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(93433),i=t(1413),a=t(45987),l=t(53174),o=t(54483),c=t(63204),s=t(14361),u=t(13967),f=t(47047),d=t(94198),h=t(20890),v=t(68870),x=t(72791),p=t(22020),Z=t(947),y=t(22315),m=t(42320),g=t(12759),j=t(24351),b=t(50921),k=t(46956),w=t(610),E=t(68244),I=t(2380),P=t(80184),S=["value","onChange","defaultText","defaultIcon","placeholderText","labelText","showDefault","showInventory","showEquipped","filter","disable"];function C(e){var n=e.value,t=e.onChange,C=e.defaultText,M=void 0===C?"":C,A=e.defaultIcon,_=void 0===A?"":A,K=e.placeholderText,N=void 0===K?"":K,q=e.labelText,G=void 0===q?"":q,O=e.showDefault,T=void 0!==O&&O,V=e.showInventory,z=void 0!==V&&V,F=e.showEquipped,D=void 0!==F&&F,W=e.filter,B=void 0===W?function(){return!0}:W,L=e.disable,R=void 0===L?function(){return!1}:L,H=(0,a.Z)(e,S),U=(0,p.$)(["ui","artifact","charNames_gen"]).t,$=(0,u.Z)(),Q=(0,x.useContext)(y.t).database,X=(0,m.Z)((function(){return Z.Z.getAll}),[]),J=(0,x.useMemo)((function(){return X&&(0,b.zU)(Q,X)}),[Q,X]),Y=Q.chars.keys.filter((function(e){return(null===X||void 0===X?void 0:X[e])&&B(X[e],e)})).sort(),ee=(0,x.useCallback)((function(e){switch(e){case"Equipped":return U("artifact:filterLocation.currentlyEquipped");case"Inventory":return U("artifact:filterLocation.inventory");case"":return M;default:return U("charNames_gen:".concat(e))}}),[M,U]),ne=(0,x.useCallback)((function(e){var n;switch(e){case"Equipped":return(0,P.jsx)(o.G,{icon:l.caW});case"Inventory":return(0,P.jsx)(c.Z,{});case"":return _;default:return(0,P.jsx)(I.Z,{src:null===(n=X[e])||void 0===n?void 0:n.thumbImgSide,sx:{pr:1}})}}),[_,X]),te=(0,x.useMemo)((function(){return J&&function(e,n,t,i,a,l){if(!n)return[];var o=[];i&&o.push({value:"",label:t("")});a&&o.push({value:"Inventory",label:t("Inventory")});l&&o.push({value:"Equipped",label:t("Equipped")});var c=e.filter((0,k.C)({element:(0,r.Z)(j.N),weaponType:(0,r.Z)(j.yd),favorite:"yes",name:""},n)).map((function(e){return{value:e,label:t(e)}})),s=e.filter((0,k.C)({element:(0,r.Z)(j.N),weaponType:(0,r.Z)(j.yd),favorite:"no",name:""},n)).map((function(e){return{value:e,label:t(e)}}));return o.concat(c).concat(s)}(Y,J,ee,T,z,D)}),[J,Y,T,z,D,ee]);return X&&te?(0,P.jsx)(d.Z,(0,i.Z)({autoHighlight:!0,options:te,clearIcon:n?void 0:"",getOptionLabel:function(e){return e.label},onChange:function(e,n,r){return("change"!==e.type||"clear"!==r)&&t(n?n.value:"")},isOptionEqualToValue:function(e,n){return e.value===n.value},getOptionDisabled:function(e){return R(e.value)},value:{value:n,label:ee(n)},renderInput:function(e){return(0,P.jsx)(E.Z,(0,i.Z)((0,i.Z)({},e),{},{label:G,placeholder:N,startAdornment:ne(n),hasValue:!!n}))},renderOption:function(e,t){var r="Equipped"!==t.value&&"Inventory"!==t.value&&""!==t.value&&Q.states.getWithInit("charMeta_".concat(t.value),g.B).favorite;return(0,P.jsx)(w.Z,{value:t.value?t.value:"default",image:ne(t.value),text:(0,P.jsx)(x.Suspense,{fallback:(0,P.jsx)(f.Z,{variant:"text",width:100}),children:(0,P.jsx)(h.Z,{variant:"inherit",noWrap:!0,children:ee(t.value)})}),theme:$,isSelected:n===t.value,addlElement:(0,P.jsxs)(P.Fragment,{children:[r&&(0,P.jsx)(v.Z,{display:"flex",flexGrow:1}),r&&(0,P.jsx)(s.Z,{sx:{ml:1,mr:-.5}})]}),props:e},t.value?t.value:"default")}},H)):(0,P.jsx)(f.Z,{height:50})}},40020:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(63204),i=t(20890),a=t(22020),l=t(947),o=t(42320),c=t(80184);function s(e){var n=e.location,t=(0,a.$)("ui").t,s=(0,o.Z)((function(){return l.Z.get(null!==n&&void 0!==n?n:"")}),[n]);return(0,c.jsx)(i.Z,{component:"span",children:null!==s&&void 0!==s&&s.name?s.nameWIthIcon:(0,c.jsxs)("span",{children:[(0,c.jsx)(r.Z,{sx:{verticalAlign:"text-bottom"}})," ",t("inventory")]})})}},2380:function(e,n,t){var r=(0,t(93457).Z)("img")((function(e){var n=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:n.spacing(-3),marginLeft:n.spacing(-1.25),marginRight:n.spacing(-1),marginBottom:n.spacing(-1)}}));n.Z=r},55221:function(e,n,t){var r=t(1413),i=t(45987),a=t(53174),l=t(54483),o=t(68870),c=t(96106),s=t(80184),u=["className"];n.Z=function(e){var n=e.className,t=(0,i.Z)(e,u);return(0,s.jsx)(c.Z,(0,r.Z)((0,r.Z)({placement:"top"},t),{},{className:n,children:(0,s.jsx)(o.Z,{component:"span",sx:{cursor:"help"},children:(0,s.jsx)(l.G,{icon:a.sqG})})}))}},610:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1413),i=t(23786),a=t(57064),l=t(49900),o=t(80184);function c(e){var n=e.value,t=e.image,c=void 0===t?"":t,s=e.text,u=e.theme,f=e.isSelected,d=e.addlElement,h=e.props;return(0,o.jsxs)(i.Z,(0,r.Z)((0,r.Z)({value:n},h),{},{children:[(0,o.jsx)(a.Z,{children:c}),(0,o.jsx)(l.Z,{primaryTypographyProps:{style:{fontWeight:f?u.typography.fontWeightMedium:u.typography.fontWeightRegular}},children:s}),d&&d]}),n)}},901:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(25617),a=t(60393),l=t(80184);function o(e){var n=e.value,t=e.max,o=void 0===t?1:t,c=e.valid,s="number"===typeof n?["roll".concat((0,a.uZ)(Math.floor(n/o*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,r.Z)(s,2),f=u[0],d=u[1];return n>o&&(c=!1),c||(f="error"),(0,l.jsx)(i.Z,{color:f,children:d})}},68244:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),i=t(45987),a=t(13967),l=t(58165),o=t(80184),c=["hasValue","startAdornment","InputProps","sx"];function s(e){var n=e.hasValue,t=e.startAdornment,s=e.InputProps,u=e.sx,f=(0,i.Z)(e,c),d=(0,a.Z)();return(0,o.jsx)(l.Z,(0,r.Z)((0,r.Z)({},f),{},{variant:"filled",color:n?"success":"primary",hiddenLabel:!f.label,type:"search",InputProps:(0,r.Z)((0,r.Z)({},s),{},{startAdornment:t}),InputLabelProps:{style:{color:d.palette.text.primary}},sx:(0,r.Z)((0,r.Z)({},u),{},{"& .MuiFilledInput-root":{backgroundColor:n?d.palette.success.main:d.palette.primary.main,paddingTop:f.label?void 0:0,paddingBottom:0},"& .MuiFilledInput-root.Mui-focused":{backgroundColor:n?d.palette.success.light:d.palette.primary.light},"& .MuiFilledInput-root:hover":{backgroundColor:n?d.palette.success.dark:d.palette.primary.dark},"& .MuiFilledInput-root:before":{border:"none"},"& .MuiFilledInput-root.Mui-disabled:before":{border:"none"},"& .MuiFilledInput-root:after":{border:"none"},"& .MuiFilledInput-root:hover:not(.Mui-disabled):before":{border:"none"},"& input[type=search]::-ms-clear":{display:"none",width:0,height:0},"& input[type=search]::-ms-reveal":{display:"none",width:0,height:0},"& input[type=search]::-webkit-search-decoration":{display:"none"},"& input[type=search]::-webkit-search-cancel-button":{display:"none"},"& input[type=search]::-webkit-search-results-button":{display:"none"},"& input[type=search]::-webkit-search-results-decoration":{display:"none"}})}))}},72838:function(e,n,t){t.d(n,{N:function(){return X},Z:function(){return $}});var r,i,a,l,o=t(93433),c=t(30168),s=t(29439),u=t(53174),f=t(54483),d=t(40117),h=t(62002),v=t(63204),x=t(66647),p=t(68870),Z=t(47047),y=t(20890),m=t(13400),g=t(81918),j=t(39504),b=t(2199),k=t(40165),w=t(24518),E=t(72791),I=t(22020),P=t(95614),S=t(71310),C=t(31038),M=t(40020),A=t(91702),_=t(20005),K=t(55221),N=t(901),q=t(25617),G=t(10157),O=t(75545),T=t(98620),V=t(31148),z=t(22315),F=t(79406),D=t(63372),W=t(42320),B=t(50765),L=t(60393),R=t(80184),H=(0,E.lazy)((function(){return Promise.all([t.e(219),t.e(213)]).then(t.bind(t,66585))})),U=new Set(B._);function $(e){var n,t,o,L=e.artifactId,$=e.artifactObj,X=e.onClick,J=e.onDelete,Y=e.mainStatAssumptionLevel,ee=void 0===Y?0:Y,ne=e.effFilter,te=void 0===ne?U:ne,re=e.editor,ie=void 0!==re&&re,ae=e.canExclude,le=void 0!==ae&&ae,oe=e.canEquip,ce=void 0!==oe&&oe,se=e.extraButtons,ue=(0,I.$)(["artifact","ui"]).t,fe=(0,E.useContext)(z.t).database,de=(0,D.Z)(L),he=(0,W.Z)((function(){var e;return V.y.get(null===(e=null!==$&&void 0!==$?$:de)||void 0===e?void 0:e.setKey)}),[$,de]),ve=!$,xe=(0,E.useState)(!1),pe=(0,s.Z)(xe,2),Ze=pe[0],ye=pe[1],me=(0,E.useCallback)((function(){return ye(!1)}),[ye]),ge=(0,E.useCallback)((function(){return ve&&ye(!0)}),[ve,ye]),je=(0,E.useCallback)((function(e){return(0,R.jsx)(x.Z,{onClick:function(){return L&&(null===X||void 0===X?void 0:X(L))},sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[X,L]),be=(0,E.useCallback)((function(e){return(0,R.jsx)(p.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})}),[]),ke=null!==$&&void 0!==$?$:de,we=(0,E.useMemo)((function(){if(!ke)return{currentEfficiency:0,maxEfficiency:0,currentEfficiency_:0,maxEfficiency_:0};var e=T.ZP.getArtifactEfficiency(ke,te),n=e.currentEfficiency,t=e.maxEfficiency,r=T.ZP.getArtifactEfficiency(ke,new Set(B._));return{currentEfficiency:n,maxEfficiency:t,currentEfficiency_:r.currentEfficiency,maxEfficiency_:r.maxEfficiency}}),[ke,te]),Ee=we.currentEfficiency,Ie=we.maxEfficiency,Pe=we.currentEfficiency_,Se=we.maxEfficiency_;if(!ke)return null;var Ce=ke.id,Me=ke.lock,Ae=ke.slotKey,_e=ke.rarity,Ke=ke.level,Ne=ke.mainStatKey,qe=ke.substats,Ge=ke.exclude,Oe=ke.location,Te=void 0===Oe?"":Oe,Ve=Math.max(Math.min(ee,4*_e),Ke),ze=F.ZP.unit(Ne),Fe=0!==Ie,De=null===he||void 0===he?void 0:he.getSlotName(Ae),We=null===he||void 0===he?void 0:he.getSlotDesc(Ae),Be=We&&(0,R.jsx)(K.Z,{title:(0,R.jsxs)(p.Z,{children:[(0,R.jsx)(E.Suspense,{fallback:(0,R.jsx)(Z.Z,{variant:"text",width:100}),children:(0,R.jsx)(y.Z,{variant:"h6",children:De})}),(0,R.jsx)(y.Z,{children:We})]})}),Le=null===he||void 0===he?void 0:he.setEffects,Re=he&&Le&&(0,R.jsx)(K.Z,{title:(0,R.jsx)("span",{children:Object.keys(Le).map((function(e){return(0,R.jsxs)("span",{children:[(0,R.jsx)(y.Z,{variant:"h6",children:(0,R.jsx)(q.Z,{color:"success",children:ue("artifact:setEffectNum",{setNum:e})})}),(0,R.jsx)(y.Z,{children:he.setEffectDesc(e)})]},e)}))})}),He=O.ZP[Ne];return(0,R.jsxs)(E.Suspense,{fallback:(0,R.jsx)(Z.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:[ie&&(0,R.jsx)(E.Suspense,{fallback:!1,children:(0,R.jsx)(H,{artifactIdToEdit:Ze?L:"",cancelEdit:me})}),(0,R.jsxs)(S.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,R.jsxs)(_.Z,{condition:!!X,wrapper:je,falseWrapper:be,children:[(0,R.jsxs)(p.Z,{className:"grad-".concat(_e,"star"),sx:{position:"relative",width:"100%"},children:[!X&&(0,R.jsx)(m.Z,{color:"primary",disabled:!ve,onClick:function(){return fe.arts.set(Ce,{lock:!Me})},sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:Me?(0,R.jsx)(d.Z,{}):(0,R.jsx)(h.Z,{})}),(0,R.jsxs)(p.Z,{sx:{pt:2,px:2,position:"relative",zIndex:1},children:[(0,R.jsxs)(p.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,R.jsx)(g.Z,{size:"small",label:(0,R.jsx)("strong",{children:" +".concat(Ke)}),color:T.ZP.levelVariant(Ke)}),!De&&(0,R.jsx)(Z.Z,{variant:"text",width:100}),De&&(0,R.jsx)(y.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,R.jsx)("strong",{children:De})}),!Be&&(0,R.jsx)(Z.Z,{width:10}),Be]}),(0,R.jsx)(y.Z,{color:"text.secondary",variant:"body2",children:(0,R.jsx)(P.ZP,{slotKey:Ae})}),(0,R.jsxs)(y.Z,{variant:"h6",sx:{display:"flex",alignItems:"center",gap:1},children:[He,(0,R.jsx)("span",{children:F.ZP.get(Ne)})]}),(0,R.jsx)(y.Z,{variant:"h5",children:(0,R.jsx)("strong",{children:(0,R.jsxs)(A.Z,{color:Ve!==Ke?"warning":void 0,children:[(0,F.qs)(null!==(n=T.ZP.mainStatValue(Ne,_e,Ve))&&void 0!==n?n:0,F.ZP.unit(Ne)),ze]})})}),(0,R.jsx)(G.q,{stars:_e,colored:!0})]}),(0,R.jsx)(p.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,R.jsx)(p.Z,{component:"img",src:null!==(t=null===he||void 0===he?void 0:he.slotIcons[Ae])&&void 0!==t?t:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,R.jsxs)(j.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0,width:"100%"},children:[qe.map((function(e){return!!e.value&&(0,R.jsx)(Q,{stat:e,effFilter:te,rarity:_e},e.key)})),(0,R.jsxs)(y.Z,{variant:"caption",sx:{display:"flex",gap:1,my:1},children:[(0,R.jsx)(A.Z,{color:"secondary",sx:{flexGrow:1},children:ue(r||(r=(0,c.Z)(["artifact:editor.curSubEff"])))}),(0,R.jsx)(N.Z,{value:Ee,max:900,valid:Fe}),Ee!==Pe&&(0,R.jsx)("span",{children:"/"}),Ee!==Pe&&(0,R.jsx)(N.Z,{value:Pe,max:900,valid:Fe})]}),Ee!==Ie&&(0,R.jsxs)(y.Z,{variant:"caption",sx:{display:"flex",gap:1},children:[(0,R.jsx)(A.Z,{color:"secondary",sx:{flexGrow:1},children:ue(i||(i=(0,c.Z)(["artifact:editor.maxSubEff"])))}),(0,R.jsx)(N.Z,{value:Ie,max:900,valid:Fe}),Ie!==Se&&(0,R.jsx)("span",{children:"/"}),Ie!==Se&&(0,R.jsx)(N.Z,{value:Se,max:900,valid:Fe})]}),(0,R.jsx)(p.Z,{flexGrow:1}),void 0!==ke.probability&&ke.probability>=0&&(0,R.jsxs)("strong",{children:["Probability: ",(100*ke.probability).toFixed(2),"%"]}),(0,R.jsxs)(y.Z,{color:"success.main",children:[null!==(o=null===he||void 0===he?void 0:he.name)&&void 0!==o?o:"Artifact Set"," ",Re]})]})]}),(0,R.jsxs)(p.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[ve&&ce?(0,R.jsx)(C.Z,{sx:{flexGrow:1},size:"small",showDefault:!0,defaultIcon:(0,R.jsx)(v.Z,{}),defaultText:ue("ui:inventory"),value:Te,onChange:function(e){return fe.arts.set(L,{location:e})}}):(0,R.jsx)(M.Z,{location:Te}),ve&&(0,R.jsxs)(b.Z,{sx:{height:"100%"},children:[ie&&(0,R.jsx)(k.Z,{title:(0,R.jsx)(y.Z,{children:ue(a||(a=(0,c.Z)(["artifact:edit"])))}),placement:"top",arrow:!0,children:(0,R.jsx)(w.Z,{color:"info",size:"small",onClick:ge,children:(0,R.jsx)(f.G,{icon:u.Xcf,className:"fa-fw"})})}),le&&(0,R.jsx)(k.Z,{title:(0,R.jsxs)(p.Z,{children:[(0,R.jsx)(y.Z,{children:ue(l||(l=(0,c.Z)(["artifact:excludeArtifactTip"])))}),(0,R.jsx)(y.Z,{children:(0,R.jsx)(A.Z,{color:Ge?"error":"success",children:ue("artifact:".concat(Ge?"excluded":"included"))})})]}),placement:"top",arrow:!0,children:(0,R.jsx)(w.Z,{onClick:function(){return fe.arts.set(Ce,{exclude:!Ge})},color:Ge?"error":"success",size:"small",children:(0,R.jsx)(f.G,{icon:Ge?u.gPx:u.Stf,className:"fa-fw"})})}),!!J&&(0,R.jsx)(w.Z,{color:"error",size:"small",onClick:function(){return J(Ce)},disabled:Me,children:(0,R.jsx)(f.G,{icon:u.I7k,className:"fa-fw"})}),se]})]})]})]})}function Q(e){var n,t,r,i=e.stat,a=e.effFilter,l=e.rarity,c=null!==(n=null===(t=i.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,s=i.key?T.ZP.substatValue(i.key):0,u=(0,E.useMemo)((function(){return i.key?T.ZP.getSubstatRollData(i.key,l):[]}),[i.key,l]),f=7-u.length,d="roll".concat((0,L.uZ)(c,1,6)),h=null!==(r=i.efficiency)&&void 0!==r?r:0,v=i.key&&a.has(i.key),x=(0,L.V2)(.5+h/500*.5),Z=F.ZP.getStr(i.key),m=F.ZP.unit(i.key),g=(0,E.useMemo)((function(){return(0,R.jsx)(p.Z,{display:"flex",gap:.25,height:"1.3em",sx:{opacity:v?1:.3},children:(0,o.Z)(i.rolls).sort().map((function(e,n){return(0,R.jsx)(X,{value:100*e/s,color:"roll".concat((0,L.uZ)(f+u.indexOf(e),1,6),".main")},"".concat(n).concat(e))}))})}),[v,i.rolls,s,u,f]);return(0,R.jsxs)(p.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,R.jsxs)(y.Z,{sx:{flexGrow:1},color:c?"".concat(d,".main"):"error.main",component:"span",children:[O.ZP[i.key]," ",Z,"+".concat((0,F.qs)(i.value,F.ZP.unit(i.key))).concat(m)]}),g,(0,R.jsxs)(y.Z,{sx:{opacity:x,minWidth:40,textAlign:"right"},children:[h.toFixed(),"%"]})]})}function X(e){var n=e.color,t=void 0===n?"red":n,r=e.value,i=void 0===r?50:r;return(0,R.jsx)(p.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,R.jsx)(p.Z,{sx:{width:10,height:"".concat(100-(0,L.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},44824:function(e,n,t){t.d(n,{Af:function(){return u},EM:function(){return h},OQ:function(){return c},bq:function(){return s},sZ:function(){return f},x3:function(){return d}});var r=t(37762),i=t(93433),a=t(24351),l=t(98620),o=t(44217),c=["rarity","level","artsetkey","efficiency","mefficiency","probability"],s=["probability"];function u(){return{artSetKeys:[],rarity:(0,i.Z)(a.En),levelLow:0,levelHigh:20,slotKeys:(0,i.Z)(a.eV),mainStatKeys:[],substats:[],location:"",exclusion:["excluded","included"],locked:["locked","unlocked"]}}var f=function(){return{filterOption:u(),ascending:!1,sortType:c[0]}};function d(e,n){return{rarity:{getValue:function(e){var n;return null!==(n=e.rarity)&&void 0!==n?n:0},tieBreaker:"level"},level:{getValue:function(e){var n;return null!==(n=e.level)&&void 0!==n?n:0},tieBreaker:"artsetkey"},artsetkey:{getValue:function(e){var n;return null!==(n=e.setKey)&&void 0!==n?n:""},tieBreaker:"level"},efficiency:{getValue:function(n){return l.ZP.getArtifactEfficiency(n,e).currentEfficiency}},mefficiency:{getValue:function(n){return l.ZP.getArtifactEfficiency(n,e).maxEfficiency}},probability:{getValue:function(e){if(!Object.keys(n).length)return 0;var t=e.probability;return void 0===t?(0,o.B)(e,n):t}}}}function h(){return{exclusion:function(e,n){return!(!n.includes("included")&&!e.exclude)&&!(!n.includes("excluded")&&e.exclude)},locked:function(e,n){return!(!n.includes("locked")&&e.lock)&&!(!n.includes("unlocked")&&!e.lock)},location:function(e,n){return!n||("Inventory"===n&&!e.location||(!("Equipped"!==n||!e.location)||n===e.location))},artSetKeys:function(e,n){return!n.length||n.includes(e.setKey)},slotKeys:function(e,n){return n.includes(e.slotKey)},mainStatKeys:function(e,n){return!n.length||n.includes(e.mainStatKey)},levelLow:function(e,n){return n<=e.level},levelHigh:function(e,n){return n>=e.level},rarity:function(e,n){return n.includes(e.rarity)},substats:function(e,n){var t,i=(0,r.Z)(n);try{var a=function(){var n=t.value;if(n&&!e.substats.some((function(e){return e.key===n})))return{v:!1}};for(i.s();!(t=i.n()).done;){var l=a();if("object"===typeof l)return l.v}}catch(o){i.e(o)}finally{i.f()}return!0}}}},44217:function(e,n,t){t.d(n,{B:function(){return j}});var r=t(29439),i=t(37762),a=t(4942),l=t(1413),o=t(93433),c=t(60393),s=t(98620),u=t(12354),f=[3,4,6],d={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},h={};function v(e,n,t,r){if(5!==e.length)for(var i=0,s=f;i<s.length;i++){var u=s[i];n[u]>0&&v([].concat((0,o.Z)(e),[u]),(0,l.Z)((0,l.Z)({},n),{},(0,a.Z)({},u,n[u]-u)),t-u,r*n[u]/t)}else(0,c.SR)(h,e,r)}v([0],{3:6,4:20,6:18},44,1),v([3],{3:3,4:20,6:18},41,1),v([4],{3:6,4:16,6:18},40,1),v([6],{3:6,4:20,6:12},38,1);for(var x=Array(6).fill(0).map((function(e,n){for(var t=[1],r=0,i=1;++r<=n;)i*=n-r+1,i/=r,t.push(i);return t})),p=[[1]],Z=function(){var e=p[p.length-1],n=Array(e.length+3).fill(0);e.forEach((function(e,t){for(var r=0,i=[0,1,2,3];r<i.length;r++){n[t+i[r]]+=e}})),p.push(n.map((function(e){return e/4})))};p.length<6;)Z();for(var y=function(){var e=g[m],n=e.reduce((function(e,n){return e+n}));e.forEach((function(e,t,r){r[t]=n,n-=e}))},m=0,g=p;m<g.length;m++)y();function j(e,n){if(e.rarity<=2)return NaN;var t=e.rarity,o=e.level,v=e.substats,Z=(0,l.Z)({},n),y=new Set(Object.keys(Z)),m=0,g=e.mainStatKey;if(g in Z){var j=4*t;if(u[t][g][j]<Z[g])return 0;delete Z[g],y.delete(g)}var b,k=(0,i.Z)(v);try{for(k.s();!(b=k.n()).done;){var w=b.value,E=w.key,I=w.value;E?y.has(E)&&(y.delete(E),Z[E]>I?Z[E]-=I:delete Z[E]):m+=1}}catch(O){k.e(O)}finally{k.f()}if(m+=4-v.length,y.size>m||Object.keys(Z).length>4)return 0;for(var P=s.ZP.rollsRemaining(o,t)-m,S=0,C=Object.entries(Z);S<C.length;S++){var M=(0,r.Z)(C[S],2),A=M[0],_=M[1];Z[A]=Math.max(Math.ceil(10*_/s.ZP.substatValue(A,t)),1)}var K=0,N=Object.entries(Z).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],a=y.has(t)?1:0,l=Math.ceil(i/10)-a;return K+=l,{target:i,filler:a,minUpgrade:l}})).reverse();if(K>P)return 0;var q=(0,a.Z)({},P,1),G=P-K;return N.forEach((function(e,n){for(var t,i,a,l=e.target,o=e.filler,c=e.minUpgrade,s={},u=c;u<=c+G;u++)for(var f=l-7*(u+o),d=f>0?p[u+o][f]:1,h=0,v=Object.entries(q);h<v.length;h++){var Z,y=(0,r.Z)(v[h],2),m=y[0],g=y[1],j=parseInt(m);if(!(j<u)){var b=(i=u,a=4-n,x[t=j][i]*Math.pow(a-1,t-i)/Math.pow(a,t)),k=j-u;s[k]=(null!==(Z=s[k])&&void 0!==Z?Z:0)+g*d*b}}q=s})),function(e,n,t){var r,a,l=null!==(r=d[e])&&void 0!==r?r:0,o=0,s={3:2,4:5,6:3},u=h[l],v=(0,i.Z)(n);try{for(v.s();!(a=v.n()).done;){var p=a.value.key;if(p){var Z=d[p];u=u[Z],s[Z]-=1}}}catch(O){v.e(O)}finally{v.f()}l&&(s[l]-=1);var y,m={3:0,4:0,6:0},g=(0,i.Z)(t);try{for(g.s();!(y=g.n()).done;){var j=y.value;m[d[j]]+=1}}catch(O){g.e(O)}finally{g.f()}var b=0;(0,c.Q1)(u,[],(function(e){return"number"===typeof e}),(function(e,n){b+=e;var t,r={3:0,4:0,6:0},a=(0,i.Z)(n);try{for(a.s();!(t=a.n()).done;){r[t.value]+=1}}catch(O){a.e(O)}finally{a.f()}var l,c=e,s=(0,i.Z)(f);try{for(s.s();!(l=s.n()).done;){var u=l.value,d=r[u],h=m[u];if(d<h)return;c*=x[d][h]}}catch(O){s.e(O)}finally{s.f()}o+=c}));var k,w=(0,i.Z)(f);try{for(w.s();!(k=w.n()).done;){var E=k.value;o/=x[s[E]][m[E]]}}catch(O){w.e(O)}finally{w.f()}return o/b}(e.mainStatKey,v,y)*Object.values(q).reduce((function(e,n){return e+n}))}},63372:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(29439),i=t(72791),a=t(22315);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,i.useContext)(a.t),t=n.database,l=(0,i.useState)(t.arts.get(e)),o=(0,r.Z)(l,2),c=o[0],s=o[1];return(0,i.useEffect)((function(){return s(t.arts.get(e))}),[t,e]),(0,i.useEffect)((function(){return e?t.arts.follow(e,s):void 0}),[e,s,t]),c}}}]);
//# sourceMappingURL=647.f5a1d54a.chunk.js.map