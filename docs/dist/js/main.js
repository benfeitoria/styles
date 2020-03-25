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
inputCircle.addEventListener('change', function (e) {
  progressBar({
    'percent': inputCircle.value,
    'id': 'live-example-c'
  });
}); // Live example horizontal progress bar

var inputHorizontal = document.querySelector('#live-example-value-h');
inputHorizontal.addEventListener('change', function (e) {
  progressBar({
    'percent': inputHorizontal.value,
    'id': 'live-example-h',
    'type': 'horizontal'
  });
});

},{}],3:[function(require,module,exports){
"use strict";

require('../../js/main');

require('./components/icons');

require('./components/progressbar');

},{"../../js/main":8,"./components/icons":1,"./components/progressbar":2}],4:[function(require,module,exports){
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
    alertDismissible.querySelector('.alert__close').addEventListener('click', function (event) {
      event.preventDefault();
      event.toElement.parentElement.classList.add("fade-out");
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

// Set default value r for circle in svg
var progressBars = document.querySelectorAll('.progress-bar');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = progressBars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var progressBar = _step.value;

    if (progressBar.classList.contains("progress-bar--sm") && progressBar.querySelector('circle')) {
      progressBar.querySelector('circle').r.baseVal.value = "9";
    } else if (progressBar.classList.contains("progress-bar--md") && progressBar.querySelector('circle')) {
      progressBar.querySelector('circle').r.baseVal.value = "11";
    } else if (progressBar.classList.contains("progress-bar") && progressBar.querySelector('circle')) {
      progressBar.querySelector('circle').r.baseVal.value = "24";
    }
  }
  /**
   * Progress bar function
   * Parameters:
   * INT percent = percent value
   * STRING id = id of element
   * STRING type = type of progress bar ('circle' or 'horizontal')
  */

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

window.progressBar = function (params) {
  if (!params.id) return false;
  var elementId = "#" + params.id;
  var percent = params.percent ? params.percent : 0;
  var type = params.type ? params.type : 'circle';

  if (type == 'circle') {
    // Circle attributes
    var text = document.querySelector(elementId).querySelector('.progress-bar__text');
    var circle = document.querySelector(elementId).querySelector('circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI; // Defines the default size of green and gray circle around the icon

    circle.style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
    circle.style.strokeDashoffset = "".concat(circumference); // Calculate the green circle size according to the percentage entered

    var offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset; // Change percentage text

    if (text) {
      text.innerHTML = percent + "%";
    } // Change element color when percent is 100


    if (percent == 100) {
      document.querySelector(elementId).classList.add("progress-bar--done");
    } else {
      document.querySelector(elementId).classList.remove("progress-bar--done");
    }
  } else {
    // Set percent of horizontal progress bar
    document.querySelector(elementId).value = percent;
  }
};

},{}],7:[function(require,module,exports){
"use strict";

document.getElementsByTagName('form')[0].addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check all inputs
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.getElementsByTagName('form')[0].getElementsByTagName("input")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var input = _step.value;

      if (!input.validity.valid) {
        input.parentElement.querySelector('.form-error').classList.add("form-error--active");
      }
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
}, false);

},{}],8:[function(require,module,exports){
"use strict";

require('./components/alert');

require('./components/navbar');

require('./components/validation');

require('./components/progressbar');

module.exports = {// Your module right here
};

},{"./components/alert":4,"./components/navbar":5,"./components/progressbar":6,"./components/validation":7}]},{},[3]);

//# sourceMappingURL=main.js.map
