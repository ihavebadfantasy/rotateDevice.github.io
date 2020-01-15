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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS - ./js/index.js
 // SCSS



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _touchDeviceNotification_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _touchDeviceNotification_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_touchDeviceNotification_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _desktopNotification_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _desktopNotification_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_desktopNotification_ts__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-restricted-syntax */
// Main js file



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var notificationGeneral_1 = __webpack_require__(3);
var notificationSVG = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 184.02 312.02\" style=\"enable-background:new 0 0 184.02 312.02;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n.st0{fill:#FFFFFF;}\n</style>\n<g>\n<path d=\"M163.52,312H20.48C9.17,312,0,302.83,0,291.52V20.54C0,9.23,9.17,0.06,20.48,0.06h143.04c11.31,0,20.48,9.17,20.48,20.48\n v270.98C184,302.83,174.83,312,163.52,312z\"/>\n<path class=\"st0\" d=\"M156.34,304.09H27.66c-10.91,0-19.75-8.84-19.75-19.75V25.56c0-10.91,8.84-19.75,19.75-19.75h128.69\n c10.91,0,19.75,8.84,19.75,19.75v258.78C176.09,295.25,167.25,304.09,156.34,304.09z\"/>\n<circle cx=\"92\" cy=\"282.53\" r=\"12.22\"/>\n<path d=\"M113.46,14.44H70.54c-7.5,0-14.3-4.4-17.37-11.23l-1.41-3.14h80.5l-1.41,3.14C127.76,10.04,120.96,14.44,113.46,14.44z\"/>\n</g>\n</svg>";
var touchDeviceNotificationConfig = {
    blockedOrientation: 'landscape',
    allowContentShow: true,
    mainMessage: 'Please turn your device',
    extraMessage: 'or tap the screen to continue',
    responsivePortraitBreak: 767,
    responsiveLandscapeBreak: 850,
    showClass: 'show',
    notificationClassPrefix: 'touch-device',
    iconPath: notificationSVG,
    appearAnimation: '',
    hideAnimation: '',
    hideAnimationDuration: 0,
    type: 'touchDevice',
    customHTML: false,
};
var createTouchDeviceNotification = function (userOpts) {
    var opts = __assign(__assign({}, touchDeviceNotificationConfig), userOpts);
    return new TouchDeviceNotification(opts);
};
var TouchDeviceNotification = /** @class */ (function (_super) {
    __extends(TouchDeviceNotification, _super);
    function TouchDeviceNotification(opts) {
        var _this = _super.call(this, opts) || this;
        _this.blockedOrientation = opts.blockedOrientation;
        _this.responsiveLandscapeBreak = opts.responsiveLandscapeBreak;
        _this.responsivePortraitBreak = opts.responsivePortraitBreak;
        return _this;
    }
    TouchDeviceNotification.prototype.isPortrait = function () {
        var mql = window.matchMedia('(orientation: portrait)');
        return mql.matches;
    };
    TouchDeviceNotification.prototype.isDeviceInBlockedPortrait = function () {
        return (window.innerWidth < this.responsivePortraitBreak);
    };
    TouchDeviceNotification.prototype.isDeviceInBlockedLandscape = function () {
        return (window.innerWidth < this.responsiveLandscapeBreak);
    };
    TouchDeviceNotification.prototype.startNotification = function () {
        switch (this.blockedOrientation) {
            case 'portrait':
                if (!this.notificationState && this.isPortrait()) {
                    if (this.isDeviceInBlockedPortrait()) {
                        this.showNotification();
                    }
                }
                else if (this.notificationState && !this.isPortrait()) {
                    this.hideNotification();
                }
                break;
            case 'landscape':
                if (!this.isPortrait() && !this.notificationState) {
                    if (this.isDeviceInBlockedLandscape()) {
                        this.showNotification();
                    }
                }
                else if (this.isPortrait() && this.notificationState) {
                    this.hideNotification();
                }
                break;
            default:
                break;
        }
    };
    return TouchDeviceNotification;
}(notificationGeneral_1.NotificationClass));
var a = createTouchDeviceNotification({
    blockedOrientation: 'landscape',
    //appearAnimation: 'animated fadeIn',
    //hideAnimation: 'animated fadeOut',
    responsivePortraitBreak: 769,
    responsiveLandscapeBreak: 1025,
});
a.init();
//  setTimeout(()=> {
//   a.destroy();
//  }, 5000)
//  setTimeout(()=> {
//   a.init();
//  }, 10000)


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NOTIFICATION_WRAPPER_CLASS = 'notification-wrapper';
var NOTIFICATION_BLOCK_CLASS = 'notification-block';
var NOTIFICATION_MAIN_MESSAGE_CLASS = 'notification-main-message';
var NOTIFICATION_EXTRA_MESSAGE_CLASS = 'notification-extra-message';
var NOTIFICATION_IMAGE_WRAPPER_CLASS = 'notification-img-wrapper';
var DEFAULT_ICON_CLASS = 'default-icon';
var contentWrapper = document.body;
var NotificationClass = /** @class */ (function () {
    function NotificationClass(opts) {
        this.type = opts.type;
        this.mainMessage = opts.mainMessage;
        this.extraMessage = opts.extraMessage;
        this.allowContentShow = opts.allowContentShow;
        this.showClass = 'show';
        this.notificationClassPrefix = opts.notificationClassPrefix;
        this.iconPath = opts.iconPath;
        this.appearAnimation = opts.appearAnimation;
        this.hideAnimation = opts.hideAnimation;
        this.hideAnimationDuration = (opts.hideAnimationDuration === 0 && opts.hideAnimation !== '') ? (400) : (opts.hideAnimationDuration);
        this.notificationState = false;
        this.customHTML = opts.customHTML;
        this.initialized = false;
    }
    NotificationClass.prototype.deviceType = function () {
        return /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent) ? ('touchDevice') : ('desktop');
    };
    NotificationClass.prototype.getWindowWidth = function () {
        return window.innerWidth;
    };
    NotificationClass.prototype.getWindowHeight = function () {
        return window.innerHeight;
    };
    NotificationClass.prototype.buildNotificationHtml = function () {
        var notyWrapper = document.createElement('div');
        notyWrapper.classList.add(this.notificationClassPrefix + "-" + NOTIFICATION_WRAPPER_CLASS);
        if (typeof this.customHTML === 'boolean') {
            if (this.iconPath[0] !== '<') {
                this.iconPath = "<img src=\"" + this.iconPath + "\" alt=\"icon\">";
            }
            var extraMessage = void 0;
            if (this.extraMessage) {
                extraMessage = "<p class=\"" + this.notificationClassPrefix + "-" + NOTIFICATION_EXTRA_MESSAGE_CLASS + "\">" + this.extraMessage + "</p>";
            }
            else {
                extraMessage = '';
            }
            notyWrapper.innerHTML = "<div class=\"" + this.notificationClassPrefix + "-" + NOTIFICATION_BLOCK_CLASS + "\">\n      <p class=\"" + this.notificationClassPrefix + "-" + NOTIFICATION_MAIN_MESSAGE_CLASS + "\">" + this.mainMessage + "</p> <div class=\"" + this.notificationClassPrefix + "-" + NOTIFICATION_IMAGE_WRAPPER_CLASS + " " + this.notificationClassPrefix + "-" + DEFAULT_ICON_CLASS + "\">" + this.iconPath + "</div> " + extraMessage + "\n      </div>";
        }
        else {
            notyWrapper.innerHTML = this.customHTML;
        }
        contentWrapper.insertAdjacentElement('afterbegin', notyWrapper);
        this.notificationWrapper = notyWrapper;
        this.appearAnimationArr = this.getAnimationClasses(this.appearAnimation);
        this.hideAnimationArr = this.getAnimationClasses(this.hideAnimation);
    };
    NotificationClass.prototype.getAnimationClasses = function (str) {
        if (str.length > 0) {
            return str.split(' ');
        }
        return [];
    };
    NotificationClass.prototype.setAnimationClasses = function (block, classes) {
        if (classes.length > 0) {
            classes.forEach(function (value) {
                block.classList.add(value);
            });
        }
    };
    NotificationClass.prototype.removeAnimationClasses = function (block, classes) {
        if (classes.length > 0) {
            classes.forEach(function (value) {
                block.classList.remove(value);
            });
        }
    };
    NotificationClass.prototype.showNotification = function () {
        this.removeAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
        this.setAnimationClasses(this.notificationWrapper, this.appearAnimationArr);
        this.notificationWrapper.classList.add(this.showClass);
        contentWrapper.style.overflow = 'hidden';
        this.notificationState = true;
        if (this.allowContentShow) {
            this.hideNotificationOnClick();
        }
    };
    NotificationClass.prototype.hideNotification = function () {
        var _this = this;
        this.removeAnimationClasses(this.notificationWrapper, this.appearAnimationArr);
        this.setAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
        this.notificationState = false;
        setTimeout(function () {
            _this.notificationWrapper.classList.remove(_this.showClass);
            contentWrapper.style.overflow = '';
            _this.removeAnimationClasses(_this.notificationWrapper, _this.hideAnimationArr);
        }, this.hideAnimationDuration);
    };
    NotificationClass.prototype.hideNotificationOnClick = function () {
        var _this = this;
        window.addEventListener('click', function () {
            _this.hideNotification();
        });
        window.addEventListener('touchstart', function () {
            _this.hideNotification();
        }, false);
    };
    NotificationClass.prototype.initialization = function () {
        var _this = this;
        if (this.type === this.deviceType()) {
            if (!this.notificationWrapper) {
                this.buildNotificationHtml();
                this.startNotification();
                this.initialized = true;
            }
            if (this.type === 'touchDevice') {
                window.addEventListener('orientationchange', function () {
                    _this.startNotification();
                });
            }
            else {
                window.addEventListener('resize', function () {
                    _this.startNotification();
                });
            }
        }
    };
    NotificationClass.prototype.init = function () {
        var _this = this;
        this.initialization();
        window.addEventListener('resize', function () {
            if (_this.deviceType() === _this.type && !_this.initialized) {
                _this.initialization();
            }
            else if (_this.deviceType() !== _this.type && _this.initialized) {
                _this.destroy();
            }
        });
    };
    NotificationClass.prototype.destroy = function () {
        console.log(this);
        if (this.initialized) {
            this.notificationState = false;
            this.notificationWrapper.classList.remove(this.showClass);
            contentWrapper.style.overflow = '';
            this.removeAnimationClasses(this.notificationWrapper, this.hideAnimationArr);
            this.removeAnimationClasses(this.notificationWrapper, this.appearAnimationArr);
            this.initialized = false;
            contentWrapper.removeChild(this.notificationWrapper);
            this.notificationWrapper = null;
        }
    };
    return NotificationClass;
}());
exports.NotificationClass = NotificationClass;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var notificationGeneral_1 = __webpack_require__(3);
var notificationSVG = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 206 160\" style=\"enable-background:new 0 0 206 160;\" xml:space=\"preserve\">\n<g>\n<g>\n <path d=\"M181.64,160H24.36C10.93,160,0,149.07,0,135.64V24.36C0,10.93,10.93,0,24.36,0h157.28C195.07,0,206,10.93,206,24.36\n   v111.28C206,149.07,195.07,160,181.64,160z M24.36,6C14.24,6,6,14.24,6,24.36v111.28C6,145.76,14.24,154,24.36,154h157.28\n   c10.12,0,18.36-8.24,18.36-18.36V24.36C200,14.24,191.76,6,181.64,6H24.36z\"/>\n</g>\n<g>\n <rect x=\"3\" y=\"33.77\" width=\"200\" height=\"6\"/>\n</g>\n<g>\n <circle cx=\"28.5\" cy=\"21.5\" r=\"4.5\"/>\n</g>\n<g>\n <circle cx=\"41.5\" cy=\"21.5\" r=\"4.5\"/>\n</g>\n<g>\n <circle cx=\"54.5\" cy=\"21.5\" r=\"4.5\"/>\n</g>\n<g>\n <path d=\"M59.7,125.19c-0.99,0-1.96-0.49-2.53-1.38c-0.89-1.39-0.49-3.25,0.91-4.14L151,60.09c1.4-0.89,3.25-0.49,4.14,0.91\n   c0.89,1.39,0.49,3.25-0.91,4.14l-92.92,59.58C60.82,125.04,60.26,125.19,59.7,125.19z\"/>\n</g>\n<g>\n <path d=\"M76.78,129.81c-0.22,0-0.45-0.02-0.67-0.08l-17.92-4.09c-0.78-0.18-1.45-0.65-1.87-1.33c-0.42-0.67-0.56-1.49-0.38-2.26\n   l4.4-19.3c0.37-1.62,1.98-2.63,3.59-2.26c1.62,0.37,2.63,1.98,2.26,3.59l-3.74,16.38l15,3.42c1.62,0.37,2.63,1.98,2.26,3.59\n   C79.38,128.87,78.15,129.81,76.78,129.81z\"/>\n</g>\n<g>\n <path d=\"M148.75,84.58c-0.22,0-0.45-0.02-0.67-0.08c-1.62-0.37-2.63-1.98-2.26-3.59l3.74-16.38l-15-3.42\n   c-1.62-0.37-2.63-1.98-2.26-3.59c0.37-1.62,1.98-2.63,3.59-2.26l17.92,4.09c0.78,0.18,1.45,0.65,1.87,1.33\n   c0.42,0.67,0.56,1.49,0.38,2.26l-4.4,19.3C151.35,83.64,150.11,84.58,148.75,84.58z\"/>\n</g>\n</g>\n</svg>";
var desktopNotificationConfig = {
    allowContentShow: true,
    mainMessage: 'Please expand your browser window',
    extraMessage: 'or click to continue',
    desktopHeightBreak: 350,
    desktopWidthBreak: 400,
    showClass: 'show',
    notificationClassPrefix: 'desktop',
    iconPath: notificationSVG,
    appearAnimation: '',
    hideAnimation: '',
    hideAnimationDuration: 0,
    type: 'desktop',
    customHTML: false,
};
var createDesktopNotification = function (userOpts) {
    var opts = __assign(__assign({}, desktopNotificationConfig), userOpts);
    return new DesktopNotification(opts);
};
var DesktopNotification = /** @class */ (function (_super) {
    __extends(DesktopNotification, _super);
    function DesktopNotification(opts) {
        var _this = _super.call(this, opts) || this;
        _this.desktopWidthBreak = opts.desktopWidthBreak;
        _this.desktopHeightBreak = opts.desktopHeightBreak;
        return _this;
    }
    DesktopNotification.prototype.startNotification = function () {
        if (this.getWindowHeight() < this.desktopHeightBreak || this.getWindowWidth() < this.desktopWidthBreak) {
            this.showNotification();
        }
        else {
            this.hideNotification();
        }
    };
    return DesktopNotification;
}(notificationGeneral_1.NotificationClass));
var b = createDesktopNotification({
    hideAnimation: 'animated fadeOut',
    desktopHeightBreak: 500,
    desktopWidthBreak: 900,
});
b.init();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(6);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ })
/******/ ]);