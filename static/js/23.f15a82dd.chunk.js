"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[23],{36030:function(e,t,r){r.d(t,{N5:function(){return O},Y4:function(){return T},mW:function(){return C},mY:function(){return P}});var n=r(29439),a=r(1413),i=r(45987),l=r(13967),u=r(94198),o=r(58165),s=r(81918),c=r(90493),f=r(68870),y=r(79834),d=r(72791),p=r(22020),g=r(31148),m=r(72828),x=r(79406),h=r(42320),v=r(50765),Z=r(24351),K=r(610),b=r(68244),j=r(10157),k=r(75545),A=r(80184),S=["allArtifactKeysWithGrouper","selectedArtifactKeys","setArtifactKeys","getName","getImage","label"],I=["artSetKeys","setArtSetKeys"],w=["mainStatKeys","setMainStatKeys"],L=["substatKeys","setSubstatKeys"],N=["allArtifactKeysWithGrouper","selectedArtifactKey","setArtifactKey","getName","getImage","label","disable","showDefault","defaultText","defaultIcon"],W=["artSetKey","setArtSetKey","label"];function G(e){var t=e.allArtifactKeysWithGrouper,r=e.selectedArtifactKeys,n=e.setArtifactKeys,c=e.getName,f=e.getImage,y=e.label,p=(0,i.Z)(e,S),g=(0,l.Z)(),m=(0,d.useMemo)((function(){return t.map((function(e){var t=e.key,r=e.grouper;return{key:t,label:c(t),grouper:r}}))}),[t,c]);return(0,A.jsx)(u.Z,(0,a.Z)({autoHighlight:!0,multiple:!0,disableCloseOnSelect:!0,options:m,value:r.map((function(e){return{key:e,label:c(e)}})),onChange:function(e,t){n(t.map((function(e){return e.key})))},getOptionLabel:function(e){return e.label},isOptionEqualToValue:function(e,t){return e.key===t.key},renderInput:function(e){return(0,A.jsx)(o.Z,(0,a.Z)((0,a.Z)({},e),{},{label:y,variant:"filled",InputLabelProps:{style:{color:g.palette.text.primary}},color:r.length?"success":"primary",type:"search"}))},renderOption:function(e,t){return(0,A.jsx)(K.Z,{value:t.key,image:f(t.key),text:t.label,theme:g,isSelected:r.includes(t.key),props:e},t.key)},renderTags:function(e,t){return e.map((function(e,r){var n=Z.Kj.find((function(t){return e.key==="".concat(t,"_dmg_")})),i=n||void 0;return(0,d.createElement)(s.Z,(0,a.Z)((0,a.Z)({},t({index:r})),{},{key:e.key,icon:f(e.key),label:e.label,color:i}))}))}},p))}function O(e){var t=e.artSetKeys,r=e.setArtSetKeys,l=(0,i.Z)(e,I),u=(0,h.Z)((function(){return g.y.getAll}),[]),o=(0,p.$)(["artifact","artifactNames_gen"]).t;if(!u)return null;var s=Object.entries(g.y.setKeysByRarities(u)).flatMap((function(e){var t=(0,n.Z)(e,2),r=t[0];return t[1].map((function(e){return{key:e,grouper:+r}}))})).sort(_);return(0,A.jsx)(G,(0,a.Z)({allArtifactKeysWithGrouper:s,selectedArtifactKeys:t,setArtifactKeys:r,getName:function(e){return u[e].nameRaw},getImage:function(e){return u[e].defIcon},label:o("artifact:autocompleteLabels.sets"),groupBy:function(e){var t,r;return null!==(t=null===(r=e.grouper)||void 0===r?void 0:r.toString())&&void 0!==t?t:""},renderGroup:function(e){return e.group&&(0,A.jsxs)(c.Z,{component:f.Z,children:[(0,A.jsxs)(y.Z,{sx:{top:"-1em"},children:[e.group," ",(0,A.jsx)(j.q,{stars:+e.group})]},"".concat(e.group,"Header")),e.children]},e.group)}},l))}function P(e){var t=e.mainStatKeys,r=e.setMainStatKeys,n=(0,i.Z)(e,w),l=(0,p.$)("artifact").t;return(0,A.jsx)(G,(0,a.Z)({allArtifactKeysWithGrouper:v.r.map((function(e){return{key:e}})),selectedArtifactKeys:t,setArtifactKeys:r,getName:function(e){return x.ZP.getArtStr(e)},getImage:function(e){return k.ZP[e]},label:l("autocompleteLabels.mainStats")},n))}function C(e){var t=e.substatKeys,r=e.setSubstatKeys,n=(0,i.Z)(e,L),l=(0,p.$)("artifact").t;return(0,A.jsx)(G,(0,a.Z)({allArtifactKeysWithGrouper:v._.map((function(e){return{key:e}})),selectedArtifactKeys:t,setArtifactKeys:r,getName:function(e){return x.ZP.getArtStr(e)},getImage:function(e){return k.ZP[e]},label:l("autocompleteLabels.substats")},n))}function H(e){var t=e.allArtifactKeysWithGrouper,r=e.selectedArtifactKey,n=e.setArtifactKey,o=e.getName,s=e.getImage,c=e.label,f=e.disable,y=void 0===f?function(){return!1}:f,p=e.showDefault,g=void 0!==p&&p,m=e.defaultText,x=void 0===m?"":m,h=(e.defaultIcon,(0,i.Z)(e,N)),v=(0,l.Z)(),Z=(0,d.useMemo)((function(){return(g?[{key:"",label:x}]:[]).concat(t.map((function(e){var t=e.key,r=e.grouper;return{key:t,label:o(t),grouper:r}})))}),[t,o,x,g]);return(0,A.jsx)(u.Z,(0,a.Z)({autoHighlight:!0,options:Z,clearIcon:r?void 0:"",value:{key:r,label:o(r)},onChange:function(e,t,r){return("change"!==e.type||"clear"!==r)&&n(t?t.key:"")},getOptionLabel:function(e){return e.label?e.label:x},isOptionEqualToValue:function(e,t){return e.key===t.key},getOptionDisabled:function(e){return y(e.key)},renderInput:function(e){return(0,A.jsx)(b.Z,(0,a.Z)((0,a.Z)({},e),{},{label:c,startAdornment:s(r),hasValue:!!r}))},renderOption:function(e,t){return(0,A.jsx)(K.Z,{value:t.key,image:s(t.key),text:t.label,theme:v,isSelected:r===t.key,props:e},t.key)}},h))}function T(e){var t=e.artSetKey,r=e.setArtSetKey,l=e.label,u=void 0===l?"":l,o=(0,i.Z)(e,W),s=(0,h.Z)((function(){return g.y.getAll}),[]),d=(0,p.$)(["artifact","artifactNames_gen"]).t;if(u=u||d("artifact:autocompleteLabels.set"),!s)return null;var m=Object.entries(g.y.setKeysByRarities(s)).flatMap((function(e){var t=(0,n.Z)(e,2),r=t[0];return t[1].map((function(e){return{key:e,grouper:+r}}))})).sort(_);return(0,A.jsx)(H,(0,a.Z)({allArtifactKeysWithGrouper:m,selectedArtifactKey:t,setArtifactKey:r,getName:function(e){return e&&s[e].nameRaw},getImage:function(e){return e?s[e].defIcon:(0,A.jsx)(A.Fragment,{})},label:u,groupBy:function(e){var t,r;return null!==(t=null===(r=e.grouper)||void 0===r?void 0:r.toString())&&void 0!==t?t:""},renderGroup:function(e){return e.group&&(0,A.jsxs)(c.Z,{component:f.Z,children:[(0,A.jsxs)(y.Z,{sx:{top:"-1em"},children:[e.group," ",(0,A.jsx)(j.q,{stars:+e.group})]},"".concat(e.group,"Header")),e.children]},e.group)}},o))}function _(e,t){if(e.grouper>t.grouper)return-1;if(e.grouper<t.grouper)return 1;var r=m.Z.t("artifactNames_gen:".concat(e.key)),n=m.Z.t("artifactNames_gen:".concat(t.key));return r<n?-1:r>n?1:0}},80367:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(93433),a=r(53174),i=r(54483),l=r(62002),u=r(40117),o=r(61889),s=r(90388),c=r(68870),f=r(22020),y=r(76899),d=r(24351),p=r(75308),g=r(31038),m=r(91839),x=r(10157),h=r(36030),v=r(21977),Z=r(95614),K=r(80184),b=["excluded","included"],j=["locked","unlocked"],k=(0,p.X)((0,n.Z)(d.En)),A=(0,p.X)((0,n.Z)(d.eV)),S=(0,p.X)([].concat(b)),I=(0,p.X)([].concat(j));function w(e){var t=e.filterOption,r=e.filterOptionDispatch,n=e.disableSlotFilter,p=void 0!==n&&n,w=(0,f.$)(["artifact","ui"]).t,L=t.artSetKeys,N=void 0===L?[]:L,W=t.mainStatKeys,G=void 0===W?[]:W,O=t.rarity,P=void 0===O?[]:O,C=t.slotKeys,H=void 0===C?[]:C,T=t.levelLow,_=t.levelHigh,D=t.substats,M=void 0===D?[]:D,q=t.location,z=void 0===q?"":q,E=t.exclusion,B=void 0===E?[].concat(b):E,V=t.locked,$=void 0===V?[].concat(j):V;return(0,K.jsxs)(o.ZP,{container:!0,spacing:1,children:[(0,K.jsxs)(o.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,K.jsx)(m.Z,{fullWidth:!0,value:P,size:"small",children:d.En.map((function(e){return(0,K.jsx)(s.Z,{value:e,onClick:function(){return r({rarity:k(P,e)})},children:(0,K.jsx)(x.q,{stars:e})},e)}))}),(0,K.jsx)(m.Z,{fullWidth:!0,value:H,size:"small",disabled:p,children:d.eV.map((function(e){return(0,K.jsx)(s.Z,{value:e,onClick:function(){return r({slotKeys:A(H,e)})},children:(0,Z.Ir)(e)},e)}))}),(0,K.jsxs)(c.Z,{display:"flex",gap:1,children:[(0,K.jsx)(m.Z,{fullWidth:!0,value:B,size:"small",children:b.map((function(e,t){return(0,K.jsxs)(s.Z,{value:e,sx:{display:"flex",gap:1},onClick:function(){return r({exclusion:S(B,e)})},children:[(0,K.jsx)(i.G,{icon:t?a.Stf:a.gPx}),(0,K.jsx)(y.c,{i18nKey:"exclusion.".concat(e),t:w})]},e)}))}),(0,K.jsx)(m.Z,{fullWidth:!0,value:$,size:"small",children:j.map((function(e,t){return(0,K.jsxs)(s.Z,{value:e,sx:{display:"flex",gap:1},onClick:function(){return r({locked:I($,e)})},children:[t?(0,K.jsx)(l.Z,{}):(0,K.jsx)(u.Z,{}),(0,K.jsx)(y.c,{i18nKey:"ui:".concat(e),t:w})]},e)}))})]}),(0,K.jsx)(v.Z,{showLevelText:!0,levelLow:T,levelHigh:_,setLow:function(e){return r({levelLow:e})},setHigh:function(e){return r({levelHigh:e})},setBoth:function(e,t){return r({levelLow:e,levelHigh:t})}}),(0,K.jsx)(o.ZP,{container:!0,display:"flex",gap:1,children:(0,K.jsx)(o.ZP,{item:!0,flexGrow:1,children:(0,K.jsx)(g.Z,{value:z,onChange:function(e){return r({location:e})},placeholderText:w("artifact:filterLocation.any"),defaultText:w("artifact:filterLocation.any"),labelText:w("artifact:filterLocation.location"),showDefault:!0,showInventory:!0,showEquipped:!0})})})]}),(0,K.jsxs)(o.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,K.jsx)(h.N5,{artSetKeys:N,setArtSetKeys:function(e){return r({artSetKeys:e})}}),(0,K.jsx)(h.mY,{mainStatKeys:G,setMainStatKeys:function(e){return r({mainStatKeys:e})}}),(0,K.jsx)(h.mW,{substatKeys:M,setSubstatKeys:function(e){return r({substats:e})}})]})]})}}}]);
//# sourceMappingURL=23.f15a82dd.chunk.js.map