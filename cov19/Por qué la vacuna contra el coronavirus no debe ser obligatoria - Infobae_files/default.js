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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return borderValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultDeckClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultHeadlinesContainerClasses; });
/* unused harmony export defaultHeadlineFontSize */
/* unused harmony export defaultDeckFontSize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return directionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return elementPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return elementPositionValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return gridColumnOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return imageAlignmentValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return maxContentItems; });
/* unused harmony export maxLinks */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return overlayTextElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return textDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return titleBarTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fontSizeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return textAlignOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return widths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return iconsPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fontOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getCardContainerClassesFromView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkHeadlineDeck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getContentAPIData; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var borderValues=["none","all","bottom","bottom, left","bottom, right","bottom, top","left","left, right","left, top","right","right, top","top"];var defaultView="Headline, Image";var defaultDeckClasses={deckClasses:"deck | "};var defaultHeadlinesContainerClasses={headlinesContainerClasses:"headline | width_full"};var defaultHeadlineFontSize=21;var defaultDeckFontSize=14;var directionValues=["none","bottom","left","right","top"];var elementPositions=function(){var e={bottom:"0"},t={left:"50%"},r={top:"50%"},o={right:"0"},n={top:"0"},a={transform:"translate(-50%, 0%)"};return{bottom:_objectSpread({},e,{},t,{},a),bottomLeft:_objectSpread({},e),bottomRight:_objectSpread({},e,{},o),center:_objectSpread({},t,{},r,{},a),left:_objectSpread({},r),right:_objectSpread({},r,{},o),top:_objectSpread({},n,{},t,{},a),topLeft:_objectSpread({},n),topRight:_objectSpread({},n,{},o)}};var elementPositionValues=Object.keys(elementPositions());var gridColumnOptions=[1,2,3,4,5,6,7,8,9,10,11,12];var imageAlignmentValues=["Left","Right","Vertical"];var maxContentItems=12;var maxLinks=12;var overlayTextElements=["none","Byline","Deck","Headline","Headline, Byline","Headline, Deck","PlayIcon","PlayIcon, Text","Author","Text"];var sizes=["default","x_small","small","medium","large"];var textDecorations=["default","bold","bold, italic","bold, centered, italic","bold, centered, italic, uppercase","centered","centered, bold","centered, italic","centered, bold, uppercase","centered, italic, uppercase","centered, uppercase","italic","uppercase","uppercase, bold","uppercase, italic","uppercase, bold, italic"];var styles=["default","footer_stack","overlay_button","opinion_style"];var titleBarTypes=["none","accent","ruler"];var fontSizeOptions=[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,30,31,32,33,34,36,38,39,40,42,45,48,50,55,64,68];var textAlignOptions=["left","center","right"];var widths=["auto","20%","25%","30%","40%","50%","60%","70%","80%","90%","100%"];var icons=["audio button","play button","arrow in circle","camera","none"];var iconsPosition=["left of text","right of text"];var fontNames={Arial:"font_default"};var fontOptions=Object.keys(fontNames);var getCardContainerClassesFromView=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* trim */ "f"])("".concat(e," ").concat(t))};var checkHeadlineDeck=function(e,t){var r=e.split(", "),o=-1!==r.indexOf("Headline")&&r.indexOf("Headline"),n=-1!==r.indexOf("Deck")&&r.indexOf("Deck");return t.author&&!1!==o&&(n?r.splice([n+1],0,"Author"):r.splice([o+1],0,"Author")),r};var getContentAPIData=function(e){var t=e.props,r=t.customFields,o=r.contentAPI,n=r.imageAspectRatio;if(!t.data){if(o){var a=o.contentConfigValues,i=o.contentService,l=a.feedFrom,c=a.feedQuery,p=a.feedSize,s=a.website,d=a.website_url,u=s||t.siteProperties.site;e.fetchContent({data:{source:i,query:c?{feedQuery:c,feedFrom:l,feedSize:p,website:u,imageAspectRatio:n||null}:{website_url:d,imageAspectRatio:n||null}}})}return!0}return null};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTextClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getColumnSizeClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countUpperCaseChars; });
/* unused harmony export getImageAlignmentClasses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCardClassesFromCustomFields; });
/* unused harmony export getPageReloadJavaScript */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateMarginLeft; });
var trim=function(e){return e.replace(/\s\s+/g," ").trim()};var getTextClasses=function(e){return e?trim(e.toString().replace("centered","text_align_center").replace(/,/gi," ")):""};var getBorderClasses=function(e){var t=e?"border_1":"";return e&&"all"===e?t=t.concat(" border_all border_left border_top border_right border_bottom"):e&&e.split(",").map((function(e){t=t.concat(" border_".concat(trim(e)))})),t=t.concat(" with_border border_lightgray")},isEven=function(e){return e==parseFloat(e)?!(e%2):void 0};var getColumnSizeClasses=function(e,t,r,n,a){var o=function(t){return a?isEven(t)?parseInt(12/e,10):(12/t).toString().replace(".","_"):t},c=o(e),i=o(t),s=o(r),l=o(n),u=c||i||s||l?"col".concat(c?" widescreen-".concat(c):"","\n      ").concat(i?" desktop-".concat(i):"","\n      ").concat(s?" tablet-".concat(s):"","\n      ").concat(l?" mobile-".concat(l):""):"";return trim(u)};var countUpperCaseChars=function(e){return e.substr(1,e.length-1).replace(/[^A-Z]/g,"").length};var getImageAlignmentClasses=function(e,t){return t&&e&&t.indexOf("Image")>=0?"image".concat(e):""};var getCardClassesFromCustomFields=function(e,t,r,n){var a={},o=e.desktopContainerColumns,c=e.imageAlignment,i=e.imageThumbnail,s=e.mobileContainerColumns,l=e.style,u=e.textDecoration,g=e.tabletContainerColumns,m=e.widescreenContainerColumns,d=e.border||r.border,p=getImageAlignmentClasses(c,n),C=i?"thumbnail_".concat(i):"",b=getBorderClasses(d),f=getTextClasses(u),v=l||"",_=getColumnSizeClasses(m,o,g,s),x="".concat(_," ").concat(p," ").concat(v," ").concat(C," ").concat(f);return a.borderClass=b,a.cardClasses=trim(t?"":"card | align_items_start ".concat(x," relative width_full")),a};var getPageReloadJavaScript=function(e){var t=e.split(":"),r=1e3*(60*Number.parseInt(t[0],10)+Number.parseInt(t[1],10));return"window.setTimeout(function(){if (window.innerWidth >= 960) window.location.reload();}, ".concat(r,")")};var calculateMarginLeft=function(e){return e<=1600?0:e<=2e3?.02*-e:e<=3e3?.1*-e:.2*-e};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var FUNC_ERROR_TEXT="Expected a function",HASH_UNDEFINED="__lodash_hash_undefined__",INFINITY=1/0,funcTag="[object Function]",genTag="[object GeneratorFunction]",symbolTag="[object Symbol]",reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reEscapeChar=/\\(\\)?/g,reIsHostCtor=/^\[object .+?Constructor\]$/,freeGlobal="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global,freeSelf="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();function getValue(t,e){return null==t?void 0:t[e]}function isHostObject(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],maskSrcKey=function(){var t=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_Symbol=root.Symbol,splice=arrayProto.splice,Map=getNative(root,"Map"),nativeCreate=getNative(Object,"create"),symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0;function Hash(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{}}function hashDelete(t){return this.has(t)&&delete this.__data__[t]}function hashGet(t){var e=this.__data__;if(nativeCreate){var r=e[t];return r===HASH_UNDEFINED?void 0:r}return hasOwnProperty.call(e,t)?e[t]:void 0}function hashHas(t){var e=this.__data__;return nativeCreate?void 0!==e[t]:hasOwnProperty.call(e,t)}function hashSet(t,e){return this.__data__[t]=nativeCreate&&void 0===e?HASH_UNDEFINED:e,this}function ListCache(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}function listCacheClear(){this.__data__=[]}function listCacheDelete(t){var e=this.__data__,r=assocIndexOf(e,t);return!(r<0)&&(r==e.length-1?e.pop():splice.call(e,r,1),!0)}function listCacheGet(t){var e=this.__data__,r=assocIndexOf(e,t);return r<0?void 0:e[r][1]}function listCacheHas(t){return assocIndexOf(this.__data__,t)>-1}function listCacheSet(t,e){var r=this.__data__,a=assocIndexOf(r,t);return a<0?r.push([t,e]):r[a][1]=e,this}function MapCache(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var a=t[e];this.set(a[0],a[1])}}function mapCacheClear(){this.__data__={hash:new Hash,map:new(Map||ListCache),string:new Hash}}function mapCacheDelete(t){return getMapData(this,t).delete(t)}function mapCacheGet(t){return getMapData(this,t).get(t)}function mapCacheHas(t){return getMapData(this,t).has(t)}function mapCacheSet(t,e){return getMapData(this,t).set(t,e),this}function assocIndexOf(t,e){for(var r=t.length;r--;)if(eq(t[r][0],e))return r;return-1}function baseGet(t,e){for(var r=0,a=(e=isKey(e,t)?[e]:castPath(e)).length;null!=t&&r<a;)t=t[toKey(e[r++])];return r&&r==a?t:void 0}function baseIsNative(t){return!(!isObject(t)||isMasked(t))&&(isFunction(t)||isHostObject(t)?reIsNative:reIsHostCtor).test(toSource(t))}function baseToString(t){if("string"==typeof t)return t;if(isSymbol(t))return symbolToString?symbolToString.call(t):"";var e=t+"";return"0"==e&&1/t==-INFINITY?"-0":e}function castPath(t){return isArray(t)?t:stringToPath(t)}function getMapData(t,e){var r=t.__data__;return isKeyable(e)?r["string"==typeof e?"string":"hash"]:r.map}function getNative(t,e){var r=getValue(t,e);return baseIsNative(r)?r:void 0}function isKey(t,e){if(isArray(t))return!1;var r=_typeof(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!isSymbol(t))||(reIsPlainProp.test(t)||!reIsDeepProp.test(t)||null!=e&&t in Object(e))}function isKeyable(t){var e=_typeof(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function isMasked(t){return!!maskSrcKey&&maskSrcKey in t}Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet,ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet,MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;var stringToPath=memoize((function(t){t=toString(t);var e=[];return reLeadingDot.test(t)&&e.push(""),t.replace(rePropName,(function(t,r,a,o){e.push(a?o.replace(reEscapeChar,"$1"):r||t)})),e}));function toKey(t){if("string"==typeof t||isSymbol(t))return t;var e=t+"";return"0"==e&&1/t==-INFINITY?"-0":e}function toSource(t){if(null!=t){try{return funcToString.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function memoize(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);var r=function r(){var a=arguments,o=e?e.apply(this,a):a[0],n=r.cache;if(n.has(o))return n.get(o);var i=t.apply(this,a);return r.cache=n.set(o,i),i};return r.cache=new(memoize.Cache||MapCache),r}function eq(t,e){return t===e||t!=t&&e!=e}memoize.Cache=MapCache;var isArray=Array.isArray;function isFunction(t){var e=isObject(t)?objectToString.call(t):"";return e==funcTag||e==genTag}function isObject(t){var e=_typeof(t);return!!t&&("object"==e||"function"==e)}function isObjectLike(t){return!!t&&"object"==_typeof(t)}function isSymbol(t){return"symbol"==_typeof(t)||isObjectLike(t)&&objectToString.call(t)==symbolTag}function toString(t){return null==t?"":baseToString(t)}function get(t,e,r){var a=null==t?void 0:baseGet(t,e);return void 0===a?r:a}module.exports=get;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = Fusion.Consumer;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inHouseLogoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return storyCardPaddings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lineHeightSizes; });
var inHouseLogoUrl="https://inhouse.infobae.com/movistar-play/img/logo-inhouse.svg";var storyCardPaddings=[5,10];var fontSizes=[16,18,19,20,21,22,26,36,38,40,41,42,43,44,45];var lineHeightSizes=[1,1.1,1.2,1.3,1.4,1.5];

/***/ }),
/* 7 */
/***/ (function(module) {

module.exports = JSON.parse("{\"defaultAuthor\":\"anónimo\",\"prodCoralURL\":\"https://infobae.talk.coralproject.net\",\"sandboxCoralURL\":\"https://infobae.staging.talk.coralproject.net\",\"dfp_id\":1058609,\"siteName\":\"Infobae\",\"siteDomainURL\":\"https://www.infobae.com\",\"sites\":[\"infobae\"],\"breakpoints\":[{\"device\":\"mobile\",\"width\":420},{\"device\":\"tablet\",\"width\":768},{\"device\":\"desktop\",\"width\":992},{\"device\":\"widescreen\",\"width\":1200}],\"defaultAspectRatio\":\"16:9\",\"aspectRatios\":[\"1:1\",\"3:2\",\"4:3\",\"16:9\",\"18:8\",\"8:18\",\"9:16\",\"3:4\",\"2:3\"],\"wordsReadPerMinute\":250,\"defaultSiteLogo\":\"/resources/images/logo_infobae_naranja.svg\"}");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return properCasePropKey; });
/* unused harmony export styleProps */
/* unused harmony export getFontSizeOrLineHeight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRelatedProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapComponentPropsToStyles; });
var properCasePropKey=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e.replace(r,"");return"".concat(""===r?t.substr(0,1).toUpperCase():t.substr(0,1).toLowerCase()).concat(t.substr(1,t.length-1))};var styleProps=["backgroundColor","backgroundImage","backgroundPosition","backgroundRepeat","backgroundSize","border","borderColor","borderRadius","borderWidth","color","cursor","display","float","fontSize","fontWeight","height","lineHeight","margin","marginBottom","marginLeft","marginRight","marginTop","opacity","padding","paddingBottom","paddingLeft","paddingRight","paddingTop","position","textAlign","textDecoration","textShadow","textTransform","width"];var getFontSizeOrLineHeight=function(e){return e?"".concat(e,"px"):"auto"};var getPropValue=function(e){return["margin","padding","size","width","height"].map((function(r){return e.indexOf(r)>=0?"".concat(e,"px"):null})),e};var getRelatedProps=function(e){return{relatedStacked:e.relatedStacked,relatedTitle1:e.relatedTitle1,relatedUrl1:e.relatedUrl1,relatedTitle2:e.relatedTitle2,relatedUrl2:e.relatedUrl2,relatedTitle3:e.relatedTitle3,relatedUrl3:e.relatedUrl3,relatedTitle4:e.relatedTitle4,relatedUrl4:e.relatedUrl4,relatedTitle5:e.relatedTitle5,relatedUrl5:e.relatedUrl5}};var mapComponentPropsToStyles=function(e,r){return e&&r?Object.keys(e).filter((function(e){return styleProps.includes(properCasePropKey(e,r))})).reduce((function(t,o){var a=properCasePropKey(o,r);if("fontSize"===a||"lineHeight"===a)t[a]=getFontSizeOrLineHeight(e[o]);else if("backgroundColor"===a&&e[o]&&e[o].indexOf("gradient")>=0&&!e.overlayPlaceBelowImage)t.background=e[o];else if("overlayText"===r&&"backgroundColor"===a)t.backgroundColor=null;else{if(("backgroundColor"===a||"color"===a)&&e.overlayPlaceBelowImage)return t;t[a]=e[getPropValue(o)]}return t}),{}):null};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export spacerProps */
/* unused harmony export textDecorationProps */
/* unused harmony export textProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return textElementProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return imageProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return imageURLProp; });
/* unused harmony export labelProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return overlayProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return relatedLinksProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return titleBarProps; });
/* unused harmony export createCuratedPropsByElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getCardStyleProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return columnsProps; });
/* unused harmony export cardsPerRowProps */
/* unused harmony export footerProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flexBoxProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sportScoreboardRawHTMLProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
var _properties_index_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(7, 1);
/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var spacerProps=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={group:o?e:t},a=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* countUpperCaseChars */ "b"])(e)>=1?e:e.toLowerCase(),n={},p=1;p<=_configs__WEBPACK_IMPORTED_MODULE_2__[/* directionValues */ "f"].length-1;p+=1){var i="".concat(_configs__WEBPACK_IMPORTED_MODULE_2__[/* directionValues */ "f"][p]),g=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag(_objectSpread({name:"".concat(t," ").concat(i)},r,{min:-50,max:100,step:1}));n["".concat(a).concat(t).concat(Object(_page__WEBPACK_IMPORTED_MODULE_4__[/* properCasePropKey */ "c"])(_configs__WEBPACK_IMPORTED_MODULE_2__[/* directionValues */ "f"][p]))]=g}return n};var textDecorationProps=function(e,t){return _defineProperty({},Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "f"])("".concat(t,"textDecoration")),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* textDecorations */ "w"]).tag({group:e,name:"Text Decoration"}))};var textProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Feed";return _objectSpread({},textDecorationProps(e))};var textElementProps=function(e,t){var o,r,a,n,p=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],g=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,l=_defineProperty({},"".concat(e,"Text"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:t,name:"Text"})),u=i?(_defineProperty(o={},"desktop".concat(t,"FontSize"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(g||_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Font Size Desktop"})),_defineProperty(o,"mobile".concat(t,"FontSize"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(g||_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Font Size Tablet and Mobile"})),_defineProperty(o,"desktop".concat(t,"LineHeight"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(s||_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Line Height Desktop"})),_defineProperty(o,"mobile".concat(t,"LineHeight"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(s||_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Line Height Mobile"})),o):(_defineProperty(r={},"".concat(e,"FontSize"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(g||_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Font Size"})),_defineProperty(r,"".concat(e,"LineHeight"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(s||_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Line Height"})),r),m=_objectSpread((_defineProperty(a={},"".concat(e,"BackgroundColor"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:t,name:"Background Color"})),_defineProperty(a,"".concat(e,"BorderColor"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:t,name:"Border Color"})),_defineProperty(a,"".concat(e,"Color"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:t,name:"Color"})),_defineProperty(a,"".concat(e,"Font"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontOptions */ "j"]).tag({group:t,name:"Font"})),a),u,(_defineProperty(n={},"".concat(e,"TextDecorations"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* textDecorations */ "w"]).tag({group:t,name:"Text Decoration(s)"})),_defineProperty(n,"".concat(e,"Width"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* widths */ "y"]).tag({group:t,name:"Width"})),_defineProperty(n,"".concat(e,"Height"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:t,name:"Height Container"})),n));return p?_objectSpread({},l,{},m):m};var imageProps=function(){var e=_properties_index_json__WEBPACK_IMPORTED_MODULE_1__.aspectRatios,t=_properties_index_json__WEBPACK_IMPORTED_MODULE_1__.defaultAspectRatio;return{imageAlignment:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* imageAlignmentValues */ "q"]).tag({defaultValue:"Vertical",group:"Image",name:"Alignment"}),imageLazyLoad:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({defaultValue:!1,group:"Image",name:"Lazy Load"}),imageRound:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({defaultValue:!1,group:"Image",name:"Round Image"}),imageThumbnail:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* sizes */ "t"]).tag({defaultValue:"default",group:"Image",name:"Thumbnail (lef/right alignment)"}),imageAspectRatio:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(e).tag({defaultValue:t,group:"Image",name:"Aspect Ratio"}),showImageCredits:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({defaultValue:!1,group:"Image",name:"Show Image Credits"}),imageCreditsSize:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:"Image",name:"Image Credits Size"})}};var imageURLProp={customImageSrc:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:!1,group:"Image",name:"URL"})};var labelProps=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Label",o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=(_defineProperty(e={},"".concat(r,"Text"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:t,name:"Text"})),_defineProperty(e,"".concat(r,"TextBackgroundColor"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"black",group:t,name:"Text Background Color"})),_defineProperty(e,"".concat(r,"TextColor"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"white",group:t,name:"Text Color"})),_defineProperty(e,"".concat(r,"TextFontSize"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:t,name:"Text Font Size"})),e),n=_defineProperty({},"".concat(r,"TextPosition"),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* elementPositionValues */ "g"]).tag({defaultValue:"bottomLeft",group:t,name:"Text Position"}));return o?_objectSpread({},a,{},n):a};var overlayProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Overlay";return _objectSpread({},labelProps(e,!0,"overlay"),{overlayTextFontWeight:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({defaultValue:"700",group:e,name:"Text Font Weight"}),overlayLineHeight:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({defaultValue:"20",group:e,name:"Text Line Height"}),overlayOnHover:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({group:e,defaultValue:!1,name:"On Hover"}),overlayBackgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:e,name:"Overlay Background Color"}),overlayBoxShadow:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({group:e,defaultValue:!1,name:"Overlay Box Shadow"}),overlayTextElements:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* overlayTextElements */ "s"]).tag({group:e,name:"Overlay Element(s)"}),overlayTextWidth:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* widths */ "y"]).tag({group:e,name:"Width"}),overlayIcon:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* icons */ "o"]).tag({group:e,name:"Show Overlay Icon"}),overlayIconPosition:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* iconsPosition */ "p"]).tag({group:e,defaultValue:!1,name:"Icon Position"}),overlayMarginBottom:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:e,defaultValue:0,max:48,min:-48,step:1,name:"Overlay Margin Bottom"}),overlayMarginTop:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:e,defaultValue:0,max:48,min:-48,step:1,name:"Overlay Margin Top"}),overlayMarginLeft:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:e,defaultValue:20,max:48,min:-48,step:1,name:"Overlay Margin Left"}),overlayMarginRight:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:e,defaultValue:0,max:48,min:-48,step:1,name:"Overlay Margin Right"}),overlayPlaceBelowImage:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({group:e,defaultValue:!1,name:"Place Below Image"})})};var relatedLinksProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Related Links";return{relatedStacked:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.tag({name:"Stacked?",group:e,defaultValue:!0}),relatedTitle1:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 1 Title",group:e}),relatedUrl1:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 1 URL",group:e}),relatedTitle2:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 2 Title",group:e}),relatedUrl2:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 2 URL",group:e}),relatedTitle3:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 3 Title",group:e}),relatedUrl3:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 3 URL",group:e}),relatedTitle4:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 4 Title",group:e}),relatedUrl4:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 4 URL",group:e}),relatedTitle5:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 5 Title",group:e}),relatedUrl5:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({name:"Related Link 5 URL",group:e})}};var titleBarProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Title",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"titleBar";return _objectSpread({title:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:e,name:"Title"}),titleBorderColor:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:e,name:"Border Color"}),titleBarBackgroundColor:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:e,name:"Background Color"}),titleBarColor:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:e,name:"Color"}),titleBarFont:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontOptions */ "j"]).tag({group:e,name:"Font"}),titleBarFontSize:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* fontSizeOptions */ "k"]).tag({group:e,name:"Font Size"}),titleBarType:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* titleBarTypes */ "x"]).tag({group:e,defaultValue:_configs__WEBPACK_IMPORTED_MODULE_2__[/* titleBarTypes */ "x"][0],name:"Type"}),textAlign:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* textAlignOptions */ "v"]).tag({group:e,defaultValue:_configs__WEBPACK_IMPORTED_MODULE_2__[/* textAlignOptions */ "v"][0],name:"Text Align"})},textDecorationProps("Title",t),{titleImageURL:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:"Image",name:"Image URL"}),titleImageWidth:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:"Image",name:"Image Width"}),titleImageHeight:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:"Image",name:"Image Height"}),titleImagePaddingTop:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:"Image",name:"Padding Top"}),titleImagePaddingBottom:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:"Image",name:"Padding Bottom"}),titleImagePaddingRight:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:"Image",name:"Padding Right"}),titleImagePaddingLeft:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.tag({group:"Image",name:"Padding Left"})})};var createCuratedPropsByElement=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a={},n=1;n<=_configs__WEBPACK_IMPORTED_MODULE_2__[/* maxContentItems */ "r"];n+=1){var p=Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "f"])("".concat(e.toLowerCase()).concat(t).concat(n)),i="bool"===o?prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(r),g=i.tag({group:Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* trim */ "f"])("Curated ".concat(e).concat(t?" ".concat(t,"s"):"s")),name:p});a[p]=g}return a};var getCardStyleProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Card";return{style:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* styles */ "u"]).tag({group:e,name:"Style"})}};var getColumnProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Columns",o=arguments.length>2?arguments[2]:void 0;return{name:e,group:o||t,max:12,min:1,step:1}};var columnsProps=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Columns",o=arguments.length>1?arguments[1]:void 0;return _defineProperty(e={},"widescreen".concat(t),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* gridColumnOptions */ "n"]).tag(getColumnProps("Widescreen",t,o))),_defineProperty(e,"desktop".concat(t),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* gridColumnOptions */ "n"]).tag(getColumnProps("Desktop",t,o))),_defineProperty(e,"tablet".concat(t),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* gridColumnOptions */ "n"]).tag(getColumnProps("Tablet",t,o))),_defineProperty(e,"mobile".concat(t),prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(_configs__WEBPACK_IMPORTED_MODULE_2__[/* gridColumnOptions */ "n"]).tag(getColumnProps("Mobile",t,o))),e};var cardsPerRowProps=function(){var e={},t=[1,2,3,4,5,6];return["widescreen","desktop","tablet","mobile"].map((function(o){e["".concat(o,"CardsPerRow")]=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(t).tag({defaultValue:1,group:"Cards per Row",name:Object(_page__WEBPACK_IMPORTED_MODULE_4__[/* properCasePropKey */ "c"])(o)})})),e};var footerProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Footer";return{textCopyright:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"Todos Los Derechos Reservados © ".concat((new Date).getFullYear()," Infobae"),group:e,name:"Copyright"}),facebookLink:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"https://www.facebook.com/Infobae/",group:e,name:"Facebook Link"}),twitterLink:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"https://twitter.com/Infobae/",group:e,name:"Twitter Link"}),rssLink:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"https://www.infobae.com/argentina-rss.xml",group:e,name:"RSS Link"}),instagramLink:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"https://www.instagram.com/Infobae/",group:e,name:"Instagram Link"}),youtubeLink:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"https://www.youtube.com/c/infobae",group:e,name:"Youtube Link"})}};var flexBoxProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Flexbox Properties";return{flexDirection:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["inherit","column","row"]).tag({defaultValue:"inherit",group:e,name:"Flex Direction"})}};var sportScoreboardRawHTMLProps=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Sport Scoreboard";return{embeddedCode:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({defaultValue:"",group:e,name:"Raw HTML and CSS"})}};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = Fusion.getProperties;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSiteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return shareFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return shareTwitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shareMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return shareLinkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sharePrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return shareWhatsApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return shareTelegram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return shareSMS; });
var defaultTitle="Mira lo que encontré en Infobae";var getSiteUrl=function(t){var e=t.siteProperties.siteDomainURL,o=t.requestUri;return"".concat(e).concat(o.replace("//","/"))};var shareFacebook=function(t){window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(getSiteUrl(t))),"share_facebook","width=658,height=354,scrollbars=no")};var shareTwitter=function(t){window.open("https://twitter.com/share?url=".concat(encodeURIComponent(getSiteUrl(t)),"&text=").concat(document.title||defaultTitle),"share_twitter","width=550, height=350, scrollbars=no")};var shareMail=function(t){window.location.href="mailto:?subject=".concat(document.title||defaultTitle,"&body=").concat(getSiteUrl(t))};var shareLinkedin=function(t){window.open("https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(getSiteUrl(t)),"&title=").concat(document.title||defaultTitle),"share_linkedin","width=830,height=460,scrollbars=no")};var sharePrint=function(){window.print()};var shareWhatsApp=function(t){var e=document.title||defaultTitle,o="".concat(e," ").concat(getSiteUrl(t));window.location.href="whatsapp://send?text=".concat(encodeURIComponent(o))};var shareTelegram=function(t){var e=document.title||defaultTitle;window.location.href="https://telegram.me/share/url?url=".concat(encodeURIComponent(getSiteUrl(t)),"&text=").concat(e)};var shareSMS=function(t){var e=document.title||defaultTitle,o="".concat(e," ").concat(getSiteUrl(t));window.location.href="sms:?&body=".concat(encodeURIComponent(o))};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = Fusion.environment;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(4);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// EXTERNAL MODULE: ./bundle/babel/node_modules/arcads/dist/arcads.js
var arcads = __webpack_require__(61);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Ad/_children/ArcAdLib.js
function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var ArcAdLib=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"registerAd",value:function(e,n,t){this.adInstance||(this.adInstance=new arcads["ArcAds"]({dfp:{id:n,collapseEmptyDivs:e.collapseEmptyDivs},bidding:t})),this.adInstance.registerAd(e)}}],[{key:"getInstance",value:function(){return null==e.instance&&(e.instance=new e),e.instance}}]),e}();ArcAdLib.instance=void 0;
// CONCATENATED MODULE: ./bundle/babel/components/features/global/Ad/_children/AdComponent.js
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function AdComponent_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function AdComponent_defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function AdComponent_createClass(e,t,r){return t&&AdComponent_defineProperties(e.prototype,t),r&&AdComponent_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ArcAd=function(e){function t(e){var r;return AdComponent_classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).state={arcads:null},r}return _inherits(t,external_react_["Component"]),AdComponent_createClass(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,r=t.id,o=t.slotName,n=t.dimensions,i=t.display,p=t.breakpoints,s=t.adType,a=t.refresh,c=t.targeting,l=t.dfpId,y=t.bidding,d=t.collapseEmptyDivs;window.arcAdsPrerenderer=function(t){return new Promise((function(r){e.props.prerender&&e.props.prerender(t),r(t)}))};var u=ArcAdLib.getInstance();u&&u.registerAd({id:r,slotName:o,dimensions:n,adType:s,display:i,targeting:c,sizemap:{breakpoints:p,refresh:a},bidding:y,prerender:window.arcAdsPrerenderer,collapseEmptyDivs:d},l,y)}},{key:"render",value:function(){var e=this.props,t=e.id,r=e.className,o=e.childrenPosition,n=e.children,i=e.dfpId,p=e.slotName,s=e.isAmp,a=e.ampLayout,c=e.adName;if(s){var l=a.height,y=a.width,d=external_react_default.a.createElement("amp-ad",{type:"doubleclick",width:y,height:l,"data-slot":"/".concat(i,"/").concat(p),json:'{"targeting":{"platform":["amp"]}}'});return c.indexOf("zocalo")>-1?external_react_default.a.createElement("amp-sticky-ad",{layout:"nodisplay"},d):d}return external_react_default.a.createElement("div",{className:r},"top"===o?n:"",external_react_default.a.createElement("div",{id:t,className:"".concat(p," arcad")}),"bottom"===o?n:"")}}]),t}(),stringOrNumber=external_PropTypes_default.a.oneOfType([external_PropTypes_default.a.string,external_PropTypes_default.a.number]),ampLayout=external_PropTypes_default.a.shape({layout:external_PropTypes_default.a.string,width:stringOrNumber,height:stringOrNumber,multiSize:external_PropTypes_default.a.string});ArcAd.propTypes={id:external_PropTypes_default.a.string,dfpId:external_PropTypes_default.a.number,children:external_PropTypes_default.a.node,childrenPosition:external_PropTypes_default.a.oneOf(["top","bottom"]),className:external_PropTypes_default.a.string,slotName:external_PropTypes_default.a.string.isRequired,dimensions:external_PropTypes_default.a.array,display:external_PropTypes_default.a.oneOf(["mobile","desktop","all"]),breakpoints:external_PropTypes_default.a.array,refresh:external_PropTypes_default.a.bool,adType:external_PropTypes_default.a.string,adName:external_PropTypes_default.a.string,targeting:external_PropTypes_default.a.object,bidding:external_PropTypes_default.a.object,prerender:external_PropTypes_default.a.func,isAmp:external_PropTypes_default.a.bool,collapseEmptyDivs:external_PropTypes_default.a.bool,ampLayout:ampLayout},ArcAd.defaultProps={isAmp:!1,ampLayout:{width:300,height:250,layout:"responsive",multiSize:"300x150,300x100,300x75,300x50"},refresh:!1,display:"all",bidding:{},collapseEmptyDivs:!0,dimensions:[0,0]};/* harmony default export */ var AdComponent = (ArcAd);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Ad/_children/ad-utils.js
var ad_utils = __webpack_require__(32);

// EXTERNAL MODULE: ./bundle/babel/properties/index.json
var properties = __webpack_require__(7);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Ad/_children/adtypes.js
var mobileSize=[0,0],smallTabletSize=[properties["breakpoints"][0].width,0],tabletSize=[properties["breakpoints"][1].width,0],desktopSize=[properties["breakpoints"][2].width,0],widescreenSize=[properties["breakpoints"][3].width,0];var adTypes=[{name:"megalateral_250x600",display:"desktop",dimensions:[[[250,600],[200,500],[120,600],[160,600]]],adClasses:"display_block fixed megalateral_ad ad_margin_wrapper",sizemap:{breakpoints:[desktopSize]},hideAction:!1,placeholderSize:!1},{name:"header_izq_180x70",display:"desktop",dimensions:[[180,70]],adClasses:"masthead_header_left_ad absolute",sizemap:{breakpoints:[desktopSize]},hideAction:!1,placeholderSize:[180,70]},{name:"header_der_180x70",display:"desktop",dimensions:[[180,70]],adClasses:"masthead_header_right_ad absolute",sizemap:{breakpoints:[desktopSize]},hideAction:!1,placeholderSize:[180,70]},{name:"exp_push_1_970x250",display:"all",dimensions:[[[970,250],[970,90],[728,90]],[[300,250],[320,50],"fluid"]],adClasses:"display_block ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[970,90]},{name:"exp_push_2_970x250",display:"all",dimensions:[[[970,250],[970,90],[728,90]],[[300,250],[320,50],"fluid"]],adClasses:"display_block ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[970,90]},{name:"exp_push_3_970x250",display:"all",dimensions:[[[970,250],[970,90],[728,90]],[[300,250],[320,50],"fluid"]],adClasses:"display_block ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[970,90]},{name:"exp_push_4_970x250",display:"all",dimensions:[[[970,250],[970,90],[728,90]],[[300,250],[320,50],"fluid"]],adClasses:"display_block ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[970,90]},{name:"exp_push_5_970x250",display:"all",dimensions:[[[970,250],[970,90],[728,90]],[[300,250],[320,50],"fluid"]],adClasses:"display_block ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[970,90]},{name:"exp_push_6_970x250",display:"all",dimensions:[[[970,250],[970,90],[728,90]],[[300,250],[320,50],"fluid"]],adClasses:"display_block ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[970,90]},{name:"middle_1_300x250",display:"all",dimensions:[[[300,250],"fluid"],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"middle_2_300x250",display:"all",dimensions:[[[300,250],"fluid"],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"left_1_300x250",display:"all",dimensions:[[[300,250],"fluid"],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"left_2_300x250",display:"all",dimensions:[[[300,250],"fluid"],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"top_banner_970x80",display:"all",dimensions:[[[970,80],[970,60],[728,90]],[320,50]],adClasses:"ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:!1},{name:"right_1_300x600",display:"all",dimensions:[[[300,600],[300,250]],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,600]},{name:"right_2_300x600",display:"all",dimensions:[[[300,600],[300,250]],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,600]},{name:"right_3_300x250",display:"all",dimensions:[[[300,250],"fluid"],[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"zocalo_1x1",display:"all",dimensions:[[[940,80],[728,90],[1,1]],[[320,50],[1,1]]],adClasses:"stick_bottom fixed ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!1,placeholderSize:!1},{name:"bottom_right_overlap_banner_300x250",display:"all",dimensions:[[300,250],"fluid"],adClasses:"stick_bottom_right fixed ad_margin_wrapper",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!0,placeholderSize:[300,250]},{name:"inline",display:"all",dimensions:[[[1,1],[640,480],[640,360],[468,60],"fluid"],[[1,1],[640,480],[640,360],[468,60],"fluid"],[[1,1],"fluid"],[[1,1],"fluid"],[[1,1],[300,250],[300,1],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper",sizemap:{breakpoints:[widescreenSize,desktopSize,tabletSize,smallTabletSize,mobileSize]},hideAction:!1,placeholderSize:!1},{name:"interstitial_800x600",display:"all",dimensions:[[800,600],[300,416]],adClasses:"full_screen_add absolute fixed",sizemap:{breakpoints:[desktopSize,mobileSize]},hideAction:!0,placeholderSize:!1},{name:"Ad_1",display:"mobile",dimensions:[[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"Ad_2",display:"mobile",dimensions:[[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"Ad_3",display:"mobile",dimensions:[[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"Ad_4",display:"mobile",dimensions:[[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"Ad_5",display:"mobile",dimensions:[[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[mobileSize]},hideAction:!1,placeholderSize:[300,250]},{name:"Ad_6",display:"mobile",dimensions:[[[300,250],[320,50],"fluid"]],adClasses:"display_inline_block ad_margin_wrapper ad_big_margin_bottom_wrapper",sizemap:{breakpoints:[mobileSize]},hideAction:!1,placeholderSize:[300,250]}];var adTypeOptions=function(e){var i=[];return Object.keys(e).forEach((function(a){return i.push(e[a].name)})),i};
// CONCATENATED MODULE: ./bundle/babel/components/features/global/Ad/_children/error-components.js
var NoDFPIdSupplied=function(){return external_react_default.a.createElement("div",null,"No DFP Publisher ID has been supplied via site properties.")};var PlaceholderAd=function(e){var t=e.adInfo,a=void 0===t?{}:t;if(!a.placeholderSize)return null;var r=a.dimensions,l=a.placeholderSize,n=a.targeting,i=a.name,o=a.slotName,c=a.adClasses,s=l[0],d=l[1],p={background:"teal",color:"white",flexDirection:"column",height:"".concat(d,"px"),margin:"auto",overflow:"auto",padding:"25px",width:"".concat(s,"px")},m={width:"100%"};return external_react_default.a.createElement("div",{className:"width_full display_flex align_items_center justify_center"},external_react_default.a.createElement("div",{className:"ad | placeholder ".concat(c),style:p},"A ",i," ad with slot name ",o," will render here.",external_react_default.a.createElement("br",null),external_react_default.a.createElement("br",null),"Targeting information:",external_react_default.a.createElement("pre",{style:m},JSON.stringify(n,null,2)),"Dimensions:",external_react_default.a.createElement("pre",{style:m},JSON.stringify(r,null,2))))};PlaceholderAd.static=!0,PlaceholderAd.propTypes={adInfo:external_PropTypes_default.a.object};
// CONCATENATED MODULE: ./bundle/babel/components/features/global/Ad/default.jsx
var _class,_temp;function default_typeof(e){return(default_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var o=[],n=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function default_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function default_defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function default_createClass(e,t,o){return t&&default_defineProperties(e.prototype,t),o&&default_defineProperties(e,o),e}function default_possibleConstructorReturn(e,t){return!t||"object"!==default_typeof(t)&&"function"!=typeof t?default_assertThisInitialized(e):t}function default_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function default_getPrototypeOf(e){return(default_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function default_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&default_setPrototypeOf(e,t)}function default_setPrototypeOf(e,t){return(default_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var default_ArcAd=external_Fusion_Consumer_default()(_class=_temp=function(e){function t(e){var o;return default_classCallCheck(this,t),(o=default_possibleConstructorReturn(this,default_getPrototypeOf(t).call(this,e))).removeEmptyAd=function(e,t){var n=e.split("/"),r=n[n.length-1],a=o.adRef.children[0];t&&o.adRef.className.indexOf(r)>-1&&(a.className="")},o.hideOrShowInterstitialAd=function(e,t){var n=e.split("/").join("_"),r="".concat(n,"_close");e.includes(o.state.interstitialAd)&&!t&&document.getElementById(n)&&document.getElementById(n).classList.remove("hide_lightbox"),!t&&document.getElementById(r)&&document.getElementById(r).classList.remove("hide_lightbox")},o.implementFunctionalityInExpPush=function(e){o.props.customFields.type&&o.props.customFields.type.indexOf("exp_push")>-1&&!e&&(window.addEventListener("message",o.setTextInAd,!1),window.addEventListener("message",o.receiveMessage,!1))},o.setTextInAd=function(e){if(e.data&&"adcase"===e.data.msg&&e.data.params&&("expand"===e.data.params.action||"collapse"===e.data.params.action)){var t=o.adRef.querySelectorAll('iframe[id*="exp_push"]');t[0]&&t[0].contentWindow.frames[0]&&(t[0].contentWindow.frames[0].postMessage({iconsStyle:"\n            width: 62px;\n            position: absolute;\n            left: 900px;\n            top: 0;\n            border: 1px solid #ccc;\n            font-family: Arial;\n            font-size: 11px;\n            padding: 3px;\n            background-color: white;\n            text-align: center;\n            cursor: pointer;\n            z-index: 100;\n          ",openIconHTML:"Abrir",closeIconHTML:"Cerrar"},"*"),window.removeEventListener("message",o.setTextInAd))}},o.receiveMessage=function(e){var t=Object(ad_utils["a" /* getIdFromMsg */])(e);if(t&&t.indexOf("exp_push")>-1&&e.data&&"adcase"===e.data.msg&&e.data.params&&("expand"===e.data.params.action||"collapse"===e.data.params.action)){var n=document.getElementById(t),r=n.getElementsByTagName("iframe");"collapse"===e.data.params.action&&o.setState({isExpPushResizedByTimer:!0}),r[0]&&"expand"===e.data.params.action&&(r[0].style.transition="all .25s",r[0].style.height="250px",n.style.transition="all .25s",n.style.height="250px"),r[0]&&"collapse"===e.data.params.action&&(r[0].style.transition="all .25s",r[0].style.height="90px",n.style.transition="all .25s",n.style.height="90px")}},o.hideAd=function(){o.setState({showAd:!1})},o.buildAmpLayout=function(e){if(!o.props.isAmp&&"zocalo_1x1"!==e.name)return[300,250];var t=e.dimensions[e.dimensions.length-1];if(Array.isArray(t[0]))for(var n=Math.random(),r=1/t.length,a=0;a*r<1;a+=1)if(n<=a*r+r){t=t[a];break}return"string"==typeof t&&(t=[300,250]),t},o.state={showAd:!0,interstitialAd:"interstitial_800x600",showInterstitialPlaceholder:!0,isExpPushResizedByTimer:!1},o.slotsCanHide={zocalo_1x1:!0,interstitial_800x600:!0},o}return default_inherits(t,external_react_["PureComponent"]),default_createClass(t,[{key:"componentDidMount",value:function(){var e=this;this.props.isAdmin||window&&window.googletag&&window.googletag.cmd&&window.googletag.cmd.push((function(){var t=window&&window.googletag&&window.googletag.pubads();t&&(t.addEventListener("slotRenderEnded",(function(t){var o=t.slot.getSlotElementId();e.implementFunctionalityInExpPush(t.isEmpty),e.hideOrShowInterstitialAd(o,t.isEmpty),e.removeEmptyAd(o,t.isEmpty)})),t.addEventListener("slotOnload",(function(t){var o=t.slot.getSlotElementId(),n=document.getElementById("".concat(o.replaceAll("/","_"),"_close"));Object.keys(e.slotsCanHide).some((function(e){return o.includes(e)}))&&n&&n&&n.classList.remove("hide")})))}))}},{key:"canHide",value:function(e){return this.slotsCanHide[e]}},{key:"render",value:function(){var e=this;if(!this.state.showAd)return null;var t=this.props,o=t.customFields,n=o.display,r=o.refresh,a=o.screenBackgroundColor,i=o.type,s=o.wrapperClasses,l=t.globalContent,p=t.isAdmin,d=t.isAmp,c=void 0!==d&&d,u=t.siteProperties.dfp_id,m=this.state,f=m.interstitialAd,y=m.showInterstitialPlaceholder,h=m.showAd;if(!u&&p)return external_react_default.a.createElement(NoDFPIdSupplied,null);if(!u&&!p)return null;var g=this.props.adType||i,_=g?adTypes.filter((function(e){return e.name===g}))[0]:{},b=_&&_.display,A="desktop"===b?"hidden-mobile hidden-tablet":"",P="mobile"===b?"hidden-tablet hidden-desktop":"",v=external_react_default.a.createElement("span",{"data-error":"No dfp-path found."}),w=lodash_get_default()(l,"DFP.dfp_path","")||lodash_get_default()(l,"taxonomy.primary_section.additional_properties.original.DFP.dfp_path","")||this.props.metaValue("dfpPath")||"",T=this.props.metaValue("dfpPageType")||"nota",x="".concat(w,"/").concat(T,"/").concat(g),E=x.split("/").join("_");if(u&&p)return setTimeout((function(){_.name===f&&e.setState({showInterstitialPlaceholder:!1})}),2500),y?external_react_default.a.createElement(PlaceholderAd,{slot:x,adInfo:_}):null;_&&_.name===f&&h&&setTimeout((function(){e.hideAd()}),1e4);var I=_&&_.sizemap&&_.sizemap.breakpoints?_.sizemap.breakpoints:void 0,C=_slicedToArray(this.buildAmpLayout(_),2),O=C[0],k=C[1],R=external_react_default.a.createElement("div",{className:"".concat(_.name," | ad-wrapper display_flex align_items_center width_full justify_center"),ref:function(t){e.adRef=t}},_&&_.name===f&&h&&external_react_default.a.createElement("div",{id:E,className:"full_screen_background hide_lightbox",style:{backgroundColor:a}}),external_react_default.a.createElement(AdComponent,{adType:i,adName:_.name,breakpoints:I,childrenPosition:"top",className:"dfpAd ".concat(A," ").concat(P," ").concat(s||"","\n            ").concat(_&&_.adClasses," text--center"),collapseEmptyDivs:!0,dfpId:u,dimensions:_&&_.dimensions,display:n,id:x,isAmp:c,ampLayout:_&&_.ampLayout||{width:O,height:k},refresh:r,slotName:x},_&&(_.hideAction||this.canHide(_.name))&&external_react_default.a.createElement("button",{id:"".concat(E,"_close"),"aria-label":E,className:"absolute close_ad pointer hide_lightbox hide",onClick:this.hideAd},external_react_default.a.createElement("i",{className:"close display_flex"}))));return w?R:v}}]),t}())||_class;default_ArcAd.propTypes={siteProperties:external_PropTypes_default.a.shape({dfp_id:external_PropTypes_default.a.number,adBreakpoints:external_PropTypes_default.a.string}),isAdmin:external_PropTypes_default.a.bool,isAmp:external_PropTypes_default.a.bool,adType:external_PropTypes_default.a.string,arcSite:external_PropTypes_default.a.string,globalContent:external_PropTypes_default.a.object,metaValue:external_PropTypes_default.a.func,customFields:external_PropTypes_default.a.shape({display:external_PropTypes_default.a.oneOf(["mobile","desktop","all"]).tag({defaultValue:"all"}),type:external_PropTypes_default.a.oneOf(adTypeOptions(adTypes)).tag({defaultValue:""}),refresh:external_PropTypes_default.a.bool,wrapperClasses:external_PropTypes_default.a.string,screenBackgroundColor:external_PropTypes_default.a.string})};/* harmony default export */ var Ad_default = __webpack_exports__["default"] = (default_ArcAd);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys=__webpack_require__(64),getTag=__webpack_require__(67),isArguments=__webpack_require__(79),isArray=__webpack_require__(81),isArrayLike=__webpack_require__(82),isBuffer=__webpack_require__(83),isPrototype=__webpack_require__(49),isTypedArray=__webpack_require__(85),mapTag="[object Map]",setTag="[object Set]",objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function isEmpty(r){if(null==r)return!0;if(isArrayLike(r)&&(isArray(r)||"string"==typeof r||"function"==typeof r.splice||isBuffer(r)||isTypedArray(r)||isArguments(r)))return!r.length;var e=getTag(r);if(e==mapTag||e==setTag)return!r.size;if(isPrototype(r))return!baseKeys(r).length;for(var t in r)if(hasOwnProperty.call(r,t))return!1;return!0}module.exports=isEmpty;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = Fusion.Content;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var freeGlobal=__webpack_require__(52),freeSelf="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")();module.exports=root;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(29);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = Object.create(__webpack_require__(24));
util.inherits = __webpack_require__(20);
/*</replacement>*/

var Readable = __webpack_require__(57);
var Writable = __webpack_require__(47);

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AmpImage */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var fusion_environment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_environment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var fusion_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _content_utilities_resizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Image=function(e){var t,r=fusion_properties__WEBPACK_IMPORTED_MODULE_3___default()().defaultAspectRatio,a=e.aspectRatio,n=e.caption,o=void 0===n?"":n,i=e.addUrl,s=void 0===i||i,p=e.alt,c=e.captionClasses,l=e.containerClasses,u=e.credits,m=void 0===u?{}:u,y=e.creditsClasses,f=e.creditsSeparator,d=void 0===f?"|":f,g=e.height,P=e.imageClasses,h=e.imageCredits,T=e.imageCreditsSize,b=e.isAmp,v=e.linkClasses,_=e.linkText,R=e.overlayContent,E=e.parentProps,C=e.placeholderImage,O=e.resizedParams,x=e.round,I=e.showCredits,j=void 0===I||I,w=e.showImageCredits,N=e.url,A=e.useThumbnail,S=e.width,k=e.customImageSrc,M=a||r,z=k||C||e.src||e.url,F=m.by&&m.by.map((function(e){return e.byline})).join("".concat(d))||"",W=m.affiliation&&m.affiliation.map((function(e){return e.name})).join("".concat(d))||"",U=j&&"".concat(F).concat(F&&W&&" ".concat(d," ")).concat(W),q=o||U,B=(_defineProperty(t={alt:p||"infobae-image",height:g},b?"class":"className",P),_defineProperty(t,"src",z),_defineProperty(t,"width",S),t),D=function(e){if(O&&!A){var t=Object(_content_utilities_resizer__WEBPACK_IMPORTED_MODULE_6__[/* getBreakpointDimensionsForAspectRatios */ "a"])(M,!0),r=O.filter((function(e){return Object.keys(e).find((function(e){return t[0].includes(e)}))})),a=[],n=Object.entries(e.breakpoints),o=n.map((function(e){return e[1].device})),i=n.map((function(e){return e[1].width})),s=Math.max.apply(Math,_toConsumableArray(i)),p=E.maxWidth||(f=[],o.forEach((function(e){return f.push(function(e){var t=E["".concat(e,"ContainerColumns")],r=E["".concat(e,"CardsPerRow")],a=n.filter((function(t){return t[1].device===e}))[0][1].width,o=t?Math.round(a/t):a;return r?Math.round(o/r):o}(e))})),f.length>0?Math.max.apply(Math,f):s),c=i.reduce((function(e,t){return Math.abs(t-p)<Math.abs(e-p)?t:e})),l=function(e){return r.filter((function(t){var r=Object.keys(t)[0].split("x")[0];return parseInt(r,10)===e?t:null}))},u=l(c)[0],m=Object.keys(u)[0],y=Object.values(u)[0];return n.forEach((function(e){var r=parseInt(e[1].width,10),n=t[0].filter((function(e){return e.indexOf(r)>=0}))[0].split("x")[1],o=l(r),i=lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(o)?null:Object.values(o[0])[0],s=(r>=p?"".concat(y,"/").concat(m):"".concat(i,"/").concat(e[1].width,"x").concat(n)).split("="),c="".concat(s[0],"="),u=function(e,t){return"".concat(fusion_environment__WEBPACK_IMPORTED_MODULE_2___default.a.RESIZER_URL).concat(e,"/").concat(t[1]?"".concat(t[1],"/"):"").concat(t[0],"/").concat(z.replace("https://",""))},f=e[1].device;return"mobile"!==f||k||(B.src=function(e){var r=t[0][0],a=Object.values(O).filter((function(t){if(!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(t)){var a=Object.keys(t)[0].split("|"),n=a[1],o=a[0],i=Object.values(t);return n===e&&o===r?i:null}return null}))[0];if(a){var n=Object.values(a)[0].split("="),o="".concat(n[0],"=/").concat(r);return u(o,n[1].split("//"))}return null}(f)),a.push("".concat(u(c,s[1].split("//"))," ").concat(r,"w"))})),a}var f;return null},H=function(){var e="".concat(Object(_utilities_utils__WEBPACK_IMPORTED_MODULE_5__[/* trim */ "f"])("".concat(P||""," ").concat(x?"border_round":""))),t=fusion_properties__WEBPACK_IMPORTED_MODULE_3___default()(),r=D(t);return b?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:l},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-img",_extends({srcSet:r},B,{layout:"responsive","data-amp-auto-lightbox-disable":!0})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption",{className:"".concat(c," amp_figcaption padding_horizontal_15px")},o,U&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:y},U))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture",{className:l},function(e){var t=[],r=fusion_properties__WEBPACK_IMPORTED_MODULE_3___default()(),a=D(r),n=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",_extends({alt:B.alt,type:"image/png",className:e},B));return a&&!k?((a=a.reverse()).map((function(e){return t.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source",{type:"image/jpg",srcSet:e}))})),t.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,n)),t):n}(e)," ",q&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption",{className:c},o,U&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:y},U)))},V=function(){var e={fontSize:"".concat(T,"px")};return w&&h&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"text_align_left color_light_gray",style:e},h)};return N&&s?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:N,className:"link | color_inherit display_inline_block width_full margin_vertical_5px ".concat(v||""),"aria-label":_},H(),R,V()):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,H(),R,V())};Image.propTypes={isPlaceholder:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,aspectRatio:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,addUrl:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,caption:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,captionClasses:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,containerClasses:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,credits:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({affiliation:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({name:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired})),by:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({name:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired}))}),creditsClasses:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,creditsSeparator:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,height:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),imageClasses:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,isAmp:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,layout:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,linkClasses:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),parentProps:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number}),placeholderImage:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,linkText:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,resizedParams:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,round:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,showCredits:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,url:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,useThumbnail:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,width:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),imageCredits:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,customImageSrc:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,showImageCredits:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,imageCreditsSize:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,alt:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,overlayContent:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node};/* harmony default export */ __webpack_exports__["a"] = (Image);var AmpImage=function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image,_extends({},e,{ImageTag:"amp-img"}))};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var FUNC_ERROR_TEXT="Expected a function",NAN=NaN,symbolTag="[object Symbol]",reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt,freeGlobal="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global,freeSelf="object"==("undefined"==typeof self?"undefined":_typeof(self))&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),objectProto=Object.prototype,objectToString=objectProto.toString,nativeMax=Math.max,nativeMin=Math.min,now=function(){return root.Date.now()};function debounce(t,e,n){var o,r,i,f,u,a,c=0,l=!1,b=!1,s=!0;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);function y(e){var n=o,i=r;return o=r=void 0,c=e,f=t.apply(i,n)}function p(t){return c=t,u=setTimeout(d,e),l?y(t):f}function m(t){var n=t-a;return void 0===a||n>=e||n<0||b&&t-c>=i}function d(){var t=now();if(m(t))return v(t);u=setTimeout(d,function(t){var n=e-(t-a);return b?nativeMin(n,i-(t-c)):n}(t))}function v(t){return u=void 0,s&&o?y(t):(o=r=void 0,f)}function g(){var t=now(),n=m(t);if(o=arguments,r=this,a=t,n){if(void 0===u)return p(a);if(b)return u=setTimeout(d,e),y(a)}return void 0===u&&(u=setTimeout(d,e)),f}return e=toNumber(e)||0,isObject(n)&&(l=!!n.leading,i=(b="maxWait"in n)?nativeMax(toNumber(n.maxWait)||0,e):i,s="trailing"in n?!!n.trailing:s),g.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},g.flush=function(){return void 0===u?f:v(now())},g}function throttle(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return isObject(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),debounce(t,e,{leading:o,maxWait:e,trailing:r})}function isObject(t){var e=_typeof(t);return!!t&&("object"==e||"function"==e)}function isObjectLike(t){return!!t&&"object"==_typeof(t)}function isSymbol(t){return"symbol"==_typeof(t)||isObjectLike(t)&&objectToString.call(t)==symbolTag}function toNumber(t){if("number"==typeof t)return t;if(isSymbol(t))return NAN;if(isObject(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=isObject(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(reTrim,"");var n=reIsBinary.test(t);return n||reIsOctal.test(t)?freeParseInt(t.slice(2),n?2:8):reIsBadHex.test(t)?NAN:+t}module.exports=throttle;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export processLogoSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return processMobileLogoSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return processDesktopLogoSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logoCustomFields; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var fusion_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_properties__WEBPACK_IMPORTED_MODULE_1__);
var logoDimensions={desktop:{width:252,height:60},mobile:{width:105,height:25}};var processLogoSettings=function(o,e,t){var i=o.logoImage,r=void 0===i?"":i,s=o.logoLink,g=void 0===s?"":s,l=o.logoSiteTitle,n=void 0===l?"":l,p=fusion_properties__WEBPACK_IMPORTED_MODULE_1___default()(),a=p.siteName,m=p.siteDomainURL,h=p.defaultSiteLogo,d={altText:a,src:e("".concat(t).concat(h)),linkUrl:m,width:logoDimensions.mobile.width,height:logoDimensions.mobile.height};return r&&(d.src=r),g&&(d.linkUrl=g),n&&(d.altText=n),d};var processMobileLogoSettings=processLogoSettings;var processDesktopLogoSettings=function(o,e,t){var i=processLogoSettings(o,e,t);return i.width=logoDimensions.desktop.width,i.height=logoDimensions.desktop.height,i};var logoCustomFields={logoImage:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.url.tag({group:"Site Information",label:{en:"Home Page Logo",es:"Logo del Sitio"}}),logoLink:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.url.tag({group:"Site Information",label:{en:"Home Page URL",es:"URL del Sitio"}}),logoSiteTitle:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.tag({group:"Site Information",label:{en:"Home Page Title",es:"Titulo del Sitio"}})};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative=__webpack_require__(69),getValue=__webpack_require__(74);function getNative(e,a){var t=getValue(e,a);return baseIsNative(t)?t:void 0}module.exports=getNative;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(44).Buffer))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "Fusion.getProperties"
var external_Fusion_getProperties_ = __webpack_require__(10);
var external_Fusion_getProperties_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_getProperties_);

// EXTERNAL MODULE: external "Fusion.environment"
var external_Fusion_environment_ = __webpack_require__(12);
var external_Fusion_environment_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_environment_);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(4);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Byline/children/AuthorText.jsx
var AuthorText=function(e){var t=e.author,r=e.creditsLength,a=e.key,o=r-2,n=t.name;return n=0===n.indexOf("Por ")?n.substr(3,n.length-3):n,n=t.slug&&"author"===t.type?external_react_default.a.createElement("a",{href:"/autor/".concat(t.slug)},n):external_react_default.a.createElement("span",null,n),external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement("span",{className:"author | margin_horizontal_5px bold"},n),external_react_default.a.createElement("span",null,a===o?" y":null,a!==r&&a<o?",":null))};AuthorText.static=!0,AuthorText.propTypes={author:external_PropTypes_default.a.object,creditsLength:external_PropTypes_default.a.object,key:external_PropTypes_default.a.int};/* harmony default export */ var children_AuthorText = (AuthorText);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/Byline/children/AuthorImage.jsx
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var AuthorImage=function(e){var t=e.author,r=e.isAmp;if(t&&t.image&&t.image.url){var a={height:"40",width:"40",src:t.image.url};return external_react_default.a.createElement("div",{className:"author_image margin_horizontal_5px"},r?external_react_default.a.createElement("amp-img",_extends({},a,{alt:"autor",layout:"fixed"})):external_react_default.a.createElement("img",_extends({},a,{alt:"autor"})))}return null};AuthorImage.static=!0,AuthorImage.propTypes={author:external_PropTypes_default.a.object,isAmp:external_PropTypes_default.a.bool};/* harmony default export */ var children_AuthorImage = (AuthorImage);
// EXTERNAL MODULE: ./bundle/babel/components/utilities/DateTimeInfo.js
var DateTimeInfo = __webpack_require__(34);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_page.js
var _page = __webpack_require__(8);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_utils.js
var _utils = __webpack_require__(3);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Byline/index.js
var Byline=function(e){var t=[],o=[],r=[],i=e.bylineClasses,a=void 0===i?"":i,s=e.bylineFont,l=void 0===s?"":s,n=e.credits,p=e.dateTime,m=e.showCredits,c=void 0===m||m,d=e.showDateTime,y=void 0===d||d,T=e.showTimeToRead,h=void 0===T||T,u=e.timeToRead,g=e.overrides,b=c&&n&&n.length>0,f=y&&p?"border_2 border_right border_middlegray":"";if(b){var _=n.length;n.forEach((function(i,a){t.push(external_react_default.a.createElement(children_AuthorText,{author:i,creditsLength:_,key:a})),r.push(external_react_default.a.createElement("div",{className:"padding_horizontal_5px",key:a},i.description)),o.push(external_react_default.a.createElement(children_AuthorImage,{author:i,isAmp:e.isAmp,key:a}))}))}return external_react_default.a.createElement("div",{className:"grid"},external_react_default.a.createElement("div",{className:Object(_utils["f" /* trim */])("byline | ".concat(a," ").concat(l," isText col widescreen-8 desktop-8 tablet-12 width_full ")),style:Object(_page["b" /* mapComponentPropsToStyles */])(g,"byline")},b&&external_react_default.a.createElement(external_react_["Fragment"],null,o,external_react_default.a.createElement("div",{className:"authors | margin_horizontal_5px color_black display_inline ".concat(f)},"Por ",t)),y&&p&&external_react_default.a.createElement("div",{className:"datetime | display_inline byline_datetime"},Object(DateTimeInfo["a" /* default */])(p)),h&&u&&external_react_default.a.createElement("span",{className:"time_to_read | float_right"},"".concat(u<=1?"Lectura rápida":"".concat(u," minutos para leer")))),external_react_default.a.createElement("div",{style:{paddingLeft:"".concat(50*o.length,"px")},className:"col widescreen-8 desktop-8 tablet-12 width_full"},r))};Byline.static=!0,Byline.propTypes={bylineClasses:external_PropTypes_default.a.string,bylineFont:external_PropTypes_default.a.string,bylineText:external_PropTypes_default.a.string,credits:external_PropTypes_default.a.array,dateTime:external_PropTypes_default.a.string,isAmp:external_PropTypes_default.a.bool,overrides:external_PropTypes_default.a.shape({}),showCredits:external_PropTypes_default.a.bool,showDateTime:external_PropTypes_default.a.bool,showTimeToRead:external_PropTypes_default.a.bool,timeToRead:external_PropTypes_default.a.number};/* harmony default export */ var global_Byline = (Byline);
// EXTERNAL MODULE: external "Fusion.Content"
var external_Fusion_Content_ = __webpack_require__(16);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Deck/index.js
function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Deck_extends(){return(Deck_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var Deck=function(e){var t=e.content,r=e.deckClasses,o=void 0===r?"":r,n=e.deckFont,i=void 0===n?"":n,c=e.deckText,p=void 0===c?"":c,s=e.overrides,a=e.fontSizeDesktop,l=e.fontSizeMobile,d=e.lineHeightDesktop,m=e.lineHeightMobile,u=e.url,b=Object(external_Fusion_Content_["useEditableContent"])(),y=b.editableContent,f=b.editableField,g=u||s.deckURL||s.customUrl,_=(s.outputType,lodash_get_default()(t,"description.basic","")),h=lodash_get_default()(t,"promoItems.basic.caption",""),P=f?f("deckText"):[],T=[];if(y&&(_?T=y(t,"description.basic"):h&&(T=y(t,"promoItems.basic.caption"))),!p&&!_&&!h)return null;var k=Object(_page["b" /* mapComponentPropsToStyles */])(s,"deck"),v=external_react_default.a.createElement(external_react_["Fragment"],null,p&&external_react_default.a.createElement("div",Deck_extends({},P,{dangerouslySetInnerHTML:{__html:p}})),!p&&_&&external_react_default.a.createElement("div",Deck_extends({},T,{dangerouslySetInnerHTML:{__html:_}})),!p&&!_&&h&&external_react_default.a.createElement("div",Deck_extends({},T,{dangerouslySetInnerHTML:{__html:h}}))),O=_objectSpread({},k),j=(_objectSpread({},k),"");delete O.fontSize,delete O.lineHeight,s.deckHeight&&(k.height="".concat(s.deckHeight,"px")),l&&(j="".concat(j," mobile_font_size_").concat(l)),m&&(j="".concat(j," mobile_line_height_").concat((m+"").replace(".","_"))),a&&(j="".concat(j," font_size_").concat(a)),d&&(j="".concat(j," line_height_").concat((d+"").replace(".","_")));var S=external_react_default.a.createElement("div",{className:Object(_utils["f" /* trim */])("".concat(o," ").concat(i||""," deck ").concat(j)),style:_objectSpread({},O)},v);return g?external_react_default.a.createElement("a",{href:g},S):S};Deck.static=!0,Deck.propTypes={content:external_PropTypes_default.a.shape({length:external_PropTypes_default.a.string}),editableField:external_PropTypes_default.a.shape({}),deckClasses:external_PropTypes_default.a.string,deckFont:external_PropTypes_default.a.string,deckText:external_PropTypes_default.a.string,overrides:external_PropTypes_default.a.shape({}),fontSizeDesktop:external_PropTypes_default.a.number,fontSizeMobile:external_PropTypes_default.a.number,lineHeightDesktop:external_PropTypes_default.a.number,lineHeightMobile:external_PropTypes_default.a.number,url:external_PropTypes_default.a.string};/* harmony default export */ var global_Deck = (Deck);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Headline/index.js
var Headline = __webpack_require__(35);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Author/index.js
var Author=function(e){return external_react_default.a.createElement("div",{className:"author-wrapper"},external_react_default.a.createElement("div",{className:"author-container isText"},e.author),external_react_default.a.createElement("div",{className:"hidden_desktop"}," "))};Author.static=!0,Author.propTypes={author:external_PropTypes_default.a.string};/* harmony default export */ var global_Author = (Author);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Image/index.js
var Image = __webpack_require__(19);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lazy-child/dist/index.esm.js + 15 modules
var index_esm = __webpack_require__(38);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/LazyImage/index.js
function LazyImage(e){var r=e.height,t=e.width;return external_react_default.a.createElement(index_esm["a" /* default */],{renderPlaceholder:function(e){return external_react_default.a.createElement("div",{ref:e,style:{height:r,width:t}})}},external_react_default.a.createElement(Image["a" /* default */],e))}LazyImage.propTypes={height:external_PropTypes_default.a.oneOfType([external_PropTypes_default.a.string,external_PropTypes_default.a.number]),width:external_PropTypes_default.a.oneOfType([external_PropTypes_default.a.string,external_PropTypes_default.a.number])};
// CONCATENATED MODULE: ./bundle/babel/resources/icons/PlayIcon.js
var PlayIcon=function(){return external_react_default.a.createElement("div",{className:"icon | align_items_center display_flex margin_vertical_10px play_button pointer"},external_react_default.a.createElement("button",{className:"button | pointer relative"}))};PlayIcon.static=!0;/* harmony default export */ var icons_PlayIcon = (PlayIcon);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Video/default.jsx + 2 modules
var Video_default = __webpack_require__(39);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(14);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/RelatedLink/index.js
var RelatedLink=function(e){for(var t=e.links,l=[],a=1;a<=5;a+=1)l.push({linkTitle:t["relatedTitle".concat(a)],linkURL:t["relatedUrl".concat(a)]});return isEmpty_default()(l)?external_react_default.a.createElement("div",{className:"related-link-container"},external_react_default.a.createElement("ul",null,l.map((function(e,l){return e.linkTitle&&external_react_default.a.createElement("li",{className:"related-links ".concat(t.relatedStacked?"display_block":"display_inline_block"),key:l},external_react_default.a.createElement("a",{href:e.linkURL},e.linkTitle))})))):null};RelatedLink.static=!0,RelatedLink.propTypes={links:external_PropTypes_default.a.object};/* harmony default export */ var global_RelatedLink = (RelatedLink);
// EXTERNAL MODULE: ./bundle/babel/components/utilities/_constants.js
var _constants = __webpack_require__(6);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_configs.js
var _configs = __webpack_require__(2);

// CONCATENATED MODULE: ./bundle/babel/components/utilities/_components.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStoryCardFromViewName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getViewNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertSpanishCharacters; });
function _components_ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _components_objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_components_ownKeys(Object(a),!0).forEach((function(t){_components_defineProperty(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_components_ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _components_defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return a}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var getByline=function(e,t){if(e&&t){var a=e.credits,r=e.display_date,n=e.timeToRead,i=t.bylineClasses,o=void 0===i?"":i,l=t.bylineFont,c=t.bylineTextDecorations,s=t.showCredits,m=t.showDateTime,u=t.showTimeToRead;return external_react_default.a.createElement(global_Byline,{bylineClasses:"".concat(Object(_utils["f" /* trim */])("".concat(o," ").concat(Object(_utils["e" /* getTextClasses */])(c)))),credits:a&&a.by,bylineFont:_configs["i" /* fontNames */][l],dateTime:r,overrides:t,showCredits:a&&a.by&&!1!==s,showDateTime:r&&!1!==m,showTimeToRead:!1!==u,timeToRead:n})}return null},getDeck=function(e,t){if(e&&t&&!t.deckMergeWithHeadline){var a=e.canonical_url,r=e.website_url,n=t.deckText,i=t.fontSizeDeckMobile,o=t.fontSizeDeckDesktop,l=t.lineHeightDeckMobile,c=t.lineHeightDeckDesktop;return external_react_default.a.createElement(global_Deck,{content:e,deckClasses:"".concat(Object(_utils["f" /* trim */])("".concat(t.deckClasses||""," ").concat(Object(_utils["e" /* getTextClasses */])(t.deckTextDecorations)))),deckFont:_configs["i" /* fontNames */][t.deckFont],deckText:n,fontSizeDesktop:o,fontSizeMobile:i,lineHeightDesktop:c,lineHeightMobile:l,overrides:t,url:r||a})}return null},getHeadline=function(e,t){if(e&&t&&!t.headlineOverlayImage){var a=t.customUrl,r=t.fontSizeHeadlineMobile,n=t.headlineClasses,i=t.headlineFont,o=t.headlineLevel,l=t.headlineText,c=t.headlineTextDecorations,s=t.headlinesContainerClasses,m=t.url;return external_react_default.a.createElement(Headline["a" /* default */],{content:e,fontSizeHeadlineMobile:r,headlineClasses:"".concat(Object(_utils["f" /* trim */])("".concat(n||""," ").concat(Object(_utils["e" /* getTextClasses */])(c||"")))),headlinesContainerClasses:s,headlineFont:_configs["i" /* fontNames */][i],headlineLevel:o,headlineText:l,overrides:t,url:a||m||e.website_url||e.canonical_url})}return null},getImage=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=external_Fusion_getProperties_default()(),n=r.defaultAspectRatio;if(e&&t){var i=t.contextPath,o=t.customImageSrc,l=t.customUrl,c=t.deployment,s=t.headlineFont,m=t.headlineOverlayImage,u=t.headlineText,d=t.imageAlignment,g=t.imageAspectRatio,p=void 0===g?n:g,f=t.imageClasses,y=t.imageCreditsSize,h=t.imageHeight,k=t.imageLazyLoad,b=void 0!==k&&k,v=t.imageRound,_=t.imageWidth,w=t.inHouseAd,I=t.isAmp,H=t.noPadding,C=t.overlayBackgroundColor,D=t.overlayBoxShadow,R=t.overlayHeadlinePosition,N=t.overlayHeadlineStyle,x=t.overlayIcon,F=t.overlayIconPosition,T=t.overlayOnHover,V=t.overlayPlaceBelowImage,P=t.overlayText,B=t.overlayTextElements,E=t.overlayTextFontSize,M=t.overlayTextPosition,S=void 0===M?"":M,O=t.showImageCredits,z=(t.siteProperties.siteDomainURL,t.url),A=t.useThumbnail,j=e.credits,L=e.promo_items,U=e.website_url,W=e.canonical_url,K=(e.headlines,lodash_get_default()(j,"by",[{name:""}])),Z=K&&K[0]&&K[0].name,q=lodash_get_default()(L,"basic",{}),G=lodash_get_default()(q,"additional_properties",{}),J=lodash_get_default()(q,"credits",{}),Q=lodash_get_default()(J,"by",[{name:""}]),X=Q&&Q[0]&&Q[0].name,Y=lodash_get_default()(L,"lead_art",{}),$=u||lodash_get_default()(e,"headlines.basic",""),ee=c("".concat(i,"/resources/images/logo_infobae_fondo_naranja.svg")),te=o||q.url||(A?G.thumbnailResizeUrl:G.resizeUrl)||Y.url||ee;te.match(/^\/resizer\//)&&(te=te.replace(/\/resizer\//,"".concat(external_Fusion_environment_default.a.RESIZER_URL,"/")));var ae=L&&L.basic&&L.basic.resized_params;a&&(te=e.credits&&e.credits.by&&e.credits.by[0]&&e.credits.by[0].image&&e.credits.by[0].image.url||ee,ae=e.credits&&e.credits.by&&e.credits.by[0]&&e.credits.by[0].image&&e.credits.by[0].image.resized_params);var re=te===ee,ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=P||B;return t?T?e?"display_hover":"display_none":e?"":"display_block":e?"":"display_none"},ie=l||z||U||W;if(re){var oe=p.split(":"),le=_slicedToArray(oe,2),ce=le[0],se=le[1],me="Left"===d||"Right"===p?40:100;return me=H?0:me,external_react_default.a.createElement("div",{className:Object(_utils["f" /* trim */])("image | ".concat(ne(!0)," relative")),style:{height:"0",paddingBottom:"".concat(me/ce*se,"%"),margin:"5px 0",background:"url(".concat(ee,")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundColor:"#f58e1f"}},external_react_default.a.createElement("a",{href:ie,"aria-label":$},external_react_default.a.createElement("div",{style:{paddingBottom:"".concat(me/ce*se,"%"),position:"absolute",width:"100%"}})))}var ue=lodash_get_default()(q,"caption",lodash_get_default()(q,"alt_text","")),de=function(){var e="right of text"===F?"svg_right":"svg_left",t="".concat(E,"px"),a=V?"Background_black background_invert_colors":"",r={width:t,height:t,backgroundSize:t};return x&&"none"!==x?external_react_default.a.createElement("div",{className:"".concat(a," icon_container display_flex align_items_center justify_center")},external_react_default.a.createElement("div",{className:"svg_icon | ".concat({"audio button":"svg_audio_icon","play button":"svg_play_icon","arrow in circle":"svg_circle_right_icon",camera:"svg_camera_icon",none:""}[x]," ").concat(e),style:r})):null},ge=function(){return B?external_react_default.a.createElement(external_react_["Fragment"],null,B.split(",").map((function(a){switch(Object(_utils["f" /* trim */])(a)){case"Headline":return getHeadline(e,t);case"Deck":return getDeck(e,t);case"Byline":return getByline(e,t);case"PlayIcon":return external_react_default.a.createElement(icons_PlayIcon,null);case"Author":return Z;case"Text":return P;default:return null}}))):external_react_default.a.createElement(external_react_["Fragment"],null,P)},pe=function(){if(P||B||w){var e=V?{}:Object(_configs["h" /* elementPositions */])()[S];S.indexOf("bottom")>-1&&(e.bottom="".concat(14+(y||16),"px"));var a=D?"border_box_shadow":"",r=V?"":"absolute",n=V&&"none"===x?"":"overlay_text",i=!V||V&&(C||D)?"padding_horizontal_15px":"";return external_react_default.a.createElement("a",{href:ie,className:"link | color_inherit","aria-label":$},w&&external_react_default.a.createElement("div",{className:"inhouse_logo_wrapper"},external_react_default.a.createElement("img",{className:"inhouse_logo",src:_constants["b" /* inHouseLogoUrl */],alt:"In House"})),external_react_default.a.createElement("div",{className:"".concat(Object(_utils["f" /* trim */])("overlay | ".concat(r," ").concat(ne()," height_full width_full"))),style:{backgroundColor:C}},P&&external_react_default.a.createElement("div",{className:"".concat(Object(_utils["f" /* trim */])("label | overlay_label ".concat(r,"\n                  ").concat(a," display_flex align_items_center\n                  ").concat(i," padding_vertical_10px\n                "))),style:_components_objectSpread({},Object(_page["b" /* mapComponentPropsToStyles */])(t,"overlay"),{},Object(_page["b" /* mapComponentPropsToStyles */])(t,"overlayText"),{},e)},de(),external_react_default.a.createElement("span",{className:n},ge()))))}return null},fe=h||q.height,ye=_||q.width;return external_react_default.a.createElement("div",{className:Object(_utils["f" /* trim */])("image | ".concat(ne(!0)," relative"))},b&&!I?external_react_default.a.createElement(external_react_["Fragment"],null,!V&&pe(),external_react_default.a.createElement(LazyImage,{isPlaceholder:re,overlayContent:V&&pe(),alt:ue,aspectRatio:p,height:fe,imageClasses:f,imageCredits:X,imageCreditsSize:y,linkText:$,parentProps:t,resizedParams:ae,round:v,showImageCredits:O,src:te,url:ie,useThumbnail:A,width:ye,customImageSrc:o})):external_react_default.a.createElement("div",{className:"relative box_container story-image-wrapper"},!V&&pe(),m&&external_react_default.a.createElement("span",{className:"absolute ".concat(N," ").concat(_configs["i" /* fontNames */][s]),style:_components_defineProperty({margin:"5px",padding:"5px"},R,"5px")},$),external_react_default.a.createElement(Image["a" /* default */],{isPlaceholder:re,overlayContent:V&&pe(),alt:ue,aspectRatio:p,containerClasses:"text_align_center",height:fe||t.height,imageClasses:f,imageCredits:X,imageCreditsSize:y,isAmp:I,linkText:$,parentProps:t,resizedParams:ae,round:v,showImageCredits:O,src:te,url:ie,useThumbnail:A,width:ye||t.width,customImageSrc:o})))}return null},getVideo=function(e,t){if(e&&t){var a=t.videoUUID,r=t.streams;return external_react_default.a.createElement(Video_default["a" /* default */],{_id:a,streams:r})}return null},getAuthor=function(e,t){if(e&&t){var a=e.credits&&e.credits.by[0]&&e.credits.by[0].name;return external_react_default.a.createElement(global_Author,{author:a})}return null},storyCardComponents=function(e,t,a){return{Author:function(){return getAuthor(t,a)},Byline:function(){return getByline(t,a)},CreditImage:function(){return getImage(t,a,!0)},Deck:function(){return getDeck(t,a)},Headline:function(){return getHeadline(t,a)},Image:function(){return getImage(t,a,!1)},Video:function(){return getVideo(t,a)}}},getMarkupForViewName=function(e,t,a,r){var n=storyCardComponents(e,t,r),i=Object(_configs["b" /* checkHeadlineDeck */])(e,r),o=Object(_page["a" /* getRelatedProps */])(r);return external_react_default.a.createElement("div",{className:Object(_configs["l" /* getCardContainerClassesFromView */])(a,e.replace(/ /g,"").replace(/,/g,"_")).toLowerCase(),style:_components_objectSpread({},Object(_page["b" /* mapComponentPropsToStyles */])(r,"storyCard"),{borderColor:"#d5d5d5"})},i.map((function(e,t){var a=e.split("-")[0].trim();return external_react_default.a.createElement(external_react_["Fragment"],{key:t},n[a]())})),external_react_default.a.createElement(global_RelatedLink,{links:o}))};var getStoryCardFromViewName=function(e,t,a){return{"Byline, Headline, Deck":function(){return getMarkupForViewName("Byline, Headline, Deck",e,t,a)},"CreditImage, Headline, Author":function(){return getMarkupForViewName("CreditImage, Headline, Author",e,t,a)},"Deck, Image":function(){return getMarkupForViewName("Deck, Image",e,t,a)},"Headline, Byline":function(){return getMarkupForViewName("Headline, Byline",e,t,a)},"Headline, Byline, Image":function(){return getMarkupForViewName("Headline, Byline, Image",e,t,a)},"Headline, Deck":function(){return getMarkupForViewName("Headline, Deck",e,t,a)},"Headline, Deck, Byline":function(){return getMarkupForViewName("Headline, Deck, Byline",e,t,a)},"Headline, Deck, Image":function(){return getMarkupForViewName("Headline, Deck, Image",e,t,a)},"Headline, Deck, Image, Byline":function(){return getMarkupForViewName("Headline, Deck, Image, Byline",e,t,a)},"Headline, Image":function(){return getMarkupForViewName("Headline, Image",e,t,a)},"Headline, Image, Byline":function(){return getMarkupForViewName("Headline, Image, Byline",e,t,a)},"Headline, Image, Deck":function(){return getMarkupForViewName("Headline, Image, Deck",e,t,a)},"Headline, Video":function(){return getMarkupForViewName("Headline, Video",e,t,a)},"Image, Byline":function(){return getMarkupForViewName("Image, Byline",e,t,a)},"Image, Byline, Headline, Deck":function(){return getMarkupForViewName("Image, Byline, Headline, Deck",e,t,a)},"Image, Deck":function(){return getMarkupForViewName("Image, Deck",e,t,a)},"Image, Deck, Byline":function(){return getMarkupForViewName("Image, Deck, Byline",e,t,a)},"Image, Headline":function(){return getMarkupForViewName("Image, Headline",e,t,a)},"Image, Headline, Byline":function(){return getMarkupForViewName("Image, Headline, Byline",e,t,a)},"Image, Headline, Byline, Deck":function(){return getMarkupForViewName("Image, Headline, Byline, Deck",e,t,a)},"Image, Headline, Deck":function(){return getMarkupForViewName("Image, Headline, Deck",e,t,a)},"Image, Headline, Deck, Byline":function(){return getMarkupForViewName("Image, Headline, Deck, Byline",e,t,a)},Deck:function(){return getMarkupForViewName("Deck",e,t,a)},Headline:function(){return getMarkupForViewName("Headline",e,t,a)},Image:function(){return getMarkupForViewName("Image",e,t,a)}}};var getViewNames=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=Object.keys(getStoryCardFromViewName());return e?a.filter((function(a){return t?a.indexOf(e)>=0:-1===a.indexOf(e)})):a};var convertSpanishCharacters=function(e){return e.replace(/ /g,"_").replace(/á/g,"a").replace(/é/g,"e").replace(/í/g,"i").replace(/ó/g,"o").replace(/ü/g,"u").replace(/ú/g,"u")};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol=__webpack_require__(51),getRawTag=__webpack_require__(70),objectToString=__webpack_require__(71),nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}module.exports=baseGetTag;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var buffer=__webpack_require__(44),Buffer=buffer.Buffer;function copyProps(f,e){for(var r in f)e[r]=f[r]}function SafeBuffer(f,e,r){return Buffer(f,e,r)}Buffer.from&&Buffer.alloc&&Buffer.allocUnsafe&&Buffer.allocUnsafeSlow?module.exports=buffer:(copyProps(buffer,exports),exports.Buffer=SafeBuffer),SafeBuffer.prototype=Object.create(Buffer.prototype),copyProps(Buffer,SafeBuffer),SafeBuffer.from=function(f,e,r){if("number"==typeof f)throw new TypeError("Argument must not be a number");return Buffer(f,e,r)},SafeBuffer.alloc=function(f,e,r){if("number"!=typeof f)throw new TypeError("Argument must be a number");var u=Buffer(f);return void 0!==e?"string"==typeof r?u.fill(e,r):u.fill(e):u.fill(0),u},SafeBuffer.allocUnsafe=function(f){if("number"!=typeof f)throw new TypeError("Argument must be a number");return Buffer(f)},SafeBuffer.allocUnsafeSlow=function(f){if("number"!=typeof f)throw new TypeError("Argument must be a number");return buffer.SlowBuffer(f)};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(44)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ad_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var DetectingAdRender=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]),_createClass(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.refSection,r=e.functionIfAdsAppear,o=e.isAdmin,n=t.getElementsByClassName("dfpAd"),i=t.children,a={};_toConsumableArray(n).forEach((function(e){a[e.children[0].id]=!1}));var l=t.getElementsByTagName("fusion-enter"),u=t.getElementsByTagName("fusion-exit"),f=!0,s=!1,p=void 0;try{for(var c,y=l[Symbol.iterator]();!(f=(c=y.next()).done);f=!0){c.value.remove()}}catch(e){s=!0,p=e}finally{try{f||null==y.return||y.return()}finally{if(s)throw p}}var d=!0,b=!1,m=void 0;try{for(var g,_=u[Symbol.iterator]();!(d=(g=_.next()).done);d=!0){g.value.remove()}}catch(e){b=!0,m=e}finally{try{d||null==_.return||_.return()}finally{if(b)throw m}}""!==t.innerHTML&&n.length!==i.length&&r(),o||window&&window.googletag&&window.googletag.cmd&&window.googletag.cmd.push((function(){window&&window.googletag&&window.googletag.pubads().addEventListener("slotRenderEnded",(function(e){Object(_ad_utils_js__WEBPACK_IMPORTED_MODULE_2__[/* isAdBlockEnabled */ "b"])()||n.length!==i.length||!1!==a[e.slot.getSlotElementId()]||e.isEmpty||r()}))}))}},{key:"render",value:function(){return null}}]),t}();DetectingAdRender.propTypes={isAdmin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,functionIfAdsAppear:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,refSection:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({current:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any})])};/* harmony default export */ __webpack_exports__["a"] = (DetectingAdRender);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIdFromMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isAdBlockEnabled; });
var getIdFromMsg=function(e){try{for(var n=e.source,t=null,r=null,a=0;a<window.frames.length;a+=1)if(n.parent.parent.parent===window.frames[a]||n.parent.parent===window.frames[a]||n.parent===window.frames[a]||n===window.frames[a]){t=window.frames[a];break}if(t){for(var o=document.getElementsByTagName("iframe"),l=0;l<o.length;l+=1)if(o[l].contentWindow===t){r=o[l];break}return r.parentElement.parentElement.id}}catch(e){}return null};var isAdBlockEnabled=function(){var e=document.createElement("ins");e.className="AdSense",e.style.display="block",e.style.position="absolute",e.style.top="-1px",e.style.height="1px",document.body.appendChild(e);var n=!e.clientHeight;return document.body.removeChild(e),n};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var AmpSocialShare=function(e){var a={class:e.className,width:e.width,height:e.height,type:e.type,"aria-label":"social-button"};switch(e.type){case"facebook":a["data-param-app_id"]="303536999846097",a["data-param-herf"]=e.siteUrl;break;case"twitter":case"linkedin":a["data-param-url"]=e.siteUrl;break;case"email":case"sms":a["data-param-body"]=e.siteUrl;break;case"pinterest":a["data-param-media"]=e.siteUrl,a["data-param-url"]=e.siteUrl;break;case"whatsapp":a["data-param-text"]=e.siteUrl;break;case"telegram":a["data-share-endpoint"]="https://telegram.me/share/url?url=".concat(encodeURIComponent(e.siteUrl))}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-social-share",a,e.showText&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"display_flex row align_items_center justify_center color_white"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:e.type}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hidden-mobile margin_horizontal_5px"},"Compartir en ",e.type),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"display_none show_mobile margin_horizontal_5px"},"twitter"===e.type?"Tweet":"Compartir")))};/* harmony default export */ __webpack_exports__["a"] = (AmpSocialShare);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var formatDate=function(e,t,o,a,n){var r="".concat(o," de ").concat(["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][t]," de ").concat(e);return n?"".concat(["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"][a]," ").concat(r):r},DateTimeInfo=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-3,n=new Date(e);n.setHours(n.getHours()+a);var r=Intl.DateTimeFormat().resolvedOptions(),i=r.timeZone,c="es-AR",u={timeZone:i,year:"numeric",day:"2-digit",month:"numeric"};if(t){var s=new Date,g=Math.abs((s-displayDate)/6e4);if(g<1)return"seconds ago";if(g<5)return"moments ago";if(g<60)return"".concat(Math.floor(g.length("minutes"))," minutes ago");if(g/60<24){u.month="2-digit",u.day="2-digit";var m=displayDate.toLocaleString(c,u),l=s.toLocaleString(c,u);u.month="long",u.day="numeric";var d=m.substring(3,5)===l.substring(3,5);if(d){var f=Math.round(g/60)>1;return"".concat(Math.floor(g.length("hours"))," hour").concat(f?"s":""," ago")}}}return formatDate(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCDay(),o)};/* harmony default export */ __webpack_exports__["a"] = (DateTimeInfo);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var fusion_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_content__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _utilities_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Headlines=function(e){var t=e.content,n=(e.fontSizeHeadlineMobile,e.headlineClasses),r=void 0===n?"":n,o=e.headlineFont,i=void 0===o?"":o,a=e.headlineLevel,s=void 0===a?"2":a,l=e.headlineText,c=void 0===l?"":l,p=e.headlinesContainerClasses,d=void 0===p?"":p,h=e.overrides,u=e.subheadlineClasses,m=void 0===u?"":u,y=e.subheadlineLevel,b=void 0===y?5:y,g=e.subheadlineText,f=e.url,T=Object(fusion_content__WEBPACK_IMPORTED_MODULE_1__["useEditableContent"])(),P=T.editableContent,v=T.editableField,_=(h.outputType,h&&h.customFields&&h.customFields.headlineFontSize?"font_size_".concat(h.customFields.headlineFontSize):""),O=h&&h.customFields&&h.customFields.headlineLineHeight?"line_height_".concat((h.customFields.headlineLineHeight+"").replace(".","_")):"",H="h".concat(s),S="h".concat(b),j=lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(t,"headlines.basic",""),C=v?v("headlineText"):[],E=P?P(t,"headlines.basic"):[],F=Object(_utilities_page__WEBPACK_IMPORTED_MODULE_5__[/* mapComponentPropsToStyles */ "b"])(h,"headline");delete F.fontSize,delete F.lineHeight;var x=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,!c&&f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",_extends({href:f},E,{dangerouslySetInnerHTML:{__html:j}})),c&&f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",_extends({href:f},C,{dangerouslySetInnerHTML:{__html:c}})),!c&&!f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:j}}),c&&!f&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})),w=d||"headline isText";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:Object(_utilities_utils__WEBPACK_IMPORTED_MODULE_4__[/* trim */ "f"])("".concat(w," ").concat(i," bold")),style:_objectSpread({},F,{height:"".concat(h.headlineHeight>0?"".concat(h.headlineHeight,"px"):"auto")})},(c||j)&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H,{className:"".concat(r," headline-title ").concat(_," ").concat(O),style:_objectSpread({},F)},x),g&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(S,{className:m,style:Object(_utilities_page__WEBPACK_IMPORTED_MODULE_5__[/* mapComponentPropsToStyles */ "b"])(h,"subHeadline")},f?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:f,rel:"noopener noreferrer"},g):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:g}})))};Headlines.static=!0,Headlines.propTypes={content:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({length:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string}),editableContent:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}),editableField:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}),fontSizeHeadlineMobile:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,headlineClasses:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,headlineFont:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,headlineLevel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,headlineText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,headlinesContainerClasses:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,overrides:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({headlineHeight:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.tag({})}),subheadlineClasses:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,subheadlineLevel:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,subheadlineText:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,url:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string};/* harmony default export */ __webpack_exports__["a"] = (Headlines);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getTotalWordCount=function(t){return t?t.reduce((function(t,e){return e&&"text"===e.type?t+e.content.split(" ").length:t}),0):null};/* harmony default export */ __webpack_exports__["a"] = (getTotalWordCount);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getGlobalContentType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentSection; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
var getParameterByName=function(e,t){if("undefined"!=typeof window){t||(t=window.location.href);var n=e.replace(/[\[\]]/g,"\\$&"),o=new RegExp("[?&]".concat(n,"(=([^&#]*)|&|#|$)")).exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}};/* harmony default export */ __webpack_exports__["a"] = (getParameterByName);var getGlobalContentType=function(e){var t=e.globalContent;return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(t,"type")||lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(t,"node_type",null)};var getCurrentSection=function(e){var t=e.arcSite,n=void 0===t?"infobae":t,o=e.globalContent,r=getGlobalContentType(e);switch(r&&r.toLowerCase()){case"section":return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(o,"_id",null);case"story":return lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(o,"websites.".concat(n,".website_section._id"),lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(o,"taxonomy.primary_section._id","infobae_general_sectin_id"));default:return"/"}};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r){if(Array.isArray(r))return r}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,i=!1,l=void 0;try{for(var o,a=r[Symbol.iterator]();!(n=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);n=!0);}catch(r){i=!0,l=r}finally{try{n||null==a.return||a.return()}finally{if(i)throw l}}return e}}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=r[n];return a}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var a=Object.prototype.toString.call(r).slice(8,-1);return"Object"===a&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a?Array.from(r):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(r,t):void 0}}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
// CONCATENATED MODULE: ./bundle/babel/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}
// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(21);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// CONCATENATED MODULE: ./bundle/babel/node_modules/react-peekaboo/dist/index.esm.js
var supported,defaultProps={enabled:!0,offsetBottom:0,offsetTop:0,throttle:100};function intersectionObserverSupported(){return void 0===supported&&(supported="undefined"!=typeof window&&"IntersectionObserver"in window),supported}function io(e){var t=e.element,o=e.offsetBottom,n=e.offsetTop,r=e.onChange,s="".concat(o,"px 0px ").concat(n,"px 0px"),i=new IntersectionObserver((function(e){var t=_slicedToArray(e,1)[0];r(t.isIntersecting)}),{root:null,rootMargin:s});return i.observe(t),function(){i.unobserve(t)}}function isElementInDocument(e){return"isConnected"in e?e.isConnected:document.body.contains(e)}function isElementInViewport(e,t,o){if(!isElementInDocument(e))return!1;var n=e.getBoundingClientRect(),r=n.top,s=n.bottom+t;return r-o<=window.innerHeight&&s>=0}function index_esm_scroll(e){var t,o=e.element,n=e.offsetBottom,r=e.offsetTop,s=e.onChange,i=e.throttle,l=function(){var e=!!o&&isElementInViewport(o,n,r);e!==t&&(t=e,s(e))},a=lodash_throttle_default()(l,i);return l(),window.addEventListener("scroll",a),window.addEventListener("resize",a),function(){window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}}var IO=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).state={element:null},e.childRef=function(t){e.setState({element:t})},e.teardown=null,e.setup=function(){if(e.props.enabled&&e.state.element){var t=e.props,o=t.offsetBottom,n=t.offsetTop,r=t.onChange;e.teardown=io({element:e.state.element,offsetBottom:o,offsetTop:n,onChange:r})}},e.safeTeardown=function(){e.teardown&&(e.teardown(),e.teardown=null)},e}return _inherits(t,external_react_["Component"]),_createClass(t,[{key:"componentDidUpdate",value:function(e,t){e.children===this.props.children&&e.enabled===this.props.enabled&&e.offsetBottom===this.props.offsetBottom&&e.offsetTop===this.props.offsetTop&&e.onChange===this.props.onChange&&t.element===this.state.element||(this.safeTeardown(),this.setup())}},{key:"componentWillUnmount",value:function(){this.safeTeardown()}},{key:"render",value:function(){return this.props.children(this.childRef)}}]),t}();IO.defaultProps=defaultProps;var Scroll=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).state={element:null},e.childRef=function(t){e.setState({element:t})},e.teardown=null,e.setup=function(){if(e.props.enabled&&e.state.element){var t=e.props,o=t.offsetBottom,n=t.offsetTop,r=t.onChange,s=t.throttle;e.teardown=index_esm_scroll({offsetBottom:o,offsetTop:n,onChange:r,element:e.state.element,throttle:s})}},e.safeTeardown=function(){e.teardown&&(e.teardown(),e.teardown=null)},e}return _inherits(t,external_react_["Component"]),_createClass(t,[{key:"componentDidUpdate",value:function(e,t){e.children===this.props.children&&e.enabled===this.props.enabled&&e.offsetBottom===this.props.offsetBottom&&e.offsetTop===this.props.offsetTop&&e.onChange===this.props.onChange&&e.throttle===this.props.throttle&&t.element===this.state.element||(this.safeTeardown(),this.setup())}},{key:"componentWillUnmount",value:function(){this.safeTeardown()}},{key:"render",value:function(){return this.props.children(this.childRef)}}]),t}();Scroll.defaultProps=defaultProps;var InView=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,external_react_["Component"]),_createClass(t,[{key:"render",value:function(){return intersectionObserverSupported()?Object(external_react_["createElement"])(IO,this.props):Object(external_react_["createElement"])(Scroll,this.props)}}]),t}();InView.defaultProps=defaultProps;
// CONCATENATED MODULE: ./bundle/babel/node_modules/lazy-child/dist/index.esm.js
var Lazy=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).state={isInViewport:!1},e.handleChange=function(t){e.setState({isInViewport:t})},e.renderChildren=function(){return e.props.children},e}return _inherits(t,external_react_["Component"]),_createClass(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.children!==this.props.children||e.offsetBottom!==this.props.offsetBottom||e.offsetTop!==this.props.offsetTop||e.renderPlaceholder!==this.props.renderPlaceholder||e.throttle!==this.props.throttle||t.isInViewport!==this.state.isInViewport}},{key:"render",value:function(){var e=this.props,t=e.offsetBottom,r=e.offsetTop,o=e.renderPlaceholder,s=e.throttle,n=this.state.isInViewport;return external_react_default.a.createElement(InView,{enabled:!n,offsetBottom:t,offsetTop:r,onChange:this.handleChange,throttle:s},n?this.renderChildren:o)}}]),t}();/* harmony default export */ var index_esm = __webpack_exports__["a"] = (Lazy);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: external "Fusion.environment"
var external_Fusion_environment_ = __webpack_require__(12);

// CONCATENATED MODULE: ./bundle/babel/components/utilities/GetEnvironment.js
var getEnvironment=function(n,o){if(void 0===n&&void 0!==o){var d=o.location.host;return d.includes("localhost")||d.includes("dev")||d.includes("sandbox")?"sandbox":"prod"}if(n){if("localhost"===n||"appledaily-dev"===n||n.includes("sandbox"))return"sandbox";if("appledaily"===n)return"prod"}return null};
// EXTERNAL MODULE: ./bundle/babel/components/utilities/Browser.js
var Browser = __webpack_require__(37);

// CONCATENATED MODULE: ./bundle/babel/components/utilities/LdJson.js
var LdJson=function(t){var e=t.data;return external_react_default.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(e)}})};LdJson.propTypes={data:external_PropTypes_default.a.object};/* harmony default export */ var utilities_LdJson = (LdJson);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/Video/default.jsx
var _class;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var VideoCore=external_Fusion_Consumer_default()(_class=function(e){function t(e){var o;return _classCallCheck(this,t),(o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).state={},o.props.streams||o._fetchVideoFromUUID(o.props._id),o}return _inherits(t,external_react_["PureComponent"]),_createClass(t,[{key:"_fetchVideoFromUUID",value:function(e){return this.fetchContent(_defineProperty({},e,{source:"video",query:{uuid:e}}))}},{key:"componentDidMount",value:function(){"undefined"!=typeof window&&void 0!==window.powaBoot&&document.querySelectorAll(".powa").length>0&&window.powaBoot()}},{key:"componentDidUpdate",value:function(e){e._id!==this.props._id&&(this.powaPlayer.classList.remove("powa-processed"),this.powaPlayer.removeAttribute("data-powa-index"),this.powaPlayer.removeAttribute("id"),this.powaPlayer.removeAttribute("style"),this.powaPlayer.innerHTML="",window.powaBoot())}},{key:"render",value:function(){var e=this,t=this.props,o=t._id,r=t.arcSite,i=t.description,n=t.preroll,a=t.streams,s=t.videoData,p=t.promo_image,c=this.props.siteProperties.dfp_id,u=this.props.customFields.preRoll,l=o,d=getEnvironment(external_Fusion_environment_["ENVIRONMENT"],"object"===("undefined"==typeof window?"undefined":_typeof(window))?window:void 0),f=i&&i.basic,m=a?a[0]:this.state[o]&&this.state[o].streams[0],y=m?m.height/m.width:1;if((n||u)&&"object"===("undefined"==typeof window?"undefined":_typeof(window))){var _=Object(Browser["b" /* getCurrentSection */])(this.props).replace(/-\d/g,"").replace(/\//g,"")||"america",h="".concat(r,"/").concat(_,"/nota/video_640x480");window.PoWaSettings.advertising={adTag:function(){return"//pubads.g.doubleclick.net/gampad/ads?iu=/".concat(c,"/").concat(h,"&env=vp&impl=s&correlator=&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=640x480&unviewed_position_start=1")}}}var b=i||s||this.state[o],w=b&&{"@context":"https://schema.org","@type":"VideoObject",name:i||s&&s.headlines.basic||this.state[o].headlines.basic,description:i||s&&s.headlines.basic||this.state[o].headlines.basic,thumbnailUrl:p||s&&s.promo_image.url||this.state[o].promo_image.url};return external_react_default.a.createElement("div",{className:"article-video | visual__video height_auto width_full margin_vertical_10px"},external_react_default.a.createElement("div",{ref:function(t){e.powaPlayer=t},className:"powa","data-org":r,"data-uuid":l,"data-api":d,"data-env":d,"data-aspect-ratio":y}),f&&external_react_default.a.createElement("figcaption",{className:"padding_horizontal_15px margin_bottom_15px"},f),b&&external_react_default.a.createElement(utilities_LdJson,{data:w}))}}]),t}())||_class;VideoCore.propTypes={customFields:external_PropTypes_default.a.shape({preRoll:external_PropTypes_default.a.bool.tag({group:"Options",name:"Allow Pre-Roll"})}),_id:external_PropTypes_default.a.string,env:external_PropTypes_default.a.string,siteProperties:external_PropTypes_default.a.shape({dfp_id:external_PropTypes_default.a.number}),streams:external_PropTypes_default.a.array,preroll:external_PropTypes_default.a.bool,videoData:external_PropTypes_default.a.object};/* harmony default export */ var Video_default = __webpack_exports__["a"] = (VideoCore);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Fusion.environment"
var external_Fusion_environment_ = __webpack_require__(12);
var external_Fusion_environment_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_environment_);

// EXTERNAL MODULE: external "Fusion.getProperties"
var external_Fusion_getProperties_ = __webpack_require__(10);
var external_Fusion_getProperties_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_getProperties_);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/Text.js
var Text = __webpack_require__(36);

// CONCATENATED MODULE: ./bundle/babel/content/utilities/transforms.js
var getTimeToRead=function(t,e){if(t){var n=t,o=function(t){var n=Object(Text["a" /* default */])(t.content_elements),o=parseInt(n/e,10);t.timeToRead=o};return t&&t.count>0?t.content_elements.map((function(t,e){o(t)})):o(t),n}return null};
// CONCATENATED MODULE: ./bundle/babel/content/utilities/resizer.js
/* unused harmony export createResizer */
/* unused harmony export resizeImage */
/* unused harmony export getResizedImageParams */
/* unused harmony export getResizedImageData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBreakpointDimensionsForAspectRatios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectAspectRatioFromSize; });
function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var createResizer=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:85,i=function(i,n,a){if("undefined"==typeof window){var o=__webpack_require__(89),s=n.height,c=n.width;if(!s&&!c)throw new Error("Height and Width required");var p=new o(e,r).setImagePath(i.replace(/(^\w+:|^)\/\//,"")).filter("format(".concat(a,")")).filter("quality(".concat(t,")")).resize(c,s).buildUrl(),u=i.replace("https://",""),m="".concat(c,"x").concat(s);return p.replace(r,"").replace(u,"").replace("/".concat(m,"/"),"")}},n=function(e,r){var t=[],n=function(t,n,a){return getBreakpointDimensionsForAspectRatios(r).devices.forEach((function(r){var o=Object.values(r)[0];if(Object.keys(r)[0]===t||!t)return o.map((function(r){var o=Object.values(r)[0].split("x"),s=o[0],c=o[1];a.push(_defineProperty({},"".concat(o.join("x")).concat(t?"|".concat(t):""),i(e,{width:s,height:c},n)))}))})),a};return n(void 0,"jpg",t),n("mobile","jpg",t),t};return{getResizerParam:i,getResizerParams:n}};var resizeImage=function(e,r,t,i){var n=e.url||e.additional_properties&&e.additional_properties.originalUrl;if(e&&"image"===e.type&&!n)return null;if(e.type&&"image"!==e.type||!n)throw new Error("Not a valid image object");return t.getResizerParams(n,i)};var resizePromoItems=function(e,r,t,i){var n={};return Object.keys(e).forEach((function(a){var o=e[a];"type"===a&&"image"===o||"url"===a?(n.resized_params=resizeImage(e,r,t,i),n.url=e.url):n[a]=o})),n};var getResizedImageParams=function(e,r,t,i){if(!r.resizerSecret||!r.resizerUrl||!r.breakpoints)throw new Error("Resizer URL, secret, and breakpoints are required.");var n=createResizer(r.resizerSecret,r.resizerUrl,t),a=function(e,t){return e&&e.content_elements&&(e.content_elements=e.content_elements.map((function(e){return"image"===e.type&&(e.resized_params=resizeImage(e,r.breakpoints,n,t)),e.promo_items&&e.promo_items.basic&&(e.promo_items.basic=resizePromoItems(e.promo_items.basic,r.breakpoints,n,t)),e}))),e&&e.promo_items&&e.promo_items.basic&&(e.promo_items.basic=resizePromoItems(e.promo_items.basic,r.breakpoints,n,t)),e&&e.credits&&e.credits.by&&e.credits.by.map((function(e){e.image&&e.image.url&&(e.image.resized_params=resizeImage(e.image,r.breakpoints,n,t))})),e};return e&&e.count>0?e.content_elements.map((function(e){a(e,i)})):a(e,i),e};var getResizedImageData=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:85,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("undefined"==typeof window){var i=external_Fusion_getProperties_default()().breakpoints,n=external_Fusion_environment_default.a.RESIZER_SECRET_KEY,a=external_Fusion_environment_default.a.RESIZER_URL,o=getTimeToRead(e,250),s=getResizedImageParams(o,{resizerSecret:n,resizerUrl:a,breakpoints:i},r,t);return s}return e};var getBreakpointDimensionsForAspectRatios=function(e,r,t){var i={devices:[]},n=[],a=external_Fusion_getProperties_default()(),o=a.aspectRatios;return a.breakpoints.forEach((function(a){var s=[],c=a.width,p=!t||t<=c;o.forEach((function(t){if((t===e||!e)&&p){var i=t.split(":"),a=i[0],o=i[1],u=Math.round(c/a*o),m="".concat(c,"x").concat(u);r?n.push(m):s.push(_defineProperty({},t,m))}})),!r&&p&&i.devices.push(_defineProperty({},a.device,s))})),r&&(i=[]).push(n),i};var selectAspectRatioFromSize=function(e,r){var t=e/r;switch(!0){case t>.3865&&t<=.5:return"18:8";case t>.5&&t<=.6145:return"16:9";case t>.6145&&t<=.7117:return"3:2";case t>.7117&&t<=.875:return"4:3";case t>.875&&t<=1.1:return"1:1";case t>1.1&&t<=1.42:return"3:4";case t>1.42&&t<=1.64:return"2:3";case t>1.64&&t<=1.86:case t>1.86&&t<=2.49:return"9:16";default:return null}};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function isObjectLike(o){return null!=o&&"object"==_typeof(o)}module.exports=isObjectLike;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

"function"==typeof Object.create?module.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:module.exports=function(t,e){if(e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t}};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(93)
var ieee754 = __webpack_require__(94)
var isArray = __webpack_require__(56)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(47);
exports.Duplex = __webpack_require__(18);
exports.Transform = __webpack_require__(60);
exports.PassThrough = __webpack_require__(102);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(29);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = Object.create(__webpack_require__(24));
util.inherits = __webpack_require__(20);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(101)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(58);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(30).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(59);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(18);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(18);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(28), __webpack_require__(99).setImmediate, __webpack_require__(15)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(30).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

var objectProto=Object.prototype;function isPrototype(o){var t=o&&o.constructor;return o===("function"==typeof t&&t.prototype||objectProto)}module.exports=isPrototype;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(26),isObject=__webpack_require__(53),asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject(e))return!1;var n=baseGetTag(e);return n==funcTag||n==genTag||n==asyncTag||n==proxyTag}module.exports=isFunction;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(17),_Symbol=root.Symbol;module.exports=_Symbol;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}var freeGlobal="object"==("undefined"==typeof global?"undefined":_typeof(global))&&global&&global.Object===Object&&global;module.exports=freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function isObject(o){var t=_typeof(o);return null!=o&&("object"==t||"function"==t)}module.exports=isObject;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

var funcProto=Function.prototype,funcToString=funcProto.toString;function toSource(t){if(null!=t){try{return funcToString.call(t)}catch(t){}try{return t+""}catch(t){}}return""}module.exports=toSource;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

var MAX_SAFE_INTEGER=9007199254740991;function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}module.exports=isLength;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(29);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(56);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(45).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(58);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(30).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = Object.create(__webpack_require__(24));
util.inherits = __webpack_require__(20);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(96);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(97);
var destroyImpl = __webpack_require__(59);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(18);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(48).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(18);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(48).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15), __webpack_require__(28)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45).EventEmitter;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(29);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(18);

/*<replacement>*/
var util = Object.create(__webpack_require__(24));
util.inherits = __webpack_require__(20);
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,n){if("object"==( false?undefined:_typeof(exports))&&"object"==( false?undefined:_typeof(module)))module.exports=n();else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else{ var t, i; }}("undefined"!=typeof self?self:this,(function(){return function(e){var n={};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=3)}([function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeGPT=function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],(0,t.appendResource)("script","//www.googletagservices.com/tag/js/gpt.js",!0,!0)},n.refreshSlot=function(e){var n=e.ad,i=e.correlator,t=void 0!==i&&i,r=e.prerender,o=void 0===r?null:r,a=e.info,d=void 0===a?{}:a;new Promise((function(e){if(o)try{o(d).then((function(){e("Prerender function has completed.")}))}catch(n){console.warn("ArcAds: Prerender function did not return a promise or there was an error.\n          Documentation: https://github.com/wapopartners/arc-ads/wiki/Utilizing-a-Prerender-Hook"),e("Prerender function did not return a promise or there was an error, ignoring.")}else e("No Prerender function was provided.")})).then((function(){!function e(){window.blockArcAdsLoad||(window.googletag&&googletag.pubadsReady?window.googletag.pubads().refresh([n],{changeCorrelator:t}):setTimeout((function(){e()}),200))}()}))},n.queueGoogletagCommand=function(e){window.googletag.cmd.push(e)},n.setTargeting=function(e,n){for(var i in n)n.hasOwnProperty(i)&&n[i]&&e.setTargeting(i,n[i])},n.dfpSettings=function(e){window.googletag.pubads().disableInitialLoad(),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),this.collapseEmptyDivs&&window.googletag.pubads().collapseEmptyDivs(),window.googletag.enableServices(),e&&window.googletag.pubads().addEventListener("slotRenderEnded",e)},n.determineSlotName=function(e,n){var i=(0,r.expandQueryString)("adslot");return!i||""===i&&null===i?"/"+e+"/"+n:"/"+e+"/"+i};var t=i(5),r=i(6)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeBiddingServices=a,n.fetchBids=function(e){var n=this,i=e.ad,d=e.id,s=e.slotName,u=e.dimensions,l=e.wrapper,c=e.bidding,p=e.correlator,f=void 0!==p&&p,g=e.prerender,b=e.breakpoints,m={adUnit:i,adSlot:s,adDimensions:u,adId:d,bids:c},h=new Promise((function(e){if(l.prebid&&l.prebid.enabled){var r=l.prebid.timeout||700;t.queuePrebidCommand.bind(n,(0,t.fetchPrebidBids)(i,l.prebid.useSlotForAdUnit?s:d,r,m,g,(function(){e("Fetched Prebid ads!")})))}else e("Prebid is not enabled on the wrapper...")})),v=new Promise((function(e){l.amazon&&l.amazon.enabled?(0,r.fetchAmazonBids)(d,s,u,b,(function(){e("Fetched Amazon ads!")})):e("Amazon is not enabled on the wrapper...")}));window.arcBiddingReady?Promise.all([h,v]).then((function(){(0,o.refreshSlot)({ad:i,correlator:f,prerender:g,info:m})})):setTimeout((function(){return a()}),200)};var t=i(2),r=i(7),o=i(0);function a(e){var n=e.prebid,i=void 0!==n&&n,t=e.amazon,o=void 0!==t&&t;if(!window.arcBiddingReady){window.arcBiddingReady=!1;var a=new Promise((function(e){if(i&&i.enabled){if("undefined"==typeof pbjs){var n=n||{};n.que=n.que||[]}e("Prebid has been initialized")}else e("Prebid is not enabled on the wrapper...")})),d=new Promise((function(e){o&&o.enabled&&window.apstag?o.id&&""!==o.id?(0,r.queueAmazonCommand)((function(){window.apstag.init({pubID:o.id,adServer:"googletag"}),e("Amazon scripts have been added onto the page!")})):(console.warn("ArcAds: Missing Amazon account id. \n          Documentation: https://github.com/wapopartners/arc-ads#amazon-tama9"),e("Amazon is not enabled on the wrapper...")):e("Amazon is not enabled on the wrapper...")}));Promise.all([a,d]).then((function(){window.arcBiddingReady=!0}))}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e};n.queuePrebidCommand=function(e){pbjs.que.push(e)},n.fetchPrebidBids=function(e,n,i,t,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;pbjs.addAdUnits(t),pbjs.requestBids({timeout:i,adUnitCodes:[n],bidsBackHandler:function(i){console.log("Bid Back Handler",i),pbjs.setTargetingForGPTAsync([n]),a?a():(0,r.refreshSlot)({ad:e,info:t,prerender:o})}})},n.addUnit=function(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t({code:e,bids:i},o);a.mediaTypes={banner:{sizes:n}};var d=r.sizeConfig,s=r.config;pbjs.addAdUnits(a),s?pbjs.setConfig(s):d&&pbjs.setConfig({sizeConfig:d})};var r=i(0)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ArcAds=void 0;var t=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}(),r=i(4),o=i(1),a=i(0),d=i(2),s=i(8);function u(e){if(Array.isArray(e)){for(var n=0,i=Array(e.length);n<e.length;n++)i[n]=e[n];return i}return Array.from(e)}n.ArcAds=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.dfpId=n.dfp.id||"",this.wrapper=n.bidding||{},this.positions=[],this.collapseEmptyDivs=n.dfp.collapseEmptyDivs,window.isMobile=r.MobileDetection,""===this.dfpId?console.warn("ArcAds: DFP id is missing from the arcads initialization script. \n        Documentation: https://github.com/wapopartners/arc-ads#getting-started"):((0,a.initializeGPT)(),(0,a.queueGoogletagCommand)(a.dfpSettings.bind(this,i)),(0,o.initializeBiddingServices)(this.wrapper))}return t(e,[{key:"registerAd",value:function(e){var n=e.id,i=e.slotName,t=e.dimensions,r=e.adType,o=void 0!==r&&r,s=e.targeting,l=void 0===s?{}:s,c=e.display,p=void 0===c?"all":c,f=e.bidding,g=void 0!==f&&f,b=e.iframeBidders,m=void 0===b?["openx"]:b,h=e.others,v=void 0===h?{}:h,w=[],y=!1,A=function e(n){return Array.isArray(n)?1+Math.max.apply(Math,u(n.map((function(n){return e(n)})))):0}(t);t&&void 0!==t&&1===A||t&&void 0!==t&&t.length>0&&2===A?w.push.apply(w,u(t)):t&&t.forEach((function(e){w.push.apply(w,u(e))}));try{if(!(l&&l.hasOwnProperty("position")||!1===o)){var P=this.positions[o]+1||1;this.positions[o]=P;var k=Object.assign(l,{position:P});Object.assign(e,{targeting:k})}if(isMobile.any()&&"mobile"===p||!isMobile.any()&&"desktop"===p||"all"===p){if(g.prebid&&g.prebid.bids&&this.wrapper.prebid&&this.wrapper.prebid.enabled&&w){pbjs&&m.length>0&&pbjs.setConfig({userSync:{iframeEnabled:!0,filterSettings:{iframe:{bidders:m,filter:"include"}}}});var z=this.wrapper.prebid.useSlotForAdUnit?(0,a.determineSlotName)(this.dfpId,i):n;d.queuePrebidCommand.bind(this,(0,d.addUnit)(z,w,g.prebid.bids,this.wrapper.prebid,v))}(y=this.displayAd.bind(this,e))&&(0,a.queueGoogletagCommand)(y)}}catch(e){console.error("ads error",e)}}},{key:"registerAdCollection",value:function(e){var n=this;e.forEach((function(e){n.registerAd(e)}))}},{key:"displayAd",value:function(e){var n=e.id,i=e.slotName,t=e.dimensions,r=e.targeting,d=e.sizemap,u=void 0!==d&&d,l=e.bidding,c=void 0!==l&&l,p=e.prerender,f=void 0===p?null:p,g=(0,a.determineSlotName)(this.dfpId,i),b=t&&!t.length?null:t,m=t?window.googletag.defineSlot(g,b,n):window.googletag.defineOutOfPageSlot(g,n);if(u&&u.breakpoints&&t){var h=(0,s.prepareSizeMaps)(b,u.breakpoints),v=h.mapping,w=h.breakpoints,y=h.correlators;if(!m)return!1;m.defineSizeMapping(v),u.refresh&&(0,s.setResizeListener)({ad:m,slotName:g,breakpoints:w,id:n,mapping:v,correlators:y,bidding:c,wrapper:this.wrapper,prerender:f})}m&&(m.addService(window.googletag.pubads()),(0,a.setTargeting)(m,r));var A=u&&u.breakpoints?u.breakpoints:[];t&&c&&(c.amazon&&c.amazon.enabled||c.prebid&&c.prebid.enabled)?(0,o.fetchBids)({ad:m,id:n,slotName:g,dimensions:b,wrapper:this.wrapper,prerender:f,bidding:c,breakpoints:A}):(0,a.refreshSlot)({ad:m,prerender:f,info:{adUnit:m,adSlot:g,adDimensions:b,adId:n}})}}]),e}()},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}(),r=n.MobileDetection=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return t(e,null,[{key:"Android",value:function(){return!!navigator.userAgent.match(/Android/i)}},{key:"AndroidOld",value:function(){return!!navigator.userAgent.match(/Android 2.3.3/i)}},{key:"AndroidTablet",value:function(){return!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Mobile/i))}},{key:"Kindle",value:function(){return!!navigator.userAgent.match(/Kindle/i)}},{key:"KindleFire",value:function(){return!!navigator.userAgent.match(/KFOT/i)}},{key:"Silk",value:function(){return!!navigator.userAgent.match(/Silk/i)}},{key:"BlackBerry",value:function(){return!!navigator.userAgent.match(/BlackBerry/i)}},{key:"iOS",value:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)}},{key:"iPhone",value:function(){return!!navigator.userAgent.match(/iPhone|iPod/i)}},{key:"iPad",value:function(){return!!navigator.userAgent.match(/iPad/i)}},{key:"Windows",value:function(){return!!navigator.userAgent.match(/IEMobile/i)}},{key:"FirefoxOS",value:function(){return!!navigator.userAgent.match(/Mozilla/i)&&!!navigator.userAgent.match(/Mobile/i)}},{key:"Retina",value:function(){return window.retina||window.devicePixelRatio>1}},{key:"any",value:function(){return this.Android()||this.Kindle()||this.KindleFire()||this.Silk()||this.BlackBerry()||this.iOS()||this.Windows()||this.FirefoxOS()}}]),e}();n.default=r},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appendResource=function(e,n,i,t,r){var o=document.createElement(e);"script"===e&&(o.src=n,o.async=i||!1,o.defer=i||t||!1,(document.head||document.documentElement).appendChild(o),r&&r())}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.expandQueryString=function(e){var n=window.location.href,i=e.replace(/[[\]]/g,"\\$&"),t=new RegExp("[?&]"+i+"(=([^&#]*)|&|#|$)").exec(n);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}},function(e,n,i){"use strict";function t(e){window.apstag&&e()}Object.defineProperty(n,"__esModule",{value:!0}),n.fetchAmazonBids=function(e,n,i,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=i;if(r&&void 0!==window.innerWidth&&void 0!==i[0][0][0]){for(var d=window.innerWidth,s=-1,u=r.length,l=0;l<u;l++)if(d>=r[l][0]){s=l;break}a=i[s]}t((function(){var i={slotName:n,slotID:e,sizes:a};window.apstag.fetchBids({slots:[i]},(function(){window.apstag.setDisplayBids(),o&&o()}))}))},n.queueAmazonCommand=t},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resizeListeners=n.sizemapListeners=void 0,n.prepareSizeMaps=function(e,n){var i=[],t=[],r=[];return(n.length?n:null).forEach((function(n,o){i.push([n,e[o]]),-1===t.indexOf(n[0])&&(t.push(n[0]),r.push(!1))})),t.sort((function(e,n){return e-n})),{mapping:i,breakpoints:t,correlators:r}},n.parseSizeMappings=s,n.runResizeEvents=u,n.setResizeListener=function(e){var n=e.id,i=e.correlators;d[n]=(0,t.debounce)(u(e),250),window.addEventListener("resize",d[n]),a[n]={listener:d[n],correlators:i}};var t=i(9),r=i(1),o=i(0),a=n.sizemapListeners={},d=n.resizeListeners={};function s(e){try{var n=[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight],i=e.filter((function(e){return e[0][0]<=n[0]&&e[0][1]<=n[1]})),t=i.length>0?i[0][1]:[];return t.length>0&&t[0].constructor!==Array&&(t=[t]),t}catch(n){return e[e.length-1][1]}}function u(e){var n=void 0,i=!1;return function(){for(var t=e.ad,d=e.breakpoints,u=e.id,l=e.bidding,c=e.mapping,p=e.slotName,f=e.wrapper,g=e.prerender,b=window.innerWidth,m=void 0,h=void 0,v=0;v<d.length;v++){if(m=d[v],h=d[v+1],b>m&&(b<h||!h)&&n!==m||b===m&&!i){n=m,i=!0;var w=s(c),y={adUnit:t,adSlot:p,adDimensions:w,adId:u};l.prebid&&l.prebid.enabled||l.amazon&&l.amazon.enabled?(0,r.fetchBids)({ad:t,id:u,slotName:p,dimensions:w,bidding:l,wrapper:f,prerender:g,correlator:a[u].correlators[v],breakpoints:d}):(0,o.refreshSlot)({ad:t,correlator:a[u].correlators[v],prerender:g,info:y})}a[u].correlators[v]=!0}}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.debounce=function(e,n){var i=void 0;return function(){for(var t=this,r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(i),i=setTimeout((function(){i=null,e.apply(t,o)}),n)}}}])}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = Fusion.Static;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


const identity = function (item) { return item }
const Fusion = window.Fusion = window.Fusion || {}
const Layout = Fusion.Layout || identity
const Quarantine = Fusion.Quarantine || identity
const components = Fusion.components = Fusion.components || {}
components['layouts'] = components['layouts'] || {}
components['features'] = components['features'] || {}
components['chains'] = components['chains'] || {}
components['layouts']['ArticleRightRail'] = Layout(Fusion.unpack(__webpack_require__(115)))
components['features']['global/MastheadNavbar'] = Quarantine(Fusion.unpack(__webpack_require__(113)))
components['features']['global/MastheadHeader'] = Quarantine(Fusion.unpack(__webpack_require__(110)))
components['features']['global/Ad'] = Quarantine(Fusion.unpack(__webpack_require__(13)))
components['features']['global/Spacer'] = Fusion.Static
components['features']['Article/Header'] = Fusion.Static
components['features']['global/ShareButtons'] = Quarantine(Fusion.unpack(__webpack_require__(111)))
components['features']['Article/Body'] = Quarantine(Fusion.unpack(__webpack_require__(112)))
components['features']['Article/Tags'] = Fusion.Static
components['features']['global/TitleBar'] = Fusion.Static
components['features']['global/FeedList'] = Quarantine(Fusion.unpack(__webpack_require__(114)))
components['features']['global/MostRead'] = Fusion.Static
components['features']['global/FeedColumn'] = Fusion.Static
components['features']['global/Footer'] = Fusion.Static
components['chains']['DefaultChain'] = Quarantine(Fusion.unpack(__webpack_require__(116)))
Fusion.contextPath = '/pf'
Fusion.deployment = '457'
Fusion.layout = 'ArticleRightRail'
Fusion.metas = {"cannonicalUrl":{"value":"https://www.infobae.com{{content.canonical_url}}","html":true},"dfpPath":{"value":"","html":true},"og:Image":{"value":"{{content.promo_images.basic.url}}","html":true},"fb:pages2":{"value":"436205896728888","html":true},"dfpPageType":{"value":"nota","html":true},"og:type":{"value":"article","html":true},"og:title":{"value":"{{content.headlines.basic}}","html":true},"external":{"value":"true","html":true},"fb:pages3":{"value":"142361755806396","html":true},"adFormatIds":{"value":"30579,40599,40600,40601,40602,40606,40605,41738,40597,40616,40614,40615,40607,40608,40609,40610,40611,40598,32542","html":true},"keywords":{"value":"{{content.taxonomy.(seo_keywords)}}","html":true},"siteId":{"value":"98698","html":true},"title":{"value":"{{content.headlines.basic}}","html":true},"fb:pages1":{"value":"34839376970","html":true},"autoRefresh":{"value":"10:00","html":true},"authorName":{"value":"{{content.credits.by[0].name}}","html":true},"description":{"value":"{{content.description.basic}}","html":true}}
Fusion.outputType = 'default'
Fusion.template = 'template/Tendencias-article'
Fusion.tree = {"collection":"layouts","type":"ArticleRightRail","props":{"key":"ArticleRightRail","collection":"layouts","type":"ArticleRightRail"},"children":[{"collection":"sections","props":{"key":0,"collection":"sections","id":0},"children":[]},{"collection":"sections","props":{"key":1,"collection":"sections","id":1},"children":[{"collection":"features","type":"global/MastheadNavbar","props":{"key":"0fUOe03iEwJi5Mw","collection":"features","type":"global/MastheadNavbar","id":"0fUOe03iEwJi5Mw","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"customTitle":"This is a test of the live bar","menu_id":{"contentService":"site-service-menu","contentConfigValues":{"menu_id":"tendencias"}},"logoSiteTitle":"Infobae","showBar":false,"logoImage":"https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg","showShareLinks":true,"youtubeId":"veLGuwMymY4","logoLink":"https://www.infobae.com/?noredirect"},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}}]},{"collection":"sections","props":{"key":2,"collection":"sections","id":2},"children":[{"collection":"features","type":"global/MastheadHeader","props":{"key":"0fUBBh4iEwJi5yR","collection":"features","type":"global/MastheadHeader","id":"0fUBBh4iEwJi5yR","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"siteLinkURL5":"https://www.infobae.com/cultura/","siteLinkName3":"DEPORTES","navLinkName7":"Psicología (+)","siteLinkName6":"MIX5411","logoSiteTitle":"Infobae","siteLinkURL1":"https://www.infobae.com/america/","navLinkURL1":"https://www.infobae.com/ultimas-noticias/","navNewsletterURL":"https://www.infobae.com/newsletter/","navLinkURL6":"https://www.infobae.com/salud/","navLinkName3":"Tests y trivias","navLinkURL7":"https://www.infobae.com/tendencias/psicologia-positiva/","navLinkName6":"Salud","siteLinkName2":"TELESHOW","siteLinkURL4":"https://www.infobae.com/tendencias/","navLinkName2":"Deco & Design","logoImage":"https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg","navLinkURL3":"https://www.infobae.com/tests/","navLinkName5":"Lifestyle","navLinkName1":"Últimas Noticias","siteLinkURL3":"https://www.infobae.com/deportes/","siteLinkName1":"AMÉRICA","navLinkURL4":"https://www.infobae.com/la-vidriera-de-infobae/","siteLinkName4":"TENDENCIAS","siteLinkURL6":"https://www.infobae.com/mix5411/","logoLink":"https://www.infobae.com/?noredirect","siteLinkName5":"CULTURA","navLinkName4":"Vidriera","navLinkURL5":"https://www.infobae.com/tendencias/lifestyle/","siteLinkURL2":"https://www.infobae.com/teleshow/","navLinkURL2":"https://www.infobae.com/tendencias/deco-design/","enableAds":true},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}}]},{"collection":"sections","props":{"key":3,"collection":"sections","id":3},"children":[{"collection":"features","type":"global/Ad","props":{"key":"0fvdQb6iEwJi5at","collection":"features","type":"global/Ad","id":"0fvdQb6iEwJi5at","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"desktop","type":"exp_push_1_970x250"},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"chains","type":"DefaultChain","props":{"key":"0fZLGU6iEwJi5ER","collection":"chains","type":"DefaultChain","id":"0fZLGU6iEwJi5ER","name":null,"customFields":{"alignment":"center"},"displayProperties":{"columns":{}}},"children":[]},{"collection":"features","type":"global/Spacer","props":{"key":"0fKczK7iEwJi5sv","collection":"features","type":"global/Spacer","id":"0fKczK7iEwJi5sv","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginTop":15},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"Article/Header","props":{"key":"0fcOTP8iEwJi5Hn","collection":"features","type":"Article/Header","id":"0fcOTP8iEwJi5Hn","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{},"displayProperties":{},"localEdits":{},"variants":{}}}]},{"collection":"sections","props":{"key":4,"collection":"sections","id":4},"children":[{"collection":"features","type":"global/Spacer","props":{"key":"0fKoZ9biEwJi5oD","collection":"features","type":"global/Spacer","id":"0fKoZ9biEwJi5oD","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":15,"marginTop":15},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/ShareButtons","props":{"key":"0ft5VcciEwJi5pl","collection":"features","type":"global/ShareButtons","id":"0ft5VcciEwJi5pl","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"showFacebookButton":true,"showTwitterButton":true,"showWhatsappButton":true},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"Article/Body","props":{"key":"0f08WfdiEwJi5sH","collection":"features","type":"Article/Body","id":"0f08WfdiEwJi5sH","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"numberOfAds":1,"afterWordCount":150,"minimumWordCount":100,"showWordCount":false},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"Article/Tags","props":{"key":"0fAvojeiEwJi5oH","collection":"features","type":"Article/Tags","id":"0fAvojeiEwJi5oH","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/ShareButtons","props":{"key":"0faCCmfiEwJi5ZD","collection":"features","type":"global/ShareButtons","id":"0faCCmfiEwJi5ZD","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"showFacebookButton":true,"showTwitterButton":true,"showWhatsappButton":true},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"0f8c2ogiEwJi5j6","collection":"features","type":"global/Spacer","id":"0f8c2ogiEwJi5j6","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":13},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"chains","type":"DefaultChain","props":{"key":"0f93NEjiEwJi5lD","collection":"chains","type":"DefaultChain","id":"0f93NEjiEwJi5lD","name":null,"customFields":{"widescreenColumns":6,"desktopColumns":6,"alignment":"center","mobileColumns":1,"tabletColumns":6},"displayProperties":{"columns":{}}},"children":[{"collection":"features","type":"global/Ad","props":{"key":"0fBwGUhiEwJi5yU","collection":"features","type":"global/Ad","id":"0fBwGUhiEwJi5yU","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"left_1_300x250"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"0fd26WiiEwJi59I","collection":"features","type":"global/Ad","id":"0fd26WiiEwJi59I","name":"global-Ad-0","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"middle_1_300x250"},"displayProperties":{},"localEdits":{},"variants":{}}}]},{"collection":"features","type":"global/TitleBar","props":{"key":"0fkVKvkiEwJi5jL","collection":"features","type":"global/TitleBar","id":"0fkVKvkiEwJi5jL","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"url":"https://www.infobae.com/ultimas-noticias/","titleBarType":"none","textAlign":"center","titleBarFontSize":20,"titleBarBackgroundColor":"#DDDDDD","title":"ÚLTIMAS NOTICIAS"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/FeedList","props":{"key":"0fWt4xliEwJi5Rc","collection":"features","type":"global/FeedList","id":"0fWt4xliEwJi5Rc","name":"ultimas-noticias-feed","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"contentSource":{"contentService":"feed-list","contentConfigValues":{"feedParam":"true","feedType":"taxonomy.sites.path:(\"/tendencias\" \"/salud\" \"/america/tendencias\") AND revision.published","feedOffset":"0","feedOrder":"display_date:desc","feedLimit":5}},"readMore":true,"imageAspectRatio":"3:2","desktopDeckLineHeight":"20","color":"#000000","textAlign":"text_align_center","bgColor":"#DCDCDC","mobileDeckLineHeight":"20","title":""},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"0fraozmiEwJi5m3","collection":"features","type":"global/Spacer","id":"0fraozmiEwJi5m3","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":10},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"chains","type":"DefaultChain","props":{"key":"0fu6qWpiEwJi5cL","collection":"chains","type":"DefaultChain","id":"0fu6qWpiEwJi5cL","name":null,"customFields":{"widescreenColumns":6,"desktopColumns":6,"alignment":"center","mobileColumns":1,"tabletColumns":6},"displayProperties":{"columns":{}}},"children":[]},{"collection":"features","type":"global/Spacer","props":{"key":"0fqkM9riEwJi5D5","collection":"features","type":"global/Spacer","id":"0fqkM9riEwJi5D5","name":"global-Spacer-2","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":20},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"f0fFwZn1edhUoR","collection":"features","type":"global/Ad","id":"f0fFwZn1edhUoR","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":true},"customFields":{"display":"all","type":"interstitial_800x600"},"displayProperties":{},"localEdits":{},"variants":{}}}]},{"collection":"sections","props":{"key":5,"collection":"sections","id":5},"children":[{"collection":"features","type":"global/Ad","props":{"key":"0fLLqeviEwJi5A3","collection":"features","type":"global/Ad","id":"0fLLqeviEwJi5A3","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"right_1_300x600"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"chains","type":"DefaultChain","props":{"key":"0fSq1WviEwJi5zU","collection":"chains","type":"DefaultChain","id":"0fSq1WviEwJi5zU","name":null,"customFields":{"widescreenColumns":4,"desktopColumns":4,"alignment":"center","mobileColumns":1,"tabletColumns":4},"displayProperties":{"columns":{}}},"children":[]},{"collection":"features","type":"global/Spacer","props":{"key":"0f1vaMwiEwJi5sa","collection":"features","type":"global/Spacer","id":"0f1vaMwiEwJi5sa","name":"global-Spacer-1","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":10},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/MostRead","props":{"key":"0fjlfQxiEwJi5wo","collection":"features","type":"global/MostRead","id":"0fjlfQxiEwJi5wo","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"labelImageUrl":"","labelImageHeight":"25px","labelText":"MÁS LEÍDAS EN TENDENCIAS","labelImageWidth":"","content":{"contentService":"most-read","contentConfigValues":{"limit":"5","category":"tendencias"}}},"displayProperties":{},"localEdits":{"2400cf7b24b2c6cd8a3d78e70163af972d10487dd9299e78d03a76ec47b5a117":{"content_elements":{"undefined":{"headlines":{"basic":"El virólogo que ganó el premio Nobel por descubrir el VIH aseguró que el nuevo coronavirus fue creado en un laboratorio"}}}},"items":{}},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"0fpNeRyiEwJi5Fy","collection":"features","type":"global/Spacer","id":"0fpNeRyiEwJi5Fy","name":"global-Spacer-1-0","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":10,"marginTop":10},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"0fbpBkAiEwJi5Hj","collection":"features","type":"global/Ad","id":"0fbpBkAiEwJi5Hj","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"right_2_300x600"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"0feGoRBiEwJi5gj","collection":"features","type":"global/Spacer","id":"0feGoRBiEwJi5gj","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":20},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/MostRead","props":{"key":"0fiwKSGiEwJi5j6","collection":"features","type":"global/MostRead","id":"0fiwKSGiEwJi5j6","name":"global-mostread-infobae","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"labelImageUrl":"https://www.infobae.com/resources/assets/img/logo_infobae_naranja.svg","labelImageHeight":"20px","labelText":"MÁS LEÍDAS EN","labelImageWidth":"","content":{"contentService":"most-read","contentConfigValues":{"limit":"5","category":"argentina"}}},"displayProperties":{},"localEdits":{"2400cf7b24b2c6cd8a3d78e70163af972d10487dd9299e78d03a76ec47b5a117":{"content_elements":{"undefined":{"headlines":{"basic":"El virólogo que ganó el premio Nobel por descubrir el VIH aseguró que el nuevo coronavirus fue creado en un laboratorio"}}}},"items":{}},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"f0f34LXrS6KL2Un","collection":"features","type":"global/Spacer","id":"f0f34LXrS6KL2Un","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginBottom":20,"pbInternal_cloneId":"f0f34LXrS6KL2Un"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"0fgUDjEiEwJi5Ql","collection":"features","type":"global/Ad","id":"0fgUDjEiEwJi5Ql","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"right_3_300x250"},"displayProperties":{},"localEdits":{},"variants":{}}}]},{"collection":"sections","props":{"key":6,"collection":"sections","id":6},"children":[{"collection":"features","type":"global/Spacer","props":{"key":"0fOOIbIiEwJi5pc","collection":"features","type":"global/Spacer","id":"0fOOIbIiEwJi5pc","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginTop":10},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"0fcDedKiEwJi5bP","collection":"features","type":"global/Ad","id":"0fcDedKiEwJi5bP","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"desktop","type":"exp_push_2_970x250"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"0fav6MLiEwJi5X0","collection":"features","type":"global/Spacer","id":"0fav6MLiEwJi5X0","name":"global-Spacer-0","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginTop":10},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"chains","type":"DefaultChain","props":{"key":"0fgkjh8jEwJi5d2","collection":"chains","type":"DefaultChain","id":"0fgkjh8jEwJi5d2","name":"teleshow-footer","customFields":{},"displayProperties":{"columns":{}}},"children":[{"collection":"features","type":"global/FeedColumn","props":{"key":"0fPt5xXqOrf-c-c","collection":"features","type":"global/FeedColumn","id":"0fPt5xXqOrf-c-c","name":"ultimasnoticias","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"tabletContainerColumns":4,"contentSource":{"contentService":"feed-column","contentConfigValues":{"feedParam":"true","feedType":"taxonomy.sites.path:(\"/politica\" \"/sociedad\" \"/economia\" \"/tecno\" \"/tendencias\" \"/salud\" \"/series-peliculas\" \"/autos\" \"/turismo\" \"/cultura\" \"/grandes-libros\" \"/vidriera\" \"/fotos\") AND revision.published","feedOffset":"0","feedOrder":"display_date:desc","feedLimit":"5"}},"columnBorder":true,"label":"<a href=\"https://www.infobae.com/ultimas-noticias/\"><span style=\"color: #D91023;\"><strong>ÚLTIMAS NOTICIAS</strong></span></a>","widescreenContainerColumns":4,"mobileContainerColumns":1,"desktopContainerColumns":4},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"global/FeedColumn","props":{"key":"0fOVk3YqOrU-c-c","collection":"features","type":"global/FeedColumn","id":"0fOVk3YqOrU-c-c","name":"america","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"tabletContainerColumns":4,"contentSource":{"contentService":"feed-column","contentConfigValues":{"feedParam":"true","feedType":"taxonomy.sites.path:( \"/america\" AND NOT \"/america/deportes\" AND NOT \"/america/portadas\" AND NOT \"/america/entretenimiento\") AND revision.published","feedOffset":"0","feedOrder":"display_date:desc","feedLimit":"5"}},"columnBorder":true,"label":"<a href=\"https://www.infobae.com/america/\"><img src=\"https://d2xe9cfud2dvf.cloudfront.net/Logos/america.svg\" style=\"height:19px; margin-top:-6px\" alt=\"logo-infobae-america\"></a>","widescreenContainerColumns":4,"mobileContainerColumns":1,"desktopContainerColumns":4},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"global/FeedColumn","props":{"key":"0fp2AoYqOrz-c-c","collection":"features","type":"global/FeedColumn","id":"0fp2AoYqOrz-c-c","name":"america-0","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"tabletContainerColumns":4,"contentSource":{"contentService":"feed-column","contentConfigValues":{"feedParam":"true","feedType":"taxonomy.sites.path:( \"/teleshow\" \"/america/entretenimiento\" \"/series-peliculas\") AND revision.published","feedOffset":"0","feedOrder":"display_date:desc","feedLimit":"5"}},"columnBorder":true,"label":"<a href=\"https://www.infobae.com/teleshow/\"><img src=\"https://d2xe9cfud2dvf.cloudfront.net/Logos/teleshow.svg\" style=\"height:18px; margin-top:-7px\" alt=\"logo-teleshow\"></a>","widescreenContainerColumns":4,"mobileContainerColumns":1,"desktopContainerColumns":4},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}}]},{"collection":"features","type":"global/Ad","props":{"key":"0frdSfOiEwJi5F5","collection":"features","type":"global/Ad","id":"0frdSfOiEwJi5F5","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"desktop","type":"exp_push_3_970x250"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Spacer","props":{"key":"f0foCYW6ntJL1ER","collection":"features","type":"global/Spacer","id":"f0foCYW6ntJL1ER","name":"global-Spacer-0-1","contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"border":"none","marginTop":10,"pbInternal_cloneId":"f0foCYW6ntJL1ER"},"displayProperties":{},"localEdits":{},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"0fBcEnSiEwJi5GW","collection":"features","type":"global/Ad","id":"0fBcEnSiEwJi5GW","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"desktop","type":"exp_push_4_970x250"},"displayProperties":{},"localEdits":{},"variants":{}}}]},{"collection":"sections","props":{"key":7,"collection":"sections","id":7},"children":[{"collection":"features","type":"global/Footer","props":{"key":"0fuoul9jEwJi5TE","collection":"features","type":"global/Footer","id":"0fuoul9jEwJi5TE","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"instagramLink":"https://www.instagram.com/Infobae/","rssLink":"https://www.infobae.com/argentina-rss.xml","textCopyright":"Todos Los Derechos Reservados © 2020 Infobae","youtubeLink":"https://www.youtube.com/c/infobae","twitterLink":"https://twitter.com/Infobae/","facebookLink":"https://www.facebook.com/Infobae/"},"displayProperties":{},"localEdits":{"items":{}},"variants":{}}},{"collection":"features","type":"global/Ad","props":{"key":"0fBNHmajEwJi5MA","collection":"features","type":"global/Ad","id":"0fBNHmajEwJi5MA","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"zocalo_1x1"},"displayProperties":{},"localEdits":{},"variants":{}}}]},{"collection":"sections","props":{"key":8,"collection":"sections","id":8},"children":[{"collection":"chains","type":"DefaultChain","props":{"key":"0fhe0QcjEwJi5mU","collection":"chains","type":"DefaultChain","id":"0fhe0QcjEwJi5mU","name":null,"customFields":{"alignment":"default"},"displayProperties":{"columns":{}}},"children":[{"collection":"features","type":"global/Ad","props":{"key":"0fU8V7cjEwJi5Ex","collection":"features","type":"global/Ad","id":"0fU8V7cjEwJi5Ex","name":null,"contentConfig":{"contentService":"","contentConfigValues":{},"inherit":false},"customFields":{"display":"all","type":"megalateral_250x600"},"displayProperties":{},"localEdits":{},"variants":{}}}]}]}]}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype=__webpack_require__(49),nativeKeys=__webpack_require__(65),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var r=[];for(var t in Object(e))hasOwnProperty.call(e,t)&&"constructor"!=t&&r.push(t);return r}module.exports=baseKeys;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var overArg=__webpack_require__(66),nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

function overArg(r,e){return function(n){return r(e(n))}}module.exports=overArg;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var DataView=__webpack_require__(68),Map=__webpack_require__(75),Promise=__webpack_require__(76),Set=__webpack_require__(77),WeakMap=__webpack_require__(78),baseGetTag=__webpack_require__(26),toSource=__webpack_require__(54),mapTag="[object Map]",objectTag="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap),getTag=baseGetTag;(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map)!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set)!=setTag||WeakMap&&getTag(new WeakMap)!=weakMapTag)&&(getTag=function(e){var a=baseGetTag(e),t=a==objectTag?e.constructor:void 0,r=t?toSource(t):"";if(r)switch(r){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return a}),module.exports=getTag;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(23),root=__webpack_require__(17),DataView=getNative(root,"DataView");module.exports=DataView;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction=__webpack_require__(50),isMasked=__webpack_require__(72),isObject=__webpack_require__(53),toSource=__webpack_require__(54),reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto=Object.prototype,funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){return!(!isObject(e)||isMasked(e))&&(isFunction(e)?reIsNative:reIsHostCtor).test(toSource(e))}module.exports=baseIsNative;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol=__webpack_require__(51),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(t){var o=hasOwnProperty.call(t,symToStringTag),r=t[symToStringTag];try{t[symToStringTag]=void 0;var a=!0}catch(t){}var e=nativeObjectToString.call(t);return a&&(o?t[symToStringTag]=r:delete t[symToStringTag]),e}module.exports=getRawTag;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

var objectProto=Object.prototype,nativeObjectToString=objectProto.toString;function objectToString(t){return nativeObjectToString.call(t)}module.exports=objectToString;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData=__webpack_require__(73),maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}module.exports=isMasked;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var root=__webpack_require__(17),coreJsData=root["__core-js_shared__"];module.exports=coreJsData;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

function getValue(e,u){return null==e?void 0:e[u]}module.exports=getValue;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(23),root=__webpack_require__(17),Map=getNative(root,"Map");module.exports=Map;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(23),root=__webpack_require__(17),Promise=getNative(root,"Promise");module.exports=Promise;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(23),root=__webpack_require__(17),Set=getNative(root,"Set");module.exports=Set;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var getNative=__webpack_require__(23),root=__webpack_require__(17),WeakMap=getNative(root,"WeakMap");module.exports=WeakMap;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments=__webpack_require__(80),isObjectLike=__webpack_require__(42),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,propertyIsEnumerable=objectProto.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")};module.exports=isArguments;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(26),isObjectLike=__webpack_require__(42),argsTag="[object Arguments]";function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag}module.exports=baseIsArguments;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

var isArray=Array.isArray;module.exports=isArray;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction=__webpack_require__(50),isLength=__webpack_require__(55);function isArrayLike(i){return null!=i&&isLength(i.length)&&!isFunction(i)}module.exports=isArrayLike;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var root=__webpack_require__(17),stubFalse=__webpack_require__(84),freeExports="object"==( false?undefined:_typeof(exports))&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==( false?undefined:_typeof(module))&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)(module)))

/***/ }),
/* 84 */
/***/ (function(module, exports) {

function stubFalse(){return!1}module.exports=stubFalse;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray=__webpack_require__(86),baseUnary=__webpack_require__(87),nodeUtil=__webpack_require__(88),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag=__webpack_require__(26),isLength=__webpack_require__(55),isObjectLike=__webpack_require__(42),argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};function baseIsTypedArray(a){return isObjectLike(a)&&isLength(a.length)&&!!typedArrayTags[baseGetTag(a)]}typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1,module.exports=baseIsTypedArray;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

function baseUnary(n){return function(r){return n(r)}}module.exports=baseUnary;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var freeGlobal=__webpack_require__(52),freeExports="object"==( false?undefined:_typeof(exports))&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==( false?undefined:_typeof(module))&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,freeProcess=moduleExports&&freeGlobal.process,nodeUtil=function(){try{var e=freeModule&&freeModule.require&&freeModule.require("util").types;return e||freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}();module.exports=nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(41)(module)))

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(90)(__webpack_require__(91));

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports=function(t){function i(t,i){"use strict";this.THUMBOR_SECURITY_KEY=t,this.THUMBOR_URL_SERVER=i,this.imagePath="",this.width=0,this.height=0,this.smart=!1,this.fitInFlag=!1,this.withFlipHorizontally=!1,this.withFlipVertically=!1,this.halignValue=null,this.valignValue=null,this.cropValues=null,this.meta=!1,this.filtersCalls=[]}return i.prototype={TOP:"top",MIDDLE:"middle",BOTTOM:"bottom",RIGHT:"right",CENTER:"center",LEFT:"left",setImagePath:function(t){return this.imagePath="/"===t.charAt(0)?t.substring(1,t.length):t,this},getOperationPath:function(){var t=this.urlParts();return 0===t.length?"":t.join("/")+"/"},urlParts:function(){if(!this.imagePath)throw new Error("The image url can't be null or empty.");var t=[];if(this.meta&&t.push("meta"),this.cropValues&&t.push(this.cropValues.left+"x"+this.cropValues.top+":"+this.cropValues.right+"x"+this.cropValues.bottom),this.fitInFlag&&t.push("fit-in"),this.width||this.height||this.withFlipHorizontally||this.withFlipVertically){var i="";this.withFlipHorizontally&&(i+="-"),i+=this.width,i+="x",this.withFlipVertically&&(i+="-"),i+=this.height,t.push(i)}return this.halignValue&&t.push(this.halignValue),this.valignValue&&t.push(this.valignValue),this.smart&&t.push("smart"),this.filtersCalls.length&&t.push("filters:"+this.filtersCalls.join(":")),t},resize:function(t,i){return this.width=t,this.height=i,this.fitInFlag=!1,this},smartCrop:function(t){return this.smart=t,this},fitIn:function(t,i){return this.width=t,this.height=i,this.fitInFlag=!0,this},flipHorizontally:function(){return this.withFlipHorizontally=!0,this},flipVertically:function(){return this.withFlipVertically=!0,this},halign:function(t){if(t!==this.LEFT&&t!==this.RIGHT&&t!==this.CENTER)throw new Error("Horizontal align must be left, right or center.");return this.halignValue=t,this},valign:function(t){if(t!==this.TOP&&t!==this.BOTTOM&&t!==this.MIDDLE)throw new Error("Vertical align must be top, bottom or middle.");return this.valignValue=t,this},metaDataOnly:function(t){return this.meta=t,this},filter:function(t){return this.filtersCalls.push(t),this},crop:function(t,i,h,s){return this.cropValues={left:t,top:i,right:h,bottom:s},this},buildUrl:function(){var i=this.getOperationPath();if(this.THUMBOR_SECURITY_KEY){var h=t("sha1",this.THUMBOR_SECURITY_KEY).update(i+this.imagePath).digest("base64");return h=h.replace(/\+/g,"-").replace(/\//g,"_"),this.THUMBOR_URL_SERVER+"/"+h+"/"+i+this.imagePath}return this.THUMBOR_URL_SERVER+"/unsafe/"+i+this.imagePath}},i};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var inherits=__webpack_require__(43),Base=__webpack_require__(92),Buffer=__webpack_require__(27).Buffer,sha=__webpack_require__(107),ZEROS=Buffer.alloc(128);function Hmac(e,a){Base.call(this,"digest"),"string"==typeof a&&(a=Buffer.from(a));var s="sha512"===e||"sha384"===e?128:64;(this._alg=e,this._key=a,a.length>s)&&(a=sha(e).update(a).digest());a.length<s&&(a=Buffer.concat([a,ZEROS],s));for(var t=this._ipad=Buffer.allocUnsafe(s),r=this._opad=Buffer.allocUnsafe(s),i=0;i<s;i++)t[i]=54^a[i],r[i]=92^a[i];this._hash=sha(e),this._hash.update(t)}inherits(Hmac,Base),Hmac.prototype._update=function(e){this._hash.update(e)},Hmac.prototype._final=function(){var e=this._hash.digest();return sha(this._alg).update(this._opad).update(e).digest()},module.exports=function(e,a){return new Hmac(e=e.toLowerCase(),a)};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer=__webpack_require__(27).Buffer,Transform=__webpack_require__(95).Transform,StringDecoder=__webpack_require__(48).StringDecoder,inherits=__webpack_require__(43);function CipherBase(t){Transform.call(this),this.hashMode="string"==typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}inherits(CipherBase,Transform),CipherBase.prototype.update=function(t,e,r){"string"==typeof t&&(t=Buffer.from(t,e));var i=this._update(t);return this.hashMode?this:(r&&(i=this._toString(i,r)),i)},CipherBase.prototype.setAutoPadding=function(){},CipherBase.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},CipherBase.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},CipherBase.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},CipherBase.prototype._transform=function(t,e,r){var i;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(t){i=t}finally{r(i)}},CipherBase.prototype._flush=function(t){var e;try{this.push(this.__final())}catch(t){e=t}t(e)},CipherBase.prototype._finalOrDigest=function(t){var e=this.__final()||Buffer.alloc(0);return t&&(e=this._toString(e,t,!0)),e},CipherBase.prototype._toString=function(t,e,r){if(this._decoder||(this._decoder=new StringDecoder(e),this._encoding=e),this._encoding!==e)throw new Error("can't switch encodings");var i=this._decoder.write(t);return r&&(i+=this._decoder.end()),i},module.exports=CipherBase;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 94 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(45).EventEmitter;
var inherits = __webpack_require__(20);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(46);
Stream.Writable = __webpack_require__(103);
Stream.Duplex = __webpack_require__(104);
Stream.Transform = __webpack_require__(105);
Stream.PassThrough = __webpack_require__(106);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(30).Buffer;
var util = __webpack_require__(98);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(100);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15), __webpack_require__(28)))

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(60);

/*<replacement>*/
var util = Object.create(__webpack_require__(24));
util.inherits = __webpack_require__(20);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46).Transform


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46).PassThrough


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var exports=module.exports=function(e){e=e.toLowerCase();var r=exports[e];if(!r)throw new Error(e+" is not supported (we accept pull requests)");return new r};exports.sha1=__webpack_require__(108);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var inherits=__webpack_require__(43),Hash=__webpack_require__(109),Buffer=__webpack_require__(27).Buffer,K=[1518500249,1859775393,-1894007588,-899497514],W=new Array(80);function Sha1(){this.init(),this._w=W,Hash.call(this,64,56)}function rotl1(t){return t<<1|t>>>31}function rotl5(t){return t<<5|t>>>27}function rotl30(t){return t<<30|t>>>2}function ft(t,i,r,h){return 0===t?i&r|~i&h:2===t?i&r|i&h|r&h:i^r^h}inherits(Sha1,Hash),Sha1.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},Sha1.prototype._update=function(t){for(var i=this._w,r=0|this._a,h=0|this._b,s=0|this._c,e=0|this._d,n=0|this._e,_=0;_<16;++_)i[_]=t.readInt32BE(4*_);for(;_<80;++_)i[_]=rotl1(i[_-3]^i[_-8]^i[_-14]^i[_-16]);for(var a=0;a<80;++a){var o=~~(a/20),f=rotl5(r)+ft(o,h,s,e)+n+i[a]+K[o]|0;n=e,e=s,s=rotl30(h),h=r,r=f}this._a=r+this._a|0,this._b=h+this._b|0,this._c=s+this._c|0,this._d=e+this._d|0,this._e=n+this._e|0},Sha1.prototype._hash=function(){var t=Buffer.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},module.exports=Sha1;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer=__webpack_require__(27).Buffer;function Hash(t,i){this._block=Buffer.alloc(t),this._finalSize=i,this._blockSize=t,this._len=0}Hash.prototype.update=function(t,i){"string"==typeof t&&(i=i||"utf8",t=Buffer.from(t,i));for(var e=this._block,s=this._blockSize,h=t.length,o=this._len,l=0;l<h;){for(var r=o%s,_=Math.min(h-l,s-r),n=0;n<_;n++)e[r+n]=t[l+n];l+=_,(o+=_)%s==0&&this._update(e)}return this._len+=h,this},Hash.prototype.digest=function(t){var i=this._len%this._blockSize;this._block[i]=128,this._block.fill(0,i+1),i>=this._finalSize&&(this._update(this._block),this._block.fill(0));var e=8*this._len;if(e<=4294967295)this._block.writeUInt32BE(e,this._blockSize-4);else{var s=(4294967295&e)>>>0,h=(e-s)/4294967296;this._block.writeUInt32BE(h,this._blockSize-8),this._block.writeUInt32BE(s,this._blockSize-4)}this._update(this._block);var o=this._hash();return t?o.toString(t):o},Hash.prototype._update=function(){throw new Error("_update must be implemented by subclass")},module.exports=Hash;

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_consumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var fusion_consumer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_consumer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var fusion_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utilities_DateTimeInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _utilities_MastheadLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22);
/* harmony import */ var _properties_index_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
var _properties_index_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(7, 1);
/* harmony import */ var _Ad_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
var _class;function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}for(var MastheadHeader=fusion_consumer__WEBPACK_IMPORTED_MODULE_2___default()(_class=function(e){function t(e){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).state={mastheadMenu:[],isDesktop:!1},r.fetchContent({mastheadMenu:{source:"site-service",query:{hierarchy:"Mastheadnav1"}}}),r}return _inherits(t,react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]),_createClass(t,[{key:"componentDidMount",value:function(){var e=_properties_index_json__WEBPACK_IMPORTED_MODULE_6__["breakpoints"][2].width;window&&window.innerWidth>=e&&this.setState({isDesktop:!0})}},{key:"render",value:function(){for(var e=this.props.customFields,t=void 0===e?{}:e,r=this.state.mastheadMenu,n=[],o=[],a=1;a<8;a+=1)t["navLinkName".concat(a)]&&t["navLinkURL".concat(a)]&&n.push({navLinkName:t["navLinkName".concat(a)],navLinkURL:t["navLinkURL".concat(a)]});for(var i=1;i<=8;i+=1)t["siteLinkName".concat(i)]&&t["siteLinkURL".concat(i)]&&o.push({title:t["siteLinkName".concat(i)],url:t["siteLinkURL".concat(i)]});var s=r&&r.children||[];0===o.length&&s.map((function(e){return o.push({title:e.name,url:e.site.site_url})}));var c=Object(_utilities_MastheadLogo__WEBPACK_IMPORTED_MODULE_5__[/* processDesktopLogoSettings */ "b"])(t,this.props.deployment,this.props.contextPath),l=fusion_properties__WEBPACK_IMPORTED_MODULE_3___default()();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"masthead_header ".concat("column relative"," ").concat("hidden-tablet hidden-mobile"," ").concat("padding_vertical_15px"," width_full")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,this.state.isDesktop&&t.enableAds&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ad_default__WEBPACK_IMPORTED_MODULE_7__["default"],_extends({},{adType:"header_izq_180x70"},{siteProperties:l})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:c.linkUrl,"aria-label":"Logo link"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"site_logo"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:c.src,alt:c.altText,width:c.width,height:c.height}))),this.state.isDesktop&&t.enableAds&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ad_default__WEBPACK_IMPORTED_MODULE_7__["default"],_extends({},{adType:"header_der_180x70"},{siteProperties:l})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"date_links_wrapper | display_flex justify_center"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"date_container | padding_horizontal_15px"},Object(_utilities_DateTimeInfo__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(new Date,!1,!0)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"edition_container"},o.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"uppercase padding_horizontal_5px",href:e.url,key:t},e.title)}))))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"nav_container | padding_vertical_15px border_bottom border_lightgray border_1"},n.map((function(e,t){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{className:"padding_horizontal_10px color_headline",href:e.navLinkURL,key:t},e.navLinkName)})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:t.navNewsletterURL,className:"pointer nav_newsletter padding_horizontal_5px"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"envelope_icon margin_horizontal_5px"}),"Registrate a nuestro Newsletter"))))}}]),t}())||_class,linksProptypes={},i=1;i<8;i+=1)linksProptypes["navLinkName".concat(i)]=prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.tag({group:"Navigation",label:"Link ".concat(i," Name"),defaultValue:""}),linksProptypes["navLinkURL".concat(i)]=prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.tag({group:"Navigation",label:"Link ".concat(i," URL"),defaultValue:""});for(var siteNavProps={},_i2=1;_i2<=8;_i2+=1)siteNavProps["siteLinkName".concat(_i2)]=prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.tag({group:"Site Information",label:"Site ".concat(_i2," Title"),defaultValue:""}),siteNavProps["siteLinkURL".concat(_i2)]=prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.url.tag({group:"Site Information",label:"Site ".concat(_i2," URL"),defaultValue:""});MastheadHeader.propTypes={customFields:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(_objectSpread({},linksProptypes,{navNewsletterURL:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.tag({group:"Navigation",label:"Newsletter URL",defaultValue:""}),enableAds:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.tag({group:"Ads",name:"Enable Ads",defaultValue:!0})},_utilities_MastheadLogo__WEBPACK_IMPORTED_MODULE_5__[/* logoCustomFields */ "a"],{},siteNavProps))};/* harmony default export */ __webpack_exports__["default"] = (MastheadHeader);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var fusion_prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_consumer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var fusion_consumer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_consumer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ShareBar_children_AmpSocialShare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _ShareBar_children_share_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
var _class;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,o){return e&&_defineProperties(t.prototype,e),o&&_defineProperties(t,o),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ShareButtons=fusion_consumer__WEBPACK_IMPORTED_MODULE_2___default()(_class=function(t){function e(t){var o;return _classCallCheck(this,e),(o=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t)))._buildButton=o._buildButton.bind(_assertThisInitialized(o)),o}return _inherits(e,react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]),_createClass(e,[{key:"_buildButton",value:function(t,e){if("amp-type"===this.props.outputType){var o={className:"share_button ".concat(e),siteUrl:Object(_ShareBar_children_share_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getSiteUrl */ "a"])(this.props),height:"50",type:e.toLowerCase(),width:"auto",showText:!0};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShareBar_children_AmpSocialShare__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],o)}return(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{onClick:t,className:"pointer share_button ".concat(e)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"display_flex row align_items_center justify_center color_white"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:"".concat(e.toLowerCase())}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"hidden-mobile margin_horizontal_5px"},"Compartir en ",e),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"display_none show_mobile margin_horizontal_5px"},"Twitter"===e?"Tweet":"Compartir"))))}},{key:"render",value:function(){var t=this,e=this.props.customFields,o=e.showFacebookButton,r=e.showTwitterButton,n=e.showWhatsappButton;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"buttons_container width_full display_flex justify_space_between"},o&&this._buildButton((function(){return Object(_ShareBar_children_share_helpers__WEBPACK_IMPORTED_MODULE_4__[/* shareFacebook */ "b"])(t.props)}),"Facebook"),r&&this._buildButton((function(){return Object(_ShareBar_children_share_helpers__WEBPACK_IMPORTED_MODULE_4__[/* shareTwitter */ "h"])(t.props)}),"Twitter"),n&&this._buildButton((function(){return Object(_ShareBar_children_share_helpers__WEBPACK_IMPORTED_MODULE_4__[/* shareWhatsApp */ "i"])(t.props)}),"WhatsApp"))}}]),e}())||_class;ShareButtons.propTypes={customFields:fusion_prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({showFacebookButton:fusion_prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.tag({defaultValue:!0,name:"Show Facebook Button",group:"Buttons"}),showTwitterButton:fusion_prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.tag({defaultValue:!0,name:"Show Twitter Button",group:"Buttons"}),showWhatsappButton:fusion_prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.tag({defaultValue:!0,name:"Show Whatsapp Button",group:"Buttons"})})};/* harmony default export */ __webpack_exports__["default"] = (ShareButtons);

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: ./bundle/babel/components/features/global/Ad/default.jsx + 4 modules
var Ad_default = __webpack_require__(13);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(4);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/_children/BlockQuote.jsx
function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,s=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(s[o]=e[o]);return s}var quotePropTypes={classes:external_PropTypes_default.a.string,citation:external_PropTypes_default.a.string,citationClasses:external_PropTypes_default.a.string,type:external_PropTypes_default.a.oneOf(["blockquote","pullquote"]),text:external_PropTypes_default.a.string};var Blockquote=function(e){var t=e.classes,o=void 0===t?null:t,r=e.citation,s=e.citationClasses,l=void 0===s?null:s,c=e.text,a=r?external_react_default.a.createElement("div",{className:"width_full display_flex justify_end"},external_react_default.a.createElement("cite",{className:l},r)):null;return external_react_default.a.createElement("blockquote",{className:o},external_react_default.a.createElement("div",{className:"text"},c),a)};Blockquote.static=!0,Blockquote.propTypes=quotePropTypes;var Pullquote=function(e){var t=e.classes,o=_objectWithoutProperties(e,["classes"]);return external_react_default.a.createElement("aside",{className:t},external_react_default.a.createElement(Blockquote,o))};Pullquote.propTypes=quotePropTypes;
// EXTERNAL MODULE: external "Fusion.environment"
var external_Fusion_environment_ = __webpack_require__(12);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(14);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/Video/amp-type.jsx
var _class;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var VideoAMP=external_Fusion_Consumer_default()(_class=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,external_react_["PureComponent"]),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.description,o=e.envOverride,r=e.heightVideo,n=e.streams,i=e.videoId,s=e.widthVideo,p=e.deployment,a=e.contextPath,c=isEmpty_default()(n)?{height:"300",width:"500"}:n[0],l="localhost"===external_Fusion_environment_["ENVIRONMENT"]||"infobae-sandbox"===external_Fusion_environment_["ENVIRONMENT"]?"sandbox":"prod";return o&&(l=o),external_react_default.a.createElement("div",{className:"article-video | visual__video height_auto width_full"},external_react_default.a.createElement("amp-iframe",{title:"Goldfish Video",width:s||c.width,height:r||c.height,layout:"responsive",sandbox:"allow-scripts allow-same-origin allow-popups",frameborder:"0",src:"https://d2uans147eyg5w.cloudfront.net/".concat(l,"/powaEmbed.html?org=infobae&uuid=").concat(i,"&api=").concat(l)},external_react_default.a.createElement("amp-img",{layout:"responsive",height:430,width:760,src:p("".concat(a,"/resources/images/amp-placeholder.svg")),placeholder:!0})),external_react_default.a.createElement("figcaption",{className:"padding_horizontal_15px margin_vertical_5px"},t))}}]),t}())||_class;VideoAMP.propTypes={videoId:external_PropTypes_default.a.string,description:external_PropTypes_default.a.string,contextPath:external_PropTypes_default.a.string,deployment:external_PropTypes_default.a.func,heightVideo:external_PropTypes_default.a.integer,widthVideo:external_PropTypes_default.a.integer,streams:external_PropTypes_default.a.array,envOverride:external_PropTypes_default.a.string};/* harmony default export */ var amp_type = (VideoAMP);
// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/_children/_rawHTMLAmpHelper.js
var iframeProps=[{name:"layout",value:"responsive"},{name:"sandbox",value:"allow-scripts allow-same-origin allow-popups"},{name:"frameborder",value:"0"},{name:"width",value:"760"}],config=[{name:"Video",idRegex:'class="powa arc-player".+data-uuid="([a-z0-9-]+)"',element:amp_type,idProp:"videoId",otherProps:[{name:"envOverride",value:"prod"}]},{name:"Playbuzz",idRegex:'class="playbuzz".+data-id="([a-z0-9-]+)"',element:"amp-playbuzz",idProp:"data-item",otherProps:[{name:"height",value:500}],requiredScript:external_react_default.a.createElement("script",{async:!0,"custom-element":"amp-playbuzz",src:"https://cdn.ampproject.org/v0/amp-playbuzz-0.1.js"})},{name:"iframe",idRegex:'<iframe.+src="([^"]+)"',element:"amp-iframe",idProp:"src",otherProps:[].concat(iframeProps,[{name:"height",value:"650"}])},{name:"Iframe Facebook Post",idRegex:'<iframe.+src="(https://www.facebook.com/plugins/post.php[?]href=[^"]+)"',element:"amp-iframe",idProp:"src",otherProps:[].concat(iframeProps,[{name:"layout",value:"intrinsic"},{name:"width",value:"400"},{name:"height",value:"700"}])},{name:"Google Maps",idRegex:'<iframe.+src="(https?://(www.)?)?google.com/maps/([^"]+)"',element:"amp-iframe",idProp:"src",otherProps:[].concat(iframeProps,[{name:"height",value:"480"}])},{name:"Flourish",idRegex:'class="flourish-embed flourish.+ data-url="([^"]+)"',element:"amp-iframe",idProp:"src",otherProps:[].concat(iframeProps,[{name:"height",value:"900"}]),requiredBody:external_react_default.a.createElement("amp-iframe",{src:"https://public.flourish.studio/visualisation/1621998/embed",layout:"intrinsic",sandbox:"allow-scripts allow-same-origin allow-popups",frameborder:"0",width:"250",class:"disappear_iframe",height:"1500"})},{name:"Infogram",idRegex:'class="infogram-embed".+data-id="([^"]+)"',element:"amp-iframe",idProp:"src",otherProps:[].concat(iframeProps,[{name:"height",value:"550"}])}];/* harmony default export */ var _rawHTMLAmpHelper = (config);
// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/_children/OembedAMP.js
function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,o=!1,n=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){o=!0,n=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw n}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var fbUrlRegex=/(data-href)\s*=\s*"https:\/\/www.facebook.com([^"]+)"/,instaRegex=/(https?:\/\/(www\.)?)?instagram\.com\/p\/(\w*([-'])?(\w*)?)/,twitterRegex=/(https?:\/\/(www\.)?)?twitter\.com\/(\w*())\/?status?\/([0-9]*)?\/?/,youtubeRegex=/https:\/\/www.youtube.com\/embed\/([\w+\-+]+)["?]/,findType=function(e){if(!e)return null;var t=e.match(instaRegex),r=e.match(twitterRegex),a=e.match(fbUrlRegex),o=e.match(youtubeRegex);switch(!0){case!1==!(t&&t[3]):return"instagram";case!1==!(r&&r[5]):return"twitter";case!1==!(a&&a[2]):return"facebook-post";case!1==!(o&&o[1]):return"youtube";default:return"raw_html"}},OembedAMP=function(e){if(!e.rawOembed)return null;var t=e.subtype,r=e.rawOembed,a=r.width,o=r.height,n=r.url,i=r.html?r.html:r,c=t||findType(i);switch(c){case"facebook-post":case"facebook-video":var s=/width="([0-9]+)"/.exec(i),l=/height="([0-9]+)"/.exec(i),u=i.match(fbUrlRegex),m=a||s&&s[1]||500,h=o||l&&l[1]||200,p=n||u&&u[2],d="facebook-video"===c?{"data-embed-as":"video"}:{};return external_react_default.a.createElement("amp-facebook",_extends({width:m,height:h,layout:"responsive","data-href":"https://www.facebook.com".concat(p)},d));case"twitter":var w=i.match(twitterRegex)[5],f=i.substring(i.indexOf('">')+2,i.indexOf("</blockquote>"));return external_react_default.a.createElement("amp-twitter",{width:"375",height:"10",layout:"responsive","data-tweetid":w},external_react_default.a.createElement("blockquote",{style:{padding:"15px 30px"},placeholder:!0,dangerouslySetInnerHTML:{__html:f}}));case"youtube":var b=i&&i.match(youtubeRegex)[1];return external_react_default.a.createElement("amp-youtube",{"data-videoid":b,layout:"responsive",width:"480",height:"270"});case"instagram":var y=i&&i.match(instaRegex);return y&&y[3]?external_react_default.a.createElement("amp-instagram",{"data-shortcode":y[3],"data-captioned":!0,width:"400",height:"400",layout:"responsive"}):null;case"raw_html":var g="",v={};return _rawHTMLAmpHelper.forEach((function(e){var t=i.match(e.idRegex);if(t){g=e.element;var r=_slicedToArray(t,2);switch(v[e.idProp]=r[1],e.otherProps.forEach((function(e){v[e.name]=e.value})),e.name){case"Infogram":v.src="https://e.infogram.com/".concat(t[1],"?src=embed");break;case"Google Maps":v.src="https://www.google.com/maps/".concat(t[3])}}})),g?external_react_default.a.createElement(g,v):null;default:return null}};OembedAMP.static=!0,OembedAMP.propTypes={rawOembed:external_PropTypes_default.a.any,subtype:external_PropTypes_default.a.string};/* harmony default export */ var _children_OembedAMP = (OembedAMP);
// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/_children/Text.jsx
var Text=function(e){var t=e.classes,r=e.content;return external_react_default.a.createElement("p",{className:t,dangerouslySetInnerHTML:{__html:r}})};Text.static=!0,Text.propTypes={classes:external_PropTypes_default.a.string,content:external_PropTypes_default.a.string};/* harmony default export */ var _children_Text = (Text);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Headline/index.js
var Headline = __webpack_require__(35);

// EXTERNAL MODULE: ./bundle/babel/components/features/global/Image/index.js
var Image = __webpack_require__(19);

// EXTERNAL MODULE: ./bundle/babel/components/features/global/Video/default.jsx + 2 modules
var Video_default = __webpack_require__(39);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/List/index.js
var listItems={unordered:"ul",ordered:"ol",ul:"ul",ol:"ol"},isList=function(e){return"list"===e.type},renderListItem=function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=e.content,r=listItems[s.list_type],l=isList(s);return external_react_default.a.createElement("li",{key:t},external_react_default.a.createElement("span",{dangerouslySetInnerHTML:{__html:i}}),l?external_react_default.a.createElement(List,{key:t,items:s.items,listType:r}):null)},List=function e(t){var s=t.listType,i=void 0===s?"ul":s,r=t.classes,l=t.items,n=void 0===l?[]:l;if(0===n.length)return null;var a=listItems[i]||i;return external_react_default.a.createElement(a,{className:r},n.map((function(t,s){if(isList(t)&&n[s-1]&&!isList(n[s-1]))return null;if(isList(t))return external_react_default.a.createElement(e,{key:s,listType:listItems[t.list_type]||"ul",items:t.items});var i=n[s+1];return renderListItem(t,s,i)})))};List.static=!0,List.propTypes={classes:external_PropTypes_default.a.string,items:external_PropTypes_default.a.array,listType:external_PropTypes_default.a.string};/* harmony default export */ var global_List = (List);
// EXTERNAL MODULE: external "Fusion.Static"
var external_Fusion_Static_ = __webpack_require__(62);
var external_Fusion_Static_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Static_);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/RawHtml/default.jsx
function default_typeof(e){return(default_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function default_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function default_defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function default_createClass(e,t,o){return t&&default_defineProperties(e.prototype,t),o&&default_defineProperties(e,o),e}function default_possibleConstructorReturn(e,t){return!t||"object"!==default_typeof(t)&&"function"!=typeof t?default_assertThisInitialized(e):t}function default_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function default_getPrototypeOf(e){return(default_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function default_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&default_setPrototypeOf(e,t)}function default_setPrototypeOf(e,t){return(default_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var RawHTML=function(e){function t(){return default_classCallCheck(this,t),default_possibleConstructorReturn(this,default_getPrototypeOf(t).apply(this,arguments))}return default_inherits(t,external_react_["PureComponent"]),default_createClass(t,[{key:"componentDidMount",value:function(){this.props.reloadIntagram&&setTimeout((function(){window.instgrm.Embeds.process()}),250),this.props.reloadFacebook&&setTimeout((function(){window.FB.XFBML.parse()}),250),this.props.reloadTwitter&&setTimeout((function(){window.twttr.widgets.load()}),250),"undefined"!=typeof window&&void 0!==window.powaBoot&&document.querySelectorAll(".powa").length>0&&window.powaBoot()}},{key:"render",value:function(){var e=this.props,t=e.customFields,o=e.content,r=e.id,n=t?t.embeddedCode:"",i=o||n,s=i.indexOf("public.flourish.studio")>-1,a=i.indexOf("<script>")>-1;return s||a?external_react_default.a.createElement(external_Fusion_Static_default.a,{id:"raw_html_".concat(r)},external_react_default.a.createElement("div",{className:"margin_1 align_items_center width_full",dangerouslySetInnerHTML:{__html:i}})):external_react_default.a.createElement("div",{className:"margin_1 align_items_center width_full",dangerouslySetInnerHTML:{__html:i}})}}]),t}();RawHTML.propTypes={customFields:external_PropTypes_default.a.shape({embeddedCode:external_PropTypes_default.a.string.tag({name:"Raw HTML and CSS"})}),id:external_PropTypes_default.a.string,content:external_PropTypes_default.a.string,reloadIntagram:external_PropTypes_default.a.bool,reloadFacebook:external_PropTypes_default.a.bool,reloadTwitter:external_PropTypes_default.a.bool};/* harmony default export */ var RawHtml_default = (RawHTML);
// EXTERNAL MODULE: ./bundle/babel/content/utilities/resizer.js + 1 modules
var resizer = __webpack_require__(40);

// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/_children/_bodyElements.js
function _bodyElements_extends(){return(_bodyElements_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var countPharagraphs=0,adDisplayed=0,bodyElements=function(e,t,a,r){0===r&&(countPharagraphs=0,adDisplayed=0);var o="amp-type"===t,s="instagram"===e.subtype,i="facebook-post"===e.subtype,l="twitter"===e.subtype;switch(e.type){case"blockquote":return external_react_default.a.createElement(Blockquote,{classes:"color_figcaption",text:e.content,type:e.type});case"text":var n=null;return 4!==(countPharagraphs+=1)&&7!==countPharagraphs&&9!==countPharagraphs&&11!==countPharagraphs&&13!==countPharagraphs&&15!==countPharagraphs||(adDisplayed+=1,o||(n=external_react_default.a.createElement(Ad_default["default"],{customFields:{display:"all",type:"Ad_".concat(adDisplayed)}}))),external_react_default.a.createElement(external_react_["Fragment"],null,n,external_react_default.a.createElement(_children_Text,{classes:"paragraph",content:e.content}));case"header":return external_react_default.a.createElement(Headline["a" /* default */],{headlinesContainerClasses:"header |",headlineText:e.content,headlineLevel:e.level,overrides:{}});case"list":return external_react_default.a.createElement(global_List,{classes:"list",items:e.items,listType:e.list_type});case"raw_html":case"oembed":case"oembed_response":var c=e.raw_oembed?e.raw_oembed.html:e.content;return o?external_react_default.a.createElement(_children_OembedAMP,{rawOembed:c,subtype:e.subtype}):external_react_default.a.createElement(RawHtml_default,{classes:e.type,content:c,id:e._id||r,reloadIntagram:s,reloadFacebook:i,reloadTwitter:l});case"image":var m=e.height&&e.width?Object(resizer["b" /* selectAspectRatioFromSize */])(e.height,e.width):void 0,d=m?e.resized_params:null;return o?external_react_default.a.createElement(Image["a" /* default */],_bodyElements_extends({aspectRatio:m},e,{addUrl:!1,containerClasses:"amp_visual_image",captionClasses:"padding_vertical_10px",linkClasses:"visual__video",isAmp:o,parentProps:a,resizedParams:d,alt:e.caption||""})):external_react_default.a.createElement(Image["a" /* default */],_bodyElements_extends({aspectRatio:m},e,{addUrl:!1,containerClasses:"visual__image",captionClasses:"padding_vertical_15px padding_horizontal_15px",linkClasses:"visual__video",parentProps:a,resizedParams:d,alt:e.caption||""}));case"video":return o?external_react_default.a.createElement(amp_type,{videoId:e._id,promoImage:e.promo_image,description:lodash_get_default()(e,"description.basic",""),streams:e.streams,heightVideo:430,widthVideo:760}):external_react_default.a.createElement(Video_default["a" /* default */],e);default:return external_react_default.a.createElement(external_react_["Fragment"],null)}};/* harmony default export */ var _bodyElements = (bodyElements);
// EXTERNAL MODULE: ./bundle/babel/components/utilities/Text.js
var utilities_Text = __webpack_require__(36);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/Browser.js
var Browser = __webpack_require__(37);

// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/_children/_bodyElementRules.js
var getElementWordCount=function(e,t){return external_react_default.a.createElement("span",{className:"word_count | color_gray"},"Word Count: (".concat(e.content.split(" ").length," / ").concat(t,")"))},determineElementsToRender=function(e,t,o,r){var n=[];if(e){var m,a=o.customFields,d=a.afterWordCount,l=a.numberOfAds,i=a.minimumWordCount,u=a.showWordCount,s=Object(utilities_Text["a" /* default */])(e),c=0,p=0,f="amp-type"===r;e.forEach((function(e,a){var y=e.type;n.push({type:y,element:_bodyElements(e,r,o,a)}),"text"===y&&(p+=e.content.split(" ").length,(u||"true"===Object(Browser["a" /* default */])("showWordCount"))&&n.push({type:y,element:getElementWordCount(e,p,o)})),l&&d&&i&&a>1&&c<=l-1&&p>=d&&s>=i&&"ad"!==m?(n.push({type:"ad",element:external_react_default.a.createElement(Ad_default["default"],{isAmp:f,siteProperties:t,adType:"inline"})}),c+=1,p=0,m="ad"):m=y}))}return n};/* harmony default export */ var _bodyElementRules = (determineElementsToRender);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/Tag/index.js
var Tag=function(e){var r=e.tagClasses,t=void 0===r?"":r,a=e.tagText,s=e.url;return external_react_default.a.createElement("div",{className:t},a&&(s?external_react_default.a.createElement("a",{href:s},a):external_react_default.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))};Tag.static=!0,Tag.propTypes={tagClasses:external_PropTypes_default.a.string,tagLevel:external_PropTypes_default.a.number,tagText:external_PropTypes_default.a.string,tagName:external_PropTypes_default.a.string,overrides:external_PropTypes_default.a.shape({}),aOverrides:external_PropTypes_default.a.shape({}),url:external_PropTypes_default.a.string};/* harmony default export */ var global_Tag = (Tag);
// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Tags/default.jsx
var default_class;function Tags_default_typeof(e){return(Tags_default_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Tags_default_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tags_default_defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Tags_default_createClass(e,t,r){return t&&Tags_default_defineProperties(e.prototype,t),r&&Tags_default_defineProperties(e,r),e}function Tags_default_possibleConstructorReturn(e,t){return!t||"object"!==Tags_default_typeof(t)&&"function"!=typeof t?Tags_default_assertThisInitialized(e):t}function Tags_default_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Tags_default_getPrototypeOf(e){return(Tags_default_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Tags_default_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Tags_default_setPrototypeOf(e,t)}function Tags_default_setPrototypeOf(e,t){return(Tags_default_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ArticleTags=external_Fusion_Consumer_default()(default_class=function(e){function t(){return Tags_default_classCallCheck(this,t),Tags_default_possibleConstructorReturn(this,Tags_default_getPrototypeOf(t).apply(this,arguments))}return Tags_default_inherits(t,external_react_["PureComponent"]),Tags_default_createClass(t,[{key:"render",value:function(){var e=this.props.globalContent;if(e&&Object.getOwnPropertyNames(e).length>0){var t=e.taxonomy.tags;return external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement("div",{className:"article-tags"},external_react_default.a.createElement("div",{className:"related-themes-icon | display_inline_block"}),external_react_default.a.createElement("h3",{className:"related-themes | display_inline_block"},"TEMAS RELACIONADOS"),external_react_default.a.createElement("div",{className:"display_block"},t&&t.map((function(e,t){return external_react_default.a.createElement(global_Tag,{tagClasses:"article-tag | display_inline_block",tagText:e.description||e.text,url:"/tag/".concat(e.slug||e._id,"/"),tagName:"article-tag",key:t})})))))}return null}}]),t}())||default_class;ArticleTags.static=!0,ArticleTags.propTypes={globalContent:external_PropTypes_default.a.object,globalContentConfig:external_PropTypes_default.a.object};/* harmony default export */ var Tags_default = (ArticleTags);
// CONCATENATED MODULE: ./bundle/babel/components/features/Article/Body/default.jsx
var Body_default_class;function Body_default_typeof(e){return(Body_default_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Body_default_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Body_default_defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Body_default_createClass(e,t,r){return t&&Body_default_defineProperties(e.prototype,t),r&&Body_default_defineProperties(e,r),e}function Body_default_possibleConstructorReturn(e,t){return!t||"object"!==Body_default_typeof(t)&&"function"!=typeof t?Body_default_assertThisInitialized(e):t}function Body_default_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Body_default_getPrototypeOf(e){return(Body_default_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Body_default_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Body_default_setPrototypeOf(e,t)}function Body_default_setPrototypeOf(e,t){return(Body_default_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ArticleBody=external_Fusion_Consumer_default()(Body_default_class=function(e){function t(){return Body_default_classCallCheck(this,t),Body_default_possibleConstructorReturn(this,Body_default_getPrototypeOf(t).apply(this,arguments))}return Body_default_inherits(t,external_react_["PureComponent"]),Body_default_createClass(t,[{key:"render",value:function(){var e=this.props.globalContent;if(e&&Object.getOwnPropertyNames(e).length>0){var t=this.props,r=t.siteProperties,o=t.pageType,n=e.content_elements,s=_objectSpread({},this.props,{maxWidth:800}),p=_bodyElementRules(n,r,s,o);return external_react_default.a.createElement(external_react_["Fragment"],null,p.map((function(e,t){return external_react_default.a.createElement(external_react_["Fragment"],{key:"".concat(e.type,"_").concat(t)},e.element)})),this.props.customFields.showTags&&external_react_default.a.createElement(Tags_default,null))}return null}}]),t}())||Body_default_class;ArticleBody.propTypes={globalContent:external_PropTypes_default.a.object,globalContentConfig:external_PropTypes_default.a.object,siteProperties:external_PropTypes_default.a.object,pageType:external_PropTypes_default.a.string,customFields:external_PropTypes_default.a.shape({showTags:external_PropTypes_default.a.bool.tag({group:"Tags",name:"Show Tags",default:!1}),numberOfAds:external_PropTypes_default.a.number.tag({group:"Ads",name:"Number of Ads",default:0}),afterWordCount:external_PropTypes_default.a.number.tag({group:"Ads",name:"After Word Count",default:0}),minimumWordCount:external_PropTypes_default.a.number.tag({group:"Ads",name:"Minimum Article Word Count",default:0}),showWordCount:external_PropTypes_default.a.bool.tag({defaultValue:!1,group:"Ads",name:"Show Word Count",default:!1})})};/* harmony default export */ var Body_default = __webpack_exports__["default"] = (ArticleBody);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.getProperties"
var external_Fusion_getProperties_ = __webpack_require__(10);
var external_Fusion_getProperties_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_getProperties_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash.get/index.js
var lodash_get = __webpack_require__(4);
var lodash_get_default = /*#__PURE__*/__webpack_require__.n(lodash_get);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(21);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);

// EXTERNAL MODULE: external "Fusion.Content"
var external_Fusion_Content_ = __webpack_require__(16);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/MastheadNavbar/_children/SectionNav.jsx
var SectionNav=function(e){var t=lodash_get_default()(e,"menu",{}),n=t.contentService,r=t.contentConfigValues,a=Object(external_Fusion_Content_["useContent"])({source:n,query:{menu_id:r.menu_id}}),o=lodash_get_default()(a,"children",[]);return external_react_default.a.createElement("div",{className:"section-nav ".concat(e.shiftRightClass),ref:e.refNav,style:e.style},external_react_default.a.createElement("ul",{className:"section-menu"},o.map((function(e){return external_react_default.a.createElement("li",{className:"menu-item",key:e.name},external_react_default.a.createElement("a",{className:"link",href:"".concat(e.site.site_url),rel:"noopener noreferrer"},external_react_default.a.createElement("div",{className:"display_inline_block"},e.name)))}))))};SectionNav.static=!0,SectionNav.propTypes={shiftRightClass:external_PropTypes_default.a.string,refNav:external_PropTypes_default.a.oneOfType([external_PropTypes_default.a.func,external_PropTypes_default.a.shape({current:external_PropTypes_default.a.any})]),style:external_PropTypes_default.a.object};/* harmony default export */ var _children_SectionNav = (SectionNav);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/MastheadNavbar/_children/SearchBar.jsx
var SearchBar=function(){return external_react_default.a.createElement("label",{htmlFor:"queryly_toggle"},external_react_default.a.createElement("img",{src:"https://d2xe9cfud2dvf.cloudfront.net/optimized-images/sprite-search-bis.svg",className:"queryly_searchicon_img",alt:"Buscar en Infobae"}))};SearchBar.static=!0;/* harmony default export */ var _children_SearchBar = (SearchBar);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/ShareBar/_children/AmpSocialShare.jsx
var AmpSocialShare = __webpack_require__(33);

// EXTERNAL MODULE: ./bundle/babel/components/features/global/ShareBar/_children/share-helpers.jsx
var share_helpers = __webpack_require__(11);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/ShareBar/default.jsx
var _class;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ShareBar=external_Fusion_Consumer_default()(_class=function(e){function t(e){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).state={isFixed:!1},r._checkShareBarPosition=r._checkShareBarPosition.bind(_assertThisInitialized(r)),r}return _inherits(t,external_react_["PureComponent"]),_createClass(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",lodash_throttle_default()(this._checkShareBarPosition,1e3))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._checkShareBarPosition,1e3)}},{key:"_checkShareBarPosition",value:function(e){var t=this.shareBar.getBoundingClientRect(),r=this.emptyDiv.getBoundingClientRect();t.top<=0&&this.setState({isFixed:!0}),r.top>0&&this.setState({isFixed:!1})}},{key:"buildLink",value:function(e,t,r){var n={className:"".concat(t," white_background"),siteUrl:Object(share_helpers["a" /* getSiteUrl */])(this.props),height:"24",type:t,width:"24"};return"amp-type"!==this.props.outputType&&!this.props.isAmp||"print"===t?external_react_default.a.createElement("div",{className:"logo display_flex align_items_center justify_center ".concat(r),onClick:e},external_react_default.a.createElement("i",{className:"".concat(t)})):external_react_default.a.createElement("div",{className:"logo display_flex align_items_center justify_center ".concat(r)},external_react_default.a.createElement(AmpSocialShare["a" /* default */],n))}},{key:"render",value:function(){var e=this,t=this.state.isFixed,r=this.props,n=r.ampClassName,i=r.emptyDivClassName,o=t?{height:"46px",width:"100%"}:{};return external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement("div",{style:o,ref:function(t){return e.emptyDiv=t},className:i}),external_react_default.a.createElement("div",{className:"share_bar | ".concat(n," width_full display_flex row"),ref:function(t){e.shareBar=t}},this.buildLink((function(){return Object(share_helpers["b" /* shareFacebook */])(e.props)}),"facebook"),this.buildLink((function(){return Object(share_helpers["h" /* shareTwitter */])(e.props)}),"twitter"),this.buildLink((function(){return Object(share_helpers["d" /* shareMail */])(e.props)}),"email"),this.buildLink((function(){return Object(share_helpers["c" /* shareLinkedin */])(e.props)}),"linkedin"),this.buildLink((function(){return Object(share_helpers["e" /* sharePrint */])()}),"print","hidden-tablet hidden-mobile"),this.buildLink((function(){return Object(share_helpers["i" /* shareWhatsApp */])(e.props)}),"whatsapp","hidden_desktop"),this.buildLink((function(){return Object(share_helpers["g" /* shareTelegram */])(e.props)}),"telegram","hidden_desktop"),this.buildLink((function(){return Object(share_helpers["f" /* shareSMS */])(e.props)}),"sms","hidden_desktop")))}}]),t}())||_class;/* harmony default export */ var ShareBar_default = (ShareBar);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/MastheadNavbar/_children/SideMenu.jsx
var SideMenu=function(e){var t=e.classes,n=e.isAmp,a=e.topPosition,c=lodash_get_default()(e,"menu",{}),o=c.contentService,r=c.contentConfigValues,s={top:a},l=o&&r?Object(external_Fusion_Content_["useContent"])({source:"site-service",query:{hierarchy:"desktop-menu",section:"",website:"infobae"}}):[],i=lodash_get_default()(l,"children",[]),m=Object(external_Fusion_Content_["useContent"])({source:o,query:{menu_id:r.menu_id}}),u=lodash_get_default()(m,"children",[]),p=function e(t){return t.map((function(t,a){return external_react_default.a.createElement("li",{key:a,className:"item"},external_react_default.a.createElement("div",{className:"item-container"},external_react_default.a.createElement("a",{className:"link padding_horizontal_10px",href:"".concat(t.site.site_url),rel:"noopener noreferrer"},t.name),t.children&&n&&external_react_default.a.createElement("span",{id:"arrowtoggle_".concat(a),className:"expand-collapse-arrow pointer",role:"button",tabIndex:a,on:"tap:child_menu_".concat(a,".toggleClass(class='open'),\n              arrowtoggle_").concat(a,".toggleClass(class='open')")})),t.children&&external_react_default.a.createElement("ul",{id:"child_menu_".concat(a),className:"child-menu collapsed"},e(t.children)))}))};return external_react_default.a.createElement("nav",{className:"side_menu\n        | font-family height_full fixed col widescreen-3 desktop-3 tablet-3 width_full_mobile ".concat(t),id:"side_menu",style:s},external_react_default.a.createElement("span",{className:"content"},external_react_default.a.createElement("ul",{className:"topSideMenu"},p(i)),external_react_default.a.createElement("hr",{className:"".concat(n?"no_margin":"margin_horizontal_10px")}),external_react_default.a.createElement("ul",{className:"bottomSideMenu"},p(u))))};SideMenu.static=!0,SideMenu.propTypes={classes:external_PropTypes_default.a.string};/* harmony default export */ var _children_SideMenu = (SideMenu);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Ad/default.jsx + 4 modules
var Ad_default = __webpack_require__(13);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/LiveBar/_children/oembed.jsx
function Oembed(e){var t=e.youtubeId,r='\n    <iframe\n      id="ytplayer"\n      type="text/html"\n      title="Youtube Embed"\n      class="'.concat(e.iframeClasses,'"\n      width="560"\n      height="349"\n      src="https://www.youtube.com/embed/').concat(t,'?autoplay=1&fs=1&modestbranding=1&mute=1"\n      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n      allowfullscreen=1\n      frameborder=0>\n    </iframe>\n  ');return external_react_default.a.createElement("div",{className:e.classNames,dangerouslySetInnerHTML:{__html:r}})}Oembed.propTypes={youtubeId:external_PropTypes_default.a.string.isRequired,classNames:external_PropTypes_default.a.string,iframeClasses:external_PropTypes_default.a.string};/* harmony default export */ var oembed = (Oembed);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/LiveBar/default.jsx
function _slicedToArray(e,a){return _arrayWithHoles(e)||_iterableToArrayLimit(e,a)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,a){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,l=!1,i=void 0;try{for(var n,o=e[Symbol.iterator]();!(r=(n=o.next()).done)&&(t.push(n.value),!a||t.length!==a);r=!0);}catch(e){l=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(l)throw i}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function LiveBar(e){var a=_slicedToArray(Object(external_react_["useState"])(!1),2),t=a[0],r=a[1],l=_slicedToArray(Object(external_react_["useState"])(!1),2),i=l[0],n=l[1],o=e.customFields,c=o.showBar,s=o.youtubeId,m=o.customTitle,d=function(e){e.preventDefault(),r(!t)},u=function(e){e.preventDefault(),i||n(!0)},p="liveBar relative display_flex color_white| ".concat(t?"expanded":"");return c&&!i?external_react_default.a.createElement("div",{className:p},external_react_default.a.createElement("div",{className:"liveBanner font-family display_block color_white relative width_full"},external_react_default.a.createElement("div",{className:"live-text background_red"},"EN VIVO"),external_react_default.a.createElement("div",{className:"ctrl relative"},external_react_default.a.createElement("div",{className:"close absolute text_center no_padding",role:"button",onClick:u,onKeyPress:u,tabIndex:0,"aria-label":"Cerrar LiveBar"},external_react_default.a.createElement("i",{className:"close-icon display_block no_margin","aria-hidden":"true"})))),external_react_default.a.createElement("div",{className:"video height_full absolute"},external_react_default.a.createElement(oembed,{classNames:"liveBarVideo",iframeClasses:"relative height_full width_full",youtubeId:s})),external_react_default.a.createElement("div",{className:"headline display_flex column fixed"},external_react_default.a.createElement("div",{className:"title display_flex"},external_react_default.a.createElement("h1",{className:"color_white"},m)),external_react_default.a.createElement("div",{className:"expand-wrapper text_align_left",role:"button","aria-label":"Expandir",onClick:d,onKeyPress:d,tabIndex:0},t?external_react_default.a.createElement("div",{className:"minimize"},external_react_default.a.createElement("h3",{className:"display_inline_block color_white"},"Minimizar"),external_react_default.a.createElement("i",{className:"compress-icon display_inline_block","aria-hidden":"true","aria-label":"Minimizar"})):external_react_default.a.createElement("h2",{className:"expand"},external_react_default.a.createElement("span",{className:"color_white"},"Ampliar"),external_react_default.a.createElement("i",{className:"expand-icon display_inline_block","aria-hidden":"true"}))))):null}LiveBar.propTypes={customFields:external_PropTypes_default.a.shape({showBar:external_PropTypes_default.a.boolean.tag({name:"Show Bar?"}),youtubeId:external_PropTypes_default.a.string.isRequired.tag({name:"YouTube ID"}),customTitle:external_PropTypes_default.a.string.tag({name:"Headline"})}),showBar:external_PropTypes_default.a.boolean,youtubeId:external_PropTypes_default.a.string,customTitle:external_PropTypes_default.a.string};/* harmony default export */ var LiveBar_default = (LiveBar);
// EXTERNAL MODULE: ./bundle/babel/components/utilities/_components.js + 8 modules
var _components = __webpack_require__(25);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/BreakingNews/_children/BreakingNewsLink.js
function BreakingNewsLink_slicedToArray(e,t){return BreakingNewsLink_arrayWithHoles(e)||BreakingNewsLink_iterableToArrayLimit(e,t)||BreakingNewsLink_nonIterableRest()}function BreakingNewsLink_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function BreakingNewsLink_iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}}function BreakingNewsLink_arrayWithHoles(e){if(Array.isArray(e))return e}var BreakingNewsLink=function(e){var t=BreakingNewsLink_slicedToArray(Object(external_react_["useState"])(!1),2),r=t[0],n=t[1],a=function(e){e.preventDefault(),r||n(!0)},i=r?"display_none":"display_flex",l=e.headline,o=e.link,c=e.isLink;return external_react_default.a.createElement("div",{className:"breakingNewsLink font-family width_full\n      padding_horizontal_15px padding_vertical_15px ".concat(i,"\n      justify_space_between align_items_center border_2 border_bottom")},c?external_react_default.a.createElement("a",{href:o},external_react_default.a.createElement("div",{className:"color_white text_align_left"},l," ",external_react_default.a.createElement("i",{className:"circle-arrow-right display_inline_block"}))):external_react_default.a.createElement("div",{className:"color_white text_align_left"},l),external_react_default.a.createElement("div",{className:"close-button display_flex align_items_center\n        justify_center pointer padding_horizontal_5px padding_vertical_5px",role:"button",onClick:a,onKeyPress:a,tabIndex:0},external_react_default.a.createElement("i",{className:"close"})))};BreakingNewsLink.propTypes={headline:external_PropTypes_default.a.string,link:external_PropTypes_default.a.string,isLink:external_PropTypes_default.a.bool};/* harmony default export */ var _children_BreakingNewsLink = (BreakingNewsLink);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/BreakingNews/index.js
var BreakingNews=function(e){var r=e.numberOfAlerts,n=e.alertsWithLink,t=(e.parentPage,e.breakingNews);if(r>0){var a=function(e,r,n,t){if(e)return Object.keys(e).map((function(n,a){if(a+1<=r){var i=t.length>0&&t.includes(a+1);return external_react_default.a.createElement(_children_BreakingNewsLink,{key:a,headline:n,link:"".concat(e[n]),isLink:i})}}))}(t,r,0,function(e){return e?e.split(",").map((function(e){return parseInt(e,10)})).filter((function(e){return!Number.isNaN(e)})):[]}(n)),i=function(e,r){var n,t=[];for(n=e?Object.keys(e).length+1:1;n<=r;n++)t.push(external_react_default.a.createElement(_children_BreakingNewsLink,{key:n,headline:"Breaking news alert #".concat(n)}));return t}(t,r);return external_react_default.a.createElement("div",{className:"breakingNews width_full",key:"breaking-news-bar"},a,i)}return null};var parentPageOptions={"/homepage/":"Homepage","/america/":"America","/teleshow/":"Teleshow"};var parentPageOptionsKeys=Object.keys(parentPageOptions);BreakingNews.propTypes={numberOfAlerts:external_PropTypes_default.a.number,alertsWithLink:external_PropTypes_default.a.string,parentPage:external_PropTypes_default.a.string,breakingNews:external_PropTypes_default.a.object};/* harmony default export */ var global_BreakingNews = (BreakingNews);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Ad/_children/DetectingAdRender.jsx
var DetectingAdRender = __webpack_require__(31);

// EXTERNAL MODULE: ./bundle/babel/properties/index.json
var properties = __webpack_require__(7);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/MastheadLogo.js
var MastheadLogo = __webpack_require__(22);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/MastheadNavbar/default.jsx
var default_class;function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function default_typeof(e){return(default_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function default_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function default_defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function default_createClass(e,t,r){return t&&default_defineProperties(e.prototype,t),r&&default_defineProperties(e,r),e}function default_possibleConstructorReturn(e,t){return!t||"object"!==default_typeof(t)&&"function"!=typeof t?default_assertThisInitialized(e):t}function default_getPrototypeOf(e){return(default_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function default_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function default_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&default_setPrototypeOf(e,t)}function default_setPrototypeOf(e,t){return(default_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Masthead=external_Fusion_Consumer_default()(default_class=function(e){function t(e){var r;default_classCallCheck(this,t),r=default_possibleConstructorReturn(this,default_getPrototypeOf(t).call(this,e));var n=e.customFields,o=n.showBar,a=n.showShareLinks,i=n.youtubeId,s=a?45:0,l=o&&i?150:0;return r.state={isMenuOpen:!1,shiftRight:!1,hideAd:!1,bannerAdRendered:!1,navbarHeight:46+s+l,navbarObserver:null,componentDetectAds:null},r._onScroll=r._onScroll.bind(default_assertThisInitialized(r)),r._onResizeNavbar=r._onResizeNavbar.bind(default_assertThisInitialized(r)),r._toggleMenu=r._toggleMenu.bind(default_assertThisInitialized(r)),r._topBannerAdRendered=r._topBannerAdRendered.bind(default_assertThisInitialized(r)),r.site=external_Fusion_getProperties_default()(),r}return default_inherits(t,external_react_["PureComponent"]),default_createClass(t,[{key:"componentDidMount",value:function(){var e=this;this._onResizeNavbar(),this.setState({navbarObserver:new ResizeObserver(this._onResizeNavbar),componentDetectAds:external_react_default.a.createElement(DetectingAdRender["a" /* default */],{refSection:this.spanDiv,functionIfAdsAppear:this._topBannerAdRendered,isAdmin:this.props.isAdmin})},(function(){return e.state.navbarObserver.observe(e.navbar)})),document.addEventListener("scroll",lodash_throttle_default()(this._onScroll,1e3))}},{key:"componentWillUnmount",value:function(){this.state.navbarObserver.unobserve(this.navbar),document.removeEventListener("scroll",this._onScroll)}},{key:"_onResizeNavbar",value:function(){this.navbar.offsetHeight!==this.state.navbarHeight&&this.setState({navbarHeight:this.navbar.offsetHeight})}},{key:"_onScroll",value:function(){var e=this.navContainer.getBoundingClientRect();this.setState({isMenuOpen:!1,shiftRight:e.top<-150,hideAd:e.top<-150&&window.innerWidth>properties["breakpoints"][2].width})}},{key:"_toggleMenu",value:function(){var e=document.getElementById("siteheader").getClientRects()[0];this.setState({isMenuOpen:!this.state.isMenuOpen,topPosition:"".concat(e.height,"px")})}},{key:"_topBannerAdRendered",value:function(){this.setState({bannerAdRendered:!0})}},{key:"render",value:function(){var e=this,t=this.props.customFields,r=t.menu_id,n=t.showShareLinks,o=t.adOff,a=t.showBar,i=t.youtubeId,s=t.customTitle,l=t.numberOfAlerts,c=t.alertsWithLink,p=t.parentPage,u=t.breakingNews,d=t.navBarBackgroundColor,h=this.props.globalContent,f=lodash_get_default()(h,"taxonomy.sections",[]),g=void 0!==p&&p.replace(/\//g,"").toLowerCase(),m="homepage"===g||f.find((function(e){return g===Object(_components["a" /* convertSpanishCharacters */])(e.name.toLowerCase())})),b=this.state,y=b.isMenuOpen,v=b.shiftRight,_=b.topPosition,w={showBar:a,youtubeId:i,customTitle:s},P=b.hideAd||!this.state.bannerAdRendered?{display:"none"}:{display:"block"},O=Object(MastheadLogo["c" /* processMobileLogoSettings */])(this.props.customFields,this.props.deployment,this.props.contextPath),k={};if(this.logoEl&&v){var S=this.navbar.offsetWidth-this.logoEl.offsetWidth-230;k.width="".concat(S,"px")}else k.width="100%";var R=d||"#fff";return external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement("div",{className:"masthead | absolute display_flex column text_align_center width_full fixed",id:"mastheadnavbar",ref:function(t){e.navbar=t}},external_react_default.a.createElement("div",{className:"siteheader width_full",id:"siteheader",style:{backgroundColor:R}},!o&&external_react_default.a.createElement("div",{className:"navbar-ad-container",style:P,ref:function(t){e.spanDiv=t}},external_react_default.a.createElement(Ad_default["default"],_extends({},{adType:"top_banner_970x80"},{siteProperties:this.site}))),external_react_default.a.createElement("div",{className:"sectionnav-container"},external_react_default.a.createElement("span",{className:"menu | absolute hamburger pointer ".concat(y?"open":"close"),onClick:this._toggleMenu,onKeyDown:this._toggleMenu,role:"button",tabIndex:"-1","aria-label":"Menu"}),external_react_default.a.createElement("a",{href:O.linkUrl,"aria-label":"logo link"},external_react_default.a.createElement("span",{className:"site_logo section-sm absolute ".concat(v?"shift-right left":""),ref:function(t){e.logoEl=t}},external_react_default.a.createElement("img",{src:O.src,alt:O.altText,width:O.width,height:O.height}))),external_react_default.a.createElement(_children_SectionNav,{menu:r,refNav:function(t){e.refNav=t},shiftRightClass:v?"shift-right":"",style:k}),external_react_default.a.createElement(_children_SearchBar,null))),n&&external_react_default.a.createElement(ShareBar_default,null),i&&external_react_default.a.createElement(LiveBar_default,{customFields:w}),l>0&&m&&external_react_default.a.createElement(global_BreakingNews,{numberOfAlerts:l,alertsWithLink:c,parentPage:p,breakingNews:u}),external_react_default.a.createElement(_children_SideMenu,{classes:this.state.isMenuOpen?"slide_open":"slide_closed",menu:r||"default",topPosition:_})),external_react_default.a.createElement("div",{ref:function(t){e.navContainer=t},className:"width_full",style:{height:"".concat(this.state.navbarHeight,"px"),marginBottom:"13px"}}),this.state.componentDetectAds)}}]),t}())||default_class;Masthead.propTypes={customFields:external_PropTypes_default.a.shape(_objectSpread({navBarBackgroundColor:external_PropTypes_default.a.string.tag({group:"Site Menu",label:"Navigation Bar Color"}),menu_id:external_PropTypes_default.a.contentConfig("site-service-menu").tag({group:"Site Menu",label:"Data Configuration"}),adOff:external_PropTypes_default.a.bool.tag({group:"Ad",name:"Turn off ad"}),showShareLinks:external_PropTypes_default.a.bool.tag({label:"Show Share Bar",group:"Share Bar",defaultValue:!0}),showBar:external_PropTypes_default.a.boolean.tag({group:"LiveBar",name:"Show Bar?"}),youtubeId:external_PropTypes_default.a.string.tag({group:"LiveBar",label:"YouTube ID"}),customTitle:external_PropTypes_default.a.string.tag({group:"LiveBar",name:"Headline"}),numberOfAlerts:external_PropTypes_default.a.number.tag({group:"Breaking News",name:"Number of Breaking News alerts",description:"Enter the number of breaking news alerts you want to appear on the page."}),alertsWithLink:external_PropTypes_default.a.string.tag({group:"Breaking News",name:"Alerts that link out",description:"Enter in the alerts that link out as a comma-delimited list\n      (e.g. 2,3 would make the second and third alerts links)."}),parentPage:external_PropTypes_default.a.oneOf(parentPageOptionsKeys).tag({group:"Breaking News",name:"Select parent page",description:"Select the parent page for these breaking news.",labels:parentPageOptions}),breakingNews:external_PropTypes_default.a.kvp.tag({group:"Breaking News",name:"Breaking news",description:"The breaking news headlines and URLs\n        (e.g. key: Breaking news headline , value: breaking-news-url-relative-to-parent-page )."})},MastheadLogo["a" /* logoCustomFields */])),siteProperties:external_PropTypes_default.a.shape({defaultBackgroundColor:external_PropTypes_default.a.string,defaultTextColor:external_PropTypes_default.a.string,siteName:external_PropTypes_default.a.string})};/* harmony default export */ var MastheadNavbar_default = __webpack_exports__["default"] = (Masthead);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__(14);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./bundle/babel/properties/index.json
var properties = __webpack_require__(7);

// EXTERNAL MODULE: ./bundle/babel/node_modules/lazy-child/dist/index.esm.js + 15 modules
var index_esm = __webpack_require__(38);

// CONCATENATED MODULE: ./bundle/babel/components/utilities/Label.js
var Label=function(e){var l=e.data,a=l.labelValue,t=l.labelFontSize,r=l.labelColor,o=l.labelUrl,n=l.labelPosition,s={color:r,fontSize:"".concat(t,"px"),textAlign:n};return a?external_react_default.a.createElement("div",{className:"label-container",style:s},o?external_react_default.a.createElement("a",{href:o},external_react_default.a.createElement("span",{dangerouslySetInnerHTML:{__html:a}})):external_react_default.a.createElement("span",{className:"label-content",dangerouslySetInnerHTML:{__html:a}})):null};Label.static=!0,Label.propTypes={data:external_PropTypes_default.a.shape({labelClasses:external_PropTypes_default.a.string,labelColor:external_PropTypes_default.a.string,labelFontSize:external_PropTypes_default.a.number,labelPosition:external_PropTypes_default.a.string,labelUrl:external_PropTypes_default.a.string,labelValue:external_PropTypes_default.a.string})};/* harmony default export */ var utilities_Label = (Label);
// EXTERNAL MODULE: ./bundle/babel/components/utilities/_configs.js
var _configs = __webpack_require__(2);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_props.js
var _props = __webpack_require__(9);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_components.js + 8 modules
var _components = __webpack_require__(25);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_utils.js
var _utils = __webpack_require__(3);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_constants.js
var _constants = __webpack_require__(6);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/StoryCard/default.jsx
var _class;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var StoryCard=external_Fusion_Consumer_default()(_class=function(e){function t(e){var o;_classCallCheck(this,t),(o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).state={data:{}};var r=e.customFields,a=e.fromContentAPI,n=e.view;return o.view=n||r.view,o.fromContentAPI=Object(_configs["m" /* getContentAPIData */])(_assertThisInitialized(o))||a,o}return _inherits(t,external_react_["PureComponent"]),_createClass(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.classes,r=void 0===o?"":o,a=t.customFields,n=void 0===a?{}:a,i=t.number,s=t.containerClasses,l=t.imageHeight,p=t.imageWidth,d=t.scoreBoardContent,c=this.props.customFields,u=c.labelValue,g=c.labelColor,m=c.labelFontSize,f=c.labelUrl,P=c.labelPosition,y=c.cardItemDesktopPaddingTop,b=void 0===y?0:y,h=c.cardItemDesktopPaddingBottom,C=void 0===h?0:h,_=c.cardItemDesktopPaddingRight,T=void 0===_?0:_,O=c.cardItemDesktopPaddingLeft,v=void 0===O?0:O,k=c.cardItemMobilePaddingTop,w=void 0===k?0:k,L=c.cardItemMobilePaddingBottom,S=void 0===L?0:L,I=c.cardItemMobilePaddingRight,D=void 0===I?0:I,j=c.cardItemMobilePaddingLeft,V=void 0===j?0:j,z=c.desktopDeckLineHeight,R=c.desktopDeckFontSize,H=c.mobileDeckLineHeight,E=c.mobileDeckFontSize,F=c.inHouseAd,M=n?n.embeddedCode:"",A=d||M,x={_top:b,_bottom:C,_right:T,_left:v},N={_top:w,_bottom:S,_right:D,_left:V},B="";Object.keys(x).forEach((function(e){x[e]&&(B="".concat(B," desktop_padding").concat(e,"_").concat(x[e]))})),Object.keys(N).forEach((function(e){N[e]&&(B="".concat(B," mobile_padding").concat(e,"_").concat(N[e]))}));var U={labelValue:u,labelColor:g,labelFontSize:m,labelUrl:f,labelPosition:P},K=Object.assign({},this.props.data?this.props.overrides:n,this.props);[_configs["c" /* defaultDeckClasses */],_configs["d" /* defaultHeadlinesContainerClasses */],K].reduce(Object.assign);var W=this.props.data||this.state.data,q=Object(_utils["c" /* getCardClassesFromCustomFields */])(n,r,this.props,this.view);if(this.view&&(!this.props.data&&this.state.data&&Object.getOwnPropertyNames(W).length>0||this.props.data&&this.props.fromContentAPI)){var G=i?external_react_default.a.createElement("span",{key:"card_".concat(i),className:"number_card absolute | bold"},i):null,J="amp-type"===this.props.outputType,Q=l||(J?"180":"auto"),X=p||(J?"320":"auto"),Y=s||"container",Z=this.props&&this.props.lazyLoad||this.props&&this.props.customFields&&this.props.customFields.lazyLoad,$=external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement("div",{className:"card-wrapper"},external_react_default.a.createElement("div",{className:"height_100".concat(B)},external_react_default.a.createElement("div",{key:G,className:Object(_utils["f" /* trim */])("".concat(r," ").concat(q.cardClasses))},G,u&&external_react_default.a.createElement(utilities_Label,{data:U}),Object(_components["b" /* getStoryCardFromViewName */])(e.props.data||e.fromContentAPI?W:W[0],Object(_utils["f" /* trim */])("card-container ".concat(Y," ").concat(q.borderClass," pointer width_full")),_objectSpread({imgHeight:Q,imgWidth:X,isAmp:J,inHouseAd:F,fontSizeDeckDesktop:R,fontSizeDeckMobile:E,lineHeightDeckDesktop:z,lineHeightDeckMobile:H},K))[e.view](),M&&external_react_default.a.createElement("div",{className:"align_items_center width_full margin_top_10px",dangerouslySetInnerHTML:{__html:A}})))));return Z?external_react_default.a.createElement(index_esm["a" /* default */],{renderPlaceholder:function(e){return external_react_default.a.createElement("div",{ref:e})}},$):$}return this.props.isAdmin?external_react_default.a.createElement("div",{className:Object(_utils["f" /* trim */])("".concat(r," ").concat(q.cardClasses))}):null}}]),t}())||_class;StoryCard.static=!0,StoryCard.propTypes={border:external_PropTypes_default.a.string,classes:external_PropTypes_default.a.string,customFields:external_PropTypes_default.a.shape(_objectSpread({contentAPI:external_PropTypes_default.a.contentConfig("content-api").tag({group:"Data Configuration",name:"Content API"}),labelValue:external_PropTypes_default.a.richtext.tag({group:"Label",name:"Label Value",description:"HTML / image tags accepted"}),labelUrl:external_PropTypes_default.a.string.tag({group:"Label",name:"Label URL"}),labelColor:external_PropTypes_default.a.string.tag({group:"Label",name:"Label color",description:"example: #000000"}),labelFontSize:external_PropTypes_default.a.number.tag({group:"Label",name:"Label Font Size",description:"Number sizes in pixels"}),labelPosition:external_PropTypes_default.a.oneOf(["center","left","right"]).tag({group:"Label",name:"Label Position",labels:{pos_align_center:"Center",pos_align_left:"Left",pos_align_right:"Right"}}),view:external_PropTypes_default.a.oneOf(Object(_components["c" /* getViewNames */])("Video",!1)).tag({defaultValue:_configs["e" /* defaultView */],group:"Card",name:"View"}),author:external_PropTypes_default.a.bool.tag({group:"Card",name:"Show Author"})},Object(_props["c" /* getCardStyleProps */])("Card"),{backgroundColor:external_PropTypes_default.a.string.tag({group:"Card",name:"Background Color"}),border:external_PropTypes_default.a.oneOf(_configs["a" /* borderValues */]).tag({defaultValue:"bottom",group:"Card",name:"Border"}),customImageUrl:external_PropTypes_default.a.string.tag({group:"Card",name:"Custom Image Url"}),customUrl:external_PropTypes_default.a.string.tag({group:"Card",name:"Custom Url"}),lazyLoad:external_PropTypes_default.a.bool.tag({defaultValue:!1,group:"Card",name:"Lazy Load"}),headlineOverlayImage:external_PropTypes_default.a.bool.tag({defaultValue:!1,group:"Headline",name:"Overlay Image"}),overlayHeadlineStyle:external_PropTypes_default.a.oneOf(["black_box","white_box"]).tag({group:"Headline",name:"Overlay Text Style"}),overlayHeadlinePosition:external_PropTypes_default.a.oneOf(["top","bottom"]).tag({group:"Headline",name:"Overlay Text Position"}),cardItemDesktopPaddingTop:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Desktop Padding Top",defaultValue:0}),cardItemDesktopPaddingBottom:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Desktop Padding Bottom",defaultValue:0}),cardItemDesktopPaddingRight:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Desktop Padding Right",defaultValue:0}),cardItemDesktopPaddingLeft:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Desktop Padding Left",defaultValue:0}),cardItemMobilePaddingTop:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Mobile/Tablet Padding Top",defaultValue:0}),cardItemMobilePaddingBottom:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Mobile/Tablet Padding Bottom",defaultValue:0}),cardItemMobilePaddingRight:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Mobile/Tablet Padding Right",defaultValue:0}),cardItemMobilePaddingLeft:external_PropTypes_default.a.oneOf(_constants["d" /* storyCardPaddings */]).tag({group:"Paddings",name:"Mobile/Tablet Padding Left",defaultValue:0}),inHouseAd:external_PropTypes_default.a.bool.tag({group:"Ad",name:"Inhouse ad",defaultValue:!1})},Object(_props["i" /* textElementProps */])("headline","Headline",!0,!1,_constants["a" /* fontSizes */],_constants["c" /* lineHeightSizes */]),{},Object(_props["i" /* textElementProps */])("deck","Deck",!0,!0,_constants["a" /* fontSizes */],_constants["c" /* lineHeightSizes */]),{},Object(_props["i" /* textElementProps */])("byline","Byline",!0),{},Object(_props["f" /* overlayProps */])(),{},Object(_props["d" /* imageProps */])(),{},_props["e" /* imageURLProp */],{},Object(_props["g" /* relatedLinksProps */])(),{},Object(_props["a" /* columnsProps */])("ContainerColumns","Container Columns"),{},Object(_props["h" /* sportScoreboardRawHTMLProps */])())),data:external_PropTypes_default.a.shape({length:external_PropTypes_default.a.string}),lazyLoad:external_PropTypes_default.a.bool,overrides:external_PropTypes_default.a.shape({}),siteProperties:external_PropTypes_default.a.string,view:external_PropTypes_default.a.string};/* harmony default export */ var StoryCard_default = (StoryCard);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/FeedList/_children/LoadMoreButton.jsx
var LoadMoreButton=function(e){return external_react_default.a.createElement("span",null,external_react_default.a.createElement("div",{id:"read-more-".concat(e.indexNum),role:"button",tabIndex:e.indexNum,className:e.classNames,"data-next":e.nextContainerClasses,onClick:e.onClick,onKeyDown:e.onKeyDown},e.text))};LoadMoreButton.propTypes={text:external_PropTypes_default.a.string,indexNum:external_PropTypes_default.a.number,classNames:external_PropTypes_default.a.string,nextContainerClasses:external_PropTypes_default.a.string,onClick:external_PropTypes_default.a.func,onKeyDown:external_PropTypes_default.a.func};/* harmony default export */ var _children_LoadMoreButton = (LoadMoreButton);
// CONCATENATED MODULE: ./bundle/babel/components/features/global/FeedList/default.jsx
var default_class,_temp;function default_typeof(e){return(default_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function default_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function default_defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function default_createClass(e,t,o){return t&&default_defineProperties(e.prototype,t),o&&default_defineProperties(e,o),e}function default_possibleConstructorReturn(e,t){return!t||"object"!==default_typeof(t)&&"function"!=typeof t?default_assertThisInitialized(e):t}function default_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function default_getPrototypeOf(e){return(default_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function default_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&default_setPrototypeOf(e,t)}function default_setPrototypeOf(e,t){return(default_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var FeedList=external_Fusion_Consumer_default()(default_class=_temp=function(e){function t(e){var o;return default_classCallCheck(this,t),(o=default_possibleConstructorReturn(this,default_getPrototypeOf(t).call(this,e)))._getPageContent=function(e){var t=o.props.customFields.contentSource.contentConfigValues,n=t.feedType,r=t.feedParam,i={feedType:n,feedOrder:t.feedOrder,feedParam:r,feedLimit:o.state.feedLimit,feedOffset:o.state.feedOffset};"feed-list-sections"===o.state.contentSource&&(i.sections=o.state.sections),o.fetchContent({data:{source:o.state.contentSource,query:i,transform:e}})},o._buildInfo=function(e){e&&e.content_elements&&o.setState({temp:[].concat(_toConsumableArray(o.state.temp),_toConsumableArray(e.content_elements))})},o.chunkStories=function(e,t){var o,n,r=[];for(o=0,n=e.length;o<n;o+=t)r.push(e.slice(o,o+t));return r},o.loadMore=function(e){e.target.style.display="none",o.setState({feedOffset:o.state.feedOffset+o.state.origLimit},(function(){o._getPageContent(o._buildInfo)}))},o.state=o.initialState,o._getPageContent((function(e){return e&&e.content_elements?e.content_elements:[]})),o}return default_inherits(t,external_react_["PureComponent"]),default_createClass(t,[{key:"componentDidMount",value:function(){this.setState({temp:this.state.data,feedOffset:this.state.feedOffset+this.state.origLimit})}},{key:"render",value:function(){var e=this,t=this.state,o=t.data,n=t.temp,r=t.isAmp,i=isEmpty_default()(n)?o:n,a=isEmpty_default()(i)?{minHeight:"850px"}:{},s=this.props.customFields,l=s.bgColor,c=s.color,p=s.imageAspectRatio,u=void 0===p?properties.aspectRatios[3]:p,f=s.readMore,d=s.textAlign,m=s.title,g=s.desktopDeckLineHeight,y=s.desktopDeckFontSize,_=s.mobileDeckLineHeight,h=s.mobileDeckFontSize,b=_slicedToArray(u.split(":"),2),C=b[0],S=b[1],k="display_block uppercase ".concat(d),O=this.chunkStories(i,this.state.origLimit),T=O.length-1;return external_react_default.a.createElement("div",{className:"feed-list-wrapper ".concat(r?"amp margin_bottom_22px":""),style:a},m&&external_react_default.a.createElement("h2",{style:{color:c,backgroundColor:l},className:k},m),O.map((function(t,o){return external_react_default.a.createElement("div",{key:o,id:"feed-load-container-".concat(o),className:"feed-list-container"},t.map((function(e,t){return external_react_default.a.createElement(StoryCard_default,{containerClasses:"feed-list-card-container",classes:"card | feed-list-card grid\n                    ".concat(0===o&&0===t&&"feedlist_no_padding_top"),data:e,deckClasses:"deck |",fromContentAPI:!0,headlinesContainerClasses:"feed-list-headline | width_full",imageWidth:C,imageHeight:S,isAmp:r,key:t,maxWidth:420,overrides:{deckURL:e.website_url,headlineLevel:2,imageLazyLoad:!0,imageAspectRatio:u,fontSizeDeckDesktop:y,fontSizeDeckMobile:h,lineHeightDeckDesktop:g,lineHeightDeckMobile:_},view:"Headline, Deck, Image"})})),o!==T&&f&&i.length>e.state.origLimit&&r&&external_react_default.a.createElement("span",null,external_react_default.a.createElement("div",{id:"read-more-".concat(o),className:"read-more uppercase background_white text_align_center",tabIndex:o,role:"button",on:"\n                      tap:feed-load-container-".concat(o+1,".toggleClass(class='show'),\n                      read-more-").concat(o,".toggleClass(class='hidden')\n                    ")},"MAS NOTICIAS")),f&&!r&&external_react_default.a.createElement(_children_LoadMoreButton,{text:"MAS NOTICIAS",indexNum:o,classNames:"read-more uppercase background_white text_align_center",nextContainerClasses:"feed-load-container-".concat(o+1),onClick:e.loadMore,onKeyDown:e.loadMore}))})))}},{key:"initialState",get:function(){var e=this.props,t=e.globalContent,o=e.outputType,n=this.props.customFields.contentSource,r=this.props.customFields.readMore,i=n.contentConfigValues.feedOffset,a=n.contentConfigValues.heirarchy||t&&t._id||n.contentConfigValues.sections||"",s="amp-type"===o,l=n.contentConfigValues.feedLimit,c=l;return s&&(r=!1),r&&s&&(l=5),l>=20&&!s&&(l=20),{temp:[],contentSource:n.contentService,feedOffset:parseInt(i,10),feedLimit:parseInt(l,10),origLimit:parseInt(c,10),origOffset:parseInt(i,10),isAmp:s,sections:a}}}]),t}())||default_class;FeedList.propTypes={globalContent:external_PropTypes_default.a.object,outputType:external_PropTypes_default.a.string,customFields:external_PropTypes_default.a.shape({contentSource:external_PropTypes_default.a.contentConfig("content-feed").tag({group:"Data Configuration",name:"Content Source"}),readMore:external_PropTypes_default.a.bool.tag({group:"Display",name:"Read More",description:'Display "Read More" button'}),title:external_PropTypes_default.a.string.tag({group:"Display",name:"Title Heading"}),color:external_PropTypes_default.a.string.tag({group:"Display",name:"Title Heading Color",defaultValue:"#000000",description:"Insert CSS hex values (#000000 default)"}),bgColor:external_PropTypes_default.a.string.tag({group:"Display",name:"Title Heading Backgroud Color",defaultValue:"#FFFFFF",description:"Insert CSS hex values (#FFFFFF default)"}),textAlign:external_PropTypes_default.a.oneOf(["text_align_center","text_align_left","text_align_right"]).tag({group:"Display",name:"Heading Alignment",labels:{text_align_center:"Center",text_align_left:"Left",text_align_right:"Right"},defaultValue:"text_align_left"}),imageAspectRatio:external_PropTypes_default.a.oneOf(properties.aspectRatios).tag({group:"Image",name:"Image Aspect Ratio",defaultValue:properties.aspectRatios[3]}),desktopDeckFontSize:external_PropTypes_default.a.oneOf(_constants["a" /* fontSizes */]).tag({group:"Deck",name:"Font Size Desktop"}),mobileDeckFontSize:external_PropTypes_default.a.oneOf(_constants["a" /* fontSizes */]).tag({group:"Deck",name:"Font Size Tablet and Mobile"}),desktopDeckLineHeight:external_PropTypes_default.a.oneOf(_constants["c" /* lineHeightSizes */]).tag({defaultValue:"20",group:"Deck",name:"Line Height Desktop"}),mobileDeckLineHeight:external_PropTypes_default.a.oneOf(_constants["c" /* lineHeightSizes */]).tag({defaultValue:"20",group:"Deck",name:"Line Height Tablet and Mobile  "})})};/* harmony default export */ var FeedList_default = __webpack_exports__["default"] = (FeedList);

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_utils.js
var _utils = __webpack_require__(3);

// CONCATENATED MODULE: ./bundle/babel/components/layouts/_children/HomeButton.jsx
function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var HomeButton=function(){var e=_slicedToArray(Object(external_react_["useState"])(!1),2),t=e[0],r=e[1],a="display_flex justify_center align_items_center pointer";return t?null:external_react_default.a.createElement("a",{href:"https://www.infobae.com"},external_react_default.a.createElement("span",{className:"homeButton fixed ".concat(a)},external_react_default.a.createElement("i",{className:"homeButton-icon display_block"}),external_react_default.a.createElement("button",{className:"close absolute ".concat(a),onClick:function(e){e.preventDefault(),t||r(!0)},"aria-label":"Close Home Button"},external_react_default.a.createElement("i",{className:"close-icon display_block"}))))};/* harmony default export */ var _children_HomeButton = (HomeButton);
// EXTERNAL MODULE: ./bundle/babel/components/features/global/Ad/_children/DetectingAdRender.jsx
var DetectingAdRender = __webpack_require__(31);

// EXTERNAL MODULE: ./bundle/babel/properties/index.json
var properties = __webpack_require__(7);

// CONCATENATED MODULE: ./bundle/babel/components/layouts/ArticleRightRail.jsx
var _class,_temp;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ArticleRightRail=external_Fusion_Consumer_default()(_class=_temp=function(e){function t(e){var n;return _classCallCheck(this,t),(n=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).resizeSections=function(){n.setState({contentWidth:"widescreen-10 desktop-10",spanWidth:"widescreen-2 desktop-2"})},n.state={contentWidth:"widescreen-12 desktop-12",spanWidth:"display_none",spanMarginLeft:0,componentDetectAds:null,isDesktop:!1},n}return _inherits(t,external_react_["PureComponent"]),_createClass(t,[{key:"componentDidMount",value:function(){var e=properties["breakpoints"][2].width;window&&window.innerWidth>=e&&this.setState({isDesktop:!0})}},{key:"componentDidUpdate",value:function(e,t){!t.isDesktop&&this.state.isDesktop&&this.setState({spanMarginLeft:Object(_utils["a" /* calculateMarginLeft */])(window.innerWidth),componentDetectAds:external_react_default.a.createElement(DetectingAdRender["a" /* default */],{refSection:this.spanDiv,functionIfAdsAppear:this.resizeSections,isAdmin:this.props.isAdmin})})}},{key:"render",value:function(){var e=this,t="col ".concat(this.state.contentWidth," tablet-12 width_full"),n="col hidden-tablet hidden-mobile width_full ".concat(this.state.spanWidth);return external_react_default.a.createElement("div",{className:"article_right_rail | grid width_full"},external_react_default.a.createElement("div",{className:"content_section | ".concat(t)},this.props.children[0],external_react_default.a.createElement("nav",{className:"nav | grid width_full"},this.props.children[1]),external_react_default.a.createElement("div",{className:"top | width_full page-container margin_auto"},this.props.children[2]),external_react_default.a.createElement("section",{className:"main | page-container grid width_full margin_auto margin_vertical_10px"},external_react_default.a.createElement("header",{className:"header | ".concat("col widescreen-12 desktop-12 tablet-12 width_full")},this.props.children[3]),external_react_default.a.createElement("article",{className:"article | ".concat("col widescreen-8 desktop-8 tablet-12 width_full")},this.props.children[4]),external_react_default.a.createElement("aside",{className:"right_rail | ".concat("col widescreen-4 desktop-4 tablet-12 width_full")},this.props.children[5])),external_react_default.a.createElement("div",{className:"bottom | width_full page-container margin_auto"},this.props.children[6]),external_react_default.a.createElement("footer",{className:"footer | grid width_full margin_auto"},this.props.children[7])),this.state.isDesktop&&external_react_default.a.createElement("aside",{className:"span_rail | ".concat(n),style:{marginLeft:this.state.spanMarginLeft}},external_react_default.a.createElement("div",{className:"span_section fixed",ref:function(t){e.spanDiv=t}},this.props.children[8])),external_react_default.a.createElement(_children_HomeButton,null),this.state.componentDetectAds)}}]),t}())||_class;ArticleRightRail.propTypes={children:external_PropTypes_default.a.node,isAdmin:external_PropTypes_default.a.bool},ArticleRightRail.sections=["amp navigation only","nav","top","header","article","right_rail","bottom","footer","span_rail"];/* harmony default export */ var layouts_ArticleRightRail = __webpack_exports__["default"] = (ArticleRightRail);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(0);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "Fusion.Consumer"
var external_Fusion_Consumer_ = __webpack_require__(5);
var external_Fusion_Consumer_default = /*#__PURE__*/__webpack_require__.n(external_Fusion_Consumer_);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_props.js
var _props = __webpack_require__(9);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_utils.js
var _utils = __webpack_require__(3);

// EXTERNAL MODULE: ./bundle/babel/components/utilities/_page.js
var _page = __webpack_require__(8);

// CONCATENATED MODULE: ./bundle/babel/components/features/global/TitleBar/default.jsx
var _class;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach((function(e){_defineProperty(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var TitleBar=external_Fusion_Consumer_default()(_class=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,external_react_["PureComponent"]),_createClass(e,[{key:"render",value:function(){var t="amp-type"===this.props.outputType,e=this.props.customFields,r=e.shadowBox,o=e.title,n=e.textAlign,i=e.titleBarFont,a=e.titleImageURL,l=e.titleImageWidth,p=e.titleImageHeight,c=e.titleImagePaddingTop,s=e.titleImagePaddingBottom,u=e.titleImagePaddingRight,f=e.titleImagePaddingLeft,m=e.url;if(o||a){var y=l||160,b=p||90,d=r?"box_shadow":"",_=this.props||this.props.customFields,g=_.titleBarColor,h=void 0===g?"black":g,P=_.titleBarType,O=void 0===P?"":P,T={fontFamily:i},w={paddingTop:"".concat(c,"px"),paddingBottom:"".concat(s,"px"),paddingRight:"".concat(u,"px"),paddingLeft:"".concat(f,"px")},j={width:"".concat(y,"px"),height:"".concat(b,"px")},v=t?external_react_default.a.createElement("amp-img",{src:a,layout:"intrinsic",height:"".concat(b,"px"),width:"".concat(y,"px"),alt:"Title"}):external_react_default.a.createElement("img",{src:a,style:_objectSpread({},w,{},j),alt:"Title"}),C=external_react_default.a.createElement(external_react_["Fragment"],null,external_react_default.a.createElement("div",null,o),a&&v),x=m?external_react_default.a.createElement("a",{href:m},C):C;return external_react_default.a.createElement("div",{className:Object(_utils["f" /* trim */])("".concat(d," ").concat("title_bar | border_box bold margin_vertical_10px width_full"," ").concat(O," display_inline_block relative")),style:Object(_page["b" /* mapComponentPropsToStyles */])(this.props.customFields,"titleBar")},"accent"===O&&external_react_default.a.createElement("span",{className:"bar | border_bottom border_4 float_left",style:{borderColor:h,width:"30px"}}),external_react_default.a.createElement("div",{className:"".concat("title | background_inherit bold uppercase"," text_align_").concat(n),style:Object(_page["b" /* mapComponentPropsToStyles */])(this.props.customFields,"title")&&T},x),"ruler"===O&&external_react_default.a.createElement("span",{className:"bar | border_bottom border_1 display_inline_block float_left width_full",style:{borderColor:h,marginTop:5.5}}))}return null}}]),e}())||_class;TitleBar.static=!0,TitleBar.propTypes={customFields:external_PropTypes_default.a.shape(_objectSpread({shadowBox:external_PropTypes_default.a.bool.tag({group:"Title",name:"Box Shadow",defaultValue:!1}),url:external_PropTypes_default.a.string.tag({group:"Title",name:"Url"})},Object(_props["j" /* titleBarProps */])("Title"))),title:external_PropTypes_default.a.string,titleBarType:external_PropTypes_default.a.string,titleColor:external_PropTypes_default.a.string,titleFontSize:external_PropTypes_default.a.number};/* harmony default export */ var TitleBar_default = (TitleBar);
// CONCATENATED MODULE: ./bundle/babel/components/chains/DefaultChain.jsx
function DefaultChain_typeof(e){return(DefaultChain_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function DefaultChain_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function DefaultChain_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?DefaultChain_ownKeys(Object(r),!0).forEach((function(t){DefaultChain_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):DefaultChain_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function DefaultChain_defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function DefaultChain_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function DefaultChain_defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function DefaultChain_createClass(e,t,r){return t&&DefaultChain_defineProperties(e.prototype,t),r&&DefaultChain_defineProperties(e,r),e}function DefaultChain_possibleConstructorReturn(e,t){return!t||"object"!==DefaultChain_typeof(t)&&"function"!=typeof t?DefaultChain_assertThisInitialized(e):t}function DefaultChain_assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DefaultChain_getPrototypeOf(e){return(DefaultChain_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function DefaultChain_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&DefaultChain_setPrototypeOf(e,t)}function DefaultChain_setPrototypeOf(e,t){return(DefaultChain_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var DefaultChain=function(e){function t(e){var r;return DefaultChain_classCallCheck(this,t),(r=DefaultChain_possibleConstructorReturn(this,DefaultChain_getPrototypeOf(t).call(this,e))).state={elementStyles:[],styleContainer:{display:"none"}},r}return DefaultChain_inherits(t,external_react_["PureComponent"]),DefaultChain_createClass(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.children.map((function(t,r){var o=e["elem".concat(r)];if(o=(o=o&&o.querySelectorAll(".card,.feed-column-container"))&&o[0]){var n=o&&o.className,i=n.match(/widescreen-(\d+)/),l=n.match(/desktop-(\d+)/),a=n.match(/tablet-(\d+)/),s=n.match(/mobile-(\d+)/);return{widescreen:i&&i[1],desktop:l&&l[1],tablet:a&&a[1],mobile:s&&s[1]}}return null}));this.setState({elementStyles:t,styleContainer:{display:"flex",flexDirection:"column"}})}},{key:"render",value:function(){var e=this,t=this.props.customFields,r=t.alignment,o=t.backgroundColor,n=t.border,i=t.desktopColumns,l=t.flexDirection,a=t.justifyContent,s=t.roundedCorners,c=t.mobileColumns,p=t.tabletColumns,u=t.title,f=t.titleBarBackgroundColor,d=t.titleBarColor,y=t.titleBarFontSize,m=t.titleBarType,b=t.titleColor,_=t.widescreenColumns,h=n&&"none"!==n?"border_".concat(n," border_1"):"",g="column"===l?"display_flex ".concat(l):"display_grid",P=s?"border_radius_5px":"",C="align_items_start ".concat(h," ").concat(g),O="no_padding_mobile ".concat("column"===l?"margin_vertical_10px":""),j=void 0===r||"default"===r?"chain":"alignedChain justify_items_".concat(r),S={justifyContent:a};return external_react_default.a.createElement("div",{style:DefaultChain_objectSpread({backgroundColor:o},this.state.styleContainer),className:"width_full padding_vertical_10px ".concat(P)},u&&external_react_default.a.createElement(TitleBar_default,{title:u,titleBarBackgroundColor:f,titleBarType:m,titleColor:b,titleBarColor:d,titleFontSize:y}),external_react_default.a.createElement("div",{id:this.props.id,className:Object(_utils["f" /* trim */])("".concat(j," | ").concat(C," default width_full chain_column_content"))},1!==this.props.children.length||_||i||p||c?this.props.children.map((function(t,r){var o=e.state.elementStyles[r],n=Object(_utils["d" /* getColumnSizeClasses */])(o&&o.widescreen||_,o&&o.desktop||i,o&&o.tablet||p,o&&o.mobile||c);return external_react_default.a.createElement("div",{key:r,className:"default_chain_col | ".concat(n," display_flex ").concat(O," width_full"),style:DefaultChain_objectSpread({},S),ref:function(t){e["elem".concat(r)]=t}},t)})):this.props.children))}}]),t}();DefaultChain.propTypes={children:external_PropTypes_default.a.array.isRequired,customFields:external_PropTypes_default.a.shape(DefaultChain_objectSpread({},Object(_props["j" /* titleBarProps */])(),{},Object(_props["a" /* columnsProps */])(),{},Object(_props["b" /* flexBoxProps */])("Style Properties"),{backgroundColor:external_PropTypes_default.a.string.tag({group:"Style Properties",name:"Backgroud Color"}),alignment:external_PropTypes_default.a.oneOf(["default","left","center","right"]).tag({group:"Style Properties",defaultValue:"default",name:"Contents Alignment"}),justifyContent:external_PropTypes_default.a.oneOf(["flex-start","center","flex-end"]).tag({group:"Style Properties",defaultValue:"flex-start",name:"Justify Content"}),roundedCorners:external_PropTypes_default.a.bool.tag({defaultValue:!1,group:"Style Properties",name:"Rounded Corners"})})),id:external_PropTypes_default.a.string.isRequired};/* harmony default export */ var chains_DefaultChain = __webpack_exports__["default"] = (DefaultChain);

/***/ })
/******/ ]);
/**/;Fusion.tree.cssHash=null