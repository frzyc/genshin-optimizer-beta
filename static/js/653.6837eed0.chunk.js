"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[653],{40653:function(e,t,n){n.r(t),n.d(t,{default:function(){return De}});var r=n(39504),a=n(20890),s=n(94721),o=n(10757),i=n(22020),c=n(76899),l=n(3992),d=n(29439),u=n(30168),h=n(53174),x=n(74223),p=n(80184),f=(0,x.Z)((0,p.jsx)("path",{d:"M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"}),"ImportExport"),g=(0,x.Z)((0,p.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload"),j=n(72456),Z=(0,x.Z)((0,p.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),v=n(61889),m=n(24518),b=n(81918),w=n(52791),y=n(72791),C=n(71310),I=n(10600),k=n(82095),D=n(9321),S=n(25074),M=n(23741),K=n(1413),O="Genshin Optimizer";var P=n(3608);function W(e){var t=new Map,n=e.entries.filter((function(e){return(0,d.Z)(e,1)[0].startsWith("artifact_")})).map((function(e,n){var r=(0,d.Z)(e,2),a=r[0],s=r[1];return t.set(a,n),JSON.parse(s)}));return{format:"GOOD",dbVersion:P.U,source:O,version:1,characters:e.entries.filter((function(e){return(0,d.Z)(e,1)[0].startsWith("char_")})).map((function(e){var t=(0,d.Z)(e,2),n=(t[0],t[1]);return JSON.parse(n)})),artifacts:n,weapons:e.entries.filter((function(e){return(0,d.Z)(e,1)[0].startsWith("weapon_")})).map((function(e){var t=(0,d.Z)(e,2),n=(t[0],t[1]);return JSON.parse(n)})),states:e.entries.filter((function(e){return(0,d.Z)(e,1)[0].startsWith("state_")})).map((function(e){var t=(0,d.Z)(e,2),n=t[0],r=t[1];return(0,K.Z)((0,K.Z)({},JSON.parse(r)),{},{key:n.split("state_")[1]})})),buildSettings:e.entries.filter((function(e){return(0,d.Z)(e,1)[0].startsWith("buildSetting_")})).map((function(e){var n=(0,d.Z)(e,2),r=n[0],a=n[1],s=(0,K.Z)((0,K.Z)({},JSON.parse(a)),{},{key:r.split("buildSetting_")[1]});return s.builds=s.builds.map((function(e){return e.map((function(e){return t.has(e)?"artifact_".concat(t.get(e)):""})).filter((function(e){return e}))})),s}))}}var z,_,G,N,B,E,H,V=n(24711),F=n(17278),T=n(60393),A=n(74165),J=n(15861),L=n(54483),R=(0,x.Z)((0,p.jsx)("path",{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H15v-8h5V8l-6-6zm-1 7V3.5L18.5 9H13zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z"}),"FileOpen"),$=n(9912),U=n(72247),Y=n(66934),q=n(68870),Q=n(40165),X=n(45987),ee=["key"],te=["key","builds","buildDate"];function ne(e,t,n,r){if(1===e.version)return function(e,t,n,r){var a,s=null!==(a=e.source)&&void 0!==a?a:"Unknown",o=function(e){return{type:"GOOD",source:e,artifacts:{import:0,invalid:[],new:[],update:[],unchanged:[],remove:[],notInImport:0,beforeMerge:0},weapons:{import:0,invalid:[],new:[],update:[],unchanged:[],remove:[],notInImport:0,beforeMerge:0},characters:{import:0,invalid:[],new:[],update:[],unchanged:[],remove:[],notInImport:0,beforeMerge:0}}}(s);o.characters.beforeMerge=t.chars.values.length,o.weapons.beforeMerge=t.weapons.values.length,o.artifacts.beforeMerge=t.arts.values.length;var i=function(e){return function(t,n,r){return o[e][n].push(r)}},c=t.chars.followAny((function(e,t,n){var r=o.characters[t],a=r.findIndex((function(t){return t.key===e}));a<0?r.push(n):r[a]=n})),l=t.arts.followAny(i("artifacts")),d=t.weapons.followAny(i("weapons")),u=e.characters;if(u){o.characters.import=u.length;var h=new Set(t.chars.keys);u.forEach((function(e){e.key||o.characters.invalid.push(e),h.delete(e.key),t.chars.hasDup(e,s===O)?o.characters.unchanged.push(e):t.chars.set(e.key,e)}));var x=Array.from(h);n||r?o.characters.notInImport=x.length:x.forEach((function(e){return t.chars.remove(e)})),o.characters.unchanged=[]}else o.characters.notInImport=t.chars.values.length;var p=e.weapons;if(p){o.weapons.import=p.length;var f=new Set(t.weapons.values.map((function(e){return e.id})));p.forEach((function(e){var n=t.weapons.validate(e);if(!n)return o.weapons.invalid.push(e);var a=r?{duplicated:[],upgraded:[]}:t.weapons.findDup(n),s=a.duplicated,i=a.upgraded;if(s=s.filter((function(e){return f.has(e.id)})),i=i.filter((function(e){return f.has(e.id)})),s[0]){var c=s[0]||i[0];f.delete(c.id),s[0]&&s[0].location===n.location?o.weapons.unchanged.push(n):t.weapons.set(c.id,n)}else t.weapons.new(n)}));var g=Array.from(f);n||r?o.weapons.notInImport=g.length:g.forEach((function(e){return t.weapons.remove(e)}))}else o.weapons.notInImport=t.weapons.values.length;var j=e.artifacts;if(j){o.artifacts.import=j.length;var Z=new Set(t.arts.values.map((function(e){return e.id})));j.forEach((function(e){var n=t.arts.validate(e);if(!n)return o.artifacts.invalid.push(e);var a=r?{duplicated:[],upgraded:[]}:t.arts.findDups(n),s=a.duplicated,i=a.upgraded;if(s=s.filter((function(e){return Z.has(e.id)})),i=i.filter((function(e){return Z.has(e.id)})),s[0]){var c=s[0]||i[0];Z.delete(c.id),s[0]&&s[0].location===n.location?o.artifacts.unchanged.push(n):t.arts.set(c.id,n)}else t.arts.new(n)}));var v=Array.from(Z);n||r?o.artifacts.notInImport=v.length:v.forEach((function(e){return t.arts.remove(e)}))}else o.artifacts.notInImport=t.arts.values.length;c(),l(),d();var m=o.states;m&&m.forEach((function(e){var n=e,r=n.key,a=(0,X.Z)(n,ee);r&&t.states.set(r,a)}));var b=o.buildSettings;b&&b.forEach((function(e){var n=e,r=n.key,a=(n.builds,n.buildDate,(0,X.Z)(n,te));r&&t.states.set(r,(0,K.Z)({},a))}));return o}(e,t,n,r)}var re,ae,se,oe,ie,ce,le,de=(0,Y.ZP)("input")({display:"none"});function ue(e){var t,n=e.onReplace,s=(0,y.useContext)(S.t).database,o=(0,i.$)("settings").t,x=(0,y.useState)(""),f=(0,d.Z)(x,2),g=f[0],j=f[1],Z=(0,y.useState)(""),b=(0,d.Z)(Z,2),w=b[0],I=b[1],k=(0,y.useState)(""),D=(0,d.Z)(k,2),K=D[0],O=D[1],P=(0,y.useState)(!1),W=(0,d.Z)(P,2),V=W[0],F=W[1],T=(0,y.useState)(!1),Y=(0,d.Z)(T,2),X=Y[0],ee=Y[1],te=null!==(t=(0,y.useMemo)((function(){if(g){var e;try{if("object"!==typeof(e=JSON.parse(g)))return void O("uploadCard.error.jsonParse")}catch(a){return void O("uploadCard.error.jsonParse")}if("GOOD"===e.format){var t=new M.NI;t.copyFrom(s.storage);var n=new S.M(t),r=ne(e,n,V,X);return r?{importResult:r,importedDatabase:n}:void O("uploadCard.error.goInvalid")}O("uploadCard.error.unknown")}}),[g,s,V,X]))&&void 0!==t?t:{},re=te.importResult,ae=te.importedDatabase,se=function(){var e=(0,J.Z)((0,A.Z)().mark((function e(t){var n,r;return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.files[0],t.target.value=null,n&&I(n.name),(r=new FileReader).onload=function(){return j(r.result)},r.readAsText(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)(C.Z,{children:[(0,p.jsx)(r.Z,{sx:{py:1},children:(0,p.jsx)(c.c,{t:o,i18nKey:"settings:uploadCard.title"})}),(0,p.jsxs)(r.Z,{children:[(0,p.jsxs)(v.ZP,{container:!0,spacing:2,sx:{mb:1},children:[(0,p.jsx)(v.ZP,{item:!0,children:(0,p.jsxs)("label",{htmlFor:"icon-button-file",children:[(0,p.jsx)(de,{accept:".json",id:"icon-button-file",type:"file",onChange:se}),(0,p.jsx)(m.Z,{component:"span",color:"info",startIcon:(0,p.jsx)(R,{}),children:o(z||(z=(0,u.Z)(["uploadCard.buttons.open"])))})]})}),(0,p.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,p.jsx)(l.Z,{sx:{px:2,py:1},children:(0,p.jsx)(a.Z,{children:w?(0,p.jsxs)("span",{children:[(0,p.jsx)(L.G,{icon:h.w49})," ",w]}):(0,p.jsxs)("span",{children:[(0,p.jsx)(L.G,{icon:h.acZ})," ",(0,p.jsx)(c.c,{t:o,i18nKey:"settings:uploadCard.hint"})]})})})})]}),(0,p.jsxs)(q.Z,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[(0,p.jsx)(Q.Z,{title:(0,p.jsx)(a.Z,{children:o(X?_||(_=(0,u.Z)(["uploadCard.tooltip.ignoreDup"])):G||(G=(0,u.Z)(["uploadCard.tooltip.detectdup"])))}),placement:"top",arrow:!0,children:(0,p.jsx)(q.Z,{sx:{flexGrow:1,flexBasis:"10em"},children:(0,p.jsx)(m.Z,{fullWidth:!0,disabled:!g,color:X?"primary":"success",onClick:function(){return ee(!X)},startIcon:X?(0,p.jsx)($.Z,{}):(0,p.jsx)(U.Z,{}),children:o(N||(N=(0,u.Z)(["uploadCard.buttons.detectDups"])))})})}),(0,p.jsx)(Q.Z,{title:(0,p.jsx)(a.Z,{children:o(V?B||(B=(0,u.Z)(["uploadCard.tooltip.keepNotInImport"])):E||(E=(0,u.Z)(["uploadCard.tooltip.delNotInImport"])))}),placement:"top",arrow:!0,children:(0,p.jsx)(q.Z,{sx:{flexGrow:1,flexBasis:"10em"},children:(0,p.jsx)(m.Z,{fullWidth:!0,disabled:!g,color:V?"primary":"success",onClick:function(){return F(!V)},startIcon:V?(0,p.jsx)($.Z,{}):(0,p.jsx)(U.Z,{}),children:o(H||(H=(0,u.Z)(["uploadCard.buttons.delNotInImport"])))})})})]}),(0,p.jsx)(a.Z,{gutterBottom:!0,variant:"caption",children:(0,p.jsx)(c.c,{t:o,i18nKey:"settings:uploadCard.hintPaste"})}),(0,p.jsx)(q.Z,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",mb:2,resize:"vertical"},value:g,onChange:function(e){return j(e.target.value)}}),re&&ae?(0,p.jsx)(he,{importResult:re,importedDatabase:ae}):o(K)]}),(0,p.jsx)(pe,{importedDatabase:ae,reset:function(){j(""),I(""),n()}})]})}function he(e){var t=e.importResult,n=t.source,o=t.artifacts,d=t.characters,u=t.weapons,h=e.importedDatabase,x=(0,i.$)("settings").t;return(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(r.Z,{sx:{py:1},children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:x,i18nKey:"uploadCard.dbSource"}),(0,p.jsxs)("strong",{children:[" ",n]})]})}),(0,p.jsx)(s.Z,{}),(0,p.jsx)(r.Z,{children:(0,p.jsxs)(v.ZP,{container:!0,spacing:2,children:[(0,p.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,p.jsx)(xe,{result:o,dbTotal:h.arts.values.length,type:"arts"})}),(0,p.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,p.jsx)(xe,{result:u,dbTotal:h.weapons.values.length,type:"weapons"})}),(0,p.jsx)(v.ZP,{item:!0,flexGrow:1,children:(0,p.jsx)(xe,{result:d,dbTotal:h.chars.values.length,type:"chars"})})]})})]})}function xe(e){var t,n=e.result,o=e.dbTotal,l=e.type,d=(0,i.$)("settings").t,u=n.import;return(0,p.jsxs)(C.Z,{children:[(0,p.jsx)(r.Z,{sx:{py:1},children:(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.".concat(l)})," ",u]})}),(0,p.jsx)(s.Z,{}),(0,p.jsxs)(r.Z,{children:[(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.new"})," ",(0,p.jsx)("strong",{children:n.new.length})," / ",u]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.unchanged"})," ",(0,p.jsx)("strong",{children:n.unchanged.length})," / ",u]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.updated"})," ",(0,p.jsx)("strong",{children:n.update.length})]}),!!n.remove.length&&(0,p.jsxs)(a.Z,{color:"warning.main",children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.removed"})," ",(0,p.jsx)("strong",{children:n.remove.length})]}),!!n.notInImport&&(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.notInImport"})," ",(0,p.jsx)("strong",{children:n.notInImport})]}),(0,p.jsxs)(a.Z,{children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.dbTotal"})," ",(0,p.jsx)("strong",{children:n.beforeMerge})," -> ",(0,p.jsx)("strong",{children:o})]}),!(null===(t=n.invalid)||void 0===t||!t.length)&&(0,p.jsxs)("div",{children:[(0,p.jsxs)(a.Z,{color:"error.main",children:[(0,p.jsx)(c.c,{t:d,i18nKey:"count.invalid"})," ",(0,p.jsx)("strong",{children:n.invalid.length})," / ",u]}),(0,p.jsx)(q.Z,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",resize:"vertical"},value:JSON.stringify(n.invalid,void 0,2),disabled:!0})]})]})]})}function pe(e){var t=e.importedDatabase,n=e.reset,a=(0,y.useContext)(S.t),o=a.database,l=a.setDatabase,d=(0,i.$)("settings").t,u=(0,y.useCallback)((function(){t&&(o.clear(),o.storage.copyFrom(t.storage),l(new S.M(o.storage)),n())}),[o,t,n,l]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.Z,{}),(0,p.jsx)(r.Z,{sx:{py:1},children:(0,p.jsx)(m.Z,{color:t?"success":"error",disabled:!t,onClick:u,startIcon:(0,p.jsx)(L.G,{icon:h.Y9i}),children:(0,p.jsx)(c.c,{t:d,i18nKey:"settings:uploadCard.replaceDatabase"})})})]})}function fe(){var e=(0,y.useContext)(S.t),t=parseInt(e.database.storage.getString("dbIndex")||"1"),n=(0,i.$)(["settings"]).t;return(0,p.jsxs)(C.Z,{children:[(0,p.jsx)(r.Z,{sx:{py:1},children:(0,p.jsx)(a.Z,{variant:"subtitle1",children:n(re||(re=(0,u.Z)(["DatabaseCard.title"])))})}),(0,p.jsx)(s.Z,{}),(0,p.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:(0,p.jsx)(v.ZP,{container:!0,spacing:2,columns:{xs:1,md:2},children:(0,T.w6)(1,4).map((function(n){return(0,p.jsx)(v.ZP,{item:!0,xs:1,children:n===t?(0,p.jsx)(je,{index:n}):(0,p.jsx)(ge,{index:n,children:(0,p.jsx)(je,{index:n,databaseContextObj:e})})},n)}))})})]})}function ge(e){var t=e.index,n=e.children,r=(0,y.useState)((function(){var e,n="extraDatabase_".concat(t),r=new M.Bc(n),a=JSON.parse(null!==(e=localStorage.getItem(n))&&void 0!==e?e:'{ "dbIndex": "'.concat(t,'" }'));r.setStorage(a),r.removeForKeys((function(e){return e.startsWith("extraDatabase_")}));var s=new S.M(r);return r.saveStorage(),s})),a=(0,d.Z)(r,2),s=a[0],o=a[1];return(0,p.jsx)(S.t.Provider,{value:{database:s,setDatabase:o},children:n})}function je(e){var t=e.index,n=e.databaseContextObj,o=(0,y.useContext)(S.t),x=o.database,C=o.setDatabase,K=(0,F.Z)("dbMeta",(0,F.t)(t)),O=(0,d.Z)(K,2),P=O[0],z=P.name,_=P.lastEdit,G=O[1],N=!n,B=(0,V.Z)(),E=(0,d.Z)(B,3),H=E[0],T=E[1],A=E[2],J=(0,i.$)(["settings"]).t,L=x.chars.keys.length,R=x.arts.values.length,$=x.weapons.values.length,U=Boolean(L||R||$),Y=(0,y.useCallback)((function(){return navigator.clipboard.writeText(JSON.stringify(W(x.storage))).then((function(){return alert("Copied database to clipboard.")})).catch(console.error)}),[x]),q=(0,y.useCallback)((function(){(A(),N)||x.storage.saveStorage()}),[A,N,x.storage]),Q=(0,y.useCallback)((function(){if(window.confirm('Are you sure you want to delete "'.concat(z,'"?')))if(N)x.clear(),C(new S.M(x.storage));else{var e=x.storage.databaseName,t=new M.Bc(e);t.setStorage({}),C(new S.M(t)),localStorage.removeItem(e)}}),[x,N,z,C]),X=(0,y.useCallback)((function(){var e=(new Date).toISOString().split(".")[0].replace("T","_").replaceAll(":","-"),t=JSON.stringify(W(x.storage)),n="".concat(z.trim().replaceAll(" ","_"),"_").concat(e,".json"),r=document.createElement("a");r.download=n,r.href="data:".concat("application/json;charset=utf-8",",").concat(encodeURIComponent(t)),r.target="_blank",document.body.appendChild(r),r.click(),document.body.removeChild(r)}),[x,z]),ee=(0,y.useCallback)((function(){if(n){var e=parseInt(n.database.storage.getString("dbIndex")||"1"),r=new M.Bc("extraDatabase_".concat(e),n.database.storage);r.removeForKeys((function(e){return e.startsWith("extraDatabase_")})),r.saveStorage();var a=x.storage.databaseName;localStorage.removeItem(a),n.database.clear(),n.database.storage.copyFrom(x.storage),n.database.storage.set("dbIndex",t),n.setDatabase(new S.M(n.database.storage))}}),[n,x,t]),te=(0,y.useState)(z),ne=(0,d.Z)(te,2),re=ne[0],de=ne[1];(0,y.useEffect)((function(){return de(z)}),[z]);var he=(0,y.useCallback)((function(){G({name:re}),N||x.storage.saveStorage()}),[G,re,x,N]),xe=(0,y.useCallback)((function(e){return"Enter"===e.key&&he()}),[he]);return(0,p.jsxs)(l.Z,{sx:{height:"100%",boxShadow:N?"0px 0px 0px 2px green inset":void 0},children:[(0,p.jsxs)(r.Z,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[(0,p.jsx)(I.el,{value:re,sx:{borderRadius:1,px:1,flexGrow:1},onChange:function(e){return de(e.target.value)},onBlur:he,onKeyDown:xe}),!N&&(0,p.jsx)(m.Z,{startIcon:(0,p.jsx)(f,{}),onClick:ee,color:"warning",children:J(ae||(ae=(0,u.Z)(["DatabaseCard.button.swap"])))}),(0,p.jsx)(b.Z,{color:N?"success":"secondary",label:N?J(se||(se=(0,u.Z)(["DatabaseCard.currentDB"]))):"".concat(J(oe||(oe=(0,u.Z)(["DatabaseCard.title"])))," ").concat(t)})]}),(0,p.jsx)(s.Z,{}),(0,p.jsx)(r.Z,{children:(0,p.jsxs)(w.Z,{display:"flex",gap:2,children:[(0,p.jsxs)(w.Z,{flexGrow:1,children:[(0,p.jsxs)(a.Z,{noWrap:!0,children:[(0,p.jsx)(c.c,{t:J,i18nKey:"count.chars"})," ",(0,p.jsx)("strong",{children:L})]}),(0,p.jsxs)(a.Z,{noWrap:!0,children:[(0,p.jsx)(c.c,{t:J,i18nKey:"count.arts"})," ",(0,p.jsx)("strong",{children:R})]}),(0,p.jsxs)(a.Z,{noWrap:!0,children:[(0,p.jsx)(c.c,{t:J,i18nKey:"count.weapons"})," ",(0,p.jsx)("strong",{children:$})]}),!!_&&(0,p.jsx)(a.Z,{noWrap:!0,children:(0,p.jsx)("strong",{children:new Date(_).toLocaleString()})})]}),(0,p.jsx)(w.Z,{children:(0,p.jsxs)(v.ZP,{container:!0,spacing:1,columns:{xs:2},children:[(0,p.jsx)(v.ZP,{item:!0,xs:1,children:(0,p.jsx)(m.Z,{fullWidth:!0,disabled:!U,color:"info",onClick:Y,startIcon:(0,p.jsx)(k.Z,{icon:h.Yjj}),children:(0,p.jsx)(c.c,{t:J,i18nKey:"DatabaseCard.button.copy"})})}),(0,p.jsxs)(v.ZP,{item:!0,xs:1,children:[(0,p.jsx)(D.Z,{open:H,onClose:A,children:(0,p.jsx)(ue,{onReplace:q})}),(0,p.jsx)(m.Z,{fullWidth:!0,component:"span",color:"info",startIcon:(0,p.jsx)(g,{}),onClick:T,children:J(ie||(ie=(0,u.Z)(["DatabaseCard.button.upload"])))})]}),(0,p.jsx)(v.ZP,{item:!0,xs:1,children:(0,p.jsx)(m.Z,{fullWidth:!0,disabled:!U,onClick:X,startIcon:(0,p.jsx)(j.Z,{}),children:J(ce||(ce=(0,u.Z)(["DatabaseCard.button.download"])))})}),(0,p.jsx)(v.ZP,{item:!0,xs:1,children:(0,p.jsx)(m.Z,{fullWidth:!0,disabled:!U,color:"error",onClick:Q,startIcon:(0,p.jsx)(Z,{}),children:J(le||(le=(0,u.Z)(["DatabaseCard.button.delete"])))})})]})})]})})]})}var Ze=n(23786),ve=n(33890),me=n(25617),be=n(72828);function we(){var e=(0,i.$)().t;return(0,p.jsxs)(C.Z,{children:[(0,p.jsxs)(r.Z,{sx:{py:1},children:[e("settings:languageCard.selectLanguage")," ",(0,p.jsx)(me.Z,{color:"warning",children:e("ui:underConstruction")})]}),(0,p.jsx)(s.Z,{}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(Ce,{})})]})}var ye={chs:"\u4e2d\u6587 \u6b63\u4f53\u5b57",cht:"\u4e2d\u6587 \u7e41\u9ad4\u5b57",de:"Deutsch",en:"English",es:"espa\xf1ol",fr:"fran\xe7ais",id:"Bahasa Indonesia",ja:"\u65e5\u672c\u8a9e",ko:"\ud55c\uad6d\uc5b4",pt:"Portugu\xeas",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",vi:"Ti\u1ebfng Vi\u1ec7t"};function Ce(){var e=(0,i.$)(["ui","settings"]),t=e.t,n=e.i18n,r=function(e){return function(){return n.changeLanguage(e)}},a=n.languages[0];return(0,p.jsx)(ve.Z,{fullWidth:!0,title:t("settings:languageCard.languageFormat",{language:t("languages:".concat(a))}),children:be.C.map((function(e){return(0,p.jsxs)(Ze.Z,{selected:a===e,disabled:a===e,onClick:r(e),children:[(0,p.jsx)(c.c,{i18nKey:"languages:".concat(e)}),e!==a?" (".concat(ye[e],")"):""]},e)}))})}var Ie=n(12759);function ke(){var e=(0,F.Z)("GlobalSettings",Ie.c),t=(0,d.Z)(e,2),n=t[0].tcMode,s=t[1];return(0,p.jsx)(C.Z,{children:(0,p.jsxs)(r.Z,{children:[(0,p.jsx)(a.Z,{gutterBottom:!0,color:"warning.main",children:"Enabling this toggle will show some features that might be too complex for the average user."}),(0,p.jsx)(m.Z,{fullWidth:!0,onClick:function(){return s({tcMode:!n})},color:n?"success":"primary",startIcon:n?(0,p.jsx)(U.Z,{}):(0,p.jsx)($.Z,{}),children:"Theorycrafting Mode"})]})})}function De(){var e=(0,i.$)(["settings"]).t;return o.ZP.send({hitType:"pageview",page:"/setting"}),(0,p.jsxs)(l.Z,{sx:{my:1},children:[(0,p.jsx)(r.Z,{sx:{py:1},children:(0,p.jsx)(a.Z,{variant:"subtitle1",children:(0,p.jsx)(c.c,{t:e,i18nKey:"title"})})}),(0,p.jsx)(s.Z,{}),(0,p.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,p.jsx)(we,{}),(0,p.jsx)(fe,{}),(0,p.jsx)(ke,{})]})]})}},12759:function(e,t,n){n.d(t,{B:function(){return o},c:function(){return s}});var r=n(93433),a=n(50765);function s(){return{tcMode:!1}}function o(){return{rvFilter:(0,r.Z)(a._),favorite:!1}}},72247:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox")},9912:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank")},72456:function(e,t,n){var r=n(74223),a=n(80184);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")}}]);
//# sourceMappingURL=653.6837eed0.chunk.js.map