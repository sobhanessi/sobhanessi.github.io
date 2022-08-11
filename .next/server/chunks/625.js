"use strict";
exports.id = 625;
exports.ids = [625];
exports.modules = {

/***/ 2625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_NewsTiles)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./public/database/news.js
const news = [
    {
        title: "First news of the new website!",
        href: "/hello-world!",
        slug: "hello world!",
        date: "10/7/2022",
        author: "Sobhan Esfandyari",
        category: [
            "Computer"
        ],
        brief: "Hello World!. As usual programmers write their very first program in hello world, I also have written something in this matter as a first news for my website. Click to read more...",
        text: `Hello World!. <br/>
    I have changed my website's format into React along with Next and in future, I will also move to GraphQL for database purposes. I hope you enjoy it.
    <br/>
    I will allocate some time everyday in order to write and publish some news in this website that you can leverage your knowledge as I do everyday.
    <br/>
    News will not be only in Computers' field but also in Politics and Economy. `,
        headerImage: "/pics/sobhanessi.jpg"
    }, 
];
/* harmony default export */ const database_news = (news);

// EXTERNAL MODULE: ./public/theme/theme.js
var theme = __webpack_require__(3018);
;// CONCATENATED MODULE: ./pages/components/NewsTiles.tsx





// I need to move to graphql
const NewsTiles = ()=>{
    const newsDivert = (href)=>{
        console.log(href);
    // inja bayad redirect konam be page morede nazar.
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: database_news.map((n)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                sx: {
                    bgcolor: theme/* MAIN_COLOR */.lU,
                    boxShadow: 0,
                    width: "100%"
                },
                onClick: ()=>newsDivert(n.href),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                    container: true,
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
                            }, n.title)
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
                                    }, n.title + n.date),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                        component: "div",
                                        color: "#f79d2e",
                                        gutterBottom: true,
                                        sx: {
                                            fontFamily: theme/* FONT_FAMILY */.ut,
                                            fontWeight: "bold"
                                        },
                                        children: n.date
                                    }, n.date + n.author),
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
                                    }, n.date + n.title),
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
};
/* harmony default export */ const components_NewsTiles = (NewsTiles);


/***/ })

};
;