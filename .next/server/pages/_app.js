"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js
 // import Script from "next/script";

 // import "../global.css";

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("link", {
    href: "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css",
    rel: "stylesheet",
    type: "text/css"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/pics/favicon/apple-touch-icon.png"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/pics/favicon/favicon-32x32.png"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/pics/favicon/favicon-16x16.png"
  }), /*#__PURE__*/external_react_default().createElement("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  })), /*#__PURE__*/external_react_default().createElement(Component, pageProps));
}

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5680));
module.exports = __webpack_exports__;

})();