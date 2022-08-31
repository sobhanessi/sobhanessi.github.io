"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 7930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_WritingsTiles)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./public/theme/theme.js
var theme = __webpack_require__(4241);
;// CONCATENATED MODULE: ./public/database/writings.js
const writings = [{
  title: "داستان پناهندگی من",
  href: "",
  slug: "",
  date: () => new Date(1660849200000),
  author: "سبحان اسفندیاری",
  category: ["پناهندگی"],
  brief: `همیشه دوست داشتم تا بتونم در مورد مسیری که آمدم و اتفاقات تلخ و شیرینی که در این مسیر بر من گذشت را طوری بیان کنم که دیگران هم بتوانند استفاده کنند و همینطور در جایی نیز ثبت بشود.
    در این مسیر خودم به شخصه احساس میکنم که بسیار بزرگ شدم چون اول از همه و مهم تر از بقیه افرادی وارد زندگی من شدند که باعث شدند تفییراتی چه خوب و چه بد در من صورت بپذیرد که به خودی خود من را چندین مرحله و سال به جلو پرتاب کرد.
    به علت حجم بالای مطالب، من مطالب را در چندین پست در همین وبسایت منتشر میکنم`,
  text: "",
  headerImage: "/pics/writings/refugeeStory/refugee.jpg"
}, {
  title: "اولین نوشته من در فرمت جدید وبسایت ام",
  href: "/writings/hello-world!",
  slug: "hello-world!",
  date: () => new Date(1660134600000),
  author: "سبحان اسفندیاری",
  category: ["زندگی"],
  brief: "در این صفحه درباره موضوعات مختلفی از زندگی شخصی و اتفاقات روزمره تا داستان هایی که خودم آنها را خلق کرده ام خواهید خواند.",
  text: `Why am I writing? Short answer, because I like it.
    However there are some lacks in writing skills and there is also language barrier here as well, I might not be a good writer but I can publish some of the things that I have faced my entire life for other people who enjoys it.
    I hope these writings find you as well and you learn also something from me, or even me from you!`,
  headerImage: "/pics/sobhanessi.jpg"
}];
/* harmony default export */ const database_writings = (writings);
;// CONCATENATED MODULE: ./pages/components/WritingsTiles.tsx





function WritingsTiles() {
  const writingsDivert = href => {
    console.log(href);
  }; // const FONT_FAMILY = PERSIAN_FONT_FAMILY;


  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, database_writings.map(n => /*#__PURE__*/external_react_default().createElement(material_.Card, {
    sx: {
      bgcolor: theme/* MAIN_COLOR */.lU,
      boxShadow: 0,
      width: "100%"
    },
    onClick: () => writingsDivert(n.href),
    key: n.title,
    dir: "rtl"
  }, /*#__PURE__*/external_react_default().createElement(material_.Grid, {
    container: true,
    xs: 12,
    sx: {
      mb: 4
    }
  }, /*#__PURE__*/external_react_default().createElement(material_.Grid, {
    item: true,
    xs: 12,
    sm: 5,
    md: 4,
    lg: 4,
    xl: 4
  }, /*#__PURE__*/external_react_default().createElement(material_.CardMedia, {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/external_react_default().createElement(material_.Avatar, {
    src: n.headerImage,
    alt: n.title,
    variant: "square",
    sx: [{
      height: 225,
      width: "100%",
      borderRadius: 5,
      mb: 2
    }]
  }))), /*#__PURE__*/external_react_default().createElement(material_.Grid, {
    item: true,
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    xl: 8,
    lg: 8,
    md: 8,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/external_react_default().createElement(material_.CardContent, null, /*#__PURE__*/external_react_default().createElement(material_.Typography, {
    variant: "h5",
    component: "div",
    color: "#ff6266",
    gutterBottom: true,
    sx: {
      fontWeight: "bold",
      fontFamily: theme/* PERSIAN_FONT_FAMILY */.E
    }
  }, n.title), /*#__PURE__*/external_react_default().createElement(material_.Typography, {
    component: "div",
    color: "#f79d2e",
    gutterBottom: true,
    sx: {
      fontWeight: "bold",
      fontFamily: theme/* PERSIAN_FONT_FAMILY */.E
    }
  }, n.date().getUTCFullYear(), " / ", n.date().getUTCMonth() + 1, " / ", n.date().getUTCDate(), "   ", /*#__PURE__*/external_react_default().createElement("span", {
    style: {
      color: "white",
      fontFamily: theme/* PERSIAN_FONT_FAMILY */.E
    }
  }, "\u0646\u0648\u06CC\u0633\u0646\u062F\u0647 :", " "), /*#__PURE__*/external_react_default().createElement("span", {
    style: {
      fontWeight: "bold",
      fontFamily: theme/* PERSIAN_FONT_FAMILY */.E,
      color: "#2e5aeb"
    }
  }, n.author)), /*#__PURE__*/external_react_default().createElement(material_.Typography, {
    gutterBottom: true,
    sx: {
      color: "white",
      fontFamily: theme/* PERSIAN_FONT_FAMILY */.E
    },
    whiteSpace: "pre-line"
  }, n.brief))), /*#__PURE__*/external_react_default().createElement("hr", {
    style: {
      color: "white",
      width: "100%"
    }
  })))));
}

/* harmony default export */ const components_WritingsTiles = (WritingsTiles);

/***/ })

};
;