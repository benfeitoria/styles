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
actions.forEach(function (action) {
  action.addEventListener('click', function (event) {
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function closeAllSelect(elmnt) {
  var i;
  var arrNo = [];
  var optionsDiv = document.getElementsByClassName('custom-select__items');
  var optionSelected = document.getElementsByClassName('custom-select__selected');

  for (i = 0; i < optionSelected.length; i++) {
    if (elmnt === optionSelected[i]) {
      arrNo.push(i);
    } else {
      optionSelected[i].classList.remove('custom-select__selected--active');
    }
  }

  for (i = 0; i < optionsDiv.length; i++) {
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

      for (i = 0; i < selectDivContainer.length; i++) {
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

          for (j = 1; j < selectElement.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item */
            optionDiv = document.createElement('DIV');
            optionDiv.innerHTML = selectElement.options[j].innerHTML;
            optionDiv.addEventListener('click', function () {
              /* When an item is clicked, update the original select box,
                and the selected item */
              var y;
              var i;
              var k;

              var _this$parentNode$pare = _this.parentNode.parentNode.getElementsByTagName('select'),
                  _this$parentNode$pare2 = _slicedToArray(_this$parentNode$pare, 1),
                  s = _this$parentNode$pare2[0];

              var h = _this.parentNode.previousSibling;

              for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML === _this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = _this.innerHTML;
                  y = _this.parentNode.getElementsByClassName('custom-select__items--selected');

                  for (k = 0; k < y.length; k++) {
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

var mobileTopNavigations = document.querySelectorAll('.navigation--top--mobile');
mobileTopNavigations.forEach(function (mobileTopNavigation) {
  var dropdownItems = mobileTopNavigation.querySelectorAll('li.dropdown');
  dropdownItems.forEach(function (dropdownItem) {
    dropdownItem.querySelector('a').addEventListener('click', function (event) {
      event.preventDefault();
      event.target.nextElementSibling.classList.toggle('collapsed');
    });
    mobileTopNavigation.querySelector('i.navigation--top--mobile__heading__menu-toggle').addEventListener('click', function (event) {
      var menuToggle = event.target;
      menuToggle.classList.toggle('bfi--menu');
      menuToggle.classList.toggle('bfi--times');
      mobileTopNavigation.classList.toggle('collapsed');
    });
  });
});

},{}],7:[function(require,module,exports){
"use strict";

// Set default value r for circle in svg
var progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(function (progressBar) {
  var circle = progressBar.querySelector('circle').r.baseVal;

  if (progressBar.classList.contains('progress-bar--sm') && progressBar.querySelector('circle')) {
    circle.value = '9';
  }

  if (progressBar.classList.contains('progress-bar--md') && progressBar.querySelector('circle')) {
    circle.value = '11';
  }

  if (progressBar.classList.contains('progress-bar') && progressBar.querySelector('circle')) {
    circle.value = '24';
  }
});
/**
 * Progress bar function
 * Parameters:
 * INT percent = percent value
 * STRING id = id of element
 * STRING type = type of progress bar ('circle' or 'horizontal')
 */

window.progressBar = function (params) {
  if (!params.id) return false;
  var elementId = "# + ".concat(params.id);
  var percent = params.percent ? params.percent : 0;
  var type = params.type ? params.type : 'circle';

  if (type !== 'circle' && document.querySelector(elementId)) {
    // Set percent of horizontal progress bar
    document.querySelector(elementId).value = percent;
  }

  var text = document.querySelector(elementId).querySelector('.progress-bar__text');
  var circle = document.querySelector(elementId).querySelector('circle');
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI; // Defines the default size of green and gray circle around the icon

  circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
  circle.style.strokeDashoffset = "".concat(circumference); // Calculate the green circle size according to the percentage entered

  var offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset; // Change percentage text

  if (text) {
    text.innerHTML = "".concat(percent, "%");
  } // Change element color when percent is 100


  if (percent === 100) {
    document.querySelector(elementId).classList.add('progress-bar--done');
  } else {
    document.querySelector(elementId).classList.remove('progress-bar--done');
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
