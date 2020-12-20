// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\pictures\\hero\\mobile\\hero_ellipse_1x_m.png":[["hero_ellipse_1x_m.c9371ad4.png","images/pictures/hero/mobile/hero_ellipse_1x_m.png"],"images/pictures/hero/mobile/hero_ellipse_1x_m.png"],"./..\\images\\pictures\\hero\\mobile\\hero_ellipse_2x_m.png":[["hero_ellipse_2x_m.782d974e.png","images/pictures/hero/mobile/hero_ellipse_2x_m.png"],"images/pictures/hero/mobile/hero_ellipse_2x_m.png"],"./..\\images\\pictures\\hero\\mobile\\hero_ice_1x_m.png":[["hero_ice_1x_m.a63ad9f2.png","images/pictures/hero/mobile/hero_ice_1x_m.png"],"images/pictures/hero/mobile/hero_ice_1x_m.png"],"./..\\images\\pictures\\hero\\mobile\\hero_ice_2x_m.png":[["hero_ice_2x_m.aa566372.png","images/pictures/hero/mobile/hero_ice_2x_m.png"],"images/pictures/hero/mobile/hero_ice_2x_m.png"],"./..\\images\\pictures\\hero\\tablet\\hero_ice_1x_t.png":[["hero_ice_1x_t.2c19286f.png","images/pictures/hero/tablet/hero_ice_1x_t.png"],"images/pictures/hero/tablet/hero_ice_1x_t.png"],"./..\\images\\pictures\\hero\\tablet\\hero_ellipse_1x_t.png":[["hero_ellipse_1x_t.134b6daa.png","images/pictures/hero/tablet/hero_ellipse_1x_t.png"],"images/pictures/hero/tablet/hero_ellipse_1x_t.png"],"./..\\images\\pictures\\hero\\tablet\\hero_ice_2x_t.png":[["hero_ice_2x_t.e61b18c9.png","images/pictures/hero/tablet/hero_ice_2x_t.png"],"images/pictures/hero/tablet/hero_ice_2x_t.png"],"./..\\images\\pictures\\hero\\tablet\\hero_ellipse_2x_t.png":[["hero_ellipse_2x_t.98b4ced3.png","images/pictures/hero/tablet/hero_ellipse_2x_t.png"],"images/pictures/hero/tablet/hero_ellipse_2x_t.png"],"./..\\images\\pictures\\hero\\desktop\\hero_ice_1x_d.png":[["hero_ice_1x_d.8b2c8925.png","images/pictures/hero/desktop/hero_ice_1x_d.png"],"images/pictures/hero/desktop/hero_ice_1x_d.png"],"./..\\images\\pictures\\hero\\desktop\\hero_ellipse_1x_d.png":[["hero_ellipse_1x_d.6d10c851.png","images/pictures/hero/desktop/hero_ellipse_1x_d.png"],"images/pictures/hero/desktop/hero_ellipse_1x_d.png"],"./..\\images\\pictures\\hero\\desktop\\hero_ice_2x_d.png":[["hero_ice_2x_d.524dd8ea.png","images/pictures/hero/desktop/hero_ice_2x_d.png"],"images/pictures/hero/desktop/hero_ice_2x_d.png"],"./..\\images\\pictures\\hero\\desktop\\hero_ellipse_2x_d.png":[["hero_ellipse_2x_d.256e5bcb.png","images/pictures/hero/desktop/hero_ellipse_2x_d.png"],"images/pictures/hero/desktop/hero_ellipse_2x_d.png"],"./..\\images\\pictures\\hero\\tablet\\hero_milk_1x_t.png":[["hero_milk_1x_t.5cc8b1dc.png","images/pictures/hero/tablet/hero_milk_1x_t.png"],"images/pictures/hero/tablet/hero_milk_1x_t.png"],"./..\\images\\pictures\\hero\\tablet\\hero_milk_2x_t.png":[["hero_milk_2x_t.15d64a91.png","images/pictures/hero/tablet/hero_milk_2x_t.png"],"images/pictures/hero/tablet/hero_milk_2x_t.png"],"./..\\images\\pictures\\hero\\desktop\\hero_milk_1x_d.png":[["hero_milk_1x_d.19b6acec.png","images/pictures/hero/desktop/hero_milk_1x_d.png"],"images/pictures/hero/desktop/hero_milk_1x_d.png"],"./..\\images\\pictures\\hero\\desktop\\hero_milk_2x_d.png":[["hero_milk_2x_d.57d80d42.png","images/pictures/hero/desktop/hero_milk_2x_d.png"],"images/pictures/hero/desktop/hero_milk_2x_d.png"],"./..\\images\\pictures\\hero\\tablet\\hero_girl_1x_t.png":[["hero_girl_1x_t.2aa12cc5.png","images/pictures/hero/tablet/hero_girl_1x_t.png"],"images/pictures/hero/tablet/hero_girl_1x_t.png"],"./..\\images\\pictures\\hero\\tablet\\hero_girl_2x_t.png":[["hero_girl_2x_t.42fcbe8b.png","images/pictures/hero/tablet/hero_girl_2x_t.png"],"images/pictures/hero/tablet/hero_girl_2x_t.png"],"./..\\images\\pictures\\hero\\desktop\\hero_girl_1x_d.png":[["hero_girl_1x_d.5c2589ef.png","images/pictures/hero/desktop/hero_girl_1x_d.png"],"images/pictures/hero/desktop/hero_girl_1x_d.png"],"./..\\images\\pictures\\hero\\desktop\\hero_girl_2x_d.png":[["hero_girl_2x_d.278a3ae4.png","images/pictures/hero/desktop/hero_girl_2x_d.png"],"images/pictures/hero/desktop/hero_girl_2x_d.png"],"./..\\images\\pictures\\icons\\decor_milk.svg":[["decor_milk.777ea16c.svg","images/pictures/icons/decor_milk.svg"],"images/pictures/icons/decor_milk.svg"],"./..\\images\\pictures\\icons\\decor_milk_d.svg":[["decor_milk_d.ab080694.svg","images/pictures/icons/decor_milk_d.svg"],"images/pictures/icons/decor_milk_d.svg"],"E:\\Work\\IT\\Repository\\team-project\\src\\images\\icons\\benefits-milk.svg":[["benefits-milk.834a8665.svg","images/icons/benefits-milk.svg"],"images/icons/benefits-milk.svg"],"E:\\Work\\IT\\Repository\\team-project\\src\\images\\icons\\benefits-food.svg":[["benefits-food.665c0bca.svg","images/icons/benefits-food.svg"],"images/icons/benefits-food.svg"],"E:\\Work\\IT\\Repository\\team-project\\src\\images\\icons\\benefits-ice-cream.svg":[["benefits-ice-cream.20ed9ca0.svg","images/icons/benefits-ice-cream.svg"],"images/icons/benefits-ice-cream.svg"],"./..\\images\\pictures\\slider\\quotes.png":[["quotes.46690197.png","images/pictures/slider/quotes.png"],"images/pictures/slider/quotes.png"],"./..\\images\\pictures\\slider\\vector.svg":[["vector.8220c498.svg","images/pictures/slider/vector.svg"],"images/pictures/slider/vector.svg"],"./..\\images\\pictures\\slider\\vector-tablet.svg":[["vector-tablet.c354e1d1.svg","images/pictures/slider/vector-tablet.svg"],"images/pictures/slider/vector-tablet.svg"],"./..\\images\\pictures\\slider\\vector-desktop.svg":[["vector-desktop.63eb013e.svg","images/pictures/slider/vector-desktop.svg"],"images/pictures/slider/vector-desktop.svg"],"./..\\images\\pictures\\slider\\house.svg":[["house.263ec313.svg","images/pictures/slider/house.svg"],"images/pictures/slider/house.svg"],"./..\\images\\pictures\\contacts\\contact-bg@1x.png":[["contact-bg@1x.071cc7cd.png","images/pictures/contacts/contact-bg@1x.png"],"images/pictures/contacts/contact-bg@1x.png"],"./..\\images\\pictures\\contacts\\contact-bg@2x.png":[["contact-bg@2x.e1154ca6.png","images/pictures/contacts/contact-bg@2x.png"],"images/pictures/contacts/contact-bg@2x.png"],"./..\\images\\icons\\Vectorok.svg":[["Vectorok.ab499cbb.svg","images/icons/Vectorok.svg"],"images/icons/Vectorok.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50821" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map