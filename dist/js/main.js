!function o(r,a,i){function l(t,e){if(!a[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(d)return d(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var c=a[t]={exports:{}};r[t][0].call(c.exports,function(e){return l(r[t][1][e]||e)},c,c.exports,o,r,a,i)}return a[t].exports}for(var d="function"==typeof require&&require,e=0;e<i.length;e++)l(i[e]);return l}({1:[function(e,t,n){"use strict";document.querySelectorAll(".js-alert-dismissible").forEach(function(e){var t=e.querySelector(".alert__close");t&&t.addEventListener("click",function(e){e.preventDefault(),t.parentElement.classList.add("fade-out")})})},{}],2:[function(e,t,n){"use strict";var s=document.getElementsByClassName("collapse__action");Object.keys(s).forEach(function(e){s[e].addEventListener("click",function(e){var n=e.currentTarget;return n.classList.contains("radio")&&n.classList.contains("collapse__action")||e.preventDefault(),n.dataset.content.split(",").forEach(function(e){var t=document.getElementById(e);return n.classList.contains("toggle")?($(t).closest(".collapse").find(".collapse__content").removeClass("is-expanded"),t.classList.add("is-expanded")):t.classList.contains("is-expanded")?t.classList.remove("is-expanded"):t.classList.add("is-expanded")}),n.classList.contains("toggle")?($(n).closest(".collapse").find(".collapse__action").removeClass("is-expanded"),n.classList.add("is-expanded")):n.classList.contains("is-expanded")?n.classList.remove("is-expanded"):n.classList.add("is-expanded")});!function n(e){return"A"===e.tagName&&e.addEventListener("click",function(e){e.stopPropagation()}),e.children&&[e.children].forEach(function(e){for(var t=0;t<e.length;t++)n(e.item(t))}),!1}(s[e])})},{}],3:[function(e,t,n){"use strict";var a=void 0;function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],s=!0,c=!1,o=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{s||null==a.return||a.return()}finally{if(c)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e){var t,n=[],s=document.getElementsByClassName("custom-select__items"),c=document.getElementsByClassName("custom-select__selected");for(t=0;t<c.length;t+=1)e===c[t]?n.push(t):c[t].classList.remove("custom-select__selected--active");for(t=0;t<s.length;t+=1)n.indexOf(t)&&s[t].classList.add("custom-select__items--hidden")}document.onreadystatechange=function(){"complete"===document.readyState&&setTimeout(function(){var e,t,n,s,c,o,r=document.getElementsByClassName("custom-select");for(e=0;e<r.length;e+=1)if(r[e].getElementsByTagName("select")){for(n=i(r[e].getElementsByTagName("select"),1)[0],(s=document.createElement("DIV")).setAttribute("class",n.disabled?"custom-select__selected custom-select__selected--disabled":"custom-select__selected"),n.selectedIndex=0<n.selectedIndex?n.selectedIndex:0,s.innerHTML=n.options[n.selectedIndex].innerHTML,r[e].appendChild(s),(c=document.createElement("DIV")).setAttribute("class","custom-select__items custom-select__items--hidden"),t=1;t<n.length;t+=1)(o=document.createElement("DIV")).innerHTML=n.options[t].innerHTML,o.addEventListener("click",function(){var e,t,n,s=i(a.parentNode.parentNode.getElementsByTagName("select"),1)[0],c=a.parentNode.previousSibling;for(t=0;t<s.length;t+=1)if(s.options[t].innerHTML===a.innerHTML){for(s.selectedIndex=t,c.innerHTML=a.innerHTML,e=a.parentNode.getElementsByClassName("custom-select__items--selected"),n=0;n<e.length;n+=1)e[n].removeAttribute("class");a.setAttribute("class","custom-select__items--selected");break}c.click()}),c.appendChild(o);r[e].appendChild(c),s.addEventListener("click",function(e){e.stopPropagation(),l(a),a.nextSibling.classList.toggle("custom-select__items--hidden"),a.classList.toggle("custom-select__selected--active")})}document.addEventListener("click",l)},1e3)}},{}],4:[function(e,t,n){"use strict";var s=document.querySelector(".navigation--top--mobile");s.querySelectorAll("li.dropdown").forEach(function(e){e.querySelector("a").addEventListener("click",function(e){e.preventDefault();var t="I"===e.target.tagName?e.target.parentElement:e.target;null!==t.nextElementSibling&&t.nextElementSibling.classList.toggle("collapsed")})});var c=s.querySelector("i.navigation--top--mobile__heading__menu-toggle");c&&c.addEventListener("click",function(e){var t=e.target;t.innerText="close"===t.innerText?"menu":"close",s.classList.toggle("collapsed")})},{}],5:[function(e,t,n){"use strict";window.progressBar=function(e){if(!e.id||!document.getElementById(e.id))return!1;var t=document.getElementById(e.id),n=e.percent?e.percent:0;if("circle"!==(e.type?e.type:"circle")&&t)t.value=n;else{var s=t.querySelector(".progress-bar__text"),c=t.querySelector("circle"),o="24";t.classList.contains("progress-bar--sm")?o="9":t.classList.contains("progress-bar--md")&&(o="11");var r=2*o*Math.PI;c.style.strokeDasharray="".concat(r," ").concat(r),c.style.strokeDashoffset="".concat(r);var a=r-n/100*r;c.style.strokeDashoffset=a,s&&(s.innerHTML="".concat(n,"%")),100===n?t.classList.add("progress-bar--done"):t.classList.remove("progress-bar--done")}}},{}],6:[function(e,t,n){"use strict";var s=document.querySelectorAll("input[type=radio]");s.forEach(function(e){var t=e;t.closest("label.radio").closest("li")&&(t.checked&&t.closest("label.radio").closest("li").classList.add("active"),t.addEventListener("change",function(){t.checked&&([].forEach.call(s,function(e){e.closest("label.radio").closest("li").classList.remove("active")}),t.closest("label.radio").closest("li").classList.add("active"))}))})},{}],7:[function(e,t,n){"use strict";document.querySelectorAll(".form-validation").forEach(function(e){e.addEventListener("submit",function(){e.querySelectorAll("input,textarea,select").forEach(function(e){e.validity.valid||(e.parentElement.classList.add("input-group--invalid"),e.parentElement.querySelector(".input-group__alert--error").classList.add("input-group__alert--active"))})},!1)})},{}],8:[function(e,t,n){"use strict";e("./components/alert"),e("./components/navbar"),e("./components/validation"),e("./components/progressbar"),e("./components/collapse"),e("./components/radio"),e("./components/custom-select"),t.exports={}},{"./components/alert":1,"./components/collapse":2,"./components/custom-select":3,"./components/navbar":4,"./components/progressbar":5,"./components/radio":6,"./components/validation":7}]},{},[8]);
//# sourceMappingURL=main.js.map
