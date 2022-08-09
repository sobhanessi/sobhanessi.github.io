"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Jobs)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./public/theme/theme.js
var theme = __webpack_require__(3018);
;// CONCATENATED MODULE: ./public/database/jobs.js
const jobs = [
    {
        title: "Software Engineer",
        company: "Dr. Glinz Covis GmbH",
        contractType: "Full Time",
        period: "6/2021 - 6/2022 | 1 year",
        description: "I started my new journey in a German company's branch in Greece as Software Engineer to develope and maintain some applications and web applications using variety of languages for this company.",
        image: "covis.png"
    },
    {
        title: "IT and English instructor",
        company: "Pytheas's Path",
        contractType: "Full Time",
        period: "11/2019 - 6/2021 | 20 months",
        description: "English instructor for Farsi speakers in the level of A0 to A2. I also taught here ECDL and CLC but my main focus in teaching was teaching Full Stack Development with Javascript, NodeJS, React, HTML, CSS, MySql, MongoDB and so many other technologies beside my teaching like 'How To Think Like A Programmer' and 'How To Solve Problems'. I have had almost 10 students for each my classes.",
        image: "pytheas path.png"
    },
    {
        title: "Volunteer IT Help Desk",
        conpany: "Solidarity Now",
        contractType: "Part Time",
        period: "2/2019 - 2/2019 | 1 months",
        description: "I worked in Solidarity Now as a volunteer IT developer and supporter to help them to manage their services.",
        image: "SolidarityNow.jpg"
    },
    {
        title: "IT admin",
        company: "Part Shamim Daru",
        contractType: "Full Time",
        period: "2/2017 - 8/2017 | 19 months",
        description: "I worked here as IT manager. I was responsible for more than 12 computers including designing the core network and installing and maintaining and optimizing systems for the company.",
        image: "part shamim daru.png"
    },
    {
        title: "Content Writer",
        company: "Part Shamim Daru",
        contractType: "Full Time",
        period: "2/2017 - 8/2017 | 19 months",
        description: "Social media and website content manager and writer. Especially for their magazines and website in English and Farsi.",
        image: "part shamim daru.png"
    },
    {
        title: "Warehouse Manager",
        company: "Part Shamim Daru",
        contractType: "Full Time",
        period: "2/2017 - 8/2017 | 19 months",
        description: "I was responsible for entire warehouse which for a retail company with outcome of more than 10 tons per month it is more than usual which I digitalised the warehouse system from classic to modern.",
        image: "part shamim daru.png"
    },
    {
        title: "Exhibition Coordinator",
        company: "Part Shamim Daru",
        contractType: "Full Time",
        period: "8/2017 - 9/2017 | 2 months",
        description: "IranPharma and Iran Clean Exhibition coordinator for Part Shamim Daru. I Coordinated Their catalogues, invitation cards, rooms' design, ...",
        image: "part shamim daru.png"
    },
    {
        title: "Help Desk Technician",
        company: "Bagro",
        contractType: "Full Time",
        period: "5/2015 - 7/2015 | 3 months",
        description: "Bagro was fast food chain restaurant which was located in Tehran and I was responsible for their branches' computers and systems including installing and maintaining. Bagro had more than 4 branches throughout Tehran.",
        image: "bagro fast food.jpg"
    },
    {
        company: "Faraz Aftab Caspian",
        title: "Help Desk Technician",
        contractType: "Full Time",
        period: "4/2015 - 5/2015 | 2 months",
        description: "Worked as help desk technician. And this job was my first full time job. I was responsible for Kian software which was a software for managing their branch's warehouse and sales management.",
        image: "faraz aftab caspian.jpg"
    }, 
];
/* harmony default export */ const database_jobs = (jobs);

;// CONCATENATED MODULE: ./pages/components/Jobs.tsx





function Jobs() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: database_jobs.map((job)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
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
                            src: `/pics/${job.image}`,
                            alt: job.company,
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
                                    fontFamily: theme/* FONT_FAMILY */.ut
                                },
                                children: job.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "div",
                                color: "#f79d2e",
                                gutterBottom: true,
                                sx: {
                                    fontFamily: theme/* FONT_FAMILY */.ut
                                },
                                children: job.period
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                component: "div",
                                color: "#2e5aeb",
                                gutterBottom: true,
                                sx: {
                                    fontFamily: theme/* FONT_FAMILY */.ut
                                },
                                children: [
                                    "Type of contract : ",
                                    job.contractType
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                gutterBottom: true,
                                sx: {
                                    color: "white"
                                },
                                children: job.description
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
            }))
    });
}
/* harmony default export */ const components_Jobs = (Jobs);


/***/ })

};
;