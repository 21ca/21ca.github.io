(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VRCHATSDK"] = factory();
	else
		root["VRCHATSDK"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 252:
/***/ ((module) => {

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    if (pair[0] == variable) {
      return pair[1];
    }
  }

  return false;
}

var config = {
  getQueryVariable: getQueryVariable
};
module.exports = config;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

;// CONCATENATED MODULE: ./src/native-interface/params.js
var VRCHAT_AVATAR = {
  VRCHAT_AVATAR_B: 'data:image/png;base64,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',
  VRCHAT_AVATAR_C: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACWUExURUdwTO7u8fLy8vLy8vPz8/////f39/////v7+/Ly8vLy8vT09PPz8/Pz89fa3/Ly8vLy8tfZ3tfZ3/Ly8vPz8/Ly8vPz8/Pz8/Ly8vf399ba3tfd39jc39ba39ja4Nba3tbZ3tba3tbZ3vLy8tXY3dTY3O/w8PHx8efo6e3t7tnc4NfZ3d3f4urr7ODi5OPk5tPW2vTz842Vy30AAAAidFJOUwA1+WOuAQwDB+zkSdWF09957qhPcvDCm9Ig5yBMdWOF38LNDaR4AAACaklEQVR42p2XaW/CMAyGDbS05b7ZOHbESeh9/P8/NxgSmZ3Qoj18Q3pkJ3mxBbgIepv9bh71+9F8t9/0AniJcO1tkbD11mG3tojQQbRoV4PBCJ8wGrR0PJ5gC5MxuPGn2MHUd3lDDzvxhrb3/oYWl+uH8vZueRFzkiKuqiLhZsTMIa2nkzIVmZRZlhea1STd+h6tVqVKiitSKZXHVPV8MEyJV+R37a7WWUXNqfHGzJMP7141picdP/JC3l2XN4+YWUHMSQB3BsSLUykoqs4TUnJw90KSzySXgqNUTHN7T/yCfGkKGmRdImHxWzAiVxMLWxR1rmkMbiXXyK5G2PDrwTUAeEiPqByiZIdEDyDY8kd0iTUTtwH0kPCiiD3Y4H8q4gb2+J8z4h52+NqtMnEHcyRcKpdYpwkT5xAhJRYusbQmAfSRUqSurFbI6FuiLh0Fs8IWeasXO+VS5RqtVudolZTcUwVy5rDDrpKyLjVydiYApCSbHGixJ5Fz5lXVlUaLDQu53aw0A4eGPNiiha6MWKfmN0x+VuChTfI4ppKxw0OPjQ47eO5Gcc2HlS2ap+DDChauVh+icB1x4RjIeNFJnGd/XrFKNHNHIVsBTaN1UeVpJuXfwMk0jxONjVkBdOk0OinKm2SH/Fr35jYNXTow/tWKUihiUbmWV5euOYDpLS2CSG631A1OySqvhBJu+MIjqxyGs3bPJHc2BMLxIF7icATGcfaKNzOe6XbVqaWrITjwP7vETx/cnGatbZ7gKcHH4emtfATQRnheurTlOYQO/PC0WjJrdQrBhxcIeufV99dSqeXX9+rs/vvwA+edUInCQgewAAAAAElFTkSuQmCC'
};
var syncStatus = {
  allHasInitialled: false,
  hasInitRoomInfo: false,
  hasSyncFirstStatus: false,
  // 完成同步第一帧的发起/响应
  hasReceiveFirstSyncReq: false,
  // 主c收到同步第一帧的请求
  hasUploadHouseUrl: false
};
function setConnectingSceneFrame(frame) {
  if (vrChatStatus.isChatPage && !vrChatStatus.isSeeHouseChatting) {
    vrChatStatus.connectingSceneFrame = frame;
  }
}
function resetNewHouseCoverData() {
  vrChatStatus.newHouseCoverReload = false;
  vrChatStatus.newHouseDataReady = false;
  vrChatStatus.newHouseData = null;
}
function resetVrChatStatus() {
  vrChatStatus.isChatPage = false;
  vrChatStatus.isChattingConnecting = false;
  vrChatStatus.isChatting = false;
  vrChatStatus.isSeeHouseChatting = false;
  vrChatStatus.isMute = false;
  vrChatStatus.audioConnected = false;
  vrChatStatus.isCustomer = false;
  vrChatStatus.isEstateAgent = false;
  vrChatStatus.isAudience = false;
  vrChatStatus.isInitiator = false;
  vrChatStatus.isVrAudioConnected = false;
  vrChatStatus.hasShowConfrimPage = false;
  vrChatStatus.connectingSceneFrame = null;
  vrChatStatus.isAllowOperateScene = true;
  vrChatStatus.targetClientID = null;
  vrChatStatus.isFilterSyncAnother = false;
  vrChatStatus.hasReceiveCalleeAccept = false;
}
function setGlobalState(state) {
  vrChatStatus.globalState = state;
}

function initServerOperation() {
  return {
    lastHouseOperation: null,
    // 上一次房源操作
    lastHouseOperationId: 0,
    lastAgentHouseOperationId: 0,
    // todo lss is used for what
    lastSceneOperation: null,
    // 上一次场景操作
    lastSceneOperationId: 0,
    lastAgentSceneOperationId: 0,
    lastOperation: null,
    // 上一次场景内操作
    lastOperationId: 0,
    lastAgentOperationId: 0
  };
}

var params_serverOperation = initServerOperation();
function resetChatSyncParams() {
  vrChatStatus.newestTimestamp = 0;
  params_serverOperation = initServerOperation();
}
var clientOperation = {
  lastHouseOperationId: 0,
  lastSceneOperationId: 0,
  // 不做加运算
  lastOperationId: 0 // 不做加运算

};
;// CONCATENATED MODULE: ./src/native-interface/manyToMany/params.js
var operationStatus = {
  // 场景
  seq: 0,
  lastSenderClientId: '',
  // 自定义数据
  customSeq: 0,
  customLastSenderClientId: '',
  clientId: '' // self client id

};
function params_resetChatSyncParams() {
  operationStatus.seq = 0;
  operationStatus.lastSenderClientId = '';
  operationStatus.customSeq = 0;
  operationStatus.customLastSenderClientId = '';
  operationStatus.clientId = '';
}
;// CONCATENATED MODULE: ./src/native-interface/oneToOne/bindPageVisibleHandler.js
function bindPageVisibleHandler(hideCallback, visibleCallback) {
  if (typeof document.onvisibilitychange !== 'undefined') {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        hideCallback && hideCallback();
      } else if (document.visibilityState === 'visible') {
        visibleCallback && visibleCallback();
      }
    });
  } else {
    patchVisibilityChangeEvent(hideCallback, visibleCallback);
  }
}

function patchVisibilityChangeEvent(hideCallback, visibleCallback) {
  var pageIsVisible = false;
  var animationFrameId = requestAnimationFrame(function () {
    animationFrameId = null;
    pageIsVisible = true;
  });
  setTimeout(function () {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (pageIsVisible) {
      if (!pageVisibleState.isVisible) {
        visibleCallback && visibleCallback();
      }
    } else {
      if (pageVisibleState.isVisible) {
        hideCallback && hideCallback();
      }
    }

    patchVisibilityChangeEvent(hideCallback, visibleCallback);
  }, 1000);
}

var pageVisibleState = {
  isVisible: true,
  oppositeIsVisible: true,
  needSyncFromOpposite: true // when visible

};
;// CONCATENATED MODULE: ./src/native-interface/manyToMany/bindPageVisibleHandler.js
function bindPageVisibleHandler_bindPageVisibleHandler(hideCallback, visibleCallback) {
  if (typeof document.onvisibilitychange !== 'undefined') {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        hideCallback && hideCallback();
      } else if (document.visibilityState === 'visible') {
        visibleCallback && visibleCallback();
      }
    });
  } else {
    bindPageVisibleHandler_patchVisibilityChangeEvent(hideCallback, visibleCallback);
  }
}

function bindPageVisibleHandler_patchVisibilityChangeEvent(hideCallback, visibleCallback) {
  var pageIsVisible = false;
  var animationFrameId = requestAnimationFrame(function () {
    animationFrameId = null;
    pageIsVisible = true;
  });
  setTimeout(function () {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    if (pageIsVisible) {
      if (!bindPageVisibleHandler_pageVisibleState.isVisible) {
        visibleCallback && visibleCallback();
      }
    } else {
      if (bindPageVisibleHandler_pageVisibleState.isVisible) {
        hideCallback && hideCallback();
      }
    }

    bindPageVisibleHandler_patchVisibilityChangeEvent(hideCallback, visibleCallback);
  }, 1000);
}

var bindPageVisibleHandler_pageVisibleState = {
  isVisible: true
};
;// CONCATENATED MODULE: ./src/native-interface/version.js




var version_pageVisibleState;
var version_resetChatSyncParams = null;
function setIsChatOneToOne(isOneToOne) {
  isChatOneToOne = isOneToOne;
  version_pageVisibleState = isOneToOne ? pageVisibleState : bindPageVisibleHandler_pageVisibleState;
  version_resetChatSyncParams = isOneToOne ? resetChatSyncParams : params_resetChatSyncParams;
}
var isChatOneToOne = true;
setIsChatOneToOne(isChatOneToOne);
;// CONCATENATED MODULE: ./src/utils/utils.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var checkIsMobile = function checkIsMobile() {
  var ua = window.navigator.userAgent.toLowerCase();
  var isIpad = /ipad/i.test(ua);
  var isIphoneOs = /iphone os/i.test(ua);
  var isMidp = /midp/i.test(ua);
  var isUc7 = /rv:1.2.3.4/i.test(ua);
  var isUc = /ucweb/i.test(ua);
  var isAndroid = /android/i.test(ua);
  var isCE = /windows ce/i.test(ua);
  var isWM = /windows mobile/i.test(ua);
  return isIpad || isIphoneOs || isMidp || isUc7 || isUc || isAndroid || isCE || isWM;
};
var checkIsApple = function checkIsApple() {
  var ua = window.navigator.userAgent.toLowerCase();
  var isIpad = /ipad/i.test(ua);
  var isIphoneOs = /iphone os/i.test(ua);
  var isMacintosh = /macintosh/i.test(ua);
  return isIpad || isIphoneOs || isMacintosh || false;
};
var checkIsIosSafari = function checkIsIosSafari(version) {
  var ua = window.navigator.userAgent.toLowerCase();
  if (!ua.indexOf('iphone os')) return false;
  var edition = ua.substr(ua.indexOf('iphone os') + 10, 2);

  if (version === 12) {
    return parseInt(edition, 10) === version;
  } else {
    return parseInt(edition, 10) >= version;
  }
}; // mini pragram env
// export const checkIsMniprogram = function () {
//   const ua = navigator.userAgent.toLowerCase();
//   if(ua.match(/MicroMessenger/i)=="micromessenger") {
//       wx.miniProgram.getEnv((res)=>{
//          if (res.miniprogram) {
//              return true
//          } else {
//              return false
//          }
//       })
//   }else{
//       return false
//   }
// }

function ready() {
  return window.__wxjs_environment === 'miniprogram';
}

var checkIsMniprogram = function checkIsMniprogram() {
  var ua = navigator.userAgent.toLocaleLowerCase(); // wx env

  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
      document.addEventListener('WeixinJSBridgeReady', ready, false);
    } else {
      return window.__wxjs_environment === 'miniprogram';
    }
  } else {
    return false;
  }
};
var checkIsVivo = function checkIsVivo() {
  var ua = window.navigator.userAgent.toLowerCase();
  var vivo = /vivo/i.test(ua);
  return checkIsMobile() && vivo || false;
};
var checkIsHuaweiMeta20 = function checkIsHuaweiMeta20() {
  var ua = window.navigator.userAgent.toLowerCase();
  var huawei = /huaweilya-al00/i.test(ua) || /iphone os 10/i.test(ua);
  return checkIsMobile() && huawei || false;
};
var checkIsSmallMobile = function checkIsSmallMobile() {
  var width = window.innerWidth || window.document.documentElement.clientWidth || window.document.body.clientWidth;
  return checkIsMobile() && width === 320 || false;
};
var checkIsIePc = function checkIsIePc() {
  var isIE = !!window.ActiveXObject || 'ActiveXObject' in window || !+[1];
  return isIE;
};
var getRightTipsItem = function getRightTipsItem(itemString, limitLen, ellipsis) {
  try {
    // TODO
    // const len = itemString.replace(/[^\x00-\xff]/g, '01').length
    var len = itemString.replace(/[^\\x00-\xff]/g, '01').length;

    if (len > limitLen) {
      var count = 0;

      for (var i = 0; i < itemString.length; i++) {
        if (itemString.charCodeAt(i) > 127 || itemString.charCodeAt(i) === 94) {
          count += 2;
        } else {
          count++;
        }

        if (count > limitLen) {
          return itemString.substring(0, i) + (ellipsis || '');
        }
      }

      if (count <= limitLen) {
        return itemString.substring(0, count) + (ellipsis || '');
      }
    } else {
      return itemString;
    }
  } catch (e) {
    // statements
    return ''; // console.log(e);
  }
};
var getBrowserKernel = function getBrowserKernel() {
  var vendor = false;
  var elementStyle = document.createElement('div').style;
  var transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  };

  for (var key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      vendor = key;
    }
  }

  return vendor;
};
var setCssPrefix = function setCssPrefix(style, browserKernel) {
  if (browserKernel == 'standard' || !browserKernel) {
    return style;
  } else {
    return browserKernel + style.charAt(0).toUpperCase() + style.substr(1);
  }
};
var collectRedPacket = function collectRedPacket(logParams) {
  var _this = this;

  logParams.forEach(function (param) {
    // 统一加上环境和sdk版本
    param.environment = "production";
    param.sdkVersion = "5.5.6";
    param.isCompareMode = window.VRHOUSE_CONFIG.IS_COMPARE_MODE === true;
    param.isCompare = _this && _this.isCompare;
  });
  var data = {
    // 统一加上环境和sdk版本
    environment: "production",
    sdkVersion: "5.5.6",
    isCompareMode: window.VRHOUSE_CONFIG.IS_COMPARE_MODE === true,
    isCompare: this && this.isCompare,
    redbag: logParams
  };
  console.log(data);
  var dataStr = JSON.stringify(data);
  imgSend('//collectlog.58.com/log?category=vrhouse_redbag&type=log&data=' + encodeURIComponent(dataStr) + '&t=' + +new Date());
};
var collectAnchor = function collectAnchor(logParams) {
  var _this2 = this;

  logParams.forEach(function (param) {
    // 统一加上环境和sdk版本
    param.environment = "production";
    param.sdkVersion = "5.5.6";
    param.isCompareMode = window.VRHOUSE_CONFIG.IS_COMPARE_MODE === true;
    param.isCompare = _this2 && _this2.isCompare;
  });
  var data = {
    // 统一加上环境和sdk版本
    environment: "production",
    sdkVersion: "5.5.6",
    isCompareMode: window.VRHOUSE_CONFIG.IS_COMPARE_MODE === true,
    isCompare: this && this.isCompare,
    roomanchor: logParams
  }; // console.log(data)

  var dataStr = JSON.stringify(data);
  imgSend('//collectlog.58.com/log?category=vr_house_viewer&type=log&data=' + encodeURIComponent(dataStr) + '&t=' + +new Date());
};
var collectLog = function collectLog(logParams) {
  var category = logParams.category ? logParams.category : 'vrhouse'; // 统一加上环境和sdk版本

  logParams.environment = "production";
  logParams.sdkVersion = "5.5.6";
  logParams.isCompareMode = window.VRHOUSE_CONFIG.IS_COMPARE_MODE === true;
  logParams.isCompare = this && this.isCompare;
  logParams.isIntegrate = window.environment && ['integrate', 'dev'].indexOf(window.environment) != -1 ? true : false;
  var dataStr = JSON.stringify(logParams);
  imgSend('//collectlog.58.com/log?category=' + category + '&type=log&data=' + encodeURIComponent(dataStr) + '&t=' + +new Date());
};

function imgSend(src) {
  var e = null;
  return e = document.createElement('img'), e.width = 1, e.height = 1, e.onload = e.onerror = e.onabort = function () {
    return function () {
      return e.onload = null, e.onerror = null, e.onabort = null;
    };
  }(this), e.src = src;
}

var checkAiVoiceSdk = function checkAiVoiceSdk() {
  var version = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1.7';
  // 4.25对应讲房1.6及以上；4.25以前版本对应1.3及以上
  var vrVersion = version.split('.');

  if (1 * vrVersion[0] > 1 || 1 * vrVersion[0] === 1 && 1 * vrVersion[1] >= 6) {
    return true;
  } else {
    return false;
  }
};
function getNativeConfig() {
  var data;

  if (window.WVRChatNativeFunction && window.WVRChatNativeFunction.getWVRChatConfig) {
    // android
    data = window.WVRChatNativeFunction.getWVRChatConfig();
  } else if (window.getWVRChatConfig) {
    // iOS
    data = window.getWVRChatConfig();
  } else {
    data = {};
  }

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  return data;
}
function getQueryString(url) {
  var theRequest = new Object();

  if (url.indexOf("?") != -1) {
    var str = url.substr(url.indexOf("?") + 1);
    var strs = str.split("&");

    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }

  return theRequest;
}
function toQueryString(json) {
  return Object.keys(json).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
  }).join("&");
}
function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return mergeDeep.apply(void 0, [target].concat(sources));
}
function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
}
;// CONCATENATED MODULE: ./src/const/params.js
function params_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var defaultStaticConfig = {
  IS_HIDE_VR_CHAT_BACK_DIALOG: false,
  IS_HIDE_INFO_BTN: true,
  TEMPLATE_DEFAULT: {
    agentAvatarDefault: 'data:image/png;base64,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',
    // VRCHAT_AVATAR_DEFAULT_B
    agentNameDefault: '对方',
    // VRCHAT_ROLE_B 
    customerAvatarDefault: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACWUExURUdwTO7u8fLy8vLy8vPz8/////f39/////v7+/Ly8vLy8vT09PPz8/Pz89fa3/Ly8vLy8tfZ3tfZ3/Ly8vPz8/Ly8vPz8/Pz8/Ly8vf399ba3tfd39jc39ba39ja4Nba3tbZ3tba3tbZ3vLy8tXY3dTY3O/w8PHx8efo6e3t7tnc4NfZ3d3f4urr7ODi5OPk5tPW2vTz842Vy30AAAAidFJOUwA1+WOuAQwDB+zkSdWF09957qhPcvDCm9Ig5yBMdWOF38LNDaR4AAACaklEQVR42p2XaW/CMAyGDbS05b7ZOHbESeh9/P8/NxgSmZ3Qoj18Q3pkJ3mxBbgIepv9bh71+9F8t9/0AniJcO1tkbD11mG3tojQQbRoV4PBCJ8wGrR0PJ5gC5MxuPGn2MHUd3lDDzvxhrb3/oYWl+uH8vZueRFzkiKuqiLhZsTMIa2nkzIVmZRZlhea1STd+h6tVqVKiitSKZXHVPV8MEyJV+R37a7WWUXNqfHGzJMP7141picdP/JC3l2XN4+YWUHMSQB3BsSLUykoqs4TUnJw90KSzySXgqNUTHN7T/yCfGkKGmRdImHxWzAiVxMLWxR1rmkMbiXXyK5G2PDrwTUAeEiPqByiZIdEDyDY8kd0iTUTtwH0kPCiiD3Y4H8q4gb2+J8z4h52+NqtMnEHcyRcKpdYpwkT5xAhJRYusbQmAfSRUqSurFbI6FuiLh0Fs8IWeasXO+VS5RqtVudolZTcUwVy5rDDrpKyLjVydiYApCSbHGixJ5Fz5lXVlUaLDQu53aw0A4eGPNiiha6MWKfmN0x+VuChTfI4ppKxw0OPjQ47eO5Gcc2HlS2ap+DDChauVh+icB1x4RjIeNFJnGd/XrFKNHNHIVsBTaN1UeVpJuXfwMk0jxONjVkBdOk0OinKm2SH/Fr35jYNXTow/tWKUihiUbmWV5euOYDpLS2CSG631A1OySqvhBJu+MIjqxyGs3bPJHc2BMLxIF7icATGcfaKNzOe6XbVqaWrITjwP7vETx/cnGatbZ7gKcHH4emtfATQRnheurTlOYQO/PC0WjJrdQrBhxcIeufV99dSqeXX9+rs/vvwA+edUInCQgewAAAAAElFTkSuQmCC',
    // VRCHAT_AVATAR_DEFAULT_C
    customerNameDefault: '对方',
    // VRCHAT_ROLE_C  
    connectedChatToastText: '对方已进入带看' // CONNECTED_CHAT_TOAST_TEXT 

  },
  WAIT_CONFRIM_CONFIG: {
    title: '对方即将进入，请稍候...',
    subtitle: '感谢您的耐心等待'
  },
  WAIT_CONNECTING_CONFIG: {
    title: '对方即将进入，请稍候...',
    subtitle: '感谢您的耐心等待',
    radarJson: null,
    isHideRader: false
  },
  ACCOMPANY_VOICE: {
    callStatusTime: 3000,
    aiVoiceReback: 'call',
    dealBusy: 0,
    dealReCallBeforeAiVoiceFinish: 2,
    dealReCallAfterAiVoiceFinish: 0
  },
  VR_SEE_HOUSE_DIALOG: {
    qrcode_img: '',
    qrcode_title: '微信扫码·专人带看',
    qrcode_describe: '经纪人同屏讲解，随时随地想看就看'
  }
};
var AppParams = {
  isMobile: checkIsMobile(),
  // isApple: checkIsApple(),
  isMobile320: checkIsSmallMobile(),
  isPcIE: checkIsIePc(),
  isMobileVivo: checkIsVivo(),
  isHuaweiMeta20: checkIsHuaweiMeta20(),
  checkIsMniprogram: checkIsMniprogram(),
  // pagesPath: pagesPath,
  // housePathPrefix: housePathPrefix,
  // isSingleMode: isSingleMode,
  // isEditorMode: isEditorMode,
  // largeViewBgColor: window.VRHOUSE_CONFIG.IS_WHITE_STYLE === true ? 0xFFFFFF : 0x333333,
  // panoramaViewBgColor: 0x000000,
  // textFillColor: window.VRHOUSE_CONFIG.IS_WHITE_STYLE === true ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)',
  miniGuideWidth: 114,
  miniGuideHeight: 109,
  backgroundOpacity: 0.3,
  guideMarginM: 10,
  guideMarginPC: 15,
  guideRadiusTop: 22,
  anisotropy: 1,
  isAutoRotate: true,
  surveyUrl: 'https://survey.58.com/?id=1010854&hash=8ndc',
  initialHouseData: null,
  changedDecorationStyle: false,
  changeDecorationStyleReady: true,
  compareScale: checkIsMobile() ? 1.8 : 1,
  maxPloarAngle: 40,
  minPloarAngle: -60,
  defaultScale: 0.5,
  NativeConfig: getNativeConfig() // switchAutoTimeout: 6 * 1000,
  // unitPerMetre: 50, // 50个单位为1m
  // pixelRatio: isMobile ? window.devicePixelRatio : 1.5,
  // displayRoomName: displayRoomName || true,
  // isDisplayPanoramaFirst: true, // if false, display 3d house first
  // enableBlurLoading: true,
  // isFullScreenInNewTab: isFullScreenInNewTab,
  // alwaysDisplayThumbnail: false,
  // enableNavigation: true,
  // enableVRMode: true, // 是否开启vr模式
  // maxAnisotropy: 1, // set in App
  // anisotropy: 1, // set in App
  // showSiteLink: false,  // 是否显示链接到官网的按钮
  // showLogo2: true,  // 是否显示logo2
  // autoPlayIntervalTime: 6 * 1000,
  // stereoHouseAutoPlayIntervalTime: 10 * 1000,
  // hotSpotAnimationType: 2,  // 1: 圆形动画, 2: 箭头动画
  // isStartAutoPlay: !isEditorMode,
  // hideMenu: false      // true:初始时隐藏菜单，让用户通过切换菜单按钮手动开启菜单

};
var AiVoiceParams = {
  floorHeight: 0.53,
  floorTop: 0.2,
  floorMargin: 25,
  isShowFloorName: true,
  // 户型图是否显示楼层名称
  autoPlayTime: 2 * 1000,
  domMargin: 5,
  // 在dom中画边
  panoAutoSpeed: 3.5
};
var VrParams = {
  pauseTime: 1000
};
var StaticData = {
  styleColor: 'rgb(255, 170, 0)',
  styleIcon: 'normal' // compareColor:'#23C993',

};
var hostname = window.location.hostname;
var VRCHAT_ENV = {
  IOS_VRCHAT_ENV: window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.WVRChatSendMessageToNative,
  ANDROID_VRCHAT_ENV: window.WVRChatNativeFunction,
  LOCAL_VRCHAT_ENV: hostname.indexOf('localhost') >= 0 || hostname.indexOf('10.252') >= 0 || hostname.indexOf('192.168') >= 0
};
VRCHAT_ENV["MIMIPROGRAM_VRCHAT_ENV"] = !VRCHAT_ENV.IOS_VRCHAT_ENV && !VRCHAT_ENV.ANDROID_VRCHAT_ENV && window.location.href.indexOf('miniprogram') >= 0; // export const RESOURCE_PATH_PARAMS = {
//   'vr-house-v2': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v2',
//   'vr-house-v3': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v3',
//   'vr-house-v4': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v4',
//   'vr-house-chat-test': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-chat-test',
//   'vr-house-v4-test': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v4-test',
//   'vr-house-v4-chat-test': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v4-chat-test',
//   'vr-house-v4_4-chat-test': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v4_4-chat-test',
//   'vr-house-v4_5-chat-test': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-v4_5-chat-test',
//   'vr-house-test': '//j1.58cdn.com.cn/git/teg-app-fe/vr-house-test',
// }

var VR_SEE_HOUSE_DIALOG_STATIC = {
  qrcode_title: '微信扫码·专人带看',
  qrcode_describe: '经纪人同屏讲解，随时随地想看就看'
};
var CommonParams = {
  scrollWidth: 58,
  STATUS_ISONLINE: window.VRHOUSE_CONFIG.STATUS_ISONLINE,
  RESOURCE_PATH: window.VRHOUSE_CONFIG.RESOURCE_PATH || ''
};
var isAllowAudioDisable = AppParams.NativeConfig && AppParams.NativeConfig.allow_audio_disable && +AppParams.NativeConfig.allow_audio_disable === 1;
var params_vrChatStatus = params_defineProperty({
  domHasReady: false,
  isChatSceneOperating: false,
  // 是否正在操作场景
  newestTimestamp: 0,
  // 4.5舍弃
  isChatSyncDisabled: false,
  // 对方是否正在操作场景
  isAllowOperateScene: true,
  // 是否被允许操作scene，被叫收到allow-scene-change后为true，操作过scene后为false
  isFilterSyncAnother: false,
  // 是否过滤掉sync-anoyher-status
  isSeeHouseChatting: false,
  // WVRChatVrAudioConnected 后， 被叫为WVRChatRequestRoomInfo时
  isMute: false,
  // 静音状态关闭
  isVrAudioConnected: false,
  // 带看音频是否连通
  isInitiator: false,
  isChatPage: false,
  // 是否在带看的页面，包括雷达页 过渡页 带看中页面等
  isCustomer: false,
  isEstateAgent: false,
  isAudience: false,
  hasShowConfrimPage: false,
  connectingSceneFrame: null,
  // 4.5新增，带看等待接听状态场景操作，todo lss
  role: '',
  // 'customer', 'estate_agent', 或者其他，比如置业顾问，字段值不确定
  selfType: '',
  isSeeGuideTip: true,
  seeHouseCountdownTimer: null,
  isShowSeeHouseDialog: false,
  // 0: 拨号
  // 1: 对方忙
  // 2: 退出
  // 3: 结束带看
  // 4: 被叫
  // 5: 操作被拒绝的提示
  seeHouseDialogType: 0,
  isShowSeeHouseCountdown: false,
  seeHouseCountdown: 30,
  // 带看清单文案
  houseListTxt: window.VRHOUSE_CONFIG.HOUSE_LIST_TXT && window.VRHOUSE_CONFIG.HOUSE_LIST_TXT.length > 0 ? window.VRHOUSE_CONFIG.HOUSE_LIST_TXT : '带看清单',
  company: '',
  agentName: '',
  agentAvatar: window.VRHOUSE_CONFIG.VRCHAT_AVATAR_DEFAULT_B && window.VRHOUSE_CONFIG.VRCHAT_AVATAR_DEFAULT_B.length > 0 ? window.VRHOUSE_CONFIG.VRCHAT_AVATAR_DEFAULT_B : VRCHAT_AVATAR.VRCHAT_AVATAR_B,
  roleA: window.VRHOUSE_CONFIG.VRCHAT_ROLE_B && window.VRHOUSE_CONFIG.VRCHAT_ROLE_B.length > 0 ? window.VRHOUSE_CONFIG.VRCHAT_ROLE_B : '对方',
  roleB: window.VRHOUSE_CONFIG.VRCHAT_ROLE_C && window.VRHOUSE_CONFIG.VRCHAT_ROLE_C.length > 0 ? window.VRHOUSE_CONFIG.VRCHAT_ROLE_C : '对方',
  customerName: '',
  customerAvatar: window.VRHOUSE_CONFIG.VRCHAT_AVATAR_DEFAULT_C && window.VRHOUSE_CONFIG.VRCHAT_AVATAR_DEFAULT_C.length > 0 ? window.VRHOUSE_CONFIG.VRCHAT_AVATAR_DEFAULT_C : VRCHAT_AVATAR.VRCHAT_AVATAR_C,
  // 多人带看
  aClientID: '',
  bClientID: '',
  cClientID: '',
  // 当前端clientid
  currentClientID: '',
  // local dev params
  isChatting: false,
  isChattingConnecting: false,
  webSocketReady: false,
  targetClientID: null,
  userList: [],
  webSocket: null,
  roomId: null,
  clientId: null,
  ws3Socket: null,
  ws3Ready: false,
  ws9Socket: null,
  ws9Ready: false,
  vrchatAddress: 'wss://vrchatie-ws.58.com/ws3?communicationId=',
  ws9Address: 'ws://vrchat-ws.58v5.cn/ws9?',
  wsIntegratedAddress: 'wss://vrchatie-ws.58.com',
  wsOnlineAddress: 'wss://vrchat-ws.58.com',
  communicationId: '',
  hasHandshake: false,
  globalState: null,
  syncSceneStatusTimeoutId: null,
  // 4.5舍弃
  // default with all authority
  // 场景操作的时候就可以直接加一个权限的限定，而不用再加一个isSeeHouseChatting的限定了
  authority: 127,
  // 权限 按位与&
  // 0 无任何权限
  // 1 操作全景
  // 2 说话
  // 4 邀请
  // 8 禁言
  // 16 禁止操作
  // 32 踢人
  // 64 操作带看清单
  canOperateScene: true,
  inviteAvatar: null,
  inviteName: '',
  inviteRole: '',
  audioConnected: false,
  // 是否收到audioConnected的消息
  canSendToServer: false,
  newHouseUrl: window.location.href,
  // 新房源的url
  newHouseDataUrl: '',
  // 新房源加载数据的url
  newHouseCoverReload: false,
  // cover出来之后切换房源
  newHouseDataReady: false,
  newHouseData: null,
  newHouseOptions: {},
  isAllowAudioDisable: isAllowAudioDisable,
  // 是否是无麦带看
  hasReceiveCalleeAccept: false,
  // 3.5之前的版本没有这个协议，陪看要做接通效果的兼容
  // 业务获取权限的对象
  msgWVRChatRequestRoomInfo: null,
  msgWVRChatSwitchToVRChat: null,
  msgWVRChatVrExit: null,
  msgWVRChatVrAudioConnected: null,
  msgWVRChatUpdateRoomInfo: null,
  msgWVRChatAudienceIn: null,
  msgWVRChatAudienceOut: null,
  msgWVRChatUpdateAudience: null,
  msgWVRChatAudienceInvite: null,
  msgWVRChatUpdateTalkingStatus: null,
  msgWVRChatCalleeAccept: null,
  msgWVRChatSyncMicrophone: null,
  msgAiVoiceListenedModules: null,
  accompanyStatus: {
    VRCHAT_START: 1,
    //进入带看
    AI_START: 2,
    //讲房开始
    AI_TRANSIT_FINISH: 3,
    //讲房过渡结束
    AI_PAUSE: 4,
    // 讲房暂停
    AI_REPLAY: 5,
    // 讲房恢复
    AI_FINISH: 6,
    // 讲房结束
    AI_EXIT: 7,
    //讲房中途退出
    VRCHAT_CONNECTED: 8,
    // 带看联通
    VRCHAT_EXIT: 9 //带看超时 拒接 退出

  }
}, "globalState", {});
window.vrChatStatus = params_vrChatStatus;
;// CONCATENATED MODULE: ./src/native-interface/utils/queue.js
function Queue(callback) {
  this.queue = [];
  this.callback = callback;
  this.promise = null;
}

Queue.prototype.enqueue = function (data) {
  var _this = this;

  if (Array.isArray(data)) {
    // only spread one level
    this.queue = this.queue.concat(data);
  } else {
    this.queue.push(data);
  }

  if (!this.promise) {
    this.promise = Promise.resolve().then(function () {
      _this.callback(_this.queue);

      _this.queue.length = 0;
      _this.promise = null;
    })["catch"](function (error) {
      throw new Error(error);
    });
  }
};

/* harmony default export */ const queue = (Queue);
;// CONCATENATED MODULE: ./src/house-viewer-interface/helpers/reloadNewHouse.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { reloadNewHouse_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function reloadNewHouse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var oldHouseUrl = window.location.href;
var reloadNewHouse = function reloadNewHouse(options) {
  var url = options.url,
      houseUrl = options.houseUrl,
      type = options.type,
      md5 = options.md5,
      isMarkDataType = options.isMarkDataType,
      taskId = options.taskId,
      prefix = options.prefix,
      appKey = options.appKey;
  vrChatStatus.newHouseOptions = options;
  vrChatStatus.newHouseUrl = options.houseUrl || '';
  console.log("reloadNewHouse123", oldHouseUrl, houseUrl, options);
  if (oldHouseUrl === houseUrl) return;
  oldHouseUrl = houseUrl;
  resetIsNeedAccompanyVoice({
    type: type,
    taskId: taskId
  });
  window.vrChatStatus.listener.dispatch('toDoReset', 'system', _objectSpread(_objectSpread({}, options), {}, {
    dataFrom: {
      house: url,
      prefix: prefix || '',
      type: type,
      markMd5: md5,
      isMarkDataType: isMarkDataType
    },
    infor: {// address: "望京一号·酒仙桥",
      // area: "132.2m²",
      // layout: "三室一厨一卫",
      // name: "恒隆2栋309",
      // price: "1320万",
      // thumbnail: "/static/data/t-MtCcdz4/CoverImage/Cover.jpg"
    },
    currentHouseOptions: {
      url: url,
      houseUrl: houseUrl,
      type: type,
      md5: md5,
      prefix: prefix,
      taskId: taskId,
      appKey: appKey
    }
  }), null);
};

function resetIsNeedAccompanyVoice(data) {
  // 重置是否开启陪看
  if (data.type !== '2D' && data.taskId) {
    // 特定taskId开启陪看
    window.vrChatStatus.defaultConfig.IS_NEED_ACCOMPANY_VOICE = true;
  } else if (window.vrChatStatus.defaultConfig.IS_NEED_ACCOMPANY_VOICE) {
    window.vrChatStatus.defaultConfig.IS_NEED_ACCOMPANY_VOICE = false;
  }
}
;// CONCATENATED MODULE: ./src/native-interface/manyToMany/cacheMessages.js


var lastCacheScene = null;
function clearCacheScene() {
  console.log("clearCacheScene!!!", lastCacheScene);
  if (isChatOneToOne) return;

  if (lastCacheScene) {
    var dealt = syncChatSceneStatus(lastCacheScene);

    if (dealt) {
      lastCacheScene = null;
    }
  }
}
function setLastCacheScene(frame) {
  console.log("setLastCacheScene~~~~");
  lastCacheScene = frame;
}
;// CONCATENATED MODULE: ./src/house-viewer-interface/helpers/setSceneStatus.js
function setSceneStatus(data) {
  // console.log("setSceneStatus", data)
  listener.dispatch('toDoSet', 'statusPipe', data, {
    isSync: true
  });
}
;// CONCATENATED MODULE: ./src/native-interface/helpers/syncChatSceneStatus.js
function syncChatSceneStatus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function syncChatSceneStatus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? syncChatSceneStatus_ownKeys(Object(source), !0).forEach(function (key) { syncChatSceneStatus_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : syncChatSceneStatus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function syncChatSceneStatus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { vrChatStatus } from '../params'
// import { setCurrentHotSpotIDStatic } from '../dataProcessor/setCurrentHotSpotID'
// import SyncVrChatPanoCamera from '../animation/syncVrChatPanoCamera'
// import getHotSpotDetail from '../dataProcessor/getHotSpotDetail'




function syncChatSceneStatus(data) {
  var newHouseUrl = data.newHouseUrl;
  vrChatStatus.globalState.type = data.pano2DCamera ? '2d' : '3d';

  if (newHouseUrl) {
    // 房源已切换
    var newHouseUrlHost = newHouseUrl.indexOf("?") != -1 ? newHouseUrl.substr(0, newHouseUrl.indexOf("?")) : newHouseUrl;
    var vrChatStatusNewHouseUrlHost = vrChatStatus.newHouseUrl.indexOf("?") != -1 ? vrChatStatus.newHouseUrl.substr(0, vrChatStatus.newHouseUrl.indexOf("?")) : vrChatStatus.newHouseUrl; // console.log("!!!syncChatSceneStatus!!!",newHouseUrlHost, vrChatStatusNewHouseUrlHost, vrChatStatus.globalState.type, data,vrChatStatus)
    // console.log(newHouseUrl ,"========", vrChatStatus.newHouseUrl,"newHouseUrl !== vrChatStatus.newHouseUrl=======》》》》》")

    if (newHouseUrl !== vrChatStatus.newHouseUrl) {
      if (data.newHouseDataUrl) {
        console.log("reloadNewHouse===========》》》》》》》》》");
        reloadNewHouse(syncChatSceneStatus_objectSpread(syncChatSceneStatus_objectSpread({}, data), {}, {
          url: data.newHouseDataUrl,
          houseUrl: data.newHouseUrl,
          prefix: data.newHousePrefix,
          type: data.type,
          taskId: data.taskId
        }));
        setLastCacheScene(data);
        return false;
      }
    }
  } // console.log("vrChatStatus.isToHousePlaying==================》》》》》》》》",vrChatStatus.isToHousePlaying)


  if (!vrChatStatus.isToHousePlaying) {
    setSceneStatus(data);
  } else {
    vrChatStatus.cacheSceneStatus = data;
  } // if (vrChatStatus.globalState.type === '2d') {
  //   return syncChatScene2DStatus(...arguments)
  // } else {
  //   return syncChatScene3DStatus(...arguments)
  // }

}

function syncChatScene2DStatus(data) {
  var modulePano = vrChatStatus.globalState.modulePano;
  var changeHotSpot = data.currentHotSpotID && vrChatStatus.globalState.currentHotSpotDetail.ID !== data.currentHotSpotID;

  if (changeHotSpot) {
    vrChatStatus.globalState.setCurrentHotSpotID({
      id: data.currentHotSpotID,
      from: 'thumbnail'
    }, true, function () {// SyncVrChatPanoCamera.setStatus(modulePano, {
      //   rotation: data.pano2DCamera.rotation,
      //   fov: data.pano2DCamera.fov
      // })
    });
  } else {// modulePano.syncVrChatPanoCameraAni.play({
    //   rotation: data.pano2DCamera.rotation,
    //   fov: data.pano2DCamera.fov,
    //   isStopOnCurrentStatus: true
    // })
  }

  return true;
}

function syncChatSceneStatus_syncChatScene3DStatus(data, first) {
  var changeHotSpot = data.currentHotSpotID && vrChatStatus.globalState.currentHotSpotDetail.ID !== data.currentHotSpotID;

  if (changeHotSpot) {// const nextHotSpotDetail = getHotSpotDetail(data.currentHotSpotID, vrChatStatus.globalState.houseData)
    // // 对方房源切换的时候请求同步信息，请求回来的是新房源的数据
    // if (!nextHotSpotDetail) return
    // setCurrentHotSpotIDStatic(data.currentHotSpotID, () => {
    //   data.changeHotSpot = true
    //   if (!isChatOneToOne) {
    //     vrChatStatus.globalState.moduleGuideBtns.updateRoomName()
    //   }
    // 	syncChatScene3DStatusAfterHotspot(data, first)
    // })
  } else {// syncChatScene3DStatusAfterHotspot(data, first)
  }

  return true;
}
;// CONCATENATED MODULE: ./src/native-interface/oneToOne/cacheMessages.js
 // import { vrChatStatus } from '../params'

function dealCacheReloadNewMessage() {
  // this is VR_VIEWER
  if (cacheCommonMessages.reloadNewMessage) {
    window.vrChatStatus.listener.dispatch('toDoReset', 'system', {
      dataFrom: {
        house: cacheCommonMessages.reloadNewMessage.url,
        prefix: cacheCommonMessages.reloadNewMessage.prefix,
        type: cacheCommonMessages.reloadNewMessage.type
      },
      infor: {// address: "望京一号·酒仙桥",
        // area: "132.2m²",
        // layout: "三室一厨一卫",
        // name: "恒隆2栋309",
        // price: "1320万",
        // thumbnail: "/static/data/t-MtCcdz4/CoverImage/Cover.jpg"
      },
      currentHouseOptions: cacheCommonMessages.reloadNewMessage
    }, null); // reloadResource(cacheCommonMessages.reloadNewMessage, this, true)

    cacheCommonMessages.reloadNewMessage = null;
    return true;
  }

  return false;
}
var cacheAnimationMessages = {
  messages: null
};
function dealCacheAnimationMessages() {
  // this is VR_VIEWER
  var msg = cacheAnimationMessages.messages;

  if (msg) {
    console.log('!!!!dealCacheAnimationMessages');
    vrChatStatus.globalState.type === '3d' && syncChatScene3DStatus(msg.data, msg.first);
    cacheAnimationMessages.messages = null;
  }
}
var cacheCommonMessages = {
  reloadNewMessages: null
};
;// CONCATENATED MODULE: ./src/house-viewer-interface/helpers/getSceneStatus.js
function getSceneStatus() {
  // return window.VRHOUSE_API.getSceneStatus()
  var sceneData = null;
  listener.dispatch('toDoGet', 'statusPipe', function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      origin: {}
    };
    sceneData = data.origin;
  });
  return sceneData;
}
;// CONCATENATED MODULE: ./src/native-interface/oneToOne/chat.js







var messageQueue = new queue(sendCameraMessage); // cache message

function sendCameraMessage(payload) {
  dealLastOperation(payload);
  var operation = vrChatStatus.isCustomer ? params_serverOperation : clientOperation;

  if (vrChatStatus.isSeeHouseChatting && vrChatStatus.isCustomer) {
    startUserSceneStatusSync();
  }

  sendSceneInfo({
    timestamp: getElapsedTime(),
    targetClientID: vrChatStatus.targetClientID,
    payload: payload,
    lastOperationId: operation.lastOperationId,
    lastSceneOperationId: operation.lastSceneOperationId
  }, false);
}

function getElapsedTime() {
  return window.performance.now();
}

function dealLastOperation(payload) {
  // 用户端作为消息同步的服务器
  var dealFn = vrChatStatus.isCustomer ? dealUserSingleLastOperation : dealAgentSingleLastOperation;

  if (Array.isArray(payload)) {
    payload.forEach(function (item) {
      dealFn(item);
    });
  } else {
    dealFn(payload);
  }
}

function dealUserSingleLastOperation(message, fromAgent, lastOperationId, lastSceneOperationId) {
  switch (message.type) {
    // case 'pano2d-camera-change':
    // case 'pano-camera-change':
    // case 'stereo-camera-change':
    case 'change-guide-floor':
      params_serverOperation.lastOperation = message;
      params_serverOperation.lastOperationId++;

      if (fromAgent) {
        params_serverOperation.lastAgentOperationId = lastOperationId;
      } else {
        params_serverOperation.lastAgentOperationId = Infinity;
      }

      break;

    case 'change-current-fullscreen':
    case 'set-guide-tab':
    case 'stereo-camera-zoom-in':
      params_serverOperation.lastSceneOperation = message;
      params_serverOperation.lastSceneOperationId++;
      params_serverOperation.lastOperation = null;

      if (fromAgent) {
        params_serverOperation.lastAgentSceneOperationId = lastSceneOperationId;
      } else {
        params_serverOperation.lastAgentSceneOperationId = Infinity;
      }

      break;

    case 'change-hotspot':
      console.log("dealUserSingleLastOperation change-hotspot", message.data);
      if (!(message.data && message.data.from)) return;

      if (message.data.from === 'panorama3D' || message.data.from === 'InnerRam3D') {
        params_serverOperation.lastOperation = message;
        params_serverOperation.lastOperationId++;

        if (fromAgent) {
          params_serverOperation.lastAgentOperationId = lastOperationId;
        } else {
          params_serverOperation.lastAgentOperationId = Infinity;
        }
      } else {
        params_serverOperation.lastSceneOperation = message;
        params_serverOperation.lastSceneOperationId++;
        params_serverOperation.lastOperation = null;

        if (fromAgent) {
          params_serverOperation.lastAgentSceneOperationId = lastSceneOperationId;
        } else {
          params_serverOperation.lastAgentSceneOperationId = Infinity;
        }
      }

      break;

    default:
      return;
  }
}

function dealAgentSingleLastOperation(payload) {
  console.log('!!!!_>>>>>>>>_______________', payload);

  if (payload.type === 'change-current-fullscreen' || payload.type === 'set-guide-tab' || payload.type === 'change-hotspot' && payload.data && payload.data.from !== 'panorama3D' && payload.data.from !== 'InnerRam3D') {
    vrChatStatus.isAllowOperateScene = false;
  }

  if (payload.type !== 'request-sync-status') {
    vrChatStatus.isFilterSyncAnother = true;
  }
}

function chat_messageEnqueue(data) {
  messageQueue.enqueue(data);
}

function syncUserStatusToAgent() {
  // 同步用户消息给经纪人
  var vrChatStatusNewHouseUrlHost = vrChatStatus.newHouseUrl.indexOf("?") != -1 ? vrChatStatus.newHouseUrl.substr(0, vrChatStatus.newHouseUrl.indexOf("?")) : vrChatStatus.newHouseUrl;
  chat_messageEnqueue({
    type: 'sync-user-status',
    data: Object.assign({}, getSceneStatus(), {
      newHouseUrl: vrChatStatus.newHouseUrl,
      newHouseDataUrl: vrChatStatus.newHouseDataUrl,
      newHousePrefix: vrChatStatus.newHousePrefix,
      taskId: vrChatStatus.taskId
    })
  });
}

function startUserSceneStatusSync() {
  if (vrChatStatus.syncSceneStatusTimeoutId) clearTimeout(vrChatStatus.syncSceneStatusTimeoutId);
  vrChatStatus.syncSceneStatusTimeoutId = setTimeout(function () {
    // 双方没有操作并且用户不是正在动画中并且已经初始化完成，同步用户信息给经纪人
    // 因为有丢帧的情况，把!this.isChatSyncDisabled的限制删掉
    if (!vrChatStatus.isChatSceneOperating && pageVisibleState.isVisible && pageVisibleState.oppositeIsVisible) {
      syncUserStatusToAgent();
    }

    vrChatStatus.syncSceneStatusTimeoutId = null;
    startUserSceneStatusSync(); // start next timeout
  }, 5000);
}
function clearUserSceneStatusSync() {
  clearTimeout(vrChatStatus.syncSceneStatusTimeoutId);
  vrChatStatus.syncSceneStatusTimeoutId = null;
}

function onPageVisibleCallback() {
  pageVisibleState.isVisible = true;
  if (!isChatOneToOne) return;
  dealCacheReloadNewMessage.call(vrChatStatus.globalState);
  if (!vrChatStatus.isSeeHouseChatting) return;
  chat_messageEnqueue({
    type: 'opposite-visible-state',
    data: {
      visible: true
    }
  });

  if (pageVisibleState.needSyncFromOpposite) {
    chat_messageEnqueue({
      type: 'request-sync-status-when-visible'
    });
  }
}

function onTouchCancel() {
  if (vrChatStatus.isSeeHouseChatting && vrChatStatus.isChatSceneOperating && isChatOneToOne) {
    vrChatStatus.isChatSceneOperating = false;
    chat_messageEnqueue({
      type: vrChatStatus.globalState.type !== '2d' ? vrChatStatus.globalState.isGuideFullScreen ? 'stereo-camera-end' : 'pano-camera-end' : 'pano2d-camera-end'
    });
  }
} // fix bug: http://iwork3.58corp.com/bug/detail/vr--1521


function setPageVisibleHandler() {
  bindPageVisibleHandler(function () {
    pageVisibleState.isVisible = false;
    if (!vrChatStatus.isSeeHouseChatting || !isChatOneToOne) return;
    onTouchCancel();
    chat_messageEnqueue({
      type: 'opposite-visible-state',
      data: {
        visible: false
      }
    });

    if (pageVisibleState.oppositeIsVisible) {
      pageVisibleState.needSyncFromOpposite = true;
    } else {
      pageVisibleState.needSyncFromOpposite = false;
    }
  }, onPageVisibleCallback);
}

setPageVisibleHandler();
document.addEventListener('touchcancel', onTouchCancel, false);
;// CONCATENATED MODULE: ./src/native-interface/manyToMany/chat.js
/**
 * 3. 同步场景的时候，如果正在初次设置漫游点
 * 5. pano2d-camera-change没有了，为了兼容低版本，不能删除
 * 8. 冲突测试
 * 10. 户型图热点黄色区域的朝向不对
 * 12. dev环境冲突设置/clientId
 * 14. 缓存当前房源信息
 */




 // import { vrChatStatus } from '../params'



function sendToServer(options) {
  if (!vrChatStatus.canSendToServer) return;
  var isCustomMsg = options.isCustomMsg;
  var seq;
  var lastSenderClientId;

  if (isCustomMsg) {
    lastSenderClientId = operationStatus.customLastSenderClientId;

    if (lastSenderClientId !== operationStatus.clientId) {
      operationStatus.customLastSenderClientId = operationStatus.clientId;
    }
  } else {
    lastSenderClientId = operationStatus.lastSenderClientId;

    if (lastSenderClientId !== operationStatus.clientId) {
      operationStatus.lastSenderClientId = operationStatus.clientId;
    }
  }

  var msg = {
    communicationEvent: {
      command: 'mutex',
      clientEvent: {
        isCustomMsg: isCustomMsg,
        applyReleaseLock: options.applyReleaseLock || false,
        seq: isCustomMsg ? ++operationStatus.customSeq : ++operationStatus.seq,
        lastSenderClientId: lastSenderClientId,
        operationType: isCustomMsg ? '' : options.operation.type
      }
    },
    targetClientID: vrChatStatus.targetClientID
  };

  if (isCustomMsg) {
    msg.data = {
      data: options.data
    };

    if (!!options.receiveClientId) {
      msg.communicationEvent.command = 'directsend';
      msg.communicationEvent.clientEvent['receiveClientId'] = options.receiveClientId;
    }
  } else {
    var vrChatStatusNewHouseUrlHost = vrChatStatus.newHouseUrl.indexOf("?") != -1 ? vrChatStatus.newHouseUrl.substr(0, vrChatStatus.newHouseUrl.indexOf("?")) : vrChatStatus.newHouseUrl;
    msg.sceneInfo = {
      operation: {
        payload: options.operation
      },
      frame: Object.assign({}, options.frame || getSceneStatus(), {
        newHouseUrl: vrChatStatus.newHouseUrl,
        newHouseDataUrl: vrChatStatus.newHouseDataUrl,
        newHousePrefix: vrChatStatus.newHousePrefix
      })
    };
  }

  sendSceneInfo(msg, isCustomMsg || false);
}
function setAudienceParams(_ref) {
  var _ref$avatar = _ref.avatar,
      avatar = _ref$avatar === void 0 ? '' : _ref$avatar,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? '' : _ref$role;
  vrChatStatus.inviteAvatar = avatar;
  vrChatStatus.inviteName = name;
  vrChatStatus.inviteRole = role;
}
function isStartOrEndType(type) {
  var index = -1;
  var types = ['pano2d-camera-start', 'pano2d-camera-end', 'pano-camera-start', 'pano-camera-end', 'stereo-camera-start', 'stereo-camera-end'];

  for (var i = 0; i < types.length; i++) {
    if (types[i] === type) {
      index = i;
      break;
    }
  }

  return index !== -1;
}

function chat_onPageVisibleCallback() {
  bindPageVisibleHandler_pageVisibleState.isVisible = true;
  if (isChatOneToOne) return;
  var dealt = dealCacheReloadNewMessage.call(vrChatStatus.globalState); // 有房源变更的消息，返回，在房源加载成功之后清理最新帧

  if (!vrChatStatus.isSeeHouseChatting || dealt) return;
  clearCacheScene();
}

function chat_onTouchCancel() {
  if (vrChatStatus.isSeeHouseChatting && vrChatStatus.isChatSceneOperating && !isChatOneToOne) {
    vrChatStatus.isChatSceneOperating = false;
    sendToServer({
      operation: {
        type: vrChatStatus.globalState.type !== '2d' ? vrChatStatus.globalState.isGuideFullScreen ? 'stereo-camera-end' : 'pano-camera-end' : 'pano2d-camera-end'
      },
      applyReleaseLock: true
    });
  }
} // fix bug: http://iwork3.58corp.com/bug/detail/vr--1521


function chat_setPageVisibleHandler() {
  bindPageVisibleHandler_bindPageVisibleHandler(function () {
    bindPageVisibleHandler_pageVisibleState.isVisible = false;
    if (!vrChatStatus.isSeeHouseChatting && isChatOneToOne) return;
    chat_onTouchCancel();
  }, chat_onPageVisibleCallback);
}

chat_setPageVisibleHandler();
document.addEventListener('touchcancel', chat_onTouchCancel, false);
;// CONCATENATED MODULE: ./src/utils/connect.js
var createKey = function createKey() {
  var pool = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", '0'];
  var key = '';

  for (var i = 0; i < 5; i++) {
    var randomIndex = Math.floor(Math.random() * pool.length);
    key += pool[randomIndex];
  }

  ;
  return key + Date.now();
};
;// CONCATENATED MODULE: ./src/native-interface/helpers/send.js






function miniSend(type, msg) {
  console.log("wx transmitter ", type, msg);

  switch (type) {
    case "WVRChatWrtcSceneInfo":
      vrChatStatus.ws9Socket && vrChatStatus.ws9Socket.send(msg);
      break;

    default:
      vrChatStatus.ws3Socket && vrChatStatus.ws3Socket.send(msg);
  }
}

function vrChatCall() {
  if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
    var callVrChatData = {
      request: "call",
      key: createKey()
    };
    miniSend('call', JSON.stringify(callVrChatData)); // vrChatStatus.ws3Socket.send(JSON.stringify(callVrChatData))
  } else {
    window.vrChatConnectorApi && window.vrChatConnectorApi.call();
  }
}
function vrChatExit() {
  if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
    var exitVrChatData = {
      request: "bye",
      key: createKey()
    };
    miniSend('bye', JSON.stringify(exitVrChatData)); // vrChatStatus.ws3Socket.send(JSON.stringify(exitVrChatData))
  } else {
    window.vrChatConnectorApi && window.vrChatConnectorApi.exit();
  }
}
function vrChatMute() {
  if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
    var muteData = {
      request: "mute",
      data: vrChatStatus.isMute,
      key: createKey()
    };
    miniSend('mute', JSON.stringify(muteData)); // vrChatStatus.ws3Socket.send(JSON.stringify(muteData))
  } else {
    window.vrChatConnectorApi.mute(vrChatStatus.isMute);
  }
}
var sceneInfoBeforChatting = [];

function dealSceneInfoBeforChatting(todo) {
  sceneInfoBeforChatting.forEach(function (e, i) {
    console.log('[][][][][][][]', i, JSON.stringify(e.data));
  });
  sceneInfoBeforChatting = [];
}

function sendSceneInfo(data) {
  var isCustom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  // console.log(VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV,"vrChatStatus.isSeeHouseChatting==========》》》》》")
  function toDo(data, isCustom) {
    if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
      data.type = 'WVRChatWrtcSceneInfo';
      data.isCustomMsg = !!isCustom; // todo fqy 发送数据添加flag字段，包装数据

      miniSend('WVRChatWrtcSceneInfo', JSON.stringify(data)); // vrChatStatus.ws9Socket && vrChatStatus.ws9Socket.send(JSON.stringify(data))
    } else {
      window.vrChatConnectorApi.sendSceneInfo(data, isCustom);
    }
  }

  if (vrChatStatus.isSeeHouseChatting) {
    dealSceneInfoBeforChatting(toDo);
    toDo(data, isCustom);
  } else {
    sceneInfoBeforChatting.push({
      data: data,
      isCustom: isCustom
    });
  }
}
function syncSceneInfo(operation) {
  if (isChatOneToOne) {
    chat_messageEnqueue(operation);
  } else {
    sendToServer({
      operation: operation
    });
  }
}
;// CONCATENATED MODULE: ./src/native-interface/helpers/setAuthority.js
// import { } from '../params'
function setAuthority(authority) {
  vrChatStatus.authority = authority;
  console.log("setAuthority fn", authority, !!(authority & 1));
  var canOperateScene = !!(authority & 1);

  if (vrChatStatus.canOperateScene !== canOperateScene) {
    vrChatStatus.canOperateScene = canOperateScene; // setSceneOperationAuthority(canOperateScene)

    if (!canOperateScene) {
      vrChatStatus.listener.dispatch('toDoSetUnabled', 'roomModule', true, {
        'chat-panel': true,
        'countdown-panel': true
      });
      vrChatStatus.listener.dispatch('toDoIsClick', 'fullScreenGuide', false);
    }
  }

  var canMute = !!(authority & 2);

  if (!canMute) {
    document.getElementById('mute-wrapper').style.display = "none";
  }

  var canIUseHouseList = !!(authority & 64);

  if (!canIUseHouseList) {
    listener.dispatch('toDoSetNoSlider', 'pullHead', true);
    window.VRHOUSE_API.updateVrChatHouseListVisible && window.VRHOUSE_API.updateVrChatHouseListVisible(false);
  }
}

function setSceneOperationAuthority(canOperate) {
  var VR_VIEWER = vrChatStatus.globalState;
  var modulePano = VR_VIEWER.modulePano,
      moduleStereo = VR_VIEWER.moduleStereo,
      moduleFloorPlan = VR_VIEWER.moduleFloorPlan,
      isGuideFullScreen = VR_VIEWER.isGuideFullScreen,
      moduleThumbnail = VR_VIEWER.moduleThumbnail;
  modulePano.controls.enabled = canOperate && !isGuideFullScreen;

  if (VR_VIEWER.type !== '3d') {
    moduleThumbnail.setThumbListVisible(false);
    return;
  }

  if (canOperate) {
    var guideTabIs2D = VR_VIEWER.currentGuideTab === '2D';

    if (vrChatStatus.isSeeHouseChatting) {
      // 带看中
      if (VR_VIEWER.isGuideFullScreen) {
        moduleStereo.controls.enabled = !guideTabIs2D;
        moduleFloorPlan.controls.enabled = guideTabIs2D;
      } else {
        moduleStereo.controls.enabled = false;
        moduleFloorPlan.controls.enabled = false;
      }
    } else {
      // 非带看中
      if (VR_VIEWER.isGuideFullScreen && guideTabIs2D) {
        moduleStereo.controls.enabled = false;
        moduleFloorPlan.controls.enabled = true;
      } else {
        moduleStereo.controls.enabled = true;
        moduleFloorPlan.controls.enabled = false;
      }
    }
  } else {
    moduleStereo.controls.enabled = false;
    moduleFloorPlan.controls.enabled = false;
  }
}

function resetAuthority() {
  setAuthority(127);
}
;// CONCATENATED MODULE: ./src/utils/domHandle.js
var domHandle_domHandle = {
  remove: function remove(dom) {
    if (!dom) return;

    if (dom.length >= 0) {
      while (dom.length > 0) {
        dom[0].parentNode.removeChild(dom[0]);
      }
    } else {
      dom.parentNode.removeChild(dom);
    }
  },
  addClass: function addClass(dom, s) {
    if (!dom) return;
    dom.classList ? dom.classList.add(s) : dom.className += ' ' + s;
  },
  removeOneDomClass: function removeOneDomClass(dom, s) {
    dom.classList ? dom.classList.remove(s) : dom.className = dom.className.replace(new RegExp('(^|\\b)' + s.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  },
  removeClass: function removeClass(dom, s) {
    if (!dom) return;

    if (dom.tagName === 'SELECT') {
      this.removeOneDomClass(dom, s);
    }

    if (dom.length > 0) {
      var arr = [];

      for (var i = 0; i < dom.length; i++) {
        arr.push(dom[i]);
      }

      for (i = 0; i < arr.length; i++) {
        this.removeOneDomClass(arr[i], s);
      }
    } else {
      this.removeOneDomClass(dom, s);
    }
  },
  hasClass: function hasClass(dom, e) {
    return dom === null ? false : dom.classList.contains(e);
  },
  noHasClass: function noHasClass(dom, e) {
    return dom === null ? false : !dom.classList.contains(e);
  },
  toggleClass: function toggleClass(dom, e) {
    return this.hasClass(dom, e) ? this.removeClass(dom, e) : this.addClass(dom, e);
  },
  insertAfter: function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;

    if (parent.lastChild === targetElement) {
      parent.appendChild(newElement);
    } else {
      parent.insertBefore(newElement, targetElement.nextSibling);
    }
  },
  css: function css(dom, name, val) {
    // console.log(dom, name, val)
    var styleObj, o, s, a, l, h, c;

    var R = function R(t) {
      // font-size变为fontSize
      return t.replace(/-+(.)?/g, function (t, e) {
        return e ? e.toUpperCase() : '';
      });
    };

    var _isArray = Array.isArray || function (t) {
      return t instanceof Array;
    };

    var F = function F(t) {
      return t.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    };

    var H = {
      'column-count': 1,
      columns: 1,
      'font-weight': 1,
      'line-height': 1,
      opacity: 1,
      'z-index': 1,
      zoom: 1
    };

    var V = function V(name, val) {
      return typeof val !== 'number' || H[F(name)] ? val : val + 'px';
    };

    if (dom) {
      if (arguments.length < 3) {
        styleObj = getComputedStyle(dom, '');

        if (typeof name === 'string') {
          return dom.style[R(name)] || styleObj.getPropertyValue(name);
        }

        if (_isArray(name)) {
          for (l = {}, h = 0, s = name.length; h < s; h++) {
            a = name[h];
            l[a] = dom.style[R(a)] || styleObj.getPropertyValue(a);
          }

          ;
          return l;
        }
      }

      if (typeof name === 'string') {
        var ret = dom.style[F(name)] = val || val === 0 ? V(name, val) : '';
        return ret;
      }

      ;
      c = [];

      for (o in name) {
        c.push(name[o] || name[o] === 0 ? dom.style[F(o)] = V(o, name[o]) : dom.style[F(o)] = '');
      }

      return c;
    }
  },
  next: function next(element) {
    if (!element) return;
    var e = element.nextSibling;

    if (e === null) {
      // 测试同胞节点是否存在，否则返回空
      return null;
    }

    if (e.nodeType === 3) {
      // 如果同胞元素为文本节点
      var two = domHandle_domHandle.next(e);

      if (!two) {
        return false;
      }

      if (two.nodeType === 1) {
        return two;
      }
    } else {
      if (e.nodeType === 1) {
        // 确认节点为元素节点才返回
        return e;
      } else {
        return false;
      }
    }
  },
  prev: function prev(element) {
    if (!element) return;
    var e = element.previousSibling;

    if (e === null) {
      // 测试同胞节点是否存在，否则返回空
      return null;
    }

    if (e.nodeType === 3) {
      // 如果同胞元素为文本节点
      var two = domHandle_domHandle.prev(e);

      if (!two) {
        return false;
      }

      if (two.nodeType === 1) {
        return two;
      }
    } else {
      if (e.nodeType === 1) {
        // 确认节点为元素节点才返回
        return e;
      } else {
        return false;
      }
    }
  },
  index: function index(arrDom, target) {
    if (!arrDom) return;

    if (arrDom.length > 0) {
      for (var i = 0; i < arrDom.length; i++) {
        if (arrDom[i] === target) {
          return i;
        }
      }

      return -1;
    } else if (arrDom === target) {
      return 0;
    } else {
      return -1;
    }
  },
  eq: function eq(arrDom, index) {
    if (!arrDom) return;
    index = index || 0;

    if (arrDom.length > 0) {
      return arrDom[index];
    } else {
      return arrDom;
    }
  },
  text: function text(t) {
    var context = '';
    t.textContent != null ? context = t.textContent.replace(/[\n \t]+/g, ' ').trim() : t.innerText != null && (context = t.innerText.replace(/[\n \t]+/g, ' ').trim());
    return context;
  },
  parents: function parents(dom, cn) {
    if (!dom) return null;
    var p = dom.parentNode;

    while (p) {
      if (this.hasClass(p, cn)) {
        return p;
      }

      p = p.parentNode;
    }

    return null;
  },
  parentsNodeByTagName: function parentsNodeByTagName(dom, cn) {
    if (!dom) return null;
    var p = dom.parentNode;

    while (p) {
      if (p.tagName === cn) {
        return p;
      }

      p = p.parentNode;
    }

    return null;
  },
  parentsTagName: function parentsTagName(dom, cn) {
    if (!dom) return null;
    var p = dom.parentNode;

    while (p) {
      if (p.tagName === cn) {
        return true;
      }

      p = p.parentNode;
    }

    return false;
  },
  attr: function attr(dom, k, v) {
    if (arguments < 2) return;

    if (!v) {
      return dom.getAttribute(k);
    } else {
      dom.setAttribute(k, v);
    }
  }
};
/* harmony default export */ const utils_domHandle = (domHandle_domHandle);
;// CONCATENATED MODULE: ./src/native-interface/helpers/process.js


 // import SyncVrChatPanoCamera from '../animation/syncVrChatPanoCamera'





var triggerConnectVrChat = function triggerConnectVrChat() {
  // console.log('triggerConnectVrChat__-------------', '{"data": "senderVRchat init trigger"}')
  vrChatStatus.seeHouseCountdownTimer = null;
  vrChatStatus.isShowSeeHouseDialog = true;
  vrChatStatus.seeHouseDialogType = 0;
  vrChatStatus.isShowSeeHouseCountdown = true;
  vrChatStatus.seeHouseCountdown = 30;
  vrChatStatus.isSeeHouseChatting = false;
  vrChatStatus.isChatPage = true;
};
var initVrChatMode = function initVrChatMode() {
  if (VRCHAT_ENV.LOCAL_VRCHAT_ENV) {
    vrChatStatus.isChattingConnecting = false;
    vrChatStatus.isChatting = true;
  }

  vrChatStatus.isChatPage = true;
  vrChatStatus.isShowSeeHouseDialog = false;
  vrChatStatus.isShowSeeHouseCountdown = false;
  vrChatStatus.isSeeHouseChatting = true;
  clearTimeout(vrChatStatus.seeHouseCountdownTimer); // disable autoplay
  // vrChatStatus.globalState.updateGlobalAutoplay(false)

  syncStatus.hasInitRoomInfo = true; // let modulePano = vrChatStatus.globalState.modulePano
  // // 自传的时候，全景状态下，全景和3D户型自己转自己的，需要在接通的瞬间，重置3D户型的位置
  // if (modulePano && !vrChatStatus.globalState.isGuideFullScreen) {
  //   SyncVrChatPanoCamera.setStatus(modulePano, {
  //     rotation: modulePano.camera.rotation,
  //     fov: modulePano.camera.fov
  //   })
  // }
};
var exitVrChatStatus = function exitVrChatStatus() {
  resetVrChatStatus(); // reset to chatOneToOne

  setIsChatOneToOne(true);
  resetAuthority();
  version_resetChatSyncParams(); // vrChatStatus.accompany?.clearTimer()
}; // 单页切换

var exitVrChatMode = function exitVrChatMode() {
  exitVrChatStatus();
  var _vrChatStatus$globalS = vrChatStatus.globalState,
      moduleChat = _vrChatStatus$globalS.moduleChat,
      moduleHouseViewer = _vrChatStatus$globalS.moduleHouseViewer; // moduleHouseViewer.viewerPanel.show()
  // moduleHouseViewer.viewerToolbarDom.setToolBarMode(false) // 恢复全景vr/对比模式等工具的显示
  // moduleHouseViewer.viewerToolbarDom.restVrChatIconStatus() // 恢复带看的索要手机号 房源信息等工具的默认状态
  // console.warn('exitVrChatMode msgAiVoiceListenedModules = null')
  // vrChatStatus.msgAiVoiceListenedModules = null
  // let iconInfoDom = document.getElementById('icon-info')
  // iconInfoDom && domHandle.addClass(iconInfoDom, 'icon-info-hide')
  // document.getElementById('mute-switch').style.backgroundImage = `url(${dkMuteOff})`
  // document.getElementById('mute-txt').innerHTML = '静音'
  // moduleChat.countdownPanel.countdownDom.style.display = 'none'
  // moduleChat.chatPanel.chatCardDom.style.display = 'none'
  // moduleChat.houseList.hide()
  // moduleChat.chatPanel.clearMemberTips()

  vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender');
  vrChatStatus.listener.dispatch('toDoIsClick', 'roomModule', true);
  vrChatStatus.listener.dispatch('toDoPanoShowCb', 'pullHead', {
    from: 'vrchat',
    to: 'vr'
  });
};
var setAiVoiceListenedModules = function setAiVoiceListenedModules(data) {
  console.warn('setAiVoiceListenedModules', data);

  if (data === null) {
    vrChatStatus.msgAiVoiceListenedModules = null;
    return;
  }

  var listenedModules = vrChatStatus.msgAiVoiceListenedModules;

  if (!listenedModules) {
    vrChatStatus.msgAiVoiceListenedModules = data;
    return;
  }

  var listenedDic = new Set();

  for (var i = 0; i < listenedModules.length; i++) {
    listenedDic.add(listenedModules[i].id);
  }

  for (var _i = 0; _i < data.length; _i++) {
    if (!listenedDic.has(data[_i].id)) {
      listenedModules.push(data[_i]);
      listenedDic.add(data[_i].id);
    }
  }

  vrChatStatus.msgAiVoiceListenedModules = listenedModules;
}; // window.onerror = function () {
//   window.vrChatConnectorApi && window.vrChatConnectorApi.outputNativeLog({ data: JSON.stringify(arguments)})
//   console.log('error hello world onerror', JSON.stringify(arguments))
// }
// 如果切换房源的被叫方在后台模式下，先做清理工作，恢复前台后再加载资源

function willResetState() {
  if (isChatOneToOne && vrChatStatus.syncSceneStatusTimeoutId) {
    // 带看定时场景同步
    clearTimeout(vrChatStatus.syncSceneStatusTimeoutId);
    vrChatStatus.syncSceneStatusTimeoutId = null;
  }

  syncStatus.allHasInitialled = false;

  if (isChatOneToOne) {
    syncStatus.hasSyncFirstStatus = false;
    syncStatus.hasReceiveFirstSyncReq = false;
    vrChatStatus.isFilterSyncAnother = false;
  } else {
    syncStatus.hasUploadHouseUrl = false;
  }
}
function didResetState() {
  if (vrChatStatus.isSeeHouseChatting && vrChatStatus.isCustomer && isChatOneToOne) {
    // 切换房源后1v1主叫恢复定时同步
    startUserSceneStatusSync();
  }

  syncStatus.allHasInitialled = true;
}
;// CONCATENATED MODULE: ./src/native-interface/helpers/messagesBeforeDomReady.js

var messagesBeforeDomReady = [];
function exeMessagesBeforeDomReady() {
  // re arrange message order, let WVRChatRequestRoomInfo to be the first
  var index = -1;

  for (var i = 0; i < messagesBeforeDomReady.length; i++) {
    if (messagesBeforeDomReady[i].type === 'dealRequestRoomInfo') {
      index = i;
      break;
    }
  }

  if (index !== -1 && index !== 0) {
    var item = messagesBeforeDomReady.splice(index, 1);
    messagesBeforeDomReady.unshift(item[0]);
  }

  messagesBeforeDomReady.forEach(function (data) {
    window.vrChatConnectorApi && window.vrChatConnectorApi.outputNativeLog('outputLog', 'js log: getData callback exeMessagesBeforeDomReady ' + data.type);
    receiveMessageFromNative[data.type] && receiveMessageFromNative[data.type](data.msg);
  });
  messagesBeforeDomReady.length = 0;
}
;// CONCATENATED MODULE: ./src/native-interface/helpers/syncFirstFrame.js






function syncFirstFrame() {
  syncStatus.allHasInitialled = true;

  if (!vrChatStatus.domHasReady) {
    vrChatStatus.domHasReady = true;
    exeMessagesBeforeDomReady();
  }

  if (isChatOneToOne) {
    syncFirstFrameOneToOne();
  } else {
    console.log("syncFirstFrame111111", vrChatStatus.audioConnected, syncStatus.hasUploadHouseUrl);

    if (vrChatStatus.audioConnected && !syncStatus.hasUploadHouseUrl) {
      clearCacheScene(); // fix: 切换房源之后，如果没有操作，邀请第三方进入带看，帧数据中的房源数据还是上一套房源的数据

      sendToServer({
        operation: {
          type: 'upload-house-url'
        },
        applyReleaseLock: true
      });
      syncStatus.hasUploadHouseUrl = true;
    }
  }
}
function syncFirstFrameOneToOne() {
  // vrChat when sync caller info to callee
  if (vrChatStatus.audioConnected && !syncStatus.hasSyncFirstStatus) {
    if (!vrChatStatus.isInitiator) {
      // 被叫初始化完成之后，请求同步
      requestSyncStatus();
      syncStatus.hasSyncFirstStatus = true;
    }
  }
}
function requestSyncStatus() {
  // not use messageEnqueue to avoid payload is array
  console.log('requestSyncStatus');
  sendSceneInfo({
    targetClientID: vrChatStatus.targetClientID,
    payload: {
      type: 'request-sync-status'
    }
  }, false);
}
;// CONCATENATED MODULE: ./src/native-interface/utils/operationTimeout.js
// import { vrChatStatus } from '../params'
function operationTimeout_resetIsChatSyncDisabled() {
  // case: 用户端在全景操作的时候，经纪人端点击3D户型，经纪人端不能旋转3D户型，然后点击叉，经纪人端不能旋转全景
  // reason: 用户端在全景操作的时候，被打断，没有发送end事件，导致用户端的isChatSceneOperating为true，经纪人端的isChatSyncDisabled为false
  vrChatStatus.isChatSyncDisabled = false;
  vrChatStatus.isChatSceneOperating = false;
}

function Timeout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  this.timeoutId = null;
  this.timeoutTime = time;
  this.retry = 2;
  this.currentRetry = 0;
  this.func = null;
}

Timeout.prototype.clearTimeoutId = function () {
  if (this.timeoutId) {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }
};

Timeout.prototype.setTimeoutFunc = function (func, notFirstTime) {
  var _this = this;

  if (!notFirstTime) {
    this.currentRetry = this.retry;
    this.func = func;
  }

  this.clearTimeoutId();
  this.timeoutId = setTimeout(function () {
    _this.timeoutId = null;
    _this.currentRetry--;

    if (_this.currentRetry) {
      _this.setTimeoutFunc(undefined, true); // todo lss retry并没有发消息

    } else {
      _this.func();

      _this.func = null;
      _this.timeoutId = null;
      operationTimeout_resetIsChatSyncDisabled();
    }
  }, this.timeoutTime);
};

Timeout.prototype.executeFunc = function () {
  this.clearTimeoutId();

  if (this.func) {
    this.func();
    this.func = null;
  }
};

var operationTimeout_chatSceneTimeout = new Timeout();
;// CONCATENATED MODULE: ./src/native-interface/receiveMessageFromNative.js





 // import SyncVrChatPanoCamera from '../animation/syncVrChatPanoCamera'








 // TODO
// import { handleChangeCurrentFullScreen, triggerStereoCameraFlyZoomIn } from ''

function dealSwitchToVrChat(msg) {
  console.log("dealSwitchToVrChat", msg); // 业务取数据

  params_vrChatStatus.msgWVRChatSwitchToVRChat = msg;
  var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
  console.log('=+++++++===', VRCHAT_CONFIG);
  VRCHAT_CONFIG.SWITCH_TO_VRCHAT_CB && VRCHAT_CONFIG.SWITCH_TO_VRCHAT_CB(); // log

  window.vrChatConnectorApi.outputNativeLog('outputLog', 'H5 WVRChatSwitchToVRChat');
  window.VRHOUSE_API.setIsHideFurnitureHotSpots && window.VRHOUSE_API.setIsHideFurnitureHotSpots(true);
  window.VRHOUSE_API.redPacketMoveOut && window.VRHOUSE_API.redPacketMoveOut();
  dealChatMsgFromProtocol(msg);

  if (msg.scene === 'vr_chat') {
    if (!isNaN(Number(msg.authority))) {
      setAuthority(msg.authority);
    }
  }

  msg.channel_type && setIsChatOneToOne(msg.channel_type !== 2);
  var _vrChatStatus$globalS = params_vrChatStatus.globalState,
      moduleChat = _vrChatStatus$globalS.moduleChat,
      moduleHouseViewer = _vrChatStatus$globalS.moduleHouseViewer; // if (isChatOneToOne) {
  //   moduleChat.chatPanel.displayShare() // 添加邀请
  // }
  // hideRedPacket()

  if (msg.scene === "vr_chat" && (msg.initiator === true || msg.initiator === 'true')) {
    params_vrChatStatus.isInitiator = true;
    params_vrChatStatus.isSeeGuideTip = false; // 发起带看
    // console.log('-------',isChatOneToOne,VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB,moduleChat.accompanyStatus.VRCHAT_START)

    isChatOneToOne && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB(moduleChat.accompanyStatus.VRCHAT_START); // moduleChat.countdownPanel.startCountdown()
    // moduleChat.leftAvatar.src = vrChatStatus.agentAvatar
    // moduleChat.wrapperDom.style.display = 'block'

    if (msg.sender_info && msg.to_info) {
      // 回拨挂断后的全景再次发起 不会有requestRoomInfo 所以在switchToVRChat 要增加customer，agent的判断逻辑
      dealChatMsgFromProtocol(msg); // moduleChat.chatPanel.initMemberTips(vrChatStatus.cClientID)
    }

    triggerConnectVrChat();
  } else if (isChatOneToOne && msg.scene === 'vr_chat' && (msg.initiator === false || msg.initiator === 'false')) {// v4.7展示带看对端用户头像及名称
    // document.getElementById('left-avatar').src = vrChatStatus.agentAvatar
  } // moduleChat.chatPanel.setAgentCards(vrChatStatus.agentName, vrChatStatus.company)
  // 自定义对方正在操作角色文本
  // moduleChat.chatPanel.customPeerIsOperatingText()

}

function dealRequestRoomInfo(msg) {
  // 业务线数据回调
  var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
  params_vrChatStatus.msgWVRChatRequestRoomInfo = msg;
  VRCHAT_CONFIG.REQUEST_ROOMINFO_CB && VRCHAT_CONFIG.REQUEST_ROOMINFO_CB();
  dealChatMsgFromProtocol(msg); // document.getElementById('avatar-image').src = vrChatStatus.agentIsTo ? vrChatStatus.agentAvatar : vrChatStatus.customerAvatar

  var _vrChatStatus$globalS2 = params_vrChatStatus.globalState,
      moduleChat = _vrChatStatus$globalS2.moduleChat,
      moduleHouseViewer = _vrChatStatus$globalS2.moduleHouseViewer;

  if (msg.scene === 'vr_chat') {
    if (!isNaN(Number(msg.authority))) {
      setAuthority(msg.authority);
    } // window.VRHOUSE_API.setIsHideFurnitureHotSpots && window.VRHOUSE_API.setIsHideFurnitureHotSpots(true)
    // window.VRHOUSE_API.redPacketMoveOut && window.VRHOUSE_API.redPacketMoveOut()
    // hideRedPacket()

  }

  setIsChatOneToOne(msg.channel_type !== 2); // moduleChat.chatPanel.displayShare() // 添加邀请

  /*
  // 带看清单文案配置
  if(vrChatStatus.houseListTxt.length>4) {
    document.getElementById('house-list-txt').innerHTML = vrChatStatus.houseListTxt.substring(0,4)
  } else {
    document.getElementById('house-list-txt').innerHTML = vrChatStatus.houseListTxt
  }
  */
  // moduleChat.chatPanel.initMemberTips(vrChatStatus.cClientID)
  // if(vrChatStatus.selfType !== "sender") {
  //   moduleChat.tips.renderPreAudioConnectedTips()
  // }

  if (msg.scene === 'vr_chat' && (msg.initiator === true || msg.initiator === 'true')) {
    // document.getElementById('vr-chat-wrapper').style.display = 'block'
    // 对方正在赶来弹窗隐藏/显示
    isChatOneToOne && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB(moduleChat.accompanyStatus.VRCHAT_START); // moduleChat.countdownPanel.startCountdown()

    params_vrChatStatus.seeHouseCountdownTimer = null;
    params_vrChatStatus.isShowSeeHouseDialog = true;
    params_vrChatStatus.seeHouseDialogType = 0;
    params_vrChatStatus.isShowSeeHouseCountdown = true;
    params_vrChatStatus.seeHouseCountdown = 30;
    params_vrChatStatus.isSeeHouseChatting = false;
    params_vrChatStatus.isChatPage = true;
    triggerConnectVrChat();
    params_vrChatStatus.isInitiator = true;
    params_vrChatStatus.isSeeGuideTip = false; // moduleChat.leftAvatar.src = vrChatStatus.agentAvatar

    var role = params_vrChatStatus.isCustomer ? params_vrChatStatus.roleA : params_vrChatStatus.roleB; // document.getElementById('type1-txt').innerHTML = role + '繁忙中，请稍后再试或给他留言咨询'
  } else if (msg.scene === 'vr_chat' && (msg.initiator === false || msg.initiator === 'false')) {
    initVrChatMode();

    if (!isChatOneToOne) {// document.getElementById("mute-switch").setAttribute("disabled", true);
    }

    params_vrChatStatus.isInitiator = false;
    params_vrChatStatus.isSeeGuideTip = false; // moduleChat.leftAvatar.src = vrChatStatus.agentAvatar        
    // moduleChat.chatPanel.showChatTransition()

    params_vrChatStatus.accompany.connect();
    params_vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender', false); // 停止展示端自转
    // moduleHouseViewer.viewerToolbarDom.setToolBarMode(true)

    if (params_vrChatStatus.isCustomer && isChatOneToOne) {
      // 用户端开启定时同步
      startUserSceneStatusSync();
    }
  } // moduleChat.chatPanel.setAgentCards(vrChatStatus.agentName, vrChatStatus.company)
  // 自定义对方正在操作角色文本
  // moduleChat.chatPanel.customPeerIsOperatingText()


  if (!isChatOneToOne) {
    params_vrChatStatus.canSendToServer = false;
  }
}

function dealUpdateRoomInfo(msg) {
  var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
  params_vrChatStatus.msgWVRChatUpdateRoomInfo = msg;
  window.vrChatConnectorApi.outputNativeLog('outputLog', 'H5 WVRChatUpdateRoomInfo');
  VRCHAT_CONFIG.UPDATE_ROOM_INFO_CB && VRCHAT_CONFIG.UPDATE_ROOM_INFO_CB();
  msg.channel_type && setIsChatOneToOne(msg.channel_type !== 2);
  dealChatMsgFromProtocol(msg);
  var moduleChat = params_vrChatStatus.globalState.moduleChat; // moduleChat.chatPanel.initMemberTips(vrChatStatus.cClientID)
  // moduleChat.chatPanel.setAgentCards(vrChatStatus.agentName, vrChatStatus.company)
  // document.getElementById('left-avatar').src = vrChatStatus.agentAvatar 
  // if (!isChatOneToOne) {
  //   moduleChat.chatPanel.removeTempMember(vrChatStatus.cClientID)
  // }    
}

function dealAudioConnected(msg) {
  // 音视频接通返回的事件
  var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
  params_vrChatStatus.msgWVRChatVrAudioConnected = msg;
  window.vrChatConnectorApi.outputNativeLog('outputLog', 'H5 WVRChatVrAudioConnected');
  var _vrChatStatus$globalS3 = params_vrChatStatus.globalState,
      moduleChat = _vrChatStatus$globalS3.moduleChat,
      moduleHouseViewer = _vrChatStatus$globalS3.moduleHouseViewer; // moduleChat.chatPanel.startClock(msg.connect_time) // close-icon下计时器
  // vrChatStatus.isMute = false

  params_vrChatStatus.isVrAudioConnected = true;
  msg.channel_type && setIsChatOneToOne(msg.channel_type !== 2); // if(vrChatStatus.selfType !== "sender") {
  //   moduleChat.tips.closePreAudioConnectedTips()
  // }
  // 查看房源信息
  // if (!vrChatStatus.defaultConfig.IS_HIDE_INFO_BTN) {
  //   moduleHouseViewer.viewerToolbarDom.updateHouseInfo(false)
  // }

  if (!isChatOneToOne) {
    if (!params_vrChatStatus.canSendToServer && !params_vrChatStatus.isInitiator) {
      var nextTickTimer = setTimeout(function () {
        console.log('^^^^^^^^^^^^^^^^^^^', params_vrChatStatus.canSendToServer);
        clearTimeout(nextTickTimer);
        nextTickTimer = null;

        if (!params_vrChatStatus.canSendToServer) {
          // 异步之后还是false
          sendSceneInfo({
            communicationEvent: {
              command: 'reconnect',
              clientEvent: {},
              sceneInfo: {}
            },
            targetClientID: null
          }, false);
        }
      }, 10);
    }

    if (!isNaN(Number(msg.authority))) {
      setAuthority(msg.authority);
    } // moduleChat.chatPanel.displayShare() // 添加邀请
    // document.getElementById("mute-switch").removeAttribute("disabled");
    // if (vrChatStatus.selfType === 'audience') {
    //   vrChatStatus.globalState.modulePano.controls.enabled = false
    // }

  }

  if (msg.audio_status === 'success') {
    params_vrChatStatus.audioConnected = true;
    params_vrChatStatus.isChatting = true;
    params_vrChatStatus.isChattingConnecting = false;
    params_vrChatStatus.selfType = msg.self_type || params_vrChatStatus.selfType;
    initVrChatMode();

    if (params_vrChatStatus.isInitiator) {
      moduleChat.chatPanel.showChatTransition();
      params_vrChatStatus.accompany.connect();
      params_vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender', false); // 停止展示端自转
    }

    console.log("WVRChatVrAudioConnected-isCustomer-isChatOneToOne", params_vrChatStatus.isCustomer, isChatOneToOne);

    if (params_vrChatStatus.isCustomer && isChatOneToOne) {
      // 主叫方用户端开启定时同步
      startUserSceneStatusSync();
    }

    var to_info = msg.to_info,
        sender_info = msg.sender_info,
        self_info = msg.self_info,
        self_type = msg.self_type;

    if (self_type === 'sender' && !sender_info) {
      sender_info = self_info;
    }

    if (self_type === 'to' && !to_info) {
      to_info = self_info;
    }

    var agentInfo = (params_vrChatStatus.agentIsTo ? to_info : sender_info) || {};
    var customerInfo = (params_vrChatStatus.agentIsTo ? sender_info : to_info) || {};

    if (self_info) {
      // 兼容小程序发来的数据没有self_info
      var avatarImage = params_vrChatStatus.agentIsTo ? agentInfo.avatar : customerInfo.avatar;
      var agentName = agentInfo ? agentInfo.name : params_vrChatStatus.agentName; // agentName && (moduleChat.chatPanel.setAgentCards(agentName, vrChatStatus.company))
      // console.log('*** agentIsTo from connected ', vrChatStatus.agentIsTo, agentInfo)
      // if ((isChatOneToOne || (msg.self_type !== 'audience' || agentInfo) ) && avatarImage && avatarImage.length > 1) {
      //   document.getElementById('avatar-image').src = vrChatStatus.agentIsTo ? agentInfo.avatar : customerInfo.avatar
      // }
    }

    if (isChatOneToOne && params_vrChatStatus.isCustomer) {
      startUserSceneStatusSync();
    } else {
      operationStatus.clientId = msg.self_info && msg.self_info.client_id;
      params_vrChatStatus.currentClientID = msg.self_info && msg.self_info.client_id;

      if (msg.self_type === 'sender') {
        // ‘主c从to_info中取主b的信息’
        params_vrChatStatus.cClientID = customerInfo ? customerInfo.client_id : params_vrChatStatus.cClientID;
        params_vrChatStatus.bClientID = agentInfo ? agentInfo.client_id : params_vrChatStatus.bClientID;
        console.log('many avatar-left', params_vrChatStatus.agentIsTo ? agentInfo.avatar : customerInfo.avatar, agentInfo ? agentInfo.avatar : params_vrChatStatus.agentAvatar);
      } else if (msg.self_type === 'to') {
        // 主b没有to_info从self_info中取
        params_vrChatStatus.bClientID = agentInfo ? agentInfo.client_id : params_vrChatStatus.bClientID;
      } else if (msg.self_type === 'audience' && agentInfo) {
        agentInfo.client_id && (params_vrChatStatus.bClientID = agentInfo.client_id);
      }
    } // 主b头像更新
    // let leftAvatarSrc = agentInfo ? agentInfo.avatar : vrChatStatus.agentAvatar    
    // leftAvatarSrc && (document.getElementById('left-avatar').src = leftAvatarSrc)


    if (syncStatus.allHasInitialled) {
      console.log("syncFirstFrame:::::::WVRChatVrAudioConnected");
      syncFirstFrame();
    }

    VRCHAT_CONFIG.AUDIOCONNECTED_CB && VRCHAT_CONFIG.AUDIOCONNECTED_CB();
    params_vrChatStatus.listener.dispatch('toDoPanoShowCb', 'pullHead', {
      from: 'vr',
      to: 'vrchat'
    }); // window.VRHOUSE_API.setIsHideFurnitureHotSpots && window.VRHOUSE_API.setIsHideFurnitureHotSpots(true)
  } else {
    exitVrChatMode();
    window.vrChatConnectorApi.exit({
      "reason": "timeout"
    });

    if (isChatOneToOne) {
      clearUserSceneStatusSync();
    }
  }
}

function dealExit(msg) {
  params_vrChatStatus.msgWVRChatVrExit = msg;
  var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
  var isAiVoicePlaying = params_vrChatStatus.accompany.playStatus;
  console.log('status', isAiVoicePlaying);
  document.getElementById("type2").style.display = 'none'; // log

  window.vrChatConnectorApi.outputNativeLog('outputLog', 'H5 receive WVRChatVrExit');
  VRCHAT_CONFIG.CHAT_EXIT_CB && VRCHAT_CONFIG.CHAT_EXIT_CB();
  var _vrChatStatus$globalS4 = params_vrChatStatus.globalState,
      moduleChat = _vrChatStatus$globalS4.moduleChat,
      moduleHouseViewer = _vrChatStatus$globalS4.moduleHouseViewer; // 陪看状态修改

  params_vrChatStatus.isInitiator && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB(params_vrChatStatus.accompany.accompanyStatus.VRCHAT_EXIT); // window.VRHOUSE_API.setIsHideFurnitureHotSpots && window.VRHOUSE_API.setIsHideFurnitureHotSpots(false)
  // window.VRHOUSE_API.redPacketMoveIn && window.VRHOUSE_API.redPacketMoveIn()
  // moduleChat.chatPanel.resetClock()
  // moduleHouseViewer.viewerPanel.showRedPacket()
  // msg.status
  // 主叫取消（未接听）2
  // 被叫拒绝（未接听）3
  // 被叫忙线 （未接听）4
  // 被叫超时无应答（未接听）5
  // 主叫挂断（已接听）7
  // 被叫挂断（已接听）8
  // 发起失败 9
  // 接听后异常状态 10

  if (isChatOneToOne) {
    if (msg.status === 3 || msg.status === 4 || msg.status === 5) {// 显示繁忙弹窗
      // document.getElementById('vr-chat-wrapper').style.display = 'block'
      // document.getElementById('type1').style.display = 'block'
      // document.getElementById("shader").style(.display = 'block'
      // moduleChat.dialog.changeSeeHouseDialogType(1)
      // document.getElementById("shader").style.display = 'block'
    } else {// document.getElementById("shader").style.display = 'none'
      //setAiVoiceListenedModules(null) // 不会出现重拨的退出 都要清理已听模块
    } // if (isAiVoicePlaying>1) {
    //   moduleChat.miniCountdownPanel.hide()
    // }


    var _vrChatStatus$default = params_vrChatStatus.defaultConfig.ACCOMPANY_VOICE,
        _vrChatStatus$default2 = _vrChatStatus$default.dealBusy,
        dealBusy = _vrChatStatus$default2 === void 0 ? 0 : _vrChatStatus$default2,
        _vrChatStatus$default3 = _vrChatStatus$default.dealReCallBeforeAiVoiceFinish,
        dealReCallBeforeAiVoiceFinish = _vrChatStatus$default3 === void 0 ? 2 : _vrChatStatus$default3,
        _vrChatStatus$default4 = _vrChatStatus$default.dealReCallAfterAiVoiceFinish,
        dealReCallAfterAiVoiceFinish = _vrChatStatus$default4 === void 0 ? 0 : _vrChatStatus$default4;
    console.log(dealBusy, dealReCallBeforeAiVoiceFinish, dealReCallAfterAiVoiceFinish);

    if (msg.status === 3 || msg.status === 4 || msg.status === 5 || msg.status === 2 || msg.status === 9 || msg.status === 10) {
      if (isAiVoicePlaying < 2) {
        // 普通带看的处理
        exitVrChatMode(); // vrChatStatus.accompany.playStatus = 0
        // vrChatStatus.accompany.aihouse.isPlaying = false

        clearUserSceneStatusSync();
      } else {
        // 还在讲房中 
        dealBusyWhenAiVoice(dealBusy);
      }
    } else {
      // 1 6 7 8
      exitVrChatMode(); // vrChatStatus.accompany?.reset()

      clearUserSceneStatusSync(); // if (isAiVoicePlaying>0) {
      //   vrChatStatus.accompany.exit()
      // }
    }
  } else {
    // 多对多
    if (msg.status === 3 || msg.status === 4 || msg.status === 5) {// document.getElementById('vr-chat-wrapper').style.display = 'block'
      // // document.getElementById('type0').style.display = 'none'
      // document.getElementById('type1').style.display = 'block'
      // document.getElementById("shader").style.display = 'block'
    } else {// document.getElementById("shader").style.display = 'none'
    }

    exitVrChatMode();
  }
}

function dealBusyWhenAiVoice(dealBusy) {
  var moduleChat = params_vrChatStatus.globalState.moduleChat;
  dealBusy = Number(dealBusy);

  switch (dealBusy) {
    //0: pause 1: exit  2: continue
    case 0:
      // 呼叫超时陪看的默认，不回到全景，暂停讲房
      exitVrChatStatus(); // vrChatStatus.accompany.pause()

      break;

    case 1:
      // 回到全景 退出讲房
      // vrChatStatus.accompany.exit()
      window.VRHOUSE_CONFIG.VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB(moduleChat.accompanyStatus.AI_EXIT);
      exitVrChatMode();
      break;

    case 2:
      // 不回到全景 继续讲房
      exitVrChatStatus();
      break;

    default:
      break;
  }

  clearUserSceneStatusSync();
}

function dealCreateRoom(msg) {
  params_vrChatStatus.msgWVRChatCreateRoom = msg;
  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.VR_CHAT_CREATE_ROOM_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.VR_CHAT_CREATE_ROOM_CB(msg);
}

function dealSyncMicrophone(msg) {
  params_vrChatStatus.msgWVRChatSyncMicrophone = msg; // msg.authority 未知（用户未决定） "0"，访问被限制（家长控制，仅iOS） "1"，用户已拒绝并不再提醒（iOS对应已拒绝）"2"，用户已拒绝（再次申请权限可弹窗，仅安卓）''3", 用户已授权 "4"

  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.SYNC_MICROPHONE_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.SYNC_MICROPHONE_CB();
}

function dealSceneInfo(msg) {
  if (msg.data && msg.data.type === "listened") {
    params_vrChatStatus.msgAiVoiceListenedModules = msg.data.modules;
  }

  if (params_vrChatStatus.canSendToServer && msg.communicationEvent.clientEvent.isCustomMsg) {
    params_vrChatStatus.customerSceneInfoReciever && params_vrChatStatus.customerSceneInfoReciever(msg.data.data);
  } else if (msg.isCustomMsg) {
    params_vrChatStatus.customerSceneInfoReciever && params_vrChatStatus.customerSceneInfoReciever(msg.data);
  }

  if (isChatOneToOne) {
    dealOneToOneSceneInfo(msg);
  } else {
    dealManyToManySceneInfo(msg);
  }
}

function dealOneToOneSceneInfo(msg) {
  // 同步画面
  // console.log('dealOneToOneSceneInfo', +new Date(), msg)
  var payload = msg.payload,
      timestamp = msg.timestamp,
      lastOperationId = msg.lastOperationId,
      lastSceneOperationId = msg.lastSceneOperationId,
      isCustomMsg = msg.isCustomMsg;

  if (isCustomMsg === true || isCustomMsg === 'true') {
    window.VRHOUSE_CONFIG.VRCHAT_CONFIG.DATA_EXCHANGER_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.DATA_EXCHANGER_CB(msg);
    return;
  }

  if (payload && !Array.isArray(payload)) {
    if (payload.type === 'request-sync-status') {
      dealOneToOneSceneMessage(payload, lastOperationId, lastSceneOperationId);
      return;
    }
  } // if (vrChatStatus.newestTimestamp > timestamp) { // 单方的时序说是可以保障的
  //   return // simply drop this message
  // }


  var localLastSceneOperationId = params_vrChatStatus.isCustomer ? params_serverOperation.lastSceneOperationId : clientOperation.lastSceneOperationId;

  if (!params_vrChatStatus.isCustomer) {
    if (lastSceneOperationId < localLastSceneOperationId) return;
    if (lastOperationId) clientOperation.lastOperationId = lastOperationId;

    if (lastSceneOperationId) {
      clientOperation.lastSceneOperationId = lastSceneOperationId;

      if (lastSceneOperationId > localLastSceneOperationId) {
        params_vrChatStatus.isAllowOperateScene = true;
      }
    }
  }

  if (Array.isArray(payload)) {
    payload.forEach(function (item) {
      dealOneToOneSceneMessage(item, lastOperationId, lastSceneOperationId);
    });
  } else {
    dealOneToOneSceneMessage(payload, lastOperationId, lastSceneOperationId);
  }

  params_vrChatStatus.newestTimestamp = timestamp;
}

function dealOneToOneSceneMessage(msg, lastOperationId, lastSceneOperationId) {
  // console.log('dealOneToOneSceneMessage', msg)
  if (!msg) {
    return;
  }

  var VR_VIEWER = params_vrChatStatus.globalState;
  var isGuideFullScreen = VR_VIEWER.isGuideFullScreen,
      modulePano = VR_VIEWER.modulePano,
      moduleStereo = VR_VIEWER.moduleStereo;
  console.log("dealMessage", params_vrChatStatus.isCustomer, params_vrChatStatus.isSeeHouseChatting);

  if (params_vrChatStatus.isCustomer && params_vrChatStatus.isSeeHouseChatting) {
    // 用户端收到消息，重置定时
    startUserSceneStatusSync();
  }

  switch (msg.type) {
    case 'peer-is-chatting':
      console.log('对方正在通话中...');
      exitVrChatMode();
      return;

    case 'localEnvRejectSync':
      exitVrChatMode();
      VR_VIEWER.moduleChat.changeIsShowSeeHouseDialog();
      return;

    case 'end-sync':
      exitVrChatMode();
      return;

    case 'request-sync-status':
      syncStatus.hasReceiveFirstSyncReq = true;
      if (!syncStatus.allHasInitialled) return;
      syncStatusToAnother();
      syncStatus.hasSyncFirstStatus = true;
      return;

    case 'request-sync-status-when-visible':
      if (!syncStatus.allHasInitialled) return;
      syncStatusToAnother.call(this);
      return;

    case 'sync-another-status':
      console.log('sync-another-status', params_vrChatStatus.isFilterSyncAnother);
      if (!syncStatus.allHasInitialled || params_vrChatStatus.isFilterSyncAnother) return;
      params_vrChatStatus.isFilterSyncAnother = false;
      syncChatSceneStatus(msg.data, true);
      return;

    case 'sync-user-status':
      // if (vrChatStatus.isChatSceneOperating ||
      //   !pageVisibleState.isVisible ||
      //   chatSceneTimeout.func || vrChatStatus.isChatSyncDisabled) return
      if (syncStatus.allHasInitialled) {
        syncChatSceneStatus(msg.data);
        params_vrChatStatus.isAllowOperateScene = true; // 如果在上一次修改scene后 还没收到allow，收到同步信息也将isAllowOperateScene恢复
      }

      return;

    case 'peer-is-operating':
      if (!syncStatus.allHasInitialled) return;
      showPeerIsOperatingDialog();
      break;
    // case 'pano2d-camera-start':
    //   if (!syncStatus.allHasInitialled || rejectOperation(lastOperationId)) return
    //   vrChatStatus.isChatSyncDisabled = true
    //   changePanoControlsEnabledStatus(false)
    //   break
    // case 'pano2d-camera-end':
    //   if (!syncStatus.allHasInitialled) return
    //   vrChatStatus.isChatSyncDisabled = false
    //   changePanoControlsEnabledStatus(true)
    //   break
    // case 'pano2d-camera-change':
    //   if (!syncStatus.allHasInitialled) return
    //   if (rejectOperation(lastOperationId, !vrChatStatus.isChatSyncDisabled)) return
    //   if (!pageVisibleState.isVisible) return
    //   modulePano.syncVrChatPanoCameraAni.play({
    //     rotation: msg.data.pano2DCamera.rotation,
    //     fov: msg.data.pano2DCamera.fov,
    //     isStopOnCurrentStatus: true
    //   })
    //   break

    case 'pano2d-wheel':
      if (!syncStatus.allHasInitialled) return;
      if (rejectOperation.call(this, lastOperationId)) return;
      if (!version_pageVisibleState.isVisible) return;

      if (msg.data.fov) {
        if (msg.data.fov !== modulePano.camera.fov) {
          modulePano.panoramaInZoom.stop();
          modulePano.panoramaInZoom.play(msg.data.fov);
        }
      } else {
        VR_VIEWER.modulePanoBtns.panoZoomClick(msg.data.zoomBtnClicked, true);
      }

      break;

    case 'pano2d-camera-start':
    case 'pano-camera-start':
      if (params_vrChatStatus.isCustomer) {
        params_vrChatStatus.isBPanoPlaying = true;
      }

      console.log("发送给展示端 pano-camera-start", params_vrChatStatus.isPanoPlaying);

      if (params_vrChatStatus.isPanoPlayingBySync) {
        return;
      }

      params_vrChatStatus.isPanoPlayingBySync = true;
      params_vrChatStatus.listener.dispatch('toDoCameraTransformStart', 'roomRender', {}, {
        origin: msg.data,
        isSync: true
      }); // if (!syncStatus.allHasInitialled) return
      // if (rejectOperation(lastOperationId) || isGuideFullScreen) return
      // vrChatStatus.isChatSyncDisabled = true

      break;

    case 'pano2d-camera-end':
    case 'pano-camera-end':
      console.log("发送给展示端 pano-camera-end", params_vrChatStatus.isPanoPlayingBySync);

      if (params_vrChatStatus.isCustomer) {
        params_vrChatStatus.isBPanoPlaying = false;
      }

      params_vrChatStatus.isPanoPlayingBySync = false;
      params_vrChatStatus.listener.dispatch('toDoCameraTransformEnd', 'roomRender', {}, {
        origin: msg.data,
        isSync: true
      }); // if (!syncStatus.allHasInitialled || isGuideFullScreen) return
      // vrChatStatus.isChatSyncDisabled = false

      break;

    case 'pano2d-camera-change':
    case 'pano-camera-change':
      if (params_vrChatStatus.isPanoPlaying) {
        if (!params_vrChatStatus.isCustomer) {
          showPeerIsOperatingDialog();
        }

        return;
      }

      console.warn("listener.dispatch('toDoCameraTransform',\xA0'roomRender',\xA0{},\xA0{origin:\xA0".concat(JSON.stringify(msg.data), ",\xA0isSync:\xA0true, duration: 500})")); // if (!syncStatus.allHasInitialled) return
      // if (rejectOperation(lastOperationId, !vrChatStatus.isChatSyncDisabled) || isGuideFullScreen) return
      // if (!pageVisibleState.isVisible) return

      params_vrChatStatus.listener.dispatch('toDoCameraTransform', 'roomRender', {}, {
        origin: msg.data,
        isSync: true,
        duration: 500
      }); // modulePano.syncVrChatPanoCameraAni.play({
      //   rotation: msg.data.panoCamera.rotation,
      //   fov: msg.data.panoCamera.fov,
      //   isStopOnCurrentStatus: true,
      //   onFinishedCallback: () => { // 动画结束的时候画标尺
      //     !IS_SHOW_RULER_BTN && modulePano.onCameraRotate()
      //   }
      // })

      break;
    // case 'pano-wheel':
    //   if (!syncStatus.allHasInitialled) return
    //   if (rejectOperation(lastOperationId)) return
    //   if (!pageVisibleState.isVisible) return
    //   if (msg.data.fov) {
    //     if (msg.data.fov !== modulePano.camera.fov && !isGuideFullScreen) {
    //       modulePano.panoramaInZoom.stop()
    //       modulePano.panoramaInZoom.play(msg.data.fov)
    //     }
    //   } else {
    //     VR_VIEWER.modulePanoBtns.panoZoomClick(msg.data.zoomBtnClicked, true)
    //   }
    //   break

    case 'stereo-camera-start':
      // if (!syncStatus.allHasInitialled) return
      // if (rejectOperation(lastOperationId) || !isGuideFullScreen) return
      params_vrChatStatus.isChatSyncDisabled = true;
      params_vrChatStatus.listener.dispatch('toDoCameraTransformStart', 'houseRender', {}, {
        origin: msg.data,
        isSync: true
      }); // changeStereoControlsEnabledStatus(false)

      break;

    case 'stereo-camera-end':
      // if (!syncStatus.allHasInitialled || !isGuideFullScreen) return
      params_vrChatStatus.isChatSyncDisabled = false;
      params_vrChatStatus.listener.dispatch('toDoCameraTransformEnd', 'houseRender', {}, {
        origin: msg.data,
        isSync: true
      }); // changeStereoControlsEnabledStatus(true)

      break;

    case 'stereo-camera-change':
      if (!syncStatus.allHasInitialled) return; // if (rejectOperation(lastOperationId, !vrChatStatus.isChatSyncDisabled) || !isGuideFullScreen) return

      if (!version_pageVisibleState.isVisible) return;
      console.warn("listener.dispatch('toDoCameraTransform', 'houseRender', {}, {origin: ".concat(JSON.stringify(msg.data), ", isSync: true, duration: 500})")); // todo 会触发stereo-camera-change

      params_vrChatStatus.listener.dispatch('toDoCameraTransform', 'houseRender', {}, {
        origin: msg.data,
        isSync: true,
        duration: 500,
        type: 'vrchat'
      }); // if (vrChatStatus.isChatSyncDisabled) {
      //   moduleStereo.syncVrChatStereoCameraAni.play({
      //     position: msg.data.stereoCamera.position,
      //     fov: msg.data.stereoCamera.fov,
      //     isStopOnCurrentStatus: true
      //   })
      // }

      break;

    case 'change-hotspot':
      // 点击漫游点
      console.log("change-hotspot", msg.data, syncStatus.allHasInitialled, version_pageVisibleState.isVisible, params_vrChatStatus.globalState.type);
      if (!syncStatus.allHasInitialled) return;
      if (!version_pageVisibleState.isVisible) return;
      var from = msg.data.from;

      if (from === 'floorPlan') {
        return;
      }

      console.log("change-hotspotchange-hotspot", params_vrChatStatus.isCustomer, params_vrChatStatus.isChangeHotSpotPlaying);

      if (params_vrChatStatus.isCustomer) {
        if (params_vrChatStatus.isChangeHotSpotPlaying) return;
      } // let id
      // if (typeof msg.data === 'string') {
      //   id = msg.data
      // } else {
      //   id = msg.data && msg.data.id
      // }
      // if (from !== 'panorama3D' && from !== 'InnerRam3D') { // 场景切换
      //   if (!userValidSceneOperation(lastSceneOperationId)) return
      //   // if (moduleStereo && moduleStereo.syncVrChatStereoCameraAni.isPlaying) {
      //   //   moduleStereo.syncVrChatStereoCameraAni.stop()
      //   // }
      // }
      // // 场景内操作
      // if (rejectOperation(lastOperationId)) return


      console.log(RENDERS.room.end.data.ID, msg);
      console.warn("listener.dispatch('toDoSetDataId', ".concat(params_vrChatStatus.globalState.type === '3d' ? 'roomModule' : 'room2DModule', ", {}, {origin: ").concat(JSON.stringify(msg.data), ", isSync: true})"));
      if (from === 'stereo') return;
      params_vrChatStatus.listener.dispatch('toDoSetDataId', "".concat(params_vrChatStatus.globalState.type === '3d' ? 'roomModule' : 'room2DModule'), {}, {
        origin: msg.data,
        isSync: true
      }); // VR_VIEWER.setCurrentHotSpotID(msg.data, true)

      break;

    case 'toDoToRoom':
      //点击2d户型图
      if (!syncStatus.allHasInitialled) return;
      if (!version_pageVisibleState.isVisible) return;

      if (params_vrChatStatus.isCustomer) {
        if (params_vrChatStatus.isChangeHotSpotPlaying) return;
      }

      var _msg$data = msg.data,
          data = _msg$data.data,
          extra = _msg$data.extra;
      params_vrChatStatus.listener.dispatch('toDoToRoom', 'houseModule', data, extra);
      break;

    case 'change-current-fullscreen':
      // click 3D模型
      console.log("change-current-fullscreen", params_vrChatStatus.isSceneOperatePlaying);
      if (params_vrChatStatus.isSceneOperatePlaying) return;
      if (!syncStatus.allHasInitialled) return; // if (!userValidSceneOperation(lastSceneOperationId)) return

      if (!version_pageVisibleState.isVisible) return;
      toDoChangeModule(msg); // if (modulePano.syncVrChatPanoCameraAni.isPlaying) {
      //   modulePano.syncVrChatPanoCameraAni.stopToFinalStatus(false)
      // }
      // let panoramaInZoom = modulePano.panoramaInZoom
      // panoramaInZoom && panoramaInZoom.stop()
      // handleChangeCurrentFullScreen.call(VR_VIEWER, msg.data, true)

      break;

    case 'stereo-camera-zoom-in':
      // 3D户型图放大到一定程度的时候，进入全景
      // 废弃了？
      // if (!syncStatus.allHasInitialled) return
      // if (!userValidSceneOperation(lastSceneOperationId)) return
      // if (!pageVisibleState.isVisible) return
      // isGuideFullScreen && (VR_VIEWER.currentGuideTab === '3D') && triggerStereoCameraFlyZoomIn.call(vrChatStatus.globalState)
      break;

    case 'set-guide-tab':
      // change 2D，3D tab
      // console.log("'set-guide-tab'", syncStatus.allHasInitialled, userValidSceneOperation(lastSceneOperationId), pageVisibleState.isVisible)
      if (!syncStatus.allHasInitialled) return; // if (!userValidSceneOperation(lastSceneOperationId)) return

      if (!version_pageVisibleState.isVisible) return;
      console.warn("listener.dispatch('switchType',\xA0'houseModule',\xA0".concat(msg.data.type, ",\xA0{origin:\xA0").concat(JSON.stringify(msg.data), ",\xA0isSync:\xA0true})"));
      params_vrChatStatus.listener.dispatch('switchType', 'houseModule', msg.data.type, {
        origin: msg.data,
        isSync: true
      });
      break;

    case 'allow-scene-change':
      // b才会收到
      if (!syncStatus.allHasInitialled) return;
      if (!version_pageVisibleState.isVisible) return;
      params_vrChatStatus.isAllowOperateScene = true;
      operationTimeout_chatSceneTimeout.executeFunc();
      operationTimeout_resetIsChatSyncDisabled();
      break;

    case 'change-guide-floor':
      // 更改楼层
      if (!syncStatus.allHasInitialled) return; // if (rejectOperation(lastOperationId)) return

      if (!version_pageVisibleState.isVisible) return;
      params_vrChatStatus.listener.dispatch('toDoSetFloor', 'houseModule', {}, {
        origin: msg.data,
        isSync: true
      });
      break;

    case 'opposite-visible-state':
      dealOppositeVisibleStateMessage(msg.data.visible);
      break;

    default:
      return;
  }

  if (params_vrChatStatus.isCustomer) {
    dealUserSingleLastOperation(msg, true, lastOperationId, lastSceneOperationId);
  }
}

function dealManyToManySceneInfo(msg) {
  var communication = msg.communicationEvent;
  if (communication.command !== 'mutex' && communication.command !== 'directsend') return;
  var clientEvent = communication.clientEvent,
      serverEvent = communication.serverEvent;

  var _ref = serverEvent.data || {},
      conflict = _ref.conflict; // code是2的时候没有data数据


  var isCustomMsg = clientEvent.isCustomMsg;
  var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;

  if (serverEvent.code === 2) {
    // 初次连接或者重连
    params_vrChatStatus.canSendToServer = true;

    if (isCustomMsg) {
      if (!msg.data) {
        // 初次连接
        VRCHAT_CONFIG.DATA_EXCHANGER_CB && VRCHAT_CONFIG.DATA_EXCHANGER_CB(msg.data, serverEvent);
      }
    } else {
      if (!msg.sceneInfo) {
        // 初次连接
        operationStatus.seq = clientEvent.seq;
        sendToServer({
          operation: {
            type: 'upload-first-frame'
          },
          applyReleaseLock: true,
          frame: params_vrChatStatus.connectingSceneFrame
        });
        return;
      }
    }
  }

  if (conflict) {
    if (isCustomMsg) {
      if (clientEvent.seq !== 1) {
        if (VRCHAT_CONFIG.DATA_EXCHANGER_CONFLICT_UI) {
          VRCHAT_CONFIG.DATA_EXCHANGER_CONFLICT_UI();
        } else {
          showPeerIsOperatingDialog();
        }
      }
    } else {
      if (clientEvent.operationType !== 'upload-house-url' && clientEvent.operationType !== 'upload-first-frame') {
        showPeerIsOperatingDialog();
      }
    }
  }

  if (isCustomMsg) {
    operationStatus.customLastSenderClientId = clientEvent.lastSenderClientId;
    operationStatus.customSeq = clientEvent.seq;
    VRCHAT_CONFIG.DATA_EXCHANGER_CB && VRCHAT_CONFIG.DATA_EXCHANGER_CB(msg.data, serverEvent);
    return;
  } // if (operationStatus.lastSenderClientId === clientEvent.lastSenderClientId && operationStatus.seq === clientEvent.seq) {
  //   return // 冲突时可能会重复发送两次，愿操作数据和conflict是true的时候恢复场景的数据
  // }


  operationStatus.lastSenderClientId = clientEvent.lastSenderClientId;
  operationStatus.seq = clientEvent.seq;
  var payload = msg.sceneInfo.operation.payload;

  if (conflict || serverEvent.code === 2) {
    // 冲突或者重连
    console.log("==================", conflict, serverEvent.code, msg);
    console.log("+++++++++++++++++++++++", syncStatus.allHasInitialled, msg.sceneInfo.frame);

    if (serverEvent.code === 2) {
      // 初始化newHouseDataUrl，关键帧中会使用
      params_vrChatStatus.newHouseDataUrl = msg.sceneInfo.frame && msg.sceneInfo.frame.newHouseDataUrl;
    }

    if (syncStatus.allHasInitialled) {
      if (msg.sceneInfo.frame) {
        if (msg.sceneInfo.frame.pano2DCamera) {
          params_vrChatStatus.globalState.type = '2d';
        }
      }

      syncChatSceneStatus(msg.sceneInfo.frame);
      return;
    } else {
      // cancelReloadNewHouse()
      syncStatus.allHasInitialled = true;
      syncChatSceneStatus(msg.sceneInfo.frame);
    }
  }

  if (serverEvent.code === 2) {// vrChatStatus.globalState.modulePano.controls.enabled = true
  }

  dealManyToManySceneMessage(payload, msg.sceneInfo.frame); // 多对多payload是单条信息
}

function dealManyToManySceneMessage(msg, frame) {
  if (!msg) {
    return;
  }

  var VR_VIEWER = params_vrChatStatus.globalState;
  var modulePano = VR_VIEWER.modulePano,
      moduleStereo = VR_VIEWER.moduleStereo,
      isGuideFullScreen = VR_VIEWER.isGuideFullScreen;

  switch (msg.type) {
    case 'peer-is-chatting':
      console.log('对方正在通话中...');
      exitVrChatMode();
      return;

    case 'localEnvRejectSync':
      exitVrChatMode();
      params_vrChatStatus.globalState.moduleChat.changeIsShowSeeHouseDialog();
      return;

    case 'end-sync':
      exitVrChatMode();
      return;
    // case 'pano2d-camera-start':
    //   if (!syncStatus.allHasInitialled) return
    //   vrChatStatus.isChatSyncDisabled = true
    //   if (vrChatStatus.canOperateScene) {
    //     changePanoControlsEnabledStatus(false)
    //   }
    //   break
    // case 'pano2d-camera-end':
    //   if (!syncStatus.allHasInitialled) return
    //   vrChatStatus.isChatSyncDisabled = false
    //   if (vrChatStatus.canOperateScene) {
    //     changePanoControlsEnabledStatus(true)
    //   }
    //   break
    // case 'pano2d-camera-change':
    //   if (!syncStatus.allHasInitialled) return
    //   modulePano.syncVrChatPanoCameraAni.play({
    //     rotation: msg.data.pano2DCamera.rotation,
    //     fov: msg.data.pano2DCamera.fov,
    //     isStopOnCurrentStatus: true
    //   })
    //   break

    case 'pano2d-wheel':
    case 'pano-wheel':
      if (!syncStatus.allHasInitialled) return;
      modulePano.panoramaInZoom.stop();
      VR_VIEWER.modulePanoBtns.panoZoomAnimation.stop();

      if (msg.data.fov) {
        if (msg.data.fov !== modulePano.camera.fov) {
          modulePano.panoramaInZoom.play(msg.data.fov);
        }
      } else {
        VR_VIEWER.modulePanoBtns.panoZoomClick(msg.data.zoomBtnClicked, true);
      }

      break;

    case 'pano2d-camera-start':
    case 'pano-camera-start':
      // if (!syncStatus.allHasInitialled || isGuideFullScreen) return
      params_vrChatStatus.listener.dispatch('toDoCameraTransformStart', 'roomRender', {}, {
        origin: msg.data,
        isSync: true
      }); // vrChatStatus.isChatSyncDisabled = true
      // if (vrChatStatus.canOperateScene) {

      changePanoControlsEnabledStatus(false); // }

      break;

    case 'pano2d-camera-end':
    case 'pano-camera-end':
      // if (!syncStatus.allHasInitialled || isGuideFullScreen) return
      params_vrChatStatus.listener.dispatch('toDoCameraTransformEnd', 'roomRender', {}, {
        origin: msg.data,
        isSync: true
      }); // vrChatStatus.isChatSyncDisabled = false
      // if (vrChatStatus.canOperateScene) {

      changePanoControlsEnabledStatus(true); // }

      break;

    case 'pano2d-camera-change':
    case 'pano-camera-change':
      console.warn("listener.dispatch('toDoCameraTransform',\xA0'roomRender',\xA0{},\xA0{origin:\xA0".concat(JSON.stringify(msg.data), ",\xA0isSync:\xA0true, duration: 500})"));
      params_vrChatStatus.listener.dispatch('toDoCameraTransform', 'roomRender', {}, {
        origin: msg.data,
        isSync: true,
        duration: 500
      }); // if (!syncStatus.allHasInitialled || isGuideFullScreen) return
      // modulePano.syncVrChatPanoCameraAni.play({
      //   rotation: msg.data.panoCamera.rotation,
      //   fov: msg.data.panoCamera.fov,
      //   isStopOnCurrentStatus: true,
      //   onFinishedCallback: () => { // 动画结束的时候画标尺
      //     !IS_SHOW_RULER_BTN && modulePano.onCameraRotate()
      //   }
      // })

      break;

    case 'stereo-camera-start':
      // if (!syncStatus.allHasInitialled || !isGuideFullScreen) return
      params_vrChatStatus.isChatSyncDisabled = true;
      params_vrChatStatus.listener.dispatch('toDoCameraTransformStart', 'houseRender', {}, {
        origin: msg.data,
        isSync: true
      }); // if (vrChatStatus.canOperateScene) {
      // changeStereoControlsEnabledStatus(false)
      // }

      break;

    case 'stereo-camera-end':
      // if (!syncStatus.allHasInitialled || !isGuideFullScreen) return
      params_vrChatStatus.isChatSyncDisabled = false;
      params_vrChatStatus.listener.dispatch('toDoCameraTransformEnd', 'houseRender', {}, {
        origin: msg.data,
        isSync: true
      }); // if (vrChatStatus.canOperateScene) {
      // changeStereoControlsEnabledStatus(true)
      // }

      break;

    case 'stereo-camera-change':
      // if (!syncStatus.allHasInitialled || !isGuideFullScreen) return
      console.warn("listener.dispatch('toDoCameraTransform', 'houseRender', {}, {origin: ".concat(JSON.stringify(msg.data), ", isSync: true, duration: 500})"));
      params_vrChatStatus.listener.dispatch('toDoCameraTransform', 'houseRender', {}, {
        origin: msg.data,
        isSync: true,
        duration: 500,
        type: 'vrchat'
      });
      break;

    case 'change-hotspot':
      // 点击漫游点
      if (!syncStatus.allHasInitialled) return; // let { from } = msg.data

      params_vrChatStatus.listener.dispatch('toDoSetDataId', "".concat(params_vrChatStatus.globalState.type === '3d' ? 'roomModule' : 'room2DModule'), {}, {
        origin: msg.data,
        isSync: true
      });
      break;

    case 'change-current-fullscreen':
      console.log("change-current-fullscreen", params_vrChatStatus.isSceneOperatePlaying, params_vrChatStatus.isToHousePlaying);

      if (params_vrChatStatus.isToHousePlaying) {
        return;
      }

      if (params_vrChatStatus.isSceneOperatePlaying) {
        params_vrChatStatus.cacheFn = function () {
          toDoChangeModule(msg);
        };

        return;
      }

      if (!syncStatus.allHasInitialled) return; // console.log("change-current-fullscreen")

      toDoChangeModule(msg);
      break;

    case 'stereo-camera-zoom-in':
      // 3D户型图放大到一定程度的时候，进入全景
      // if (!syncStatus.allHasInitialled) return
      // isGuideFullScreen && (vrChatStatus.globalState.currentGuideTab === '3D') && triggerStereoCameraFlyZoomIn.call(vrChatStatus.globalState)
      break;

    case 'set-guide-tab':
      if (!syncStatus.allHasInitialled) return;
      console.warn("listener.dispatch('switchType',\xA0'houseModule',\xA0".concat(msg.data.type, ",\xA0{origin:\xA0").concat(JSON.stringify(msg.data), ",\xA0isSync:\xA0true})"));
      params_vrChatStatus.listener.dispatch('switchType', 'houseModule', msg.data.type, {
        origin: msg.data,
        isSync: true
      });
      break;

    case 'change-guide-floor':
      // 更改楼层
      if (!syncStatus.allHasInitialled) return;
      params_vrChatStatus.listener.dispatch('toDoChangeFloor', 'houseModule', {}, {
        origin: msg.data,
        isSync: true
      });
      break;

    default:
      return;
  }
}

function toDoChangeModule(msg) {
  params_vrChatStatus.listener.dispatch('toDoChangeModule', 'module', {}, {
    origin: msg.data && parseInt(msg.data),
    isSync: true
  });
}

function dealTalkingStatus(msg) {
  if (isChatOneToOne) return;
  params_vrChatStatus.msgWVRChatUpdateTalkingStatus = msg;
  var moduleChat = params_vrChatStatus.globalState.moduleChat;
  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.VR_CHAT_UPDATE_TALKING_STATUS_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.VR_CHAT_UPDATE_TALKING_STATUS_CB();
  console.log('msgClientID', msg.client_id, 'bClientID', params_vrChatStatus.bClientID, 'cClientID', params_vrChatStatus.cClientID, 'currentClientID', params_vrChatStatus.currentClientID);
  console.log('TalkingStatus', msg.client_id === params_vrChatStatus.currentClientID, params_vrChatStatus.isMute, msg.client_id === params_vrChatStatus.bClientID);

  if (msg.client_id === params_vrChatStatus.currentClientID && params_vrChatStatus.isMute === false) {
    // audience 声筒动画
    moduleChat.chatPanel.setTalkingAnimation(msg.is_talking);
  } else if (msg.client_id === params_vrChatStatus.bClientID) {
    // 被叫说话 加光圈
    moduleChat.chatPanel.setAgentTalking(msg.is_talking);
  } else {
    moduleChat.chatPanel.setTalkingAnimation(false);
    moduleChat.chatPanel.setAgentTalking(false);
  }
}

function dealAudienceInvite(msg) {
  if (isChatOneToOne) return;
  var moduleChat = params_vrChatStatus.globalState.moduleChat;
  params_vrChatStatus.msgWVRChatAudienceInvite = msg;
  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUDIENCE_INVITE_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUDIENCE_INVITE_CB(); // 业务取数据

  if (msg.invite_status === 0) {
    setAudienceParams(msg);
    params_vrChatStatus.aClientID = 'connecting';
    moduleChat.chatPanel.clearInviteNoAnswer();
    moduleChat.chatPanel.inviteCalling('connecting');
  } else if (msg.invite_status === 1) {
    // console.log(msg, '-----WVRChatAudienceInvite')
    params_vrChatStatus.aClientID = msg.invitee.client_id; // console.log(msg.invitee.client_id)

    moduleChat.chatPanel.removeTempMember('connecting');
    setAudienceParams(msg.invitee);
    moduleChat.chatPanel.inviteSucess(msg.invitee);
  } else {
    moduleChat.chatPanel.removeTempMember(params_vrChatStatus.aClientID);
    setAudienceParams(msg);
    moduleChat.chatPanel.inviteNoAnswer();
  }
}

function dealAudienceIn(msg) {
  if (isChatOneToOne) return;
  var moduleChat = params_vrChatStatus.globalState.moduleChat;
  params_vrChatStatus.msgWVRChatAudienceIn = msg;
  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUDIENCE_IN_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUDIENCE_IN_CB();
  setAudienceParams(msg);
  moduleChat.chatPanel.inviteSucess(msg);
}

function dealAudienceUpdate(msg) {
  if (isChatOneToOne) return;
  var moduleChat = params_vrChatStatus.globalState.moduleChat;
  params_vrChatStatus.msgWVRChatUpdateAudience = msg;
  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.UPDATE_AUDIENCE_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.UPDATE_AUDIENCE_CB();
  setAudienceParams(msg);

  if (document.getElementById('item_' + msg.client_id)) {
    moduleChat.chatPanel.inviteSucess(msg);
  }
}

function dealCalleeAccept(msg) {
  params_vrChatStatus.msgWVRChatCalleeAccept = msg;
  window.vrChatConnectorApi.outputNativeLog('outputLog', 'H5 WVRChatCalleeAcceptd'); // if ( msg.avatar &&  msg.avatar.length > 1) {
  //   document.getElementById('avatar-image').src = msg.avatar
  // }

  var moduleChat = params_vrChatStatus.globalState.moduleChat;

  if (params_vrChatStatus.isCustomer && params_vrChatStatus.accompany.playStatus > 0) {// 被叫接听是c在讲房中
    // vrChatStatus.accompany.pause()
    //moduleChat.stopAiVoiceBeforeChat()
    // moduleChat.miniCountdownPanel.beforeConnectedTranstion()
  } else {// moduleChat.countdownPanel.confirmTransition()
  }
}

function dealAudienceOut(msg) {
  if (isChatOneToOne) return;
  params_vrChatStatus.msgWVRChatAudienceOut = msg;
  window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUDIENCE_OUT_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUDIENCE_OUT_CB(msg.client_id);
  var moduleChat = params_vrChatStatus.globalState.moduleChat;
  moduleChat.chatPanel.removeTempMember(msg.client_id);
}

function dealChatMsgFromProtocol(msg) {
  params_vrChatStatus.agentIsTo = msg.sender_info && msg.sender_info.role === "customer" || msg.to_info && msg.to_info.role === "estate_agent" || params_vrChatStatus.agentIsTo;
  var agent = params_vrChatStatus.agentIsTo ? msg.to_info : msg.sender_info;
  var customer = params_vrChatStatus.agentIsTo ? msg.sender_info : msg.to_info;
  params_vrChatStatus.company = msg.company || params_vrChatStatus.company;
  params_vrChatStatus.selfType = msg.self_type || params_vrChatStatus.selfType;
  params_vrChatStatus.agentName = agent.name || params_vrChatStatus.agentName;
  params_vrChatStatus.agentAvatar = agent && agent.avatar ? agent.avatar : VRCHAT_AVATAR.VRCHAT_AVATAR_B;
  params_vrChatStatus.customerName = customer.name || params_vrChatStatus.customerName;
  params_vrChatStatus.customerAvatar = customer && customer.avatar ? customer.avatar : VRCHAT_AVATAR.VRCHAT_AVATAR_C;
  params_vrChatStatus.cClientID = customer.client_id || params_vrChatStatus.cClientID;
  params_vrChatStatus.bClientID = agent.client_id || params_vrChatStatus.bClientID;

  if (msg.to_info && msg.to_info.role || msg.sender_info && msg.sender_info.role) {
    params_vrChatStatus.role = (params_vrChatStatus.selfType === "sender" ? msg.sender_info.role : msg.to_info.role) || params_vrChatStatus.role;
    params_vrChatStatus.isCustomer = params_vrChatStatus.selfType === "sender" ? msg.sender_info.role === "customer" : msg.to_info.role === "customer";
    params_vrChatStatus.isEstateAgent = params_vrChatStatus.selfType === "to" ? msg.to_info.role === "estate_agent" : msg.sender_info.role === "estate_agent";
    params_vrChatStatus.isAudience = params_vrChatStatus.selfType === "audience";
  }
}

var peerIsOperatingTimeoutId = null;

function userValidSceneOperation(lastSceneOperationId) {
  if (vrChatStatus.isCustomer) {
    // 用户收到经纪人发送的场景切换时
    if (lastSceneOperationId >= serverOperation.lastSceneOperationId) {
      messageEnqueue({
        type: 'allow-scene-change'
      });
    } else {
      serverOperation.lastSceneOperation && messageEnqueue(serverOperation.lastSceneOperation);
      return false;
    }
  } else {
    chatSceneTimeout.clearTimeoutId();
  }

  resetIsChatSyncDisabled();
  return true;
}

function showPeerIsOperatingDialog() {
  params_vrChatStatus.onConflict && params_vrChatStatus.onConflict(); // vrChatStatus.globalState.moduleChat.dialog.changeSeeHouseDialogType(5)
  // if (peerIsOperatingTimeoutId) {
  //   clearTimeout(peerIsOperatingTimeoutId)
  //   peerIsOperatingTimeoutId = null
  // }
  // peerIsOperatingTimeoutId = setTimeout(() => {
  //   if (vrChatStatus.isShowSeeHouseDialog && vrChatStatus.seeHouseDialogType === 5) {
  //     vrChatStatus.globalState.moduleChat.dialog.hideSeeHouseDialog(5)
  //   }
  //   peerIsOperatingTimeoutId = null
  // }, 3000)
}
function syncStatusToAnother() {
  //   const vrChatStatusNewHouseUrlHost = (vrChatStatus.newHouseUrl.indexOf("?") != -1) ? vrChatStatus.newHouseUrl.substr(0, vrChatStatus.newHouseUrl.indexOf("?")) : vrChatStatus.newHouseUrl
  chat_messageEnqueue({
    type: 'sync-another-status',
    data: Object.assign({}, params_vrChatStatus.newHouseOptions, getSceneStatus(), {
      newHouseUrl: params_vrChatStatus.newHouseUrl,
      newHouseDataUrl: params_vrChatStatus.newHouseDataUrl,
      newHousePrefix: params_vrChatStatus.newHousePrefix,
      taskId: params_vrChatStatus.taskId
    })
  });
}

function dealOppositeVisibleStateMessage(oppositeVisible) {
  version_pageVisibleState.oppositeIsVisible = oppositeVisible;

  if (!version_pageVisibleState.isVisible) {
    // 本页面隐藏
    version_pageVisibleState.needSyncFromOpposite = true;
  }
}

function rejectOperation(lastOperationId, notShowTip) {
  var reject = false;

  if (params_vrChatStatus.isCustomer) {
    // 用户端正在操作，reject operation
    if (params_vrChatStatus.isChatSceneOperating) {
      reject = true;
    } else if (lastOperationId < params_serverOperation.lastOperationId && lastOperationId < params_serverOperation.lastAgentOperationId) {
      reject = true;
    }
  }

  if (reject) {
    !notShowTip && chat_messageEnqueue({
      type: 'peer-is-operating'
    });

    if (params_serverOperation.lastOperation) {
      chat_messageEnqueue(params_serverOperation.lastOperation);
    }
  }

  return reject;
}

function changePanoControlsEnabledStatus(enabled) {
  params_vrChatStatus.RENDERS.room.controls.enabled = enabled;
}

function changeStereoControlsEnabledStatus(enabled) {
  vrChatStatus.RENDERS.house.controls.enabled = enabled;
}

function hideRedPacket() {
  console.log("hideRedPacket");
  vrChatStatus.listener.dispatch('toDoRenderOut', 'marketing', null, this); //关闭锚点，广告等功能
}

function dealUpdateMuteState(mute) {
  params_vrChatStatus.isMute = mute;
  window.VRHOUSE_SPACE.chat.toDoChangeMute(mute);
}

/* harmony default export */ const receiveMessageFromNative = ({
  dealSwitchToVrChat: dealSwitchToVrChat,
  dealRequestRoomInfo: dealRequestRoomInfo,
  dealUpdateRoomInfo: dealUpdateRoomInfo,
  dealAudioConnected: dealAudioConnected,
  dealExit: dealExit,
  dealCreateRoom: dealCreateRoom,
  dealSceneInfo: dealSceneInfo,
  dealTalkingStatus: dealTalkingStatus,
  dealAudienceInvite: dealAudienceInvite,
  dealAudienceUpdate: dealAudienceUpdate,
  dealAudienceIn: dealAudienceIn,
  dealCalleeAccept: dealCalleeAccept,
  dealAudienceOut: dealAudienceOut,
  dealSyncMicrophone: dealSyncMicrophone,
  dealUpdateMuteState: dealUpdateMuteState
}); // window.onerror = function () {
//   window.vrChatConnectorApi && window.vrChatConnectorApi.outputNativeLog({ data: JSON.stringify(arguments)})
//   console.log('error hello world onerror', JSON.stringify(arguments))
// }
;// CONCATENATED MODULE: ./src/native-interface/helpers/recevieBackFromNative.js

/* harmony default export */ function recevieBackFromNative() {
  console.log('接收WVRBackEvent');

  if (vrChatStatus.accompany && vrChatStatus.accompany.aihouse && vrChatStatus.accompany.aihouse.Ai.isAiVoicePlaying) {
    if (vrChatStatus.isAccompanyVoice) {
      //陪看状态讲房退出
      var moduleChat = vrChatStatus.globalState.moduleChat;
      var ACCOMPANY_VOICE = vrChatStatus.defaultConfig.ACCOMPANY_VOICE;

      if (ACCOMPANY_VOICE && vrChatStatus.accompany.isCallingSeeHouse() && ACCOMPANY_VOICE.aiVoiceReback === 'call' // 用户自定义退出 且正在呼叫 退出到呼叫
      || !vrChatStatus.accompany.isCallingSeeHouse()) {
        // 拒接或超时
        window.AI_HOUSE.exit();
        console.log('返回JS自己消化');
      } else {
        //退出讲房弹带看弹框
        exitProxyFn();
      }
    } else {
      //正常讲房退出
      if (window.AI_HOUSE && window.AI_HOUSE.AI_VOICE_VERSION) {
        // 有讲房版本好的 支持js退出
        window.AI_HOUSE.exit();
      } else {
        exitProxyFn();
      }
    }
  } else {
    // 带看状态普通情况下（非陪看）
    exitProxyFn();
  }
}

function exitProxyFn() {
  var VRCHAT_CONFIG = vrChatStatus.defaultConfig;

  if (!vrChatStatus.isChatPage) {
    // 全景页是走WVRExit协议
    window.vrChatConnectorApi.wvrExit();
    return;
  }

  VRCHAT_CONFIG.BACK_EVENT_CB && VRCHAT_CONFIG.BACK_EVENT_CB(); // 带看状态下

  if (!VRCHAT_CONFIG.IS_HIDE_VR_CHAT_BACK_DIALOG) {
    // 走默认 有弹窗 WVRExit协议
    window.vrChatConnectorApi.wvrExit();
  }
}
;// CONCATENATED MODULE: ./src/native-interface/main.js



 // import { vrChatStatus } from '../const/params'
// import {startWS3Socket} from './miniprogramWs'

/*
import SyncVrChatPanoCamera from '../animation/syncVrChatPanoCamera'
import checkIsAnimationPlaying from '../animation/checkIsAnimationPlaying'
import bindPageVisibleHandler, { pageVisibleState } from './bindPageVisibleHandler'
import syncChatScene3DStatus from './syncChatScene3DStatus'
import { dealCacheReloadNewMessage } from './cacheMessages'
import { reloadNewHouse } from '../reloadResource'
import { setLastCacheScene } from './manyToMany/cacheMessages'
import { VRCHAT_ENV } from '../const/params'
*/
// if (window.location.href.indexOf('miniprogram') >= 0) {
//   startWS3Socket()
// }

var isFirstParams = {};

if (!window.vrChatConnectorConfig) {
  window.vrChatConnectorConfig = {};
}

var waitingConnectedUpdateRoomInfor = false;
Object.assign(window.vrChatConnectorConfig, {
  switchToVrChatCb: function switchToVrChatCb(msg) {
    console.log("switchToVrChatCb", vrChatStatus.domHasReady, msg);

    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealSwitchToVrChat', msg);
      return;
    }

    receiveMessageFromNative.dealSwitchToVrChat(msg);
    vrChatStatus.listener.dispatch('stateChange', 'chat', {
      previous: 'static',
      present: 'waiting',
      action: 'call'
    }, null);
  },
  requestRoomInfoCb: function requestRoomInfoCb(msg) {
    // console.log("requestRoomInfoCb", vrChatStatus.domHasReady, msg, isFirstParams.requestRoomInfo)
    vrChatStatus.roomInfo = msg;

    if (!isFirstParams.requestRoomInfo) {
      isFirstParams.requestRoomInfo = true;

      if (!vrChatStatus.domHasReady) {
        // 页面未domReady时把native发来的信息保存
        receiveMessageBeforeDomReady('dealRequestRoomInfo', msg);
      } else {
        receiveMessageFromNative.dealRequestRoomInfo(msg);
      }

      vrChatStatus.msgWVRChatRequestRoomInfo = msg;

      if (msg.scene === 'vr_chat' && msg.self_type === 'sender') {
        vrChatStatus.listener.dispatch('stateChange', 'chat', {
          previous: 'static',
          present: 'waiting',
          action: 'call'
        }, null);
      }
    }
  },
  updateRoomInfoCb: function updateRoomInfoCb(msg) {
    vrChatStatus.roomInfo = msg;

    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealUpdateRoomInfo', msg);
    } else {
      receiveMessageFromNative.dealUpdateRoomInfo(msg);
    }

    if (waitingConnectedUpdateRoomInfor) {
      vrChatStatus.listener.dispatch('stateChange', 'chat', {
        previous: 'permited',
        present: 'connected',
        action: 'answer'
      }, null);
      waitingConnectedUpdateRoomInfor = false;
    }
  },
  createRoomCb: function createRoomCb(msg) {
    // 创建房间返回的事件
    // 带看暂时用不到room_id 所以没存
    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealCreateRoom', msg);
    } else {
      receiveMessageFromNative.dealCreateRoom(msg);
    }

    vrChatStatus.msgWVRChatCreateRoom = msg;
  },
  calleeAcceptCb: function calleeAcceptCb(msg) {
    // 被叫点击接听返回的事件
    vrChatStatus.hasReceiveCalleeAccept = true;

    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealCalleeAccept', msg);
    } else {
      receiveMessageFromNative.dealCalleeAccept(msg);
    }

    vrChatStatus.listener.dispatch('stateChange', 'chat', {
      previous: 'waiting',
      present: 'permited',
      action: 'permit'
    }, null);
  },
  audioConnectedCb: function audioConnectedCb(msg) {
    // 音视频接通返回的事件
    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealAudioConnected', msg);
    } else {
      receiveMessageFromNative.dealAudioConnected(msg);
    }

    vrChatStatus.msgWVRChatVrAudioConnected = msg;

    if (msg.to_info && msg.to_info.id && msg.self_type === 'sender' || msg.self_type !== 'sender') {
      vrChatStatus.listener.dispatch('stateChange', 'chat', {
        previous: 'permited',
        present: 'connected',
        action: 'answer'
      }, null);
    } else {
      waitingConnectedUpdateRoomInfor = true;
      console.log('.........等待建房信息，转connected');
    }
  },
  sceneInfoCb: function sceneInfoCb(msg) {
    // 同步画面
    // console.log("sceneInfoCb", vrChatStatus.domHasReady, msg)
    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealSceneInfo', msg);
      return;
    }

    receiveMessageFromNative.dealSceneInfo(msg);
  },
  // backEventCb: msg => { // 接受natvie点击返回的事件
  //   recevieBackFromNative()
  //   setAiVoiceListenedModules(null)
  // },
  exitCb: function exitCb(msg) {
    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealExit', msg);
    } else {
      receiveMessageFromNative.dealExit(msg);
    }

    var status = msg.status;
    var action = '',
        previous = 'waiting';

    if (Number(status) === 2) {
      action = 'callerHangUp';
    } else if (Number(status) === 3) {
      action = 'answererHangUp';
    } else if (Number(status) === 4) {
      action = 'buzy';
    } else if (Number(status) === 5) {
      action = 'timeout';
    } else if (Number(status) === 7) {
      action = 'callerEndUp';
      previous = 'connected';
    } else if (Number(status) === 8) {
      action = 'answererEndUp';
      previous = 'connected';
    } else if (Number(status) === 9) {
      action = 'callFail';
    } else if (Number(status) === 10) {
      action = 'offline';
      previous = 'connected';
    }

    vrChatStatus.msgWVRChatVrExit = msg;
    vrChatStatus.listener.dispatch('stateChange', 'chat', {
      previous: previous,
      present: 'static',
      action: action,
      status: Number(status)
    }, null);
  },
  talkingStatusCb: function talkingStatusCb(msg) {
    receiveMessageFromNative.dealTalkingStatus(msg);
  },
  audienceInviteCb: function audienceInviteCb(msg) {
    receiveMessageFromNative.dealAudienceInvite(msg);
  },
  audienceInCb: function audienceInCb(msg) {
    receiveMessageFromNative.dealAudienceIn(msg);
  },
  audienceUpdateCb: function audienceUpdateCb(msg) {
    receiveMessageFromNative.dealAudienceUpdate(msg);
  },
  audienceOutCb: function audienceOutCb(msg) {
    receiveMessageFromNative.dealAudienceOut(msg);
  },
  syncMicrophoneCb: function syncMicrophoneCb(msg) {
    if (!vrChatStatus.domHasReady) {
      // 页面未domReady时把native发来的信息保存
      receiveMessageBeforeDomReady('dealSyncMicrophone', msg);
      return;
    }

    receiveMessageFromNative.dealSyncMicrophone(msg);
  },
  updateMuteState: function updateMuteState(msg) {
    receiveMessageFromNative.dealUpdateMuteState(msg);
  }
});

function receiveMessageBeforeDomReady(type, msg) {
  messagesBeforeDomReady.push({
    type: type,
    msg: msg
  });
  window.vrChatConnectorApi && window.vrChatConnectorApi.outputNativeLog('outputLog', 'js log: receiveMessageFromNative ' + type);
}
/************************end************************/
;// CONCATENATED MODULE: ./src/dom/Dom.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Dom = /*#__PURE__*/function () {
  function Dom(option) {
    _classCallCheck(this, Dom);

    this.STYLE_COLOR = window.VRHOUSE_CONFIG.STYLE_COLOR || StaticData.styleColor;
  }

  _createClass(Dom, [{
    key: "hide",
    value: function hide() {//
    }
  }, {
    key: "setStyle",
    value: function setStyle(dom, css, value) {
      if (!dom) return;
      dom.style[css] = value;
    }
  }]);

  return Dom;
}();

/* harmony default export */ const dom_Dom = (Dom);
;// CONCATENATED MODULE: ./src/utils/createDOM.js
function createDOM(tagName, id, className) {
  var dom = null;

  if (id) {
    dom = document.getElementById(id);
    dom && dom.parentNode.removeChild(dom);
  }

  dom = document.createElement(tagName);
  id && (dom.id = id);
  className && (dom.className = className);
  return dom;
}
;// CONCATENATED MODULE: ./src/utils/eventHandle.js
var eventHandle = {
  bind: function bind(obj, type, fn, i) {
    // obj目标对象,type事件类型,fn函数回调
    if (typeof obj.addEventListener !== 'undefined') {
      // W3C 标准
      obj.addEventListener(type, fn, i); // type事件名称,fn执行函数,false捕获
    } else if (typeof obj.attachEvent !== 'undefined') {
      // IE
      obj.attachEvent('on' + type, function () {
        fn.call(obj, window.event);
      });
    } else {
      obj['on' + type] = fn;
    }
  },
  unbind: function unbind(obj, type, fn, i) {
    if (typeof obj.removeEventListener !== 'undefined') {
      obj.removeEventListener(type, fn, i || false);
    } else if (typeof obj.detachEvent !== 'undefined') {
      obj.detachEvent('on' + type);
    } else {
      obj['on' + type] = null;
    }
  },
  on: function on(parentNode, eventName, selector, callback) {
    var stopPropagation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var noSelector = false;

    if (!callback) {
      noSelector = true;
      callback = selector;
    }

    if (typeof callback !== 'function') {
      return;
    }

    eventHandle.bind(parentNode, eventName, handler, true);

    function handler(_e) {
      var e = _e || window.event;
      var target = e.srcElement || e.target;

      if (noSelector || selector === '*') {
        callback && callback(e); // !!event.stopPropagation ?  event.stopPropagation() : event.cancelBubble = true;
      } else {
        findTarget(this, e, target, selector, callback);
      }
    }

    function hasClass(obj, sClass) {
      var re = new RegExp('\\b' + sClass + '\\b');
      return re.test(obj.className);
    }

    function findTarget(obj, event, target, selector, callback) {
      if (obj === target) {
        return;
      }

      var eventTarget, selectorTarget;

      if (selector.charAt(0) === '.') {
        if (!target.className) {
          return;
        }

        selectorTarget = selector.substring(1);

        if (hasClass(target, selectorTarget)) {
          eventTarget = selectorTarget;
        } else {
          eventTarget = target.className;
        }
      } else if (selector.charAt(0) === '#') {
        if (!target.id) {
          return;
        }

        eventTarget = target.id;
        selectorTarget = selector.substring(1);
      } else {
        eventTarget = target.nodeName.toLowerCase();
        selectorTarget = selector;
      }

      if (eventTarget === selectorTarget) {
        callback(target);
        stopPropagation && (event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true);
      } else {
        findTarget(obj, event, target.parentNode, selector, callback);
      }
    }

    return function unbind() {
      eventHandle.bind(parentNode, eventName, handler, true);
    };
  },
  stopDefault: function stopDefault(dom) {
    eventHandle.bind(dom, 'touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    }, false);
  } // stopBubbleAndDefault: function (e) { // 圈选专用
  //   try {
  //     e.stopImmediatePropagation()
  //   } catch (e) {
  //     alert('请使用版本更高的浏览器！')
  //   };
  //   if (e.stopPropagation) {
  //     e.stopPropagation()
  //   } else {
  //     e.cancelBubble = true
  //   };
  //   if (e.preventDefault) {
  //     e.preventDefault()
  //   } else {
  //     e.returnValue = false
  //   };
  // },
  // bindAll: function (eventArray) {
  //   for (var i = 0; i < eventArray.length; i++) {
  //     var _dom = eventArray[i].dom || document
  //     var _type = eventArray[i].type || 'click'
  //     var _func = eventArray[i].func
  //     if (!_func) break
  //     var _bubble = eventArray[i]['bubble'] || false
  //     this.bind(_dom, _type, _func, _bubble)
  //   }
  // }

};
/* harmony default export */ const utils_eventHandle = (eventHandle);
;// CONCATENATED MODULE: ./src/assets/assetsData/radar_users@3x.json
const radar_users_3x_namespaceObject = JSON.parse('{"v":"5.6.9","fr":25,"ip":0,"op":50,"w":240,"h":240,"nm":"radar_users@3x","ddd":0,"assets":[{"id":"image_0","w":240,"h":240,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAXHUlEQVR4nO2dW48l11mGn9WH6Tl4xuMTxnbiGWIbE2I7keMEIo5KQpQbEIrAEhJCXPBLuOECiUsk/gAXgIKEhCJFIkosFAIxRk6cgxPn5Dg+xMb22J6Znu7pLi6+Wuy1V3+ratU+7+73kUp71zpV1d711vetVesAQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEWG/Csk9A1NM0zQZwNtm2ga122wY228+N9nMb+48PgYN2u5l8P2z394D3gHeBd0MIBwu7KDEVEvAK0jTNNibQM+12rv08hf1nGzEpJkQwMcbtIPkeGIl8s922si0KPd4Pu8BVTNTvYMJ+K4SwO4/rFZMjAa8ATdNsAueBC+12hpGgUit5I/m8gQkY/P8xFL57YbllP9duZzGBx4fGu8CrwGvAqyGEvWFXKmaNBLwEWlf4lnY7j4klYIK8nmx7mHjz/6lvPw/ri+/aP9We30XgjvZzq417GxP0q5ig953jiDkiAS+IpmkCJtbbMCsbLexuu13DRAvTCzbfn2X6wEjMdwC3J3EvAy8APw4hHDpliBkjAc+ZpmnOArdiot3EXOJr7baLWd2hgl2mgPPvG5iI7wLuA04D+8CPge+FEF51yhIzQgKeA20j1AVMuLEOuYs1Cl1nsS5wTdqh6bv27wLeB9yDXft7wPcxMV9xjiumQAKeIU3T7GBu5dk2aB9rzb2WJZ3Wog7dn6WAa84VrGX7HuB+TNQAPwO+HkJ4xUkvJkACngFN05zB6oVnMJf4Gibc9H3qLC3q0P1Futfe/lngEvABYAd4BXg6hPCiU5YYgAQ8BW399gJW72swd/Eas6nXLkvA86yPbwKXgV/BfrOfY0L+gVOGqEACHkjbmnwGa1E+hTVKXWf2bvK6Crjmujcxi/yr2G/5JvB14PkQQuOkFwUk4AG0jVMXMTfwgFFL8iRuZV+a4yrg/NiXgA9insyrwL+FEF5DVCEBV5C8w42NU9ewnlApi67X5vurIOBpfoPLwEcwr+abwFMhhPw3FhkScA9ty/IF7H3nHvV1XC9s3QQ8z/qwF3cKeAx4CPudvxxC+JZTpmiRgAu0/ZNvwW6qA6yeW2pVLoUt0m1eRQFPKvjbgY9hr+R+CnwxhPCGk/bEIwFntO7yDtb/t2E0gACWb3VXKW5o3knKewhzq7eBr2FutRq5EiTghHaQQRy2d5PxET+RebuRk4pk1QU86e+0g1njS1hHkM+HEN5z8p5IJOCW1mWOo4Ju4I8CoiLsuAp4We505AHg1zBv6F9CCC846U8cJ17Arct8itGg9jjAIDILVzAPm4do5yHERdWVa9NcBH4H62P+H8CXTrpLfaIF3Ir3NNax4ADru5xT+o2G3MA1aaYV4zwFPM96/NA0W8DHsfrxS8A/hRDeKaQ/9pxYAbf13dPtbpwnCiZzm72wedUf5yngUty8BTzJA/BB4BPYQ/cfQwg/dPIce06kgFvxbre7B/S7zF74tFZ3WW7zPPPMY78r7Fbgk9h7+n8OIXzDSXesOXECbsW7xfiEcLOyCrOysrVpV03A86j79uU5BXwGuBv4Qgjhq076Y8uJEnAr3s12N586dR4316wEPq3oVlXAsxA42AP5k9jY46dCCF900hxLToSA28aquJVaLZdR9122gBd1LjX7k+aJ4QH4LeCXgf/GXOpj30K91Z9kvWnF+/+71NV3O4ucMN/QsmZ5nGmoPYeudLOytF1lN8BT2GvAJ4BzTdP8/XGfpH6jP8l6kzyFc/HmePF9eWrK8cocyqItySxEO+vj14Z9HfhP4EPAX7QddI4tx17AYCIuuFO1YX1p+rpb9j04hhx7SLpZ0+Uil9L1xQUnbEh5XrpvAl/GpvD508wLO1Yc2wvzKPyRk4bNqwV6aLrAaF2kTeyhvJF8j/X+uNQKjFZ72C+U5x2z9vqm+R0mTVNK9yjwm9hEev9QKGetOfZ14JQQQuOI2FuepFT/TMPzNH37pXK6yNOdYtTt81SypVYsuowbSXi+bSRp9jAhx+Va4iTzVJ7jkHSzKqu2vvwcNiT0Y03TXA0h/OtUZ7aCnCgBw6hOXOFW5cIuuduTirb0MEi/b2Ojo3YYdfmMHGDii7NfxgXNaD/je+7AyBqnVnqrLTNu5xlZ70NGi5u9S/d8X9M2XnXF1YaVygtYffgs8Kmmad4NITxVmX8tOHEC7mDSVt9aYdYSxyLvML4K4VVMsN56SSXXOuaNAt/vSRvXQTrfbve1cYeYkP8XWw+pxLSvkfrih4Sl1/YVTMSfa5rmvRDCMz3HXhtOVB04p7JOPOv6sBcXreFZzEI2+KsQpvlrBTxN2lNYN8Xz2CwZ29jD403gdcwyT1J/79ufpXhh5HH8PvALwN+FEJ538q4dJ1rAEUfIfTdLbBiapGEq3T+NWbzNNmwfm7rnRkf+WgHOMj+YCC4Cd2JT3YT2XF/D5nfu+j2mFes04k3r/jvA57Df/a9CCF3exFogATNV6/SkViUu3B3rm7t0z3K5bAHn17WFCflurJFoH1uZ8DVGi4qnzMoy94V1iTfuXwSexGb3+Jt1X0VRAm6ZwAoP3Y8W4AxmcW9iFuxmRf5JxFhjVWfxALiILWZ2Eatnv4TN71waKDJEzEPSeG4zTngAHgY+jc1B/XmnvLVBAs6oEPIkVje2Jkfh7lK3btI8BTzr+AvA+zH3eh/4EeZaU8jTVZ633xXmibfv9/gUtsTL34YQnnPKXQsk4IwJGra64uIkeXFd4F1Gr3pK5cxKZLMqe6glP4/NX3UrcAVbWtR7rzwrV9q77i7rGz+3MFd6B/jLdV36VAJ2mIE7HRh1soBRZwkvXdf3SdzgWQh4Fh7BvVhXxi3Mrf4JdW51zX4MC9n3wNHzKZ1zwFrWnwReBP56HevDEnCBKSxxwFo5N7Ab9oYTX1PG0PgaQU6ab9Lv25iI78O8j+ewziEU8tTsx7A+AZeEDONjAD6I1Ye/sI714RMxmGESKseS5gMRNhktNRpfB3XlqSl3XfCEtg98D3gGu9eewBq8SnkmEW/uLntpUzayuOcxN/+zTdPc55Sx0kjAHTgi7hLWNqOODnlddxrmIeZpPK+uemwp/ArwX8BbWAvwoxztBTjUbYbxPt1pvFdWV9343zFv6c+cY640EnAPBRHnljfOKR27OqZxXr7SEMI+sXr5Z0XJxa8Jq/l+E3gWeAHrDfUJ7B1y17nkYSVXuS+stIFpYBdbuuWhpml+u3BOK4kEXEGHOx0YTZC3z9F5tqAstj7hrosbXSPelJ9gU95sYEum3N6RNi0rF90GR0Wbf4aedOn9/xzW1/vJpmlOsyZIwJUURBx/v33GXeYu13uVZuSocaX7Gr6GHicwcqn3gI9iFrl0Tl0NUH3iLcWn74lTvoR5BX9SuI6VQwIeQCbiwGhgfGTo9DmesCeZwmeSfCl9rc7efk15Xfl2gaexUU6PY51ASuLNLWnXlltnL750jDeAbwG/2zTNAwOud2lIwAPJ5tiK4249aqfR6YqfpoxF0CfUrodAbDN4GhPOI8AvZfG5Fc0bq+j5zN3u/Pjew+Fr2NuDP1+HqXgk4AloRTxUuJMIfdnU3sA1FreU5gB7zfQq1rUxWuJcfGneLrHmLnfJ6pbKugF8FXuYrHyDlgQ8IZk73TUTZU1LtJc2D5tnC3ROn+X0Pmu/5+UG7JqexRqRHgPu4ahlTF3jNG+aLneda61uvj2P1dP/oHDeK4MEPAU974lrGq76XivVMktRd1ndSRuxast/BhPO41jrNHSLMMbn5dZYXc9ipw+Up4F7m6b5RO8VLREJeEoGzP4/aeOUFzYLwU7iHnfFTWOJI4fYK6Zr2GLeFzgqrvS714Gj1uqWriXGfw9rYPvDnnNeKhLwDOhwp0t15b7W51q3eWirdxclt9mbtbOmHK8uihOXu8c3Met3iL0n3mZchPmWu9n5MfpapUuWuMEeJpebpnm88toXjgQ8I3os8bQ9sLrKHEpX/XZI+q56cVcZJSHD6H68gbnT54APUxZs6kZ7x+hrte4L+y7Wp/2PC9e1dCTgGeJY4hIlyzrrRqxpXe0aqzuL+rA3AP9tTED3Yi3CJWvZ9V4Xhgk2z38I/A/WxfKxwVe3ACTgGdMh4lp3eKhQ51Ef7rO6XXXIPF3pu9dinLu7P8LeET+KTdnjpaejHM917uvkkdejv4F1Ovkj55qXjgQ8BypEnH6fR2eN2nxD3Om+hp+adPF77jZ79eW4/yzW4eMJrD4c8+Rle6+Z8rK6HiZen+mAvad+FnhkFYcbSsBzolLEJfpc63kOfuiztrUi76sP1zQsbWD9zJ/B+ig/TFm8Xefe5yp3PWAAvt2GfaZwTUtDAp4jA+vE6ZbH1ZQxJI3H0Ppul9D73Ob4uclRwXpu7tvYNLAPYEL2XO7SpydYz1X20sbyr2LTAv1G7y+0YCTgOVMQcd9rJpzwGqu7gc3DFVd5OIfd8Ofa/dP0D6RPw/qs8BC32hNQHteV9ttYo9JHCulK552XVRJ2qcwY/l3grqZpPuxc89LQ2kgLIFsVscFuiPhJ9t3bx4lrGF+tcItxy+J9TwURF0fbw16V9F7GhHExPh47D+sST5p+D/gOJuD7MYuMU0Z+Tl5Z3jl7rnO6/31sKtrfw+rEK4EEvCA6ljbtEm4u9obR0qJxTeAoxjiNzwHjFj51VbeSvDuYdY6C3sVcxVzMfTd6n1udPzg8geYWuST0F7FXSo9gc057c2uXLHvNteRp0vM4AH4AfLxpmu0Qwj4rgFzo5VDT6yr/3GLkBm9gFuk9bJ6puAToDawnUz7MMS7uHZcjvYItTvZTTAhX23LvBi5hr2xKLboeJTe2JN6uuJJ44/bN9lw/kKQpvZLy3OS83NK+p43vYP/ByoxSkoAXSAihycYT53hxm9jk8Ntt+HVMuLuMTyZQKrOPXWwU0IvY2kb72OoKl7HJ2Uv0Wa8a8XqioxAfw+PD50HGPcga4YJfB87L8B5UAXvgXcWmoV0JJOAl4IjYG2YYGNVt46oO1+ieAaT30B37AXs4vNxue4ws8g5lUXiWt6tFOIpsM4snS7PJuCDTMr6PWeHLjC9a3vdw8I6Tt2bnv0/+EHkBeLRpmjOsABLw8vFEGBhZlz38aWon7UtdcoNTdhmtNriNifhWJ2/JbY4CLLmptVa3tL2FeQ0Pt8dJ8+OU55XfZWk9dzqG/bg95hNO3oUjAS+JgjvdMLqpD7E67WGWJv9eChvSG8uzqADvYN0Zd7E+yXczfmPn6UsiKVniNF/p3Wz+GdO8gFUt8rm0vDI8Eed0PQDS7WXst/2oU8bCUSv0kklapxvsyd4wanSK4TC6ubyW6fTG63oFNXbojv30Zm6wut/d2JrAZ7BODek6wLlFLQm5JFw4Kq6S5Yy8gdWHH2zPz3sIlcTqXa/36aU/wKb/eaRQ7kKRBV4tYl24NL/0rMb/dt3UpRv7dcz6nMN6RO1kefJ6aEnIOGlqG7ry7UXMtb+YlVuytH3ucZcVTvdfAt7fNM35/AdcNBLwCpC40/nrn9phh5OOZCpZnJLA38HqgFvAZcYbmmK+dIvxm06akmjzNF2DHaI7eymJ7xsc4Z1nn5ud7/+0Pc6vs2Qk4BUime3Sa5XuCk8/Bx+249O7mXcxy7fDaJxu3mqcWuO0kSlP5/UY2+RoC3RJ0Dex99j3M/6QIMuTl1963dTn/sftFcxLWvpMHRLwatNngWc1AiniWWSvPrmL3cQXsEYkz3XOrW7plVCfRe6K28Cs4Q62ukNNPjqOk/8WJavdYF05l14PloBXjMSd9kTaNfhh8KEou9Bk4d7NfQV7lXMn1vEjd5ljulLDViqyTcYFR0/6NN3Psc4nl9r93LLXusq17nQM/xlwX9M0d+Y/2iJRK/SK0rZOHwluP/tE3CVIz7LkcaX41LoG7D3xLZgLu89oZcZcjH3vevPj4OT1ri/mfw1bRHzTSePtd8WVjpPzSvv5IeArhfxzRxZ4fSiNF+5K24XnHubxnnjz+mscFXS/kzbP51nk9Fi5lfXqtF4Zb2AdTi72lNtnXUvle7zVxl0uxC8ECXiFcdxp8BuzasTq3Yhd9bw0LH56r4oOMWt0DriLo+6w5yqXhNLXglxyjd9ow+9y4oaItkuwef5rmNdxf0f6uSMXeg3I3OnUjS71zkrThOQzxnUJN0+Xtyp7ddZ3sIat+7CRUU2WPz2nUkeO/Ny988zjI/vYIIO7gR86eUr5StSIGMwKv6+ivLkhC7xelF4l9VG6efsss/eap/T65zVsrPGdTl7Pynkusld+fj4l6/oGZoG9lu8u61pjrUvndAVbx2lpSMBrgtN3uuRK14i6y/qWbtz0Ha0Xfx1zK3+R8dlBSg+CVAg1Lcd9InsdqwffkZXvXXufK11zHmAW+LamaU4XjjV3JOA1I4QQe2ulm9eDqzTKKb/50+/pTbyVbXEGkDRuM9m2gDexYX63Mu56e0MDN5My+iy9V1fOO4S808ZdKFxTKBxjSMeRfHuzPdZDzm+9ECTg9aU0ImlIo1bpJk9v6ii0wNGbPbfKV7GHyZ34osjr056warwBrypwvb3u8z358mN0/S59vN2me7Ai7VxQI9YaEl3p7EVxPmopDUvDPaub7kf3d4NxVzhvuPLEBlYvvAvr8B+HR5aOn5+v59J6eOHxAXLBOWZN/i5K6a+0cZcK8XNHAl5jQgiH7VDE+Dpng3ErXLIwpVc8qVvb1Wc5fsLRzhPvYQ07t2FubQz3PtNzci8x288bvXKuMXLfJ2Fovjiz5+19CeeFBHw8SF8XldznksWN1jVa2/iZusaeK5yXF8OuM6qLvktZvN7DxduvTQ/28LiX0W/RZWlrrXBfun1sorulIAGvObGjRzbvdF4X9kSbijFaXc/6ljpmpGFp2WAivsCou2Gfu5znrxGrx9X2nG7BxNyXb6gr7eXZQwIW0xJCOGiaJq37RStEFpZa1NiavMN4g1WX21yy4jByQW9grmzqXpfc3yEi6mtc2muPeRpzp/vKGoqX5yYSsJgR8ZVSrAtHvBbZU9jNvt1uecNVKtZohdOyctGShO215ZxhNMAhjc+ptbh9ooszmWxXpC2VFx8Ap7Hz97Y07mH8GVQWggR8jEi6XMb5qnJxpYKMws3f8Xa1NuN8JzlO3N9vw86038dOE184kwoORqK7gA1oeBBrSIsT4XcJMN9OVZxHzo0J8swECfiY0Yo4WoRUaNE93sFu1B2OdsYodVyAo/XdI4dOwg/b8nYYd6PTvFF0Z53PM1mYJ8A0LhfdZ53zmydL608hAR9DWhHHdZJgZFnPYTf9DnbTl1zmvIGK9vs2I9FEoXnbOWxgw01GljgX4CSWblWRgMVsad8Rx6lqb8d6R70fczNvxXosxSVI4/KjZ5zP9Pv2Yq9ibViagCdpiRNrRPt6yWtwiszrHohLwuQrSsybHczyL6phaRvYDiFcWdDxhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEELPl/wDhrKcjC215SAAAAABJRU5ErkJggg==","e":1},{"id":"image_1","w":60,"h":60,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_2","w":60,"h":60,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAWhElEQVRogc2be4yd5Z3fP8/zvO97LjPnzIzn5jEGbMAMNmRJSrqExGzwot3lTkOiaEO2u/SfZLVdbSpxqao2ldr8B4nU/zZVEm1AWpCaTaSyacJ2m0DAqQuswyUEY2yTGBt7Lp45M3Nu7+W59I/3fc95z5mxUwci9ZFG57y38z7f3/02gt/Scs5Vl5ZW9yvlbrCWeRDzwHagJgS19B6aQBNYAI5K6Y4KIQ5v27btoBCi89vYl/ggf6zZbM6EYXy/c/Y+57gRCM77YiFwzg0cC9HbTuycfVEI+b1yOXiyVqstfVB7/EAALy01fk8I8zCI26y1HjigDyD9SAH2QQrS+7IjMbiV/D4hhBaCZ5xTj83MTDz/fvf6vgA3Go0D1rr/bIzdX9wkUADbf0V+vf9pC9dFj+tbcT/7dlAI+eXp6YnnftM9/0aA2+32XBhGX3POfS7lGhmArTk2CMIN3Jdez6Vgiw0KgRBy+NxTUH5wenrk7MXu/aIBr66u3u4cTznnxtLNbg04O7Pp+aJY978Pq8BWnwM6jhBiXSnxuW3btv3wYvZ/UYBXVlYeBPGoc65H8kHAtgAm51p+Pf1M77e9Z61NAQ+CkQjRN2Tpcf+zANpKySOTk5Nf+0ABO+dKq6ur/9U5/qx/rg/YWkuRmzmoPtAcGEgp+884h8NhjEUIsNYhBCjl5b+ElDL7U0gpN4l4eszjk5PbviiEiN434GazOR3HyX93zt00SIS+SPY5BmB7AK21mf6CUoowDGk0GrTbHU6fOoWUkiiMuPqaq6nXxjh27G1mZ2aJdcL01BTlSgUh6AFWSqGUJBVvSdGVCSEOlUr+vbVabfk3BpxytvHsMFhr+7pX1Nucc/mfcxYpJWtr67x15Ajr6+t85799h06ny7aJCRxw7twyH/3oR9mxYwetdhspBS+9+BJ79uzhL/7yX1Mul1FK9Sy653lIqRBCIGUOPoUhpTi0bdvEgQtx+oKAV1ZWvl0U40Gw9Dibg3UuB+uw1iClZGNjg29941t89+++S7VaIY4TOt0OQclHokA4SqUySaKp1UZJkoSN9Q2q1Qqf+vR9SKmYn5/n+uuvpz5Wx/NUj9upiMuCrgPw+NTU5AMXDXhlZeVBa/mqcw4pRQaKTF8h526R07ko59x45Wev8sQTT/Czw4cJwwhrDb7no40hikMCz8chUErSDbuUSiW0NoBAKYXvKUZGRhgbG+O2227n/s/fT1AKUEqilIfnKYRQKRAhkFLktuWh6emtDZm31cnV1dXbreXRom4OuhzXE99hy5w/02is8c1vfJMjR44QxTHdsE2SJEilkEJirSGOI0pBmcSkxsloS6KT9DcSSFTA+Ng41eoI89fM0+12EVLgnJd5AYHnCSA1YrlhFEI8urS0+ubMzGaXJYdPtNvtOWt5ylorc93YHCj0jVXulnLuO+dwwPPP/YQjR95kba1Bs7VBHMdYazFak8QRxhistURJRBzHGGOIkghrNNbalCjOsNHawFOKo2+9xf/4/vc58uabAGitMUb33NrQ/qQQ7qnl5fbcr+VwFkGNDYd3Re5utXLXJKXk5Ml3efrpp2k2m8RJjDUGYyxOgMgety51S9I5pBBoB9aaVMekTG2B0TRbgqPHjnH8xHGEE1x19R4e/rcPc9VVV2GMQSmbGa+hXTo3JkT4NeD+4vkBHW40GrdobZ8tcnEzl/vibK0Zck8Oz1P8z2f+kccee5SVlRU6nTZRHDM9Xmd+5xyz4zV8KTjX6vDu0irrnS7NKCHRGpxF5BFL/v7M9wZ+idHRUcrlMtdeu49/9+//A1NTk3ieRxAEm4KSHkChDhRj7wEOW+u+cmGwKY1SUe5b6P59Fq01R44cod1uE0Zdojjihj27+fytH+fyHbM4kyARxFHEyto67y2u8MulFd5ZXuO9tRar7Q7WGkyS9AJsISUWS6fbRQrBieMneP211/j9W2/tuUClZDHDKnDafgW4eRPgRqPxSa3t/guD7YeH/R/th45CSlobTY4dP0a9PkasDZ/YdxVfuOcPmJmdScXJaJQfkHRajI1WmZmos+eyOU4unOMfXj1KKzZEURfpeT0RdNZihUCjCaMYr9Plhz/4AXv3XsMlOy/NiO/IBXZof/uXlxufnJ6e+AkUjJYx7qEiwMHcFfrXimFkzw30QEdxTBh2ueLKK9m9fYoH7vh9Lt21i9JoHd/38YIyQikQCs/3GalUGK+NEpR8wFHxfZTn43k+gV9CKQ+VgXfOgUg/zy4s8Pbbx3pZVj8J2WqZh/JvEtJKhRDcVtTTwYf7Fjm1in0RHiCIdfi+z+hojY1mk4/N7+ayS3Yg/RJCCoTywBl0q4lLIgQiFUlnCaOE2FjqFZ+RcplKUMH3fJT0SHMlmaWYABZrLFEcDYAdTkwKxYbbms3mTA9wHMf3G2O9wQS9KLJuS473gFuLIyVGtTrC5NQkpr3BHQc+QW12B97IKEF1FDlSI/TKnOsmLK5tEEYh1hiUEGzfNs7uqTHKnmCk5FMJfKRM/bXLXiWQpJ7AQymJ7/kF1SsQPgNdUEsvDOP7IdNha7lvAMaWVYoBXg7G0LieVQXBLbccYOn0ac6sNZm9zMcvV1g48x5vHDnK2sYGcRQTtVtcNTnC3EQdKaA+WuFDu3ey0gwxtotRICQkOsHqON2AFHjKww98KpUqExMThcJBkUn944I+3wf8F885Vz13bvXGYUs8CNYhxKBuF/PgQVJYdu26nI9cO481hs7aKvXpWXxh2bfrEkrlK4hjzcriAj4O6RKSMMRax8zEGHOTY4TWESUxFkjKZVpdhzEJAlAyTSBGRkcYHx8nDX1lgbMy82q5vekR4UbnXNVbXV3db60Ncs4OKr9jWJ+LuW3+kkEiOOq1Gp/8yD5WFheQShC3m7hOG88anv77H+PXJrh6ps7MxDhKBSRhhKckge8xWinhex7WWio2IfEUkfKz6EvgZQZtdHSESrUCiCyPzqsmKeg+o1LA1tpgdXV1v+ecu2EznzaLcrFqUbynd1/h2Uq1ynuLy/zi1TeY2nYzptuhubLMyMQ2brz+WsojI6BjypUKSkhMWEJEjjCCQKYRF4gsG9I4AUoqfN/DU6l1r9fHqY2OkouutTYrLqTV0KLbLEjsDZ61Yn7YIg+CHoywBvPfAnf7gTvGOq69Zp6rp+uoyghxu8XI+ATVsXH2zM5hs+Bbd1qE6w2UUgipSIwF6/CFI7KGiWoJKQQl3+fsWivNrDyFpxRzc9splyuFPeb6mu9NFETbZVxm3nPOzReDjOGEPhfz4WtporA5sQCBSyKUkniTsyTtdaLWBsZo/MoIqlRFOoMzCToJsAiMg8Q6EmsJfMVEtcyeuRpzE/U0SbCWX613+IfXjiOVx+joKHv37UNm0VUeShf3MijaNisLiXmPtP2xxRp0TUVx7kc2xbTQ5XixOsE5MFqzur6BUB4bS4sQVNh+5TxOO0yUYOKYRBtirYmSGCE9to2PMzo6wty2CeJE01hfpxaUuTwo46vUIF1y6SVcccUVWOuyHNgVfPRgSXgwInTbJVDbOivqdwby9G8rKci5PfCkgCTscvroL3jl5Z9x4vg7dNodPCnAaLAW3e0SdbsYnRBHMbG2aCeojY0xNzNNvVZludHg9MoG1+y5gqVmB20dpVKJ6669jnq9loPoxdPDxN9CWmuelKKWVymG/ViqA3aIu5vd01bCEQQBtYltfGhfiSSOIQkJgjI6DnHWksRxCtZYEgTapoRSUlHy0uJeO4yo+ZL1Zos3T57F9zzGJyb48IevH9hrmmA5iiqYcnY4L7A1r+hihjl8vnx4kHIDFARABiW0TmivLtNcW0cFJXCOswtnuTTwEEJikhhtHQ6B9AKUjNOsKCvVWuCfX3cNPpZfvHeOE4vnqI3WOHDgAJfs3JnlwqpP4Z5EiqEEZzAU9oAmuMlhESiCy0/nhip/hSsU9HqUBaTvYxC8+vO3KI2MsLG+wfLyMh+6di+XbN+O1ppOp5tuRYC1GucsNlOdZqvD9NQktXLAPx05zuM/+RnGwuf/5Z9w7733kKfMZOFsrsfZLhEiTxVzF9UD3fSEEE1r3eRwN28ri93X6czMb9KVnDiKoDLKNVfuotNqMlUtse+Ky5javj2tSq416EYJpXJAFIbEYUhsSYsAOsFozcnTZ1hrtfmb5w6z1on41N138+nPfAbP87aIBSgQvdin6nM8O9f0SJvRu4pWbrOY9FdWjNhiDewCf2wb49PTaKMZn5xitF7D8wNa6+vosItEEHZDojgh0ZYwDImiGIXFExIpBG+cXKDR7PLPPnI9X/jzL+D5PkZrpFSDb84AZfB63B0GLgQLHnBUCPmx4qa34u6w5ducTPS/C2cRpSr1yWnKlQqe52GyopsgMzDaEEYx7W5Iu92h2W5jTELFDwgqZdqh5sh7y+y6/DIefvgRZjPpGNxDMU6gVx4qns+Bp+fkUQ/c0UFqncfyFq4PEic9SnWxLwEOQTcxaCfptto4nZAkCesrq0RxmBYKopj1Zpv1VgtrDCOlgMroKJVqhZPLDZwf8Fdf+iv2XbePKOo3E/JG26BxogDQDX0X2TMc9ZwTh4fF9uLW5mcdDuEHLDe7LPzyGHGc4JKY9sZar1ybVyW7YYQ2jmrgUymXGB2pUvJ9quOT/MWX7uKWA7cQx/FF7mdzMS8jzmHhnKsuLa00wAXF2LjofoqOvf/Zt+CDzbT0hVJJmo1VfvrDp3nj0PPEWQEu8BS1SonA9zHOohONrzzGx2rUR0eoVsrgDFPX/S5X7v9DTBJvEmEhZK+TmHdFlFI9nR1uwWT3xHNzcxOeEKKztLT8onP9yt6gtS7ozADFXAFg8VzqJqyxjE1Ocfv9/4odVY8Tb7yG1gbhqZT+zqITA2VHtVKhNjpCyfeQUiCcYrQ+jj2vel2MRPY4/qIQouMBCCG/55zpAR4uwve+b2mwhgmTRzdgtAFr2H3VlUxWA+I4JgpDNhqrdMMQYx2+pwiCACVF6tdxKAEmic/nDoaB9PY42CzvYwGQUn4PshJPuRw82el0H8uPh6l6XgIUmt2Dxs71xM4mEQJHfXoGISXNlXPoqIsQ4HmKwA8QSmGModPtkiSGshLoZiMNKArZ2jCBB+vuxYhqYPeA0MCTkOVPtVptyTmeOT81B9PHC1lxpRRB4KO1ZvncOY6++jIqM5FeqYxXKmEc+OUK5cooQbmCUn4vQRGAVIrO0mnOnfwl3W44ROScCf1z+QxI8dpgEZJntm/fvgSFQryUPGYtdw0DHSzhbM6a8j8hBEEQsLiwwLPPPsvBgz/Fhm3+8tN/hJq4Im2ctZqsLi3jhKJcCvA9hUBgXIIBpBT4gYcnJb6O+NHffoM3WpKHH3mIer3e88MXWpsrHQIh3GP59R7gmZmZ5xcXlw46x/7+43k9Om9y2wEOp2IlCQKF1pr/c+gQ3/rmNzl27Bitdoebf2eendtn0oRAKZxzeJ5HfXyMcqmEcy5NEW1aZ1ZKEUhBIATGWg4fPcGLJ85QLgfcc8897N23b0CUhwZcBoA7B1KCEBzcsWNHb6BtoLckpfiPzrkfO9fnbH+EwWX3KMChtSYMQ86cOcPbbx/j5Zde4uUXXySMI5x1SOVRHxnJYl+HVAq/WmFydjY1SECcNcm1sQgp8L0KlUBhwi7fPfg6z77xDuVSiR/9rx/x+muv8aUv/Rs+/olPoLM2aZ4sbTUEVyDEl4vHA4Cnp6efXVxcfArSgbOco/mPNRprnPzVL3n33VOcOXOGM2fOcurdU5x+7zTtZpNSqZRN5RgkcHrpHN0wpFLzwQmk9PHKFYSSYC1hp40xFk+pNNgIPFYbqzz54xf5x9ffRkqJ1mkfeWl5ma9//eucXVjgzrvuTN/lLM6pPIraCuxTc3Nzzw2cG75peXl5Lkn0Ea31mLUakKysrHDwhRd45ZVXWVhYYGOjSbvVQmvNxsY67U6HcqmEFBKTjSNpaxE4Hv6TT3HvHX9AnGjI0jZnLSbq0F5rELU7OJPQDSNeO36Sv3v+JY6ePYfvKaRIpcnYhEqpSrlUol4f44477+Cuu+5kZnY2mwLojzTlzJFSrpfL5b3T09NnLwgY4OzZs7fHcfx9QL5z4h2+/e0neOvIEcIoJOqG6CRBW0MYhTRbTUpBhcD3sc5hrEUC2hgcgqn6CI888Blu/tjv4pVKCGTaS2qus7K4wMlTp/n5sXd44Y3jvHV6EWPB97wsT7NZruwol6qUgwApJaO1GlfPX829997DTR+/qTDkkkdWyoK669JL5zaNPJx3qOXdd9998PXXf/7Vr//1X3Pi+DskcUQYRsSJxvMU2mharQ2U8gmCcrrBXPylwFiDQOJwlH2Pj+7dw1W7LqUUeDQ22pxeWOC9hUXOnFuj2e0ipMJXHlIILLk7yFVK4HkBnlJp6un71Ot1du7cyd333s2tt97K2FgdYwwASqmHdu7cueVQywXHlv70Tx/49v8+ePDPrDHEcUI7DBGkHGh30wwnCKq9YTHrNEKodITBGJRM81pjLWGWNAiycQdAKg/fS0Gm4GA4H3fOIsim8ZSHsw7Pk1TLZUZrNaamprnxphu5+6672H3FbpwTj+/cueOB82HacoonX8vLi180Vl+dxPombUw2duShtcZqjef7CCmwzqbjgsblno88R3YiDeYrpVIvsHB56agX0JjM6PS7fnkHIa1xGYQDY3TKI6eI44RWs4kxhheef4Gz753hzjvvPPTZP/7sFy+ESV3o4vHjx83U1NTTWuv9xrhLtUkzmziJcDg8v4SSEutIRdFapFApEazrNa+L9S6XVgB6/r2Y26aAVY/L+TymQGSzHg4pFdaalBBS4qzDGE03ig+dOr1672c/+y82LoRp8/jLZtDL5Wr5gMU8LjLqW2tRno+QCuuKoV2/NDrQNLd5DayYZMheGtcvJaneb/WS+iwuF8IDBFrH5H0nYwzaGJIoerxeHznwne/8zQXnLOHX6PDwmpqaeVA492gn7EjfL6OkxGQc8JQk0To1LJAGEyIbRcpyWOt6QpyCIC8E5p2MYtvT4azBOdELdqw1KOWDVHhSoqS0gfIfObVw6v95fPiCIj28Op32oVK59DKOu6Tyy7kbEEJkepmOHEpECk70NLbXve8l8SmEgiiLLYIHgRQKJxzW6N5YsUz1YF1I+emzS2eeuBgMv1akh1ej0fhhUAr2CiGfss5ltem8Rp2Ct734PQPqRDaykIurIsuLMqKkYp03tAca8kLgbFprTqUFhHBPSen2Li8vXNQ0PFykSA+vXTt33hLF5itSiv3COcIkwVNp1SLWCYl2WJeKopAqA2wzDou+BPS6e3lSYlNxBpT00TpKrwsOKqW+vLa29txvuuf3BThfN11z1ScjYx+aGindFlu82dEKJ5bX0il2T9KNErSxKCmJdUIrTNss3USTmDTU9DwBrufQsCbJ56K1M/oZJfyvrrXWfvJ+9/qBAM7XPTdeNztWGfmcjZP7fvDmOzcqKYKxSoUPXzaL0Ya1TsTsRI3rds7wyq8W+L19u/El/Gq5waHjp2l1E4xzRDqJ11qdF4US30P5Ty4uLv7/9Y9aW60dO3ZUwzDcf8v8zhv27dg+/+bpxfnXzqxuv37HVG16rFq7ef5yPrbnsqawpqmkWPhPf//Toz949e2jtXL58NiMOXj48Jnfyr/i/V9ZmnTwE8Tf2AAAAABJRU5ErkJggg==","e":1},{"id":"image_3","w":60,"h":60,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_4","w":60,"h":60,"u":"","p":"data:image/png;base64,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","e":1}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"radar@3x.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0],"e":[720]},{"t":100}],"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[120,120,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":750,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"user1.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[60],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":6,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[100],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[0],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":41,"s":[0],"e":[60]},{"t":50}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[158,105,0],"ix":2},"a":{"a":0,"k":[30,30,0],"ix":1},"s":{"a":0,"k":[87,87,100],"ix":6}},"ao":0,"ip":0,"op":750,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"user2.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":5,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":18,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[100],"e":[0]},{"t":35}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[142,172.5,0],"ix":2},"a":{"a":0,"k":[30,30,0],"ix":1},"s":{"a":0,"k":[83,83,100],"ix":6}},"ao":0,"ip":0,"op":750,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"user3.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":18,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":34,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":40,"s":[100],"e":[0]},{"t":47}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[76,139.5,0],"ix":2},"a":{"a":0,"k":[30,30,0],"ix":1},"s":{"a":0,"k":[77,77,100],"ix":6}},"ao":0,"ip":0,"op":750,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"user4.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[72.727],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":6,"s":[0],"e":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[0],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":41,"s":[100],"e":[100]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":47,"s":[100],"e":[72.727]},{"t":50}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[89.5,73.5,0],"ix":2},"a":{"a":0,"k":[30,30,0],"ix":1},"s":{"a":0,"k":[69,69,100],"ix":6}},"ao":0,"ip":0,"op":750,"st":0,"bm":0}],"markers":[]}');
;// CONCATENATED MODULE: ./src/dom/CountdownDom/index.js
function CountdownDom_typeof(obj) { "@babel/helpers - typeof"; return CountdownDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, CountdownDom_typeof(obj); }

function CountdownDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CountdownDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CountdownDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) CountdownDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) CountdownDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (CountdownDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import Lottie from 'lottie-web';






var CountdownDom = /*#__PURE__*/function (_Dom) {
  _inherits(CountdownDom, _Dom);

  var _super = _createSuper(CountdownDom);

  function CountdownDom(option) {
    var _this;

    CountdownDom_classCallCheck(this, CountdownDom);

    _this = _super.call(this, option);

    _this.init();

    _this.bindEvent();

    return _this;
  }

  CountdownDom_createClass(CountdownDom, [{
    key: "init",
    value: function init() {
      var dom = this.dom = createDOM('div', 'vr-chat-box', 'vr-chat');
      var seeHouseDialogType = params_vrChatStatus.seeHouseDialogType,
          seeHouseCountdown = params_vrChatStatus.seeHouseCountdown,
          agentIsTo = params_vrChatStatus.agentIsTo,
          agentAvatar = params_vrChatStatus.agentAvatar,
          agentName = params_vrChatStatus.agentName,
          customerAvatar = params_vrChatStatus.customerAvatar,
          customerName = params_vrChatStatus.customerName,
          company = params_vrChatStatus.company,
          isEstateAgent = params_vrChatStatus.isEstateAgent,
          isShowSeeHouseCountdown = params_vrChatStatus.isShowSeeHouseCountdown,
          isInitiator = params_vrChatStatus.isInitiator,
          isSeeHouseChatting = params_vrChatStatus.isSeeHouseChatting,
          isShowSeeHouseDialog = params_vrChatStatus.isShowSeeHouseDialog,
          isMute = params_vrChatStatus.isMute;
      var _vrChatStatus$default = params_vrChatStatus.defaultConfig,
          WAIT_CONFRIM_CONFIG = _vrChatStatus$default.WAIT_CONFRIM_CONFIG,
          WAIT_CONNECTING_CONFIG = _vrChatStatus$default.WAIT_CONNECTING_CONFIG;
      var _window$VRHOUSE_CONFI = window.VRHOUSE_CONFIG,
          STATUS_ISONLINE = _window$VRHOUSE_CONFI.STATUS_ISONLINE,
          _window$VRHOUSE_CONFI2 = _window$VRHOUSE_CONFI.RESOURCE_PATH,
          RESOURCE_PATH = _window$VRHOUSE_CONFI2 === void 0 ? '' : _window$VRHOUSE_CONFI2;
      var template2 = "\n        <div class=\"vr-chat-countdown background\" id=\"countdown\" style=\"display: ".concat(isShowSeeHouseCountdown ? 'block' : 'none', "; opacity: ").concat(isShowSeeHouseCountdown ? '1' : '0', ";\">\n            <div class=\"countdown-box\" id=\"countdown-box\">\n                <div class=\"countdown-ing\" id=\"countdown-ing\">\n                    <div class=\"countdown radar-container\" id=\"radar-container\" style=\"display: ").concat(WAIT_CONNECTING_CONFIG.isHideRader ? 'none' : 'inline-block', "\"></div>\n                    <div class='countdown txt' style=\"margin-left: ").concat(WAIT_CONNECTING_CONFIG.isHideRader ? '20px' : '0', "\">\n                        <div class='txt1' id=\"wait-connecting-title\">").concat(WAIT_CONNECTING_CONFIG.title || '对方即将进入，请稍候...', "</div>\n                        <div class='txt2' id=\"wait-connecting-subtitle\">").concat(WAIT_CONNECTING_CONFIG.subtitle || '感谢您的耐心等待', "</div>\n                    </div>\n                    <div class=\"countdown vr-chat-cancel\" id=\"vrchat-cancel\"><p>\u53D6\u6D88</p></div>\n                </div>\n                <div class=\"countdown-confirm\" id=\"countdown-confirm\">\n                    <div class='countdown-over avatar'>\n                        <img class='avatar-image' id=\"avatar-image\" alt=\"\" src=\"").concat(agentIsTo ? agentAvatar : customerAvatar, "\"/>\n                    </div>\n                    <span style=\"line-height: 60px\">\n                        <div class='countdown-over txt'>\n                            <div class='txt1' id=\"countnum\">").concat(WAIT_CONFRIM_CONFIG.title || '对方即将进入，请稍候...', "</div>\n                            <div class='txt2' id=\"countnum1\">").concat(WAIT_CONFRIM_CONFIG.subtitle || '感谢您的耐心等待', "</div>\n                        </div>\n                    </span>\n                </div>\n            </div>\n        </div>\n        ");
      dom.innerHTML = template2; // const pullHeadDom = document.getElementsByClassName('pull-head')[0]
      // console.log("pullHeadDom", pullHeadDom)
      // pullHeadDom.appendChild(dom)
      // vrChatStatus.DOMS.pullHead.appendHead('countdown-panel', dom, 'thumbnail')
      // this.countdownDom = document.getElementById('countdown')
      // this.radarContainer = document.getElementById('radar-container')
      // this.countdownBox = document.getElementById('countdown-box')
      // this.countdownIng = document.getElementById('countdown-ing')
      // this.countdownConfirm = document.getElementById('countdown-confirm')

      if (WAIT_CONNECTING_CONFIG && WAIT_CONNECTING_CONFIG.radarJson) {
        var animationData;

        try {
          animationData = JSON.parse(WAIT_CONNECTING_CONFIG.radarJson);
        } catch (e) {
          animationData = WAIT_CONNECTING_CONFIG.radarJson;
        }
      }

      if (!WAIT_CONNECTING_CONFIG || !WAIT_CONNECTING_CONFIG.isHideRader) {
        Lottie.loadAnimation({
          container: this.radarContainer,
          renderer: 'svg',
          // 渲染方式:svg、canvas
          loop: true,
          //循环播放，默认：false
          autoplay: true,
          //自动播放 ，默认true
          animationData: animationData || radar_users_3x_namespaceObject
        });
      }
    }
  }, {
    key: "startCountdown",
    value: function startCountdown() {
      console.log("startCountdown", params_vrChatStatus.accompany.playStatus);
      var _vrChatStatus$globalS = params_vrChatStatus.globalState,
          moduleChat = _vrChatStatus$globalS.moduleChat,
          moduleHouseViewer = _vrChatStatus$globalS.moduleHouseViewer; // moduleHouseViewer.viewerPanel.viewerToVrChatMode()
      // moduleHouseViewer.viewerToolbarDom.setToolBarMode(true)

      if (params_vrChatStatus.accompany.playStatus > 0) {
        return;
      }

      if (params_vrChatStatus.accompany.isImmediateStart()) {
        // 直接进入讲房过渡页 
        params_vrChatStatus.accompany.showTransition();
        return;
      }

      this.showCountdownTransition().then(function () {// vrChatStatus.accompany.start()
      });
    }
  }, {
    key: "showCountdownTransition",
    value: function showCountdownTransition() {
      // console.log('showCountdownTransition')
      // const {moduleChat, moduleHouseViewer} = vrChatStatus.globalState
      // // TODO VR_VIEWER.moduleThumbnail.hide()
      // moduleChat.houseList.show()
      // this.countdownDom.style.display = 'block'
      return new Promise(function (resolve) {
        setTimeout(function () {
          //需要有淡入的动画
          // this.countdownDom.style.opacity = 1
          // this.countdownBox.style.height = '60px'
          // this.countdownIng.style.opacity = 1
          // this.countdownIng.style.display = 'flex'
          // this.countdownConfirm.style.opacity = 0
          resolve();
        }, 15);
      })["catch"](function (error) {
        throw new Error(error);
      });
    }
  }, {
    key: "confirmTransition",
    value: function confirmTransition() {
      var _this2 = this;

      // console.log('confirmTransition', vrChatStatus.hasShowConfrimPage, this.isAiVoicePlaying)
      if (params_vrChatStatus.hasShowConfrimPage || this.isAiVoicePlaying) return Promise.resolve(); // 动画 countdownIng渐隐，countdownConfirm渐现

      return new Promise(function (res, rej) {
        setTimeout(function () {
          _this2.countdownIng.style.opacity = 0;
          res();
        }, 0);
      }).then(function () {
        // countdownConfirm 出现
        return new Promise(function (res, rej) {
          setTimeout(function () {
            _this2.countdownIng.style.display = 'none';
            _this2.countdownConfirm.style.opacity = 1;
            params_vrChatStatus.hasShowConfrimPage = true;
            res();
          }, 500);
        })["catch"](function (error) {
          throw new Error(error);
        });
      })["catch"](function (error) {
        throw new Error(error);
      });
    }
  }, {
    key: "setCountdownDomStyle",
    value: function setCountdownDomStyle(css, value) {
      this.setStyle(this.countdownDom, css, value);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      // 等待状态取消键
      var cancelVRChatButton = document.getElementById('vrchat-cancel');
      cancelVRChatButton && utils_eventHandle.bind(cancelVRChatButton, 'click', function () {
        window.VRHOUSE_CONFIG.CANCEL_CALL_BTN_CB && window.VRHOUSE_CONFIG.CANCEL_CALL_BTN_CB();
        var moduleDialog = params_vrChatStatus.globalState.moduleChat.dialog;
        moduleDialog.cancelIcon();
      });
    }
  }]);

  return CountdownDom;
}(dom_Dom);

/* harmony default export */ const dom_CountdownDom = (CountdownDom);
;// CONCATENATED MODULE: ./src/assets/vrchat/ic_invite.png
/* harmony default export */ const ic_invite = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/assets/vrchat/ic_close.png
/* harmony default export */ const ic_close = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/assets/vrchat/ic_microphone_02.png
/* harmony default export */ const ic_microphone_02 = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/assets/vrchat/ic_microphone_01.png
/* harmony default export */ const ic_microphone_01 = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA6CAYAAAAOeSEWAAAJVklEQVRoQ+2af0wU6RnHZ5hdFlBbhVoBaW1dQKAKlAVaaUqrVvEHpdeYS5proiVizwo0HKWrof5pTwHxuAJGq6H4Ry9NSWNb4XobE40llqoLq3CXXddd2tLCqlUsVQ73x8w0z2Qe8ji3y+4ss8b0bpLJ/nrn3fcz3+d53ud532GZj9HBfoxYmU9g/1/V/kTZGCob6uaKMfzP+a5jrSztP9h7ChnqvWb3IVawSjD4TE8KAJDKE3/XVPFYwGKfFC6OYRg4lcAUUmAYBk76HUBrBhwrWIRCSI5hGDgpNIIgJM8wDJyhoBdtzlrDYn8UUieD6hXAMHgK6pdhAwpozdSNBawSFCD1NTU1KUeOHPl+ampqpV6v/wIQ+P3+v9+7d6//6NGjvz537twj+Eo+lcCamLKWsNR0wWRBUQA1DAwMlFRUVJzhOC49mC3yPD9lsVhe37Vr102GYbxBgNGPF2XKsYB9DrS7uzvrwIED78bFxX16oZEKgjBz+vTpnbW1tXeDAL+UsGDCACspyjBMwpMnT95ZunTpNyKR5OnTp1eXLVv2GsMwzwgwBq1Fm7LWylJVEzo7O7Pr6ur+LEfhSHiFrq6u8vr6eqcMDD6M/vtSwWJgAlXjQVWr1brbZDJ1R0KJbYaHh2uLi4t/J8P6ZP/FqK2mq4+01VJZasIAm+hyuWqNRuPP1IzQ7Xb/PDMzE27QHMMwCIumrKarFwabAMq63e4fr1279pCaEY6Pj7cYjcZfyMqC7+L8C+ou6tBKWehHGZwS3W53fZSwnbKyOA1pEqSigQ12TVBYl8tVbzQazWrkcLvdrZmZmWpgIw5camGDVTPAgrCgLvgr+mxdlLBdxGfBb2m+jOmj6pIwWliEw6wJBqAMUAlOp7MuKyvrp2qUvXv3blt2djbAgr8GC1CYYGCFFHHuHA0sVZFCI+x8muh0OmujhIVoHCptREhldRT2nqqBpRUNlmu0bKMFgDTXOhyOg+vWrWsKOwrS4M6dOydycnJOBVEV4eAVAxadksL6rlpYGohAQZ3T6fyW0Wh8C/z29u3b5qKioqtYBDgcjgNRwp7GYmBkZKQ8Pz+/jWVZZnx8/I2srKxLclZFK6OIcudoYGlKqA8EArc4jssAcXie9+h0uq/K/qu32+2v5+Tk/ESNsg6Hoz03N/cMZk5+v/8vOp1utVT8CsIUx3H5QUrBmMDSICSZqiiK9ykMy7JGOTpzdrv9h1HC/lI2VVEURbei/1XExGnCobkZA6xkvnJVEy8Iwj9YloWpRjq2bdv25UuXLn0I6o6OjlZv2LBB1Tw7NjbWmp+f/ysQsqCgQH/r1q33CayPZdk1MiwEMDBlOGlkDmlIas1YCWvw+XxDer0eBiAdbW1tO8xm899A3cuXL+/YtGnTSTVmfOXKlcbNmzf/CRba2tvbjY2NjQN4vSAIDziOK5Qj9QuBpfWqYXZ2ti8pKelrOKChoSFzWVnZRYA1m80ZLS0t76kp8Q4dOrS9tbX1XwB77dq1nWVlZe3Y99zc3PWkpKTvEtiYmjFYAs6jYLoGj8fTnJqaWo8Devjw4XsrV65slD+z09PTp1asWBFR8f748eOrycnJB3H59NGjRx3JycnbsO/JycmOjIyMFhkWEw4wY80DFM2SAFiCvXjx4lcqKyv/iAMSRdHf3Nxcefz4cVCHaWhoSD9x4kQfx3HLFzJnnuf/09TU9GpHR8cUtGtqakpvbW3tZ1kWVjykw2KxvLJ9+/YhAkunn7DeosZnoTNoT6ee+MTExISZmZlBvV7/RYW6kExIEbKzszN3//79bxkMhs8FG5HX6/3n2bNn36ivr7eTPk6mpKRU4Gefz+dKS0vbND09TetcVasY0cAqc+D4sbGx761fv76DgoyOjr5ZUFDwjgzMbty4cUlXV9d3MjMzKxITEz8Pbefm5iZcLpelrq7uD0NDQ7PY1mazvVZYWNhM+7Pb7Q15eXm/kSOxMmcOO+2gUmHlJw3ocul8DpycnJwwNTVlMRgMeaRtwGazvVlUVPRbxR8ob/BzA7158+arxcXFR2QLki71er3v5+Xl7RofH4cpjebMdLskLEc0ygbz3fienp7cvXv3DsTFxS2h/3r//v3fHz58+O3e3t5/K24afJwHra6u/syxY8caVq1a9Qq9XhTF2Z6enp01NTUOoqrSV2OiLFoD5siYYEg1rM1mqyooKOhmWRa+nz8EQfjQ4/H0W63Wy+fPn//gwoUL/wXQqqqqT+3bt2+DyWT6Znp6+rdZlk1SyOMfGRmpM5lMEADBdOFUJhIRgUZjxvQarHKeAx4ZGdlRWFh4ikZRpX2JogimyIRp4xseHj5YUlLybghQXJOKKaxSXZpVSfs6/f39pq1bt56Mj4/PDutIQRr4fD6nxWJpqKqqsimSfkwNVfkq/oVan1VeRwt5VFgKXKWlpUl9fX0/Wr169Q84jlsZCTTP8w8mJyd7d+/efcZqtUJ0xkVyarqqVygWC0vNmQLjHIwppT43N3dJb29v5Zo1a76+fPlyk8FgkKYdPLxe78TMzIx1YmJicM+ePQN2ux0hQ21hotlGbL5awIYCVi7PSJkWLsSJojhKYVmWhfoUgw/4Mk0D6eZ01IpqBasEpisZqC7CwsI51L+0ZIMgtV4GxM0smjDQ9eKoFdUSNhgwPlYwv+8DOwSgcBDYL5EqRrmiCLA0yVdtus9ZUSSBI8I2dEHuI1uXsikD7AcKM1bCKncBVE8xocYbbTReqD86/+I+rbRXG0JZMGMARDNWpoMRrUJEIkisYOcro8HBwY2lpaXHOI5LE0WR1el0n6UDCwQCD1iWFQOBwOSNGzeay8vL/xriMYNIeBZsoyWscl1ZqnkDgYCV4zhYhAt78Dzv0ul0JSQtVLUuHO4PYgkrZVOCILhYlk0JNxD4XRCEafnG4FMzLy0sRmUMTtLUMzU1VZ2WltYmP2exELPf4/GY09PTe8ierCZblVpPPbQ/5XNQupqamhVbtmxJe/bsGef3++N4npcsiuM4Ua/XCwkJCfz169fvdXR0TAdZ7X+pA5QyfcQ5F1/pzh/OofgoH31VvXEVzlW09FmaXOBDmagyfQ22UkE3rSikZnMsHVy4mxLp7xRE+RQqVRTb0RRQ+RgufYZiUZlTrHxWeQMRKtSrMt8Nlv9qAhoLZdWkonADFgLRDDKWykZq8i+83f8A3bnYaLaw2SkAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/dom/ChatDom/index.js
function ChatDom_typeof(obj) { "@babel/helpers - typeof"; return ChatDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ChatDom_typeof(obj); }

function ChatDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChatDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ChatDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) ChatDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) ChatDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ChatDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ChatDom_setPrototypeOf(subClass, superClass); }

function ChatDom_setPrototypeOf(o, p) { ChatDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ChatDom_setPrototypeOf(o, p); }

function ChatDom_createSuper(Derived) { var hasNativeReflectConstruct = ChatDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ChatDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ChatDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ChatDom_possibleConstructorReturn(this, result); }; }

function ChatDom_possibleConstructorReturn(self, call) { if (call && (ChatDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ChatDom_assertThisInitialized(self); }

function ChatDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ChatDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ChatDom_getPrototypeOf(o) { ChatDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ChatDom_getPrototypeOf(o); }














var ChatDom = /*#__PURE__*/function (_Dom) {
  ChatDom_inherits(ChatDom, _Dom);

  var _super = ChatDom_createSuper(ChatDom);

  function ChatDom(option) {
    var _this;

    ChatDom_classCallCheck(this, ChatDom);

    _this = _super.call(this, option);

    _this.init(); // this.bindEvent()


    return _this;
  }

  ChatDom_createClass(ChatDom, [{
    key: "init",
    value: function init() {
      var seeHouseDialogType = params_vrChatStatus.seeHouseDialogType,
          seeHouseCountdown = params_vrChatStatus.seeHouseCountdown,
          agentIsTo = params_vrChatStatus.agentIsTo,
          agentAvatar = params_vrChatStatus.agentAvatar,
          agentName = params_vrChatStatus.agentName,
          customerAvatar = params_vrChatStatus.customerAvatar,
          customerName = params_vrChatStatus.customerName,
          company = params_vrChatStatus.company,
          isEstateAgent = params_vrChatStatus.isEstateAgent,
          isShowSeeHouseCountdown = params_vrChatStatus.isShowSeeHouseCountdown,
          isInitiator = params_vrChatStatus.isInitiator,
          isSeeHouseChatting = params_vrChatStatus.isSeeHouseChatting,
          globalState = params_vrChatStatus.globalState,
          isMute = params_vrChatStatus.isMute,
          defaultConfig = params_vrChatStatus.defaultConfig;
      var muteStatus = JSON.parse(isMute).status;
      var CHAT_MIC_CONFIG = defaultConfig.CHAT_MIC_CONFIG,
          CHAT_HANG_UP_CONFIG = defaultConfig.CHAT_HANG_UP_CONFIG;
      var isType3D = true;
      var template = "\n      <div class=\"vr-chat-cards ".concat(isType3D ? 'vr-chat-cards_3d' : '', "\" id=\"chatcards\" style=\"display: ").concat(isSeeHouseChatting ? 'block' : 'none', "\">\n\n\n\n      \n        <div id=\"vr-chat-content\" class=\"vr-chat-content background\">\n\n          <div class=\"left\" id=\"left-container\">\n            <div class=\"avatar left-avatar-container\" id=\"left-avatar-container\">\n              <img class='image' id=\"left-avatar\" alt=\"\" src=\"").concat(agentAvatar, "\"/>\n            </div>\n            <div class=\"vr-chat-agent-cards\" id=\"vr-chat-agent-cards\">\n              <div class=\"vr-chat-agent-name\" id=\"vr-chat-agent-name\"></div>\n              <div class=\"vr-chat-agent-company\" id=\"vr-chat-agent-company\"></div>\n            </div>\n          </div>\n          <div class=\"right\" id=\"right-container\">\n\n            <div class=\"invite vr-chat-cards-item hide\" id=\"agent-invite\" >\n              <div class=\"vr-chat-cards-icon\" style=\"background-image:  url(").concat(ic_invite, ")\"></div>\n              <div class=\"vr-chat-cards-icon-text\">\u9080\u8BF7</div>\n            </div>\n            \n            <div class=\"mute vr-chat-cards-item\" style=\"").concat(!CHAT_MIC_CONFIG || CHAT_MIC_CONFIG.show ? '' : 'display: none', "\" id=\"mute-wrapper\">\n              <div class=\"vr-chat-cards-icon\" id=\"mute-switch\" style=\"background-image: ").concat(CHAT_MIC_CONFIG && CHAT_MIC_CONFIG.iconUrl && CHAT_MIC_CONFIG.iconUrl.length > 1 ? "url(".concat(CHAT_MIC_CONFIG.iconUrl, ")") : muteStatus === 'on' ? "url(".concat(ic_microphone_02, ")") : "url(".concat(ic_microphone_01, ")"), "\"></div>\n              <div class=\"mute-txt vr-chat-cards-icon-text\" id=\"mute-txt\" style=\"").concat(CHAT_MIC_CONFIG && CHAT_MIC_CONFIG.iconUrl && CHAT_MIC_CONFIG.iconUrl.length > 1 ? 'visibility: hidden' : '', "\">\u9759\u97F3</div>\n            </div>\n            <div id=\"hang-up\" class=\"close vr-chat-cards-item\" style=\"").concat(CHAT_HANG_UP_CONFIG && CHAT_HANG_UP_CONFIG.backgroundColor ? 'background-color:' + CHAT_HANG_UP_CONFIG.backgroundColor : '', "\">\n              <div class=\"vr-chat-cards-icon\" id=\"close-icon\" style=\"background-image: url(").concat(CHAT_HANG_UP_CONFIG && CHAT_HANG_UP_CONFIG.iconUrl ? CHAT_HANG_UP_CONFIG.iconUrl : ic_close, ")\"></div>\n              <div class=\"vr-chat-cards-icon-text\" id=\"vr-chat-clock\" style=\"").concat(CHAT_HANG_UP_CONFIG && CHAT_HANG_UP_CONFIG.fontColor ? 'color:' + CHAT_HANG_UP_CONFIG.fontColor : '', "\">00:00</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      ");
      var template3 = "\n      <div class=\"vr-chat-cards ".concat(isType3D ? 'vr-chat-cards_3d' : '', "\" id=\"chat-member-tips-wrapper\" style=\"display: ").concat(isSeeHouseChatting ? 'block' : 'none', "\">\n        <div class=\"chat-member-tips\" id=\"chat-member-tips\">\n        </div>\n      </div>\n      ");
      var dom = this.dom = createDOM('div', 'vr-chat-box2', 'vr-chat2');
      dom.innerHTML = template; // const pullHeadDom = document.getElementsByClassName('pull-head')[0]
      // console.log("pullHeadDom1", pullHeadDom)
      // pullHeadDom.appendChild(dom)
      // vrChatStatus.DOMS.pullHead.appendHead('chat-panel', dom, 'thumbnail')

      var dom3 = this.dom3 = createDOM('div', 'vr-chat-box3', 'vr-chat3');
      dom3.innerHTML = template3; // const pullHeadDom = document.getElementsByClassName('pull-head')[0]
      // console.log("pullHeadDom1", pullHeadDom)
      // pullHeadDom.appendChild(dom)
      // vrChatStatus.DOMS.pullHead.appendHead('chat-member-tips', dom3, 'feedback')
      // this.chatCardDom = document.getElementById('chatcards')
      // this.memberTipsDom = document.getElementById('chat-member-tips')
      // this.memberTipsWrapperDom = document.getElementById('chat-member-tips-wrapper')
      // this.vrChatContent = document.getElementById('vr-chat-content')
      // this.leftContainer = document.getElementById('left-container')
      // this.leftAvatarContainer = document.getElementById('left-avatar-container')
      // this.leftAvatar = document.getElementById('left-avatar')
      // this.rightContainer = document.getElementById('right-container')
      // this.agentInviteDom = document.getElementById('agent-invite')
      // this.muteChatButton = document.getElementById('mute-switch')
      // this.hangUpDom = document.getElementById('hang-up')
      // this.clockDom = document.getElementById('vr-chat-clock')

      this.audienceRoleMap = defaultConfig.INVITE_CUSTOM && defaultConfig.INVITE_CUSTOM.roleMap || {};
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      this.muteChatButton && utils_eventHandle.bind(this.muteChatButton, 'click', function () {
        _this2.muteChat();
      });
      utils_eventHandle.stopDefault(this.muteChatButton);
      var exitVRChatButton = document.getElementById('hang-up');
      exitVRChatButton && utils_eventHandle.bind(exitVRChatButton, 'click', function () {
        window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CHAT_HANG_UP_CONFIG && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CHAT_HANG_UP_CONFIG.iconClickCb && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CHAT_HANG_UP_CONFIG.iconClickCb();
        params_vrChatStatus.globalState.moduleChat.dialog.closeIcon();
      });
      this.leftAvatarContainer && utils_eventHandle.bind(this.leftAvatarContainer, 'click', function () {
        // 弹框
        window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AGENT_AVATAR_CLICK_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AGENT_AVATAR_CLICK_CB();
      });
      this.agentInviteDom && utils_eventHandle.bind(this.agentInviteDom, 'click', function () {
        // 弹框
        window.VRHOUSE_CONFIG.VRCHAT_CONFIG.INVITE_BTN_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.INVITE_BTN_CB();

        _this2.renderInviteDialog();
      });
    }
  }, {
    key: "displayShare",
    value: function displayShare() {
      console.log('displayShare', params_vrChatStatus.authority, isChatOneToOne);

      if (!isChatOneToOne && params_vrChatStatus.authority & 4 && !VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
        utils_domHandle.removeClass(this.agentInviteDom, 'hide');
      } else {
        utils_domHandle.addClass(this.agentInviteDom, 'hide');
      }
    }
  }, {
    key: "inviteCalling",
    value: function inviteCalling(clientid) {
      // this.audienceInviteStatus(true)
      var roleName = this.audienceRoleMap[params_vrChatStatus.inviteRole] || '';
      this.renderMemberItem({
        main: '正在呼叫' + roleName + '…',
        sub: '请稍等',
        img: params_vrChatStatus.inviteAvatar
      }, true, clientid);
    } // 成功

  }, {
    key: "inviteSucess",
    value: function inviteSucess(_ref) {
      var _ref$avatar = _ref.avatar,
          avatar = _ref$avatar === void 0 ? '' : _ref$avatar,
          _ref$name = _ref.name,
          name = _ref$name === void 0 ? '' : _ref$name,
          _ref$role = _ref.role,
          role = _ref$role === void 0 ? '' : _ref$role,
          _ref$client_id = _ref.client_id,
          client_id = _ref$client_id === void 0 ? '' : _ref$client_id;
      // this.audienceInviteStatus(true)
      var roleName = this.audienceRoleMap[role] || '';
      var item = {
        main: name,
        img: avatar,
        sub: roleName
      };
      console.log('--inviteSucess', item);
      this.renderMemberItem(item, false, client_id);
    } // 未接听5s后消失

  }, {
    key: "inviteNoAnswer",
    value: function inviteNoAnswer() {
      var _this3 = this;

      // domHandle.removeClass(this.agentInviteDom, 'invite-lock')
      var roleName = this.audienceRoleMap[params_vrChatStatus.inviteRole] || '';
      var itemDom = this.noAnswerDom = this.renderMemberItem({
        main: roleName + '未接听'
      });
      this.noAnswerTimeout = setTimeout(function () {
        _this3.memberTipsDom.removeChild(itemDom);

        _this3.noAnswerDom = null;
      }, 5000); // 5s后消失
    }
  }, {
    key: "clearInviteNoAnswer",
    value: function clearInviteNoAnswer() {
      // 还没到5s如果再邀请需清除
      if (this.noAnswerTimeout) {
        clearTimeout(this.noAnswerTimeout);
        this.noAnswerDom && this.memberTipsDom.removeChild(this.noAnswerDom);
        this.noAnswerTimeout = undefined;
      }
    }
  }, {
    key: "initMemberTips",
    value: function initMemberTips(clientid) {
      console.log(params_vrChatStatus.customerName, '----initMemberTips');
      var item = {
        main: params_vrChatStatus.customerName,
        img: params_vrChatStatus.customerAvatar,
        sub: '发起的带看'
      };

      if (!params_vrChatStatus.isCustomer) {
        // 主B和邀请进来都都显示
        this.renderMemberItem(item, false, clientid);
      }
    }
  }, {
    key: "clearMemberTips",
    value: function clearMemberTips() {
      this.memberTipsDom.innerHTML = '';
    }
  }, {
    key: "removeTempMember",
    value: function removeTempMember(client_id) {
      var dom = document.getElementById('item_' + client_id);
      dom && this.memberTipsDom.removeChild(dom);
    }
  }, {
    key: "renderMemberItem",
    value: function renderMemberItem(item, isLoading, clientid) {// console.log(clientid)
      // let itemDom = document.getElementById(`item_${clientid}`)
      // if(!itemDom) {
      //   itemDom = createDOM('div', `item_${clientid}`, "member-item")
      //   if (this.memberTipsDom.children.length) {
      //     this.memberTipsDom.insertBefore(itemDom, this.memberTipsDom.children[0])
      //   } else {
      //     this.memberTipsDom.appendChild(itemDom)
      //   }
      // }
      // itemDom.innerHTML = `
      //   <div class="item-img float-to-left ${isLoading ? 'loading-ring' : ''}"
      //     style="background-image: ${item.img ? `url(${item.img})` : ''}"
      //     id="item-img ${clientid}">
      //   </div>
      //   <div class="item-content float-to-left" id="item-content ${clientid}">
      //     ${item.main ? `<div class="main-title" id="main-title ${clientid}">${item.main}</div>` : ''}
      //     ${item.sub ? `<div class="sub-title" id="sub-title ${clientid}">${item.sub}</div>` : ''}
      //   </div>
      // `
      // return itemDom
    }
  }, {
    key: "setAgentCards",
    value: function setAgentCards() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var company = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      // if (window.VRHOUSE_CONFIG.VR_CHAT_HOUSE_LIST && window.VRHOUSE_CONFIG.VR_CHAT_HOUSE_LIST.SHOW) return
      var nameDom = document.getElementById('vr-chat-agent-name');
      var companyDom = document.getElementById('vr-chat-agent-company');
      if (!nameDom || !companyDom) return;

      if (name.length > 10) {
        name = name.slice(0, 10) + '...';
      }

      if (company.length > 10) {
        company = company.slice(0, 10) + '...';
      }

      nameDom.innerHTML = name;
      companyDom.innerHTML = company;
      this.leftAvatar.src = params_vrChatStatus.agentAvatar;
    }
  }, {
    key: "customPeerIsOperatingText",
    value: function customPeerIsOperatingText() {
      var dom = document.getElementById('vrChatPeerIsOperating');
      if (!dom) return;
      dom.innerHTML = (params_vrChatStatus.isCustomer ? params_vrChatStatus.roleA : params_vrChatStatus.roleB) + '正在操作';
    }
  }, {
    key: "showChatTransition",
    value: function showChatTransition() {
      console.log('showChatTransition isAiVoicePlaying', params_vrChatStatus.accompany.aihouse.Ai.isAiVoicePlaying); // this.VR_VIEWER.moduleThumbnail.hide()

      var _vrChatStatus$globalS = params_vrChatStatus.globalState,
          moduleChat = _vrChatStatus$globalS.moduleChat,
          moduleHouseViewer = _vrChatStatus$globalS.moduleHouseViewer; // this.wrapperDom.style.display = 'none'

      if (params_vrChatStatus.accompany.playStatus > 1) {
        // this.wrapperDom.style.display = 'none'
        console.log("showChatTransition startToConnectedTranstion"); // moduleChat.miniCountdownPanel.startToConnectedTranstion()

        params_vrChatStatus.accompany.connect();
        this.toChatTransition();
      } else {
        var transitionTime = params_vrChatStatus.hasShowConfrimPage ? 500 : 1500; // console.log("transitionTime", transitionTime, moduleChat.countdownPanel, moduleChat)

        params_vrChatStatus.accompany.connect(); // moduleChat.countdownPanel.confirmTransition()
        // .then(() => {
        //   let timer = setTimeout(() => {
        //     clearTimeout(timer)
        //     timer = null
        //     if(!vrChatStatus.isChatPage) return
        //     this.toChatTransition()
        //   }, transitionTime)
        // })
      } // moduleHouseViewer.viewerPanel.viewerToVrChatMode()


      params_vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender', false); // 停止展示端自转

      params_vrChatStatus.accompany.isComplete = false; // 接听将讲房已听完重置
    }
  }, {
    key: "toChatTransition",
    value: function toChatTransition() {
      var _this4 = this;

      console.log("toChatTransition!!!");
      var moduleChat = params_vrChatStatus.globalState.moduleChat;
      var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;

      if (params_vrChatStatus.isInitiator) {
        VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB && VRCHAT_CONFIG.ACCOMPANY_STATUS_CHANGE_CB(moduleChat.accompanyStatus.VRCHAT_CONNECTED);
      }

      return new Promise(function (res, rej) {
        moduleChat.countdownPanel.setCountdownDomStyle('opacity', 0);
        setTimeout(function () {
          if (!params_vrChatStatus.isChatPage) {
            rej();
          } else {
            res();
          }
        }, 500);
      }).then(function () {
        moduleChat.countdownPanel.setCountdownDomStyle('display', 'none');
        _this4.memberTipsWrapperDom.style.opacity = 0;
        _this4.chatCardDom.style.display = 'block';
        _this4.memberTipsWrapperDom.style.display = 'block';
        setTimeout(function () {
          if (!params_vrChatStatus.isChatPage) return;
          _this4.chatCardDom.style.opacity = 1;
          _this4.memberTipsWrapperDom.style.opacity = 1;
          moduleChat.houseList.show();
        }, 10);
      }).then(function () {
        setTimeout(function () {
          moduleChat.dialog.showConnectedToast();
        }, 10);
      })["catch"](function (error) {
        throw new Error(error);
      });
    }
  }, {
    key: "startClock",
    value: function startClock(startTime) {
      if (!this.clockDom) return;
      this.clockStartTime = startTime || Date.now();
      this.clockTick();
    }
  }, {
    key: "clockTick",
    value: function clockTick() {
      var _this5 = this;

      var time = Date.now() - this.clockStartTime;
      var seconds = Math.floor(time / 1000);
      var minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      seconds = seconds > 9 ? seconds : '0' + seconds;
      minutes = minutes > 9 ? minutes : '0' + minutes;
      this.clockDom.innerHTML = minutes + ':' + seconds;
      this.clockTimeoutId = setTimeout(function () {
        _this5.clockTick();
      }, 1000);
    }
  }, {
    key: "resetClock",
    value: function resetClock() {
      if (this.clockTimeoutId) {
        clearTimeout(this.clockTimeoutId);
        this.clockTimeoutId = null;
      }

      if (this.clockDom) {
        this.clockDom.innerHTML = '00:00';
      }
    }
  }, {
    key: "setAgentTalking",
    value: function setAgentTalking(show) {
      if (!this.leftAvatarContainer) return;

      if (show) {
        utils_domHandle.addClass(this.leftAvatarContainer, 'is-talking');
      } else {
        utils_domHandle.removeClass(this.leftAvatarContainer, 'is-talking');
      }
    }
  }, {
    key: "muteChat",
    value: function muteChat() {
      // click mute button
      var CHAT_MIC_CONFIG = window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CHAT_MIC_CONFIG;

      if (CHAT_MIC_CONFIG && CHAT_MIC_CONFIG.iconClickCb) {
        CHAT_MIC_CONFIG.iconClickCb();
        return;
      } // 音频为连通之前不可进行切换操作


      if (params_vrChatStatus.isVrAudioConnected === true) {
        params_vrChatStatus.isMute = !params_vrChatStatus.isMute;

        if (params_vrChatStatus.isMute) {
          this.setTalkingAnimation(false);
        }

        this.muteChatButton.style.backgroundImage = params_vrChatStatus.isMute ? "url(".concat(ic_microphone_02, ")") : "url(".concat(ic_microphone_01, ")");
        document.getElementById('mute-txt').innerHTML = params_vrChatStatus.isMute ? '已静音' : '静音';
        vrChatMute();
        window.vrChatConnectorApi.trackEvent({
          "event_id": 10100,
          "event_map": {
            'wrtc_vr_mute': params_vrChatStatus.isMute
          }
        });
      }
    }
  }, {
    key: "setTalkingAnimation",
    value: function setTalkingAnimation(show) {
      if (!this.muteChatButton) return;

      if (show) {
        utils_domHandle.addClass(this.muteChatButton, 'is-talking-animation');
      } else {
        utils_domHandle.removeClass(this.muteChatButton, 'is-talking-animation');
      }
    }
  }, {
    key: "renderInviteDialog",
    value: function renderInviteDialog() {
      var _this6 = this;

      var INVITE_CUSTOM = window.VRHOUSE_CONFIG.VRCHAT_CONFIG.INVITE_CUSTOM;

      if (!this.dialogWapper) {
        var dialogWapper = this.dialogWapper = createDOM('div', 'vr-dialog-wapper', 'vr-dialog-wapper');
        var inviteDom = this.inviteDom = createDOM('div', 'vr-invite', 'vr-invite');
        inviteDom.innerHTML = "\n        <div class=\"invite-container\" id=\"invite-container\">\n          <div class=\"invite-content\">\n            ".concat(INVITE_CUSTOM && INVITE_CUSTOM.customDom ? INVITE_CUSTOM.customDom : '<div class="invite-item" id="property-consultant">邀请置业顾问</div>', "\n          </div>\n          <div class=\"invite-bar\">\n            <div class=\"cancel invite-item\" id=\"invite-cancel\">\u53D6\u6D88</div>\n          </div>\n        <div>\n      ");
        dialogWapper.appendChild(inviteDom);
        document.body.appendChild(dialogWapper);
        this.inviteHeight = document.getElementById('invite-container').clientHeight + 'px';
        var inviteCancel = this.inviteCancel = document.getElementById('invite-cancel');
        utils_eventHandle.bind(inviteCancel, 'click', function (event) {
          event.preventDefault();
          event.stopPropagation();

          _this6.closeInviteDialog();
        }, false);
        utils_eventHandle.bind(dialogWapper, 'click', function (event) {
          _this6.closeInviteDialog();
        }, false);
        this.propertyConsultant = document.getElementById('property-consultant');
        this.propertyConsultant && utils_eventHandle.bind(this.propertyConsultant, 'click', function (event) {
          // 现在是在点击的时候调用，等到联调时收到WVRChatAudienceInvite的invite_status为0时显示
          // this.inviteCalling()
          // this.inviteNoAnswer()
          window.vrChatConnectorApi.outputNativeLog('outputLog h5 log clickInvite');

          if (INVITE_CUSTOM && INVITE_CUSTOM.inviteItemCB) {
            INVITE_CUSTOM.inviteItemCB();
            console.log('custom invite');
          } else {
            window.vrChatConnectorApi.testInvite();
            console.log('demo invite');
          }
        }, false);
      }

      utils_domHandle.removeClass(this.dialogWapper, 'hide');
      setTimeout(function () {
        _this6.inviteDom.style.height = _this6.inviteHeight;
      }, 15);
    }
  }, {
    key: "closeInviteDialog",
    value: function closeInviteDialog() {
      var _this7 = this;

      this.inviteDom.style.height = 0;
      setTimeout(function () {
        // 直接操作display会破坏transition的动画
        utils_domHandle.addClass(_this7.dialogWapper, 'hide');
      }, 600);
    }
  }]);

  return ChatDom;
}(dom_Dom);

/* harmony default export */ const dom_ChatDom = (ChatDom);
;// CONCATENATED MODULE: ./src/assets/vrchat/btn_close_window.png
/* harmony default export */ const btn_close_window = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAB1ElEQVRoQ+3Zu1KEMBQG4CQF4xP4fFhwqdRKn0Gr3a24FPJ8PoFDQRycxWEQdkjORQhny50Qzpc/yYZFq4N99MG8SsChJy4JS8KBjYBM6cAC/cORhCXhwEZApnRggcqmBZrScRzfRVH0aIz5LIqioZwdeZ7HXdfdt217aZrmy/deIHCapi9KqbfrzS9VVT35FnLruizLTtbaoe/Xqqrefe8DAl9H/WO4udb6XJbls28xc9dNsMoY8wCZTSBwX2CSJCet9W+ymOgpFqNvMJgKTYHta0UB9x1hFojZ13SZoIGx0JRY1ISHkYQUDLl27UaJmjAEzYElSdgHzYUlBa9d05xYcvAc2lp7ruv653DCjWUBL6GNMWp0XFQYh4o1GxfJprXmiDhuM059TdGQNmzguaT77zixbFN6aecOGjzdoIKe0lNsP42nmxbX1CZfw3PYpZ8lDjQp+BZ2aV1To8nAa7D/gSYBu2C50ehgHywnGhUMwXKh0cAYWJ9HS9djJgoYE0uNBoMpH/Eo+gaBD/dH/PhVC+Xz7GZetRzuZZrrDrmF9qA1vAWAaw0Cdh2xvbWXhPeWmGu9krDriO2tvSS8t8Rc65WEXUdsb+0l4b0l5lrv4RL+Brxn7kxMt4VdAAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./src/dom/DialogDom/index.js
function DialogDom_typeof(obj) { "@babel/helpers - typeof"; return DialogDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, DialogDom_typeof(obj); }

function DialogDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DialogDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DialogDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) DialogDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) DialogDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function DialogDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) DialogDom_setPrototypeOf(subClass, superClass); }

function DialogDom_setPrototypeOf(o, p) { DialogDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DialogDom_setPrototypeOf(o, p); }

function DialogDom_createSuper(Derived) { var hasNativeReflectConstruct = DialogDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = DialogDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = DialogDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return DialogDom_possibleConstructorReturn(this, result); }; }

function DialogDom_possibleConstructorReturn(self, call) { if (call && (DialogDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return DialogDom_assertThisInitialized(self); }

function DialogDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DialogDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function DialogDom_getPrototypeOf(o) { DialogDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DialogDom_getPrototypeOf(o); }










var DialogDom = /*#__PURE__*/function (_Dom) {
  DialogDom_inherits(DialogDom, _Dom);

  var _super = DialogDom_createSuper(DialogDom);

  function DialogDom(option, moduleChat) {
    var _this;

    DialogDom_classCallCheck(this, DialogDom);

    _this = _super.call(this, option);

    _this.init();

    _this.bindEvent();

    return _this;
  }

  DialogDom_createClass(DialogDom, [{
    key: "init",
    value: function init() {
      var dom = this.wrapperDom = createDOM('div', 'vr-chat-wrapper', 'vr-chat-dialog-waper');
      var seeHouseDialogType = params_vrChatStatus.seeHouseDialogType,
          isShowSeeHouseDialog = params_vrChatStatus.isShowSeeHouseDialog,
          defaultConfig = params_vrChatStatus.defaultConfig;

      if (!isShowSeeHouseDialog) {
        dom.style.display = 'none';
      }

      var TEMPLATE_DEFAULT = defaultConfig.TEMPLATE_DEFAULT,
          CUSTOM_DIALOG = defaultConfig.CUSTOM_DIALOG;
      var STYLE_COLOR = window.VRHOUSE_CONFIG.STYLE_COLOR || StaticData.styleColor;
      var template = "\n      <div class=\"vr-chat-box shader\" id=\"shader\" style=\"display: none\"></div>\n      <div class=\"vr-chat-box box type1\" id=\"type1\" style=\"display: ".concat(seeHouseDialogType === 1 ? 'block' : 'none', ";\">\n      ").concat(CUSTOM_DIALOG && CUSTOM_DIALOG.unconnected ? '' : "\n        <div class=\"close\" id=\"vr-chat-close\" style=\"background-image: url(".concat(btn_close_window, ")\"></div>\n        <p class='busy' id=\"type1-txt\">\u5BF9\u65B9\u7E41\u5FD9\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u6216\u7ED9\u4ED6\u7559\u8A00\u54A8\u8BE2</p>\n        <div class='button-box'>\n          <div class=\"button-recall\" id=\"vr-chat-button-recall\">\n            <div style=\"color: rgba(11,15,18,1); fontSize: 14px; line-height: 40px; display: inline-block; vertical-align: middle;\">\u91CD\u62E8</div>\n          </div>\n          <div class=\"button-comment\" id=\"vr-chat-button-comment\" style =\"background-color: ").concat(STYLE_COLOR, "\">\n            <div style=\"color: rgba(255,255,255,1); fontSize: 14px; line-height: 40px; display: inline-block; vertical-align: middle;\">\u53BB\u7559\u8A00</div>\n          </div>\n        </div>\n        "), "\n      </div>\n\n      <div class=\"vr-chat-box box type2\" id=\"type2\" style=\"display: ").concat(seeHouseDialogType === 2 ? 'block' : 'none', ";\">\n      ").concat(CUSTOM_DIALOG && CUSTOM_DIALOG.exit ? '' : "\n        <p>\u786E\u5B9A\u7ED3\u675F\u5E26\u770B\u5417\uFF1F</p>\n        <div class='button-box'>\n          <div class=\"button-recall\" id=\"vr-chat-button-exit\">\n            <div style=\"color: rgba(0,0,0,1); fontSize: 14px; line-height: 40px; display: inline-block; vertical-align: middle;\">\u9000\u51FA</div>\n          </div>\n          <div class=\"button-comment\" id=\"vr-chat-button-cancel\" style =\"background-color: ".concat(STYLE_COLOR, "\">\n            <div style=\"color: rgba(255,255,255,1); fontSize: 14px; line-height: 40px; display: inline-block; vertical-align: middle;\">\u518D\u770B\u770B</div>\n          </div>\n        </div>\n        "), "\n      </div>\n\n      <div class=\"vr-chat-box box type3\" id=\"type3\" style=\"display: ").concat(seeHouseDialogType === 3 ? 'block' : 'none', ";\">\n        <p>\u5E26\u770B\u5DF2\u7ED3\u675F</p>\n      </div>\n\n      <div class=\"vr-chat-box box type5\" id=\"type5\" style=\"display: ").concat(seeHouseDialogType === 5 ? 'block' : 'none', ";\">\n        <div class=\"txt1\" id=\"vrChatPeerIsOperating\">\n          \u5BF9\u65B9\u6B63\u5728\u64CD\u4F5C\n        </div>\n        <div class=\"txt2\">\n          \u6C9F\u901A\u4EE5\u907F\u514D\u6548\u679C\u51B2\u7A81\u54E6~\n        </div>\n      </div>\n      <div class=\"vr-chat-box box type6\" id=\"type6\" style=\"display: ").concat(seeHouseDialogType === 6 ? 'block' : 'none', ";\">\n        ").concat(TEMPLATE_DEFAULT.connectedChatToastText || '对方已进入带看', "\n      </div>\n    ");
      dom.innerHTML = template;
      document.body.appendChild(dom);
      this.type1Dom = document.getElementById("type1");
      this.type2Dom = document.getElementById("type2");
      this.type3Dom = document.getElementById("type3");
      this.type5Dom = document.getElementById("type5");
      this.type6Dom = document.getElementById("type6");
      this.shaderDom = document.getElementById('shader');
      this.hangUpDom = document.getElementById('hang-up');
      this.countdownDom = document.getElementById('countdown');
      CUSTOM_DIALOG && CUSTOM_DIALOG.unconnected && CUSTOM_DIALOG.unconnected(this.type1Dom);
      CUSTOM_DIALOG && CUSTOM_DIALOG.exit && CUSTOM_DIALOG.exit(this.type2Dom);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      var _this2 = this;

      var closeButton = document.getElementById('vr-chat-close');
      closeButton && utils_eventHandle.bind(closeButton, 'click', function () {
        _this2.closeSeeHouseDialog();

        setAiVoiceListenedModules(null);
      });
      var buttonRecall = document.getElementById('vr-chat-button-recall');
      buttonRecall && utils_eventHandle.bind(buttonRecall, 'click', function () {
        _this2.recallVrchat();
      });
      var buttonComment = document.getElementById('vr-chat-button-comment');
      buttonComment && utils_eventHandle.bind(buttonComment, 'click', function () {
        _this2.showComment();

        setAiVoiceListenedModules(null);
      });
      var callWVRChatVrExit = document.getElementById('vr-chat-button-exit');
      callWVRChatVrExit && utils_eventHandle.bind(callWVRChatVrExit, 'click', function () {
        window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CANCEL_CHAT_CLICK_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CANCEL_CHAT_CLICK_CB();

        _this2.exitVRChat();
      });
      callWVRChatVrExit && utils_eventHandle.stopDefault(callWVRChatVrExit);
      var cancelButton = document.getElementById('vr-chat-button-cancel');
      cancelButton && utils_eventHandle.bind(cancelButton, 'click', function () {
        _this2.cancelExit();
      });
    }
  }, {
    key: "changeIsShowSeeHouseDialog",
    value: function changeIsShowSeeHouseDialog() {
      console.log('>>>>>>>>>changeIsShowSeeHouseDialog');
      params_vrChatStatus.isShowSeeHouseDialog = !params_vrChatStatus.isShowSeeHouseDialog;
      var state = params_vrChatStatus.isShowSeeHouseDialog ? 'block' : 'none';
      this.countdownDom.style.display = state;
      this.type1Dom.style.display = state;
      this.type2Dom.style.display = state;
      this.type3Dom.style.display = state;
      this.type5Dom.style.display = state;
      this.type5Dom.style.display = state;
    }
  }, {
    key: "showCallingOptions",
    value: function showCallingOptions() {
      this.changeSeeHouseDialogType(4);
    }
  }, {
    key: "hideSeeHouseDialog",
    value: function hideSeeHouseDialog(type) {
      this.isShowSeeHouseDialog = false;
      this.wrapperDom.style.display = 'none';

      if (type !== undefined) {
        document.getElementById('type' + type).style.display = 'none';
      }
    }
  }, {
    key: "changeSeeHouseDialogType",
    value: function changeSeeHouseDialogType(type) {
      // console.log('>>>>>>>>>changeSeeHouseDialogType', type)
      params_vrChatStatus.isShowSeeHouseDialog = true;
      this.wrapperDom.style.display = 'block';
      params_vrChatStatus.seeHouseDialogType = type;
      var chatBoxs = document.getElementsByClassName('vr-chat-box');
      var classType = 'type' + type;

      for (var i = 0; i < chatBoxs.length; i++) {
        chatBoxs[i].style.display = chatBoxs[i].classList.contains(classType) ? 'block' : 'none';
      }
    }
  }, {
    key: "closeIcon",
    value: function closeIcon() {
      params_vrChatStatus.isShowSeeHouseDialog = true;
      params_vrChatStatus.seeHouseDialogType = 2;
      console.log('closeIcon', this);
      this.wrapperDom.style.display = 'block';
      this.type1Dom.style.display = 'none';
      this.type2Dom.style.display = 'block';
      this.type3Dom.style.display = 'none';
      this.type5Dom.style.display = 'none';
      this.type6Dom.style.display = 'none';
      this.shaderDom.style.display = 'block';
    }
  }, {
    key: "cancelIcon",
    value: function cancelIcon() {
      params_vrChatStatus.isShowSeeHouseDialog = true;
      params_vrChatStatus.seeHouseDialogType = 2;
      this.wrapperDom.style.display = 'block';
      this.countdownDom.style.display = 'block';
      this.type1Dom.style.display = 'none';
      this.type2Dom.style.display = 'block';
      this.type3Dom.style.display = 'none';
      this.type5Dom.style.display = 'none';
      this.type6Dom.style.display = 'none';
      this.shaderDom.style.display = 'block';
    }
  }, {
    key: "exitVRChat",
    value: function exitVRChat() {
      this.cancelExit();
      vrChatExit();
    }
  }, {
    key: "cancelExit",
    value: function cancelExit() {
      params_vrChatStatus.isShowSeeHouseDialog = false;
      this.type2Dom.style.display = 'none';
      this.shaderDom.style.display = 'none'; // vrChatStatus.accompany.start()
    }
  }, {
    key: "closeSeeHouseDialog",
    value: function closeSeeHouseDialog() {
      params_vrChatStatus.isShowSeeHouseDialog = false;
      this.type1Dom.style.display = 'none';
      this.shaderDom.style.display = 'none';
    }
  }, {
    key: "recallVrchat",
    value: function recallVrchat() {
      var _vrChatStatus$accompa;

      params_vrChatStatus.isShowSeeHouseDialog = false;
      document.getElementById("type1").style.display = 'none';
      document.getElementById("shader").style.display = 'none';
      (_vrChatStatus$accompa = params_vrChatStatus.accompany) === null || _vrChatStatus$accompa === void 0 ? void 0 : _vrChatStatus$accompa.recallVrchat();
      vrChatCall();
      window.VRHOUSE_CONFIG.VRCHAT_CONFIG.RECALL_BTN_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.RECALL_BTN_CB();
      triggerConnectVrChat();

      if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
        console.log('miniprogram seehouse');
        this.wrapperDom.style.display = 'block';
        this.countdownDom.style.display = 'block'; // this.VR_VIEWER.moduleThumbnail.hide() // 

        this.leftAvatar && (this.leftAvatar.src = params_vrChatStatus.agentAvatar);
        params_vrChatStatus.seeHouseCountdownTimer = null;
        params_vrChatStatus.isShowSeeHouseDialog = true;
        params_vrChatStatus.seeHouseDialogType = 0;
        params_vrChatStatus.isShowSeeHouseCountdown = true;
        params_vrChatStatus.seeHouseCountdown = 30;
        params_vrChatStatus.isInitiator = true;
        params_vrChatStatus.isSeeGuideTip = false;
        var role = params_vrChatStatus.isCustomer === 'customer' ? params_vrChatStatus.roleA : params_vrChatStatus.roleB;
        document.getElementById('type1-txt').innerHTML = role + '繁忙中，请稍后再试或给他留言咨询';
        document.getElementById('countnum').innerHTML = role + '即将进入，请稍后...';
      }
    }
  }, {
    key: "showConnectedToast",
    value: function showConnectedToast() {
      var _this3 = this;

      if (window.VRHOUSE_CONFIG.VRCHAT_CONFIG.IS_HIDE_CONNECTED_CHAT_TOAST) return;
      var timer;
      this.changeSeeHouseDialogType(6);
      timer = setTimeout(function () {
        var dialogWaperDisplay = _this3.wrapperDom.style.display;

        if (params_vrChatStatus.isShowSeeHouseDialog && params_vrChatStatus.seeHouseDialogType === 6) {
          _this3.hideSeeHouseDialog(6);
        } else if (dialogWaperDisplay === 'block') {
          document.getElementById('type6').style.display = 'none';
        }

        clearTimeout(timer);
        timer = null;
      }, 2000);
    }
  }, {
    key: "showComment",
    value: function showComment() {
      this.closeSeeHouseDialog();
      window.VRHOUSE_CONFIG.VRCHAT_CONFIG.COMMENT_BTN_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.COMMENT_BTN_CB();
    }
  }]);

  return DialogDom;
}(dom_Dom);

/* harmony default export */ const dom_DialogDom = (DialogDom);
;// CONCATENATED MODULE: ./src/dom/TipDom/index.js
function TipDom_typeof(obj) { "@babel/helpers - typeof"; return TipDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TipDom_typeof(obj); }

function TipDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TipDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TipDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) TipDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) TipDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function TipDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) TipDom_setPrototypeOf(subClass, superClass); }

function TipDom_setPrototypeOf(o, p) { TipDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TipDom_setPrototypeOf(o, p); }

function TipDom_createSuper(Derived) { var hasNativeReflectConstruct = TipDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TipDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TipDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TipDom_possibleConstructorReturn(this, result); }; }

function TipDom_possibleConstructorReturn(self, call) { if (call && (TipDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return TipDom_assertThisInitialized(self); }

function TipDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TipDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function TipDom_getPrototypeOf(o) { TipDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TipDom_getPrototypeOf(o); }






var TipDom = /*#__PURE__*/function (_Dom) {
  TipDom_inherits(TipDom, _Dom);

  var _super = TipDom_createSuper(TipDom);

  function TipDom(option) {
    var _this;

    TipDom_classCallCheck(this, TipDom);

    _this = _super.call(this, option);

    _this.init();

    return _this;
  }

  TipDom_createClass(TipDom, [{
    key: "init",
    value: function init() {}
  }, {
    key: "renderPreAudioConnectedTips",
    value: function renderPreAudioConnectedTips() {
      console.log("renderPreAudioConnectedTips!!!", this.preAudioConnectedTips);
      var tips = this.preAudioConnectedTips;

      if (!tips) {
        tips = this.preAudioConnectedTips = createDOM('div', 'vr-chat-pre-audio-connected-loading-tips', 'vr-chat-pre-audio-connected-loading-tips');
        tips.innerHTML = "\n        <div class=\"vr-chat-loading-tips\">\n          <div id=\"vr-chat-loading-icon\"></div>\n          <div id=\"vr-chat-loading-text\">\u97F3\u9891\u8FDE\u63A5\u4E2D...</div>\n        </div>";
        document.body.appendChild(tips);
      }

      utils_domHandle.removeClass(this.preAudioConnectedTips, 'hide');
      console.log("renderPreAudioConnectedTips222", this.preAudioConnectedTips);
    }
  }, {
    key: "closePreAudioConnectedTips",
    value: function closePreAudioConnectedTips() {
      this.preAudioConnectedTips && utils_domHandle.addClass(this.preAudioConnectedTips, 'hide');
    }
  }]);

  return TipDom;
}(dom_Dom);

/* harmony default export */ const dom_TipDom = (TipDom);
;// CONCATENATED MODULE: ./src/dom/MiniCountdownDom/index.js
function MiniCountdownDom_typeof(obj) { "@babel/helpers - typeof"; return MiniCountdownDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, MiniCountdownDom_typeof(obj); }

function MiniCountdownDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MiniCountdownDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MiniCountdownDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) MiniCountdownDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) MiniCountdownDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function MiniCountdownDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) MiniCountdownDom_setPrototypeOf(subClass, superClass); }

function MiniCountdownDom_setPrototypeOf(o, p) { MiniCountdownDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MiniCountdownDom_setPrototypeOf(o, p); }

function MiniCountdownDom_createSuper(Derived) { var hasNativeReflectConstruct = MiniCountdownDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MiniCountdownDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MiniCountdownDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MiniCountdownDom_possibleConstructorReturn(this, result); }; }

function MiniCountdownDom_possibleConstructorReturn(self, call) { if (call && (MiniCountdownDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return MiniCountdownDom_assertThisInitialized(self); }

function MiniCountdownDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MiniCountdownDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function MiniCountdownDom_getPrototypeOf(o) { MiniCountdownDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MiniCountdownDom_getPrototypeOf(o); }


 // import Lottie from 'lottie-web';

 // const radar_users  = require('../../assets/assetsData/test');




var MiniCountdownDom = /*#__PURE__*/function (_Dom) {
  MiniCountdownDom_inherits(MiniCountdownDom, _Dom);

  var _super = MiniCountdownDom_createSuper(MiniCountdownDom);

  function MiniCountdownDom(option) {
    var _this;

    MiniCountdownDom_classCallCheck(this, MiniCountdownDom);

    _this = _super.call(this, option);

    _this.init();

    var VRCHAT_CONFIG = vrChatStatus.defaultConfig;
    _this.nearInterVrChatText = VRCHAT_CONFIG.ACCOMPANY_VOICE.nearInterVrChatText;
    _this.connectingText = VRCHAT_CONFIG.WAIT_CONNECTING_CONFIG.title;
    _this.twinkTimer = null;
    _this.waitTwinkTimer = null; // this.bottomShowHeight = null

    _this.raderWidth = 37;
    return _this;
  }

  MiniCountdownDom_createClass(MiniCountdownDom, [{
    key: "init",
    value: function init() {
      var VRCHAT_CONFIG = vrChatStatus.defaultConfig;
      var dom = this.dom = createDOM('div', 'countdown-mini', 'countdown-mini');
      var _VRCHAT_CONFIG$VR_CHA = VRCHAT_CONFIG.VR_CHAT_HOUSE_LIST,
          VR_CHAT_HOUSE_LIST = _VRCHAT_CONFIG$VR_CHA === void 0 ? {} : _VRCHAT_CONFIG$VR_CHA;
      var WAIT_CONNECTING_CONFIG = VRCHAT_CONFIG.WAIT_CONNECTING_CONFIG;
      var template = this.template = "\n      <div class=\"mini-box background\" id=\"mini-box\">\n        <div class=\"mini-rader\" id=\"mini-rader\" style=\"display: ".concat(WAIT_CONNECTING_CONFIG.isHideRader ? 'none' : 'inline-block', "\"></div>\n        <div style=\"margin-left: ").concat(WAIT_CONNECTING_CONFIG.isHideRader ? '5px' : '0', "\">\n          <div class=\"mini-text\" id='mini-text'>").concat(WAIT_CONNECTING_CONFIG.title, "</div>\n        </div>\n      </div>\n    ");
      dom.innerHTML = template; // const wrapperDom = this.wrapperDom = createDOM('div', 'countdown-mini-wrapper', 'countdown-mini-wrapper')
      // wrapperDom.appendChild(dom)
      // const pullHeadDom = document.getElementsByClassName('pull-head')[0]
      // console.log("pullHeadDom2", pullHeadDom)
      // pullHeadDom.appendChild(dom)
      // vrChatStatus.DOMS.pullHead.appendHead('mini-countdown-panel', dom, 'thumbnail')

      this.radarContainer = document.getElementById('mini-rader');
      this.miniContainer = document.getElementById('mini-box');
      this.miniText = document.getElementById('mini-text');
      this.raderWidth = WAIT_CONNECTING_CONFIG.isHideRader ? 10 : 37;
      this.startRaderAnimation(); // this.bottomShowHeight = VR_CHAT_HOUSE_LIST && VR_CHAT_HOUSE_LIST.BOTTOM_SHOW_HEIGHT || 60
    }
  }, {
    key: "startRaderAnimation",
    value: function startRaderAnimation() {
      var VRCHAT_CONFIG = vrChatStatus.defaultConfig;
      var _window$VRHOUSE_CONFI = window.VRHOUSE_CONFIG,
          STATUS_ISONLINE = _window$VRHOUSE_CONFI.STATUS_ISONLINE,
          _window$VRHOUSE_CONFI2 = _window$VRHOUSE_CONFI.RESOURCE_PATH,
          RESOURCE_PATH = _window$VRHOUSE_CONFI2 === void 0 ? '' : _window$VRHOUSE_CONFI2;

      if (VRCHAT_CONFIG.WAIT_CONNECTING_CONFIG.radarJson) {
        var animationData;

        try {
          animationData = JSON.parse(VRCHAT_CONFIG.WAIT_CONNECTING_CONFIG.radarJson);
        } catch (e) {
          animationData = VRCHAT_CONFIG.WAIT_CONNECTING_CONFIG.radarJson;
        }
      }

      if (!VRCHAT_CONFIG.WAIT_CONNECTING_CONFIG.isHideRader) {
        this.radarAnimation = Lottie.loadAnimation({
          container: this.radarContainer,
          renderer: 'svg',
          // 渲染方式:svg、canvas
          loop: true,
          //循环播放，默认：false
          autoplay: true,
          //自动播放 ，默认true
          animationData: animationData || radar_users_3x_namespaceObject // path: WAIT_CONNECTING_CONFIG && WAIT_CONNECTING_CONFIG.radarJson ? null : (STATUS_ISONLINE? RESOURCE_PATH+'/static/assetsData/radar_users@3x.json' : '../../../assets/assetsData/radar_users@3x.json')

        });
      }
    }
  }, {
    key: "startToMiniTranstion",
    value: function startToMiniTranstion() {
      var _this2 = this;

      this.miniContainer.style.height = '27px'; // this.dom.style.top = (-107) + 'px'

      this.dom.style.display = 'block';
      var l = this.miniText.offsetWidth;

      if (this.miniText.offsetWidth <= 0) {
        l = this.miniText.innerText.length * 12;
      }

      this.miniContainer.style.width = "calc(".concat(l, "px + ").concat(this.raderWidth, "px)");
      setTimeout(function () {
        _this2.dom.style.opacity = 1;
      }, 100);
    }
  }, {
    key: "startToHighTranstion",
    value: function startToHighTranstion() {// setTimeout(() => {
      //   this.dom.style.top = (-147) + 'px'
      //   // this.miniContainer.style.maxWidth = '210px'
      // },100) 
    }
  }, {
    key: "beforeConnectedTranstion",
    value: function beforeConnectedTranstion() {
      var _this3 = this;

      var _window$VRHOUSE_CONFI3 = window.VRHOUSE_CONFIG.STYLE_COLOR,
          STYLE_COLOR = _window$VRHOUSE_CONFI3 === void 0 ? StaticData.styleColor : _window$VRHOUSE_CONFI3;
      this.radarAnimation && this.radarAnimation.destroy();
      this.miniContainer.style.backgroundColor = STYLE_COLOR;
      this.miniContainer.style.width = "calc(".concat(this.nearInterVrChatText.replace(/[^\\x00-\xff]/g, '01').length * 6, "px + ").concat(this.raderWidth, "px)");
      this.miniText.innerText = this.nearInterVrChatText;
      this.radarContainer.innerHTML = "<img class=\"mini-radar-img\" src=".concat(vrChatStatus.agentAvatar, "></img>");
      return new Promise(function (resolve) {
        _this3.waitTwinkTimer = setTimeout(function () {
          clearTimeout(_this3.waitTwinkTimer);
          _this3.waitTwinkTimer = null;

          _this3.startTwinkling();

          resolve();
        }, 4000); // 4500是 铺满动效1s + 等待 3s
      })["catch"](function (error) {
        throw new Error(error);
      });
    }
  }, {
    key: "startToConnectedTranstion",
    value: function startToConnectedTranstion() {
      var _this4 = this;

      console.log("startToConnectedTranstion");
      if (this.dom.style.opacity === 0) return;
      this.dom.style.opacity = 0;
      var timer2 = setTimeout(function () {
        clearTimeout(timer2);
        timer2 = null;

        _this4.reset();
      }, 500); // 0.5秒后才渐隐结束
    }
  }, {
    key: "startTwinkling",
    value: function startTwinkling() {
      var _this5 = this;

      // 1s 闪烁
      if (vrChatStatus.isVrAudioConnected) return; // 已经接听了就不闪烁了

      console.log('startTwinkling');
      this.twinkle();
      this.twinkTimer = setInterval(function () {
        _this5.twinkle();
      }, 1000);
    }
  }, {
    key: "twinkle",
    value: function twinkle() {
      var _this6 = this;

      this.dom.style.opacity = 0;
      var timer = setTimeout(function () {
        clearTimeout(timer);
        timer = null;
        _this6.dom.style.opacity = 1;
      }, 500);
    }
  }, {
    key: "show",
    value: function show() {
      this.dom.style.opacity = 1;
      this.dom.style.display = 'block';
    }
  }, {
    key: "hide",
    value: function hide() {
      this.dom.style.display = 'none';
      clearTimeout(this.waitTwinkTimer);
      clearInterval(this.twinkTimer);
      this.waitTwinkTimer = null;
      this.twinkTimer = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.dom.style.display = 'none';
      this.dom.style.opacity = 0; // this.miniTxt2.style.display = 'block'

      this.dom.style.removeProperty('bottom'); // this.dom.style.removeProperty('opacity')

      this.miniContainer.removeAttribute('style');
      this.miniText.innerText = this.connectingText;
      this.radarContainer.innerHTML = ''; // domHandle.addClass(this.radarContainer, 'lg')
      // domHandle.addClass(this.miniText, 'lg')

      this.startRaderAnimation();
      clearTimeout(this.waitTwinkTimer);
      clearInterval(this.twinkTimer);
      this.waitTwinkTimer = null;
      this.twinkTimer = null;
    }
  }, {
    key: "setsliberBgColor",
    value: function setsliberBgColor(color) {
      domHandle.css(this.miniContainer, 'backgroundColor', color);
    }
  }]);

  return MiniCountdownDom;
}(dom_Dom);

/* harmony default export */ const dom_MiniCountdownDom = (MiniCountdownDom);
;// CONCATENATED MODULE: ./src/dom/HouseListDom/index.js
function HouseListDom_typeof(obj) { "@babel/helpers - typeof"; return HouseListDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, HouseListDom_typeof(obj); }

function HouseListDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HouseListDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HouseListDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) HouseListDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) HouseListDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function HouseListDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) HouseListDom_setPrototypeOf(subClass, superClass); }

function HouseListDom_setPrototypeOf(o, p) { HouseListDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HouseListDom_setPrototypeOf(o, p); }

function HouseListDom_createSuper(Derived) { var hasNativeReflectConstruct = HouseListDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = HouseListDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = HouseListDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return HouseListDom_possibleConstructorReturn(this, result); }; }

function HouseListDom_possibleConstructorReturn(self, call) { if (call && (HouseListDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return HouseListDom_assertThisInitialized(self); }

function HouseListDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HouseListDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function HouseListDom_getPrototypeOf(o) { HouseListDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HouseListDom_getPrototypeOf(o); }







var HouseListDom = /*#__PURE__*/function (_Dom) {
  HouseListDom_inherits(HouseListDom, _Dom);

  var _super = HouseListDom_createSuper(HouseListDom);

  function HouseListDom(option) {
    var _this;

    HouseListDom_classCallCheck(this, HouseListDom);

    _this = _super.call(this, option);
    _this.sourceHeight = 0;
    _this.isFeatureClose = true;
    _this.scrollHeight = 0;
    _this.hiddenH = 0;
    _this.thumbnailWapper = null;
    _this.SHOW_CONFIG = null; // 业务线配置的权限 是否显示带看清单

    _this.display = null; // 是否显示 display属性

    _this.visibility = true; // 是否可见 visibility属性

    _this.clOpacity = 0.3;

    _this.init();

    _this.bindEvent();

    return _this;
  }

  HouseListDom_createClass(HouseListDom, [{
    key: "init",
    value: function init() {
      var _window$VRHOUSE_CONFI = window.VRHOUSE_CONFIG.VRCHAT_CONFIG,
          IS_ENABLE_VR_CHAT = _window$VRHOUSE_CONFI.IS_ENABLE_VR_CHAT,
          HOUSE_LIST_CONFIG = _window$VRHOUSE_CONFI.HOUSE_LIST_CONFIG;
      this.SHOW_CONFIG = HOUSE_LIST_CONFIG && HOUSE_LIST_CONFIG.show || false;
      var dom = this.dom = createDOM('div', 'vr-chat-house-list-wrapper', "vr-chat-house-list-wrapper background hide");
      this.fixedDom = document.getElementById('fixed-block'); // dom.innerHTML = `
      // ${this.display && AppParams.isMobile ? VR_CHAT_HOUSE_LIST.CUSTOM_DOM : ''}
      // `
      // vrChatStatus.DOMS.pullHead.appendBody('vrChatHouseList',{root:dom,style:'none'},'vrChatHouseList')
      // this.thumbnail = parentDom

      this.thumbnailWapper = document.getElementById('thumbnail-wapper'); // console.log("this.thumbnailWapper", this.thumbnailWapper)

      Object.assign(window.VRHOUSE_API, {
        updateVrChatHouseListVisible: this.updateHouseListVisible.bind(this),
        setVrChatHouseList: this.setVrChatHouseList.bind(this),
        vrChatSliberDown: this.sliberDown.bind(this),
        vrChatSliberUp: this.sliberUp.bind(this)
      });
    }
  }, {
    key: "updateHouseListVisible",
    value: function updateHouseListVisible(show) {
      console.log("updateHouseListVisible", show);
      this.SHOW_CONFIG = show; // if(show) {
      //   this.show()
      // }
      // else {
      //   this.hide()
      // }
    }
  }, {
    key: "setVrChatHouseList",
    value: function setVrChatHouseList(customDom) {
      this.dom.innerHTML = customDom; // this.sourceHeight = (this.sourcesContainer && this.sourcesContainer.scrollHeight) || 0
      // if (this.isFeatureClose) {
      //   this.setInit()
      // }
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {}
  }, {
    key: "sliberDown",
    value: function sliberDown() {
      listener.dispatch('toDoSlider', 'pullHead', false);
    }
  }, {
    key: "sliberUp",
    value: function sliberUp() {
      listener.dispatch('toDoSlider', 'pullHead', true);
    }
  }, {
    key: "setOriginState",
    value: function setOriginState() {
      this.isFeatureClose = true; // console.log("setOriginState", this.thumbnailWapper)
      // domHandle.addClass(this.thumbnailWapper, 'hide')
      // this.VR_VIEWER.moduleGuideBtns && this.VR_VIEWER.moduleGuideBtns.setOpacity(1)
      // this.VR_VIEWER.setBackgroundOpacity(1)
    }
  }, {
    key: "hide",
    value: function hide() {
      console.log("moduleChatHouseList HIDE!!!!");
      this.setOriginState();
      utils_domHandle.addClass(this.dom, 'hide');
      this.display = false; // this.setFeatureCloseState(false)

      params_vrChatStatus.globalState.moduleHouseViewer.viewerPanel.showRecommendHouseList();
      if (!window.VRHOUSE_CONFIG.VRCHAT_CONFIG.HOUSE_LIST_CONFIG) return; //如果没有推荐房源，不用设置
      // this.setTranslateY(0, true)
    }
  }, {
    key: "toggleVisibility",
    value: function toggleVisibility(visibility) {
      this.visibility = visibility;
      visibility ? utils_domHandle.removeClass(this.dom, 'isVisibility') : utils_domHandle.addClass(this.dom, 'isVisibility');
      this.fixBorderRadius();
    }
  }, {
    key: "fixBorderRadius",
    value: function fixBorderRadius() {
      console.log("fixBorderRadius", this.SHOW_CONFIG);
      var moduleChat = params_vrChatStatus.globalState.moduleChat;

      if (this.SHOW_CONFIG) {
        utils_domHandle.addClass(moduleChat.chatPanel.vrChatContent, 'has-next');
        utils_domHandle.addClass(moduleChat.chatPanel.hangUpDom, 'has-next');
        utils_domHandle.addClass(moduleChat.countdownPanel.countdownDom, 'has-next');
      } else {
        utils_domHandle.removeClass(moduleChat.chatPanel.vrChatContent, 'has-next');
        utils_domHandle.removeClass(moduleChat.chatPanel.hangUpDom, 'has-next');
        utils_domHandle.removeClass(moduleChat.countdownPanel.countdownDom, 'has-next');
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var HOUSE_LIST_CONFIG = window.VRHOUSE_CONFIG.VRCHAT_CONFIG.HOUSE_LIST_CONFIG; // this.setOriginState()
      // this.setFeatureCloseState(true)
      // this.VR_VIEWER.moduleThumbnail.setFeatureCloseState(false)
      // this.setsliberBgColor('rgba(0,0,0,.3)')

      console.log("moduleChatHouseList---SHOW!!!", this.SHOW_CONFIG);
      this.fixBorderRadius();

      if (this.SHOW_CONFIG) {
        utils_domHandle.removeClass(this.dom, 'hide');
      }

      params_vrChatStatus.globalState.moduleHouseViewer.viewerPanel.hideRecommendHouseList();
      return; // TODO 下面可能删除

      if (!this.SHOW_CONFIG) {
        this.setInit();
        return;
      }

      VR_CHAT_HOUSE_LIST && utils_domHandle.addClass(this.dom, 'isVisibility');
      this.display = true;
      this.fixBorderRadius();
      utils_domHandle.removeClass(this.dom, 'hide');
      this.setInit(); //带看回来，虽然先显示元素，但执行获取会取不到高，所以异步执行，加isVisibility，是因为，先显示异步算位置，会有一个位置闪烁

      setTimeout(function () {
        _this2.sourceHeight = _this2.sourcesContainer && _this2.sourcesContainer.scrollHeight || 0;
        _this2.scrollHeight = _this2.sourceHeight - _this2.bottomShowHeight;
        console.log("show", _this2.sourceHeight, _this2.bottomShowHeight, _this2.scrollHeight); // this.setTranslateY(this.scrollHeight, true)

        _this2.sliberDown();

        if (!_this2.VR_VIEWER.isGuideFullScreen) {
          utils_domHandle.removeClass(_this2.dom, 'isVisibility');
        }
      }, 0);
    }
  }, {
    key: "setsliberBgColor",
    value: function setsliberBgColor(color) {
      utils_domHandle.css(this.dom, 'backgroundColor', color);
      this.VR_VIEWER.moduleThumbnail.setThumbListTransparentBg(color, true);
      this.VR_VIEWER.moduleChat.setsliberBgColor(color);
      this.VR_VIEWER.moduleMiniChat.setsliberBgColor(color);
    }
  }]);

  return HouseListDom;
}(dom_Dom);

/* harmony default export */ const dom_HouseListDom = (HouseListDom);
;// CONCATENATED MODULE: ./src/dom/ViewerPanelDom/index.js
function ViewerPanelDom_typeof(obj) { "@babel/helpers - typeof"; return ViewerPanelDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ViewerPanelDom_typeof(obj); }

function ViewerPanelDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ViewerPanelDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ViewerPanelDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) ViewerPanelDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) ViewerPanelDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ViewerPanelDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ViewerPanelDom_setPrototypeOf(subClass, superClass); }

function ViewerPanelDom_setPrototypeOf(o, p) { ViewerPanelDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ViewerPanelDom_setPrototypeOf(o, p); }

function ViewerPanelDom_createSuper(Derived) { var hasNativeReflectConstruct = ViewerPanelDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ViewerPanelDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ViewerPanelDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ViewerPanelDom_possibleConstructorReturn(this, result); }; }

function ViewerPanelDom_possibleConstructorReturn(self, call) { if (call && (ViewerPanelDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ViewerPanelDom_assertThisInitialized(self); }

function ViewerPanelDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ViewerPanelDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ViewerPanelDom_getPrototypeOf(o) { ViewerPanelDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ViewerPanelDom_getPrototypeOf(o); }









var ViewerPanelDom = /*#__PURE__*/function (_Dom) {
  ViewerPanelDom_inherits(ViewerPanelDom, _Dom);

  var _super = ViewerPanelDom_createSuper(ViewerPanelDom);

  function ViewerPanelDom(option) {
    var _this;

    ViewerPanelDom_classCallCheck(this, ViewerPanelDom);

    _this = _super.call(this, option);
    _this.createElement = option.domTool.createElement;
    _this.defaultConfig = params_vrChatStatus.defaultConfig;

    _this.init();

    _this.resetStatus = null;
    return _this;
  }

  ViewerPanelDom_createClass(ViewerPanelDom, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      if (this.defaultConfig.IS_ENABLE_VR_CHAT) {// this.createSeeHouseBtn()
        // this.addRendererListener()
      }

      params_vrChatStatus.listener.add('toDoUpdatePullHead', 'pullHead', function (data) {
        _this2.resetStatus && Object.assign(_this2.resetStatus, data);
      }, null);
    }
  }, {
    key: "viewerToVrChatMode",
    value: function viewerToVrChatMode() {
      // 展示端状态到呼叫状态
      console.log("viewerToVrChatMode", params_vrChatStatus.globalState.type, params_vrChatStatus.globalState.type);

      if (params_vrChatStatus.globalState.type === '3d' || !params_vrChatStatus.canOperateScene) {
        // 3d 或者 2d的游客
        console.log("viewerToVrChatMode hide3D");
        this.hide();
      } else {
        console.log("viewerToVrChatMode hide2D");
        this.hide2D();
      } // vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender', false) // 停止展示端自转

    }
  }, {
    key: "createSeeHouseBtn",
    value: function createSeeHouseBtn() {
      var _this3 = this;

      params_vrChatStatus.DOMS.thumbnail.appendListItem({
        inner: function inner() {
          return _this3.createElement('div', //标签名
          '在线带看', //标签里面的内容
          {
            "class": 'see-house-btn',
            style: "background-color: ".concat(_this3.STYLE_COLOR)
          }, {
            click: function click(e) {
              if (e && e.stopPropagation) {
                e.stopPropagation();
              } else if (window.event) {
                window.event.cancelBubble = true;
              }

              _this3.handleSeeHouseClick.call(_this3);
            }
          });
        }
      });

      if (!AppParams.isMobile) {
        params_vrChatStatus.DOMS.thumbnail.appendListItem({
          inner: function inner() {
            return _this3.createElement('div', //标签名
            '', //标签里面的内容
            {
              "class": 'see-house-qrcode',
              id: 'see-house-qrcode'
            });
          }
        });
      } // vrChatStatus.listener.add('name', 'starterId', () => {
      //   this.seeHouseQrcodeDom && domHandle.removeClass(this.seeHouseQrcodeDom, 'is-show')
      // })

    }
  }, {
    key: "setSeeHouseQrcode",
    value: function setSeeHouseQrcode() {
      console.log('setSeeHouseQrcode call');
      this.seeHouseQrcodeDom = document.getElementById("see-house-qrcode");
      var VR_SEE_HOUSE_DIALOG = params_vrChatStatus.defaultConfig.VR_SEE_HOUSE_DIALOG;

      if (VR_SEE_HOUSE_DIALOG && VR_SEE_HOUSE_DIALOG.qrcode_img && this.seeHouseQrcodeDom.children.length < 1) {
        this.seeHouseQrcodeDom.innerHTML = "\n      <img class=\"qrcode-img\" src=".concat(VR_SEE_HOUSE_DIALOG.qrcode_img, " />\n      <div class=\"qrcode-title\">").concat(VR_SEE_HOUSE_DIALOG.qrcode_title, "</div>\n      <div class=\"qrcode-describe\">").concat(VR_SEE_HOUSE_DIALOG.qrcode_describe, "</div>\n    ");
      }

      utils_domHandle.addClass(this.seeHouseQrcodeDom, 'is-show'); // this.seeHouseQrcodeDgIsShow = isShow;
    }
  }, {
    key: "handleSeeHouseClick",
    value: function handleSeeHouseClick() {
      var _this4 = this;

      if (!AppParams.isMobile) {
        this.setSeeHouseQrcode(true);
        return false;
      }

      params_vrChatStatus.listener.dispatch("todoSetLog", 'module', {
        vrChartClick: true
      });
      params_vrChatStatus.listener.dispatch('getState', 'decStyleListRender', function (data) {
        console.log('decStyleListRender getState', data);
        AppParams.changeDecorationStyleReady = !data.isLoading;
        AppParams.changedDecorationStyle = data.isChange;

        var startVrChat = function startVrChat() {
          var _vrChatStatus$accompa;

          console.log("开始带看！");
          document.getElementById('type1').style.display = 'none';
          _this4.defaultConfig.SEE_HOUSE_CB && _this4.defaultConfig.SEE_HOUSE_CB();
          window.vrChatConnectorApi.outputNativeLog('H5 page click WVRChatCallVrChat');
          (_vrChatStatus$accompa = params_vrChatStatus.accompany) === null || _vrChatStatus$accompa === void 0 ? void 0 : _vrChatStatus$accompa.reset();
          vrChatCall();
        };

        var startVrChatFn = function startVrChatFn(data) {
          if (data.step == data.sum) {
            startVrChat();
            params_vrChatStatus.listener.remove('reseted', 'system', startVrChatFn);
          }
        };

        if (AppParams.changedDecorationStyle) {
          // 改变过装修风格的话 发起带看要切换默认房源风格
          params_vrChatStatus.listener.dispatch('setDefaultDecorationStyle', 'decStyleListRender');
          params_vrChatStatus.listener.dispatch('todoSetDefaultSize', 'sizeTranslateDom'); // 监听切风格完成的回调 再发起带看

          params_vrChatStatus.listener.add('reseted', 'system', startVrChatFn, null);
        } else {
          startVrChat();
        }
      });
      console.log("changeDecorationStyleReady", AppParams.changeDecorationStyleReady); // if (AppParams.changeDecorationStyleReady === false) {
      //   return false
      // }
      // this.VR_VIEWER.moduleChat.isAiVoiceCancel = false
    }
  }, {
    key: "addRendererListener",
    value: function addRendererListener() {
      var _this5 = this;

      var rendererDom = document.getElementById(window.VRHOUSE_CONFIG.rendererId || 'root');
      utils_eventHandle.bind(rendererDom, 'click', function (event) {
        // event.preventDefault()
        // event.stopPropagation()
        utils_domHandle.removeClass(_this5.seeHouseQrcodeDom, 'is-show');
      }, false);
    }
  }, {
    key: "hide",
    value: function hide() {
      var temp = params_vrChatStatus.DOMS.pullHead.refreshHide({
        feedback: true,
        spot: true,
        thumbnail: true,
        houseList: true
      });

      if (!this.resetStatus) {
        this.resetStatus = temp;
      }
    }
  }, {
    key: "hide2D",
    value: function hide2D() {
      var temp = params_vrChatStatus.DOMS.pullHead.refreshHide({
        feedback: true,
        spot: false,
        thumbnail: true,
        houseList: true
      });

      if (!this.resetStatus) {
        this.resetStatus = temp;
      }

      params_vrChatStatus.listener.dispatch('toDoHideGuideMap', 'roomModule', true);
    }
  }, {
    key: "show",
    value: function show() {
      params_vrChatStatus.DOMS.pullHead.refreshHide(this.resetStatus, true, true);
      this.resetStatus = null;
      params_vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender');
    }
  }, {
    key: "hideRedPacket",
    value: function hideRedPacket() {
      console.log("hideRedPacket");
      params_vrChatStatus.listener.dispatch('toDoRenderOut', 'marketing', null, this); //关闭锚点，广告等功能
    }
  }, {
    key: "showRedPacket",
    value: function showRedPacket() {
      console.log("showRedPacket");
      params_vrChatStatus.listener.dispatch('toDoRenderIn', 'marketing', null); //开启锚点，广告等功能
    }
  }, {
    key: "showRecommendHouseList",
    value: function showRecommendHouseList() {
      params_vrChatStatus.DOMS.pullHead.refreshHide({
        houseList: false
      });
    }
  }, {
    key: "hideRecommendHouseList",
    value: function hideRecommendHouseList() {
      params_vrChatStatus.DOMS.pullHead.refreshHide({
        houseList: true
      });
    }
  }]);

  return ViewerPanelDom;
}(dom_Dom);

/* harmony default export */ const dom_ViewerPanelDom = (ViewerPanelDom);
;// CONCATENATED MODULE: ./src/dom/ViewerToolbarDom/index.js
function ViewerToolbarDom_typeof(obj) { "@babel/helpers - typeof"; return ViewerToolbarDom_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ViewerToolbarDom_typeof(obj); }

function ViewerToolbarDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ViewerToolbarDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ViewerToolbarDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) ViewerToolbarDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) ViewerToolbarDom_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function ViewerToolbarDom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ViewerToolbarDom_setPrototypeOf(subClass, superClass); }

function ViewerToolbarDom_setPrototypeOf(o, p) { ViewerToolbarDom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ViewerToolbarDom_setPrototypeOf(o, p); }

function ViewerToolbarDom_createSuper(Derived) { var hasNativeReflectConstruct = ViewerToolbarDom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ViewerToolbarDom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ViewerToolbarDom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ViewerToolbarDom_possibleConstructorReturn(this, result); }; }

function ViewerToolbarDom_possibleConstructorReturn(self, call) { if (call && (ViewerToolbarDom_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ViewerToolbarDom_assertThisInitialized(self); }

function ViewerToolbarDom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ViewerToolbarDom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ViewerToolbarDom_getPrototypeOf(o) { ViewerToolbarDom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ViewerToolbarDom_getPrototypeOf(o); }




 // 返回全景状态时要重置 还没确定怎么做

var ViewerToolbarDom = /*#__PURE__*/function (_Dom) {
  ViewerToolbarDom_inherits(ViewerToolbarDom, _Dom);

  var _super = ViewerToolbarDom_createSuper(ViewerToolbarDom);

  function ViewerToolbarDom(option) {
    var _this;

    ViewerToolbarDom_classCallCheck(this, ViewerToolbarDom);

    _this = _super.call(this, option);
    _this.telBtnStatus = -1;
    _this.telTool = null;
    _this.telDom = null;
    _this.houseInfoTool = null;
    _this.houseInfoDom = null;
    _this.toolbar = option.DOMS.toolbar;
    _this.resetStatus = null;

    _this.init(option);

    return _this;
  }

  ViewerToolbarDom_createClass(ViewerToolbarDom, [{
    key: "init",
    value: function init(options) {
      var _this2 = this;

      // this.telTool = options.DOMS.toolbar.addToolButton({
      //     type: 'vrchat',
      //     doIt: this.clickHandle.bind(this),
      //     className: 'icon-tel icon-tel-hide',
      //     idName: 'icon-tel',
      //     isNoSet: true
      // })
      Object.assign(window.VRHOUSE_API, {
        updatePanoTelIcons: this.updatePanoTelIcons.bind(this)
      }); // this.houseInfoTool = options.DOMS.toolbar.addToolButton({
      //   type: 'vrchat',
      //   doIt: this.clickHouseInfo.bind(this),
      //   className: 'icon-info icon-info-hide',
      //   idName: 'icon-info',
      //   isNoSet: true
      // })

      params_vrChatStatus.listener.add('resetToolbar', 'toolbar', function (currentStatus) {
        _this2.resetStatus && Object.assign(_this2.resetStatus, currentStatus);
      });
    }
  }, {
    key: "clickHandle",
    value: function clickHandle() {
      window.VRHOUSE_CONFIG.VRCHAT_CONFIG.ICON_TEL_BTN_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.ICON_TEL_BTN_CB({
        status: this.telBtnStatus,
        targetClientId: params_vrChatStatus.cClientID
      });
    }
  }, {
    key: "clickHouseInfo",
    value: function clickHouseInfo() {
      if (params_vrChatStatus.defaultConfig.IS_HIDE_INFO_BTN) return;
      window.VRHOUSE_CONFIG.VRCHAT_CONFIG.HOUSE_INFO_BTN_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.HOUSE_INFO_BTN_CB();
    }
  }, {
    key: "updatePanoTelIcons",
    value: function updatePanoTelIcons(status) {
      status = Number(status);
      this.telBtnStatus = status;
      this.telDom = document.getElementById('icon-tel'); // 更新索要手机号icon状态 -1:隐藏, 0:初始状态, 1:成功, 2:拒绝

      if (status === -1) {
        utils_domHandle.addClass(this.telDom, 'icon-tel-hide');
      } else {
        utils_domHandle.removeClass(this.telDom, 'icon-tel-hide');

        switch (status) {
          case 0:
            utils_domHandle.removeClass(this.telDom, 'is-active');
            utils_domHandle.removeClass(this.telDom, 'is-refuse');
            break;

          case 1:
            utils_domHandle.addClass(this.telDom, 'is-active');
            utils_domHandle.removeClass(this.telDom, 'is-refuse');
            break;

          case 2:
            utils_domHandle.removeClass(this.telDom, 'is-active');
            utils_domHandle.addClass(this.telDom, 'is-refuse');
            break;
        }
      }
    }
  }, {
    key: "updateHouseInfo",
    value: function updateHouseInfo(isHide) {
      this.houseInfoDom = document.getElementById('icon-info');

      if (isHide) {
        utils_domHandle.addClass(this.houseInfoDom, 'icon-info-hide');
      } else {
        utils_domHandle.removeClass(this.houseInfoDom, 'icon-info-hide');
      }
    }
  }, {
    key: "restVrChatIconStatus",
    value: function restVrChatIconStatus() {
      this.updatePanoTelIcons(-1);
      this.updateHouseInfo(true);
    }
  }, {
    key: "setToolBarMode",
    value: function setToolBarMode(isSeeHouse) {
      var hideTooldic = ['vr-btn', 'change-decoration-btn', 'size-btn', 'switchScreen'];
      console.log("setToolBarMode", this.resetStatus, isSeeHouse);

      if (isSeeHouse) {
        var temp = this.toolbar.setHide({
          'vr-btn': true,
          'change-decoration-btn': true,
          'size-btn': true,
          'switchScreen': true
        });
        console.log("setToolBarMode TEMP", temp);

        if (!this.resetStatus) {
          this.resetStatus = temp;
        }
      } else {
        this.resetStatus && this.toolbar.setShow(this.resetStatus);
        this.resetStatus = null;
      } // hideTooldic.forEach(id => {
      //   this.toolbar.hideButton(id, isSeeHouse)
      // }); 

    }
  }]);

  return ViewerToolbarDom;
}(dom_Dom);

/* harmony default export */ const dom_ViewerToolbarDom = (ViewerToolbarDom);
;// CONCATENATED MODULE: ./src/dom/index.js











function init(option) {
  var moduleChat = {};
  moduleChat.countdownPanel = new dom_CountdownDom(option, moduleChat);
  moduleChat.chatPanel = new dom_ChatDom(option, moduleChat);
  moduleChat.dialog = new dom_DialogDom(option, moduleChat);
  moduleChat.houseList = new dom_HouseListDom(option, moduleChat);
  moduleChat.tips = new dom_TipDom(option, moduleChat);
  moduleChat.miniCountdownPanel = new dom_MiniCountdownDom(option, moduleChat);
  moduleChat.accompanyStatus = params_vrChatStatus.accompanyStatus;
  params_vrChatStatus.globalState.moduleChat = moduleChat;
  var moduleHouseViewer = {};
  moduleHouseViewer.viewerPanel = new dom_ViewerPanelDom(option);
  moduleHouseViewer.viewerToolbarDom = new dom_ViewerToolbarDom(option);
  params_vrChatStatus.globalState.moduleHouseViewer = moduleHouseViewer;
}

/* harmony default export */ const dom = ({
  init: init
});
;// CONCATENATED MODULE: ./src/native-interface/utils/throttle.js
function Throttle(options) {
  this.callback = options.callback;
  this.waitTime = options.waitTime === undefined ? 800 : options.waitTime;
  this.timeId = null;
}

Throttle.prototype.execute = function (target) {
  this.clear();
  this.callback(target);
};

Throttle.prototype.throttleExecute = function (target) {
  var _this = this;

  if (this.timeId) return;
  this.timeId = setTimeout(function () {
    _this.callback(target);

    _this.timeId = null;
  }, this.waitTime);
};

Throttle.prototype.endExecute = function (target) {
  if (this.timeId) {
    clearTimeout(this.timeId);
    this.timeId = null;
    this.callback(target);
  }
};

Throttle.prototype.clear = function () {
  if (this.timeId) {
    clearTimeout(this.timeId);
    this.timeId = null;
  }
};

/* harmony default export */ const throttle = (Throttle);
;// CONCATENATED MODULE: ./src/house-viewer-interface/config/index.js












var panoCameraChangeThrottle = null;
var stereoCameraChangeThrottle = null;
var panoCameraChangeParams = {};
var stereoCameraChangeParams = {};
var config = {
  roomRender: {
    cameraTransformStart: function cameraTransformStart(data, extra) {
      // console.log("cameraTransformStart",data,extra)
      console.log("cameraTransformStart");
      if (extra.isSync) return;
      var _vrChatStatus$globalS = params_vrChatStatus.globalState,
          globalState = _vrChatStatus$globalS === void 0 ? {} : _vrChatStatus$globalS;

      if (params_vrChatStatus.isCustomer && params_vrChatStatus.isBPanoPlaying) {
        showPeerIsOperatingDialog();
      }

      params_vrChatStatus.isChatSceneOperating = true;

      if (panoCameraChangeThrottle && panoCameraChangeThrottle.timeId) {
        panoCameraChangeThrottle.endExecute();
      }

      syncSceneInfo({
        type: "pano".concat(globalState.type === '3d' ? "" : "2d", "-camera-start"),
        data: data
      });
      params_vrChatStatus.isPanoPlaying = true;
    },
    cameraTransform: function cameraTransform(data) {
      var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      console.log("cameraTransform"); // 漫游点切换的动画中直接return 不应发送给对方

      if (extra && extra.from && extra.from == 'spotRoam') return;
      panoCameraChangeParams.extra = extra;
      if (extra.isSync) return;

      if (!panoCameraChangeThrottle) {
        var _vrChatStatus$globalS2 = params_vrChatStatus.globalState,
            globalState = _vrChatStatus$globalS2 === void 0 ? {} : _vrChatStatus$globalS2;
        panoCameraChangeThrottle = new throttle({
          callback: function callback() {
            var extra = panoCameraChangeParams.extra;
            syncSceneInfo({
              type: "pano".concat(globalState.type === '3d' ? "" : "2d", "-camera-change"),
              data: extra.origin
            });
          }
        });
      }

      panoCameraChangeThrottle.throttleExecute();
    },
    cameraTransformEnd: function cameraTransformEnd(data, extra) {
      console.log("cameraTransformEnd");
      if (extra.isSync) return;
      var _vrChatStatus$globalS3 = params_vrChatStatus.globalState,
          globalState = _vrChatStatus$globalS3 === void 0 ? {} : _vrChatStatus$globalS3;
      params_vrChatStatus.isChatSceneOperating = false;

      if (panoCameraChangeThrottle && panoCameraChangeThrottle.timeId) {
        panoCameraChangeThrottle.endExecute();
      }

      syncSceneInfo({
        type: "pano".concat(globalState.type === '3d' ? "" : "2d", "-camera-end"),
        data: data
      });
      params_vrChatStatus.isPanoPlaying = false;
    }
  },
  houseRender: {
    cameraTransformStart: function cameraTransformStart(data, extra) {
      if (extra.isSync) return;
      console.log("house render cameraTransformStart");
      params_vrChatStatus.isChatSceneOperating = true;

      if (stereoCameraChangeThrottle && stereoCameraChangeThrottle.timeId) {
        stereoCameraChangeThrottle.endExecute();
      }

      syncSceneInfo({
        type: 'stereo-camera-start',
        data: data
      });
    },
    cameraTransform: function cameraTransform(data, extra) {
      if (extra.isSync) return;
      console.log("house render cameraTransform", extra.origin, stereoCameraChangeThrottle);
      stereoCameraChangeParams.extra = extra;

      if (!stereoCameraChangeThrottle) {
        stereoCameraChangeThrottle = new throttle({
          callback: function callback() {
            var extra = stereoCameraChangeParams.extra;
            syncSceneInfo({
              type: 'stereo-camera-change',
              data: extra.origin
            });
          }
        });
      } else {
        stereoCameraChangeThrottle.throttleExecute();
      }
    },
    cameraTransformEnd: function cameraTransformEnd(data, extra) {
      if (extra.isSync) return;
      console.log("house render cameraTransformEnd");
      params_vrChatStatus.isChatSceneOperating = false;

      if (stereoCameraChangeThrottle && stereoCameraChangeThrottle.timeId) {
        stereoCameraChangeThrottle.endExecute();
      }

      syncSceneInfo({
        type: 'stereo-camera-end',
        data: data
      });
    }
  },
  roomModule: {
    toDoSetDataId: function toDoSetDataId(data, extra) {
      console.warn('toDoSetDataId', extra && extra.origin);
      if (!extra.origin) return;
      params_vrChatStatus.isChangeHotSpotPlaying = true;

      if (extra.isSync) {
        return;
      }

      syncSceneInfo({
        type: 'change-hotspot',
        data: extra.origin
      });
    },
    setedDataId: function setedDataId(data, extra) {
      console.warn('setedDataId', data, extra);
      params_vrChatStatus.isChangeHotSpotPlaying = false;

      if (extra.lastId !== extra.origin.id && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.IN_CHAT_MOVE_CB) {
        window.VRHOUSE_CONFIG.VRCHAT_CONFIG.IN_CHAT_MOVE_CB();
      }
    },
    toRoomEnd: function toRoomEnd(data, extra) {
      console.log("toRoomEnd, roomModule");
      params_vrChatStatus.isSceneOperatePlaying = false;

      if (params_vrChatStatus.cacheFn) {
        params_vrChatStatus.cacheFn();
        params_vrChatStatus.cacheFn = null;
      }

      if (!isChatOneToOne) {
        sendToServer({
          operation: {
            type: 'upload-house-url'
          },
          applyReleaseLock: true
        });
      }
    }
  },
  room2DModule: {
    toDoSetDataId: function toDoSetDataId(data, extra) {
      console.warn('room2DModule toDoSetDataId', extra.origin);
      if (extra.isSync || !extra.origin) return;
      syncSceneInfo({
        type: 'change-hotspot',
        data: extra.origin
      });
    },
    setedDataId: function setedDataId(data, extra) {
      console.warn('setedDataId', data, extra);

      if (extra.lastId !== extra.origin.id && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.IN_CHAT_MOVE_CB) {
        window.VRHOUSE_CONFIG.VRCHAT_CONFIG.IN_CHAT_MOVE_CB();
      }
    }
  },
  module: {
    toDoChangeModule: function toDoChangeModule(data, extra) {
      if (!window.VRHOUSE_CONFIG.VRCHAT_CONFIG.AUTO_REALTIME) return; // 配置控制是否阻止实时同步

      console.log("toDoChangeModule", data, extra);

      if (extra.origin && extra.origin == 2) {
        params_vrChatStatus.isToHousePlaying = true;
      } // if(extra.origin && (extra.origin === 1 || extra.origin === 3)) {
      //     vrChatStatus.isSceneOperatePlaying = true
      // }


      if (extra.isSync) return;
      syncSceneInfo({
        type: 'change-current-fullscreen',
        data: extra.origin + ''
      });
    }
  },
  houseModule: {
    switchType: function switchType(data, extra) {
      console.log("houseModule switchType", data, extra);
      params_vrChatStatus.isToHousePlaying = true;
      if (extra && extra.isSync || !(extra && extra.origin)) return;
      console.warn('setType', data, extra);
      if (!extra) return;
      syncSceneInfo({
        type: 'set-guide-tab',
        data: extra.origin
      });
    },
    switchTypeEnd: function switchTypeEnd(data, extra) {
      console.log("houseModule switchTypeEnd", data, extra); // if(extra.isSync) {

      params_vrChatStatus.isToHousePlaying = false;

      if (params_vrChatStatus.cacheFn) {
        params_vrChatStatus.cacheFn();
        params_vrChatStatus.cacheFn = null;
      }

      if (params_vrChatStatus.cacheSceneStatus) {
        setTimeout(function () {
          setSceneStatus(params_vrChatStatus.cacheSceneStatus);
          params_vrChatStatus.cacheSceneStatus = null;
        }, 1000);
      } // }

    },
    toDoToRoom: function toDoToRoom(data, extra) {
      // console.log('houseModule toDoToRoom',data,extra)
      if (extra.isSync) return;
      extra.isSync = true;
      syncSceneInfo({
        type: 'toDoToRoom',
        data: {
          data: data,
          extra: extra
        }
      });
    },
    // toDoSetFloor: (data,extra) => { //553删除vrsdk楼层切换监听由ui实现
    //     console.warn('toDoSetFloor', data, extra)
    //     if(extra.isSync) return
    //     if (!extra) return
    //     if(extra.origin && (extra.origin.index !== null)) {
    //         syncSceneInfo({
    //             type: 'change-guide-floor',
    //             data: extra.origin
    //         })
    //     }
    // },
    toDoRoamAnimateOut: function toDoRoamAnimateOut(data, extra) {
      console.warn('toDoRoamAnimateOut', data, extra);
      var dealt = dealCacheReloadNewMessage(); // if (!dealt) {
      //     console.log("syncFirstFrame:::::::toDoRoamAnimateOut")
      //     syncFirstFrame()
      // }
    }
  },
  system: {
    toDoReset: function toDoReset(opts) {
      params_vrChatStatus.globalState.type = opts.dataFrom.type === '2D' ? '2d' : '3d';

      if (!!!opts.currentHouseOptions) {
        params_vrChatStatus.isChatChange = false;
        return;
      }

      params_vrChatStatus.isChatChange = true;
      console.log('toDoReset', opts);

      if (params_vrChatStatus.isChatPage) {
        willResetState();
        console.log("reloadHouse", params_vrChatStatus.globalState.type, opts.currentHouseOptions.type);

        if (cacheCommonMessages.reloadNewMessage == opts.currentHouseOptions) {
          return;
        }

        if (!!!version_pageVisibleState.isVisible) {
          //房源未加载 window.vrChatStatus.isLoadingHouse|| 
          cacheCommonMessages.reloadNewMessage = opts.currentHouseOptions;
          return;
        }
      }

      window.vrChatConnectorApi && window.vrChatConnectorApi.outputNativeLog('outputLog', 'js log: getData callback start');
      var options = opts.currentHouseOptions || params_vrChatStatus.newHouseOptions;
      params_vrChatStatus.newHouseUrl = options.houseUrl;
      params_vrChatStatus.newHouseDataUrl = options.url;
      params_vrChatStatus.newHousePrefix = options.prefix;
      params_vrChatStatus.taskId = options.taskId;
      params_vrChatStatus.appKey = options.appKey;

      if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
        var urlData = {
          response: "switchUrl",
          key: Date.now(),
          testcode: 1,
          data: options.houseUrl
        };
        params_vrChatStatus.ws3Socket.send(JSON.stringify(urlData));
      } else {
        window.vrChatConnectorApi && window.vrChatConnectorApi.switchURL(options.houseUrl);
      } // window.vrChatConnectorApi && window.vrChatConnectorApi.switchURL(options.houseUrl)
      // vrChatStatus.newHouseOptions = null
      //VR_VIEWER.moduleChat.updateMemberTipsDomPos()
      //切换讲房语音


      params_vrChatStatus.accompany.preReloadAihouse();
    },
    "resetError": function resetError(e) {
      console.log("resetError", e);
      var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
      VRCHAT_CONFIG.HOUSE_LIST_CONFIG && VRCHAT_CONFIG.HOUSE_LIST_CONFIG.newHouseError && VRCHAT_CONFIG.HOUSE_LIST_CONFIG.newHouseError();
    }
  },
  firstScreen: {
    leave: function leave() {
      // 只有首次的情况才执行 为统计数据
      // window.vrChatConnectorApi.firstFrameReady()
      // console.log("给客户端发日志========》")
      var dealt = dealCacheReloadNewMessage();

      if (!dealt) {
        console.log("syncFirstFrame:::::::firstScreen");
        syncFirstFrame();
      }

      window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CHAT_FIRST_LEAVE && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CHAT_FIRST_LEAVE();
    }
  },
  init: {
    toDoBack: function toDoBack(cb, extra) {// console.log('退出状态',vrChatStatus.accompany.playStatus)
      // if(vrChatStatus.accompany.playStatus === 0){
      //     if(vrChatStatus.accompany.aihouse.Ai.isAiVoicePlaying){
      //         return
      //     }
      // }else if(vrChatStatus.accompany.playStatus === 1){
      //     // vrChatStatus.accompany.cancel(false)
      // }else if(vrChatStatus.accompany.playStatus === 2){
      //     vrChatStatus.accompany.exit(2)
      //     cb(false)
      //     return
      // }else if(vrChatStatus.accompany.playStatus === 3){
      //     if(vrChatStatus.accompany.aihouse.isPlaying){
      //         if((vrChatStatus.defaultConfig.ACCOMPANY_VOICE.aiVoiceReback === 'call'&&vrChatStatus.accompany.isCallingSeeHouse())||!vrChatStatus.accompany.isCallingSeeHouse()){
      //             vrChatStatus.accompany.exit(2)
      //             cb(false)
      //             return
      //         }else {
      //             vrChatStatus.accompany.exit()
      //         }
      //     }
      // }
      // console.log('toDoBack ===>!vrChatStatus.isChatPage', !vrChatStatus.isChatPage)
      // cb(!vrChatStatus.isChatPage) // true: 展示端兜底
      // if (!vrChatStatus.isChatPage) return
      // const VRCHAT_CONFIG = vrChatStatus.defaultConfig
      // VRCHAT_CONFIG.BACK_EVENT_CB && (VRCHAT_CONFIG.BACK_EVENT_CB()) // 带看状态下
      // if (!VRCHAT_CONFIG.IS_HIDE_VR_CHAT_BACK_DIALOG) {
      //     // 走默认 有弹窗 WVRExit协议
      //     console.log('带看默认退出弹窗')
      //     window.vrChatConnectorApi.wvrExit()
      // }
    }
  },
  pullHead: {
    toDoSliderCb: function toDoSliderCb(data) {
      console.log("this.listener.add('toDoSliderCb", data);
      var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;

      if (data.type === "up") {
        VRCHAT_CONFIG.HOUSE_LIST_SHOW_BY_UI_CB && VRCHAT_CONFIG.HOUSE_LIST_SHOW_BY_UI_CB();
      } else {
        VRCHAT_CONFIG.HOUSE_LIST_HIDE_BY_UI_CB && VRCHAT_CONFIG.HOUSE_LIST_HIDE_BY_UI_CB();
      }
    }
  }
}; //特殊处理
// add('reseted', 'system 必须要在add('readyReset', 'system'之后

listener.add('readyReset', 'system', function () {
  listener.add('reseted', 'system', function (opts) {
    var VRCHAT_CONFIG = params_vrChatStatus.defaultConfig;
    VRCHAT_CONFIG.HOUSE_LIST_CONFIG && VRCHAT_CONFIG.HOUSE_LIST_CONFIG.newHouseReady && VRCHAT_CONFIG.HOUSE_LIST_CONFIG.newHouseReady();
    params_vrChatStatus.defaultConfig = mergeDeep({}, defaultStaticConfig, window.VRHOUSE_CONFIG.VRCHAT_CONFIG);

    if (!!!params_vrChatStatus.isChatChange) {
      return;
    }

    console.log('reseted', opts); //   window.vrChatStatus.accompany.reloadAihouse()

    if (params_vrChatStatus.isChatPage) {
      didResetState(); //   let current = getSceneStatus()
      //   vrChatStatus.globalState.type = current.type === '3D' ? '3d' : '2d'
      //   window.vrChatStatus.isLoadingHouse = false
      // window.vrChatStatus.globalState.moduleHouseViewer.viewerPanel.viewerToVrChatMode()
      // window.vrChatStatus.globalState.moduleHouseViewer.viewerToolbarDom.setToolBarMode(true)

      params_vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender', false); // 停止展示端自转
      // dealCacheReloadNewMessage()
    }
  });
});
/* harmony default export */ const house_viewer_interface_config = (config);
;// CONCATENATED MODULE: ./src/house-viewer-interface/receiveMsgFromHouseViewer.js
function receiveMsgFromHouseViewer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function receiveMsgFromHouseViewer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function receiveMsgFromHouseViewer_createClass(Constructor, protoProps, staticProps) { if (protoProps) receiveMsgFromHouseViewer_defineProperties(Constructor.prototype, protoProps); if (staticProps) receiveMsgFromHouseViewer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var receiveMsgFromHouseViewer = /*#__PURE__*/function () {
  function receiveMsgFromHouseViewer(opts) {
    receiveMsgFromHouseViewer_classCallCheck(this, receiveMsgFromHouseViewer);

    this.listener = opts.listener;
    this.init();
  }

  receiveMsgFromHouseViewer_createClass(receiveMsgFromHouseViewer, [{
    key: "init",
    value: function init() {
      var _this = this;

      var _loop = function _loop(channel) {
        var _loop2 = function _loop2(action) {
          _this.listener.add(action, channel, hijackCB);

          function hijackCB(data, extra) {
            // console.log("action, channel", action, channel)
            if (!isVaildVrChatListener(action, channel)) return;

            if (isFunction(house_viewer_interface_config[channel][action])) {
              house_viewer_interface_config[channel][action](data, extra);
            } else {
              console.error(action, channel, "监听缺少回调");
            }
          }
        };

        for (var action in house_viewer_interface_config[channel]) {
          _loop2(action);
        }
      };

      for (var channel in house_viewer_interface_config) {
        _loop(channel);
      }

      function isFunction(fn) {
        return Object.prototype.toString.call(fn) === '[object Function]';
      }

      function isVaildVrChatListener(action, channel) {
        var _vrChatStatus = vrChatStatus,
            isSeeHouseChatting = _vrChatStatus.isSeeHouseChatting,
            isChatPage = _vrChatStatus.isChatPage,
            isChatSceneOperating = _vrChatStatus.isChatSceneOperating,
            RENDERS = _vrChatStatus.RENDERS;
        var valid = false; // console.log("RENDERS.room.controls.enabled", )

        switch (channel) {
          case 'roomRender':
          case 'houseRender':
          case 'roomModule':
          case 'room2DModule':
            // 如果只判断到是带看页面的话 陪看中讲房会触发
            valid = isSeeHouseChatting;
            break;

          case 'module':
          case 'houseModule':
            valid = isChatPage;
            break;

          case 'system':
            valid = true;
            break;

          default:
            valid = true;
            break;
        }

        return valid;
      }
    }
  }]);

  return receiveMsgFromHouseViewer;
}();


;// CONCATENATED MODULE: ./src/accompany-interface/index.js
function accompany_interface_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function accompany_interface_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function accompany_interface_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function accompany_interface_createClass(Constructor, protoProps, staticProps) { if (protoProps) accompany_interface_defineProperties(Constructor.prototype, protoProps); if (staticProps) accompany_interface_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var Accompany = /*#__PURE__*/function () {
  function Accompany(opts) {
    accompany_interface_classCallCheck(this, Accompany);

    this.playStatus = 0; //0未开始 1等待开始 2过度页 3 已开始 4结束过渡

    this.status = 0; //0 初始化 1 过度页 2 讲房 3 退出

    this.isCancel = false;
    this.isPlay = true;
    this.isComplete = false; // 和playStatus逻辑有冲突，所以和老版一样新建一个变量  

    this.accompanyStatus = params_vrChatStatus.accompanyStatus || {};
    this.aihouse = window.AI_HOUSE && window.AI_HOUSE.VRControll ? window.AI_HOUSE.VRControll : {
      _realStatus: '100001111',
      Ai: accompany_interface_defineProperty({
        updatePanoAiHouse: function updatePanoAiHouse() {},
        cancelLoaderSource: function cancelLoaderSource() {}
      }, "updatePanoAiHouse", function updatePanoAiHouse() {}),
      getListenedModules: function getListenedModules() {},
      pause: function pause() {},
      closeConfirm: function closeConfirm() {},
      setCanClick: function setCanClick() {},
      preLoading: function preLoading() {},
      createTransitionPage: function createTransitionPage() {},
      play: function play() {},
      replay: function replay() {}
    };

    this.handeler = params_vrChatStatus.defaultConfig.ACCOMPANY_STATUS_CHANGE_CB || function () {};
  }

  accompany_interface_createClass(Accompany, [{
    key: "start",
    value: function start(noTransPage) {
      var _this = this;

      console.log('陪看的start函数执行', this.checkAiHouse());

      if (!!!this.checkAiHouse()) {
        return;
      }

      var moduleChat = params_vrChatStatus.globalState.moduleChat;
      var callStatusTime = this.getCallTime();
      this.callStatusTime && clearTimeout(this.callStatusTime);

      if (this.callStatusTime === -1 || this.isCancel) {
        // 主动取消的 不再进入陪看
        console.log('主动取消过 不再进入');
        return;
      } else if (this.callStatusTime !== 0 && this.isCallingSeeHouse()) {
        this.playStatus = 1;
        this.callStatusTime = setTimeout(function () {
          _this.callStatusTime = null;
          console.log('倒计时结束的回调 isCallingSeeHouse:', _this.isCallingSeeHouse());
          console.log('陪看的start函数执行222', _this.checkAiHouse());

          if (_this.isCallingSeeHouse() && isChatOneToOne) {
            moduleChat.countdownPanel.countdownDom.style.display = 'none';
            window.AI_HOUSE && window.AI_HOUSE.VRControll && (_this.aihouse = window.AI_HOUSE.VRControll);

            _this.showTransition(noTransPage);
          }
        }, callStatusTime);
      }
    }
  }, {
    key: "isImmediateStart",
    value: function isImmediateStart() {
      var callStatusTime = this.getCallTime();
      var isAccompanyVoice = this.checkAiHouse();
      return callStatusTime === 0 && isAccompanyVoice && !this.isCancel;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.isCancel = false;
      this.isPlay = true;
      this.isComplete = false;
      this.playStatus = 0;
      this.aihouse.isPlaying = false;
      this.setAiVoiceListenedModules(null);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var stats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isCancel = stats;
      this.clearTimer();
    }
  }, {
    key: "clearTimer",
    value: function clearTimer() {
      if (this.callStatusTime) {
        clearTimeout(this.callStatusTime);
        this.playStatus = 0;
        this.aihouse.isPlaying = false;
        this.callStatusTime = null;
      }
    }
  }, {
    key: "clearTask",
    value: function clearTask() {
      if (this.callStatusTime) {
        clearTimeout(this.callStatusTime);
        this.callStatusTime = null;
        this.playStatus = 0;
      }

      this.aihouse.Ai.cancelLoaderSource();
    }
  }, {
    key: "showTransition",
    value: function showTransition(noTransPage) {
      var _this2 = this;

      console.log('showAiHouseTransition');
      this.status = 1;
      this.playStatus = 2;
      this.aihouse.preLoading(); // 讲房预加载

      this.handeler(this.accompanyStatus.AI_START);
      var moduleChat = params_vrChatStatus.globalState.moduleChat;
      var config = params_vrChatStatus.defaultConfig;
      moduleChat.miniCountdownPanel.reset();
      moduleChat.miniCountdownPanel.startToMiniTranstion();

      if (!!!noTransPage) {
        this.isComplete = false;
        this.aihouse.createTransitionPage({
          waitTime: 2000,
          from: 'accompany',
          aiTransitCancelFun: function aiTransitCancelFun() {
            //过渡页取消、讲房弹框退出确认回调
            console.info('aiTransitCancelFun', _this2.isCancel, _this2.status);
            _this2.status = 3;
            _this2.playStatus = 0;

            _this2.handeler(_this2.accompanyStatus.AI_EXIT);

            moduleChat.miniCountdownPanel.reset();

            _this2.setAiVoiceListenedModules(null); // 主动退出不保存


            if (_this2.isCallingSeeHouse() && config.ACCOMPANY_VOICE && config.ACCOMPANY_VOICE.aiVoiceReback === 'call') {
              // 回到呼叫
              _this2.isCancel = true;
              console.log('set isCancel true');
              moduleChat.countdownPanel.showCountdownTransition();
            } else if (params_vrChatStatus.isVrAudioConnected) {// 接通
              //VR_VIEWER.updateGlobalAutoplay(false)
            } else {
              // 拒接 超时
              // 回到全景
              if (_this2.isCallingSeeHouse()) {
                config.CANCEL_CHAT_CLICK_CB && config.CANCEL_CHAT_CLICK_CB();
                moduleChat.dialog.exitVRChat();
              } else {
                exitVrChatMode();
              }
            }
          },
          aiTransitFinishFun: function aiTransitFinishFun() {
            //过渡页结束回调
            console.log("aiTransitFinishFun"); // this.isAiVoiceCancel = true 

            _this2.playStatus = 3;
            moduleChat.miniCountdownPanel.startToHighTranstion();

            _this2.handeler(_this2.accompanyStatus.AI_TRANSIT_FINISH);
          },
          aiBoardFinishFun: function aiBoardFinishFun() {
            //讲房面板结束回调
            console.log("aiBoardFinishFun");
            _this2.playStatus = 4;
            moduleChat.miniCountdownPanel.hide();
          },
          aiVoiceFinishFun: function aiVoiceFinishFun() {
            //讲房正常结束回调
            console.log("aiVoiceFinishFun!!!");
            _this2.isComplete = true;
            _this2.isCancel = true;
            _this2.playStatus = 0;
            _this2.isPlay = false;

            _this2.handeler(_this2.accompanyStatus.AI_FINISH);

            if (_this2.isCallingSeeHouse()) {
              // 呼叫中 回到Countdown页面
              moduleChat.miniCountdownPanel.hide();
              moduleChat.countdownPanel.showCountdownTransition(); //this.setAiVoiceListenedModules(this.aihouse.getListenedModules()) // 保存已听的模块
            } else if (params_vrChatStatus.isVrAudioConnected) {// 接通
              //this.setAiVoiceListenedModules(this.aihouse.getListenedModules()) // 保存已听的模块
            } else {
              // 回到全景
              exitVrChatMode();
            }
          }
        });
      } else {
        this.playStatus = 3;
        this.aihouse.play();
      }
    }
  }, {
    key: "exitVRChat",
    value: function exitVRChat() {}
  }, {
    key: "checkAiHouse",
    value: function checkAiHouse() {
      if (params_vrChatStatus.defaultConfig.IS_NEED_ACCOMPANY_VOICE && this.isPlay && !this.isCancel && isChatOneToOne && params_vrChatStatus.globalState.type === '3d' && window.AI_HOUSE && window.AI_HOUSE.VRControll && !VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV && checkAiVoiceSdk(window.VRHOUSE_CONFIG && window.VRHOUSE_CONFIG.AI_HOUSE && window.VRHOUSE_CONFIG.AI_HOUSE.AI_VOICE_VERSION)) {
        // 检测陪看支持情况
        params_vrChatStatus.isAccompanyVoice = true;
      } else {
        params_vrChatStatus.isAccompanyVoice = false;
      }

      return params_vrChatStatus.isAccompanyVoice;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.cancel(false);
      this.aihouse.pause();
    }
  }, {
    key: "replay",
    value: function replay() {
      var _this$aihouse;

      console.log('rePlayAiHouse');
      (_this$aihouse = this.aihouse) === null || _this$aihouse === void 0 ? void 0 : _this$aihouse.rePlay();
    }
  }, {
    key: "recallVrchat",
    value: function recallVrchat() {
      if (this.aihouse._realStatus == '100001111') {
        return;
      }

      var _ref = params_vrChatStatus.defaultConfig.ACCOMPANY_VOICE || {},
          _ref$dealReCallBefore = _ref.dealReCallBeforeAiVoiceFinish,
          dealReCallBeforeAiVoiceFinish = _ref$dealReCallBefore === void 0 ? 2 : _ref$dealReCallBefore,
          _ref$dealReCallAfterA = _ref.dealReCallAfterAiVoiceFinish,
          dealReCallAfterAiVoiceFinish = _ref$dealReCallAfterA === void 0 ? 0 : _ref$dealReCallAfterA;

      console.log('recallVrchat this.isCancel', this.isCancel, this.playStatus, dealReCallBeforeAiVoiceFinish, dealReCallAfterAiVoiceFinish);

      if (this.isComplete) {
        this.isPlay = dealReCallAfterAiVoiceFinish == 1;
        this.isCancel = !this.isPlay;
      }

      if (!this.isCancel && this.aihouse) {
        this.setAiVoiceListenedModules(this.aihouse.getListenedModules()); // 保存已听的模块
      }

      if (this.playStatus > 0) {
        // 重拨时还在讲房中时
        var moduleChat = params_vrChatStatus.globalState.moduleChat; // 0: pause 1: exit  2: continue

        if (dealReCallBeforeAiVoiceFinish == 0) {
          moduleChat.miniCountdownPanel.show();
          this.pause();
        } else if (dealReCallBeforeAiVoiceFinish == 1) {
          this.handeler(this.accompanyStatus.AI_EXIT);
          this.exit(1);
        } else if (dealReCallBeforeAiVoiceFinish == 2) {
          moduleChat.miniCountdownPanel.show();
          this.replay();
        }
      } else {
        this.start(false);
      }
    }
  }, {
    key: "preReloadAihouse",
    value: function preReloadAihouse() {
      this.aihouse.pause();
      this.aihouse.setCanClick(false);
    }
  }, {
    key: "afterReloadAihouse",
    value: function afterReloadAihouse() {
      if (this.playStatus <= 0) {
        return;
      }

      this.aihouse.setCanClick(true);
      this.aihouse.rePlay();
    }
  }, {
    key: "reloadAihouse",
    value: function reloadAihouse() {
      //讲房切换
      if (this.aihouse._realStatus === '100001111') {
        return;
      }

      this.setAiVoiceListenedModules(null);
      var moduleChat = params_vrChatStatus.globalState.moduleChat;

      if (this.isCallingSeeHouse()) {
        console.log("reloadAihouse", this.playStatus, params_vrChatStatus.globalState.type, params_vrChatStatus.taskId);

        if (this.playStatus > 1) {
          if (params_vrChatStatus.globalState.type === '3d' && params_vrChatStatus.taskId) {
            console.log('>>>1 有切有');
            this.aihouse.Ai.updatePanoAiHouse(params_vrChatStatus.taskId, params_vrChatStatus.appKey, this.afterReloadAihouse.bind(this));
          } else {
            console.log('>>>2 有切无');
            this.clearTask();
            this.aihouse.closeConfirm();
            this.exit();
            this.handeler(this.accompanyStatus.AI_EXIT); // moduleChat.miniCountdownPanel.startToConnectedTranstion()
            // moduleChat.countdownPanel.showCountdownTransition()
          }
        } else {
          if (params_vrChatStatus.globalState.type === '3d' && params_vrChatStatus.taskId) {
            console.log('>>>3 无切有');
            this.clearTimer(); // 不是不支持陪看，只是没进入讲房前切换房源

            this.aihouse.Ai.updatePanoAiHouse(params_vrChatStatus.taskId, params_vrChatStatus.appKey, this.afterReloadAihouse.bind(this)); // 切换陪看呼叫
            // this.start()
            // this.playStatus = 1
            // moduleChat.countdownPanel.countdownDom.style.display = 'none'
            // this.showTransition()
          } else {
            console.log('>>>4 无切无');
            this.clearTimer();
          }
        }
      } else {
        if (!!!params_vrChatStatus.isChatPage) {
          this.aihouse.closeConfirm();
          this.exit();
          exitVrChatMode();
        }

        if (params_vrChatStatus.globalState.type === '3d' && params_vrChatStatus.taskId) {
          this.aihouse.Ai.updatePanoAiHouse(params_vrChatStatus.taskId, params_vrChatStatus.appKey);
        }
      }
    }
  }, {
    key: "exit",
    value: function exit() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      console.log('exitAiHouse', type, this.playStatus);

      if (type === 2) {
        //显示弹窗
        this.aihouse.pause();
        this.aihouse.simpleExit();
      } else {
        switch (this.playStatus) {
          case 0:
            break;

          case 1:
            this.clearTask();
            break;

          default:
            this.aihouse.pause();
            this.aihouse.exit();
            break;
        }

        this.playStatus = 0;
        this.aihouse.closeConfirm();
      }
    }
  }, {
    key: "isCallingSeeHouse",
    value: function isCallingSeeHouse() {
      return !params_vrChatStatus.isSeeHouseChatting && params_vrChatStatus.isChatPage;
    }
  }, {
    key: "getCallTime",
    value: function getCallTime() {
      var defaultConfig = params_vrChatStatus.defaultConfig;

      if (defaultConfig.IS_NEED_ACCOMPANY_VOICE) {
        return parseFloat(defaultConfig.ACCOMPANY_VOICE && defaultConfig.ACCOMPANY_VOICE.callStatusTime).toString() === 'NaN' ? 3000 : defaultConfig.ACCOMPANY_VOICE.callStatusTime;
      }

      return -1;
    }
  }, {
    key: "connect",
    value: function connect() {
      console.log(params_vrChatStatus.globalState.type, "connect================>"); //console.log('设置一听模块',this.isCancel)

      if (params_vrChatStatus.selfType === 'sender') {
        // this.setAiVoiceListenedModules(modules)
        var modules;

        if (this.isCancel || params_vrChatStatus.globalState.type === '2d' || !window.AI_HOUSE) {
          modules = null;
        } else {
          modules = window.AI_HOUSE.VRControll.getListenedModules();
        } // let modules = this.isCancel?null:window.AI_HOUSE.VRControll.getListenedModules();


        params_vrChatStatus.msgAiVoiceListenedModules = modules;
      } // this.setAiVoiceListenedModules(modules)
      // this.exit()

    }
  }, {
    key: "setAiVoiceListenedModules",
    value: function setAiVoiceListenedModules(data) {
      if (data === null) {
        params_vrChatStatus.msgAiVoiceListenedModules = null;
        return;
      }

      var listenedModules = params_vrChatStatus.msgAiVoiceListenedModules;

      if (!listenedModules) {
        params_vrChatStatus.msgAiVoiceListenedModules = data;
        return;
      }

      var listenedDic = new Set();

      for (var i = 0; i < listenedModules.length; i++) {
        listenedDic.add(listenedModules[i].id);
      }

      for (var _i = 0; _i < data.length; _i++) {
        if (!listenedDic.has(data[_i].id)) {
          listenedModules.push(data[_i]);
          listenedDic.add(data[_i].id);
        }
      }

      params_vrChatStatus.msgAiVoiceListenedModules = listenedModules;
    }
  }]);

  return Accompany;
}();

/* harmony default export */ const accompany_interface = (Accompany);
;// CONCATENATED MODULE: ./node_modules/reconnecting-websocket/dist/reconnecting-websocket-mjs.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w !== 'undefined' && !!w && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    maxEnqueuedMessages: Infinity,
    startClosed: false,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = null;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = null;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = null;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = null;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        if (this._options.startClosed) {
            this._shouldReconnect = false;
        }
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            if (this._ws) {
                return this._ws.readyState;
            }
            return this._options.startClosed
                ? ReconnectingWebSocket.CLOSED
                : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            var _a = this._options.maxEnqueuedMessages, maxEnqueuedMessages = _a === void 0 ? DEFAULT.maxEnqueuedMessages : _a;
            if (this._messageQueue.length < maxEnqueuedMessages) {
                this._debug('enqueue', data);
                this._messageQueue.push(data);
            }
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    ReconnectingWebSocket.prototype.dispatchEvent = function (event) {
        var e_1, _a;
        var listeners = this._listeners[event.type];
        if (listeners) {
            try {
                for (var listeners_1 = __values(listeners), listeners_1_1 = listeners_1.next(); !listeners_1_1.done; listeners_1_1 = listeners_1.next()) {
                    var listener = listeners_1_1.value;
                    this._callEventListener(event, listener);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (listeners_1_1 && !listeners_1_1.done && (_a = listeners_1.return)) _a.call(listeners_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return true;
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, __spread(['RWS>'], args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = 0;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (!!url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

/* harmony default export */ const reconnecting_websocket_mjs = (ReconnectingWebSocket);

// EXTERNAL MODULE: ./src/native-interface/utils/getQueryVariable.js
var getQueryVariable = __webpack_require__(252);
var getQueryVariable_default = /*#__PURE__*/__webpack_require__.n(getQueryVariable);
;// CONCATENATED MODULE: ./src/native-interface/miniprogramWs.js







var miniprogramWs_getQueryVariable = (getQueryVariable_default()).getQueryVariable; // reconnect-websocket.js断网重连机制

var miniprogramWs_waitingConnectedUpdateRoomInfor = false;

function connectedStateWaitingInfor() {
  console.log(vrChatStatus.roomInfo, vrChatStatus.roomInfo.to_info, vrChatStatus.roomInfo.to_info.id, vrChatStatus.roomInfo.to_info.name, "connectedStateWaitingInfor==================》》》》》》》》");

  if (vrChatStatus.roomInfo && vrChatStatus.roomInfo.to_info && vrChatStatus.roomInfo.to_info.id && vrChatStatus.roomInfo.to_info.name && vrChatStatus.roomInfo.to_info.name != 'undefined') {
    vrChatStatus.listener.dispatch('stateChange', 'chat', {
      previous: 'permited',
      present: 'connected',
      action: 'answer'
    }, null);
  } else {
    miniprogramWs_waitingConnectedUpdateRoomInfor = true;
    console.log('.........等待建房信息，转connected');
  }
}

function updateInforConnectedState() {
  console.log(miniprogramWs_waitingConnectedUpdateRoomInfor, "waitingConnectedUpdateRoomInfor=========》》》》》》》");

  if (miniprogramWs_waitingConnectedUpdateRoomInfor) {
    vrChatStatus.listener.dispatch('stateChange', 'chat', {
      previous: 'permited',
      present: 'connected',
      action: 'answer'
    }, null);
    miniprogramWs_waitingConnectedUpdateRoomInfor = false;
  }
}

var startWS9Socket = function startWS9Socket() {
  var VRCHAT_CONFIG = window.VRHOUSE_CONFIG.VRCHAT_CONFIG;
  var version = vrChatStatus.trtc ? '4.0.0' : isChatOneToOne ? '2.1' : '3.1';

  if (window.location.href.indexOf('env') >= 0) {
    if (window.location.href.indexOf('online') >= 0) {
      vrChatStatus.ws9Socket = new reconnecting_websocket_mjs('wss://vrchat-ws.58.com/ws9?roomId=' + vrChatStatus.roomId + '&clientId=' + vrChatStatus.clientId + '&version=' + version);
    } else {
      vrChatStatus.ws9Socket = new reconnecting_websocket_mjs('wss://vrchatie-ws.58.com/ws9?roomId=' + vrChatStatus.roomId + '&clientId=' + vrChatStatus.clientId + '&version=' + version);
    }
  } else if (VRCHAT_CONFIG.WS_INTEGRATED_ENV || VRCHAT_CONFIG.WS_ONLINE_ENV) {
    if (VRCHAT_CONFIG.WS_INTEGRATED_ENV === true) {
      vrChatStatus.ws9Socket = new reconnecting_websocket_mjs('wss://vrchatie-ws.58.com/ws9?roomId=' + vrChatStatus.roomId + '&clientId=' + vrChatStatus.clientId + '&version=' + version);
    } else {
      vrChatStatus.ws9Socket = new reconnecting_websocket_mjs('wss://vrchat-ws.58.com/ws9?roomId=' + vrChatStatus.roomId + '&clientId=' + vrChatStatus.clientId + '&version=' + version);
    }
  } else {
    vrChatStatus.ws9Socket = new reconnecting_websocket_mjs('wss://vrchat-ws.58.com/ws9?roomId=' + vrChatStatus.roomId + '&clientId=' + vrChatStatus.clientId + '&version=' + version);
  }

  vrChatStatus.ws9Socket && vrChatStatus.ws9Socket.addEventListener('open', function () {
    console.log('ws9 H5');
    window.vrChatConnectorApi.outputNativeLog('ws9 open ' + 'wss://vrchatie-ws.58.com/ws9?roomId=' + vrChatStatus.roomId + '&clientId=' + vrChatStatus.clientId + '&version=' + version);
    vrChatStatus.ws9Ready = true;

    vrChatStatus.ws9Socket.onerror = function (event) {
      console.log('ws9Socketerror');
    };

    vrChatStatus.ws9Socket.onclose = function (event) {
      console.log('ws9Socketclose');
    };

    VRCHAT_CONFIG.WS9ONOPEN_CB && VRCHAT_CONFIG.WS9ONOPEN_CB();
  });
  console.log("vrChatStatus.ws9Socket", vrChatStatus.ws9Socket);
  vrChatStatus.ws9Socket && vrChatStatus.ws9Socket.addEventListener('message', function (event) {
    window.vrChatConnectorApi.outputNativeLog('ws9 message ' + event.data);
    var sceneInfo;

    try {
      sceneInfo = JSON.parse(event.data);
    } catch (e) {
      sceneInfo = event.data;
    } // todo fqy 收到信息去掉flag字段


    receiveMessageFromNative.dealSceneInfo(sceneInfo);
  });
};

var minitimer;
var startWS3Socket = function startWS3Socket() {
  // http://192.168.1.6:8080/?communicationId=BAQ5J1665126636941&version=3.1&miniprogram=true&env=integrate
  var VRCHAT_CONFIG = window.VRHOUSE_CONFIG.VRCHAT_CONFIG;

  if (window.location.href.indexOf('env') >= 0) {
    if (window.location.href.indexOf('online') >= 0) {
      vrChatStatus.vrchatAddress = 'wss://vrchat-ws.58.com/ws3?communicationId=';
    } else {
      vrChatStatus.vrchatAddress = 'wss://vrchatie-ws.58.com/ws3?communicationId=';
    }
  } else if (VRCHAT_CONFIG.WS_INTEGRATED_ENV || VRCHAT_CONFIG.WS_ONLINE_ENV) {
    if (VRCHAT_CONFIG.WS_INTEGRATED_ENV === true) {
      vrChatStatus.vrchatAddress = 'wss://vrchatie-ws.58.com/ws3?communicationId=';
    } else {
      vrChatStatus.vrchatAddress = 'wss://vrchat-ws.58.com/ws3?communicationId=';
    }
  } else {
    vrChatStatus.vrchatAddress = 'wss://vrchat-ws.58.com/ws3?communicationId=';
  }

  console.log('start ws3');
  var communicationId = miniprogramWs_getQueryVariable('communicationId');
  vrChatStatus.ws3Socket = new reconnecting_websocket_mjs(vrChatStatus.vrchatAddress + communicationId);
  vrChatStatus.ws3Socket && vrChatStatus.ws3Socket.addEventListener('open', function () {
    console.log("H5连接已建立...");
    VRCHAT_CONFIG.WS3ONOPEN_CB && VRCHAT_CONFIG.WS3ONOPEN_CB();
    var handshakeData = {
      request: "handshake",
      key: Date.now()
    };
    vrChatStatus.ws3Socket.send(JSON.stringify(handshakeData));
    minitimer = setTimeout(function fn() {
      vrChatStatus.ws3Socket.send(JSON.stringify(handshakeData));

      if (vrChatStatus.hasHandshake) {
        clearTimeout(minitimer);
      }
    }, 1000);
  });

  var ws3Handler = function ws3Handler(evt) {
    var _received_msg, _received_msg$data;

    console.log('H5======================================');
    console.log(evt);
    var received_msg = evt.data;

    try {
      received_msg = typeof received_msg === 'string' ? JSON.parse(received_msg) : received_msg;
    } catch (e) {
      return;
    }

    console.log("wx outputLog env ", evt, received_msg);
    console.log('wx outputLog h5 log receiver ', received_msg.request || received_msg.response, evt.data); // 小程序接收消息打印

    var _vrChatStatus$globalS = vrChatStatus.globalState.moduleChat,
        chatPanel = _vrChatStatus$globalS.chatPanel,
        dialog = _vrChatStatus$globalS.dialog;

    switch (received_msg.request) {
      case "status":
        window.vrChatConnectorApi.outputNativeLog('status' + JSON.stringify(received_msg));
        console.log('receivedatastatus' + JSON.stringify(received_msg), isChatOneToOne);

        if (received_msg.data === 0) {
          // if(document.getElementById('icon-vr')) {
          //   document.getElementById('icon-vr').style.display = 'none'
          // }
          console.log('H5 to miniprogram connected');
          receiveMessageFromNative.dealAudioConnected(Object.assign({
            "audio_status": "success"
          }, received_msg)); // ws9链接所需参数

          vrChatStatus.roomId = received_msg.clientInfo.room_id;
          vrChatStatus.clientId = received_msg.clientInfo.client_id;
          console.log('vrChatStatus.roomId', vrChatStatus.roomId);
          console.log('vrChatStatus.clientId', vrChatStatus.clientId);
          startWS9Socket();
        } else if (received_msg.data === 3 || received_msg.data === 4 || received_msg.data === 5) {
          exitVrChatMode();
          clearUserSceneStatusSync(); // dialog.changeSeeHouseDialogType(1)
        } else if (received_msg.data === -5) {
          setTimeout(function () {
            // document.getElementById('vr-chat-wrapper').style.display = 'none'
            exitVrChatMode();
            clearUserSceneStatusSync();
          }, 2000);
        } else {
          // document.getElementById('vr-chat-wrapper').style.display = 'none'
          exitVrChatMode();
          clearUserSceneStatusSync();
          VRCHAT_CONFIG.CHAT_EXIT_CB && VRCHAT_CONFIG.CHAT_EXIT_CB();
        }

        if (received_msg.data !== 0) {
          vrChatStatus.msgWVRChatVrExit = {
            status: received_msg.data
          };
          VRCHAT_CONFIG.CHAT_EXIT_CB && VRCHAT_CONFIG.CHAT_EXIT_CB(); // window.VRHOUSE_API.setIsHideFurnitureHotSpots && window.VRHOUSE_API.setIsHideFurnitureHotSpots(false)
          // window.VRHOUSE_API.redPacketMoveIn && window.VRHOUSE_API.redPacketMoveIn()
        }

        var status = received_msg.data;
        var action = '',
            previous = 'waiting';

        if (Number(status) === 2) {
          action = 'callerHangUp';
        } else if (Number(status) === 3) {
          action = 'answererHangUp';
        } else if (Number(status) === 4) {
          action = 'buzy';
        } else if (Number(status) === 5) {
          action = 'timeout';
        } else if (Number(status) === 7) {
          action = 'callerEndUp';
          previous = 'connected';
        } else if (Number(status) === 8) {
          action = 'answererEndUp';
          previous = 'connected';
        } else if (Number(status) === 9) {
          action = 'callFail';
        } else if (Number(status) === 10) {
          action = 'offline';
          previous = 'connected';
        } else if (Number(status) < 0) {
          action = 'offline';
        }

        if (Number(status) === 0) {
          connectedStateWaitingInfor();
        } else {
          vrChatStatus.listener.dispatch('stateChange', 'chat', {
            previous: previous,
            present: 'static',
            action: action,
            status: Number(status)
          }, null);
        }

        break;

      case "roomUpdate":
        window.vrChatConnectorApi.outputNativeLog('roomupdate' + JSON.stringify(received_msg));
        console.log('receivedataroomupdate' + JSON.stringify(received_msg));
        vrChatStatus.roomInfo = received_msg.data;
        console.log("roomUpdate", received_msg.data.sender_info, received_msg.data.to_info);
        received_msg.data.channel_type && setIsChatOneToOne(received_msg.data.channel_type !== 2); // if (received_msg.data.sender_info) {
        //   vrChatStatus.isCustomer = received_msg.data.sender_info.role === "customer"
        //   vrChatStatus.isEstateAgent = received_msg.data.sender_info.role === "estate_agent"
        // }

        if (received_msg.data.to_info) {
          vrChatStatus.agentName = received_msg.data.to_info.name;
          vrChatStatus.agentAvatar = received_msg.data.to_info.avatar;
          console.log('wx roomUpdate', received_msg.data.to_info); // if(document.getElementById('left-avatar')) {
          //   document.getElementById('left-avatar').src = vrChatStatus.agentAvatar
          // }
          // if(document.getElementById('avatar-image')) {
          //   document.getElementById('avatar-image').src = vrChatStatus.agentAvatar
          // }
        }

        if (received_msg.data.company) {
          vrChatStatus.company = received_msg.data.company;
        } // chatPanel.setAgentCards(vrChatStatus.agentName, vrChatStatus.company)


        if (received_msg.data.self_type && received_msg.data.self_type === 'audience') {// chatPanel.showChatTransition()
        }

        receiveMessageFromNative.dealUpdateRoomInfo(received_msg.data);
        updateInforConnectedState();
        break;

      case "callSuccess":
        window.vrChatConnectorApi.outputNativeLog('callsuccess' + JSON.stringify(received_msg));
        console.log('receivedatacallsuccess' + JSON.stringify(received_msg));
        vrChatStatus.selfType = 'sender'; //初始化

        receiveMessageFromNative.dealSwitchToVrChat(received_msg.data);
        vrChatStatus.roomInfo = received_msg.data; // vrChatStatus.listener.dispatch('stateChange', 'chat', {previous: 'waiting', present: 'permited', action: 'permit'}, null)

        vrChatStatus.listener.dispatch('stateChange', 'chat', {
          previous: 'static',
          present: 'waiting',
          action: 'call'
        }, null);
        break;

      case 'WVRChatAudienceIn':
        receiveMessageFromNative.dealAudienceIn(received_msg.data);
        break;

      case 'WVRChatUpdateAudience':
        receiveMessageFromNative.dealAudienceUpdate(received_msg.data);
        break;

      case 'WVRChatAudienceOut':
        receiveMessageFromNative.dealAudienceOut(received_msg.data);
        break;
    }

    switch (received_msg.response) {
      case "handshake":
        if (vrChatStatus.hasHandshake) {
          return;
        } // 握手的时候小程序端返回是否是腾讯云


        vrChatStatus.hasHandshake = true;
        vrChatStatus.trtc = (_received_msg = received_msg) === null || _received_msg === void 0 ? void 0 : (_received_msg$data = _received_msg.data) === null || _received_msg$data === void 0 ? void 0 : _received_msg$data.trtc;
        clearInterval(minitimer);
        var roomInfoData = {
          request: "roomInfo",
          key: Date.now()
        };
        vrChatStatus.ws3Socket.send(JSON.stringify(roomInfoData));
        break;

      case "roomInfo":
        window.vrChatConnectorApi.outputNativeLog('roominfo' + JSON.stringify(received_msg));
        console.log('receivedataroominfo' + JSON.stringify(received_msg)); // console.log('roominfo' + received_msg.data.sender_info.name)
        // 业务线数据回调

        vrChatStatus.roomInfo = received_msg.data;
        vrChatStatus.msgWVRChatRequestRoomInfo = received_msg.data;
        received_msg.data.channel_type && setIsChatOneToOne(received_msg.data.channel_type !== 2); // if (received_msg.data.sender_info) {
        //   vrChatStatus.isCustomer = received_msg.data.sender_info.role === "customer"
        //   vrChatStatus.isEstateAgent = received_msg.data.sender_info.role === "estate_agent"
        // }

        if (received_msg.data.to_info) {
          vrChatStatus.agentName = received_msg.data.to_info.name;
          vrChatStatus.agentAvatar = received_msg.data.to_info.avatar;
          console.log('wx avatar-image', received_msg.data.to_info); // document.getElementById('countdown') && (document.getElementById('avatar-image').src = vrChatStatus.agentAvatar)
        }

        if (received_msg.data.company) {
          vrChatStatus.company = received_msg.data.company;
        } // chatPanel.setAgentCards(vrChatStatus.agentName, vrChatStatus.company)


        break;

      case "status":
        if (received_msg.data.data === 0) {
          console.log('H5 to miniprogram connected');
          receiveMessageFromNative.dealAudioConnected('{"audio_status": "success"}');
          vrChatStatus.isChatting = true;
          vrChatStatus.isChattingConnecting = false;
          initVrChatMode();

          if (vrChatStatus.isCustomer) {
            // 用户端开启定时同步
            startUserSceneStatusSync();
          }

          connectedStateWaitingInfor();
        } else {
          exitVrChatMode();
          clearUserSceneStatusSync();
          vrChatExit();
        }

      case "mute":
        vrChatStatus.isMute = received_msg.data;

      default:
        break;
    }
  };

  window.ws3Handler = ws3Handler;
  vrChatStatus.ws3Socket && vrChatStatus.ws3Socket.addEventListener('message', ws3Handler);
};
;// CONCATENATED MODULE: ./src/native-interface/index.js





function vrChatDataExchanger(data, receiveClientId) {
  if (isChatOneToOne) {
    sendSceneInfo({
      data: data
    });
  } else {
    sendToServer({
      data: data,
      applyReleaseLock: true,
      isCustomMsg: true,
      receiveClientId: receiveClientId
    });
  }
}
function vrChatDataToMiniprogram(data) {
  if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
    var customData = {
      request: "custom",
      data: data,
      key: createKey()
    };
    params_vrChatStatus.ws3Socket.send(JSON.stringify(customData));
  }
}
;// CONCATENATED MODULE: ./src/VRHOUSE_API.js








Object.assign(window.VRHOUSE_API, {
  // // 重拨
  // vrChatRecall: function () {
  //   vrChatStatus.globalState.moduleChat.dialog.recallVrchat()
  // },
  // // 发起
  // vrchatCall: function () {
  //   if (vrChatStatus.globalState.moduleHouseViewer.viewerPanel) {
  //     vrChatStatus.globalState.moduleHouseViewer.viewerPanel.handleSeeHouseClick()
  //   }
  // },
  // vrChatExit: function () {
  //   // const nativeController = window.VRHOUSE_SPACE.chat.getStateController();
  //   // nativeController.endUp();
  //   // if (vrChatStatus.isSeeHouseChatting && vrChatStatus.globalState.moduleChat.dialog) {
  //   //   vrChatStatus.globalState.moduleChat.dialog.exitVRChat()
  //   // }
  // },
  // setAiVoiceListenedModules: function (data) {
  //   setAiVoiceListenedModules(data)
  // },
  getAiHouseListenedModules: function getAiHouseListenedModules() {
    console.log(params_vrChatStatus.selfType, params_vrChatStatus.msgAiVoiceListenedModules, "msgAiVoiceListenedModules[========>");
    return params_vrChatStatus.msgAiVoiceListenedModules;
  },
  //// 以上已到UI
  vrChatDataExchanger: vrChatDataExchanger,
  vrChatBackExit: function vrChatBackExit() {
    // 没弹窗 走WVRChatVrExit协议
    vrChatExit(); // 和暴露出去的vrChatExit api 不一样
  },
  //切换房源
  reloadVrChatNewHouse: function reloadVrChatNewHouse(opts) {
    reloadNewHouse(opts);
  },
  getVrChatApiVersion: function getVrChatApiVersion() {
    return VRCHAT_ENV && VRCHAT_ENV.VRCHAT_ENV_API_VERSION;
  },
  getVrChatWVRChatRequestRoomInfo: function getVrChatWVRChatRequestRoomInfo() {
    return params_vrChatStatus.msgWVRChatRequestRoomInfo;
  },
  getVrChatWVRChatSwitchToVRChat: function getVrChatWVRChatSwitchToVRChat() {
    return params_vrChatStatus.msgWVRChatSwitchToVRChat;
  },
  getVrChatWVRChatVrExit: function getVrChatWVRChatVrExit() {
    return params_vrChatStatus.msgWVRChatVrExit;
  },
  getVrChatWVRChatVrAudioConnected: function getVrChatWVRChatVrAudioConnected() {
    return params_vrChatStatus.msgWVRChatVrAudioConnected;
  },
  getVrChatWVRChatUpdateRoomInfo: function getVrChatWVRChatUpdateRoomInfo() {
    return params_vrChatStatus.msgWVRChatUpdateRoomInfo;
  },
  getVrChatWVRChatAudienceIn: function getVrChatWVRChatAudienceIn() {
    return params_vrChatStatus.msgAudienceIn;
  },
  getVrChatWVRChatAudienceOut: function getVrChatWVRChatAudienceOut() {
    return params_vrChatStatus.msgWVRChatAudienceOut;
  },
  getVrChatWVRChatUpdateAudience: function getVrChatWVRChatUpdateAudience() {
    return params_vrChatStatus.msgWVRChatUpdateAudience;
  },
  getVrChatWVRChatAudienceInvite: function getVrChatWVRChatAudienceInvite() {
    return params_vrChatStatus.msgWVRChatAudienceInvite;
  },
  getVrChatWVRChatUpdateTalkingStatus: function getVrChatWVRChatUpdateTalkingStatus() {
    return params_vrChatStatus.msgWVRChatUpdateTalkingStatus;
  },
  // getCurrentHotSpotDetail: function () {
  //   // return VR_VIEWER.currentHotSpotDetail
  // },
  getVrChatAllowAudioDisable: function getVrChatAllowAudioDisable() {
    return params_vrChatStatus.isAllowAudioDisable;
  },
  getVrChatSyncMicrophone: function getVrChatSyncMicrophone() {
    return params_vrChatStatus.msgWVRChatSyncMicrophone;
  }
}); // 小程序带看ws3业务数据透传通道 H5向小程序

if (VRCHAT_ENV.MIMIPROGRAM_VRCHAT_ENV) {
  Object.assign(window.VRHOUSE_API, {
    vrChatDataToMiniprogram: vrChatDataToMiniprogram
  });
}
;// CONCATENATED MODULE: ./src/index.js
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// import vrChatConnector from './lib/vrChatConnector.min.js'















var VRCHAT = /*#__PURE__*/function () {
  function VRCHAT() {
    src_classCallCheck(this, VRCHAT);

    params_vrChatStatus.vrChat = this;
  }

  src_createClass(VRCHAT, [{
    key: "init",
    value: function init(options) {
      // options解析
      // console.log('VRCHAT INIT', options, this)
      // console.log('handle All', handle)
      // const { listener } = options
      params_vrChatStatus.listener = options.listener;
      params_vrChatStatus.DOMS = options.DOMS;
      params_vrChatStatus.RENDERS = options.RENDERS; // vrChatStatus.isLoadingHouse = false
      // vrChatConnector()
      // this.config = Object.assign(defaultStaticConfig, window.VRHOUSE_CONFIG.VRCHAT_CONFIG)

      this.config = mergeDeep({}, defaultStaticConfig, window.VRHOUSE_CONFIG.VRCHAT_CONFIG);
      params_vrChatStatus.defaultConfig = this.config; // console.warn('vrChatStatus.defaultConfig', vrChatStatus.defaultConfig)

      new receiveMsgFromHouseViewer(options);
      params_vrChatStatus.globalState.type = options.houseData.type === '3D' ? '3d' : '2d';
      params_vrChatStatus.accompany = new accompany_interface();
      dom.init(options);
      /**
       * VR带看被叫方取状态数据
       * 小程序连接ws3之后才发送，单独处理
       */

      console.log(VRCHAT_ENV, "VRCHAT_ENV======》》》》》");
      console.log(window.vrchatSdkV2, "window.vrchatSdkV2===========》》》》》");

      if (window.vrchatSdkV2) {
        window.vrChatConnectorApi.requestRoomInfo();
        window.vrChatConnectorApi.requestCallState(function (state) {
          console.log(state, "requestCallState===========>>>>>>");

          switch (state) {
            case "none": // 未接通

            case "calling":
              break;

            case "callSuccess":
              // 已接通
              window.vrChatConnectorApi.requestRoomInfoSync(function (msg) {
                console.log(msg, "requestRoomInfoSync==========>>>>>>>>");
                params_vrChatStatus.msgWVRChatVrAudioConnected = msg;
                params_vrChatStatus.listener.dispatch('stateChange', 'chat', {
                  previous: 'permited',
                  present: 'connected',
                  action: 'answer'
                }, null);
              });
              window.vrChatConnectorApi.requestMuteState(function (mute) {
                console.log(mute, "requestMuteState================》》》》》》》");
                params_vrChatStatus.isMute = mute;
              });
              break;
            // case "bye":  // 挂断
            //   window.vrChatConnectorApi.requestLastByeInfo((msg) => {
            //     console.log(msg,"bye==========>>>>>>>>")
            //     window.vrChatConnectorConfig.exitCb(msg)
            //   })
            //   break;
          }
        });
        window.vrChatConnectorApi.requestMicrophoneAuthority(function (msg) {
          params_vrChatStatus.msgWVRChatSyncMicrophone = msg; // msg.authority 未知（用户未决定） "0"，访问被限制（家长控制，仅iOS） "1"，用户已拒绝并不再提醒（iOS对应已拒绝）"2"，用户已拒绝（再次申请权限可弹窗，仅安卓）''3", 用户已授权 "4"

          if (msg.authority !== 'unknown') {
            window.VRHOUSE_CONFIG.VRCHAT_CONFIG.SYNC_MICROPHONE_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.SYNC_MICROPHONE_CB();
          }
        });
      } else {
        if (VRCHAT_ENV.ANDROID_VRCHAT_ENV || VRCHAT_ENV.IOS_VRCHAT_ENV || window.vrchatSdkV2) {
          window.vrChatConnectorApi.requestRoomInfo(); // window.vrChatConnectorApi.interceptBackEvent() // js代理返回事件
        }
      }

      if (window.location.href.indexOf('miniprogram') >= 0) {
        console.log("小程序环境===========>>>>");
        startWS3Socket();
      } // window.vrChatConnectorApi && window.vrChatConnectorApi.outputNativeLog('outputLog','js log: getData callback start')


      if (options.config.currentHouseOptions || params_vrChatStatus.newHouseOptions) {
        var opts = options.config.currentHouseOptions || params_vrChatStatus.newHouseOptions;
        params_vrChatStatus.newHouseUrl = opts.houseUrl || '';
        params_vrChatStatus.newHouseDataUrl = opts.url;
        params_vrChatStatus.newHousePrefix = opts.prefix;
        params_vrChatStatus.taskId = opts.taskId;
        params_vrChatStatus.appKey = opts.appKey;
        console.log(params_vrChatStatus.newHouseUrl, params_vrChatStatus.newHouseDataUrl, "initHouseUrl========>");
      }
    }
  }]);

  return VRCHAT;
}();

function src_init(options) {
  var stateName = 'static',
      action = null,
      turnMap = new Map(),
      listener = options.listener,
      listenerMap = {};
  listener.add('stateChange', 'chat', function (data, from) {
    var present = data.present; //锚点等营销逻辑

    if (stateName === 'static' && present !== 'static') {// listener.dispatch('toDoRenderOut', 'marketing', null, null)
    } else if (stateName !== 'static' && present === 'static') {// listener.dispatch('toDoRenderIn', 'marketing', null, null)
    }

    stateName = present;
    action = data.action;
    console.log('=======================================================>StateChange: ', data, window.name, new Date().getTime());
  });
  var VRCHATInstance = new VRCHAT();
  VRCHATInstance.init(options);
  window.VRHOUSE_SPACE && (window.VRHOUSE_SPACE.chat = {
    addStateChangeListener: function addStateChangeListener(lsn) {
      var turn = function turn(data) {
        lsn(data);
      };

      turnMap.set(lsn, turn);
      listener.add('stateChange', 'chat', turn);
    },
    removeStateChangeListener: function removeStateChangeListener(lsn) {
      listener.remove('stateChange', 'chat', turnMap.get(lsn));
      turnMap["delete"](lsn);
    },
    getStateController: function getStateController() {
      var controller = {
        stateName: stateName,
        action: action,
        getMicrophone: function getMicrophone() {
          // 获取话筒权限
          return params_vrChatStatus.msgWVRChatSyncMicrophone;
        }
      };

      if (stateName === 'static') {
        Object.assign(controller, {
          call: function call() {
            var _vrChatStatus$accompa;

            params_vrChatStatus.defaultConfig.SEE_HOUSE_CB && params_vrChatStatus.defaultConfig.SEE_HOUSE_CB();
            (_vrChatStatus$accompa = params_vrChatStatus.accompany) === null || _vrChatStatus$accompa === void 0 ? void 0 : _vrChatStatus$accompa.reset();
            vrChatCall();
          }
        });
      } else if (stateName === 'waiting') {
        Object.assign(controller, {
          hangUp: function hangUp() {
            window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CANCEL_CHAT_CLICK_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CANCEL_CHAT_CLICK_CB();
            vrChatExit();
          }
        });
      } else if (stateName === 'connected') {
        params_vrChatStatus.listener.dispatch('isAutoPlay', 'roomRender', false);
        Object.assign(controller, {
          endUp: function endUp() {
            console.log('调用挂断事件=============>');
            window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CANCEL_CHAT_CLICK_CB && window.VRHOUSE_CONFIG.VRCHAT_CONFIG.CANCEL_CHAT_CLICK_CB();
            vrChatExit();
          },
          mute: function mute(isMute) {
            params_vrChatStatus.isMute = isMute;
            vrChatMute();
            window.vrChatConnectorApi.trackEvent({
              "event_id": 10100,
              "event_map": {
                'wrtc_vr_mute': params_vrChatStatus.isMute
              }
            });
          },
          isMuted: function isMuted() {
            return params_vrChatStatus.isMute;
          },
          changeHouse: function changeHouse(config) {
            // VRHOUSE_SPACE.chat.getStateController().changeHouse({
            //   appKey: "vSoTWXHaNlHj1",
            //   houseUrl: "https://vrnode-test.58.com/preview/3d-newhouse_2?templateId=15",
            //   prefix: "https://vrnode-test.58.com/newhouse_2/",
            //   taskId: "secondhandhouse_1",
            //   type: "3D",
            //   url: "https://vrnode-test.58.com/newhouse_2/ViewData.txt"
            // })
            var url = config.url,
                type = config.type,
                dataMd5 = config.dataMd5,
                taskId = config.taskId,
                prefix = config.prefix,
                appKey = config.appKey,
                md5 = config.md5,
                MODULE = config.MODULE,
                SDK = config.SDK,
                CUSTOMER = config.CUSTOMER; // taskId带看清单如果开启陪看 需要传入讲房的taskId 用于更新讲房

            reloadNewHouse(config);
            vrChatDataExchanger({
              type: 'reloadNewHouse',
              url: url,
              // houseUrl,
              dataType: type,
              prefix: prefix,
              taskId: taskId,
              md5: md5,
              MODULE: MODULE,
              SDK: [],
              CUSTOMER: []
            });
            vrChatDataToMiniprogram({
              uri: window.location.href
            });
          },
          send: function send(data) {
            console.log("UISend===========>>>>>>>>>>>");

            if (params_vrChatStatus.canSendToServer === true) {
              sendToServer({
                data: data,
                isCustomMsg: true
              });
            } else {
              sendSceneInfo({
                data: data
              });
            }
          },
          setReciever: function setReciever(reciever) {
            params_vrChatStatus.customerSceneInfoReciever = reciever;
          },
          setOnConflict: function setOnConflict(onConflict) {
            params_vrChatStatus.onConflict = onConflict;
          }
        });
      }

      return controller;
    },
    getRoomInfor: function getRoomInfor() {
      var msgWVRChatRequestRoomInfo = params_vrChatStatus.msgWVRChatRequestRoomInfo,
          msgWVRChatSwitchToVRChat = params_vrChatStatus.msgWVRChatSwitchToVRChat,
          msgWVRChatUpdateRoomInfo = params_vrChatStatus.msgWVRChatUpdateRoomInfo,
          msgWVRChatCreateRoom = params_vrChatStatus.msgWVRChatCreateRoom,
          _vrChatStatus$msgWVRC = params_vrChatStatus.msgWVRChatVrAudioConnected,
          msgWVRChatVrAudioConnected = _vrChatStatus$msgWVRC === void 0 ? {} : _vrChatStatus$msgWVRC,
          _vrChatStatus$roomInf = params_vrChatStatus.roomInfo,
          roomInfo = _vrChatStatus$roomInf === void 0 ? {} : _vrChatStatus$roomInf,
          msgWVRChatVrExit = params_vrChatStatus.msgWVRChatVrExit,
          origin = Object.assign({}, msgWVRChatRequestRoomInfo, msgWVRChatSwitchToVRChat, msgWVRChatCreateRoom, msgWVRChatVrAudioConnected, msgWVRChatUpdateRoomInfo, roomInfo, msgWVRChatVrExit),
          company = origin.company,
          self_type = origin.self_type,
          sender_info = origin.sender_info,
          to_info = origin.to_info,
          audio_status = origin.audio_status,
          channel_type = origin.channel_type,
          connect_time = origin.connect_time;
      return {
        caller: sender_info,
        answerer: to_info,
        company: company,
        self: self_type === 'to' ? 'answerer' : 'caller',
        audioStatus: audio_status,
        connectTime: connect_time,
        origin: origin
      };
    },
    getWVRChatConfig: function getWVRChatConfig() {
      var rtnStr = null;

      if (window.WVRChatNativeFunction && window.WVRChatNativeFunction.getWVRChatConfig) {
        rtnStr = window.WVRChatNativeFunction.getWVRChatConfig();
      } else if (window.getWVRChatConfig) {
        rtnStr = window.getWVRChatConfig();
      } else {
        console.warn('非app环境, 不支持VRHOUSE_SPACE.chat.getWVRChatConfig');
        return;
      }

      return JSON.parse(rtnStr);
    },
    addChangeMute: function addChangeMute(cb) {
      if (!listenerMap.mute) listenerMap.mute = [];
      listenerMap.mute.push(cb);
    },
    toDoChangeMute: function toDoChangeMute(mute) {
      listenerMap.mute && listenerMap.mute.forEach(function (cb) {
        cb(mute);
      });
    }
  });
  console.log('***************************************\nWVRChatConfig\n***************************************');

  try {
    console.log(window.VRHOUSE_SPACE.chat.getWVRChatConfig());
  } catch (e) {}
}

/* harmony default export */ const src = ({
  VRCHAT: VRCHAT,
  init: src_init
});
window.addCUSTOMER && window.addCUSTOMER(src_init);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});