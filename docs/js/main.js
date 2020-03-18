(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var icons = ['arrow-down', 'arrow-left-gray', 'arrow-left', 'caret', 'caret-gray', 'check-gray', 'check', 'download', 'exclamation-mark-circle', 'eye', 'lamp-blue-bg', 'lamp', 'lupe', 'menu', 'plus-transparent', 'plus', 'times', 'user'];
var iconsPlacement = document.getElementById('icons-list');

if (iconsPlacement) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var icon = _step.value;
      var iconLi = document.createElement('li');
      var iconLiIcon = document.createElement('i');
      iconLiIcon.setAttribute('class', 'bfi bfi--' + icon);
      var iconLiCode = document.createElement('code'),
          iconLiCodeId = 'icon-html-code-' + icon,
          iconLiIconOuterHTML = iconLiIcon.outerHTML;
      iconLiCode.setAttribute('id', iconLiCodeId);
      iconLiCode.innerHTML = iconLiIconOuterHTML.toString().replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
      iconLi.append(iconLiIcon);
      iconLi.append(iconLiCode);
      iconsPlacement.append(iconLi);
      new ClipboardJS("#".concat(iconLiCodeId), {
        text: function text() {
          return iconLiIconOuterHTML;
        }
      });
    };

    for (var _iterator = icons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

},{}],2:[function(require,module,exports){
"use strict";

require('../../js/main');

require('./components/icons');

},{"../../js/main":5,"./components/icons":1}],3:[function(require,module,exports){
"use strict";

/**
 * Alert dismissible
 */
var alertDismissibles = document.querySelectorAll('.alert--dismissible');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = alertDismissibles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var alertDismissible = _step.value;

    /**
     * Deal with alert dismissibles
     */
    alertDismissible.querySelector('.alert--dismissible__close').addEventListener('click', function (event) {
      event.preventDefault();
      event.toElement.parentElement.remove();
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

},{}],4:[function(require,module,exports){
"use strict";

/**
 * Top navigation mobile actions
 */
var mobileTopNavigations = document.querySelectorAll('.navigation--top--mobile');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var mobileTopNavigation = _step.value;

    /**
     * Deal with dropdown items
     */
    var dropdownItems = mobileTopNavigation.querySelectorAll('li.dropdown');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = dropdownItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var dropdownItem = _step2.value;
        dropdownItem.querySelector('a').addEventListener('click', function (event) {
          event.preventDefault();
          event.target.nextElementSibling.classList.toggle('collapsed');
        });
      }
      /**
       * Dealing with toggle menu
       */

    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    mobileTopNavigation.querySelector('i.navigation--top--mobile__heading__menu-toggle').addEventListener('click', function (event) {
      var menuToggle = event.target;
      menuToggle.classList.toggle('bfi--menu');
      menuToggle.classList.toggle('bfi--times');
      mobileTopNavigation.classList.toggle('collapsed');
    });
  };

  for (var _iterator = mobileTopNavigations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

},{}],5:[function(require,module,exports){
"use strict";

require('./components/navbar');

require('./components/alert');

module.exports = {// Your module right here
};

},{"./components/alert":3,"./components/navbar":4}]},{},[2]);

//# sourceMappingURL=main.js.map
