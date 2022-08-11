"use strict";
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 8039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_WritingsTiles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./public/theme/theme.js
var theme = __webpack_require__(3018);
;// CONCATENATED MODULE: ./public/database/writings.js
const writings = [
    {
        title: "First writing in the new format of my website!",
        href: "/writings/hello-world!",
        slug: "hello-world!",
        date: "10/7/2022",
        author: "Sobhan Esfandyari",
        category: [
            "Life"
        ],
        brief: "In this page you can find my writings about all stuff that I faced everyday in my life!",
        text: `Why am I writing? Short answer, because I like it.<br/>
    However there are some lacks in writing skills and there is also language barrier here as well, 
    I might not be a good writer but I can publish some of the things that I have faced my entire life for other people who enjoys it.
    <br/>
    I hope these writings find you as well and you learn also something from me, or even me from you!`,
        headerImage: "/pics/sobhanessi.jpg"
    }, 
];
/* harmony default export */ const database_writings = (writings);

;// CONCATENATED MODULE: ./pages/components/WritingsTiles.tsx





function WritingsTiles() {
    const writingsDivert = (href)=>{
        console.log(href);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: database_writings.map((n)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                sx: {
                    bgcolor: theme/* MAIN_COLOR */.lU,
                    boxShadow: 0,
                    width: "100%"
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
                            sm: 5,
                            md: 4,
                            lg: 4,
                            xl: 4,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardMedia, {
                                sx: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                    src: n.headerImage,
                                    alt: n.title,
                                    variant: "square",
                                    sx: [
                                        {
                                            height: 225,
                                            width: "100%",
                                            borderRadius: 5,
                                            mb: 2
                                        }, 
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                            item: true,
                            sx: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            xl: 8,
                            lg: 8,
                            md: 8,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
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
                                            fontFamily: theme/* FONT_FAMILY */.ut,
                                            fontWeight: "bold"
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
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    fontWeight: "bold"
                                                },
                                                children: n.author
                                            })
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
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                            style: {
                                color: "white",
                                width: "100%"
                            }
                        })
                    ]
                })
            }, n.title))
    });
}
/* harmony default export */ const components_WritingsTiles = (WritingsTiles);


/***/ })

};
;