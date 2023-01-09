(()=>{"use strict";function e(e,t){if(e&&t)return!Array.isArray(t)&&console.error(t),t.reduce(((e,t)=>null==e?void 0:e[t]),e)}function t(e,t){return Object.fromEntries(e.map(((e,n)=>[e,t(e,n)])))}function n(e,t){return Object.fromEntries(e.map(((e,n)=>t(e,n))))}function s(e,t){return Object.fromEntries(Object.entries(e).map((([e,n],s)=>[e,t(n,e,s)])))}const a=function*(e,t){for(let n=e;n<=t;n++)yield n};function r(e,t){return[...a(e,t)]}function o(e){throw new Error(`Should not reach this with value ${e}`)}i(NaN,{name:"TODO"}),c(1),c(0),i("none");function i(e,t){return"number"==typeof e?{operation:"const",operands:[],type:"number",value:e,info:t}:{operation:"const",operands:[],type:"string",value:e,info:t}}function c(e,t){return e>=Number.MAX_VALUE/100&&(e=1/0),e<=-Number.MAX_VALUE/100&&(e=-1/0),i(e,Object.assign({unit:"%"},t))}function l(e){return e.map((e=>"object"==typeof e?e:i(e)))}function u(e){return"object"!=typeof e?i(e):e}function d(e,t,n){const s=new Set,a=new Set;e.forEach((function e(r){a.has(r)||(s.has(r)?console.error("Found cyclical dependency during formula traversal"):(s.add(r),t(r),r.operands.forEach(e),n(r),s.delete(r),a.add(r)))}))}function h(e,t,n){const s=new Set,a=new Map,r=new Map;function o(e){let c=a.get(e);if(c)return c;c=t(e);let l=r.get(c);return l||(s.has(c)?(console.error("Found cyclical dependency during formula mapping"),i(NaN)):(s.add(c),l=n(function(e){const t=e.operands.map(o);return m(t,e.operands)?e:Object.assign({},e,{operands:t})}(c),e),s.delete(c),a.set(e,l),r.set(c,l),l))}const c=e.map(o);return m(c,e)?e:c}function p(e,t,n){const s=new Map;function a(e,t){let r=s.get(t);r||s.set(t,r=[new Set,new Map]);const[o,i]=r,c=i.get(e);if(c)return c;if(o.has(e))throw new Error("Found cyclical dependency during formula mapping");o.add(e);const l=n(e,t,a);return i.set(e,l),o.delete(e),l}return e.map((e=>a(e,t)))}function m(e,t){return void 0===e?void 0===t:void 0!==t&&(e.length===t.length&&e.every(((e,n)=>e===t[n])))}const f={min:e=>Math.min(...e),max:e=>Math.max(...e),add:e=>e.reduce(((e,t)=>e+t),0),mul:e=>e.reduce(((e,t)=>e*t),1)},g=Object.assign({},f,{res:([e])=>e<0?1-e/2:e>=.75?1/(4*e+1):1-e,sum_frac:e=>e[0]/e.reduce(((e,t)=>e+t)),threshold:([e,t,n,s])=>e>=t?n:s}),v=new Set(Object.keys(f));function b(e){return h(e,(e=>e),(e=>{let t=e;if(v.has(e.operation)){const n=e,{operation:s}=n;let a=!1;const r=n.operands.flatMap((e=>e.operation===s?(a=!0,e.operands):[e]));t=a?Object.assign({},n,{operands:r}):n}return t}))}function w(e){function t(e){const t=new Map;for(const s of e){var n;t.set(s,(null!=(n=t.get(s))?n:0)+1)}return t}const n={common:{counts:new Map,formulas:new Set,operation:"add"}};for(;;){let a;const r={operation:n.common.operation,operands:(s=n.common.counts,[...s].flatMap((([e,t])=>Array(t).fill(e))))};let o=new Map;for(const e of Object.keys(f))o.set(e,[]);if(e=h(e,(e=>{if(n.common.formulas.has(e)){const t=e,s=new Map(n.common.counts),a=t.operands.filter((e=>{const t=s.get(e);return!t||(s.set(e,t-1),!1)}));return a.length?(a.push(r),Object.assign({},t,{operands:a})):r}return e}),(e=>{if(!v.has(e.operation))return e;const n=e;if(a){if(a.operation===n.operation){const e=t(n.operands),r=new Map,o=a.counts;let i=0;for(const[t,n]of e.entries()){var s;const e=Math.min(n,null!=(s=o.get(t))?s:0);e?(r.set(t,e),i+=e):r.delete(t)}i>1&&(a.counts=r,a.formulas.add(n))}}else{const e=o.get(n.operation),s=t(n.operands);for(const[t,i]of e){let e=0;const c=new Map;for(const[t,n]of i.entries()){var r;const a=Math.min(n,null!=(r=s.get(t))?r:0);a&&(c.set(t,a),e+=a)}if(e>1){a={counts:c,formulas:new Set([n,t]),operation:n.operation},o.clear();break}}a||e.push([n,s])}return n})),!a)break;n.common=a}var s;return e}function x(t,n,s=(e=>!1)){const a={data:[],processed:new Map},r=new Map([[a,new Map]]),c={data:[n],processed:new Map};return r.set(c,new Map),r.get(a).set(n,c),p(t,c,((t,n,c)=>{var l;const{operation:u}=t,d=(e,t)=>c(e,t),h=(e,t)=>c(e,t);let p;switch(u){case"const":p=t;break;case"add":case"mul":case"max":case"min":const b=g[u],w=[],x=t.operands.filter((e=>{const t=d(e,n);return"const"!==t.operation||(w.push(t.value),!1)})).map((e=>d(e,n))),k=b(w);if(isFinite(k)){if("mul"===u&&0===k){p=i(k);break}}else if("mul"!==u&&("max"!==u||k>0)&&("min"!==u||k<0)){p=i(k);break}k!==b([])&&x.push(i(k)),p=x.length<=1?null!=(l=x[0])?l:i(b([])):{operation:u,operands:x};break;case"res":case"sum_frac":{const e=t.operands.map((e=>d(e,n))),s=g[u];p=e.every((e=>"const"===e.operation))?i(s(e.map((e=>e.value)))):Object.assign({},t,{operands:e});break}case"lookup":{const e=h(t.operands[0],n);if("const"===e.operation){var m;const s=null!=(m=t.table[e.value])?m:t.operands[1];if(s){p=c(s,n);break}}throw new Error(`Unsupported ${u} node while folding`)}case"prio":{const e=t.operands.find((e=>{const t=h(e,n);if("const"!==t.operation)throw new Error(`Unsupported ${u} node while folding`);return void 0!==t.value}));p=e?h(e,n):i(void 0);break}case"small":{var f;let e;for(const s of t.operands){var v;const t=h(s,n);if("const"!==t.operation)throw new Error(`Unsupported ${u} node while folding`);(void 0===(null==(v=e)?void 0:v.value)||void 0!==t.value&&t.value<e.value)&&(e=t)}p=null!=(f=e)?f:i(void 0);break}case"match":{const[e,s,a,r]=t.operands.map((e=>c(e,n)));if("const"!==e.operation||"const"!==s.operation)throw new Error(`Unsupported ${u} node while folding`);p=e.value===s.value?a:r;break}case"threshold":{const[e,s,a,r]=t.operands.map((e=>c(e,n)));p="const"===a.operation&&"const"===r.operation&&a.value===r.value?a:"const"===e.operation&&"const"===s.operation?e.value>=s.value?a:r:Object.assign({},t,{operands:[e,s,a,r]});break}case"subscript":{const e=d(t.operands[0],n);if("const"!==e.operation)throw new Error("Found non-constant subscript node while folding");p=i(t.list[e.value]);break}case"read":{const a=n.data.map((n=>e(n,t.path))).filter((e=>e));if(0===a.length)if(s(t)){const{accu:e}=t;p=void 0===e||"small"===e?"string"===t.type?i(void 0):i(NaN):i(g[e]([]))}else p=t;else p=void 0===t.accu||1===a.length?c(a[a.length-1],n):c({operation:t.accu,operands:a},n);break}case"data":{t.reset&&(n=a);const e=r.get(n);let s=e.get(t.data);s||(s={data:[...n.data,t.data],processed:new Map},r.set(s,new Map),e.set(t.data,s)),p=c(t.operands[0],s);break}default:o(u)}return p.info&&(p=Object.assign({},p),delete p.info),p}))}const k=["flower","plume","sands","goblet","circlet"],y=["Albedo","Aloy","Amber","AratakiItto","Barbara","Beidou","Bennett","Candace","Chongyun","Collei","Cyno","Diluc","Diona","Dori","Eula","Faruzan","Fischl","Ganyu","Gorou","HuTao","Jean","KaedeharaKazuha","Kaeya","KamisatoAyaka","KamisatoAyato","Keqing","Klee","KujouSara","KukiShinobu","Layla","Lisa","Mona","Nahida","Nilou","Ningguang","Noelle","Qiqi","RaidenShogun","Razor","Rosaria","SangonomiyaKokomi","Sayu","Shenhe","ShikanoinHeizou","Sucrose","Tartaglia","Thoma","Tighnari","Venti","Wanderer","Xiangling","Xiao","Xingqiu","Xinyan","YaeMiko","Yanfei","Yelan","Yoimiya","YunJin","Zhongli"],O=["TravelerAnemo","TravelerGeo","TravelerElectro","TravelerDendro"];function j(e,t,n,s,a,r){let o=r;const i={pruneNodeRange:!0},c={pruneNodeRange:!0},l={reaffine:!0},u={pruneOrder:!0,pruneArtRange:!0,pruneNodeRange:!0};let d=0;for(;Object.values(o).some((e=>e))&&d++<20;){if(o.pruneOrder){delete o.pruneOrder;const e=S(n,s,a);n!==e&&(n=e,o=Object.assign({},o,i))}if(o.pruneArtRange){delete o.pruneArtRange;const s=$(e,n,t);n!==s&&(n=s,o=Object.assign({},o,c))}if(o.pruneNodeRange){delete o.pruneNodeRange;const t=E(e,n);e!==t&&(e=t,o=Object.assign({},o,l))}if(o.reaffine){delete o.reaffine;const{nodes:t,arts:s}=M(e,n);e===t&&n===s||(e=t,n=s,o=Object.assign({},o,u))}}return{nodes:e,arts:n}}function M(e,n,a=!1){const r=new Set,c=new Set;function l(e,t){t?r.add(e):e.operands.forEach((e=>r.has(e)&&c.add(e)))}const u=new Set;if(d(e,(e=>{}),(e=>{const{operation:t}=e;switch(t){case"read":u.add(e.path[1]),l(e,!0);break;case"add":l(e,e.operands.every((e=>r.has(e))));break;case"mul":{const t=e.operands.filter((e=>"const"!==e.operation));l(e,0===t.length||1===t.length&&r.has(t[0]));break}case"const":l(e,!0);break;case"res":case"threshold":case"sum_frac":case"max":case"min":l(e,!1);break;default:o(t)}})),[...c].every((({operation:e})=>"read"===e||"const"===e))&&Object.keys(n.base).length===u.size)return{nodes:e,arts:n};let p=-1;function m(){for(;u.has(""+ ++p););return`${p}`}e.forEach((e=>r.has(e)&&c.add(e)));const f=[...c].filter((e=>"const"!==e.operation)),g=new Map(f.map((e=>{return[e,a||"read"!==e.operation||"dyn"!==e.path[0]?Object.assign({},(t=["dyn",`${m()}`],{operation:"read",operands:[],path:t,info:n,type:"number"}),{accu:"add"}):e];var t,n})));function v(e){const t=x([...g.keys()],{dyn:s(e,(e=>i(e)))},(e=>!0));return Object.fromEntries([...g.values()].map(((e,n)=>[e.path[1],t[n].value])))}const b={nodes:e=h(e,(e=>{var t;return null!=(t=g.get(e))?t:e}),(e=>e)),arts:{base:v(n.base),values:t(k,(e=>n.values[e].map((({id:e,set:t,values:n})=>({id:e,set:t,values:v(n)})))))}},w=Object.entries(v({}));for(const t of Object.values(b.arts.values))for(const{values:e}of t)for(const[t,n]of w)e[t]-=n;return b}function S(e,n,s){var a;let r=!1;const o=!(null!=(a=s.rainbow)&&a.length),i=Object.keys(e.base),c=new Set(Object.entries(s).filter((([e,t])=>t.length)).map((([e])=>e))),l=new Set(Object.entries(s).filter((([e,t])=>t.includes(2)&&!t.includes(4))).map((([e])=>e))),u=t(k,(t=>{const s=e.values[t],a=s.filter((e=>{let t=0;return s.every((s=>{const a=i.every((t=>{var n,a;return(null!=(n=s.values[t])?n:0)>=(null!=(a=e.values[t])?a:0)})),r=i.some((t=>{var n,a;return(null!=(n=s.values[t])?n:0)>(null!=(a=e.values[t])?a:0)})),u=a&&(r||s.id>e.id),d=o&&!c.has(s.set)&&!l.has(e.set)||e.set===s.set;return u&&d&&t++,t<n}))}));return a.length!==s.length&&(r=!0),a}));return r?{base:e.base,values:u}:e}function $(e,n,s){const a=Object.fromEntries(Object.entries(n.base).map((([e,t])=>[e,{min:t,max:t}]))),r={arts:n};for(;;){const n=t(k,(e=>A(r.arts.values[e]))),o=t(k,(e=>N(Object.entries(n).map((t=>t[0]===e?a:t[1])).filter((e=>e)))));let i=!1;const c=t(k,(t=>{const n=r.arts.values[t].filter((n=>{const a=N([A([n]),o[t]]),r=F(e,a);return e.every(((e,t)=>{var n;return r.get(e).max>=(null!=(n=s[t])?n:-1/0)}))}));return n.length!==r.arts.values[t].length&&(i=!0),n}));if(!i)break;r.arts={base:r.arts.base,values:c}}return r.arts}function E(e,t){const n=F(e,N([Object.fromEntries(Object.entries(t.base).map((([e,t])=>[e,{min:t,max:t}]))),...Object.values(t.values).map((e=>A(e)))]));return h(e,(e=>{{const{min:t,max:s}=n.get(e);if(t===s)return i(t)}const{operation:t}=e,s=e.operands.map((e=>n.get(e)));switch(t){case"threshold":{const[t,n,a,r]=s;if(t.min>=n.max)return e.operands[2];if(t.max<n.min)return e.operands[3];if(a.max===a.min&&r.max===r.min&&a.min===r.min&&isFinite(a.min))return i(a.max);break}case"min":{const t=e.operands.filter(((e,t)=>{const n=s[t];return s.every(((e,t)=>n.min<=e.max))}));if(t.length<s.length)return function(...e){return{operation:"min",operands:l(e)}}(...t);break}case"max":{const t=e.operands.filter(((e,t)=>{const n=s[t];return s.every((e=>n.max>=e.min))}));if(t.length<s.length)return function(...e){return{operation:"max",operands:l(e)}}(...t);break}}return e}),(e=>e))}function N(e){const t={};return e.forEach((e=>{Object.entries(e).forEach((([e,n])=>{t[e]?(t[e].min+=n.min,t[e].max+=n.max):t[e]=Object.assign({},n)}))})),t}function A(e){const t={};return e.length&&(Object.keys(e[0].values).filter((t=>e.every((e=>e.values[t])))).forEach((n=>t[n]={min:e[0].values[n],max:e[0].values[n]})),e.forEach((({values:e})=>{for(const[n,s]of Object.entries(e))t[n]?(t[n].max<s&&(t[n].max=s),t[n].min>s&&(t[n].min=s)):t[n]={min:0,max:s}}))),t}function F(e,t){const n=new Map;return d(e,(e=>{}),(e=>{var s;const{operation:a}=e,r=e.operands.map((e=>n.get(e)));let i;switch(a){case"read":if("dyn"!==e.path[0])throw new Error(`Found non-dyn path ${e.path} while computing range`);i=null!=(s=t[e.path[1]])?s:{min:0,max:0};break;case"const":i=U([e.value]);break;case"add":case"min":case"max":i={min:g[a](r.map((e=>e.min))),max:g[a](r.map((e=>e.max)))};break;case"res":i={min:g[a]([r[0].max]),max:g[a]([r[0].min])};break;case"mul":i=r.reduce(((e,t)=>U([e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max])));break;case"threshold":i=r[0].min>=r[1].max?r[2]:r[0].max<r[1].min?r[3]:U([],[r[2],r[3]]);break;case"sum_frac":{const[e,t]=r,n={min:e.min+t.min,max:e.max+t.max};i=n.min<=0&&n.max>=0?e.min<=0&&e.max>=0?{min:NaN,max:NaN}:{min:-1/0,max:1/0}:U([e.min/n.min,e.min/n.max,e.max/n.min,e.max/n.max]);break}default:o(a)}n.set(e,i)})),n}function U(e,t=[]){const n=Math.max(...e,...t.map((e=>e.max)));return{min:Math.min(...e,...t.map((e=>e.min))),max:n}}function R(e,n){return{base:e.base,values:t(k,(t=>{const s=n[t];switch(s.kind){case"id":return e.values[t].filter((e=>s.ids.has(e.id)));case"exclude":return e.values[t].filter((e=>!s.sets.has(e.set)));case"required":return e.values[t].filter((e=>s.sets.has(e.set)))}}))}}function z(e){return k.reduce(((t,n)=>t*e.values[n].length),1)}function B(e){return new Set(null!=e&&e.includes(2)?e.includes(4)?[0,1]:[0,1,4,5]:null!=e&&e.includes(4)?[0,1,2,3]:[0,1,2,3,4,5])}function*C(e,n){const a=[...new Set(n)],o=B(e.rainbow);let i=[];function c(e,t){if(!r(t+1,4).some((t=>5!==e[t])))return(e=[...e])[t]=5,e.reduce(((e,t)=>6*e+t),0)}!function e(t,n,s){if(5!==t.length){for(const a of n)e([...t,a],n,s.filter((e=>e!==a)));e([...t,t.length],new Set([...n,t.length]),[...s,t.length])}else o.has(s.length)&&i.push(t)}([0],new Set([0]),[0]);for(let t=4;t>=0;t--){const e=new Map;for(const n of i){var l;const s=c(n,t);void 0!==s&&e.set(s,(null!=(l=e.get(s))?l:new Set(n.slice(0,t)).size+1)-1)}for(const[n,s]of e.entries())if(0===s){const e=[...i.find((e=>c(e,t)===n))];e[t]=5,i=i.filter((e=>c(e,t)!==n)),i.push(e)}}const u={kind:"exclude",sets:new Set},d=t(k,(e=>u)),h=Object.assign({},s(e,(e=>0)),t(a,(e=>0))),p=s(e,B);function*m(e){const t=new Set;let n=[],s=[];for(const a of e)n.push([]),5===a?s.push(n.length-1):n[a].push(n.length-1);n=n.filter((e=>e.length)).sort(((e,t)=>t.length-e.length));let o=s.length;function*i(e){const t=s.length-e,n=[],o=[],c=[];let l=0;for(const s of a){const e=p[s],a=h[s];e&&(r(1,t).every((t=>!e.has(a+t)))?c.push(s):e.has(a)?r(0,t).some((t=>!e.has(a+t)))&&n.push(s):(l+=[...e].find((e=>e>a))-a,o.push(s)))}if(!(l>t))if(e!==s.length)if(l!==t){for(const t of[...n,...o])h[t]++,d[k[s[e]]]={kind:"required",sets:new Set([t])},yield*i(e+1),h[t]--;d[k[s[e]]]={kind:"exclude",sets:new Set([...o,...c,...n])},yield*i(e+1)}else for(const a of o)h[a]++,d[k[s[e]]]={kind:"required",sets:new Set([a])},yield*i(e+1),h[a]--;else yield Object.assign({},d)}yield*function*e(s){if(s===n.length)return yield*i(0);for(const i of a){if(t.has(i))continue;const a=n[s].length,l=p[i];let u=0;var c;if(l&&!l.has(a))if(u=(null!=(c=r(a+1,5).find((e=>l.has(e))))?c:6)-a,u>o)continue;t.add(i),h[i]=n[s].length,n[s].forEach((e=>d[k[e]]={kind:"required",sets:new Set([i])})),o-=u,yield*e(s+1),o+=u,h[i]=0,t.delete(i)}}(0)}for(const t of i)yield*m(t)}class D{constructor({arts:e,optimizationTarget:t,filters:n,maxBuilds:s},a){this.min=void 0,this.nodes=void 0,this.arts=void 0,this.maxBuilds=void 0,this.filters=[],this.interim=void 0,this.firstUncalculated=0,this.callback=void 0,this.arts=e,this.min=[-1/0,...n.map((e=>e.min))],this.nodes=[t,...n.map((e=>e.value))],this.callback=a,this.maxBuilds=s,V(this.nodes,e)}addFilter(e){const t=R(this.arts,e),n=z(t);n&&this.filters.push({nodes:this.nodes,arts:t,maxConts:[],approxs:[],age:0,count:n})}split(e,t){for(e>this.min[0]&&(this.min[0]=e,this.firstUncalculated=0,this.filters.forEach((e=>delete e.calculated))),this.firstUncalculated<this.filters.length&&this.calculateFilter(this.firstUncalculated++);this.filters.length;){const e=this.getApproxFilter(),{arts:n,count:a}=e;if(this.reportInterim(!1),a){if(a<=t)return this.reportInterim(!0),s(n.values,(e=>({kind:"id",ids:new Set(e.map((e=>e.id)))})));this.splitOldFilter(e)}}this.reportInterim(!0)}reportInterim(e=!1){this.interim&&(this.interim.skipped>1e6||!0===e)&&(this.callback(this.interim),this.interim=void 0)}splitOldFilter({nodes:e,arts:t,approxs:n,age:a}){const r=s(t.values,(e=>{var t,s;const a=e.map((e=>({art:e,cont:n[0].conts[e.id]}))).sort((({cont:e},{cont:t})=>t-e)),r=null!=(t=null==(s=a[a.length-1])?void 0:s.cont)?t:0;let o=a.reduce(((e,{cont:t})=>e+t),-r*a.length)/3;const i=Math.max(1,a.findIndex((({cont:e})=>(o-=e-r)<=0))),c=a.splice(i).map((({art:e})=>e)),l=a.map((({art:e})=>e));return{high:{arts:l,maxConts:n.map((e=>T(l,e)))},low:{arts:c,maxConts:n.map((e=>T(c,e)))}}})),o=Object.keys(r),{filters:i}=this,c={},l={};!function u(d){if(!o.length){const r=n.map(((e,t)=>s(l,(e=>e[t])))),o={base:t.base,values:Object.assign({},c)};return void i.push({nodes:e,arts:o,maxConts:r,approxs:n,age:a+1,count:d})}const h=o.pop(),{high:p,low:m}=r[h];m.arts.length&&(c[h]=m.arts,l[h]=m.maxConts,u(d*m.arts.length)),p.arts.length&&(c[h]=p.arts,l[h]=p.maxConts,u(d*p.arts.length)),o.push(h)}(1)}getApproxFilter(){return this.calculateFilter(this.filters.length-1),this.firstUncalculated>this.filters.length&&(this.firstUncalculated=this.filters.length),this.filters.pop()}calculateFilter(e){let{nodes:t,arts:a,maxConts:r,approxs:o,age:i,count:c,calculated:l}=this.filters[e];if(l)return;(i<3||i%5==2)&&(({nodes:t,arts:a}=j(t,this.min,a,this.maxBuilds,{},{pruneNodeRange:!0})),Object.values(a.values).every((e=>e.length))&&(o=function(e,t){return V(e,t).map((e=>({base:q(t.base,e,e.$c),conts:n(Object.values(t.values).flat(),(t=>[t.id,q(t.values,e,0)]))})))}(t,a),r=o.map((e=>s(a.values,(t=>T(t,e)))))));const u=r.map(((e,t)=>Object.values(e).reduce(((e,t)=>e+t),o[t].base-this.min[t]))),d=s(a.values,((e,t)=>{const n=u.map(((e,n)=>r[n][t]-e));return e.filter((({id:e})=>o.every((({conts:t},s)=>t[e]>=n[s]))))}));a={base:a.base,values:d};const h=z(a);h!==c&&(this.interim?this.interim.skipped+=c-h:this.interim={command:"interim",buildValues:void 0,tested:0,failed:0,skipped:c-h}),this.filters[e]={nodes:t,arts:a,maxConts:r,approxs:o,age:i,count:h,calculated:!0}}}function T(e,t){return Math.max(...e.map((({id:e})=>t.conts[e])))}function q(e,t,n){return Object.entries(e).reduce(((e,[n,s])=>{var a;return e+(null!=(a=t[n])?a:0)*s}),n)}function K(...e){const t={};for(const[s,a]of e)for(const[e,r]of Object.entries(a)){var n;t[e]=(null!=(n=t[e])?n:0)+s*r}return t}function V(e,t){const n=K([1,t.base],...Object.values(t.values).map((e=>[1/e.length,K(...e.map((e=>[1,e.values])))]))),s=e=>q(n,e,e.$c),a=new Map;d(e,(e=>{const{operation:t}=e;switch("mul"===t&&a.set(e,{min:NaN,max:NaN}),t){case"mul":case"min":case"max":case"threshold":case"res":case"sum_frac":e.operands.forEach((e=>a.set(e,{min:NaN,max:NaN})))}}),(e=>e));const r=F([...a.keys()],function(e){return N([Object.fromEntries(Object.entries(e.base).map((([e,t])=>[e,{min:t,max:t}]))),...Object.values(e.values).map((e=>A(e)))])}(t));for(const[o,l]of r.entries())a.set(o,l);function i(e,t,n,s){return K([1,{$c:n-e*t}],[e,s])}function c(e,t,n,s,a,r){return Math.abs(e-n)<1e-10?{$c:r?Math.max(t,s):Math.min(t,s)}:i((s-t)/(n-e),e,t,a)}const h="u",m="l";return p(e,h,((e,t,n)=>{const{operation:r}=e,d=(e,s=t)=>n(e,s),p=t===h?m:h;if("o"===t){const{min:t,max:n}=a.get(e);if(t<0&&n>0)throw new _("Zero-crossing",r);return d(e,n<=0?m:h)}switch(r){case"const":return{$c:e.value};case"read":return{$c:0,[e.path[1]]:1};case"add":return K(...e.operands.map((e=>[1,d(e)])));case"min":case"max":{const n=g[r],s=e.operands.filter((e=>"const"!==e.operation)),[o]=s;if(1!==s.length)throw new _("Multivariate",r);const i=d(o),l=n(e.operands.filter((e=>"const"===e.operation)).map((e=>e.value)));if("max"===r&&t===m||"min"===r&&t===h)return i;const{min:u,max:p}=a.get(o);return c(u,n([u,l]),p,n([p,l]),i,t===h)}case"res":{if(t!==h)throw new _("Unsupported direction",r);const n=g[r],[s]=e.operands,{min:o,max:i}=a.get(s),l=d(s,p);return o<0&&i<1.75?K([1,{$c:1}],[-.5,l]):c(o,n([o]),i,n([i]),l,t===h)}case"sum_frac":{if(t!==h)throw new _("Unsupported direction",r);const[n,s]=e.operands;if("const"!==s.operation)throw new _("Non-constant node",r);const o=d(n),c=s.value,{min:l,max:u}=a.get(n),p=Math.sqrt((l+c)*(u+c));if(l<=-c)throw new _("Unsupported pattern",r);return i(c/(c+p)/(c+p),p,p/(p+c),o)}case"threshold":{const[n,s,o,c]=e.operands;if("const"!==c.operation||"const"!==s.operation)throw new _("Non-constant node",r);if("const"!==o.operation){if(0!==c.value)throw new _("Unsupported pattern",r);const e=(f=s,v=1,b=c,{operation:"threshold",operands:[u(n),u(f),u(v),u(b)],info:w}),t=function(...e){return{operation:"mul",operands:l(e)}}(e,o),{min:i,max:h}=a.get(o);return a.set(e,{min:0,max:1}),a.set(t,{min:Math.min(i,0),max:Math.max(h,0)}),d(t)}const{min:m,max:g}=a.get(n),x=s.value,k=o.value,y=c.value,O=k>y==(t===h);return i((k-y)/(O?x-m:g-x),x,O?k:y,d(n,k>y?t:p))}case"mul":{const{min:n,max:o}=a.get(e);if(n<0&&o>0)throw new _("Zero-crossing",r);if(n<0&&t!==m||o>0&&t!==h)throw new _("Unsupported direction",r);const i=[...e.operands],c=[];let l=1;for(;i.length;){const e=i.pop();"mul"===e.operation?i.push(...e.operands):"const"===e.operation?l*=e.value:c.push(e)}const u=c.map((e=>d(e,"o"))),p=c.map((e=>a.get(e))),f=u.map(s),g=f.reduce(((e,t,n)=>e+(t>=0?p[n].max:p[n].min)/t),0),v=f.reduce(((e,t)=>e*g*t/u.length),l/g);return K(...u.map(((e,t)=>[v/f[t],e])))}default:o(r)}var f,v,b,w}))}class _ extends Error{constructor(e,t){super(`Found ${e} in ${t} node when generating polynomial upper bound`)}}class I{constructor({arts:e,optimizationTarget:t,filters:n,plotBase:s,maxBuilds:a},r){this.builds=[],this.buildValues=void 0,this.plotData=void 0,this.threshold=-1/0,this.maxBuilds=void 0,this.min=void 0,this.arts=void 0,this.nodes=void 0,this.callback=void 0,this.interimReport=(e,t=!1)=>{this.refresh(t),this.callback(Object.assign({command:"interim",buildValues:this.buildValues},e)),this.buildValues=void 0,e.tested=0,e.failed=0,e.skipped=0},this.arts=e,this.min=n.map((e=>e.min)),this.maxBuilds=a,this.callback=r,this.nodes=n.map((e=>e.value)),this.nodes.push(t),s&&(this.plotData={},this.nodes.push(s)),this.nodes=function(e,t,n=(e=>!1)){let s=x(e,t,n);return s=b(s),w(s)}(this.nodes,{},(e=>!1))}compute(e,t){this.threshold>e&&(this.threshold=e);const{min:n,interimReport:s}=this,a=this;let r=R(this.arts,t);const i=z(r),c=this.builds.length;let l=this.nodes;({nodes:l,arts:r}=j(l,n,r,this.maxBuilds,{},{pruneArtRange:!0,pruneNodeRange:!0}));const u=Object.values(r.values).sort(((e,t)=>e.length-t.length)),h=function(e,t,n,s){let a='\n"use strict";\n// copied from the code above\nfunction res(res) {\n  if (res < 0) return 1 - res / 2\n  else if (res >= 0.75) return 1 / (res * 4 + 1)\n  return 1 - res\n}\nconst x0=0',r=1;const i=new Map;return d(e,(e=>{}),(e=>{const{operation:c,operands:l}=e,u="x"+r++,d=l.map((e=>i.get(e)));switch(i.set(e,u),c){case"read":{const r=n(e);let o=new Array(s).fill(null).map(((e,t)=>`(b[${t}].values["${r}"] ?? 0)`));t[r]&&0!==t[r]&&(o=[t[r].toString(),...o]),a+=`,${u}=${o.join("+")}`;break}case"const":i.set(e,`(${e.value})`);break;case"add":case"mul":a+=`,${u}=${d.join("add"===c?"+":"*")}`;break;case"min":case"max":a+=`,${u}=Math.${c}(${d})`;break;case"threshold":{const[e,t,n,s]=d;a+=`,${u}=(${e}>=${t})?${n}:${s}`;break}case"res":a+=`,${u}=res(${d[0]})`;break;case"sum_frac":a+=`,${u}=${d[0]}/(${d[0]}+${d[1]})`;break;default:o(c)}})),a+=`;\nreturn [${e.map((e=>i.get(e)))}]`,new Function("b",a)}(l,r.base,(e=>e.path[1]),u.length),p=Array(u.length),m={tested:0,failed:0,skipped:i-z(r)};!function e(t){if(t<0){const e=h(p);if(n.every(((t,n)=>t<=e[n]))){const t=e[n.length],{builds:s,plotData:r}=a;let o;if(t>=a.threshold&&(o={value:t,artifactIds:p.map((e=>e.id)).filter((e=>e))},s.push(o)),r){const s=e[n.length+1];(!r[s]||r[s].value<t)&&(o||(o={value:t,artifactIds:p.map((e=>e.id)).filter((e=>e))}),o.plot=s,r[s]=o)}}else m.failed+=1}else u[t].forEach((n=>{p[t]=n,e(t-1)})),0===t&&(m.tested+=u[0].length,m.tested>65536&&s(m))}(u.length-1),s(m,this.builds.length>c)}refresh(e){var t;const{maxBuilds:n}=this;var s;(Object.keys(null!=(t=this.plotData)?t:{}).length>=1e5&&(this.plotData=function(e){let t=.01,n=new Set(e.flatMap((e=>Object.values(e).map((e=>Math.round(e.plot/t))))));for(;n.size>1500;)t*=2,n=new Set([...n].map((e=>Math.round(e/2))));const s={};for(const a of e)for(const e of Object.values(a)){const n=Math.round(e.plot/t)*t;(!s[n]||s[n].value<e.value)&&(s[n]=e)}return s}([this.plotData])),this.builds.length>=1e3||e)&&(this.builds=this.builds.sort(((e,t)=>t.value-e.value)).slice(0,n),this.buildValues=this.builds.map((e=>e.value)),this.threshold=Math.max(this.threshold,null!=(s=this.buildValues[n-1])?s:-1/0))}}class X{constructor({arts:e},t){this.arts=void 0,this.filters=[],this.arts=e}addFilter(e){this.filters.push(e)}split(e,t){for(;this.filters.length;){const e=this.filters.pop();if(z(R(this.arts,e))<=t)return e;Y(this.arts,e,t).forEach((e=>this.addFilter(e)))}}}function Y(e,t,n){const s=R(e,t),a=k.map((e=>({slot:e,sets:new Set(s.values[e].map((e=>e.set)))}))).filter((({sets:e})=>e.size>1));if(!a.length)return function(e,t,n){const s=R(e,t),a=z(s),r=k.map((e=>({slot:e,length:s.values[e].length}))).filter((e=>e.length>1)),{slot:o,length:i}=r.reduce(((e,t)=>e.length<t.length?e:t)),c=Math.ceil(a/n),l=Math.min(c,i),u=Array(l).fill(0).map((e=>new Set));return s.values[o].forEach((({id:e},t)=>u[t%l].add(e))),u.map((e=>Object.assign({},t,{[o]:{kind:"id",ids:e}})))}(s,t,n);const{sets:r,slot:o}=a.reduce(((e,t)=>e.sets.size<t.sets.size?e:t));return[...r].map((e=>Object.assign({},t,{[o]:{kind:"required",sets:new Set([e])}})))}let L,G,Z;onmessage=({data:e})=>{const{command:t}=e;let n;switch(t){case"setup":L=e.id;const r=`split${L}`,i=`compute${L}`;try{G=new D(e,(e=>postMessage(Object.assign({id:L,source:r},e))))}catch(a){G=new X(e,(e=>postMessage(Object.assign({id:L,source:r},e))))}Z=new I(e,(e=>postMessage(Object.assign({id:L,source:i},e)))),n={command:"iterate"};break;case"split":e.filter&&G.addFilter(e.filter);n={command:"split",filter:G.split(e.threshold,e.minCount)};break;case"iterate":{const{threshold:t,filter:s}=e;Z.compute(t,s),n={command:"iterate"};break}case"finalize":{Z.refresh(!0);const{builds:e,plotData:t}=Z;n={command:"finalize",builds:e,plotData:t};break}case"count":{const{exclusion:t}=e,a=Z.arts,r=function*(e,t){const n=s(t.values,(e=>new Set(e.map((e=>e.set)))));e:for(const s of e){for(const[e,t]of Object.entries(s)){const s=n[e];switch(t.kind){case"required":if([...t.sets].every((e=>!s.has(e))))continue e;break;case"exclude":if([...s].every((e=>t.sets.has(e))))continue e}}yield s}}(C(t,[...new Set(Object.values(a.values).flatMap((e=>e.map((e=>e.set)))))]),a);let o=e.arts.map((e=>0));for(const n of r)e.arts.forEach(((e,t)=>o[t]+=z(R(e,n))));n={command:"count",counts:o};break}default:o(t)}postMessage(Object.assign({id:L},n))}})();