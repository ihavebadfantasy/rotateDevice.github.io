!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.rotateDevice=i():t.rotateDevice=i()}(this,(function(){return function(t){function i(i){for(var e,s,a=i[0],c=i[1],h=i[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);for(p&&p(i);f.length;)f.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,i=0;i<r.length;i++){for(var n=r[i],e=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(e=!1)}e&&(r.splice(i--,1),t=s(s.s=n[0]))}return t}var e={},o={0:0},r=[];function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,i,n){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)s.d(n,e,function(i){return t[i]}.bind(null,e));return n},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="./";var a=this.webpackJsonprotateDevice=this.webpackJsonprotateDevice||[],c=a.push.bind(a);a.push=i,a=a.slice();for(var h=0;h<a.length;h++)i(a[h]);var p=c;return r.push([3,1]),n()}([function(t,i,n){"use strict";var e,o=this&&this.__extends||(e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})(t,i)},function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var i,n=1,e=arguments.length;n<e;n++)for(var o in i=arguments[n])Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);return t}).apply(this,arguments)};Object.defineProperty(i,"__esModule",{value:!0});var s=n(2),a={allowContentShow:!0,mainMessage:"Please expand your browser window",extraMessage:"or click to continue",desktopHeightBreak:350,desktopWidthBreak:400,showClass:"show",notificationClassPrefix:"desktop",iconPath:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 206 160" style="enable-background:new 0 0 206 160;" xml:space="preserve">\n<g>\n<g>\n <path d="M181.64,160H24.36C10.93,160,0,149.07,0,135.64V24.36C0,10.93,10.93,0,24.36,0h157.28C195.07,0,206,10.93,206,24.36\n   v111.28C206,149.07,195.07,160,181.64,160z M24.36,6C14.24,6,6,14.24,6,24.36v111.28C6,145.76,14.24,154,24.36,154h157.28\n   c10.12,0,18.36-8.24,18.36-18.36V24.36C200,14.24,191.76,6,181.64,6H24.36z"/>\n</g>\n<g>\n <rect x="3" y="33.77" width="200" height="6"/>\n</g>\n<g>\n <circle cx="28.5" cy="21.5" r="4.5"/>\n</g>\n<g>\n <circle cx="41.5" cy="21.5" r="4.5"/>\n</g>\n<g>\n <circle cx="54.5" cy="21.5" r="4.5"/>\n</g>\n<g>\n <path d="M59.7,125.19c-0.99,0-1.96-0.49-2.53-1.38c-0.89-1.39-0.49-3.25,0.91-4.14L151,60.09c1.4-0.89,3.25-0.49,4.14,0.91\n   c0.89,1.39,0.49,3.25-0.91,4.14l-92.92,59.58C60.82,125.04,60.26,125.19,59.7,125.19z"/>\n</g>\n<g>\n <path d="M76.78,129.81c-0.22,0-0.45-0.02-0.67-0.08l-17.92-4.09c-0.78-0.18-1.45-0.65-1.87-1.33c-0.42-0.67-0.56-1.49-0.38-2.26\n   l4.4-19.3c0.37-1.62,1.98-2.63,3.59-2.26c1.62,0.37,2.63,1.98,2.26,3.59l-3.74,16.38l15,3.42c1.62,0.37,2.63,1.98,2.26,3.59\n   C79.38,128.87,78.15,129.81,76.78,129.81z"/>\n</g>\n<g>\n <path d="M148.75,84.58c-0.22,0-0.45-0.02-0.67-0.08c-1.62-0.37-2.63-1.98-2.26-3.59l3.74-16.38l-15-3.42\n   c-1.62-0.37-2.63-1.98-2.26-3.59c0.37-1.62,1.98-2.63,3.59-2.26l17.92,4.09c0.78,0.18,1.45,0.65,1.87,1.33\n   c0.42,0.67,0.56,1.49,0.38,2.26l-4.4,19.3C151.35,83.64,150.11,84.58,148.75,84.58z"/>\n</g>\n</g>\n</svg>',appearAnimation:"",hideAnimation:"",hideAnimationDuration:0,type:"desktop",customHTML:!1},c=function(t){function i(i){var n=t.call(this,i)||this;return n.desktopWidthBreak=i.desktopWidthBreak,n.desktopHeightBreak=i.desktopHeightBreak,n}return o(i,t),i.prototype.startNotification=function(){this.getWindowHeight()<this.desktopHeightBreak||this.getWindowWidth()<this.desktopWidthBreak?this.showNotification():this.hideNotification()},i}(s.NotificationClass);i.default=function(t){var i=r(r({},a),t);return new c(i)}},function(t,i,n){"use strict";var e,o=this&&this.__extends||(e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})(t,i)},function(t,i){function n(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var i,n=1,e=arguments.length;n<e;n++)for(var o in i=arguments[n])Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);return t}).apply(this,arguments)};Object.defineProperty(i,"__esModule",{value:!0});var s=n(2),a={blockedOrientation:"landscape",allowContentShow:!0,mainMessage:"Please turn your device",extraMessage:"or tap the screen to continue",responsivePortraitBreak:767,responsiveLandscapeBreak:850,showClass:"show",notificationClassPrefix:"touch-device",iconPath:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\nviewBox="0 0 184.02 312.02" style="enable-background:new 0 0 184.02 312.02;" xml:space="preserve">\n<style type="text/css">\n.st0{fill:#FFFFFF;}\n</style>\n<g>\n<path d="M163.52,312H20.48C9.17,312,0,302.83,0,291.52V20.54C0,9.23,9.17,0.06,20.48,0.06h143.04c11.31,0,20.48,9.17,20.48,20.48\n v270.98C184,302.83,174.83,312,163.52,312z"/>\n<path class="st0" d="M156.34,304.09H27.66c-10.91,0-19.75-8.84-19.75-19.75V25.56c0-10.91,8.84-19.75,19.75-19.75h128.69\n c10.91,0,19.75,8.84,19.75,19.75v258.78C176.09,295.25,167.25,304.09,156.34,304.09z"/>\n<circle cx="92" cy="282.53" r="12.22"/>\n<path d="M113.46,14.44H70.54c-7.5,0-14.3-4.4-17.37-11.23l-1.41-3.14h80.5l-1.41,3.14C127.76,10.04,120.96,14.44,113.46,14.44z"/>\n</g>\n</svg>',appearAnimation:"",hideAnimation:"",hideAnimationDuration:0,type:"touchDevice",customHTML:!1},c=function(t){function i(i){var n=t.call(this,i)||this;return n.blockedOrientation=i.blockedOrientation,n.responsiveLandscapeBreak=i.responsiveLandscapeBreak,n.responsivePortraitBreak=i.responsivePortraitBreak,n}return o(i,t),i.prototype.isPortrait=function(){return window.matchMedia("(orientation: portrait)").matches},i.prototype.isDeviceInBlockedPortrait=function(){return window.innerWidth<this.responsivePortraitBreak},i.prototype.isDeviceInBlockedLandscape=function(){return window.innerWidth<this.responsiveLandscapeBreak},i.prototype.startNotification=function(){switch(this.blockedOrientation){case"portrait":!this.notificationState&&this.isPortrait()?this.isDeviceInBlockedPortrait()&&this.showNotification():this.notificationState&&!this.isPortrait()&&this.hideNotification();break;case"landscape":this.isPortrait()||this.notificationState?this.isPortrait()&&this.notificationState&&this.hideNotification():this.isDeviceInBlockedLandscape()&&this.showNotification()}},i}(s.NotificationClass);i.default=function(t){var i=r(r({},a),t);return new c(i)}},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=document.body,o=function(){function t(t){this.type=t.type,this.mainMessage=t.mainMessage,this.extraMessage=t.extraMessage,this.allowContentShow=t.allowContentShow,this.showClass="show",this.notificationClassPrefix=t.notificationClassPrefix,this.iconPath=t.iconPath,this.appearAnimation=t.appearAnimation,this.hideAnimation=t.hideAnimation,this.hideAnimationDuration=0===t.hideAnimationDuration&&""!==t.hideAnimation?400:t.hideAnimationDuration,this.notificationState=!1,this.customHTML=t.customHTML,this.initialized=!1,this.startNotification=this.startNotification.bind(this)}return t.prototype.deviceType=function(){return/Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent)?"touchDevice":"desktop"},t.prototype.getWindowWidth=function(){return window.innerWidth},t.prototype.getWindowHeight=function(){return window.innerHeight},t.prototype.buildNotificationHtml=function(){var t=document.createElement("div");if(t.classList.add(this.notificationClassPrefix+"-notification-wrapper"),"boolean"==typeof this.customHTML){"<"!==this.iconPath[0]&&(this.iconPath='<img src="'+this.iconPath+'" alt="icon">');var i=void 0;i=this.extraMessage?'<p class="'+this.notificationClassPrefix+'-notification-extra-message">'+this.extraMessage+"</p>":"",t.innerHTML='<div class="'+this.notificationClassPrefix+'-notification-block">\n      <p class="'+this.notificationClassPrefix+'-notification-main-message">'+this.mainMessage+'</p> <div class="'+this.notificationClassPrefix+"-notification-img-wrapper "+this.notificationClassPrefix+'-default-icon">'+this.iconPath+"</div> "+i+"\n      </div>"}else t.innerHTML=this.customHTML;e.insertAdjacentElement("afterbegin",t),this.notificationWrapper=t,this.appearAnimationArr=this.getAnimationClasses(this.appearAnimation),this.hideAnimationArr=this.getAnimationClasses(this.hideAnimation)},t.prototype.getAnimationClasses=function(t){return t.length>0?t.split(" "):[]},t.prototype.setAnimationClasses=function(t,i){i.length>0&&i.forEach((function(i){t.classList.add(i)}))},t.prototype.removeAnimationClasses=function(t,i){i.length>0&&i.forEach((function(i){t.classList.remove(i)}))},t.prototype.showNotification=function(){this.removeAnimationClasses(this.notificationWrapper,this.hideAnimationArr),this.setAnimationClasses(this.notificationWrapper,this.appearAnimationArr),this.notificationWrapper.classList.add(this.showClass),e.style.overflow="hidden",this.notificationState=!0,this.allowContentShow&&this.hideNotificationOnClick()},t.prototype.hideNotification=function(){var t=this;this.removeAnimationClasses(this.notificationWrapper,this.appearAnimationArr),this.setAnimationClasses(this.notificationWrapper,this.hideAnimationArr),this.notificationState=!1,setTimeout((function(){t.notificationWrapper.classList.remove(t.showClass),e.style.overflow="",t.removeAnimationClasses(t.notificationWrapper,t.hideAnimationArr)}),this.hideAnimationDuration)},t.prototype.hideNotificationOnClick=function(){var t=this;window.addEventListener("click",(function(){t.hideNotification()})),window.addEventListener("touchstart",(function(){t.hideNotification()}),!1)},t.prototype.initialization=function(){this.type===this.deviceType()&&(this.notificationWrapper||(this.buildNotificationHtml(),this.startNotification(),this.initialized=!0),"touchDevice"===this.type?window.addEventListener("orientationchange",this.startNotification):window.addEventListener("resize",this.startNotification))},t.prototype.init=function(){var t=this;this.initialization(),window.addEventListener("resize",(function(){t.deviceType()!==t.type||t.initialized?t.deviceType()!==t.type&&t.initialized&&t.destroy():t.initialization()}))},t.prototype.destroy=function(){this.initialized&&("touchDevice"===this.type?window.removeEventListener("orientationchange",this.startNotification):window.removeEventListener("resize",this.startNotification),this.notificationState=!1,e.style.overflow="",this.initialized=!1,e.removeChild(this.notificationWrapper),this.notificationWrapper=null)},t}();i.NotificationClass=o},function(t,i,n){"use strict";n.r(i);n(4);var e=n(0),o=n.n(e),r=n(1),s=n.n(r);o()().init(),s()().init(),i.default={createDesktopNotification:o(),createTouchDeviceNotification:s()}},function(t,i,n){var e=n(5);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(e,o);e.locals&&(t.exports=e.locals)},function(t,i,n){}]).default}));