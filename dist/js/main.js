!function a(l,s,c){function i(t,e){if(!s[t]){if(!l[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=s[t]={exports:{}};l[t][0].call(o.exports,function(e){return i(l[t][1][e]||e)},o,o.exports,a,l,s,c)}return s[t].exports}for(var u="function"==typeof require&&require,e=0;e<c.length;e++)i(c[e]);return i}({1:[function(e,t,r){"use strict";var n=document.querySelectorAll(".alert--dismissible"),o=!0,a=!1,l=void 0;try{for(var s,c=function(){var t=s.value.querySelector(".alert__close");t.addEventListener("click",function(e){e.preventDefault(),t.parentElement.classList.add("fade-out")})},i=n[Symbol.iterator]();!(o=(s=i.next()).done);o=!0)c()}catch(e){a=!0,l=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw l}}},{}],2:[function(e,t,r){"use strict";for(var n=document.getElementsByClassName("collapse__action"),o=0;o<n.length;o++)n[o].addEventListener("click",function(e){e.preventDefault();var r=e.currentTarget;r.dataset.content.split(",").forEach(function(e){var t=document.getElementById(e);r.classList.contains("toggle")?($(t).closest(".collapse").find(".collapse__content").removeClass("is-expanded"),t.classList.add("is-expanded")):t.classList.contains("is-expanded")?t.classList.remove("is-expanded"):t.classList.add("is-expanded")}),r.classList.contains("toggle")?($(r).closest(".collapse").find(".collapse__action").removeClass("is-expanded"),r.classList.add("is-expanded")):r.classList.contains("is-expanded")?r.classList.remove("is-expanded"):r.classList.add("is-expanded")})},{}],3:[function(e,t,r){"use strict";var n=document.querySelectorAll(".navigation--top--mobile"),o=!0,a=!1,l=void 0;try{for(var s,c=function(){var r=s.value,e=r.querySelectorAll("li.dropdown"),t=!0,n=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(t=(a=l.next()).done);t=!0){a.value.querySelector("a").addEventListener("click",function(e){e.preventDefault(),e.target.nextElementSibling.classList.toggle("collapsed")})}}catch(e){n=!0,o=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw o}}r.querySelector("i.navigation--top--mobile__heading__menu-toggle").addEventListener("click",function(e){var t=e.target;t.classList.toggle("bfi--menu"),t.classList.toggle("bfi--times"),r.classList.toggle("collapsed")})},i=n[Symbol.iterator]();!(o=(s=i.next()).done);o=!0)c()}catch(e){a=!0,l=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw l}}},{}],4:[function(e,t,r){"use strict";var n=document.querySelectorAll(".progress-bar"),o=!0,a=!1,l=void 0;try{for(var s,c=n[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var i=s.value;i.classList.contains("progress-bar--sm")&&i.querySelector("circle")?i.querySelector("circle").r.baseVal.value="9":i.classList.contains("progress-bar--md")&&i.querySelector("circle")?i.querySelector("circle").r.baseVal.value="11":i.classList.contains("progress-bar")&&i.querySelector("circle")&&(i.querySelector("circle").r.baseVal.value="24")}}catch(e){a=!0,l=e}finally{try{o||null==c.return||c.return()}finally{if(a)throw l}}window.progressBar=function(e){if(!e.id)return!1;var t="#"+e.id,r=e.percent?e.percent:0;if("circle"==(e.type?e.type:"circle")&&document.querySelector(t)){var n=document.querySelector(t).querySelector(".progress-bar__text"),o=document.querySelector(t).querySelector("circle"),a=2*o.r.baseVal.value*Math.PI;o.style.strokeDasharray="".concat(a," ").concat(a),o.style.strokeDashoffset="".concat(a);var l=a-r/100*a;o.style.strokeDashoffset=l,n&&(n.innerHTML=r+"%"),100==r?document.querySelector(t).classList.add("progress-bar--done"):document.querySelector(t).classList.remove("progress-bar--done")}else document.querySelector(t)&&(document.querySelector(t).value=r)}},{}],5:[function(e,t,r){"use strict";var n=document.querySelectorAll(".form-validation"),o=!0,a=!1,l=void 0;try{for(var c,s=function(){var s=c.value;s.addEventListener("submit",function(e){var t=!0,r=!1,n=void 0;try{for(var o,a=s.querySelectorAll("input,textarea,select")[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var l=o.value;l.validity.valid||l.parentElement.querySelector(".form-error").classList.add("form-error--active")}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}},!1)},i=n[Symbol.iterator]();!(o=(c=i.next()).done);o=!0)s()}catch(e){a=!0,l=e}finally{try{o||null==i.return||i.return()}finally{if(a)throw l}}},{}],6:[function(e,t,r){"use strict";e("./components/alert"),e("./components/navbar"),e("./components/validation"),e("./components/progressbar"),e("./components/collapse"),t.exports={}},{"./components/alert":1,"./components/collapse":2,"./components/navbar":3,"./components/progressbar":4,"./components/validation":5}]},{},[6]);
//# sourceMappingURL=main.js.map
