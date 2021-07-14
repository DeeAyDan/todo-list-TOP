(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(645),i=n.n(o)()((function(t){return t[1]}));i.push([t.id,"#content {\n    height: 100%;\n    width: 100%;\n    bottom: 0px;\n    right: 0px;\n    left: 0px;\n    top: 0px;\n    position:absolute;\n    background: #2d142cc2;}\n#title-box{\n    justify-content: center;\n    display: flex;\n    padding-bottom: 5%;}\n#control-panel{\n    background: #2D142C;\n    height: 100%;\n    width: 20%;\n    position: absolute;}\n.control-button{\n    width: 100%;\n    height: 5%;\n    background: #2d142c;\n    color: wheat;\n    border: none;\n    font-weight: bolder;\n    font-size: 100%;}\n#list-manager{\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    font-size: 100%;}\n.delete-list{\n    position: absolute;\n    right: 0%;\n    height: 5%;\n    width: 20%;\n    border: none;\n    background: none;\n    color: #ee5353;\n    font-weight: bold;}\n#add-button{\n    color: #53ee64;}\n#list-input{\n    width: 90%;\n    left: 5%;\n    position: relative;\n    border-radius: 5px;\n    margin-top: 5%;}\n\n#display-title{\n    background: #510A32;\n    margin-top: 3%;\n    margin-left: 23%;\n    margin-right: 3%;\n    height: 10%;\n    text-align: center;\n    justify-content: center;\n    display: grid;\n    font-size: 150%;\n    font-weight: bold;\n    color: wheat;\n    position: relative;}\n#add-todo-button{\n    position: absolute;\n    right: 5%;\n    display: grid;\n    align-self: center;\n    color: #53ee64;\n    background: none;\n    border: none;\n    font-weight: bold;\n    font-size: 2vw;\n    justify-content: center;\n    align-content: center;}\n.display-content{ \n    margin-top: 3%;\n    margin-left: 23%;\n    margin-right: 3%;\n    margin-bottom: 0%;}\n.display-element{\n    display: flex;\n    position: relative;}\n.priority{\n    height: 2.5vh;\n    width: 2.5vh;\n    position: relative;\n    margin-top: auto;\n    margin-bottom: auto;\n    margin-left: 5%;\n    border-radius: 50%;}\n.display-todo{\n    margin-left: 20%;\n    color: wheat;\n    font-weight: bold;\n    font-size: 1.2vw;}\n.display-all-lists-and-all-todos{\n    color: wheat;\n    font-weight: bold;\n    font-size: 1.2vw;\n    height: 50px;\n    align-content: center;\n    display: grid;\n    padding-left: 5%;}\n.delete-todo{\n    background: none;\n    border: none;\n    color: #ee5353;\n    font-size: 1.3vw;\n    font-weight: bold;\n    position: absolute;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    right: 5%;\n    align-self: center;\n    height: 100%;}\n.odd{\n    background: #612b5d;}\n.even{\n    background: #612b5d;}\n.high-priority{\n    background: #801313;}\n.medium-priority{\n        background: #c7b02c;}\n.low-priority{\n        background: #53ee65;}\n\n.active{\n    background: #510A32;}\n\n#footer {\n    background: black;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 32px;\n    right: 0px;\n    left: 0px;\n    bottom: 0px;\n    margin-bottom: 0px;\n    position: fixed;}\n#github-icon{\n    padding-left: 25px;}\n.unselectable{\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;}\n\n.control-button:hover{\n    background: #510A32;}\n.delete-list:hover{\n    background: #510a0a;}\n#add-button:hover{\n    background: #53ee655d;}\n.high-priority:hover{\n    box-shadow: 0px 0px 10px 2px #801313;}\n.medium-priority:hover{\n    box-shadow: 0px 0px 10px 2px #c7b02c;}\n.low-priority:hover{\n    box-shadow: 0px 0px 10px 2px #53ee65;}\n.delete-todo:hover{\n    background: #510a0a;}\n#add-todo-button:hover{\n    background: #53ee655d;}\n\n#form-background{\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    z-index: 2;}\n#form{\n    position: fixed;\n    width: 30%;\n    height: 60%;\n    background: #2d142c;\n    left: 35%;\n    top: 20%;\n    box-shadow: 0px 0px 20px 20px #510a32;\n    z-index: 3;}\n#form-title{\n    text-align: center;\n    font-size: 36px;\n    font-weight: bold;\n    margin-top: 0px;\n    text-shadow: 2px 2px black;\n    color: wheat;}\n.form-todo-name{\n    justify-content: center;\n    display: grid;\n    color: wheat;\n    font-weight: bold;}\n#add-todo-input{\n    width: 80%;\n    left: 10%;\n    position: relative;}\n#submit-button{\n    position: absolute;\n    right: 10;\n    bottom: 10;\n    background: #53ee65a4;\n    border: none;\n    color: wheat;\n    font-weight: bold;\n    height: 8vh;\n    width: 8vw;}\n#cancel-button{\n    position: absolute;\n    left: 10;\n    bottom: 10;\n    background: #510a0abe;\n    border: none;\n    color: wheat;\n    font-weight: bold;\n    height: 8vh;\n    width: 8vw;}\n#radio-section{\n    padding-left: 20%;\n    padding-right: 20%;\n    padding-top: 10%;\n    color: wheat;}",""]);const r=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(i[d]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},695:t=>{var e={};t.exports=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},d=[],a=0;a<t.length;a++){var c=t[a],l=o.base?c[0]+o.base:c[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(e[p].references++,e[p].updater(m)):e.push({identifier:u,updater:i(m,o),references:1}),d.push(u)}return d}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var d=0;d<r.length;d++){var a=n(r[d]);e[a].references--}for(var c=o(t,i),l=0;l<r.length;l++){var s=n(r[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=c}}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o=n.css,i=n.media,r=n.sourceMap;i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(795),i=n.n(o),r=n(695),d=n.n(r),a=n(216),c=n.n(a),l=n(890),s={styleTagTransform:function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}},setAttributes:function(t){var e=n.nc;e&&t.setAttribute("nonce",e)},insert:function(t){var e=d()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}};function u(){const t=document.querySelector("body"),e=document.querySelector("#form-background");t.removeChild(e),document.querySelector("#content").setAttribute("style","filter:blur(0px)")}function p(){document.querySelectorAll(".delete-todo").forEach((t=>{t.addEventListener("click",(function(t){t.currentTarget.parentNode.remove()}))}))}function m(){document.querySelectorAll(".priority").forEach((t=>{t.addEventListener("click",(function(){t.classList.contains("low-priority")?(t.classList.remove("low-priority"),t.classList.add("medium-priority")):t.classList.contains("medium-priority")?(t.classList.remove("medium-priority"),t.classList.add("high-priority")):t.classList.contains("high-priority")&&(t.classList.remove("high-priority"),t.classList.add("low-priority"))}))}))}function h(){const t=document.querySelector("body"),e=document.createElement("div");e.setAttribute("id","form-background"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("id","form"),e.appendChild(n);const o=document.createElement("p");o.setAttribute("id","form-title"),o.textContent="Add todo",n.appendChild(o);const i=document.createElement("div");n.appendChild(i);const r=document.createElement("p");r.classList.add("form-todo-name"),r.textContent="Todo name",i.appendChild(r);const d=document.createElement("input");d.setAttribute("id","add-todo-input"),d.setAttribute("placeholder","Type todo's name"),i.appendChild(d);const a=document.createElement("div");a.setAttribute("id","radio-section"),n.appendChild(a);const c=document.createElement("p");c.classList.add("form-todo-name"),c.textContent="Priority",a.appendChild(c);const l=document.createElement("input");l.setAttribute("type","radio"),l.setAttribute("id","low-radio"),l.setAttribute("name","todo-priority-form"),l.setAttribute("value","Low"),a.appendChild(l);const s=document.createElement("label");s.setAttribute("for","low-radio"),s.textContent="Low",a.appendChild(s);const h=document.createElement("br");a.appendChild(h);const f=document.createElement("input");f.setAttribute("type","radio"),f.setAttribute("id","medium-radio"),f.setAttribute("name","todo-priority-form"),f.setAttribute("value","Medium"),a.appendChild(f);const b=document.createElement("label");b.setAttribute("for","medium-radio"),b.textContent="Medium",a.appendChild(b);const y=document.createElement("br");a.appendChild(y);const g=document.createElement("input");g.setAttribute("type","radio"),g.setAttribute("id","high-radio"),g.setAttribute("name","todo-priority-form"),g.setAttribute("value","High"),a.appendChild(g);const v=document.createElement("label");v.setAttribute("for","high-radio"),v.textContent="High",a.appendChild(v);const x=document.createElement("br");a.appendChild(x);const w=document.createElement("button");w.setAttribute("id","submit-button"),w.textContent="Add",n.appendChild(w);const C=document.createElement("button");C.setAttribute("id","cancel-button"),C.textContent="Cancel",n.appendChild(C),C.addEventListener("click",(function(t){u()})),w.addEventListener("click",(function(t){document.querySelectorAll(".display-content").forEach((t=>{t.classList.contains("active-display")&&(function(){const t=document.querySelector(".active-display"),e=document.createElement("div");t.appendChild(e);let n=!0;n?(e.classList.add("odd"),e.classList.add("display-element"),n=!1):n||(e.classList.add("even"),e.classList.add("display-element"),n=!0);const o=document.createElement("div");o.classList.add("priority"),e.appendChild(o),document.querySelector("#low-radio");const i=document.querySelector("#medium-radio");document.querySelector("#high-radio").checked?o.classList.add("high-priority"):i.checked?o.classList.add("medium-priority"):o.classList.add("low-priority");const r=document.createElement("p");e.appendChild(r),r.classList.add("display-todo");const d=document.querySelector("#add-todo-input");r.textContent=d.value;const a=document.createElement("button");e.appendChild(a),a.classList.add("delete-todo"),a.textContent="Delete"}(),m(),p())})),u()})),document.querySelector("#content").setAttribute("style","filter:blur(8px)")}function f(){document.querySelectorAll(".delete-list").forEach((t=>{t.addEventListener("click",(function(t){const e=t.currentTarget.parentNode.firstChild.textContent.toLowerCase().replace(/\s/g,"");document.getElementById(e).remove(),t.currentTarget.parentNode.remove()}))}))}function b(t){const e=document.querySelector("#lists"),n=document.getElementById("list-input");if(function(t){const e=document.getElementById("display"),n=document.createElement("div");e.appendChild(n),n.classList.add("display-content"),n.id=t}(t.toLowerCase().replace(/\s/g,"")),""===t)alert("List name can not be empty.");else{const o=document.createElement("div");e.appendChild(o);const i=document.createElement("button");i.classList.add("control-button"),i.classList.add("active-button"),i.classList.add("list-button"),o.appendChild(i);const r=document.createElement("button");r.classList.add("delete-list"),o.appendChild(r),i.textContent=t,r.textContent="Delete",n.value=""}f()}function y(){const t=document.querySelectorAll(".list-button"),e=document.querySelectorAll(".display-content");t.forEach((function(n){n.addEventListener("click",(function(){e.forEach((t=>{t.style.display="none",t.classList.remove("active-display")})),t.forEach((function(t){t.classList.remove("active")}));const o=n.textContent.toLowerCase().replace(/\s/g,""),i=document.getElementById(o);var r;i.style.display="block",i.classList.add("active-display"),n.classList.add("active"),r=n.textContent,document.querySelector("#display-text").textContent=r,document.querySelector("#add-todo-button").style.display="block",document.querySelector("#all-list").classList.remove("active"),document.querySelector("#all-todos").classList.remove("active")}))}))}function g(){const t=document.querySelectorAll(".list-button"),e=document.querySelector("#alllist");e.innerHTML="";var n=!0;t.forEach((t=>{if(n){const o=document.createElement("div");o.classList.add("display-element"),o.classList.add("odd"),o.classList.add("display-all-lists-and-all-todos"),o.textContent=t.textContent,e.appendChild(o),n=!1}else if(!n){const o=document.createElement("div");o.classList.add("display-element"),o.classList.add("even"),o.classList.add("display-all-lists-and-all-todos"),o.textContent=t.textContent,e.appendChild(o),n=!0}}))}s.domAPI=i(),s.insertStyleElement=c(),e()(l.Z,s),l.Z&&l.Z.locals&&l.Z.locals,p(),f(),m();const v=document.querySelector("#add-todo-button"),x=document.querySelector("#add-button"),w=document.querySelector("#list-input"),C=document.querySelector("#all-list");document.querySelector("#default-list").addEventListener("click",(t=>{y()})),C.addEventListener("click",(t=>{document.querySelector("#display-text").textContent="All lists",document.querySelector("#add-todo-button").style.display="none",document.querySelectorAll(".display-content").forEach((t=>{t.style.display="none"})),function(){const t=document.querySelector("#display"),e=document.querySelector("#alllist");if(!e){const e=document.createElement("div");return e.classList.add("display-content"),e.id="alllist",t.appendChild(e),e.style.display="block",void g()}e.style.display="block",g()}(),document.querySelectorAll(".list-button").forEach((t=>{t.classList.remove("active")})),document.querySelector("#all-list").classList.add("active")})),v.addEventListener("click",(t=>{h()})),x.addEventListener("click",(function(t){b(document.getElementById("list-input").value),y()})),w.addEventListener("keyup",(function(t){13===t.keyCode&&(b(document.getElementById("list-input").value),y())}))})()})();