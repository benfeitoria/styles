!function n(a,c,i){function s(r,e){if(!c[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(u)return u(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var o=c[r]={exports:{}};a[r][0].call(o.exports,function(e){return s(a[r][1][e]||e)},o,o.exports,n,a,c,i)}return c[r].exports}for(var u="function"==typeof require&&require,e=0;e<i.length;e++)s(i[e]);return s}({1:[function(e,r,t){"use strict";var l=document.querySelectorAll(".alert--dismissible"),o=!0,n=!1,a=void 0;try{for(var c,i=l[Symbol.iterator]();!(o=(c=i.next()).done);o=!0){c.value.querySelector(".alert__close").addEventListener("click",function(e){e.preventDefault(),e.toElement.parentElement.classList.add("fade-out")})}}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}},{}],2:[function(e,r,t){"use strict";var l=document.querySelectorAll(".navigation--top--mobile"),o=!0,n=!1,a=void 0;try{for(var c,i=function(){var t=c.value,e=t.querySelectorAll("li.dropdown"),r=!0,l=!1,o=void 0;try{for(var n,a=e[Symbol.iterator]();!(r=(n=a.next()).done);r=!0){n.value.querySelector("a").addEventListener("click",function(e){e.preventDefault(),e.target.nextElementSibling.classList.toggle("collapsed")})}}catch(e){l=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(l)throw o}}t.querySelector("i.navigation--top--mobile__heading__menu-toggle").addEventListener("click",function(e){var r=e.target;r.classList.toggle("bfi--menu"),r.classList.toggle("bfi--times"),t.classList.toggle("collapsed")})},s=l[Symbol.iterator]();!(o=(c=s.next()).done);o=!0)i()}catch(e){n=!0,a=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}},{}],3:[function(e,r,t){"use strict";var l=document.querySelectorAll(".progress-bar"),o=!0,n=!1,a=void 0;try{for(var c,i=l[Symbol.iterator]();!(o=(c=i.next()).done);o=!0){var s=c.value;s.classList.contains("progress-bar--sm")&&s.querySelector("circle")?s.querySelector("circle").r.baseVal.value="9":s.classList.contains("progress-bar--md")&&s.querySelector("circle")?s.querySelector("circle").r.baseVal.value="11":s.classList.contains("progress-bar")&&s.querySelector("circle")&&(s.querySelector("circle").r.baseVal.value="24")}}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}v({percent:50,id:"example-progress-bar"}),v({percent:50,id:"example-progress-bar-md"}),v({percent:50,id:"example-progress-bar-sm"}),v({id:"live-example-c"}),v({id:"live-example-h",type:"horizontal"});var u=document.querySelector("#live-example-value-c");u.addEventListener("change",function(e){v({percent:u.value,id:"live-example-c"})});var d=document.querySelector("#live-example-value-h");function v(e){if(e.id){var r="#"+e.id,t=e.percent?e.percent:0;if("circle"==(e.type?e.type:"circle")){var l=document.querySelector(r).querySelector(".progress-bar__text"),o=document.querySelector(r).querySelector("circle"),n=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray="".concat(n," ").concat(n),o.style.strokeDashoffset="".concat(n);var a=n-t/100*n;o.style.strokeDashoffset=a,l&&(l.innerHTML=t+"%"),100==t?document.querySelector(r).classList.add("progress-bar--done"):document.querySelector(r).classList.remove("progress-bar--done")}else document.querySelector(r).value=t}}d.addEventListener("change",function(e){v({percent:d.value,id:"live-example-h",type:"horizontal"})})},{}],4:[function(e,r,t){"use strict";e("./components/alert"),e("./components/navbar"),e("./components/progressbar"),r.exports={}},{"./components/alert":1,"./components/navbar":2,"./components/progressbar":3}]},{},[4]);
//# sourceMappingURL=main.js.map
