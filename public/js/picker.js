/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/picker/jquery-migrate-1.0.0.js":
/*!*****************************************************!*\
  !*** ./resources/js/picker/jquery-migrate-1.0.0.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * jQuery Migrate - v1.0.0 - 2013-01-14
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function (jQuery, window, undefined) {
  "use strict";

  var warnedAbout = {}; // List of warnings already given; public read only

  jQuery.migrateWarnings = []; // Set to true to prevent console output; migrateWarnings still maintained
  // jQuery.migrateMute = false;
  // Forget any warnings we've already given; public

  jQuery.migrateReset = function () {
    warnedAbout = {};
    jQuery.migrateWarnings.length = 0;
  };

  function migrateWarn(msg) {
    if (!warnedAbout[msg]) {
      warnedAbout[msg] = true;
      jQuery.migrateWarnings.push(msg);

      if (window.console && console.warn && !jQuery.migrateMute) {
        console.warn("JQMIGRATE: " + msg);
      }
    }
  }

  function migrateWarnProp(obj, prop, value, msg) {
    if (Object.defineProperty) {
      // On ES5 browsers (non-oldIE), warn if the code tries to get prop;
      // allow property to be overwritten in case some other plugin wants it
      try {
        Object.defineProperty(obj, prop, {
          configurable: true,
          enumerable: true,
          get: function get() {
            migrateWarn(msg);
            return value;
          },
          set: function set(newValue) {
            migrateWarn(msg);
            value = newValue;
          }
        });
        return;
      } catch (err) {// IE8 is a dope about Object.defineProperty, can't warn there
      }
    } // Non-ES5 (or broken) browser; just set the property


    jQuery._definePropertyBroken = true;
    obj[prop] = value;
  }

  if (document.compatMode === "BackCompat") {
    // jQuery has never supported or tested Quirks Mode
    migrateWarn("jQuery is not compatible with Quirks Mode");
  }

  var attrFn = {},
      attr = jQuery.attr,
      valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get || function () {
    return null;
  },
      valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set || function () {
    return undefined;
  },
      rnoType = /^(?:input|button)$/i,
      rnoAttrNodeType = /^[238]$/,
      rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      ruseDefault = /^(?:checked|selected)$/i; // jQuery.attrFn


  migrateWarnProp(jQuery, "attrFn", attrFn, "jQuery.attrFn is deprecated");

  jQuery.attr = function (elem, name, value, pass) {
    var lowerName = name.toLowerCase(),
        nType = elem && elem.nodeType;

    if (pass) {
      migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");

      if (elem && !rnoAttrNodeType.test(nType) && jQuery.isFunction(jQuery.fn[name])) {
        return jQuery(elem)[name](value);
      }
    } // Warn if user tries to set `type` since it breaks on IE 6/7/8


    if (name === "type" && value !== undefined && rnoType.test(elem.nodeName)) {
      migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
    } // Restore boolHook for boolean property/attribute synchronization


    if (!jQuery.attrHooks[lowerName] && rboolean.test(lowerName)) {
      jQuery.attrHooks[lowerName] = {
        get: function get(elem, name) {
          // Align boolean attributes with corresponding properties
          // Fall back to attribute presence where some booleans are not supported
          var attrNode,
              property = jQuery.prop(elem, name);
          return property === true || typeof property !== "boolean" && (attrNode = elem.getAttributeNode(name)) && attrNode.nodeValue !== false ? name.toLowerCase() : undefined;
        },
        set: function set(elem, value, name) {
          var propName;

          if (value === false) {
            // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
          } else {
            // value is true since we know at this point it's type boolean and not false
            // Set boolean attributes to the same name and set the DOM property
            propName = jQuery.propFix[name] || name;

            if (propName in elem) {
              // Only set the IDL specifically if it already exists on the element
              elem[propName] = true;
            }

            elem.setAttribute(name, name.toLowerCase());
          }

          return name;
        }
      }; // Warn only for attributes that can remain distinct from their properties post-1.9

      if (ruseDefault.test(lowerName)) {
        migrateWarn("jQuery.fn.attr(" + lowerName + ") may use property instead of attribute");
      }
    }

    return attr.call(jQuery, elem, name, value);
  }; // attrHooks: value


  jQuery.attrHooks.value = {
    get: function get(elem, name) {
      var nodeName = (elem.nodeName || "").toLowerCase();

      if (nodeName === "button") {
        return valueAttrGet.apply(this, arguments);
      }

      if (nodeName !== "input" && nodeName !== "option") {
        migrateWarn("property-based jQuery.fn.attr('value') is deprecated");
      }

      return name in elem ? elem.value : null;
    },
    set: function set(elem, value) {
      var nodeName = (elem.nodeName || "").toLowerCase();

      if (nodeName === "button") {
        return valueAttrSet.apply(this, arguments);
      }

      if (nodeName !== "input" && nodeName !== "option") {
        migrateWarn("property-based jQuery.fn.attr('value', val) is deprecated");
      } // Does not return so that setAttribute is also used


      elem.value = value;
    }
  };
  var matched,
      browser,
      oldInit = jQuery.fn.init,
      // Note this does NOT include the # XSS fix from 1.7!
  rquickExpr = /^(?:.*(<[\w\W]+>)[^>]*|#([\w\-]*))$/; // $(html) "looks like html" rule change

  jQuery.fn.init = function (selector, context, rootjQuery) {
    var match;

    if (selector && typeof selector === "string" && !jQuery.isPlainObject(context) && (match = rquickExpr.exec(selector)) && match[1]) {
      // This is an HTML string according to the "old" rules; is it still?
      if (selector.charAt(0) !== "<") {
        migrateWarn("$(html) HTML strings must start with '<' character");
      } // Now process using loose rules; let pre-1.8 play too


      if (context && context.context) {
        // jQuery object as context; parseHTML expects a DOM object
        context = context.context;
      }

      if (jQuery.parseHTML) {
        return oldInit.call(this, jQuery.parseHTML(jQuery.trim(selector), context, true), context, rootjQuery);
      }
    }

    return oldInit.apply(this, arguments);
  };

  jQuery.fn.init.prototype = jQuery.fn;

  jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  };

  matched = jQuery.uaMatch(navigator.userAgent);
  browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
  } // Chrome is Webkit, but Webkit is also Safari.


  if (browser.chrome) {
    browser.webkit = true;
  } else if (browser.webkit) {
    browser.safari = true;
  }

  jQuery.browser = browser; // Warn if the code tries to get jQuery.browser

  migrateWarnProp(jQuery, "browser", browser, "jQuery.browser is deprecated");

  jQuery.sub = function () {
    function jQuerySub(selector, context) {
      return new jQuerySub.fn.init(selector, context);
    }

    jQuery.extend(true, jQuerySub, this);
    jQuerySub.superclass = this;
    jQuerySub.fn = jQuerySub.prototype = this();
    jQuerySub.fn.constructor = jQuerySub;
    jQuerySub.sub = this.sub;

    jQuerySub.fn.init = function init(selector, context) {
      if (context && context instanceof jQuery && !(context instanceof jQuerySub)) {
        context = jQuerySub(context);
      }

      return jQuery.fn.init.call(this, selector, context, rootjQuerySub);
    };

    jQuerySub.fn.init.prototype = jQuerySub.fn;
    var rootjQuerySub = jQuerySub(document);
    migrateWarn("jQuery.sub() is deprecated");
    return jQuerySub;
  };

  var oldFnData = jQuery.fn.data;

  jQuery.fn.data = function (name) {
    var ret,
        evt,
        elem = this[0]; // Handles 1.7 which has this behavior and 1.8 which doesn't

    if (elem && name === "events" && arguments.length === 1) {
      ret = jQuery.data(elem, name);
      evt = jQuery._data(elem, name);

      if ((ret === undefined || ret === evt) && evt !== undefined) {
        migrateWarn("Use of jQuery.fn.data('events') is deprecated");
        return evt;
      }
    }

    return oldFnData.apply(this, arguments);
  };

  var rscriptType = /\/(java|ecma)script/i,
      oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack,
      oldFragment = jQuery.buildFragment;

  jQuery.fn.andSelf = function () {
    migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
    return oldSelf.apply(this, arguments);
  }; // Since jQuery.clean is used internally on older versions, we only shim if it's missing


  if (!jQuery.clean) {
    jQuery.clean = function (elems, context, fragment, scripts) {
      // Set context per 1.8 logic
      context = context || document;
      context = !context.nodeType && context[0] || context;
      context = context.ownerDocument || context;
      migrateWarn("jQuery.clean() is deprecated");
      var i,
          elem,
          handleScript,
          jsTags,
          ret = [];
      jQuery.merge(ret, jQuery.buildFragment(elems, context).childNodes); // Complex logic lifted directly from jQuery 1.8

      if (fragment) {
        // Special handling of each script element
        handleScript = function handleScript(elem) {
          // Check if we consider it executable
          if (!elem.type || rscriptType.test(elem.type)) {
            // Detach the script and store it in the scripts array (if provided) or the fragment
            // Return truthy to indicate that it has been handled
            return scripts ? scripts.push(elem.parentNode ? elem.parentNode.removeChild(elem) : elem) : fragment.appendChild(elem);
          }
        };

        for (i = 0; (elem = ret[i]) != null; i++) {
          // Check if we're done after handling an executable script
          if (!(jQuery.nodeName(elem, "script") && handleScript(elem))) {
            // Append to fragment and handle embedded scripts
            fragment.appendChild(elem);

            if (typeof elem.getElementsByTagName !== "undefined") {
              // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
              jsTags = jQuery.grep(jQuery.merge([], elem.getElementsByTagName("script")), handleScript); // Splice the scripts into ret after their former ancestor and advance our index beyond them

              ret.splice.apply(ret, [i + 1, 0].concat(jsTags));
              i += jsTags.length;
            }
          }
        }
      }

      return ret;
    };
  }

  jQuery.buildFragment = function (elems, context, scripts, selection) {
    var ret,
        warning = "jQuery.buildFragment() is deprecated"; // Set context per 1.8 logic

    context = context || document;
    context = !context.nodeType && context[0] || context;
    context = context.ownerDocument || context;

    try {
      ret = oldFragment.call(jQuery, elems, context, scripts, selection); // jQuery < 1.8 required arrayish context; jQuery 1.9 fails on it
    } catch (x) {
      ret = oldFragment.call(jQuery, elems, context.nodeType ? [context] : context[0], scripts, selection); // Success from tweaking context means buildFragment was called by the user

      migrateWarn(warning);
    } // jQuery < 1.9 returned an object instead of the fragment itself


    if (!ret.fragment) {
      migrateWarnProp(ret, "fragment", ret, warning);
      migrateWarnProp(ret, "cacheable", false, warning);
    }

    return ret;
  };

  var eventAdd = jQuery.event.add,
      eventRemove = jQuery.event.remove,
      eventTrigger = jQuery.event.trigger,
      oldToggle = jQuery.fn.toggle,
      oldLive = jQuery.fn.live,
      oldDie = jQuery.fn.die,
      ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      rajaxEvent = new RegExp("\\b(?:" + ajaxEvents + ")\\b"),
      rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
      hoverHack = function hoverHack(events) {
    if (typeof events != "string" || jQuery.event.special.hover) {
      return events;
    }

    if (rhoverHack.test(events)) {
      migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
    }

    return events && events.replace(rhoverHack, "mouseenter$1 mouseleave$1");
  }; // Event props removed in 1.9, put them back if needed; no practical way to warn them


  if (jQuery.event.props && jQuery.event.props[0] !== "attrChange") {
    jQuery.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
  } // Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7


  migrateWarnProp(jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated"); // Support for 'hover' pseudo-event and ajax event warnings

  jQuery.event.add = function (elem, types, handler, data, selector) {
    if (elem !== document && rajaxEvent.test(types)) {
      migrateWarn("AJAX events should be attached to document: " + types);
    }

    eventAdd.call(this, elem, hoverHack(types || ""), handler, data, selector);
  };

  jQuery.event.remove = function (elem, types, handler, selector, mappedTypes) {
    eventRemove.call(this, elem, hoverHack(types) || "", handler, selector, mappedTypes);
  };

  jQuery.fn.error = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    migrateWarn("jQuery.fn.error() is deprecated");
    args.splice(0, 0, "error");

    if (arguments.length) {
      return this.bind.apply(this, args);
    } // error event should not bubble to window, although it does pre-1.7


    this.triggerHandler.apply(this, args);
    return this;
  };

  jQuery.fn.toggle = function (fn, fn2) {
    // Don't mess with animation or css toggles
    if (!jQuery.isFunction(fn) || !jQuery.isFunction(fn2)) {
      return oldToggle.apply(this, arguments);
    }

    migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated"); // Save reference to arguments for access in closure

    var args = arguments,
        guid = fn.guid || jQuery.guid++,
        i = 0,
        toggler = function toggler(event) {
      // Figure out which function to execute
      var lastToggle = (jQuery._data(this, "lastToggle" + fn.guid) || 0) % i;

      jQuery._data(this, "lastToggle" + fn.guid, lastToggle + 1); // Make sure that clicks stop


      event.preventDefault(); // and execute the function

      return args[lastToggle].apply(this, arguments) || false;
    }; // link all the functions, so any of them can unbind this click handler


    toggler.guid = guid;

    while (i < args.length) {
      args[i++].guid = guid;
    }

    return this.click(toggler);
  };

  jQuery.fn.live = function (types, data, fn) {
    migrateWarn("jQuery.fn.live() is deprecated");

    if (oldLive) {
      return oldLive.apply(this, arguments);
    }

    jQuery(this.context).on(types, this.selector, data, fn);
    return this;
  };

  jQuery.fn.die = function (types, fn) {
    migrateWarn("jQuery.fn.die() is deprecated");

    if (oldDie) {
      return oldDie.apply(this, arguments);
    }

    jQuery(this.context).off(types, this.selector || "**", fn);
    return this;
  }; // Turn global events into document-triggered events


  jQuery.event.trigger = function (event, data, elem, onlyHandlers) {
    if (!elem & !rajaxEvent.test(event)) {
      migrateWarn("Global events are undocumented and deprecated");
    }

    return eventTrigger.call(this, event, data, elem || document, onlyHandlers);
  };

  jQuery.each(ajaxEvents.split("|"), function (_, name) {
    jQuery.event.special[name] = {
      setup: function setup() {
        var elem = this; // The document needs no shimming; must be !== for oldIE

        if (elem !== document) {
          jQuery.event.add(document, name + "." + jQuery.guid, function () {
            jQuery.event.trigger(name, null, elem, true);
          });

          jQuery._data(this, name, jQuery.guid++);
        }

        return false;
      },
      teardown: function teardown() {
        if (this !== document) {
          jQuery.event.remove(document, name + "." + jQuery._data(this, name));
        }

        return false;
      }
    };
  });
})(jQuery, window);

/***/ }),

/***/ "./resources/js/picker/jquery.ui.datepicker-ja.js":
/*!********************************************************!*\
  !*** ./resources/js/picker/jquery.ui.datepicker-ja.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Japanese initialisation for the jQuery UI date picker plugin. */

/* Written by Kentaro SATO (kentaro@ranvis.com). */
jQuery(function ($) {
  $.datepicker.regional['ja'] = {
    closeText: '閉じる',
    prevText: '&#x3C;前',
    nextText: '次&#x3E;',
    currentText: '今日',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    isRTL: false,
    changeYear: true,
    // 年選択をプルダウン化
    showMonthAfterYear: true,
    yearSuffix: '年'
  };
  $.datepicker.setDefaults($.datepicker.regional['ja']);
});

/***/ }),

/***/ "./resources/js/picker/jquery.ui.ympicker.js":
/*!***************************************************!*\
  !*** ./resources/js/picker/jquery.ui.ympicker.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery UI Ympicker 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Ympicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function ($, undefined) {
  $.extend($.ui, {
    ympicker: {
      version: "1.8.21"
    }
  });
  var PROP_NAME = 'ympicker';
  var dpuuid = new Date().getTime();
  var instActive;
  /* Date picker manager.
     Use the singleton instance of this class, $.ympicker, to interact with the date picker.
     Settings for (groups of) date pickers are maintained in an instance object,
     allowing multiple different settings on the same page. */

  function Ympicker() {
    this.debug = false; // Change this to true to start debugging

    this._curInst = null; // The current instance in use

    this._keyEvent = false; // If the last event was a key event

    this._disabledInputs = []; // List of date picker inputs that have been disabled

    this._ympickerShowing = false; // True if the popup picker is showing , false if not

    this._inDialog = false; // True if showing within a "dialog", false if not

    this._mainDivId = 'ui-datepicker-div'; // The ID of the main ympicker division

    this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class

    this._appendClass = 'ui-datepicker-append'; // The name of the append marker class

    this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class

    this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class

    this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class

    this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class

    this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class

    this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class

    this.regional = []; // Available regional settings, indexed by language code

    this.regional[''] = {
      // Default regional settings
      closeText: 'Done',
      // Display text for close link
      prevText: 'Prev',
      // Display text for previous month link
      nextText: 'Next',
      // Display text for next month link
      currentText: 'Today',
      // Display text for current month link
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      // Names of months for drop-down and formatting
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      // For formatting
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      // For formatting
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // For formatting
      dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      // Column headings for days starting at Sunday
      weekHeader: 'Wk',
      // Column header for week of the year
      dateFormat: 'mm/yy',
      // See format options on parseDate
      firstDay: 0,
      // The first day of the week, Sun = 0, Mon = 1, ...
      isRTL: false,
      // True if right-to-left language, false if left-to-right
      showMonthAfterYear: false,
      // True if the year select precedes month, false for month then year
      yearSuffix: '' // Additional text to append to the year in the month headers

    };
    this._defaults = {
      // Global defaults for all the date picker instances
      showOn: 'focus',
      // 'focus' for popup on focus,
      // 'button' for trigger button, or 'both' for either
      showAnim: 'fadeIn',
      // Name of jQuery animation for popup
      showOptions: {},
      // Options for enhanced animations
      defaultDate: null,
      // Used when field is blank: actual date,
      // +/-number for offset from today, null for today
      appendText: '',
      // Display text following the input box, e.g. showing the format
      buttonText: '...',
      // Text for trigger button
      buttonImage: '',
      // URL for trigger button image
      buttonImageOnly: false,
      // True if the image appears alone, false if it appears on a button
      hideIfNoPrevNext: false,
      // True to hide next/previous month links
      // if not applicable, false to just disable them
      navigationAsDateFormat: false,
      // True if date formatting applied to prev/today/next links
      gotoCurrent: false,
      // True if today link goes back to current selection instead
      changeMonth: false,
      // True if month can be selected directly, false if only prev/next
      changeYear: true,
      // True if year can be selected directly, false if only prev/next
      yearRange: 'c-10:c+10',
      // Range of years to display in drop-down,
      // either relative to today's year (-nn:+nn), relative to currently displayed year
      // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
      showOtherMonths: true,
      // True to show dates in other months, false to leave blank
      selectOtherMonths: true,
      // True to allow selection of dates in other months, false for unselectable
      showWeek: false,
      // True to show week of the year, false to not show it
      calculateWeek: this.iso8601Week,
      // How to calculate the week of the year,
      // takes a Date and returns the number of the week for it
      shortYearCutoff: '+10',
      // Short year values < this are in the current century,
      // > this are in the previous century,
      // string value starting with '+' for current year + value
      minDate: null,
      // The earliest selectable date, or null for no limit
      maxDate: null,
      // The latest selectable date, or null for no limit
      duration: 'fast',
      // Duration of display/closure
      beforeShowDay: null,
      // Function that takes a date and returns an array with
      // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
      // [2] = cell title (optional), e.g. $.ympicker.noWeekends
      beforeShow: null,
      // Function that takes an input field and
      // returns a set of custom settings for the date picker
      onSelect: null,
      // Define a callback function when a date is selected
      onChangeMonthYear: null,
      // Define a callback function when the month or year is changed
      onClose: null,
      // Define a callback function when the ympicker is closed
      numberOfMonths: 1,
      // Number of months to show at a time
      showCurrentAtPos: 0,
      // The position in multipe months at which to show the current month (starting at 0)
      stepMonths: 12,
      // Number of months to step back/forward
      stepBigMonths: 12,
      // Number of months to step back/forward for the big links
      altField: '',
      // Selector for an alternate field to store selected dates into
      altFormat: '',
      // The date format to use for the alternate field
      constrainInput: true,
      // The input is constrained by the current date format
      showButtonPanel: false,
      // True to show button panel, false to not show it
      autoSize: false,
      // True to size the input for the date format, false to leave as is
      disabled: false // The initial disabled state

    };
    $.extend(this._defaults, this.regional['']);
    this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-ympicker ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
  }

  $.extend(Ympicker.prototype, {
    /* Class name added to elements to indicate already configured with a date picker. */
    markerClassName: 'hasYmpicker',
    //Keep track of the maximum number of rows displayed (see #7043)
    maxRows: 4,

    /* Debug logging (if enabled). */
    log: function log() {
      if (this.debug) console.log.apply('', arguments);
    },
    // TODO rename to "widget" when switching to widget factory
    _widgetYmpicker: function _widgetYmpicker() {
      return this.dpDiv;
    },

    /* Override the default settings for all instances of the date picker.
       @param  settings  object - the new settings to use as defaults (anonymous object)
       @return the manager object */
    setDefaults: function setDefaults(settings) {
      extendRemove(this._defaults, settings || {});
      return this;
    },

    /* Attach the date picker to a jQuery selection.
       @param  target    element - the target input field or division or span
       @param  settings  object - the new settings to use for this date picker instance (anonymous) */
    _attachYmpicker: function _attachYmpicker(target, settings) {
      // check for settings on the control itself - in namespace 'date:'
      var inlineSettings = null;

      for (var attrName in this._defaults) {
        var attrValue = target.getAttribute('date:' + attrName);

        if (attrValue) {
          inlineSettings = inlineSettings || {};

          try {
            inlineSettings[attrName] = eval(attrValue);
          } catch (err) {
            inlineSettings[attrName] = attrValue;
          }
        }
      }

      var nodeName = target.nodeName.toLowerCase();
      var inline = nodeName == 'div' || nodeName == 'span';

      if (!target.id) {
        this.uuid += 1;
        target.id = 'dp' + this.uuid;
      }

      var inst = this._newInst($(target), inline);

      inst.settings = $.extend({}, settings || {}, inlineSettings || {});

      if (nodeName == 'input') {
        this._connectYmpicker(target, inst);
      } else if (inline) {
        this._inlineYmpicker(target, inst);
      }
    },

    /* Create a new instance object. */
    _newInst: function _newInst(target, inline) {
      var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars

      return {
        id: id,
        input: target,
        // associated target
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        // current selection
        drawMonth: 0,
        drawYear: 0,
        // month being drawn
        inline: inline,
        // is ympicker inline or not
        dpDiv: !inline ? this.dpDiv : // presentation div
        bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
      };
    },

    /* Attach the date picker to an input field. */
    _connectYmpicker: function _connectYmpicker(target, inst) {
      var input = $(target);
      inst.append = $([]);
      inst.trigger = $([]);
      if (input.hasClass(this.markerClassName)) return;

      this._attachments(input, inst);

      input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.ympicker", function (event, key, value) {
        inst.settings[key] = value;
      }).bind("getData.ympicker", function (event, key) {
        return this._get(inst, key);
      });

      this._autoSize(inst);

      $.data(target, PROP_NAME, inst); //If disabled option is true, disable the ympicker once it has been attached to the input (see ticket #5665)

      if (inst.settings.disabled) {
        this._disableYmpicker(target);
      }
    },

    /* Make attachments based on settings. */
    _attachments: function _attachments(input, inst) {
      var appendText = this._get(inst, 'appendText');

      var isRTL = this._get(inst, 'isRTL');

      if (inst.append) inst.append.remove();

      if (appendText) {
        inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
        input[isRTL ? 'before' : 'after'](inst.append);
      }

      input.unbind('focus', this._showYmpicker);
      if (inst.trigger) inst.trigger.remove();

      var showOn = this._get(inst, 'showOn');

      if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
        input.focus(this._showYmpicker);

      if (showOn == 'button' || showOn == 'both') {
        // pop-up date picker when button clicked
        var buttonText = this._get(inst, 'buttonText');

        var buttonImage = this._get(inst, 'buttonImage');

        inst.trigger = $(this._get(inst, 'buttonImageOnly') ? $('<img/>').addClass(this._triggerClass).attr({
          src: buttonImage,
          alt: buttonText,
          title: buttonText
        }) : $('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage == '' ? buttonText : $('<img/>').attr({
          src: buttonImage,
          alt: buttonText,
          title: buttonText
        })));
        input[isRTL ? 'before' : 'after'](inst.trigger);
        inst.trigger.click(function () {
          if ($.ympicker._ympickerShowing && $.ympicker._lastInput == input[0]) $.ympicker._hideYmpicker();else if ($.ympicker._ympickerShowing && $.ympicker._lastInput != input[0]) {
            $.ympicker._hideYmpicker();

            $.ympicker._showYmpicker(input[0]);
          } else $.ympicker._showYmpicker(input[0]);
          return false;
        });
      }
    },

    /* Apply the maximum length for the date format. */
    _autoSize: function _autoSize(inst) {
      if (this._get(inst, 'autoSize') && !inst.inline) {
        var date = new Date(2009, 12 - 1, 20); // Ensure double digits

        var dateFormat = this._get(inst, 'dateFormat');

        if (dateFormat.match(/[DM]/)) {
          var findMax = function findMax(names) {
            var max = 0;
            var maxI = 0;

            for (var i = 0; i < names.length; i++) {
              if (names[i].length > max) {
                max = names[i].length;
                maxI = i;
              }
            }

            return maxI;
          };

          date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? 'monthNames' : 'monthNamesShort')));
          date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - date.getDay());
        }

        inst.input.attr('size', this._formatDate(inst, date).length);
      }
    },

    /* Attach an inline date picker to a div. */
    _inlineYmpicker: function _inlineYmpicker(target, inst) {
      var divSpan = $(target);
      if (divSpan.hasClass(this.markerClassName)) return;
      divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.ympicker", function (event, key, value) {
        inst.settings[key] = value;
      }).bind("getData.ympicker", function (event, key) {
        return this._get(inst, key);
      });
      $.data(target, PROP_NAME, inst);

      this._setDate(inst, this._getDefaultDate(inst), true);

      this._updateYmpicker(inst);

      this._updateAlternate(inst); //If disabled option is true, disable the ympicker before showing it (see ticket #5665)


      if (inst.settings.disabled) {
        this._disableYmpicker(target);
      } // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
      // http://bugs.jqueryui.com/ticket/7552 - A Ympicker created on a detached div has zero height


      inst.dpDiv.css("display", "block");
    },

    /* Pop-up the date picker in a "dialog" box.
       @param  input     element - ignored
       @param  date      string or Date - the initial date to display
       @param  onSelect  function - the function to call when a date is selected
       @param  settings  object - update the dialog date picker instance's settings (anonymous object)
       @param  pos       int[2] - coordinates for the dialog's position within the screen or
                         event - with x/y coordinates or
                         leave empty for default (screen centre)
       @return the manager object */
    _dialogYmpicker: function _dialogYmpicker(input, date, onSelect, settings, pos) {
      var inst = this._dialogInst; // internal instance

      if (!inst) {
        this.uuid += 1;
        var id = 'dp' + this.uuid;
        this._dialogInput = $('<input type="text" id="' + id + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');

        this._dialogInput.keydown(this._doKeyDown);

        $('body').append(this._dialogInput);
        inst = this._dialogInst = this._newInst(this._dialogInput, false);
        inst.settings = {};
        $.data(this._dialogInput[0], PROP_NAME, inst);
      }

      extendRemove(inst.settings, settings || {});
      date = date && date.constructor == Date ? this._formatDate(inst, date) : date;

      this._dialogInput.val(date);

      this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null;

      if (!this._pos) {
        var browserWidth = document.documentElement.clientWidth;
        var browserHeight = document.documentElement.clientHeight;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = // should use actual width/height below
        [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
      } // move input on screen for focus, but hidden behind dialog


      this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px');

      inst.settings.onSelect = onSelect;
      this._inDialog = true;
      this.dpDiv.addClass(this._dialogClass);

      this._showYmpicker(this._dialogInput[0]);

      if ($.blockUI) $.blockUI(this.dpDiv);
      $.data(this._dialogInput[0], PROP_NAME, inst);
      return this;
    },

    /* Detach a ympicker from its control.
       @param  target    element - the target input field or division or span */
    _destroyYmpicker: function _destroyYmpicker(target) {
      var $target = $(target);
      var inst = $.data(target, PROP_NAME);

      if (!$target.hasClass(this.markerClassName)) {
        return;
      }

      var nodeName = target.nodeName.toLowerCase();
      $.removeData(target, PROP_NAME);

      if (nodeName == 'input') {
        inst.append.remove();
        inst.trigger.remove();
        $target.removeClass(this.markerClassName).unbind('focus', this._showYmpicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp);
      } else if (nodeName == 'div' || nodeName == 'span') $target.removeClass(this.markerClassName).empty();
    },

    /* Enable the date picker to a jQuery selection.
       @param  target    element - the target input field or division or span */
    _enableYmpicker: function _enableYmpicker(target) {
      var $target = $(target);
      var inst = $.data(target, PROP_NAME);

      if (!$target.hasClass(this.markerClassName)) {
        return;
      }

      var nodeName = target.nodeName.toLowerCase();

      if (nodeName == 'input') {
        target.disabled = false;
        inst.trigger.filter('button').each(function () {
          this.disabled = false;
        }).end().filter('img').css({
          opacity: '1.0',
          cursor: ''
        });
      } else if (nodeName == 'div' || nodeName == 'span') {
        var inline = $target.children('.' + this._inlineClass);
        inline.children().removeClass('ui-state-disabled');
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled");
      }

      this._disabledInputs = $.map(this._disabledInputs, function (value) {
        return value == target ? null : value;
      }); // delete entry
    },

    /* Disable the date picker to a jQuery selection.
       @param  target    element - the target input field or division or span */
    _disableYmpicker: function _disableYmpicker(target) {
      var $target = $(target);
      var inst = $.data(target, PROP_NAME);

      if (!$target.hasClass(this.markerClassName)) {
        return;
      }

      var nodeName = target.nodeName.toLowerCase();

      if (nodeName == 'input') {
        target.disabled = true;
        inst.trigger.filter('button').each(function () {
          this.disabled = true;
        }).end().filter('img').css({
          opacity: '0.5',
          cursor: 'default'
        });
      } else if (nodeName == 'div' || nodeName == 'span') {
        var inline = $target.children('.' + this._inlineClass);
        inline.children().addClass('ui-state-disabled');
        inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled");
      }

      this._disabledInputs = $.map(this._disabledInputs, function (value) {
        return value == target ? null : value;
      }); // delete entry

      this._disabledInputs[this._disabledInputs.length] = target;
    },

    /* Is the first field in a jQuery collection disabled as a ympicker?
       @param  target    element - the target input field or division or span
       @return boolean - true if disabled, false if enabled */
    _isDisabledYmpicker: function _isDisabledYmpicker(target) {
      if (!target) {
        return false;
      }

      for (var i = 0; i < this._disabledInputs.length; i++) {
        if (this._disabledInputs[i] == target) return true;
      }

      return false;
    },

    /* Retrieve the instance data for the target control.
       @param  target  element - the target input field or division or span
       @return  object - the associated instance data
       @throws  error if a jQuery problem getting data */
    _getInst: function _getInst(target) {
      try {
        return $.data(target, PROP_NAME);
      } catch (err) {
        throw 'Missing instance data for this ympicker';
      }
    },

    /* Update or retrieve the settings for a date picker attached to an input field or division.
       @param  target  element - the target input field or division or span
       @param  name    object - the new settings to update or
                       string - the name of the setting to change or retrieve,
                       when retrieving also 'all' for all instance settings or
                       'defaults' for all global defaults
       @param  value   any - the new value for the setting
                       (omit if above is an object or to retrieve a value) */
    _optionYmpicker: function _optionYmpicker(target, name, value) {
      var inst = this._getInst(target);

      if (arguments.length == 2 && typeof name == 'string') {
        return name == 'defaults' ? $.extend({}, $.ympicker._defaults) : inst ? name == 'all' ? $.extend({}, inst.settings) : this._get(inst, name) : null;
      }

      var settings = name || {};

      if (typeof name == 'string') {
        settings = {};
        settings[name] = value;
      }

      if (inst) {
        if (this._curInst == inst) {
          this._hideYmpicker();
        }

        var date = this._getDateYmpicker(target, true);

        var minDate = this._getMinMaxDate(inst, 'min');

        var maxDate = this._getMinMaxDate(inst, 'max');

        extendRemove(inst.settings, settings); // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided

        if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined) inst.settings.minDate = this._formatDate(inst, minDate);
        if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined) inst.settings.maxDate = this._formatDate(inst, maxDate);

        this._attachments($(target), inst);

        this._autoSize(inst);

        this._setDate(inst, date);

        this._updateAlternate(inst);

        this._updateYmpicker(inst);
      }
    },
    // change method deprecated
    _changeYmpicker: function _changeYmpicker(target, name, value) {
      this._optionYmpicker(target, name, value);
    },

    /* Redraw the date picker attached to an input field or division.
       @param  target  element - the target input field or division or span */
    _refreshYmpicker: function _refreshYmpicker(target) {
      var inst = this._getInst(target);

      if (inst) {
        this._updateYmpicker(inst);
      }
    },

    /* Set the dates for a jQuery selection.
       @param  target   element - the target input field or division or span
       @param  date     Date - the new date */
    _setDateYmpicker: function _setDateYmpicker(target, date) {
      var inst = this._getInst(target);

      if (inst) {
        this._setDate(inst, date);

        this._updateYmpicker(inst);

        this._updateAlternate(inst);
      }
    },

    /* Get the date(s) for the first entry in a jQuery selection.
       @param  target     element - the target input field or division or span
       @param  noDefault  boolean - true if no default date is to be used
       @return Date - the current date */
    _getDateYmpicker: function _getDateYmpicker(target, noDefault) {
      var inst = this._getInst(target);

      if (inst && !inst.inline) this._setDateFromField(inst, noDefault);
      return inst ? this._getDate(inst) : null;
    },

    /* Handle keystrokes. */
    _doKeyDown: function _doKeyDown(event) {
      var inst = $.ympicker._getInst(event.target);

      var handled = true;
      var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
      inst._keyEvent = true;
      if ($.ympicker._ympickerShowing) switch (event.keyCode) {
        case 9:
          $.ympicker._hideYmpicker();

          handled = false;
          break;
        // hide on tab out

        case 13:
          var sel = $('td.' + $.ympicker._dayOverClass + ':not(.' + $.ympicker._currentClass + ')', inst.dpDiv);
          if (sel[0]) //							$.ympicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
            $.ympicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, 1, sel[0]);

          var onSelect = $.ympicker._get(inst, 'onSelect');

          if (onSelect) {
            var dateStr = $.ympicker._formatDate(inst); // trigger custom callback


            onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
          } else $.ympicker._hideYmpicker();

          return false; // don't submit the form

          break;
        // select the value on enter

        case 27:
          $.ympicker._hideYmpicker();

          break;
        // hide on escape

        case 33:
          $.ympicker._adjustDate(event.target, event.ctrlKey ? -$.ympicker._get(inst, 'stepBigMonths') : -$.ympicker._get(inst, 'stepMonths'), 'M');

          break;
        // previous month/year on page up/+ ctrl

        case 34:
          $.ympicker._adjustDate(event.target, event.ctrlKey ? +$.ympicker._get(inst, 'stepBigMonths') : +$.ympicker._get(inst, 'stepMonths'), 'M');

          break;
        // next month/year on page down/+ ctrl

        case 35:
          if (event.ctrlKey || event.metaKey) $.ympicker._clearDate(event.target);
          handled = event.ctrlKey || event.metaKey;
          break;
        // clear on ctrl or command +end

        case 36:
          if (event.ctrlKey || event.metaKey) $.ympicker._gotoToday(event.target);
          handled = event.ctrlKey || event.metaKey;
          break;
        // current on ctrl or command +home

        case 37:
          if (event.ctrlKey || event.metaKey) $.ympicker._adjustDate(event.target, isRTL ? +1 : -1, 'D');
          handled = event.ctrlKey || event.metaKey; // -1 day on ctrl or command +left

          if (event.originalEvent.altKey) $.ympicker._adjustDate(event.target, event.ctrlKey ? -$.ympicker._get(inst, 'stepBigMonths') : -$.ympicker._get(inst, 'stepMonths'), 'M'); // next month/year on alt +left on Mac

          break;

        case 38:
          if (event.ctrlKey || event.metaKey) $.ympicker._adjustDate(event.target, -7, 'D');
          handled = event.ctrlKey || event.metaKey;
          break;
        // -1 week on ctrl or command +up

        case 39:
          if (event.ctrlKey || event.metaKey) $.ympicker._adjustDate(event.target, isRTL ? -1 : +1, 'D');
          handled = event.ctrlKey || event.metaKey; // +1 day on ctrl or command +right

          if (event.originalEvent.altKey) $.ympicker._adjustDate(event.target, event.ctrlKey ? +$.ympicker._get(inst, 'stepBigMonths') : +$.ympicker._get(inst, 'stepMonths'), 'M'); // next month/year on alt +right

          break;

        case 40:
          if (event.ctrlKey || event.metaKey) $.ympicker._adjustDate(event.target, +7, 'D');
          handled = event.ctrlKey || event.metaKey;
          break;
        // +1 week on ctrl or command +down

        default:
          handled = false;
      } else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
        $.ympicker._showYmpicker(this);else {
        handled = false;
      }

      if (handled) {
        event.preventDefault();
        event.stopPropagation();
      }
    },

    /* Filter entered characters - based on date format. */
    _doKeyPress: function _doKeyPress(event) {
      var inst = $.ympicker._getInst(event.target);

      if ($.ympicker._get(inst, 'constrainInput')) {
        var chars = $.ympicker._possibleChars($.ympicker._get(inst, 'dateFormat'));

        var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
        return event.ctrlKey || event.metaKey || chr < ' ' || !chars || chars.indexOf(chr) > -1;
      }
    },

    /* Synchronise manual entry and field/alternate field. */
    _doKeyUp: function _doKeyUp(event) {
      var inst = $.ympicker._getInst(event.target);

      if (inst.input.val() != inst.lastVal) {
        try {
          var date = $.ympicker.parseDate($.ympicker._get(inst, 'dateFormat'), inst.input ? inst.input.val() : null, $.ympicker._getFormatConfig(inst));

          if (date) {
            // only if valid
            $.ympicker._setDateFromField(inst);

            $.ympicker._updateAlternate(inst);

            $.ympicker._updateYmpicker(inst);
          }
        } catch (err) {
          $.ympicker.log(err);
        }
      }

      return true;
    },

    /* Pop-up the date picker for a given input field.
          If false returned from beforeShow event handler do not show. 
       @param  input  element - the input field attached to the date picker or
                      event - if triggered by focus */
    _showYmpicker: function _showYmpicker(input) {
      input = input.target || input;
      if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
        input = $('input', input.parentNode)[0];
      if ($.ympicker._isDisabledYmpicker(input) || $.ympicker._lastInput == input) // already here
        return;

      var inst = $.ympicker._getInst(input);

      if ($.ympicker._curInst && $.ympicker._curInst != inst) {
        $.ympicker._curInst.dpDiv.stop(true, true);

        if (inst && $.ympicker._ympickerShowing) {
          $.ympicker._hideYmpicker($.ympicker._curInst.input[0]);
        }
      }

      var beforeShow = $.ympicker._get(inst, 'beforeShow');

      var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};

      if (beforeShowSettings === false) {
        //false
        return;
      }

      extendRemove(inst.settings, beforeShowSettings);
      inst.lastVal = null;
      $.ympicker._lastInput = input;

      $.ympicker._setDateFromField(inst);

      if ($.ympicker._inDialog) // hide cursor
        input.value = '';

      if (!$.ympicker._pos) {
        // position below input
        $.ympicker._pos = $.ympicker._findPos(input);
        $.ympicker._pos[1] += input.offsetHeight; // add the height
      }

      var isFixed = false;
      $(input).parents().each(function () {
        isFixed |= $(this).css('position') == 'fixed';
        return !isFixed;
      });

      if (isFixed && $.browser.opera) {
        // correction for Opera when fixed and scrolled
        $.ympicker._pos[0] -= document.documentElement.scrollLeft;
        $.ympicker._pos[1] -= document.documentElement.scrollTop;
      }

      var offset = {
        left: $.ympicker._pos[0],
        top: $.ympicker._pos[1]
      };
      $.ympicker._pos = null; //to avoid flashes on Firefox

      inst.dpDiv.empty(); // determine sizing offscreen

      inst.dpDiv.css({
        position: 'absolute',
        display: 'block',
        top: '-1000px'
      });

      $.ympicker._updateYmpicker(inst); // fix width for dynamic number of date pickers
      // and adjust position before showing


      offset = $.ympicker._checkOffset(inst, offset, isFixed);
      inst.dpDiv.css({
        position: $.ympicker._inDialog && $.blockUI ? 'static' : isFixed ? 'fixed' : 'absolute',
        display: 'none',
        left: offset.left + 'px',
        top: offset.top + 'px'
      });

      if (!inst.inline) {
        var showAnim = $.ympicker._get(inst, 'showAnim');

        var duration = $.ympicker._get(inst, 'duration');

        var postProcess = function postProcess() {
          var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only

          if (!!cover.length) {
            var borders = $.ympicker._getBorders(inst.dpDiv);

            cover.css({
              left: -borders[0],
              top: -borders[1],
              width: inst.dpDiv.outerWidth(),
              height: inst.dpDiv.outerHeight()
            });
          }
        };

        inst.dpDiv.zIndex($(input).zIndex() + 1);
        $.ympicker._ympickerShowing = true;
        if ($.effects && $.effects[showAnim]) inst.dpDiv.show(showAnim, $.ympicker._get(inst, 'showOptions'), duration, postProcess);else inst.dpDiv[showAnim || 'show'](showAnim ? duration : null, postProcess);
        if (!showAnim || !duration) postProcess();
        if (inst.input.is(':visible') && !inst.input.is(':disabled')) inst.input.focus();
        $.ympicker._curInst = inst;
      }
    },

    /* Generate the date picker content. */
    _updateYmpicker: function _updateYmpicker(inst) {
      var self = this;
      self.maxRows = 4; //Reset the max number of rows being displayed (see #7043)

      var borders = $.ympicker._getBorders(inst.dpDiv);

      instActive = inst; // for delegate hover events

      inst.dpDiv.empty().append(this._generateHTML(inst));
      var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only

      if (!!cover.length) {
        //avoid call to outerXXXX() when not in IE6
        cover.css({
          left: -borders[0],
          top: -borders[1],
          width: inst.dpDiv.outerWidth(),
          height: inst.dpDiv.outerHeight()
        });
      }

      inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();

      var numMonths = this._getNumberOfMonths(inst);

      var cols = numMonths[1];
      var width = 17;
      inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
      if (cols > 1) inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', width * cols + 'em');
      inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') + 'Class']('ui-datepicker-multi');
      inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl');
      if (inst == $.ympicker._curInst && $.ympicker._ympickerShowing && inst.input && // #6694 - don't focus the input if it's already focused
      // this breaks the change event in IE
      inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement) inst.input.focus(); // deffered render of the years select (to avoid flashes on Firefox) 

      if (inst.yearshtml) {
        var origyearshtml = inst.yearshtml;
        setTimeout(function () {
          //assure that inst.yearshtml didn't change.
          if (origyearshtml === inst.yearshtml && inst.yearshtml) {
            inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
          }

          origyearshtml = inst.yearshtml = null;
        }, 0);
      }
    },

    /* Retrieve the size of left and top borders for an element.
       @param  elem  (jQuery object) the element of interest
       @return  (number[2]) the left and top borders */
    _getBorders: function _getBorders(elem) {
      var convert = function convert(value) {
        return {
          thin: 1,
          medium: 2,
          thick: 3
        }[value] || value;
      };

      return [parseFloat(convert(elem.css('border-left-width'))), parseFloat(convert(elem.css('border-top-width')))];
    },

    /* Check positioning to remain on screen. */
    _checkOffset: function _checkOffset(inst, offset, isFixed) {
      var dpWidth = inst.dpDiv.outerWidth();
      var dpHeight = inst.dpDiv.outerHeight();
      var inputWidth = inst.input ? inst.input.outerWidth() : 0;
      var inputHeight = inst.input ? inst.input.outerHeight() : 0;
      var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
      var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();
      offset.left -= this._get(inst, 'isRTL') ? dpWidth - inputWidth : 0;
      offset.left -= isFixed && offset.left == inst.input.offset().left ? $(document).scrollLeft() : 0;
      offset.top -= isFixed && offset.top == inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0; // now check if ympicker is showing outside window viewport - move to a better place if so.

      offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
      offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
      return offset;
    },

    /* Find an object's position on the screen. */
    _findPos: function _findPos(obj) {
      var inst = this._getInst(obj);

      var isRTL = this._get(inst, 'isRTL');

      while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
        obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
      }

      var position = $(obj).offset();
      return [position.left, position.top];
    },

    /* Hide the date picker from view.
       @param  input  element - the input field attached to the date picker */
    _hideYmpicker: function _hideYmpicker(input) {
      var inst = this._curInst;
      if (!inst || input && inst != $.data(input, PROP_NAME)) return;

      if (this._ympickerShowing) {
        var showAnim = this._get(inst, 'showAnim');

        var duration = this._get(inst, 'duration');

        var postProcess = function postProcess() {
          $.ympicker._tidyDialog(inst);
        };

        if ($.effects && $.effects[showAnim]) inst.dpDiv.hide(showAnim, $.ympicker._get(inst, 'showOptions'), duration, postProcess);else inst.dpDiv[showAnim == 'slideDown' ? 'slideUp' : showAnim == 'fadeIn' ? 'fadeOut' : 'hide'](showAnim ? duration : null, postProcess);
        if (!showAnim) postProcess();
        this._ympickerShowing = false;

        var onClose = this._get(inst, 'onClose');

        if (onClose) onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : '', inst]);
        this._lastInput = null;

        if (this._inDialog) {
          this._dialogInput.css({
            position: 'absolute',
            left: '0',
            top: '-100px'
          });

          if ($.blockUI) {
            $.unblockUI();
            $('body').append(this.dpDiv);
          }
        }

        this._inDialog = false;
      }
    },

    /* Tidy up after a dialog display. */
    _tidyDialog: function _tidyDialog(inst) {
      inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
    },

    /* Close date picker if clicked elsewhere. */
    _checkExternalClick: function _checkExternalClick(event) {
      if (!$.ympicker._curInst) return;

      var $target = $(event.target),
          inst = $.ympicker._getInst($target[0]);

      if ($target[0].id != $.ympicker._mainDivId && $target.parents('#' + $.ympicker._mainDivId).length == 0 && !$target.hasClass($.ympicker.markerClassName) && !$target.closest("." + $.ympicker._triggerClass).length && $.ympicker._ympickerShowing && !($.ympicker._inDialog && $.blockUI) || $target.hasClass($.ympicker.markerClassName) && $.ympicker._curInst != inst) $.ympicker._hideYmpicker();
    },

    /* Adjust one of the date sub-fields. */
    _adjustDate: function _adjustDate(id, offset, period) {
      var target = $(id);

      var inst = this._getInst(target[0]);

      if (this._isDisabledYmpicker(target[0])) {
        return;
      }

      this._adjustInstDate(inst, offset + (period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
      period);

      this._updateYmpicker(inst);
    },

    /* Action for current link. */
    _gotoToday: function _gotoToday(id) {
      var target = $(id);

      var inst = this._getInst(target[0]);

      if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
      } else {
        var date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
      }

      this._notifyChange(inst);

      this._adjustDate(target);
    },

    /* Action for selecting a new month/year. */
    _selectMonthYear: function _selectMonthYear(id, select, period) {
      var target = $(id);

      var inst = this._getInst(target[0]);

      inst['selected' + (period == 'M' ? 'Month' : 'Year')] = inst['draw' + (period == 'M' ? 'Month' : 'Year')] = parseInt(select.options[select.selectedIndex].value, 10);

      this._notifyChange(inst);

      this._adjustDate(target);
    },

    /* Action for selecting a day. */
    //	_selectDay: function(id, month, year, td) {
    _selectDay: function _selectDay(id, month, year, d, td) {
      var target = $(id);

      if ($(td).hasClass(this._unselectableClass) || this._isDisabledYmpicker(target[0])) {
        return;
      }

      var inst = this._getInst(target[0]);

      inst.selectedDay = inst.currentDay = d;
      inst.selectedMonth = inst.currentMonth = month;
      inst.selectedYear = inst.currentYear = year;

      this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
    },

    /* Erase the input field and hide the date picker. */
    _clearDate: function _clearDate(id) {
      var target = $(id);

      var inst = this._getInst(target[0]);

      this._selectDate(target, '');
    },

    /* Update the input field with the selected date. */
    _selectDate: function _selectDate(id, dateStr) {
      var target = $(id);

      var inst = this._getInst(target[0]);

      dateStr = dateStr != null ? dateStr : this._formatDate(inst);
      if (inst.input) inst.input.val(dateStr);

      this._updateAlternate(inst);

      var onSelect = this._get(inst, 'onSelect');

      if (onSelect) onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]); // trigger custom callback
      else if (inst.input) inst.input.trigger('change'); // fire the change event

      if (inst.inline) this._updateYmpicker(inst);else {
        this._hideYmpicker();

        this._lastInput = inst.input[0];
        if (_typeof(inst.input[0]) != 'object') inst.input.focus(); // restore focus

        this._lastInput = null;
      }
    },

    /* Update any alternate field to synchronise with the main field. */
    _updateAlternate: function _updateAlternate(inst) {
      var altField = this._get(inst, 'altField');

      if (altField) {
        // update alternate field too
        var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');

        var date = this._getDate(inst);

        var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
        $(altField).each(function () {
          $(this).val(dateStr);
        });
      }
    },

    /* Set as beforeShowDay function to prevent selection of weekends.
       @param  date  Date - the date to customise
       @return [boolean, string] - is this date selectable?, what is its CSS class? */
    noWeekends: function noWeekends(date) {
      var day = date.getDay();
      return [day > 0 && day < 6, ''];
    },

    /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
       @param  date  Date - the date to get the week for
       @return  number - the number of the week within the year that contains this date */
    iso8601Week: function iso8601Week(date) {
      var checkDate = new Date(date.getTime()); // Find Thursday of this week starting on Monday

      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      var time = checkDate.getTime();
      checkDate.setMonth(0); // Compare with Jan 1

      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
    },

    /* Parse a string value into a date object.
       See formatDate below for the possible formats.
    
       @param  format    string - the expected format of the date
       @param  value     string - the date in the above format
       @param  settings  Object - attributes include:
                         shortYearCutoff  number - the cutoff year for determining the century (optional)
                         dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
                         dayNames         string[7] - names of the days from Sunday (optional)
                         monthNamesShort  string[12] - abbreviated names of the months (optional)
                         monthNames       string[12] - names of the months (optional)
       @return  Date - the extracted date value or null if value is blank */
    parseDate: function parseDate(format, value, settings) {
      if (format == null || value == null) throw 'Invalid arguments';
      value = _typeof(value) == 'object' ? value.toString() : value + '';
      if (value == '') return null;
      var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
      shortYearCutoff = typeof shortYearCutoff != 'string' ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
      var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
      var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
      var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
      var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
      var year = -1;
      var month = -1;
      var day = -1;
      var doy = -1;
      var literal = false; // Check whether a format character is doubled

      var lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) == match;
        if (matches) iFormat++;
        return matches;
      }; // Extract a number from the string value


      var getNumber = function getNumber(match) {
        var isDoubled = lookAhead(match);
        var size = match == '@' ? 14 : match == '!' ? 20 : match == 'y' && isDoubled ? 4 : match == 'o' ? 3 : 2;
        var digits = new RegExp('^\\d{1,' + size + '}');
        var num = value.substring(iValue).match(digits);
        if (!num) throw 'Missing number at position ' + iValue;
        iValue += num[0].length;
        return parseInt(num[0], 10);
      }; // Extract a name from the string value and convert to an index


      var getName = function getName(match, shortNames, longNames) {
        var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
          return [[k, v]];
        }).sort(function (a, b) {
          return -(a[1].length - b[1].length);
        });
        var index = -1;
        $.each(names, function (i, pair) {
          var name = pair[1];

          if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
            index = pair[0];
            iValue += name.length;
            return false;
          }
        });
        if (index != -1) return index + 1;else throw 'Unknown name at position ' + iValue;
      }; // Confirm that a literal character matches the string value


      var checkLiteral = function checkLiteral() {
        if (value.charAt(iValue) != format.charAt(iFormat)) throw 'Unexpected literal at position ' + iValue;
        iValue++;
      };

      var iValue = 0;

      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) == "'" && !lookAhead("'")) literal = false;else checkLiteral();
        } else switch (format.charAt(iFormat)) {
          case 'd':
            day = getNumber('d');
            break;

          case 'D':
            getName('D', dayNamesShort, dayNames);
            break;

          case 'o':
            doy = getNumber('o');
            break;

          case 'm':
            month = getNumber('m');
            break;

          case 'M':
            month = getName('M', monthNamesShort, monthNames);
            break;

          case 'y':
            year = getNumber('y');
            break;

          case '@':
            var date = new Date(getNumber('@'));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;

          case '!':
            var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;

          case "'":
            if (lookAhead("'")) checkLiteral();else literal = true;
            break;

          default:
            checkLiteral();
        }
      }

      if (iValue < value.length) {
        throw "Extra/unparsed characters found in date: " + value.substring(iValue);
      }

      if (year == -1) year = new Date().getFullYear();else if (year < 100) year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);

      if (doy > -1) {
        month = 1;
        day = doy;

        do {
          var dim = this._getDaysInMonth(year, month - 1);

          if (day <= dim) break;
          month++;
          day -= dim;
        } while (true);
      }

      var date = this._daylightSavingAdjust(new Date(year, month - 1, day));

      if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) throw 'Invalid date'; // E.g. 31/02/00

      return date;
    },

    /* Standard date formats. */
    ATOM: 'yy-mm-dd',
    // RFC 3339 (ISO 8601)
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    // RFC 822
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    // ISO 8601
    _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000,

    /* Format a date object into a string value.
       The format can be combinations of the following:
       d  - day of month (no leading zero)
       dd - day of month (two digit)
       o  - day of year (no leading zeros)
       oo - day of year (three digit)
       D  - day name short
       DD - day name long
       m  - month of year (no leading zero)
       mm - month of year (two digit)
       M  - month name short
       MM - month name long
       y  - year (two digit)
       yy - year (four digit)
       @ - Unix timestamp (ms since 01/01/1970)
       ! - Windows ticks (100ns since 01/01/0001)
       '...' - literal text
       '' - single quote
    
       @param  format    string - the desired format of the date
       @param  date      Date - the date value to format
       @param  settings  Object - attributes include:
                         dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
                         dayNames         string[7] - names of the days from Sunday (optional)
                         monthNamesShort  string[12] - abbreviated names of the months (optional)
                         monthNames       string[12] - names of the months (optional)
       @return  string - the date in the above format */
    formatDate: function formatDate(format, date, settings) {
      if (!date) return '';
      var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
      var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
      var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
      var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames; // Check whether a format character is doubled

      var lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) == match;
        if (matches) iFormat++;
        return matches;
      }; // Format a number, with leading zero if necessary


      var formatNumber = function formatNumber(match, value, len) {
        var num = '' + value;
        if (lookAhead(match)) while (num.length < len) {
          num = '0' + num;
        }
        return num;
      }; // Format a name, short or long as requested


      var formatName = function formatName(match, value, shortNames, longNames) {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      };

      var output = '';
      var literal = false;
      if (date) for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) == "'" && !lookAhead("'")) literal = false;else output += format.charAt(iFormat);
        } else switch (format.charAt(iFormat)) {
          case 'd':
            output += formatNumber('d', date.getDate(), 2);
            break;

          case 'D':
            output += formatName('D', date.getDay(), dayNamesShort, dayNames);
            break;

          case 'o':
            output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
            break;

          case 'm':
            output += formatNumber('m', date.getMonth() + 1, 2);
            break;

          case 'M':
            output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
            break;

          case 'y':
            output += lookAhead('y') ? date.getFullYear() : (date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100;
            break;

          case '@':
            output += date.getTime();
            break;

          case '!':
            output += date.getTime() * 10000 + this._ticksTo1970;
            break;

          case "'":
            if (lookAhead("'")) output += "'";else literal = true;
            break;

          default:
            output += format.charAt(iFormat);
        }
      }
      return output;
    },

    /* Extract all possible characters from the date format. */
    _possibleChars: function _possibleChars(format) {
      var chars = '';
      var literal = false; // Check whether a format character is doubled

      var lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) == match;
        if (matches) iFormat++;
        return matches;
      };

      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) == "'" && !lookAhead("'")) literal = false;else chars += format.charAt(iFormat);
        } else switch (format.charAt(iFormat)) {
          case 'd':
          case 'm':
          case 'y':
          case '@':
            chars += '0123456789';
            break;

          case 'D':
          case 'M':
            return null;
          // Accept anything

          case "'":
            if (lookAhead("'")) chars += "'";else literal = true;
            break;

          default:
            chars += format.charAt(iFormat);
        }
      }

      return chars;
    },

    /* Get a setting value, defaulting if necessary. */
    _get: function _get(inst, name) {
      return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
    },

    /* Parse existing date and initialise date picker. */
    _setDateFromField: function _setDateFromField(inst, noDefault) {
      if (inst.input.val() == inst.lastVal) {
        return;
      }

      var dateFormat = this._get(inst, 'dateFormat');

      var dates = inst.lastVal = inst.input ? inst.input.val() : null;
      var date, defaultDate;
      date = defaultDate = this._getDefaultDate(inst);

      var settings = this._getFormatConfig(inst);

      try {
        date = this.parseDate(dateFormat, dates, settings) || defaultDate;
      } catch (event) {
        this.log(event);
        dates = noDefault ? '' : dates;
      }

      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      inst.currentDay = dates ? date.getDate() : 0;
      inst.currentMonth = dates ? date.getMonth() : 0;
      inst.currentYear = dates ? date.getFullYear() : 0;

      this._adjustInstDate(inst);
    },

    /* Retrieve the default date shown on opening. */
    _getDefaultDate: function _getDefaultDate(inst) {
      return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
    },

    /* A date may be specified as an exact value or a relative one. */
    _determineDate: function _determineDate(inst, date, defaultDate) {
      var offsetNumeric = function offsetNumeric(offset) {
        var date = new Date();
        date.setDate(date.getDate() + offset);
        return date;
      };

      var offsetString = function offsetString(offset) {
        try {
          return $.ympicker.parseDate($.ympicker._get(inst, 'dateFormat'), offset, $.ympicker._getFormatConfig(inst));
        } catch (e) {// Ignore
        }

        var date = (offset.toLowerCase().match(/^c/) ? $.ympicker._getDate(inst) : null) || new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
        var matches = pattern.exec(offset);

        while (matches) {
          switch (matches[2] || 'd') {
            case 'd':
            case 'D':
              day += parseInt(matches[1], 10);
              break;

            case 'w':
            case 'W':
              day += parseInt(matches[1], 10) * 7;
              break;

            case 'm':
            case 'M':
              month += parseInt(matches[1], 10);
              day = Math.min(day, $.ympicker._getDaysInMonth(year, month));
              break;

            case 'y':
            case 'Y':
              year += parseInt(matches[1], 10);
              day = Math.min(day, $.ympicker._getDaysInMonth(year, month));
              break;
          }

          matches = pattern.exec(offset);
        }

        return new Date(year, month, day);
      };

      var newDate = date == null || date === '' ? defaultDate : typeof date == 'string' ? offsetString(date) : typeof date == 'number' ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());
      newDate = newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate;

      if (newDate) {
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
      }

      return this._daylightSavingAdjust(newDate);
    },

    /* Handle switch to/from daylight saving.
       Hours may be non-zero on daylight saving cut-over:
       > 12 when midnight changeover, but then cannot generate
       midnight datetime, so jump to 1AM, otherwise reset.
       @param  date  (Date) the date to check
       @return  (Date) the corrected date */
    _daylightSavingAdjust: function _daylightSavingAdjust(date) {
      if (!date) return null;
      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    },

    /* Set the date(s) directly. */
    _setDate: function _setDate(inst, date, noChange) {
      var clear = !date;
      var origMonth = inst.selectedMonth;
      var origYear = inst.selectedYear;

      var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

      inst.selectedDay = inst.currentDay = newDate.getDate();
      inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
      inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
      if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange) this._notifyChange(inst);

      this._adjustInstDate(inst);

      if (inst.input) {
        inst.input.val(clear ? '' : this._formatDate(inst));
      }
    },

    /* Retrieve the date(s) directly. */
    _getDate: function _getDate(inst) {
      var startDate = !inst.currentYear || inst.input && inst.input.val() == '' ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
      return startDate;
    },

    /* Generate the HTML for the current state of the date picker. */
    _generateHTML: function _generateHTML(inst) {
      var today = new Date();
      today = this._daylightSavingAdjust(new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time

      var isRTL = this._get(inst, 'isRTL');

      var showButtonPanel = this._get(inst, 'showButtonPanel');

      var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');

      var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');

      var numMonths = this._getNumberOfMonths(inst);

      var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');

      var stepMonths = this._get(inst, 'stepMonths');

      var isMultiMonth = numMonths[0] != 1 || numMonths[1] != 1;

      var currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay));

      var minDate = this._getMinMaxDate(inst, 'min');

      var maxDate = this._getMinMaxDate(inst, 'max');

      var drawMonth = inst.drawMonth - showCurrentAtPos;
      var drawYear = inst.drawYear;

      if (drawMonth < 0) {
        drawMonth += 12;
        drawYear--;
      }

      if (maxDate) {
        var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));

        maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;

        while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
          drawMonth--;

          if (drawMonth < 0) {
            drawMonth = 11;
            drawYear--;
          }
        }
      }

      inst.drawMonth = drawMonth;
      inst.drawYear = drawYear;

      var prevText = this._get(inst, 'prevText');

      prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));
      var prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.ympicker._adjustDate(\'#' + inst.id + '\', -' + stepMonths + ', \'M\');"' + ' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' : hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>';

      var nextText = this._get(inst, 'nextText');

      nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));
      var next = this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.ympicker._adjustDate(\'#' + inst.id + '\', +' + stepMonths + ', \'M\');"' + ' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' : hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + (isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>';

      var currentText = this._get(inst, 'currentText');

      var gotoDate = this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today;
      currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
      var controls = !inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.ympicker._hideYmpicker();">' + this._get(inst, 'closeText') + '</button>' : '';
      var buttonPanel = showButtonPanel ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') + (this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.ympicker._gotoToday(\'#' + inst.id + '\');"' + '>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
      var firstDay = parseInt(this._get(inst, 'firstDay'), 10);
      firstDay = isNaN(firstDay) ? 0 : firstDay;

      var showWeek = this._get(inst, 'showWeek');

      var dayNames = this._get(inst, 'dayNames');

      var dayNamesShort = this._get(inst, 'dayNamesShort');

      var dayNamesMin = this._get(inst, 'dayNamesMin');

      var monthNames = this._get(inst, 'monthNames');

      var monthNamesShort = this._get(inst, 'monthNamesShort');

      var beforeShowDay = this._get(inst, 'beforeShowDay');

      var showOtherMonths = this._get(inst, 'showOtherMonths');

      var selectOtherMonths = this._get(inst, 'selectOtherMonths');

      var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;

      var defaultDate = this._getDefaultDate(inst);

      var html = '';

      for (var row = 0; row < numMonths[0]; row++) {
        var group = '';
        this.maxRows = 4;

        for (var col = 0; col < numMonths[1]; col++) {
          var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));

          var cornerClass = ' ui-corner-all';
          var calender = '';

          if (isMultiMonth) {
            calender += '<div class="ui-datepicker-group';
            if (numMonths[1] > 1) switch (col) {
              case 0:
                calender += ' ui-datepicker-group-first';
                cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left');
                break;

              case numMonths[1] - 1:
                calender += ' ui-datepicker-group-last';
                cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right');
                break;

              default:
                calender += ' ui-datepicker-group-middle';
                cornerClass = '';
                break;
            }
            calender += '">';
          }

          calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' + (/all|left/.test(cornerClass) && row == 0 ? isRTL ? next : prev : '') + (/all|right/.test(cornerClass) && row == 0 ? isRTL ? prev : next : '') + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
          //					'</div><table class="ui-datepicker-calendar"><thead>' +
          '</div><table class="ui-datepicker-calendar"><tbody>';
          /*
          					'<tr>';
          				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
          				for (var dow = 0; dow < 7; dow++) { // days of the week
          					var day = (dow + firstDay) % 7;
          					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
          						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
          				}
          				calender += thead + '</tr></thead><tbody>';
          */

          var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);

          if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth) inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
          var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
          var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate

          var numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows; //If multiple months, use the higher number of rows (see #7043)

          this.maxRows = numRows; //var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));

          var printDate = this._daylightSavingAdjust(new Date(drawYear, 0, 1)); //				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows


          for (var dRow = 0; dRow < 3; dRow++) {
            // create date picker rows
            calender += '<tr>';
            var tbody = !showWeek ? '' : '<td class="ui-datepicker-week-col">' + this._get(inst, 'calculateWeek')(printDate) + '</td>'; //					for (var dow = 0; dow < 7; dow++) { // create date picker days

            for (var dow = 0; dow < 4; dow++) {
              // create date picker days
              var daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [true, ''];
              var otherMonth = printDate.getMonth() != drawMonth;
              var unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
              tbody += '<td class="' + ((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + ( // highlight weekends
              otherMonth ? ' ui-datepicker-other-month' : '') + ( // highlight days from other months
              printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent || // user pressed key
              defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime() ? // or defaultDate is current printedDate and defaultDate is selectedDate
              ' ' + this._dayOverClass : '') + ( // highlight selected day
              unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') + ( // highlight unselectable days
              otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + ( // highlight custom dates
              printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + ( // highlight selected day
              printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + ( // highlight today (if different)
              (!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + ( // cell title
              unselectable ? '' : ' onclick="DP_jQuery_' + dpuuid + '.ympicker._selectDay(\'#' + //							inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ', this);return false;"') + '>' + // actions
              inst.id + '\',' + printDate.getMonth() + ',' + printDate.getFullYear() + ',' + printDate.getDate() + ', this);return false;"') + '>' + ( // actions
              otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
              unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' + (printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') + (printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + ( // highlight selected day
              otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
              //							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
              '" href="#">' + monthNamesShort[printDate.getMonth()] + '</a>') + '</td>'; // display selectable date
              //						printDate.setDate(printDate.getDate() + 1);

              printDate.setMonth(printDate.getMonth() + 1);
              printDate = this._daylightSavingAdjust(printDate);
            }

            calender += tbody + '</tr>';
          }

          drawMonth++;

          if (drawMonth > 11) {
            drawMonth = 0;
            drawYear++;
          }

          calender += '</tbody></table>' + (isMultiMonth ? '</div>' + (numMonths[0] > 0 && col == numMonths[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
          group += calender;
        }

        html += group;
      }

      html += buttonPanel + ($.browser.msie && parseInt($.browser.version, 11) < 7 && !inst.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
      inst._keyEvent = false;
      return html;
    },

    /* Generate the month and year header. */
    _generateMonthYearHeader: function _generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
      var changeMonth = this._get(inst, 'changeMonth');

      var changeYear = this._get(inst, 'changeYear');

      var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');

      var html = '<div class="ui-datepicker-title">';
      var monthHtml = ''; // month selection

      /*
      		if (secondary || !changeMonth)
      			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
      		else {
      			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
      			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
      			monthHtml += '<select class="ui-datepicker-month" ' +
      				'onchange="DP_jQuery_' + dpuuid + '.ympicker._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
      			 	'>';
      			for (var month = 0; month < 12; month++) {
      				if ((!inMinYear || month >= minDate.getMonth()) &&
      						(!inMaxYear || month <= maxDate.getMonth()))
      					monthHtml += '<option value="' + month + '"' +
      						(month == drawMonth ? ' selected="selected"' : '') +
      						'>' + monthNamesShort[month] + '</option>';
      			}
      			monthHtml += '</select>';
      		}
      		if (!showMonthAfterYear)
      			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
      */
      // year selection

      if (!inst.yearshtml) {
        inst.yearshtml = '';
        if (secondary || !changeYear) html += '<span class="ui-datepicker-year">' + drawYear + '</span>';else {
          // determine range of years to display
          var years = this._get(inst, 'yearRange').split(':');

          var thisYear = new Date().getFullYear();

          var determineYear = function determineYear(value) {
            var year = value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
            return isNaN(year) ? thisYear : year;
          };

          var year = determineYear(years[0]);
          var endYear = Math.max(year, determineYear(years[1] || ''));
          year = minDate ? Math.max(year, minDate.getFullYear()) : year;
          endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
          inst.yearshtml += '<select class="ui-datepicker-year" ' + 'onchange="DP_jQuery_' + dpuuid + '.ympicker._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' + '>';

          for (; year <= endYear; year++) {
            inst.yearshtml += '<option value="' + year + '"' + (year == drawYear ? ' selected="selected"' : '') + '>' + year + '</option>';
          }

          inst.yearshtml += '</select>';
          html += inst.yearshtml;
          inst.yearshtml = null;
        }
      }

      html += this._get(inst, 'yearSuffix');
      if (showMonthAfterYear) html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
      html += '</div>'; // Close ympicker_header

      return html;
    },

    /* Adjust one of the date sub-fields. */
    _adjustInstDate: function _adjustInstDate(inst, offset, period) {
      var year = inst.drawYear + (period == 'Y' ? offset : 0);
      var month = inst.drawMonth + (period == 'M' ? offset : 0);
      var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period == 'D' ? offset : 0);

      var date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      if (period == 'M' || period == 'Y') this._notifyChange(inst);
    },

    /* Ensure a date is within any min/max bounds. */
    _restrictMinMax: function _restrictMinMax(inst, date) {
      var minDate = this._getMinMaxDate(inst, 'min');

      var maxDate = this._getMinMaxDate(inst, 'max');

      var newDate = minDate && date < minDate ? minDate : date;
      newDate = maxDate && newDate > maxDate ? maxDate : newDate;
      return newDate;
    },

    /* Notify change of month/year. */
    _notifyChange: function _notifyChange(inst) {
      var onChange = this._get(inst, 'onChangeMonthYear');

      if (onChange) onChange.apply(inst.input ? inst.input[0] : null, [inst.selectedYear, inst.selectedMonth + 1, inst]);
    },

    /* Determine the number of months to show. */
    _getNumberOfMonths: function _getNumberOfMonths(inst) {
      var numMonths = this._get(inst, 'numberOfMonths');

      return numMonths == null ? [1, 1] : typeof numMonths == 'number' ? [1, numMonths] : numMonths;
    },

    /* Determine the current maximum date - ensure no time components are set. */
    _getMinMaxDate: function _getMinMaxDate(inst, minMax) {
      return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
    },

    /* Find the number of days in a given month. */
    _getDaysInMonth: function _getDaysInMonth(year, month) {
      return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
    },

    /* Find the day of the week of the first of a month. */
    _getFirstDayOfMonth: function _getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    },

    /* Determines if we should allow a "next/prev" month display change. */
    _canAdjustMonth: function _canAdjustMonth(inst, offset, curYear, curMonth) {
      var numMonths = this._getNumberOfMonths(inst);

      var date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

      if (offset < 0) date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
      return this._isInRange(inst, date);
    },

    /* Is the given date in the accepted range? */
    _isInRange: function _isInRange(inst, date) {
      var minDate = this._getMinMaxDate(inst, 'min');

      var maxDate = this._getMinMaxDate(inst, 'max');

      return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime());
    },

    /* Provide the configuration settings for formatting/parsing. */
    _getFormatConfig: function _getFormatConfig(inst) {
      var shortYearCutoff = this._get(inst, 'shortYearCutoff');

      shortYearCutoff = typeof shortYearCutoff != 'string' ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
      return {
        shortYearCutoff: shortYearCutoff,
        dayNamesShort: this._get(inst, 'dayNamesShort'),
        dayNames: this._get(inst, 'dayNames'),
        monthNamesShort: this._get(inst, 'monthNamesShort'),
        monthNames: this._get(inst, 'monthNames')
      };
    },

    /* Format the given date for display. */
    _formatDate: function _formatDate(inst, day, month, year) {
      if (!day) {
        inst.currentDay = inst.selectedDay;
        inst.currentMonth = inst.selectedMonth;
        inst.currentYear = inst.selectedYear;
      }

      var date = day ? _typeof(day) == 'object' ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
      return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
    }
  });
  /*
   * Bind hover events for ympicker elements.
   * Done via delegate so the binding only occurs once in the lifetime of the parent div.
   * Global instActive, set by _updateYmpicker allows the handlers to find their way back to the active picker.
   */

  function bindHover(dpDiv) {
    var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return dpDiv.bind('mouseout', function (event) {
      var elem = $(event.target).closest(selector);

      if (!elem.length) {
        return;
      }

      elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
    }).bind('mouseover', function (event) {
      var elem = $(event.target).closest(selector);

      if ($.ympicker._isDisabledYmpicker(instActive.inline ? dpDiv.parent()[0] : instActive.input[0]) || !elem.length) {
        return;
      }

      elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
      elem.addClass('ui-state-hover');
      if (elem.hasClass('ui-datepicker-prev')) elem.addClass('ui-datepicker-prev-hover');
      if (elem.hasClass('ui-datepicker-next')) elem.addClass('ui-datepicker-next-hover');
    });
  }
  /* jQuery extend now ignores nulls! */


  function extendRemove(target, props) {
    $.extend(target, props);

    for (var name in props) {
      if (props[name] == null || props[name] == undefined) target[name] = props[name];
    }

    return target;
  }

  ;
  /* Determine whether an object is an array. */

  function isArray(a) {
    return a && ($.browser.safari && _typeof(a) == 'object' && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/));
  }

  ;
  /* Invoke the ympicker functionality.
     @param  options  string - a command, optionally followed by additional parameters or
                      Object - settings for attaching new ympicker functionality
     @return  jQuery object */

  $.fn.ympicker = function (options) {
    /* Verify an empty collection wasn't passed - Fixes #6976 */
    if (!this.length) {
      return this;
    }
    /* Initialise the date picker. */


    if (!$.ympicker.initialized) {
      $(document).mousedown($.ympicker._checkExternalClick).find('body').append($.ympicker.dpDiv);
      $.ympicker.initialized = true;
    }

    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget')) return $.ympicker['_' + options + 'Ympicker'].apply($.ympicker, [this[0]].concat(otherArgs));
    if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string') return $.ympicker['_' + options + 'Ympicker'].apply($.ympicker, [this[0]].concat(otherArgs));
    return this.each(function () {
      typeof options == 'string' ? $.ympicker['_' + options + 'Ympicker'].apply($.ympicker, [this].concat(otherArgs)) : $.ympicker._attachYmpicker(this, options);
    });
  };

  $.ympicker = new Ympicker(); // singleton instance

  $.ympicker.initialized = false;
  $.ympicker.uuid = new Date().getTime();
  $.ympicker.version = "1.8.21"; // Workaround for #4055
  // Add another global to avoid noConflict issues with inline event handlers

  window['DP_jQuery_' + dpuuid] = $;
})(jQuery); // ympicker ここまで


$(function () {
  $('.datepicker').datepicker(); //年月入力

  var op = {
    closeText: '閉じる',
    prevText: '&#x3c;前',
    nextText: '次&#x3e;',
    currentText: '今日',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dateFormat: 'yy/mm',
    yearSuffix: '年'
  };
  $('.ympicker').ympicker(op);
  $('.ympicker-en').ympicker();
});

/***/ }),

/***/ 2:
/*!********************************************************************************************************************************************************!*\
  !*** multi ./resources/js/picker/jquery.ui.datepicker-ja.js ./resources/js/picker/jquery.ui.ympicker.js ./resources/js/picker/jquery-migrate-1.0.0.js ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\laragon\www\eimohmohhtwe\resources\js\picker\jquery.ui.datepicker-ja.js */"./resources/js/picker/jquery.ui.datepicker-ja.js");
__webpack_require__(/*! C:\laragon\www\eimohmohhtwe\resources\js\picker\jquery.ui.ympicker.js */"./resources/js/picker/jquery.ui.ympicker.js");
module.exports = __webpack_require__(/*! C:\laragon\www\eimohmohhtwe\resources\js\picker\jquery-migrate-1.0.0.js */"./resources/js/picker/jquery-migrate-1.0.0.js");


/***/ })

/******/ });