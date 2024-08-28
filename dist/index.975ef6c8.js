// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
"use strict";
var _routes = require("c7f6a13616386b89");
var _HomeView = _interopRequireDefault(require("fe24f337abc30ab8"));
var _DetailView = _interopRequireDefault(require("c9146176c5ec271f"));
var _ApikeyView = _interopRequireDefault(require("c9f58fdf62a7d7fd"));
var _Error = _interopRequireDefault(require("984bd5dd38bbc921"));
var _ChatView = _interopRequireDefault(require("a89a47499688ac7c"));
var _ChatGroup = _interopRequireDefault(require("606c83cdcb5d1cb0"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
const routes = {
    "/": _HomeView.default,
    "/about": _DetailView.default,
    "/api-key": _ApikeyView.default,
    "/error": _Error.default,
    "/chat": _ChatView.default,
    "/chat-group": _ChatGroup.default
};
// Assign the routes
(0, _routes.setRoutes)(routes);
window.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    (0, _routes.setRootEl)(root);
    (0, _routes.onURLChange)(window.location);
});
window.addEventListener("popstate", ()=>{
    (0, _routes.onURLChange)(window.location);
}); // window.addEventListener('load', onURLChange());

},{"c7f6a13616386b89":"hw5Qm","fe24f337abc30ab8":"lHcIL","c9146176c5ec271f":"5P8If","c9f58fdf62a7d7fd":"9vlUC","984bd5dd38bbc921":"8eEit","a89a47499688ac7c":"cwdG7","606c83cdcb5d1cb0":"eNUWH"}],"hw5Qm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setRoutes = exports.setRootEl = exports.onURLChange = exports.navigateTo = void 0;
let ROUTES = {};
let ROOT;
const setRootEl = (el)=>{
    ROOT = el;
};
exports.setRootEl = setRootEl;
const setRoutes = (routes)=>{
    ROUTES = routes;
};
exports.setRoutes = setRoutes;
const renderView = (pathname, props = {})=>{
    ROOT.innerHTML = "";
    const view = ROUTES[pathname] || ROUTES["/error"];
    const viewElement = view(props);
    ROOT.appendChild(viewElement);
};
const queryStringToObject = (queryString)=>{
    const params = new URLSearchParams(queryString);
    const obj = Object.fromEntries(params);
    return obj;
};
const navigateTo = (pathname, props = {})=>{
    let queryString = "";
    if (props && Object.keys(props).length) queryString = Object.keys(props).map((key)=>`${key}=${props[key]}`).join("&");
    const fullPath = queryString ? `${pathname}?${queryString}` : pathname;
    window.history.pushState({}, "", fullPath);
    renderView(pathname, props);
};
exports.navigateTo = navigateTo;
const onURLChange = (location)=>{
    const { pathname, search } = location;
    const searchParams = queryStringToObject(search);
    renderView(pathname, searchParams);
};
exports.onURLChange = onURLChange;

},{}],"lHcIL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Home;
var _routes = require("1a3a74313595d41c");
var _dataFunctions = require("9a95a1451325dff7");
var _dataset = _interopRequireDefault(require("83c4d5dee2ada943"));
var _homeComponent = require("45f18df77a9ee4d9");
var _cardComponent = require("cfdf3e3512480f08");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
function Home() {
    const rootElement = document.createElement("div");
    rootElement.innerHTML = (0, _homeComponent.homeComponent)();
    const cardsElement = rootElement.querySelector("#home");
    // Carga de elementos ul
    const items = (0, _cardComponent.renderItems)(_dataset.default);
    cardsElement.appendChild(items);
    // Llamar las funciones con ids
    const filterYear = rootElement.querySelector("#filter-year");
    const filterRating = rootElement.querySelector("#filter-rating");
    const sort = rootElement.querySelector("#sort");
    // Promedios
    const average = rootElement.querySelector("#average-rating");
    const awards = rootElement.querySelector("#awards-received");
    const audience = rootElement.querySelector("#total-audience");
    // Botones
    const buttonClear = rootElement.querySelector("#button-clear");
    const searchInput = rootElement.querySelector(".search-bar input");
    const groupChat = rootElement.querySelector(".group-chat-button");
    // Filter
    filterYear.addEventListener("change", applyFilters);
    filterRating.addEventListener("change", applyFilters);
    sort.addEventListener("change", applyFilters);
    buttonClear.addEventListener("click", clearFilters);
    sort.value = "asc";
    groupChat.addEventListener("click", ()=>{
        (0, _routes.navigateTo)("/chat-group");
    });
    const apiKeyButton = rootElement.querySelector(".api-key-button");
    apiKeyButton.addEventListener("click", ()=>{
        (0, _routes.navigateTo)("/api-key");
    });
    searchInput.addEventListener("input", ()=>{
        const query = searchInput.value.toLowerCase();
        const filteredData = (0, _dataFunctions.searchMovies)(_dataset.default, query);
        cardsElement.innerHTML = "";
        const ulElement = (0, _cardComponent.renderItems)(filteredData);
        cardsElement.appendChild(ulElement);
    });
    rootElement.querySelectorAll(".play-button").forEach((button)=>{
        button.addEventListener("click", (event)=>{
            const trailerUrl = event.target.getAttribute("data-trailer");
            showTrailerModal(trailerUrl);
        });
    });
    function applyFilters() {
        // Obtener valores usando querySelector
        const filterYearValue = rootElement.querySelector("#filter-year").value;
        const filterRatingValue = rootElement.querySelector("#filter-rating").value;
        const sortValue = rootElement.querySelector("#sort").value;
        // Aplicar filtros y ordenar los datos
        let filteredData = (0, _dataFunctions.filterDataYear)(_dataset.default, filterYearValue);
        filteredData = (0, _dataFunctions.filterDataRating)(filteredData, filterRatingValue);
        const sortedData = (0, _dataFunctions.sortData)(filteredData, sortValue);
        // Limpiar la sección raíz y renderizar los elementos ordenados
        cardsElement.innerHTML = "";
        const ulElement = (0, _cardComponent.renderItems)(sortedData);
        cardsElement.appendChild(ulElement);
        // Vuelve a agregar los controladores de eventos de los botones después de renderizar los elementos
        ulElement.querySelectorAll(".play-button").forEach((button)=>{
            button.addEventListener("click", (event)=>{
                const trailerUrl = event.target.getAttribute("data-trailer");
                showTrailerModal(trailerUrl);
            });
        });
    }
    function clearFilters() {
        rootElement.querySelector("#filter-year").value = "all";
        rootElement.querySelector("#filter-rating").value = "all";
        rootElement.querySelector("#sort").value = "asc";
        applyFilters(); // Aplicar filtros después de limpiar
    }
    function initStatistics() {
        // Calcular el rating promedio
        const averageRating = (0, _dataFunctions.calculateAverageRating)(_dataset.default);
        // Calcular el total de premios recibidos
        const totalAwardsReceived = (0, _dataFunctions.calculateAwardsReceived)(_dataset.default);
        // Calcular el total de audiencia
        const totalAudience = (0, _dataFunctions.calculateTotalAudience)(_dataset.default);
        // Actualizar el DOM con el rating promedio, total de premios y total de audiencia
        average.textContent = averageRating;
        awards.textContent = totalAwardsReceived;
        audience.textContent = totalAudience;
    }
    function showTrailerModal(trailerUrl) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <iframe class="trailer-video" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
        document.body.appendChild(modal);
        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener("click", ()=>{
            document.body.removeChild(modal);
        });
        modal.addEventListener("click", (event)=>{
            if (event.target === modal) document.body.removeChild(modal);
        });
    }
    function showMenu() {
        const toggleButton = rootElement.querySelector(".filter-menu-toggle");
        const filterMenu = rootElement.querySelector(".filter-menu");
        toggleButton.addEventListener("click", function() {
            filterMenu.classList.toggle("show");
        });
    }
    showMenu();
    initStatistics();
    return rootElement;
}

},{"1a3a74313595d41c":"hw5Qm","9a95a1451325dff7":"1I1KU","83c4d5dee2ada943":"dplDb","45f18df77a9ee4d9":"ahDUw","cfdf3e3512480f08":"eSPWg"}],"1I1KU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateAverageRating = calculateAverageRating;
exports.calculateAwardsReceived = calculateAwardsReceived;
exports.calculateTotalAudience = calculateTotalAudience;
exports.filterDataRating = filterDataRating;
exports.filterDataYear = filterDataYear;
exports.getMovieById = getMovieById;
exports.searchMovies = searchMovies;
exports.sortData = sortData;
function filterDataYear(data, filterValue) {
    if (filterValue === "all") return data;
    const filteredData = data.reduce((accumulator, currentItem)=>{
        const year = currentItem.facts.year;
        if (filterValue === "2005-2010" && year >= 2005 && year <= 2010 || filterValue === "2010-2015" && year >= 2010 && year <= 2015 || filterValue === "2015-2020" && year >= 2015 && year <= 2020 || filterValue === "2020-2023" && year >= 2020 && year <= 2023) accumulator.push(currentItem);
        return accumulator;
    }, []);
    return filteredData;
}
function filterDataRating(data, filterValue) {
    if (filterValue === "all") return data;
    return data.filter((item)=>{
        const ratingStr = item.facts.rating.split("/")[0];
        const rating = parseFloat(ratingStr);
        if (filterValue === "1-4") return rating >= 1 && rating <= 4;
        if (filterValue === "4-7") return rating > 4 && rating <= 7;
        if (filterValue === "7-10") return rating > 7 && rating <= 10;
    });
}
function sortData(data, sortValue) {
    // Clonar el array para evitar mutaciones inesperadas
    const clonedData = data.map((item)=>({
            ...item
        }));
    if (sortValue === "asc") return clonedData.sort((a, b)=>a.facts.year - b.facts.year);
    else if (sortValue === "desc") return clonedData.sort((a, b)=>b.facts.year - a.facts.year);
    return clonedData;
}
function calculateAverageRating(data) {
    const ratings = data.map((movie)=>parseFloat(movie.facts.rating));
    const sum = ratings.reduce((accumulator, rating)=>accumulator + rating, 0);
    const average = sum / ratings.length;
    const averageRounded = average.toFixed(1);
    return averageRounded;
}
function calculateAwardsReceived(data) {
    const totalAwards = data.reduce((accumulator, movie)=>{
        return accumulator + movie.extraInfo.awards;
    }, 0);
    return totalAwards;
}
function calculateTotalAudience(data) {
    const totalAudience = data.reduce((accumulator, movie)=>{
        return accumulator + movie.extraInfo.audience;
    }, 0);
    return totalAudience + " M";
}
function searchMovies(data, query) {
    return data.filter((movie)=>movie.name.toLowerCase().includes(query));
}
function getMovieById(data, movieId) {
    return data.find((movie)=>movie.id === movieId);
}

},{}],"dplDb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _default = exports.default = [
    {
        "id": "iron_man_2008",
        "name": "Iron Man",
        "shortDescription": "Tony Stark builds a suit of armor to escape captivity.",
        "description": "Iron Man introduces billionaire industrialist Tony Stark, who is captured by enemy forces while demonstrating new weapons technology. Stark builds a powerful suit of armor to escape, marking the birth of the legendary superhero Iron Man. As Stark embraces his alter ego, he faces challenges from within his own company and threats from adversaries seeking to exploit his technology. With wit, intelligence, and a suit of high-tech armor, Iron Man must confront his own past and protect the world from imminent danger.",
        "imageUrl": "https://i.pinimg.com/564x/f9/90/00/f990004bf5be977c963b43fd843c3b50.jpg",
        "front": "https://media.vandalsports.com/i/1200x675/5-2023/20235313176_1.jpg",
        "facts": {
            "year": 2008,
            "rating": "7.9/10",
            "director": "Jon Favreau",
            "duration": "126 min",
            "trailer": "https://www.youtube.com/embed/8ugaeA-nMTc"
        },
        "extraInfo": {
            "awards": 22,
            "audience": 65
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Pepper Potts",
                "actor": "Gwyneth Paltrow",
                "imageUrl": "https://es.web.img3.acsta.net/c_310_420/pictures/15/08/12/12/18/463766.jpg"
            },
            {
                "name": "Obadiah Stane / Iron Monger",
                "actor": "Jeff Bridges",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jeff_Bridges_by_Gage_Skidmore_3.jpg/440px-Jeff_Bridges_by_Gage_Skidmore_3.jpg"
            }
        ]
    },
    {
        "id": "incredible_hulk_2008",
        "name": "The Incredible Hulk",
        "shortDescription": "Bruce Banner seeks a cure for his Hulk condition.",
        "description": "Follows scientist Bruce Banner, who, after a lab accident, transforms into a giant green monster whenever he experiences intense anger. On the run from the military, which seeks to weaponize his condition, Banner searches for a cure while evading capture. His quest leads him to face off against the ruthless General Thunderbolt Ross and his own inner demons. As Banner struggles to control his transformations, he must also confront a new threat in the form of the equally powerful Abomination, leading to a climactic battle that will test the limits of his strength and resolve.",
        "imageUrl": "https://i.pinimg.com/564x/5d/fd/be/5dfdbe1af9898cbe687650070b0da328.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMTQ2ODc0MjI2Nl5BMl5BanBnXkFtZTcwODg3NTAyNw@@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2008,
            "rating": "6.7/10",
            "director": "Louis Leterrier",
            "duration": "112 min",
            "trailer": "https://www.youtube.com/embed/xbqNb2PFKKA"
        },
        "extraInfo": {
            "awards": 3,
            "audience": 29
        },
        "characters": [
            {
                "name": "Bruce Banner / Hulk",
                "actor": "Edward Norton",
                "imageUrl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQz2XiRAy9oci5S2UjHc4K9MQ7FEUBk0FKzHaFzjylm4gOjMBmp"
            },
            {
                "name": "Betty Ross",
                "actor": "Liv Tyler",
                "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQdTiaBZT1Qj1H7HFnYhGFn6ivkVFht405PNS2KcaC3FIIeQOks"
            },
            {
                "name": "Emil Blonsky / Abomination",
                "actor": "Tim Roth",
                "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjA5NTA3MDQyOV5BMl5BanBnXkFtZTcwODM4NDE3Mw@@._V1_FMjpg_UX1000_.jpg"
            }
        ]
    },
    {
        "id": "iron_man_2_2010",
        "name": "Iron Man 2",
        "shortDescription": "Tony Stark faces government pressures, a new rival, and his own mortality while protecting his loved ones.",
        "description": "Iron Man 2 continues the story of Tony Stark as he faces new challenges. The world is aware of his dual life as a billionaire inventor and superhero, and governments and rival inventors are eager to replicate his technology. Stark must navigate these pressures while dealing with his health issues caused by the arc reactor in his chest. Meanwhile, a new foe, Ivan Vanko, emerges with his own arc reactor-powered suit as Whiplash. With the help of his friend James 'Rhodey' Rhodes, Stark confronts these threats, culminating in a climactic battle at the Stark Expo.",
        "imageUrl": "https://image.tmdb.org/t/p/original/3TVd7B5JFB8MtVQ2CvWnOQ3HKem.jpg",
        "front": "https://stars-my-destination.com/wp-content/uploads/2020/04/maxresdefault-1-1.jpg",
        "facts": {
            "year": 2010,
            "rating": "7.0/10",
            "director": "Jon Favreau",
            "duration": "124 min",
            "trailer": "https://www.youtube.com/embed/BoohRoVA9WQ"
        },
        "extraInfo": {
            "awards": 7,
            "audience": 69
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Natalia Romanova / Black Widow",
                "actor": "Scarlett Johansson",
                "imageUrl": "https://static01.nyt.com/images/2024/07/14/multimedia/14SCARLETT-JOHANSSON-COVER-tjhc/14SCARLETT-JOHANSSON-COVER-tjhc-superJumbo.jpg?quality=75&auto=webp"
            },
            {
                "name": "James Rhodes / War Machine",
                "actor": "Don Cheadle",
                "imageUrl": "https://cdn.britannica.com/95/216995-050-5E4D147A/American-actor-director-Don-Cheadle-2016.jpg"
            }
        ]
    },
    {
        "id": "thor_2011",
        "name": "Thor",
        "shortDescription": "Thor, the God of Thunder, is cast out of Asgard.",
        "description": "Thor, the arrogant prince of Asgard, is banished to Earth by his father Odin after reigniting an ancient war. Stripped of his powers and his mighty hammer Mjolnir, Thor must learn humility and redemption. On Earth, he meets astrophysicist Jane Foster and her team, forming a bond with Jane while encountering SHIELD agents. Meanwhile, Thor's brother Loki schemes to seize the throne of Asgard. Thor faces the Destroyer, a powerful Asgardian weapon, to prove himself worthy of Mjolnir. Through sacrifice and selflessness, Thor regains his powers and returns to Asgard to confront Loki and save both realms from destruction.",
        "imageUrl": "https://image.tmdb.org/t/p/original/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        "front": "https://www.cuartomundo.cl/wp-content/uploads/2015/03/30921.jpg",
        "facts": {
            "year": 2011,
            "rating": "7.0/10",
            "director": "Kenneth Branagh",
            "duration": "115 min",
            "trailer": "https://www.youtube.com/embed/JOddp-nlNvQ"
        },
        "extraInfo": {
            "awards": 5,
            "audience": 50
        },
        "characters": [
            {
                "name": "Thor",
                "actor": "Chris Hemsworth",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxCgUxxr_WRgrfE58S5lfp5UUgB5r_F-RGaNPLZh0lR2y2UNe"
            },
            {
                "name": "Loki",
                "actor": "Tom Hiddleston",
                "imageUrl": "https://media.vanityfair.com/photos/66050a8578f6c8e74b372ef6/master/w_2560%2Cc_limit/1398729436"
            },
            {
                "name": "Jane Foster",
                "actor": "Natalie Portman",
                "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQX7OGrgSH5rsJwWW2n5KdzUjL1SDsXCvNjl818LcTrh-ZsP3rPco6z-XU_P0DSwisnHLCgv38SmmwOSzA"
            }
        ]
    },
    {
        "id": "captain_america_2011",
        "name": "Captain America: The First Avenger",
        "shortDescription": "Steve Rogers becomes a super soldier and battles the villainous Red Skull.",
        "description": "Steve Rogers, a frail young man deemed unfit for military service, volunteers for a top-secret research project that transforms him into the super-soldier Captain America. With his enhanced strength, agility, and trusty shield, Captain America battles the evil HYDRA organization led by the villainous Red Skull during World War II. Alongside his comrades, including Peggy Carter and Howard Stark, Captain America embodies the virtues of heroism, sacrifice, and righteousness, ultimately facing a climactic showdown with Red Skull that will test his resolve and reshape the course of history.",
        "imageUrl": "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_.jpg",
        "front": "https://wallpapers.gg/wp-content/uploads/2017/11/Captain-America-The-First-Avenger-HD-1280x800.jpg",
        "facts": {
            "year": 2011,
            "rating": "6.9/10",
            "director": "Joe Johnston",
            "duration": "124 min",
            "trailer": "https://www.youtube.com/embed/JerVrbLldXw"
        },
        "extraInfo": {
            "awards": 7,
            "audience": 41
        },
        "characters": [
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Peggy Carter",
                "actor": "Hayley Atwell",
                "imageUrl": "https://www.pearlanddean.com/wp-content/uploads/2023/07/uuid87fd46a0-b9ab-41a7-af67-c96c20d99d44groupId10139t1689327260184.jpg"
            },
            {
                "name": "Johann Schmidt / Red Skull",
                "actor": "Hugo Weaving",
                "imageUrl": "https://static.ffx.io/images/$zoom_0.34986050194931767%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_66%2C$y_505/t_crop_custom/q_86%2Cf_auto/c122ca454dcb6ad6ac5e8b0765c3a774c8e3ab0e"
            }
        ]
    },
    {
        "id": "avengers_2012",
        "name": "The Avengers",
        "shortDescription": "Earth's mightiest heroes team up to save the world.",
        "description": "Earth's mightiest heroes - Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye - are brought together by S.H.I.E.L.D. director Nick Fury to form the Avengers. Their mission is to stop the mischievous Loki, who has stolen the powerful Tesseract and threatens to conquer Earth. As the team learns to work together, they must also overcome their own differences and egos to become a cohesive unit. With epic battles, witty banter, and explosive action, The Avengers is a thrilling superhero ensemble that sets the stage for an interconnected cinematic universe unlike any other.",
        "imageUrl": "https://i.ebayimg.com/images/g/ZbUAAOSwXPtkxVyM/s-l1600.webp",
        "front": "https://cinepremiere.com.mx/wp-content/uploads/2012/04/avengers-critica-pelicula.jpg",
        "facts": {
            "year": 2012,
            "rating": "8.0/10",
            "director": "Joss Whedon",
            "duration": "143 min",
            "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
        },
        "extraInfo": {
            "awards": 38,
            "audience": 169
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Bruce Banner / Hulk",
                "actor": "Mark Ruffalo",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mark_Ruffalo_at_the_Toronto_premiere_of_The_Avengers_%28cropped%29.jpg/170px-Mark_Ruffalo_at_the_Toronto_premiere_of_The_Avengers_%28cropped%29.jpg"
            }
        ]
    },
    {
        "id": "iron_man_3_2013",
        "name": "Iron Man 3",
        "shortDescription": "Tony Stark faces a formidable enemy called the Mandarin.",
        "description": "Tony Stark faces a powerful enemy, the terrorist known as the Mandarin, who launches a series of devastating attacks. Stripped of his resources and forced to rely on his ingenuity and instincts, Stark embarks on a quest to protect his loved ones and uncover the truth behind the Mandarin's sinister plot. Battling his inner demons and grappling with the consequences of his past actions, Stark must confront the limits of his technology and the strength of his will. With unexpected allies and heart-pounding action, 'Iron Man 3' explores themes of redemption, resilience, and the true meaning of heroism.",
        "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_912535-MLA52539341498_112022-F.webp",
        "front": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/04/iron-man-3.jpg",
        "facts": {
            "year": 2013,
            "rating": "7.1/10",
            "director": "Shane Black",
            "duration": "130 min",
            "trailer": "https://www.youtube.com/embed/YLorLVa95Xo"
        },
        "extraInfo": {
            "awards": 18,
            "audience": 135
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Pepper Potts",
                "actor": "Gwyneth Paltrow",
                "imageUrl": "https://es.web.img3.acsta.net/c_310_420/pictures/15/08/12/12/18/463766.jpg"
            },
            {
                "name": "Aldrich Killian",
                "actor": "Guy Pearce",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/15/07/22/12/52/040647.jpg"
            }
        ]
    },
    {
        "id": "thor_dark_world_2013",
        "name": "Thor: The Dark World",
        "shortDescription": "Thor battles an ancient race of Dark Elves.",
        "description": "Thor is a superhero film based on the Marvel Comics character Thor. It is the sequel to the 2011 film 'Thor' and is part of the Marvel Cinematic Universe (MCU). In this movie, Thor fights to save the Nine Realms from an ancient race led by the vengeful Malekith, who seeks to plunge the universe into absolute darkness using a powerful artifact called the Aether. Thor forms an unlikely alliance with his adoptive brother, Loki, as he faces personal challenges and the need to make difficult decisions to protect his people and the universe.",
        "imageUrl": "https://ew.com/thmb/4kqxOjcrf5APXxZllefwMcxI35Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thor-dark-world-poster-a2c56113bf284a22942c0ef46395c5df.jpg",
        "front": "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_46/c_fill,f_auto,h_1215,q_auto,w_2160/v1/m/4/a/4a1d721275a91e86c55e36a4c2a42c1b7c2c2a17/20-facts-might-know-thor-dark-world.jpg",
        "facts": {
            "year": 2013,
            "rating": "6.9/10",
            "director": "Alan Taylor",
            "duration": "112 min",
            "trailer": "https://www.youtube.com/embed/npvJ9FTgZbM"
        },
        "extraInfo": {
            "awards": 2,
            "audience": 72
        },
        "characters": [
            {
                "name": "Thor",
                "actor": "Chris Hemsworth",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxCgUxxr_WRgrfE58S5lfp5UUgB5r_F-RGaNPLZh0lR2y2UNe"
            },
            {
                "name": "Loki",
                "actor": "Tom Hiddleston",
                "imageUrl": "https://media.vanityfair.com/photos/66050a8578f6c8e74b372ef6/master/w_2560%2Cc_limit/1398729436"
            },
            {
                "name": "Jane Foster",
                "actor": "Natalie Portman",
                "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQX7OGrgSH5rsJwWW2n5KdzUjL1SDsXCvNjl818LcTrh-ZsP3rPco6z-XU_P0DSwisnHLCgv38SmmwOSzA"
            }
        ]
    },
    {
        "id": "captain_america_winter_soldier",
        "name": "Captain America: The Winter Soldier",
        "shortDescription": "Captain America faces a new threat from an old friend.",
        "description": "Steve Rogers, struggles to adapt to life in the modern world while working for the espionage agency S.H.I.E.L.D. When a conspiracy emerges within S.H.I.E.L.D., Rogers teams up with Black Widow and the Falcon to uncover the truth. They soon find themselves up against the Winter Soldier, a mysterious assassin with a link to Rogers' past. As the conspiracy deepens and old enemies resurface, Captain America and his allies must fight to expose the truth and protect the world from a sinister new threat that could have devastating consequences.",
        "imageUrl": "https://im.ziffdavisinternational.com/ign_es/screenshot/c/capitan-america-2-tres-carteles-de-sus-protagonist/capitan-america-2-tres-carteles-de-sus-protagonist_f8pv.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMGRlZWExMmMtY2Y4Zi00NTkyLWFmOWMtNmQ3NWIwOWU0Y2JhXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_FMjpg_UX1200_.jpg",
        "facts": {
            "year": 2014,
            "rating": "7.7/10",
            "director": "Anthony and Joe Russo",
            "duration": "136 min",
            "trailer": "https://www.youtube.com/embed/7SlILk2WMTI"
        },
        "extraInfo": {
            "awards": 11,
            "audience": 79
        },
        "characters": [
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Bucky Barnes / Winter Soldier",
                "actor": "Sebastian Stan",
                "imageUrl": "https://assets.dev-filo.dift.io/img/2022/07/28/sebastian_stan_sq.jpg"
            },
            {
                "name": "Natasha Romanoff / Black Widow",
                "actor": "Scarlett Johansson",
                "imageUrl": "https://static01.nyt.com/images/2024/07/14/multimedia/14SCARLETT-JOHANSSON-COVER-tjhc/14SCARLETT-JOHANSSON-COVER-tjhc-superJumbo.jpg?quality=75&auto=webp"
            }
        ]
    },
    {
        "id": "guardians_of_the_galaxy_2014",
        "name": "Guardians of the Galaxy",
        "shortDescription": "A group of misfits bands together to save the galaxy.",
        "description": "A group of intergalactic misfits - Peter Quill, Gamora, Drax the Destroyer, Rocket, and Groot - find themselves in possession of a powerful orb sought after by the villainous Ronan the Accuser. Forced to work together despite their differences, embark on a wild adventure across the cosmos to evade Ronan and his minions. Along the way, they form a bond and discover the true power of friendship and teamwork. With its blend of humor, action, and heart, 'Guardians of the Galaxy' is a thrilling space opera that introduces a new band of unlikely heroes to the Marvel Cinematic Universe.",
        "imageUrl": "https://m.media-amazon.com/images/I/71lbFfxfMtL._AC_UF894,1000_QL80_.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMjE5NTgzODMzOV5BMl5BanBnXkFtZTgwNzAyOTMyMjE@._V1_FMjpg_UX936_.jpg",
        "facts": {
            "year": 2014,
            "rating": "8.0/10",
            "director": "James Gunn",
            "duration": "121 min",
            "trailer": "https://www.youtube.com/embed/d96cjJhvlMA"
        },
        "extraInfo": {
            "awards": 52,
            "audience": 86
        },
        "characters": [
            {
                "name": "Peter Quill / Star-Lord",
                "actor": "Chris Pratt",
                "imageUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/249381_v9_bc.jpg"
            },
            {
                "name": "Gamora",
                "actor": "Zoe Saldana",
                "imageUrl": "https://assets.telegraphindia.com/telegraph/2023/Jun/1686827029_zoe-saldana.jpg"
            },
            {
                "name": "Drax the Destroyer",
                "actor": "Dave Bautista",
                "imageUrl": "https://people.com/thmb/CruPsjVRgE0NH-cQbH6Rflkpt6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(779x319:781x321)/sexy-every-age-4-5e0dfeed3fb040c69b6b5eacdf1b2a3b.jpg"
            }
        ]
    },
    {
        "id": "avengers_age_of_ultron_2015",
        "name": "Avengers: Age of Ultron",
        "shortDescription": "The Avengers face a new threat from the AI Ultron.",
        "description": "The Avengers - Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye - reassemble to defeat the sentient robot Ultron, created by Tony Stark as a peacekeeping program. Ultron turns against humanity, believing the only way to save Earth is to eradicate humanity. The Avengers must battle not only Ultron and his army of drones but also confront their own inner demons and conflicts. With new allies like Vision and Scarlet Witch, the Avengers face their greatest challenge yet, testing their unity and resolve in a battle that will determine the fate of the world.",
        "imageUrl": "https://m.media-amazon.com/images/I/7155LkI6wlL._AC_SL1015_.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMTkyODg2MjQ1MV5BMl5BanBnXkFtZTgwMDMwMjQ0NTE@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2015,
            "rating": "7.3/10",
            "director": "Joss Whedon",
            "duration": "141 min",
            "trailer": "https://www.youtube.com/embed/tmeOjFno6Do"
        },
        "extraInfo": {
            "awards": 6,
            "audience": 156
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Bruce Banner / Hulk",
                "actor": "Mark Ruffalo",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mark_Ruffalo_at_the_Toronto_premiere_of_The_Avengers_%28cropped%29.jpg/170px-Mark_Ruffalo_at_the_Toronto_premiere_of_The_Avengers_%28cropped%29.jpg"
            }
        ]
    },
    {
        "id": "ant_man_2015",
        "name": "Ant-Man",
        "shortDescription": "A con man gains the ability to shrink and must save the world.",
        "description": "Scott Lang, a master thief, is recruited by scientist Hank Pym to become the new Ant-Man, a superhero with the ability to shrink in size but increase in strength. Together with Pym's daughter, Hope van Dyne, they must pull off a heist to stop Pym's former prot\xe9g\xe9, Darren Cross, from using Pym's technology for evil. As Lang learns to harness the power of the Ant-Man suit, he must also navigate his newfound role as a hero and reconcile with his past mistakes. With humor, heart, and inventive action sequences, 'Ant-Man' delivers a fresh and entertaining take on the superhero genre.",
        "imageUrl": "https://i.pinimg.com/564x/f5/08/a8/f508a8133fa78968a26e7091bf325716.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMzc2MTMwMTMxOV5BMl5BanBnXkFtZTgwNTM5OTc4NTE@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2015,
            "rating": "7.3/10",
            "director": "Peyton Reed",
            "duration": "117 min",
            "trailer": "https://www.youtube.com/embed/pWdKf3MneyI"
        },
        "extraInfo": {
            "awards": 3,
            "audience": 58
        },
        "characters": [
            {
                "name": "Scott Lang / Ant-Man",
                "actor": "Paul Rudd",
                "imageUrl": "https://es.web.img2.acsta.net/pictures/18/04/24/11/17/4714754.jpg"
            },
            {
                "name": "Hope van Dyne",
                "actor": "Evangeline Lilly",
                "imageUrl": "https://st4.depositphotos.com/5326338/20651/i/380/depositphotos_206518834-stock-photo-actress-evangeline-lilly-los-angeles.jpg"
            },
            {
                "name": "Darren Cross / Yellowjacket",
                "actor": "Corey Stoll",
                "imageUrl": "https://image.tmdb.org/t/p/w500/etqmosIyf1xePKpi3i6rHJCm9GE.jpg"
            }
        ]
    },
    {
        "id": "captain_america_civil_war_2016",
        "name": "Captain America: Civil War",
        "shortDescription": "Sees the Avengers divided over government oversight, leading to an epic clash between allies",
        "description": "The Avengers are divided over the Sokovia Accords, which would establish oversight and control over the team by the United Nations. Iron Man supports the Accords, believing in accountability, while Captain America is against them, fearing that political interference could compromise the team's ability to act when necessary. The debate escalates into an all-out battle between former allies, with each side recruiting additional heroes to their cause. As the conflict intensifies, long-buried secrets and personal vendettas come to light, leading to a showdown that will change the Avengers forever.",
        "imageUrl": "https://i.ebayimg.com/images/g/zz8AAOSw3OVjPM6f/s-l1600.webp",
        "front": "https://m.media-amazon.com/images/M/MV5BODg3OTc4MTEyMl5BMl5BanBnXkFtZTgwODI0MDkyODE@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2016,
            "rating": "7.8/10",
            "director": "Anthony Russo, Joe Russo",
            "duration": "147 min",
            "trailer": "https://www.youtube.com/embed/dKrVegVI0Us"
        },
        "extraInfo": {
            "awards": 9,
            "audience": 128
        },
        "characters": [
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Natasha Romanoff / Black Widow",
                "actor": "Scarlett Johansson",
                "imageUrl": "https://static01.nyt.com/images/2024/07/14/multimedia/14SCARLETT-JOHANSSON-COVER-tjhc/14SCARLETT-JOHANSSON-COVER-tjhc-superJumbo.jpg?quality=75&auto=webp"
            }
        ]
    },
    {
        "id": "doctor_strange_2016",
        "name": "Doctor Strange",
        "shortDescription": "A surgeon turns to magic to heal his hands and fight evil.",
        "description": "Gifted but arrogant neurosurgeon Stephen Strange's life changes forever after a car accident leaves him with severe hand injuries, ending his career. Desperate to heal his hands, Strange travels to Nepal, where he encounters the Ancient One, a sorcerer who teaches him the mystic arts. As he delves into the world of magic and alternate dimensions, Strange must harness his newfound powers to protect the world from the malevolent sorcerer Kaecilius, who seeks to merge the dark dimension with Earth. With mind-bending visuals and a compelling origin story, 'Doctor Strange' explores themes of spirituality, redemption, and the nature of reality.",
        "imageUrl": "https://i.pinimg.com/564x/91/13/79/911379ee2a1bc5388414ec692aea80d7.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMjI0NTYyMzg4OV5BMl5BanBnXkFtZTgwNjQ5MDAzMDI@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2016,
            "rating": "7.5/10",
            "director": "Scott Derrickson",
            "duration": "115 min",
            "trailer": "https://www.youtube.com/embed/HSzx-zryEgM"
        },
        "extraInfo": {
            "awards": 21,
            "audience": 75
        },
        "characters": [
            {
                "name": "Dr. Stephen Strange",
                "actor": "Benedict Cumberbatch",
                "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/210728-se-esquire-benedict-cumberbatch-shot-02-019-fin3-flat-1636369360.png"
            },
            {
                "name": "Christine Palmer",
                "actor": "Rachel McAdams",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rachel_McAdams_by_Gage_Skidmore.jpg/1200px-Rachel_McAdams_by_Gage_Skidmore.jpg"
            },
            {
                "name": "Karl Mordo",
                "actor": "Chiwetel Ejiofor",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/76/Chiwetel_Ejiofor_TIFF_2015.jpg"
            }
        ]
    },
    {
        "id": "guardians_galaxy_vol_2_2017",
        "name": "Guardians of the Galaxy Vol. 2",
        "shortDescription": "The Guardians uncover the mystery of Peter Quill's parentage.",
        "description": "The Guardians - Peter Quill, Gamora, Drax, Rocket, and Groot - embark on a new adventure as they unravel the mystery of Peter's parentage. Along the way, they encounter old foes and new allies, including the enigmatic Ego, who claims to be Peter's father. As they navigate through dazzling new worlds and face dangerous enemies, the Guardians must confront their own inner demons and learn the true meaning of family. With its signature blend of humor, heart, and epic sci-fi action, 'Guardians of the Galaxy Vol. 2' is a thrilling ride that explores the bonds that unite us all.",
        "imageUrl": "https://m.media-amazon.com/images/I/71K+P8n6sGL._AC_SY879_.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMTcwMTgwMzA5N15BMl5BanBnXkFtZTgwNjQxNDczMTI@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2017,
            "rating": "7.6/10",
            "director": "James Gunn",
            "duration": "137 min",
            "trailer": "https://www.youtube.com/embed/dW1BIid8Osg"
        },
        "extraInfo": {
            "awards": 15,
            "audience": 96
        },
        "characters": [
            {
                "name": "Peter Quill / Star-Lord",
                "actor": "Chris Pratt",
                "imageUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/249381_v9_bc.jpg"
            },
            {
                "name": "Gamora",
                "actor": "Zoe Saldana",
                "imageUrl": "https://assets.telegraphindia.com/telegraph/2023/Jun/1686827029_zoe-saldana.jpg"
            },
            {
                "name": "Drax the Destroyer",
                "actor": "Dave Bautista",
                "imageUrl": "https://people.com/thmb/CruPsjVRgE0NH-cQbH6Rflkpt6k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(779x319:781x321)/sexy-every-age-4-5e0dfeed3fb040c69b6b5eacdf1b2a3b.jpg"
            }
        ]
    },
    {
        "id": "spider_man_homecoming_2017",
        "name": "Spider-Man: Homecoming",
        "shortDescription": "Peter Parker balances high school and his superhero life.",
        "description": "Young Peter Parker navigates the challenges of high school while also balancing his life as the friendly neighborhood Spider-Man. Eager to prove himself as more than just a 'friendly neighborhood Spider-Man,' Peter sets out to stop the villainous Vulture, who threatens to unleash chaos in New York City. With the help of his mentor, Tony Stark, Peter learns valuable lessons about heroism, responsibility, and what it truly means to be a hero. Filled with humor, heart, and thrilling action sequences, 'Spider-Man: Homecoming' captures the essence of the iconic superhero while offering a fresh and relatable take on the character.",
        "imageUrl": "https://m.media-amazon.com/images/I/71HQ7lBgbGL._AC_SL1000_.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMjE0MTg5MTU2Nl5BMl5BanBnXkFtZTgwMzcyMzM4MjI@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2017,
            "rating": "7.4/10",
            "director": "Jon Watts",
            "duration": "133 min",
            "trailer": "https://www.youtube.com/embed/n9DwoQ7HWvI"
        },
        "extraInfo": {
            "awards": 8,
            "audience": 98
        },
        "characters": [
            {
                "name": "Peter Parker / Spider-Man",
                "actor": "Tom Holland",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/640px-Tom_Holland_by_Gage_Skidmore.jpg"
            },
            {
                "name": "Adrian Toomes / Vulture",
                "actor": "Michael Keaton",
                "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1127231094.jpg"
            },
            {
                "name": "Michelle 'MJ' Jones",
                "actor": "Zendaya",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/1200px-Zendaya_-_2019_by_Glenn_Francis.jpg"
            }
        ]
    },
    {
        "id": "thor_ragnarok_2017",
        "name": "Thor: Ragnarok",
        "shortDescription": "Thor must prevent the end of Asgard and stop Hela.",
        "description": "Thor finds himself imprisoned on the distant planet Sakaar, stripped of his mighty hammer, Mj\xf6lnir. There, he must survive gladiatorial battles orchestrated by the eccentric Grandmaster and reunite with old ally Hulk. Meanwhile, the ruthless Hela, Goddess of Death, has taken over Asgard, threatening its destruction. To save his home and prevent Ragnarok\u2014the prophesied end of Asgardian civilization\u2014Thor must assemble a team, including his treacherous brother Loki and the fierce Valkyrie. With a blend of humor, epic battles, and vibrant visuals, 'Thor: Ragnarok' reinvents the Thor franchise, delivering an action-packed adventure.",
        "imageUrl": "https://i.ebayimg.com/images/g/7VsAAOSwH35Zn5-g/s-l500.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMjM5ODYyMDI4M15BMl5BanBnXkFtZTgwMzIxMjgwNDI@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2017,
            "rating": "7.9/10",
            "director": "Taika Waititi",
            "duration": "130 min",
            "trailer": "https://www.youtube.com/embed/ue80QwXMRHg"
        },
        "extraInfo": {
            "awards": 12,
            "audience": 95
        },
        "characters": [
            {
                "name": "Thor",
                "actor": "Chris Hemsworth",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxCgUxxr_WRgrfE58S5lfp5UUgB5r_F-RGaNPLZh0lR2y2UNe"
            },
            {
                "name": "Loki",
                "actor": "Tom Hiddleston",
                "imageUrl": "https://media.vanityfair.com/photos/66050a8578f6c8e74b372ef6/master/w_2560%2Cc_limit/1398729436"
            },
            {
                "name": "Hela",
                "actor": "Cate Blanchett",
                "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTc1MDI0MDg1NV5BMl5BanBnXkFtZTgwMDM3OTAzMTE@._V1_FMjpg_UX1000_.jpg"
            }
        ]
    },
    {
        "id": "black_panther_2018",
        "name": "Black Panther",
        "shortDescription": "T'Challa returns to Wakanda to claim his throne.",
        "description": "In the technologically advanced African nation of Wakanda, T'Challa (Chadwick Boseman) assumes the throne as king following his father's death. As the Black Panther, he must protect his people and their way of life from threats both internal and external. However, when an old enemy reappears, T'Challa is drawn into a conflict that puts the fate of Wakanda and the entire world at risk. With his allies by his side, including the fierce warrior Okoye (Danai Gurira) and his genius sister Shuri (Letitia Wright), T'Challa confronts his past and family legacy, fighting to secure his nation's future.",
        "imageUrl": "https://m.media-amazon.com/images/I/A1PaCX4oXjL._AC_SL1500_.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BMTUyMDQzODM4MV5BMl5BanBnXkFtZTgwNzM3MDM5NDM@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2018,
            "rating": "7.3/10",
            "director": "Ryan Coogler",
            "duration": "134 min",
            "trailer": "https://www.youtube.com/embed/xjDjIWPwcPU"
        },
        "extraInfo": {
            "awards": 112,
            "audience": 150
        },
        "characters": [
            {
                "name": "T'Challa / Black Panther",
                "actor": "Chadwick Boseman",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRihboW-OFFzindD8MjRRZksYUVbqkRRObmPA&s"
            },
            {
                "name": "Erik Killmonger",
                "actor": "Michael B. Jordan",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Michael_B._Jordan_Cannes_2018.jpg/1200px-Michael_B._Jordan_Cannes_2018.jpg"
            },
            {
                "name": "Nakia",
                "actor": "Lupita Nyong'o",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lupita_Nyong%27o_by_Gage_Skidmore_4.jpg/1200px-Lupita_Nyong%27o_by_Gage_Skidmore_4.jpg"
            }
        ]
    },
    {
        "id": "avengers_infinity_war_2018",
        "name": "Avengers: Infinity War",
        "shortDescription": "The Avengers battle Thanos to stop his quest for the Infinity Stones.",
        "description": "In Avengers: Infinity War, the Avengers and their allies unite against the powerful alien warlord Thanos (Josh Brolin), who seeks to acquire all six Infinity Stones. With these stones, Thanos could alter reality and destroy the universe. Iron Man (Robert Downey Jr.), Captain America (Chris Evans), Thor (Chris Hemsworth), Hulk (Mark Ruffalo), Black Widow (Scarlett Johansson), and other Avengers join forces with the Guardians of the Galaxy and more heroes from the Marvel Cinematic Universe. Facing imminent danger, the Avengers must be willing to make unthinkable sacrifices to stop Thanos and save the universe.",
        "imageUrl": "https://i5.walmartimages.com/asr/65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg",
        "front": "https://m.media-amazon.com/images/M/MV5BMTc3Mjk2MjkzMl5BMl5BanBnXkFtZTgwMzY4MjkzNTM@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2018,
            "rating": "8.4/10",
            "director": "Anthony Russo, Joe Russo",
            "duration": "149 min",
            "trailer": "https://www.youtube.com/embed/6ZfuNTqbHE8"
        },
        "extraInfo": {
            "awards": 46,
            "audience": 228
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Thanos",
                "actor": "Josh Brolin",
                "imageUrl": "https://pyxis.nymag.com/v1/imgs/654/ab4/c4d53abf0326f8e9dc9635eb42080fadf2-20-josh-brolin.rsquare.w330.jpg"
            }
        ]
    },
    {
        "id": "ant_man_and_wasp_2018",
        "name": "Ant-Man and the Wasp",
        "shortDescription": "Scott Lang teams up with the Wasp to uncover secrets from the past.",
        "description": "Scott Lang faces the repercussions of his dual life as a superhero and a parent. While under house arrest post 'Captain America: Civil War,' he's enlisted by Hope van Dyne (Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) for a new mission. Their quest unveils hidden truths, culminating in a showdown with a formidable new foe. As they grapple with personal and external challenges, Ant-Man and the Wasp must combine their shrinking and growing powers to save the world from Ghost (Hannah John-Kamen), a formidable enemy with phasing abilities, and unravel the mysteries of their past.",
        "imageUrl": "https://i.pinimg.com/564x/1b/4b/fe/1b4bfee2454cae209ad096d309c621cc.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BNTAwNDU5MjQyMF5BMl5BanBnXkFtZTgwMDkwMDk1NDM@._V1_FMjpg_UX2048_.jpg",
        "facts": {
            "year": 2018,
            "rating": "7.0/10",
            "director": "Peyton Reed",
            "duration": "118 min",
            "trailer": "https://www.youtube.com/embed/UUkn-enk2RU"
        },
        "extraInfo": {
            "awards": 1,
            "audience": 69
        },
        "characters": [
            {
                "name": "Scott Lang / Ant-Man",
                "actor": "Paul Rudd",
                "imageUrl": "https://es.web.img2.acsta.net/pictures/18/04/24/11/17/4714754.jpg"
            },
            {
                "name": "Hope van Dyne / The Wasp",
                "actor": "Evangeline Lilly",
                "imageUrl": "https://st4.depositphotos.com/5326338/20651/i/380/depositphotos_206518834-stock-photo-actress-evangeline-lilly-los-angeles.jpg"
            },
            {
                "name": "Hank Pym",
                "actor": "Michael Douglas",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/38/Michael_Douglas_C%C3%A9sar_2016_3.jpg"
            }
        ]
    },
    {
        "id": "captain_marvel_2019",
        "name": "Captain Marvel",
        "shortDescription": "Carol Danvers becomes one of the universe's most powerful heroes.",
        "description": "Carol Danvers becomes one of the universe's most powerful heroes during a galactic war between two alien races. After her experimental aircraft crashes, Air Force pilot Carol is found by the Kree and trained as part of the elite Starforce Military under her mentor, Yon-Rogg (Jude Law). Six years later, while evading Skrull attackers, Carol lands on Earth and uncovers her true identity as Captain Marvel. With Nick Fury's help, she delves into her past, harnesses her powers, and strives to bring an end to the conflict, aiming to restore peace to the galaxy.",
        "imageUrl": "https://f.rpp-noticias.io/2018/12/03/720182capitanamarvelposter2019final-c53ad30badae9fce1002852a37cb90fdjpg.jpg",
        "front": "https://variety.com/wp-content/uploads/2019/03/captain-marvel-2.jpg",
        "facts": {
            "year": 2019,
            "rating": "6.8/10",
            "director": "Anna Boden, Ryan Fleck",
            "duration": "124 min",
            "trailer": "https://www.youtube.com/embed/Z1BCujX3pw8"
        },
        "extraInfo": {
            "awards": 14,
            "audience": 125
        },
        "characters": [
            {
                "name": "Carol Danvers / Captain Marvel",
                "actor": "Brie Larson",
                "imageUrl": "https://www.shefinds.com/files/2023/06/Brie-Larson-9th-Annual-Breakthrough-Prize-Ceremony.jpg"
            },
            {
                "name": "Nick Fury",
                "actor": "Samuel L. Jackson",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/640px-SamuelLJackson.jpg"
            },
            {
                "name": "Talos",
                "actor": "Ben Mendelsohn",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/36/Ben_Mendelsohn_by_Gage_Skidmore.jpg"
            }
        ]
    },
    {
        "id": "avengers_endgame_2019",
        "name": "Avengers: Endgame",
        "shortDescription": "The Avengers assemble to reverse the damage caused by Thanos.",
        "description": "Avengers: Endgame, the surviving Avengers and allies unite to undo the damage caused by Thanos in 'Avengers: Infinity War.' Thanos had used the Infinity Stones to erase half of all life in the universe. The Avengers embark on a desperate mission to reverse this devastation. As they grapple with their losses and seek a way to undo Thanos' actions, old and new allies join them in an epic battle. With the universe's fate hanging in the balance, the Avengers must be ready to sacrifice everything to restore balance and bring back those they've lost.",
        "imageUrl": "https://m.media-amazon.com/images/I/61RhWaYBp7L._AC_SY879_.jpg",
        "front": "https://m.media-amazon.com/images/M/MV5BYjQxOGNiZDQtYWM0MS00YmQxLTg1ODctNDQ4YTg5ZTBiYzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
        "facts": {
            "year": 2019,
            "rating": "8.4/10",
            "director": "Anthony Russo, Joe Russo",
            "duration": "181 min",
            "trailer": "https://www.youtube.com/embed/TcMBFSGVi1c"
        },
        "extraInfo": {
            "awards": 47,
            "audience": 311
        },
        "characters": [
            {
                "name": "Tony Stark / Iron Man",
                "actor": "Robert Downey Jr.",
                "imageUrl": "https://es.web.img2.acsta.net/c_310_420/pictures/22/03/21/14/03/3443055.jpg"
            },
            {
                "name": "Steve Rogers / Captain America",
                "actor": "Chris Evans",
                "imageUrl": "https://media.revistavanityfair.es/photos/60e83484220d3ca7e332c565/master/w_1600%2Cc_limit/163789.jpg"
            },
            {
                "name": "Thor",
                "actor": "Chris Hemsworth",
                "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHxCgUxxr_WRgrfE58S5lfp5UUgB5r_F-RGaNPLZh0lR2y2UNe"
            }
        ]
    },
    {
        "id": "spider_man_far_from_home_2019",
        "name": "Spider-Man: Far From Home",
        "shortDescription": "Peter Parker faces new threats while on a school trip to Europe.",
        "description": "Peter Parker embarks on a school trip to Europe with his classmates, hoping to take a break from being Spider-Man and confess his feelings to MJ. However, his plans are put on hold when Nick Fury recruits him to team up with Quentin Beck, also known as Mysterio, to battle the Elementals, creatures that can manipulate natural elements. As Peter tries to juggle his responsibilities as Spider-Man with his desire for a normal life, he soon discovers that things are not as they seem, and he must confront the true nature of Mysterio's intentions.",
        "imageUrl": "https://m.media-amazon.com/images/I/910t9BoIymL._AC_SY879_.jpg",
        "front": "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1562858972085-ZQD3OURYEPQH3CLMMH9C/image-asset.jpeg",
        "facts": {
            "year": 2019,
            "rating": "7.5/10",
            "director": "Jon Watts",
            "duration": "129 min",
            "trailer": "https://www.youtube.com/embed/DYYtuKyMtY8"
        },
        "extraInfo": {
            "awards": 4,
            "audience": 125
        },
        "characters": [
            {
                "name": "Peter Parker / Spider-Man",
                "actor": "Tom Holland",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/640px-Tom_Holland_by_Gage_Skidmore.jpg"
            },
            {
                "name": "Quentin Beck / Mysterio",
                "actor": "Jake Gyllenhaal",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jake_Gyllenhaal_2019_by_Glenn_Francis.jpg"
            },
            {
                "name": "Michelle 'MJ' Jones",
                "actor": "Zendaya",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/1200px-Zendaya_-_2019_by_Glenn_Francis.jpg"
            }
        ]
    },
    {
        "id": "black_widow_2021",
        "name": "Black Widow",
        "shortDescription": "Natasha Romanoff confronts her past as a spy and assassin.",
        "description": "Natasha Romanoff (Scarlett Johansson) confronts her murky past when a dangerous conspiracy resurfaces, forcing her to deal with her history as a spy. Pursued relentlessly, she must reconcile her past and broken relationships, aided by her sister figure, Yelena Belova (Florence Pugh), and allies. Together, they seek the source of the conspiracy and face off against Taskmaster. In this journey, Natasha confronts her past, both as a spy and as an Avenger, in a quest for redemption and to bring down the formidable threat.",
        "imageUrl": "https://m.media-amazon.com/images/I/91-liN-0JbS._AC_SY879_.jpg",
        "front": "https://media.glamourmagazine.co.uk/photos/61389a252bec5fcec32c1651/16:9/w_1920,c_limit/screen.jpg",
        "facts": {
            "year": 2021,
            "rating": "6.8/10",
            "director": "Cate Shortland",
            "duration": "134 min",
            "trailer": "https://www.youtube.com/embed/Fp9pNPdNwjI"
        },
        "extraInfo": {
            "awards": 7,
            "audience": 42
        },
        "characters": [
            {
                "name": "Natasha Romanoff / Black Widow",
                "actor": "Scarlett Johansson",
                "imageUrl": "https://static01.nyt.com/images/2024/07/14/multimedia/14SCARLETT-JOHANSSON-COVER-tjhc/14SCARLETT-JOHANSSON-COVER-tjhc-superJumbo.jpg?quality=75&auto=webp"
            },
            {
                "name": "Yelena Belova",
                "actor": "Florence Pugh",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Florence_Pugh_-_The_Wonder_BFI_London_Film_Festival_Premiere%2C_October_2022.jpg"
            },
            {
                "name": "Alexei Shostakov / Red Guardian",
                "actor": "David Harbour",
                "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/David_Harbour_by_Gage_Skidmore_2.jpg"
            }
        ]
    }
];

},{}],"ahDUw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeComponent = void 0;
const homeComponent = ()=>{
    const infoHome = `
  <header>
    <section class="menu">
    <div class="logo">
      <img src="assets/marvel_logo.png" alt="Marvel Logo">
    </div>
    <div class="search-bar">
      <img src="assets/search_icon.png" alt="Search Icon" class="search-icon">
      <input type="text" placeholder="Find your favorite movie">
    </div>
    <div class="api-key-button">
      <button>API Key</button>
    </div>
    </section>
    <h1>The Wonderful World of Marvel</h1>
    <h2>Your guide to the incredible Marvel Cinematic Universe, here you'll find detailed information about each movie</h2>
    <ul class="stats">
      <li class="stat-item">
        <div id="average-rating">0.0</div>
        <div>Average rating</div>
      </li>
      <li class="stat-item">
        <div id="awards-received">0</div>
        <div>Awards received</div>
      </li>
      <li class="stat-item">
        <div id="total-audience">0</div>
       <div>Total audience</div>
      </li>
     </ul>
</header>
<main class="filter-bar">
  <section>
    <p class="featureMovie">Feature movie</p>
  </section>
  <section>
    <button class="filter-menu-toggle">
      <img class="img-menu" src="assets/menu.svg">
    </button>
    <div class="filter-menu">
      <div class="filter-item">
        <div class="filter-header">
          <img src="assets/filter.png" alt="Year Icon" class="filter-icon">
          <div class="filter-label">Year</div>
        </div>
        <select id="filter-year" data-testid="filter-year" name="filter-year">
          <option class="options" value="all">All</option>
          <option class="options" value="2005-2010">2005-2010</option>
          <option class="options" value="2010-2015">2010-2015</option>
          <option class="options" value="2015-2020">2015-2020</option>
          <option class="options" value="2020-2023">2020-2023</option>
        </select>
      </div>
      <div class="filter-item">
        <div class="filter-header">
          <img src="assets/star.png" alt="Rating Icon" class="filter-icon">
          <div class="filter-label">Rating</div>
        </div>
        <select id="filter-rating" data-testid="filter-rating" name="filter-rating">
          <option class="options" value="all">All</option>
          <option class="options" value="1-4">1-4</option>
          <option class="options" value="4-7">4-7</option>
          <option class="options" value="7-10">7-10</option>
        </select>
      </div>
      <div class="filter-item">
        <div class="filter-header">
          <img src="assets/sort.png" alt="Sort Icon" class="filter-icon">
          <div class="filter-label">Sort by</div>
        </div>
        <select id="sort" data-testid="select-sort" name="orderOptions">
          <option class="options" value="desc">Latest</option>
          <option class="options" value="asc">Oldest</option>
        </select>
      </div>
      <button data-test id="button-clear">Clean</button>
    </div>
  </section>
</main>

<button class="group-chat-button"> Group Chat </button>

<section id="home"></section>
  `;
    return infoHome;
};
exports.homeComponent = homeComponent;

},{}],"eSPWg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderItems = void 0;
var _routes = require("cccaff58b7a74fbe");
const renderItems = (data)=>{
    // Creación elemento <ul> utilizando createElement
    const ulElement = document.createElement("ul");
    ulElement.classList.add("cards");
    // Recorrer la data mediante un bucle forEach
    data.forEach((item)=>{
        // Crear elemento <li> para cada elemento de data
        const liElement = document.createElement("li");
        liElement.classList.add("item");
        liElement.setAttribute("itemscope", "");
        liElement.setAttribute("itemtype", "marvelMovies");
        liElement.setAttribute("data-id", item.id);
        //Agregar contenido HTML interno dentro de <li>
        liElement.innerHTML = `
      <dl itemscope itemtype= "marvelMovies">
      <div class="movie-item">
        <img src="${item.imageUrl}" alt="${item.imageDescription}" class="movie-image"/>
        <button class="play-button" data-trailer="${item.facts.trailer}">&#9658</button>
      </div>
      <section class="texto">
        <dt>Year:</dt><dd itemprop="year">${item.facts.year}</dd>
        <dt>Name</dt><dd itemprop="name">${item.name}</dd>
        <dt>Short Description:</dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
        <dt>Director:</dt><dd itemprop="director">Directed by ${item.facts.director}</dd>
        <dt>Duration:</dt><dd itemprop="duration">Duration ${item.facts.duration}</dd>
        <dt>Rating:</dt><dd itemprop="rating"><img class="rating-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb Logo" />  ${item.facts.rating}</dd>
        <div class="button-group">
          <button class="viewmore-button">View more</button>
         <button class="chat-button">
          <img src="assets/chat-icon.png" alt="Chat Icon" class="chat-icon"> Chat
        </button>

        </div>
      </section>
      </dl>
    `;
        // Agrega el evento click al botón "View more"
        const viewMoreButton = liElement.querySelector(".viewmore-button");
        viewMoreButton.addEventListener("click", ()=>{
            const movieId = item.id;
            (0, _routes.navigateTo)("/about", {
                id: movieId
            });
        });
        const chatButton = liElement.querySelector(".chat-button");
        chatButton.addEventListener("click", ()=>{
            const movieId = item.id;
            (0, _routes.navigateTo)("/chat", {
                id: movieId
            });
        });
        ulElement.appendChild(liElement);
    });
    // Retornar el elemento <ul> completo
    return ulElement;
};
exports.renderItems = renderItems;

},{"cccaff58b7a74fbe":"hw5Qm"}],"5P8If":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = About;
var _routes = require("381c67685cd1965a");
var _dataset = _interopRequireDefault(require("80f51bd464bce82d"));
var _detailsComponent = require("926da74395476415");
var _dataFunctions = require("6fb56df33bbab30b");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
function About() {
    const rootElement = document.createElement("div");
    const movieId = getQueryParam("id");
    const movie = (0, _dataFunctions.getMovieById)(_dataset.default, movieId);
    rootElement.innerHTML = (0, _detailsComponent.detailsComponent)(movie);
    const trailerPlay = rootElement.querySelector(".trailer-play");
    trailerPlay.addEventListener("click", (event)=>{
        const trailerUrl = event.target.getAttribute("data-trailer");
        showTrailerModal(trailerUrl);
    });
    // background image
    const backgroundImageUrl = movie.front;
    const backgrounHeader = rootElement.querySelector(".header-details");
    // Verifica si el elemento existe
    if (backgrounHeader) // Agrega la imagen de fondo utilizando la URL dinámica
    backgrounHeader.style.backgroundImage = `linear-gradient(to bottom,rgba(5, 7, 12, 0.8), rgba(5, 7, 12, 0.4)),url(${backgroundImageUrl})`;
    function showTrailerModal(trailerUrl) {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <iframe class="trailer-video" src="${trailerUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
        document.body.appendChild(modal);
        const closeButton = modal.querySelector(".close-button");
        closeButton.addEventListener("click", ()=>{
            document.body.removeChild(modal);
        });
        modal.addEventListener("click", (event)=>{
            if (event.target === modal) document.body.removeChild(modal);
        });
    }
    const apiKeyButton = rootElement.querySelector(".api-key-button");
    apiKeyButton.addEventListener("click", ()=>{
        (0, _routes.navigateTo)("/api-key");
    });
    const chatButton = rootElement.querySelector(".chat-button");
    chatButton.addEventListener("click", ()=>{
        (0, _routes.navigateTo)("/chat", {
            id: movieId
        });
    });
    // Función para obtener el parámetro de la URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    return rootElement;
}

},{"381c67685cd1965a":"hw5Qm","80f51bd464bce82d":"dplDb","926da74395476415":"kVvJL","6fb56df33bbab30b":"1I1KU"}],"kVvJL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.detailsComponent = void 0;
const detailsComponent = (item)=>{
    const element = `
    <header class="header-details">
        <section class="menu">
      <div class="logo">
        <img src="assets/marvel_logo.png" alt="Marvel Logo">
      </div>
      <div class="api-key-button">
        <button>API Key</button>
      </div>
    </section>
    </header>
    <div class="details-container">
    <div class="movie-image-box">
     <img src="${item.imageUrl}" alt="${item.imageDescription}" class="movie-image"/>
    </div>
      <div class="details">
        <ul class="details-box">
          <li class="year">${item.facts.year}</li>
          <li class="name">${item.name}</li>
          <li class="rating"><img class="rating-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb Logo" />  ${item.facts.rating}</li>
          <li class="description">${item.description}</li>
          <li class="director">Director:  ${item.facts.director}</li>
          <li class="duration">Duration:  ${item.facts.duration}</li>
          <li class="awards">Awards:  ${item.extraInfo.awards}</li>
          <li class="audience">Audience:  ${item.extraInfo.audience}</li>
        </ul>
      </div>
      <div class="buttons-and-actors">
      <div class="buttons-top">
        <button class="chat-button">
            <img src="assets/chat-icon.png" alt="Chat Icon" class="chat-icon"> Chat
          </button>
          <button class="trailer-play" data-trailer="${item.facts.trailer}
        ">Watch trailer</button>
      </div>
        ${generateCharactersSection(item.characters)}
      </div>
    </div>
      `;
    function generateCharactersSection(characters) {
        let charactersHTML = `<section id="characters"><h2>Main actors</h2>`;
        for(let i = 0; i < characters.length; i++)charactersHTML += `
      <div class="character">
        <img src="${characters[i].imageUrl}" alt="${characters[i].actor}" class="character-image"/>
        <div class="character-info">
            <p class="actor-name">${characters[i].actor}</p>
            <p class="character-name">${characters[i].name}</p>
        </div>
      </div>`;
        charactersHTML += `</section>`;
        return charactersHTML;
    }
    return element;
};
exports.detailsComponent = detailsComponent;

},{}],"9vlUC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ApikeyView;
var _apiKeyComponent = require("26ee31f003b72c1a");
function ApikeyView() {
    const rootElement = document.createElement("div");
    rootElement.innerHTML = (0, _apiKeyComponent.apiKeyComponent)();
    setTimeout(()=>{
        const saveButton = rootElement.querySelector("#buttonSafeApikey");
        const apiKeyInput = rootElement.querySelector("#apikey");
        const returnHome = rootElement.querySelector("#return-home");
        // Guardar la API key en localStorage
        saveButton.addEventListener("click", ()=>{
            const apiKey = apiKeyInput.value;
            if (apiKey) {
                localStorage.setItem("marvelApiKey", apiKey);
                alert("API key saved successfully!");
            } else alert("Please enter a valid API key.");
        });
        returnHome.addEventListener("click", ()=>{
            window.location.href = "/";
        });
    }, 0);
    return rootElement;
}

},{"26ee31f003b72c1a":"9m97H"}],"9m97H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apiKeyComponent = void 0;
const apiKeyComponent = ()=>{
    const apiKeyComponent = `
    <main class="body-container">
      <div class="apikey-container">
        <div class="container">
          <div class="logo">
            <img src="../assets/marvel_logo.png" alt="Marvel Logo"/>
          </div>
          <h1 class="tittle-apiKey">Marvel Movies</h1>
        </div>
        <div class="apikey-continer2">
          <p class="description">
            Enter your API key and learn more about your favorite movies.
          </p>
          <input type="text" class="inputApiKey" id="apikey" placeholder="Type here..." required/>
          <button id="buttonSafeApikey">Save</button>
          <p id="return-home">See movies</p>
        </div>
      </div>
    </main>
  `;
    return apiKeyComponent;
};
exports.apiKeyComponent = apiKeyComponent;

},{}],"8eEit":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
const Error = ()=>{
    const errorEl = document.createElement("div");
    errorEl.innerHTML = `
  <p class="titleError"> Error: Page not found</p>
  <div class="Tony">
  <img src="../assets/errorTony.jpg" alt="tony startk">
  </div>
  `;
    return errorEl;
};
var _default = exports.default = Error;

},{}],"cwdG7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ChatView;
var _routes = require("68fa38e300878503");
var _openAIApi = require("ae3da0b8680880");
var _dataset = _interopRequireDefault(require("f87c6f1741495983"));
var _chatComponents = require("a31370797fea86e9");
var _dataFunctions = require("563fb1f01effa0c5");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
function ChatView() {
    const rootElement = document.createElement("div");
    const movieId = getQueryParam("id");
    const movie = (0, _dataFunctions.getMovieById)(_dataset.default, movieId);
    rootElement.innerHTML = (0, _chatComponents.chatComponents)(movie);
    const sendMessageButton = rootElement.querySelector("#send-message");
    const messageInput = rootElement.querySelector("textarea");
    const chatInteractionBox = rootElement.querySelector(".chat-interaction");
    if (sendMessageButton && messageInput) {
        sendMessageButton.addEventListener("click", async ()=>{
            const userMessage = messageInput.value.trim();
            if (userMessage) {
                // Mostrar mensaje del usuario en el chat
                addMessageToChat(userMessage, "outgoing");
                // Limpiar el campo de entrada
                messageInput.value = "";
                try {
                    const messages = [
                        {
                            role: "system",
                            content: `You are the movie "${movie.name}". Here is some information: ${movie.description}. Please respond as if you are the movie, and keep your responses brief, no more than 50 words.`
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ];
                    const aiResponse = await (0, _openAIApi.communicateWithOpenAI)(messages);
                    addMessageToChat(aiResponse, "incoming");
                } catch (error) {
                    addMessageToChat("Error al comunicarse con la IA.", "incoming");
                }
            }
        });
        // Detectar la tecla Enter en el textarea
        messageInput.addEventListener("keydown", async (event)=>{
            if (event.key === "Enter" && !event.shiftKey) {
                // Enter sin Shift
                event.preventDefault(); // Evitar el salto de línea
                await handleSendMessage();
            }
        });
    }
    async function handleSendMessage() {
        const userMessage = messageInput.value.trim();
        if (userMessage) {
            // Mostrar mensaje del usuario en el chat
            addMessageToChat(userMessage, "outgoing");
            // Limpiar el campo de entrada
            messageInput.value = "";
            try {
                const messages = [
                    {
                        role: "system",
                        content: `You are a character or narrator from the movie "${movie.name}". Here is some information: ${movie.description}. Please respond as if you are part of this movie, and keep your responses brief, no more than 50 words.`
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ];
                const aiResponse = await (0, _openAIApi.communicateWithOpenAI)(messages);
                addMessageToChat(aiResponse, "incoming");
            } catch (error) {
                addMessageToChat("Error al comunicarse con la IA.", "incoming");
            }
        }
    }
    function addMessageToChat(message, type) {
        const li = document.createElement("li");
        li.classList.add(`chat-${type}`);
        // Añadir imagen solo para mensajes entrantes
        if (type === "incoming") li.innerHTML = `
        <img src="${movie.imageUrl}" alt="${movie.imageDescription}" class="img-chat2"/>
        <p>${message}</p>`;
        else li.innerHTML = `
        <p>${message}</p>`;
        chatInteractionBox.appendChild(li);
        // Desplazar la vista hacia el último mensaje
        chatInteractionBox.scrollTop = chatInteractionBox.scrollHeight;
    }
    // Función para obtener el parámetro de la URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    // Navegar a la página para ingresar la API key
    const apiKeyButton = rootElement.querySelector(".api-key-button");
    apiKeyButton.addEventListener("click", ()=>{
        (0, _routes.navigateTo)("/api-key");
    });
    return rootElement;
}

},{"68fa38e300878503":"hw5Qm","ae3da0b8680880":"fl1uw","f87c6f1741495983":"dplDb","a31370797fea86e9":"9YHvf","563fb1f01effa0c5":"1I1KU"}],"fl1uw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.communicateWithOpenAI = void 0;
var _apiKey = require("bff42acb8bb30f06");
const communicateWithOpenAI = async (messages)=>{
    const APIKEY = (0, _apiKey.getApiKey)();
    if (!APIKEY) throw new Error("API Key is missing or invalid");
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${APIKEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: messages
        })
    });
    if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(`Error: ${response.status}, Details: ${errorDetails.error.message}`);
    }
    const data = await response.json();
    return data.choices[0].message.content;
};
exports.communicateWithOpenAI = communicateWithOpenAI;

},{"bff42acb8bb30f06":"19pWA"}],"19pWA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setApiKey = exports.getApiKey = void 0;
const getApiKey = ()=>{
    return localStorage.getItem("marvelApiKey");
};
exports.getApiKey = getApiKey;
const setApiKey = (key)=>{
    localStorage.setItem("marvelApiKey", key);
};
exports.setApiKey = setApiKey;

},{}],"9YHvf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chatComponents = void 0;
const chatComponents = (item)=>{
    const chatComponents = `
    <header class="header-chat">
      <section class="menu-chat">
        <div class="logo">
          <img src="assets/marvel_logo.png" alt="Marvel Logo">
        </div>
        <div class="api-key-button" id="api-button-chat">
          <button>API Key</button>
        </div>
      </section>
    </header>
    <main class="chat-container-box">
      <div class="chat-container">
        <div>
          <img src="${item.imageUrl}" alt="${item.imageDescription}" class="image-chat"/>
        </div>
        <div class="chat-box">
          <div class="chat-header">
            <div>
              <img src="${item.imageUrl}" alt="${item.imageDescription}" class="img-chat1"/>
            </div>
            <div>
                <p class="chat-name">${item.name}</p>
            </div>
          </div>
          <div class="chat-interaction-box">
            <ul class="chat-interaction">
              <li class="chat-incoming">
                <img src="${item.imageUrl}" alt="${item.imageDescription}" class="img-chat2"/>
                <p class="first-message">Hi there!</p>
              </li>
              <li class="chat-outgoing"></li>
            </ul>
          </div>
          <div class="chat-input">
            <textarea placeholder="Enter a message..."></textarea>
            <button type="submit" id="send-message">
              <img src="../assets/send.png" alt="send">
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
    return chatComponents;
};
exports.chatComponents = chatComponents;

},{}],"eNUWH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ChatGroup;
var _routes = require("a0cca39ba50b146f");
var _openAIApi = require("525846ee6703118d");
var _chatGroupComponents = require("67820a2b8e14c626");
var _dataset = _interopRequireDefault(require("798d212b6b7eb071"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
function getRandomMovie(movies) {
    if (movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}
// Declaración de funciones en el nivel raíz
function sendMessage(messageInput, chatInteractionBox, randomMovie) {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        addMessageToChat(userMessage, "outgoing", randomMovie, chatInteractionBox);
        messageInput.value = "";
        try {
            _dataset.default.forEach(async (movie)=>{
                const messages = [
                    {
                        role: "system",
                        content: `You are the movie "${movie.name}". Here is some information: ${movie.description}. Please respond as if you are the movie, and keep your responses brief, no more than 50 words.`
                    },
                    {
                        role: "user",
                        content: userMessage
                    }
                ];
                const aiResponse = await (0, _openAIApi.communicateWithOpenAI)(messages);
                addMessageToChat(`${movie.name}: ${aiResponse}`, "incoming", movie, chatInteractionBox);
            });
        } catch (error) {
            addMessageToChat("Error al comunicarse con la IA.", "incoming", randomMovie, chatInteractionBox);
        }
    }
}
function addMessageToChat(message, type, movie, chatInteractionBox) {
    const li = document.createElement("li");
    li.classList.add(`chat-${type}`);
    if (type === "outgoing") li.innerHTML = `<p>${message}</p>`;
    else li.innerHTML = `
      <div class="message-header">
        <img src="${movie.imageUrl}" alt="${movie.imageDescription}" class="image-chatGroup"/>

      </div>
      <div class= "group-message">
      <span class="name">${movie.name}</span>
      <div class="message-content">
        <p>${message}</p>
      </div>
      </div>
    `;
    chatInteractionBox.appendChild(li);
    // Desplaza automáticamente hacia el último mensaje
    chatInteractionBox.scrollTop = chatInteractionBox.scrollHeight;
}
function ChatGroup() {
    const randomMovie = getRandomMovie(_dataset.default); // Obtiene una película aleatoria
    const rootElement = document.createElement("div");
    if (randomMovie) {
        rootElement.innerHTML = (0, _chatGroupComponents.chatGroupComponents)(randomMovie); // Pasa la película aleatoria
        const sendMessageButton = rootElement.querySelector("#send-message");
        const messageInput = rootElement.querySelector("textarea");
        const chatInteractionBox = rootElement.querySelector(".chat-interaction");
        // Mostrar la imagen de la película seleccionada
        const imageChat = rootElement.querySelector(".image-chat img");
        if (imageChat && randomMovie.imageUrl) {
            imageChat.src = randomMovie.imageUrl;
            imageChat.alt = randomMovie.name;
        }
        // Enviar mensaje con el botón
        if (sendMessageButton && messageInput) {
            sendMessageButton.addEventListener("click", ()=>sendMessage(messageInput, chatInteractionBox, randomMovie));
            // Permitir envío con "Enter"
            messageInput.addEventListener("keypress", (event)=>{
                if (event.key === "Enter") {
                    event.preventDefault(); // Evita que se añada una nueva línea en el textarea
                    sendMessage(messageInput, chatInteractionBox, randomMovie);
                }
            });
        }
        const apiKeyButton = rootElement.querySelector(".api-key-button");
        apiKeyButton.addEventListener("click", ()=>{
            (0, _routes.navigateTo)("/api-key");
        });
    } else rootElement.innerHTML = "<p>Error: No se encontraron pel\xedculas con im\xe1genes v\xe1lidas.</p>";
    return rootElement;
}

},{"a0cca39ba50b146f":"hw5Qm","525846ee6703118d":"fl1uw","67820a2b8e14c626":"l9A5t","798d212b6b7eb071":"dplDb"}],"l9A5t":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.chatGroupComponents = void 0;
const chatGroupComponents = (item)=>{
    const groupchatComponents = `
  <header class="header-chat">
  <section class="menu">
    <div class="logo">
      <img src="assets/marvel_logo.png" alt="Marvel Logo">
    </div>
    <div class="api-key-button">
      <button class= "api-group">API Key</button>
    </div>
  </section>
</header>
    <main class="chat-container-box">
      <div class="chat-container">
        <div class="image-chat">
          <img src="${item.imageUrl}" alt="${item.imageDescription}" class="image-group-chat-poster"/>
        </div>
        <div class="chat-box">
          <div class="chat-group-header">
            <div>
              <ul>
                <p class="name-chat-group"> Marvel movies </p>
              </ul>
            </div>
          </div>
          <div class="chat-interaction-box">

            <ul class="chat-interaction">
            <li class="chat-incoming">
            <img src="${item.imageUrl}" alt="${item.imageDescription}" class="image-chat-group-tittle"/>
            <p>Hi there! Ask us some interesting!</p></li>
              <li class="chat-incoming"></li>
              <li class="chat-outgoing"></li>
            </ul>
          </div>
          <div class="chat-input">
            <textarea placeholder="Enter a message..."></textarea>
            <button type="submit" id="send-message">
              <img src="../assets/send.png" alt="send">
            </button>
          </div>
        </div>
      </div>
    </main>
  `;
    return groupchatComponents;
};
exports.chatGroupComponents = chatGroupComponents;

},{}]},["farZc","8lqZg"], "8lqZg", "parcelRequireb1c2")

//# sourceMappingURL=index.975ef6c8.js.map
