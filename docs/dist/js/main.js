(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Set default percentage for progress bar examples large, medium and small
progressBar({
  'percent': 50,
  'id': 'example-progress-bar'
});
progressBar({
  'percent': 50,
  'id': 'example-progress-bar-md'
});
progressBar({
  'percent': 50,
  'id': 'example-progress-bar-sm'
});
progressBar({
  'id': 'live-example-c'
});
progressBar({
  'id': 'live-example-h',
  'type': 'horizontal'
}); // Live example circle progress bar

var inputCircle = document.querySelector('#live-example-value-c');

if (inputCircle) {
  inputCircle.addEventListener('change', function (e) {
    progressBar({
      'percent': inputCircle.value,
      'id': 'live-example-c'
    });
  });
} // Live example horizontal progress bar


var inputHorizontal = document.querySelector('#live-example-value-h');

if (inputCircle) {
  inputHorizontal.addEventListener('change', function (e) {
    progressBar({
      'percent': inputHorizontal.value,
      'id': 'live-example-h',
      'type': 'horizontal'
    });
  });
}

},{}],2:[function(require,module,exports){
"use strict";

require('../../js/main');

require('./components/progressbar');

},{"../../js/main":9,"./components/progressbar":1}],3:[function(require,module,exports){
"use strict";

var alertDismissibles = document.querySelectorAll('.js-alert-dismissible');
alertDismissibles.forEach(function (alertDismissible) {
  var element = alertDismissible.querySelector('.alert__close');

  if (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();
      element.parentElement.classList.add('fade-out');
    });
  }
});

},{}],4:[function(require,module,exports){
"use strict";

var actions = document.getElementsByClassName('collapse__action');
Object.keys(actions).forEach(function (key) {
  actions[key].addEventListener('click', function (event) {
    var element = event.currentTarget;

    if (!(element.classList.contains('radio') && element.classList.contains('collapse__action'))) {
      event.preventDefault();
    } // Show/hidden multiple or single content when action is trigger


    element.dataset.content.split(',').forEach(function (contentId) {
      var collapseContent = document.getElementById(contentId); // Add class 'is-expanded' to one element at a time if aciton has class 'toggle'

      if (element.classList.contains('toggle')) {
        $(collapseContent).closest('.collapse').find('.collapse__content').removeClass('is-expanded');
        return collapseContent.classList.add('is-expanded');
      }

      if (collapseContent.classList.contains('is-expanded')) {
        return collapseContent.classList.remove('is-expanded');
      }

      return collapseContent.classList.add('is-expanded');
    }); // Add class 'is-expanded' to one action at a time

    if (element.classList.contains('toggle')) {
      $(element).closest('.collapse').find('.collapse__action').removeClass('is-expanded');
      return element.classList.add('is-expanded');
    }

    if (element.classList.contains('is-expanded')) {
      return element.classList.remove('is-expanded');
    }

    return element.classList.add('is-expanded');
  });
});

},{}],5:[function(require,module,exports){
"use strict";

var _this = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function closeAllSelect(elmnt) {
  var i;
  var arrNo = [];
  var optionsDiv = document.getElementsByClassName('custom-select__items');
  var optionSelected = document.getElementsByClassName('custom-select__selected');

  for (i = 0; i < optionSelected.length; i += 1) {
    if (elmnt === optionSelected[i]) {
      arrNo.push(i);
    } else {
      optionSelected[i].classList.remove('custom-select__selected--active');
    }
  }

  for (i = 0; i < optionsDiv.length; i += 1) {
    if (arrNo.indexOf(i)) {
      optionsDiv[i].classList.add('custom-select__items--hidden');
    }
  }
}

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    setTimeout(function () {
      var i;
      var j;
      var selectElement;
      var selectDiv;
      var optionsDiv;
      var optionDiv;
      /* Look for any elements with the class "custom-select" */

      var selectDivContainer = document.getElementsByClassName('custom-select');

      for (i = 0; i < selectDivContainer.length; i += 1) {
        if (selectDivContainer[i].getElementsByTagName('select')) {
          ;

          var _selectDivContainer$i = selectDivContainer[i].getElementsByTagName('select');

          var _selectDivContainer$i2 = _slicedToArray(_selectDivContainer$i, 1);

          selectElement = _selectDivContainer$i2[0];

          /* For each element create a new DIV that will act as the selected item */
          selectDiv = document.createElement('DIV');
          selectDiv.setAttribute('class', selectElement.disabled ? 'custom-select__selected custom-select__selected--disabled' : 'custom-select__selected');
          selectElement.selectedIndex = selectElement.selectedIndex > 0 ? selectElement.selectedIndex : 0;
          selectDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
          selectDivContainer[i].appendChild(selectDiv);
          /* For each element, create a new DIV that will contain the option list */

          optionsDiv = document.createElement('DIV');
          optionsDiv.setAttribute('class', 'custom-select__items custom-select__items--hidden');

          for (j = 1; j < selectElement.length; j += 1) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item */
            optionDiv = document.createElement('DIV');
            optionDiv.innerHTML = selectElement.options[j].innerHTML;
            optionDiv.addEventListener('click', function () {
              /* When an item is clicked, update the original select box,
                and the selected item */
              var y;
              var x;
              var k;

              var _this$parentNode$pare = _this.parentNode.parentNode.getElementsByTagName('select'),
                  _this$parentNode$pare2 = _slicedToArray(_this$parentNode$pare, 1),
                  s = _this$parentNode$pare2[0];

              var h = _this.parentNode.previousSibling;

              for (x = 0; x < s.length; x += 1) {
                if (s.options[x].innerHTML === _this.innerHTML) {
                  s.selectedIndex = x;
                  h.innerHTML = _this.innerHTML;
                  y = _this.parentNode.getElementsByClassName('custom-select__items--selected');

                  for (k = 0; k < y.length; k += 1) {
                    y[k].removeAttribute('class');
                  }

                  _this.setAttribute('class', 'custom-select__items--selected');

                  break;
                }
              }

              h.click();
            });
            optionsDiv.appendChild(optionDiv);
          }

          selectDivContainer[i].appendChild(optionsDiv);
          selectDiv.addEventListener('click', function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box if not disabled */
            e.stopPropagation();
            closeAllSelect(_this);

            _this.nextSibling.classList.toggle('custom-select__items--hidden');

            _this.classList.toggle('custom-select__selected--active');
          });
        }
      }
      /* If the user clicks anywhere outside the select box,
      then close all select boxes: */


      document.addEventListener('click', closeAllSelect);
    }, 1000);
  }
};

},{}],6:[function(require,module,exports){
"use strict";

var mobileTopNavigation = document.querySelector('.navigation--top--mobile');
var dropdownItems = mobileTopNavigation.querySelectorAll('li.dropdown');
dropdownItems.forEach(function (dropdownItem) {
  dropdownItem.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault();
    var element = event.target.tagName === 'I' ? event.target.parentElement : event.target;

    if (element.nextElementSibling !== null) {
      element.nextElementSibling.classList.toggle('collapsed');
    }
  });
});
mobileTopNavigation.querySelector('i.navigation--top--mobile__heading__menu-toggle').addEventListener('click', function (event) {
  var menuToggle = event.target;
  menuToggle.innerText = menuToggle.innerText === 'close' ? 'menu' : 'close';
  mobileTopNavigation.classList.toggle('collapsed');
});

},{}],7:[function(require,module,exports){
"use strict";

/**
 * Progress bar function
 * Parameters:
 * INT percent = percent value
 * STRING id = id of element
 * STRING type = type of progress bar ('circle' or 'horizontal')
 */
window.progressBar = function (params) {
  if (!params.id || !document.getElementById(params.id)) return false;
  var element = document.getElementById(params.id);
  var percent = params.percent ? params.percent : 0;
  var type = params.type ? params.type : 'circle';

  if (type !== 'circle' && element) {
    // Set percent of horizontal progress bar
    element.value = percent;
  } else {
    var text = element.querySelector('.progress-bar__text');
    var circle = element.querySelector('circle');
    var radius = '24';

    if (element.classList.contains('progress-bar--sm')) {
      radius = '9';
    } else if (element.classList.contains('progress-bar--md')) {
      radius = '11';
    }

    var circumference = radius * 2 * Math.PI; // Defines the default size of green and gray circle around the icon

    circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
    circle.style.strokeDashoffset = "".concat(circumference); // Calculate the green circle size according to the percentage entered

    var offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset; // Change percentage text

    if (text) {
      text.innerHTML = "".concat(percent, "%");
    } // Change element color when percent is 100


    if (percent === 100) {
      element.classList.add('progress-bar--done');
    } else {
      element.classList.remove('progress-bar--done');
    }
  }
};

},{}],8:[function(require,module,exports){
"use strict";

var forms = document.querySelectorAll('.form-validation');
forms.forEach(function (form) {
  form.addEventListener('submit', function () {
    var inputs = form.querySelectorAll('input,textarea,select');
    inputs.forEach(function (input) {
      if (!input.validity.valid) {
        input.parentElement.classList.add('input-group--invalid');
        input.parentElement.querySelector('.input-group__alert--error').classList.add('input-group__alert--active');
      }
    });
  }, false);
});

},{}],9:[function(require,module,exports){
"use strict";

require('./components/alert');

require('./components/navbar');

require('./components/validation');

require('./components/progressbar');

require('./components/collapse');

require('./components/custom-select');

module.exports = {// Your module right here
};

},{"./components/alert":3,"./components/collapse":4,"./components/custom-select":5,"./components/navbar":6,"./components/progressbar":7,"./components/validation":8}]},{},[2]);

//# sourceMappingURL=main.js.map
