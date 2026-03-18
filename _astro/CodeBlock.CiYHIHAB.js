import{o as ae,a as se,i as B}from"./if.DHAxyi3G.js";import{h as ie,a as le,k as ce,l as de,p as me,V as ue,m as g,n as m,t as S,x as F,y as D,z as be,u as o,A as M,q as e,B as i,o as u,v as pe}from"./custom-element.Ca9pFJu8.js";import{a as fe}from"./css.CXxSfC9v.js";import{s as R}from"./attributes.DQOm5Lsm.js";import{s as X}from"./class.B1zQw7vT.js";import{s as y}from"./style.BMaJSTuq.js";import{b as H}from"./this.DLzgFf2K.js";function ve(h,p,l,c,w){ie&&le();var d=p.$$slots?.[l],n=!1;d===!0&&(d=p.children,n=!0),d===void 0||d(h,n?()=>c:c)}const ke={family:"Maple Mono CN"},P={src:"/_astro/arrow-down-s-line.C4R9Le1k.svg"},U={src:"/_astro/arrow-up-s-line.iUkzHvps.svg"},I={src:"/_astro/check-fill.Di9c9L1U.svg"},K={src:"/_astro/file-copy-fill.DeSCJhyB.svg"},Y={src:"/_astro/fullscreen-line.BkUoy_24.svg"},j={src:"/_astro/fullscreen-exit-line.DBtvXyzK.svg"};var ge=M('<span class="lang-text svelte-ipr7k2"> </span>'),he=M('<button class="collapse-btn svelte-ipr7k2"></button>'),we=M('<div><div class="header svelte-ipr7k2"><div class="controls svelte-ipr7k2"><div class="dot red svelte-ipr7k2"></div> <div class="dot yellow svelte-ipr7k2"></div> <div class="dot green svelte-ipr7k2"></div> <!></div> <div class="actions svelte-ipr7k2"><button class="action-btn svelte-ipr7k2" aria-label="Copy code"></button> <button class="action-btn svelte-ipr7k2"></button></div></div> <div><div class="content-wrapper svelte-ipr7k2"><!></div> <!></div></div>');const ye={hash:"svelte-ipr7k2",code:`\r
  /* 基础布局 */.codeblock.svelte-ipr7k2 {margin:1.5rem 0;border-radius:0.5rem;overflow:hidden;box-shadow:var(--codeblock-shadow);font-family:"Maple Mono", "Courier New", monospace;}.dark.codeblock.svelte-ipr7k2 {box-shadow:none;}\r
\r
  /* Header 样式 */.header.svelte-ipr7k2 {display:flex;justify-content:space-between;align-items:center;padding:0.5rem 1rem;background-color:var(--surface-code-header);min-height:1.5rem;border-top-right-radius:0.5rem;border-top-left-radius:0.5rem;}.controls.svelte-ipr7k2 {display:flex;align-items:center;gap:0.6rem;margin-left:0.8125rem;}.dot.svelte-ipr7k2 {width:0.9375rem;height:0.9375rem;border-radius:50%;}.red.svelte-ipr7k2 {background:var(--codeblock-dot-red);}.yellow.svelte-ipr7k2 {background:var(--codeblock-dot-yellow);}.green.svelte-ipr7k2 {background:var(--codeblock-dot-green);}.lang-text.svelte-ipr7k2 {margin-left:0.75rem;font-size:1rem;color:var(--text-color-muted);text-transform:uppercase;}.actions.svelte-ipr7k2 {display:flex;flex-direction:row;gap:0.75rem;padding-right:1.5rem;color:var(--text-color-muted);}.action-btn.svelte-ipr7k2 {border:none;cursor:pointer;background-color:var(--codeblock-action-color);width:1.1rem;height:1.1rem;mask-size:contain;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:contain;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;transition:background-color 0.2s;}.action-btn.svelte-ipr7k2:hover {background-color:var(--codeblock-action-hover-color);}\r
\r
  /* 内容容器 - 支持折叠 */.content-container.svelte-ipr7k2 {position:relative;transition:max-height 0.3s ease-in-out;}.content-container.collapsed.svelte-ipr7k2 {max-height:400px;overflow:hidden;}.content-container.collapsed.svelte-ipr7k2::after {content:"";position:absolute;bottom:0;left:0;right:0;height:100px;background:linear-gradient(\r
      to bottom,\r
      transparent,\r
      var(--codeblock-collapse-gradient-end)\r
    );pointer-events:none;}.collapse-btn.svelte-ipr7k2 {position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);background-color:var(--codeblock-action-color);border:1px solid var(--border-color-muted);border-radius:50%;width:2rem;height:2rem;mask-size:1.75rem;mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:1.25rem;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;cursor:pointer;transition:all 0.2s ease;box-shadow:var(--codeblock-button-shadow);z-index:var(--z-dropdown);\r
    animation: svelte-ipr7k2-float 2s ease-in-out infinite;scale:1.5;}.collapse-btn.svelte-ipr7k2:hover {background-color:var(--codeblock-action-hover-color);transform:translateX(-50%) scale(1.1);box-shadow:var(--codeblock-button-shadow-hover);}\r
\r
  /* 飘动动画 */\r
  @keyframes svelte-ipr7k2-float {\r
    0%,\r
    100% {\r
      transform: translateX(-50%) translateY(0);\r
    }\r
    50% {\r
      transform: translateX(-50%) translateY(-6px);\r
    }\r
  }.collapse-btn.svelte-ipr7k2:hover {animation-play-state:paused;}\r
\r
  /* 核心：处理插槽内的样式 */code-block pre * {font-family:"Maple Mono", "Courier New", Courier, monospace;font-size:0.925rem;line-height:1.25rem;line-break:anywhere;white-space:break-spaces;}code-block pre {padding:0.925rem;margin:0;border-bottom-right-radius:0.5rem;border-bottom-left-radius:0.5rem;background-color:var(--surface-code) !important;overflow-x:auto;}html[data-theme="dark"] code-block span {color:var(--shiki-dark) !important;}\r
\r
  /* 行号样式 */code-block .line {color:inherit;text-indent:-2.5rem;padding-left:2.5rem;display:block;min-height:1.25rem;contain-intrinsic-height:24px;transition:background-color 0.15s ease,\r
      opacity 0.15s ease,\r
      box-shadow 0.15s ease;}code-block .line:hover {background-color:var(--line-hover-bg);}code-block code {counter-reset:step;counter-increment:step 0;display:flex;flex-direction:column;}code-block code .line::before {content:counter(step);counter-increment:step;width:1rem;margin-right:1.5rem;display:inline-block;text-align:right;color:var(--text-color-muted);}\r
\r
  /* 行高亮（highlight + meta highlight 复用同一个 class） */code-block .line.highlighted {background-color:var(--cb-line-highlight-bg);box-shadow:inset 0.25rem 0 0 var(--cb-line-highlight-border);}\r
\r
  /* Diff（增删行） */code-block .line.diff.add {background-color:var(--cb-diff-add-bg);box-shadow:inset 0.25rem 0 0 var(--cb-diff-add-border);}code-block .line.diff.remove {background-color:var(--cb-diff-remove-bg);box-shadow:inset 0.25rem 0 0 var(--cb-diff-remove-border);}\r
\r
  /* 不占用额外 DOM 的情况下，用行号前缀标识 + / -（避免覆盖 .line::before 计数逻辑） */code-block code .line.diff.add::before {content:counter(step) " +";color:var(--cb-diff-add-border);}code-block code .line.diff.remove::before {content:counter(step) " -";color:var(--cb-diff-remove-border);}\r
\r
  /* Focus（聚焦显示）：当存在 focused 行时，其他行整体淡化 */code-block pre.has-focused .line {opacity:var(--cb-focus-dim-opacity);}code-block pre.has-focused .line.focused {opacity:1;background-color:var(--cb-focus-bg);box-shadow:inset 0.25rem 0 0 var(--cb-focus-border);}\r
\r
  /* Error / Warning（基于 transformerNotationErrorLevel） */code-block .line.highlighted.error {background-color:var(--cb-error-bg);box-shadow:inset 0.25rem 0 0 var(--cb-error-border);}code-block .line.highlighted.warning {background-color:var(--cb-warning-bg);box-shadow:inset 0.25rem 0 0 var(--cb-warning-border);}code-block .highlighted-word {background-color:var(--cb-highlighted-word-bg);border-radius:0.2rem;padding:0.05rem 0.15rem;}code-block .dark {box-shadow:none;}\r
\r
  /* 全屏样式 */.fullscreen.svelte-ipr7k2 {position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;margin:0;z-index:var(--z-fullscreen);border-radius:0;\r
    animation: svelte-ipr7k2-fullscreenIn 0.3s ease-out;display:flex;flex-direction:column;background-color:var(--codeblock-overlay-bg);backdrop-filter:blur(8px);padding:2rem;box-sizing:border-box;}.fullscreen.svelte-ipr7k2 .header:where(.svelte-ipr7k2) {border-radius:0.5rem 0.5rem 0 0;}.fullscreen.svelte-ipr7k2 .content-container:where(.svelte-ipr7k2) {flex:1;overflow:auto;max-height:none !important;border-radius:0 0 0.5rem 0.5rem;}.fullscreen.svelte-ipr7k2 .content-container.collapsed:where(.svelte-ipr7k2) {max-height:none !important;}.fullscreen.svelte-ipr7k2 .content-container:where(.svelte-ipr7k2)::after {display:none;}.fullscreen.svelte-ipr7k2 pre {border-radius:0 0 0.5rem 0.5rem !important;}\r
\r
  @keyframes svelte-ipr7k2-fullscreenIn {\r
    from {\r
      opacity: 0;\r
      transform: scale(0.95);\r
    }\r
    to {\r
      opacity: 1;\r
      transform: scale(1);\r
    }\r
  }.exiting.svelte-ipr7k2 {\r
    animation: svelte-ipr7k2-fullscreenOut 0.3s ease-in forwards;}\r
\r
  @keyframes svelte-ipr7k2-fullscreenOut {\r
    from {\r
      opacity: 1;\r
      transform: scale(1);\r
    }\r
    to {\r
      opacity: 0;\r
      transform: scale(0.95);\r
    }\r
  }`};function xe(h,p){me(p,!0),fe(h,ye);let l=i(null),c=i(!1),w=i(""),d=i(!1),n=i(!1),$=i(!1),s=i(!1),x=i(!1),N=i(null);const J=15;async function V(){const a=(e(l)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(b=>b.tagName==="PRE");if(!a)return;const k=a.textContent??"";try{await navigator.clipboard.writeText(k),o(c,!0),setTimeout(()=>{o(c,!1)},3e3)}catch(b){console.error("Failed to copy:",b)}}function W(){const a=(e(l)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(b=>b.tagName==="PRE");return a?a.getAttribute("data-language")??"":""}function G(){const a=(e(l)?.querySelector("slot")?.assignedElements({flatten:!0})??[]).find(ne=>ne.tagName==="PRE");if(!a)return;const k=a.querySelector("code");if(!k)return;k.querySelectorAll(".line").length>J&&(o($,!0),o(n,!0))}function Q(){o(n,!e(n))}function q(){e(s)?(o(x,!0),setTimeout(()=>{o(s,!1),o(x,!1),typeof document<"u"&&(document.body.style.overflow="")},300)):(o(s,!0),typeof document<"u"&&(document.body.style.overflow="hidden"))}function A(r){r.key==="Escape"&&e(s)&&q()}ae(async()=>{o(w,W(),!0),setTimeout(()=>{G()},100),typeof window<"u"&&window.addEventListener("keydown",A)}),se(()=>{typeof window<"u"&&window.removeEventListener("keydown",A),typeof document<"u"&&(document.body.style.overflow="")});const O=()=>{const r=document.documentElement.dataset.theme;o(d,r==="dark")};ue(()=>{O();const r=new MutationObserver(O);return r.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>r.disconnect()});var f=we(),_=m(f),E=m(_),Z=g(m(E),6);{var ee=r=>{var t=ge(),a=m(t,!0);u(t),S(()=>pe(a,e(w))),D(r,t)};B(Z,r=>{e(w)&&r(ee)})}u(E);var T=g(E,2),C=m(T),L=g(C,2);u(T),u(_);var z=g(_,2),v=m(z),re=m(v);ve(re,p,"default",{}),u(v),H(v,r=>o(l,r),()=>e(l));var oe=g(v,2);{var te=r=>{var t=he();S(()=>{y(t,`mask-image: url(${(e(n)?P.src:U.src)??""}); -webkit-mask-image: url(${(e(n)?P.src:U.src)??""});`),R(t,"aria-label",e(n)?"Expand code":"Collapse code")}),F("click",t,Q),D(r,t)};B(oe,r=>{e($)&&!e(s)&&r(te)})}u(z),u(f),H(f,r=>o(N,r),()=>e(N)),S(()=>{X(f,1,`codeblock ${e(d)?"dark":""} ${e(s)?"fullscreen":""} ${e(x)?"exiting":""}`,"svelte-ipr7k2"),y(C,`mask-image: url(${(e(c)?I.src:K.src)??""}); -webkit-mask-image: url(${(e(c)?I.src:K.src)??""});`),y(L,`mask-image: url(${(e(s)?j.src:Y.src)??""}); -webkit-mask-image: url(${(e(s)?j.src:Y.src)??""});`),R(L,"aria-label",e(s)?"Exit fullscreen":"Enter fullscreen"),X(z,1,`content-container ${e(n)?"collapsed":""}`,"svelte-ipr7k2"),y(v,`font-family: ${ke.family};`)}),F("click",C,V),F("click",L,q),D(h,f),be()}ce(["click"]);customElements.define("code-block",de(xe,{},["default"],[],{mode:"open"}));export{xe as default};
