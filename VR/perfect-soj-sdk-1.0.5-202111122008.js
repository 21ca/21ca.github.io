(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.LoggerSDK = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function getRequest(src) {
    var script = document.createElement("script");
    script.src = src;
    script.async = true; // script.crossOrigin = 'anonymous';

    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  }

  function postRequest(src, params) {
    if (!window.sojSerial && window.sojSerial !== 0) window.sojSerial = 0;
    var prev_if = document.getElementById("sojtracker" + window.sojSerial);

    while (prev_if) {
      window.sojSerial += 1;
      prev_if = document.getElementById("sojtracker" + window.sojSerial);
    }

    var ifContainer = document.createElement("div");
    ifContainer.innerHTML = '<iframe style="display:none" id="sojtracker' + window.sojSerial + '" name="sojtracker' + window.sojSerial + '" height="300" width="500"></iframe>';
    document.getElementsByTagName('head')[0].appendChild(ifContainer);
    var form = document.createElement("form");
    form.action = src;
    form.method = "post";

    for (var k in params) {
      if (k === 'cp' || k === 'ep') {
        form.innerHTML += "<input type='hidden' name='" + k + "' value='" + (JSON.stringify(params[k]) || "") + "' />";
      } else if (k === "uid") {
        form.innerHTML += "<input type='hidden' name='" + k + "' value='" + (params[k] || 0) + "' />";
      } else if (k === "method") {
        form.innerHTML += "<input type='hidden' name='" + k + "' value='post' />";
      } else {
        form.innerHTML += "<input type='hidden' name='" + k + "' value='" + (params[k] || "") + "' />";
      }
    }

    document.getElementsByTagName('head')[0].appendChild(form);
    form.target = "sojtracker" + window.sojSerial;
    form.submit();
  }

  var SiteTracker = /*#__PURE__*/function () {
    /* site 站点
    参数值   含义
    anjuke 安居客
    jikejia 集客家
    broker  经纪人后台
    crm     CRM系统
    anjuke_tencent 腾讯房产
    wuba    58同城
    ganji   赶集网
     plat. 平台
    参数值   含义
    1       PC
    2       Touch
    3       Pad
    4.      微信小程序
    5       APP
     type.  日志类型
    1       浏览日志
    2       点击日志
    3       曝光日志
    99      其他日志
    */
    function SiteTracker(options) {
      _classCallCheck(this, SiteTracker);

      this._setting = {
        site: '',
        type: '',
        plat: '',
        p: '',
        pn: '',
        action: '',
        h: document.location.href,
        t: '',
        method: 'get',
        r: document.referrer,
        rp: '',
        gi: '',
        ctid: '',
        ssid: '',
        uid: 0,
        cp: {},
        ep: {}
      };
      this.customUrl = '';
      this.params = null;
      this.url = null;
      this.setOptions(options);
    }

    _createClass(SiteTracker, [{
      key: "setOptions",
      value: function setOptions(settings) {
        var _this = this;

        if (_typeof(settings) == 'object') {
          Object.keys(settings).forEach(function (key) {
            _this._set(key, settings[key]);
          });
        }
      }
    }, {
      key: "mergeOptions",
      value: function mergeOptions(settings) {
        var _this2 = this;

        if (_typeof(settings) == 'object') {
          Object.keys(settings).forEach(function (key) {
            _this2._merge(key, settings[key]);
          });
        }
      }
    }, {
      key: "_set",
      value: function _set(key, val) {
        if (this._setting.hasOwnProperty(key)) {
          this._setting[key] = val;
        }
      }
    }, {
      key: "_merge",
      value: function _merge(key, val) {
        if (this._setting.hasOwnProperty(key)) {
          if (_typeof(this._setting[key]) === 'object') {
            this._setting[key] = _objectSpread2(_objectSpread2({}, this._setting[key]), val);
          } else {
            this._setting[key] = val;
          }
        }
      }
    }, {
      key: "track",
      value: function track(options) {
        if (_typeof(options) !== 'object') {
          console.log('option 必须是object.');
          return;
        }

        var params = this._buildParams(options);

        var src = this._buildUrl();

        if (this._setting.method === 'get') {
          this._trackGet(src, params);
        } else {
          this._trackPost(src, params);
        }
      }
    }, {
      key: "_trackGet",
      value: function _trackGet(src, params) {
        var newSrc = src;

        for (var k in params) {
          if (k === 'cp' || k === 'ep') {
            newSrc += k + "=" + encodeURIComponent(JSON.stringify(params[k])) + "&";
          } else if (k === 'uid') {
            newSrc += k + "=" + (params[k] ? encodeURIComponent(params[k]) : 0) + "&";
          } else {
            newSrc += k + "=" + (encodeURIComponent(params[k]) || '') + "&";
          }
        }

        newSrc = newSrc.substr(0, newSrc.length - 1);

        if (newSrc.length > 2000 && this._setting.plat == 1 || newSrc.length > 6000) {
          this._trackPost(src, params);
        } else {
          getRequest(newSrc);
        }
      }
    }, {
      key: "_trackPost",
      value: function _trackPost(src, params) {
        for (var k in params) {
          if (k === 'method') {
            params[k] === 'post';
          } else if (k === 'site') {
            src += k + "=" + (encodeURIComponent(params[k]) || '') + "&";
          }
        }

        src = src.substr(0, src.length - 1);
        postRequest(src, params);
      }
    }, {
      key: "_buildParams",
      value: function _buildParams(options) {
        return _objectSpread2(_objectSpread2(_objectSpread2({}, this._setting), options), {}, {
          cp: _objectSpread2(_objectSpread2({}, this._setting.cp), options.cp)
        });
      }
    }, {
      key: "_buildUrl",
      value: function _buildUrl() {
        if (this.url == null) {
          this.url = '';

          if (this._setting.customUrl == null) {
            this.url = "./stb?";
          } else {
            this.url = this._setting.customUrl;
          }

          this.url.replace(/^http\:/i, 'https:');
        }

        return this.url;
      }
    }]);

    return SiteTracker;
  }();

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var js_cookie = createCommonjsModule(function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  });

  /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
   *
   *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
   *
   */
  (function() {

  // Exit early if we're not running in a browser.
  if (typeof window !== 'object') {
    return;
  }

  // Exit early if all IntersectionObserver and IntersectionObserverEntry
  // features are natively supported.
  if ('IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

    // Minimal polyfill for Edge 15's lack of `isIntersecting`
    // See: https://github.com/w3c/IntersectionObserver/issues/211
    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(window.IntersectionObserverEntry.prototype,
        'isIntersecting', {
        get: function () {
          return this.intersectionRatio > 0;
        }
      });
    }
    return;
  }


  /**
   * A local reference to the document.
   */
  var document = window.document;


  /**
   * An IntersectionObserver registry. This registry exists to hold a strong
   * reference to IntersectionObserver instances currently observing a target
   * element. Without this registry, instances without another reference may be
   * garbage collected.
   */
  var registry = [];

  /**
   * The signal updater for cross-origin intersection. When not null, it means
   * that the polyfill is configured to work in a cross-origin mode.
   * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */
  var crossOriginUpdater = null;

  /**
   * The current cross-origin intersection. Only used in the cross-origin mode.
   * @type {DOMRect|ClientRect}
   */
  var crossOriginRect = null;


  /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
    this.isIntersecting = !!entry.intersectionRect;

    // Calculates the intersection ratio.
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;

    // Sets intersection ratio.
    if (targetArea) {
      // Round the intersection ratio to avoid floating point math issues:
      // https://github.com/w3c/IntersectionObserver/issues/324
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      // If area is zero and is intersecting, sets to 1, otherwise to 0
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }


  /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
  function IntersectionObserver(callback, opt_options) {

    var options = opt_options || {};

    if (typeof callback != 'function') {
      throw new Error('callback must be a function');
    }

    if (options.root && options.root.nodeType != 1) {
      throw new Error('root must be an Element');
    }

    // Binds and throttles `this._checkForIntersections`.
    this._checkForIntersections = throttle(
        this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

    // Private properties.
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);

    // Public properties.
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function(margin) {
      return margin.value + margin.unit;
    }).join(' ');

    /** @private @const {!Array<!Document>} */
    this._monitoringDocuments = [];
    /** @private @const {!Array<function()>} */
    this._monitoringUnsubscribes = [];
  }


  /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


  /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
  IntersectionObserver.prototype.POLL_INTERVAL = null;

  /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


  /**
   * Sets up the polyfill in the cross-origin mode. The result is the
   * updater function that accepts two arguments: `boundingClientRect` and
   * `intersectionRect` - just as these fields would be available to the
   * parent via `IntersectionObserverEntry`. This function should be called
   * each time the iframe receives intersection information from the parent
   * window, e.g. via messaging.
   * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */
  IntersectionObserver._setupCrossOriginUpdater = function() {
    if (!crossOriginUpdater) {
      /**
       * @param {DOMRect|ClientRect} boundingClientRect
       * @param {DOMRect|ClientRect} intersectionRect
       */
      crossOriginUpdater = function(boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
        }
        registry.forEach(function(observer) {
          observer._checkForIntersections();
        });
      };
    }
    return crossOriginUpdater;
  };


  /**
   * Resets the cross-origin mode.
   */
  IntersectionObserver._resetCrossOriginUpdater = function() {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };


  /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.observe = function(target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
      return item.element == target;
    });

    if (isTargetAlreadyObserved) {
      return;
    }

    if (!(target && target.nodeType == 1)) {
      throw new Error('target must be an Element');
    }

    this._registerInstance();
    this._observationTargets.push({element: target, entry: null});
    this._monitorIntersections(target.ownerDocument);
    this._checkForIntersections();
  };


  /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
  IntersectionObserver.prototype.unobserve = function(target) {
    this._observationTargets =
        this._observationTargets.filter(function(item) {
          return item.element != target;
        });
    this._unmonitorIntersections(target.ownerDocument);
    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };


  /**
   * Stops observing all target elements for intersection changes.
   */
  IntersectionObserver.prototype.disconnect = function() {
    this._observationTargets = [];
    this._unmonitorAllIntersections();
    this._unregisterInstance();
  };


  /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
  IntersectionObserver.prototype.takeRecords = function() {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };


  /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
  IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold)) threshold = [threshold];

    return threshold.sort().filter(function(t, i, a) {
      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
        throw new Error('threshold must be a number between 0 and 1 inclusively');
      }
      return t !== a[i - 1];
    });
  };


  /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
  IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
    var marginString = opt_rootMargin || '0px';
    var margins = marginString.split(/\s+/).map(function(margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error('rootMargin must be specified in pixels or percent');
      }
      return {value: parseFloat(parts[1]), unit: parts[2]};
    });

    // Handles shorthand.
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];

    return margins;
  };


  /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._monitorIntersections = function(doc) {
    var win = doc.defaultView;
    if (!win) {
      // Already destroyed.
      return;
    }
    if (this._monitoringDocuments.indexOf(doc) != -1) {
      // Already monitoring.
      return;
    }

    // Private state for monitoring.
    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, 'resize', callback, true);
      addEvent(doc, 'scroll', callback, true);
      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }

    this._monitoringDocuments.push(doc);
    this._monitoringUnsubscribes.push(function() {
      // Get the window object again. When a friendly iframe is destroyed, it
      // will be null.
      var win = doc.defaultView;

      if (win) {
        if (monitoringInterval) {
          win.clearInterval(monitoringInterval);
        }
        removeEvent(win, 'resize', callback, true);
      }

      removeEvent(doc, 'scroll', callback, true);
      if (domObserver) {
        domObserver.disconnect();
      }
    });

    // Also monitor the parent.
    if (doc != (this.root && this.root.ownerDocument || document)) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };


  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._unmonitorIntersections = function(doc) {
    var index = this._monitoringDocuments.indexOf(doc);
    if (index == -1) {
      return;
    }

    var rootDoc = (this.root && this.root.ownerDocument || document);

    // Check if any dependent targets are still remaining.
    var hasDependentTargets =
        this._observationTargets.some(function(item) {
          var itemDoc = item.element.ownerDocument;
          // Target is in this context.
          if (itemDoc == doc) {
            return true;
          }
          // Target is nested in this context.
          while (itemDoc && itemDoc != rootDoc) {
            var frame = getFrameElement(itemDoc);
            itemDoc = frame && frame.ownerDocument;
            if (itemDoc == doc) {
              return true;
            }
          }
          return false;
        });
    if (hasDependentTargets) {
      return;
    }

    // Unsubscribe.
    var unsubscribe = this._monitoringUnsubscribes[index];
    this._monitoringDocuments.splice(index, 1);
    this._monitoringUnsubscribes.splice(index, 1);
    unsubscribe();

    // Also unmonitor the parent.
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };


  /**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */
  IntersectionObserver.prototype._unmonitorAllIntersections = function() {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;
    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };


  /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
  IntersectionObserver.prototype._checkForIntersections = function() {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      // Cross origin monitoring, but no initial data available yet.
      return;
    }

    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

    this._observationTargets.forEach(function(item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget &&
          this._computeTargetAndRootIntersection(target, targetRect, rootRect);

      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target: target,
        boundingClientRect: targetRect,
        rootBounds: crossOriginUpdater && !this.root ? null : rootRect,
        intersectionRect: intersectionRect
      });

      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        // If the new entry intersection ratio has crossed any of the
        // thresholds, add a new entry.
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        // If the root is not in the DOM or target is not contained within
        // root but the previous entry for this target had an intersection,
        // add a new record indicating removal.
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);

    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };


  /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} targetRect The bounding rect of the target.
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
  IntersectionObserver.prototype._computeTargetAndRootIntersection =
      function(target, targetRect, rootRect) {
    // If the element isn't displayed, an intersection can't happen.
    if (window.getComputedStyle(target).display == 'none') return;

    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;

    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ?
          window.getComputedStyle(parent) : {};

      // If the parent isn't displayed, an intersection can't happen.
      if (parentComputedStyle.display == 'none') return null;

      if (parent == this.root || parent.nodeType == /* DOCUMENT */ 9) {
        atRoot = true;
        if (parent == this.root || parent == document) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect ||
                crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              // A 0-size cross-origin intersection means no-intersection.
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          // Check if there's a frame that can be navigated to.
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);
          var frameIntersect =
              frame &&
              this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        // If the element has a non-visible overflow, and it's not the <body>
        // or <html> element, update the intersection rect.
        // Note: <body> and <html> cannot be clipped to a rect that's not also
        // the document rect, so no need to compute a new intersection.
        var doc = parent.ownerDocument;
        if (parent != doc.body &&
            parent != doc.documentElement &&
            parentComputedStyle.overflow != 'visible') {
          parentRect = getBoundingClientRect(parent);
        }
      }

      // If either of the above conditionals set a new parentRect,
      // calculate new intersection data.
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }
      if (!intersectionRect) break;
      parent = parent && getParentNode(parent);
    }
    return intersectionRect;
  };


  /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {ClientRect} The expanded root rect.
   * @private
   */
  IntersectionObserver.prototype._getRootRect = function() {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      // Use <html>/<body> instead of window since scroll bars affect size.
      var html = document.documentElement;
      var body = document.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };


  /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {DOMRect|ClientRect} rect The rect object to expand.
   * @return {ClientRect} The expanded rect.
   * @private
   */
  IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
    var margins = this._rootMarginValues.map(function(margin, i) {
      return margin.unit == 'px' ? margin.value :
          margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;

    return newRect;
  };


  /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
  IntersectionObserver.prototype._hasCrossedThreshold =
      function(oldEntry, newEntry) {

    // To make comparing easier, an entry that has a ratio of 0
    // but does not actually intersect is given a value of -1
    var oldRatio = oldEntry && oldEntry.isIntersecting ?
        oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ?
        newEntry.intersectionRatio || 0 : -1;

    // Ignore unchanged ratios
    if (oldRatio === newRatio) return;

    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];

      // Return true if an entry matches a threshold or if the new ratio
      // and the old ratio are on the opposite sides of a threshold.
      if (threshold == oldRatio || threshold == newRatio ||
          threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };


  /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
  IntersectionObserver.prototype._rootIsInDom = function() {
    return !this.root || containsDeep(document, this.root);
  };


  /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
  IntersectionObserver.prototype._rootContainsTarget = function(target) {
    return containsDeep(this.root || document, target) &&
      (!this.root || this.root.ownerDocument == target.ownerDocument);
  };


  /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
  IntersectionObserver.prototype._registerInstance = function() {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };


  /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */
  IntersectionObserver.prototype._unregisterInstance = function() {
    var index = registry.indexOf(this);
    if (index != -1) registry.splice(index, 1);
  };


  /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
  function now() {
    return window.performance && performance.now && performance.now();
  }


  /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */
  function throttle(fn, timeout) {
    var timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(function() {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }


  /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == 'function') {
      node.addEventListener(event, fn, opt_useCapture || false);
    }
    else if (typeof node.attachEvent == 'function') {
      node.attachEvent('on' + event, fn);
    }
  }


  /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == 'function') {
      node.removeEventListener(event, fn, opt_useCapture || false);
    }
    else if (typeof node.detatchEvent == 'function') {
      node.detatchEvent('on' + event, fn);
    }
  }


  /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object|?ClientRect} The intersection rect or undefined if no
   *     intersection is found.
   */
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;

    return (width >= 0 && height >= 0) && {
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: width,
      height: height
    } || null;
  }


  /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
   */
  function getBoundingClientRect(el) {
    var rect;

    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
      // Ignore Windows 7 IE11 "Unspecified error"
      // https://github.com/w3c/IntersectionObserver/pull/205
    }

    if (!rect) return getEmptyRect();

    // Older IE
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }


  /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {ClientRect} The empty rect.
   */
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }


  /**
   * Ensure that the result has all of the necessary fields of the DOMRect.
   * Specifically this ensures that `x` and `y` fields are set.
   *
   * @param {?DOMRect|?ClientRect} rect
   * @return {?DOMRect}
   */
  function ensureDOMRect(rect) {
    // A `DOMRect` object has `x` and `y` fields.
    if (!rect || 'x' in rect) {
      return rect;
    }
    // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
    // for internally calculated Rect objects. For the purposes of
    // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
    // for these fields.
    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }


  /**
   * Inverts the intersection and bounding rect from the parent (frame) BCR to
   * the local BCR space.
   * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
   * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
   * @return {ClientRect} The local root bounding rect for the parent's children.
   */
  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top: top,
      left: left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }


  /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent) return true;

      node = getParentNode(node);
    }
    return false;
  }


  /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
  function getParentNode(node) {
    var parent = node.parentNode;

    if (node.nodeType == /* DOCUMENT */ 9 && node != document) {
      // If this node is a document node, look for the embedding frame.
      return getFrameElement(node);
    }

    if (parent && parent.nodeType == 11 && parent.host) {
      // If the parent is a shadow root, return the host element.
      return parent.host;
    }

    if (parent && parent.assignedSlot) {
      // If the parent is distributed in a <slot>, return the parent of a slot.
      return parent.assignedSlot.parentNode;
    }

    return parent;
  }


  /**
   * Returns the embedding frame element, if any.
   * @param {!Document} doc
   * @return {!Element}
   */
  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e) {
      // Ignore the error.
      return null;
    }
  }


  // Exposes the constructors globally.
  window.IntersectionObserver = IntersectionObserver;
  window.IntersectionObserverEntry = IntersectionObserverEntry;

  }());

  IntersectionObserver.prototype['THROTTLE_TIMEOUT'] = 0;
  var tags = {
    cpTag: 'data-trace',
    actionTag: 'data-action',
    epTag: 'data-ep',
    clickTag: 'data-npv',
    legoTag: 'data-lego',
    legoUrlTag: 'lego-url',
    clickCpTag: 'data-cp'
  };
  var keyMap = {
    aQQ_gi: 'gi',
    aQQ_ajkguid: 'gi',
    ajk_member_id: 'uid',
    sessid: 'ssid',
    ctid: 'ctid'
  };

  var SojLogger = /*#__PURE__*/function () {
    function SojLogger(options) {
      _classCallCheck(this, SojLogger);

      var _this = this;

      _this.noBrowser = options.noBrowser;
      _this.op = options;
      _this.plat = options.plat;
      _this.tracker = new SiteTracker();
      _this.expList = {};
      _this.eventBus = [];
      _this.timer = null;
      _this.isReady = false;

      if (!_this.noBrowser) {
        _this.exposure = new Exposure({
          onSend: _this.sendexp.bind(_this)
        });
      }

      _this.init(options);
    }

    _createClass(SojLogger, [{
      key: "init",
      value: function init(options) {
        var _this = this;

        _this.isReady = true; //设置cookie相关配置

        var fromCookie = {};

        if (!_this.noBrowser) {
          Object.keys(keyMap).forEach(function (key) {
            var sojKey = keyMap[key];
            fromCookie[sojKey] = js_cookie.get(key) || (key === 'uid' ? 0 : '');
          });
        }

        _this.setDefault(fromCookie);

        _this.setDefault(options); //绑定点击码事件


        if (!_this.noBrowser) {
          var elements = document.querySelectorAll("[".concat(tags.clickTag, "]"));
          [].forEach.call(elements, function (el) {
            el.addEventListener('click', function (e) {
              var cpParam = el.getAttribute(tags.clickCpTag);

              if (typeof cpParam === 'string') {
                try {
                  cpParam = JSON.parse(cpParam);
                } catch (e) {
                  console.log('JSON.parse解析错误' + e);
                }
              }

              _this.sendnpv({
                action: el.getAttribute(tags.clickTag),
                cp: cpParam || {}
              });
            });
          });
          var expElements = document.querySelectorAll("[".concat(tags.cpTag, "],[").concat(tags.actionTag, "],[").concat(tags.epTag, "],[").concat(tags.legoTag, "]"));

          _this.exposure.addNodes(expElements);
        }
      }
    }, {
      key: "setDefault",
      value: function setDefault(options) {
        var _this = this;

        _this.excute(function () {
          _this.tracker.setOptions(options);
        });
      }
    }, {
      key: "mergeDefault",
      value: function mergeDefault(options) {
        var _this = this;

        _this.excute(function () {
          _this.tracker.mergeOptions(options);
        });
      }
    }, {
      key: "send",
      value: function send(options) {
        var _this = this;

        var t = new Date().getTime();

        _this.excute(function () {
          _this.tracker.track(_objectSpread2(_objectSpread2({}, options), {}, {
            t: t
          }));
        });
      }
    }, {
      key: "sendpv",
      value: function sendpv(options) {
        this.send(_objectSpread2(_objectSpread2({}, options), {}, {
          type: 1
        }));
      }
    }, {
      key: "sendnpv",
      value: function sendnpv(options) {
        this.send(_objectSpread2(_objectSpread2({}, options), {}, {
          type: 2
        }));
      }
    }, {
      key: "sendexp",
      value: function sendexp(options) {
        var _this = this;

        var action = options.action;

        if (_this.expList[action]) {
          _this.expList[action].push(options);
        } else {
          _this.expList[action] = [options];
        }

        clearTimeout(_this.timer);
        _this.timer = setTimeout(function () {
          Object.keys(_this.expList).forEach(function (action) {
            var cp = {},
                ep,
                cpParams = {},
                epParams = [],
                cpExtend = {},
                epExtend = {},
                legoParams = [];

            if (_this.expList[action].length >= 1) {
              _this.expList[action].map(function (item) {
                var epObj = {},
                    cpObj = {},
                    legoObj = {}; //cp build

                if (typeof item.cp === 'string') {
                  try {
                    cpObj = JSON.parse(item.cp);
                  } catch (e) {
                    cpObj = item.cp;
                  }
                }

                if (cpObj) {
                  Object.keys(cpObj).forEach(function (key) {
                    var value = cpObj[key];

                    if (key === 'exposure') {
                      Object.keys(value).forEach(function (epKey) {
                        var cpValue = value[epKey];

                        if (cpParams[epKey]) {
                          cpParams[epKey].push(cpValue);
                        } else {
                          cpParams[epKey] = [cpValue];
                        }
                      });
                    } else {
                      cpExtend[key] = value;
                    }
                  });
                } // ep build


                if (typeof item.ep === 'string') {
                  try {
                    epObj = JSON.parse(item.ep);
                  } catch (e) {
                    epObj = item.ep;
                  }
                }

                if (epObj && epObj.exposure) {
                  Object.keys(epObj).forEach(function (key) {
                    if (key !== 'exposure') {
                      epExtend[key] = epObj[key];
                    }
                  });
                  epParams.push(epObj.exposure);
                } else {
                  epParams.push(epObj);
                } //lego build


                if (typeof item.lego === 'string') {
                  try {
                    legoObj = JSON.parse(item.lego);
                  } catch (e) {
                    legoObj = item.lego;
                  }
                }

                if (legoObj.tid || legoObj.entity_id) {
                  legoParams.push(legoObj.entity_id + ',' + legoObj.tid);
                }
              });

              ep = _objectSpread2({
                exposure: epParams.length > 1 ? epParams : epParams[0]
              }, epExtend);
              cp = _objectSpread2({
                exposure: cpParams
              }, cpExtend);

              if (legoParams.length > 0) {
                ep.tid = legoParams.join('|');
              }
            }

            var op = _objectSpread2(_objectSpread2({}, options), {}, {
              action: action,
              cp: cp,
              ep: ep
            });

            if (op.hasOwnProperty('lego')) {
              delete op['lego'];
            }

            _this.send(_objectSpread2(_objectSpread2({}, op), {}, {
              type: 3
            }));

            delete _this.expList[action];
          });
        }, 300);
      }
    }, {
      key: "sendlego",
      value: function sendlego(url) {
        getRequest(url);
      }
    }, {
      key: "excute",
      value: function excute(func) {
        var _this = this;

        if (_this.isReady) {
          if (_this.eventBus.length > 0) {
            _this.eventBus.forEach(function (itemFunc) {
              if (typeof itemFunc === 'function') {
                itemFunc();
              }
            });

            _this.eventBus = [];
          }

          func();
        } else {
          _this.eventBus.push(func);
        }
      }
    }]);

    return SojLogger;
  }();

  var Exposure = /*#__PURE__*/function () {
    function Exposure(options) {
      _classCallCheck(this, Exposure);

      this._observer = null;
      this.list = [];
      this.cp = {};
      this.tags = tags;
      this.send = options.onSend;
      this.init();
    } // 初始化


    _createClass(Exposure, [{
      key: "init",
      value: function init() {
        var _this2 = this;

        var _this = this;

        this._observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              // 进入视图触发
              try {
                var exposureInfo = _this2.list.find(function (v) {
                  return v.el === entry.target;
                });

                _this.send({
                  type: 3,
                  action: exposureInfo.action,
                  cp: exposureInfo.cp,
                  ep: exposureInfo.ep,
                  lego: exposureInfo.lego
                });

                _this._observer.unobserve(entry.target);
              } catch (err) {
                console.log(err);
              }
            }
          });
        }, {
          rootMargin: "0px",
          threshold: 0.1 // 目标dom出现在视图的比例 0 - 1

        });
      } // 添加至观察列表， 多个

    }, {
      key: "addNodes",
      value: function addNodes(elements) {
        var el = elements || [];

        var _this = this;

        if (el instanceof Node) {
          el = [el];
        }

        [].forEach.call(el, function (item) {
          _this.addNode(item);
        });
      } // 添加至观察列表，一个

    }, {
      key: "addNode",
      value: function addNode(element, action, cp, ep, lego) {
        var _this = this;

        if (element && element.getAttribute && element.getAttribute("data-exposure")) {
          return;
        }

        _this.list.push({
          el: element,
          action: action || element.getAttribute(_this.tags.actionTag),
          cp: cp || element.getAttribute(_this.tags.cpTag),
          ep: ep || element.getAttribute(_this.tags.epTag),
          lego: lego || element.getAttribute(_this.tags.legoTag)
        });

        element.setAttribute('data-exposure', true);
        _this._observer && _this._observer.observe(element);
      }
    }]);

    return Exposure;
  }();

  var tags$1 = {
    clickTag: 'tongji_tag'
  };

  var TrackLogger = /*#__PURE__*/function () {
    function TrackLogger(options) {
      _classCallCheck(this, TrackLogger);

      this.js = options.js || '//tracklog.58.com/referrer_m.js';
      this.url = options.url;
      this.params = options.params;
      this.init();
    }

    _createClass(TrackLogger, [{
      key: "init",
      value: function init() {
        if (window) {
          window._trackURL = this.url;
          window._trackParams = this.params;
          this.loadJs(this.js, function () {
            //绑定点击码事件
            if (!window.$) {
              var elements = document.querySelectorAll("[".concat(tags$1.clickTag, "]"));
              elements.forEach(function (el) {
                el.addEventListener('click', function (e) {
                  window.clickLog("from=".concat(el.getAttribute(tags$1.clickTag)));
                });
              });
            }
          });
        }
      }
    }, {
      key: "loadJs",
      value: function loadJs(src, callback) {
        (function () {
          var script = document.createElement('script');
          script.setAttribute('charset', 'utf-8');
          script.src = src;

          script.onload = function () {
            callback && callback();
          };

          document.body.appendChild(script);
        })();
      }
    }]);

    return TrackLogger;
  }();

  var Logger = /*#__PURE__*/function () {
    function Logger(options) {
      _classCallCheck(this, Logger);

      this.sojParams = options.sojParams;
      this.trackLogParams = options.trackLogParams;
      this.logger = null;
      this.trackLogger = null;

      if (this.sojParams) {
        this.logger = new SojLogger(this.sojParams);
      }

      if (this.trackLogParams && this.trackLogParams.url) {
        this.trackLogger = new TrackLogger(this.trackLogParams);
      }
    }

    _createClass(Logger, [{
      key: "getLogger",
      value: function getLogger() {
        return this.logger;
      }
    }, {
      key: "getTrackLogger",
      value: function getTrackLogger() {
        return this.trackLogger;
      }
    }]);

    return Logger;
  }();

  exports.Logger = Logger;
  exports.SojLogger = SojLogger;
  exports.TrackLogger = TrackLogger;

})));
