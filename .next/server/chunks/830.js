"use strict";
exports.id = 830;
exports.ids = [830];
exports.modules = {

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_WritingsTiles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./public/theme/theme.js
var theme = __webpack_require__(3018);
;// CONCATENATED MODULE: ./public/database/writings.js
const writings = [
    {
        title: "first header",
        href: "/hello-world",
        slug: "be to che",
        date: "10/7/2022",
        author: "Sobhan Esfandyari",
        category: [
            "software"
        ],
        brief: "this will be a brief about the news that will be published on my website.",
        text: "here will be the long text that will be published on its own page when the user clicks on it.",
        headerImage: "/pics/sobhanessi.jpg"
    }, 
];
/* harmony default export */ const database_writings = (writings);

;// CONCATENATED MODULE: ./pages/components/WritingsTiles.jsx





function WritingsTiles() {
    const writingsDivert = (href)=>{
        console.log(href);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
        children: database_writings.map((n)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                    sx: {
                        bgcolor: theme/* MAIN_COLOR */.lU
                    },
                    onClick: ()=>writingsDivert(n.href),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        xs: 12,
                        sx: {
                            mb: 4
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                sm: 4,
                                md: 4,
                                lg: 4,
                                xl: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                    src: n.headerImage,
                                    alt: n.title,
                                    variant: "square",
                                    sx: {
                                        height: 225,
                                        width: 225,
                                        borderRadius: "25px",
                                        display: "flex",
                                        mb: 2,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                item: true,
                                sx: {
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                xl: 8,
                                lg: 8,
                                md: 8,
                                sm: 8,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        variant: "h5",
                                        component: "div",
                                        color: "#ff6266",
                                        gutterBottom: true,
                                        sx: {
                                            fontFamily: theme/* FONT_FAMILY */.ut,
                                            fontWeight: "bold"
                                        },
                                        children: n.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "div",
                                        color: "#f79d2e",
                                        gutterBottom: true,
                                        sx: {
                                            fontFamily: theme/* FONT_FAMILY */.ut
                                        },
                                        children: n.date
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                        component: "div",
                                        color: "#2e5aeb",
                                        gutterBottom: true,
                                        sx: {
                                            fontFamily: theme/* FONT_FAMILY */.ut
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "white"
                                                },
                                                children: "Author : "
                                            }),
                                            n.author
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        gutterBottom: true,
                                        sx: {
                                            color: "white",
                                            fontFamily: theme/* FONT_FAMILY */.ut
                                        },
                                        children: n.brief
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                style: {
                                    color: "white",
                                    width: "100%"
                                }
                            })
                        ]
                    })
                })
            }))
    });
}
/* harmony default export */ const components_WritingsTiles = (WritingsTiles);


/***/ })

};
;