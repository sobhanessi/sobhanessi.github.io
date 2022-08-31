"use strict";
exports.id = 220;
exports.ids = [220];
exports.modules = {

/***/ 4220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3329);
/* harmony import */ var _mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9237);
/* harmony import */ var _mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6959);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2818);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3646);
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4241);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4192);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2753);
/* harmony import */ var _mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1431);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6872);
/* harmony import */ var _mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_20__);





















const drawerWidth = 240;
const titles = [{
  header: "NEWS",
  href: "/news",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Newspaper__WEBPACK_IMPORTED_MODULE_15___default()), null)
}, {
  header: "PORTFOLIO/ABOUT",
  href: "/",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_AccountBox__WEBPACK_IMPORTED_MODULE_1___default()), null)
}, {
  header: "WRITINGS",
  href: "/writings",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_BorderColor__WEBPACK_IMPORTED_MODULE_2___default()), null)
}, {
  header: "CONTACT",
  href: "/contact",
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Phone__WEBPACK_IMPORTED_MODULE_18___default()), null)
}]; // const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create("margin", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   ...(open && {
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   }),
// }));

const AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_19__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11___default()), {
  shouldForwardProp: prop => prop !== "open"
})(({
  theme,
  open
}) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));
const DrawerHeader = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_19__.styled)("div")(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));
function Navbar() {
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_19__.useTheme)();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
    sx: {
      display: "flex"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "fixed",
    open: open,
    sx: {
      backgroundColor: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .MAIN_COLOR */ .lU
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    edge: "start",
    sx: {
      mr: 2,
      display: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_ICON_BUTTON_DISPLAY */ .RA
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_14___default()), {
    sx: {
      display: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_ICON_BUTTON_DISPLAY */ .RA
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {
    sx: {
      display: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_CONTAINER_DISPLAY */ .ul,
      flexDirection: "row",
      justifyContent: "center"
    }
  }, titles.map(title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_link__WEBPACK_IMPORTED_MODULE_20___default()), {
    href: title.href,
    key: title.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()) // variant="p"
  , {
    noWrap: true,
    href: title.header,
    component: "a",
    sx: { ..._public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_APPBAR_TYPOGRAPHY */ .np,
      color: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .SECONDARY_COLOR */ .Vz
    },
    key: title.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      color: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .QUATERNARY_COLOR */ .W2
    }
  }, title.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, title.header))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_9___default()), {
    sx: {
      backgroundColor: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .MAIN_COLOR */ .lU,
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box"
      },
      display: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_ICON_BUTTON_DISPLAY */ .RA
    },
    variant: "persistent",
    anchor: "left",
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DrawerHeader, {
    sx: {
      backgroundColor: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .MAIN_COLOR */ .lU
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_10___default()), {
    onClick: handleDrawerClose
  }, theme.direction === "ltr" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_4___default()), {
    sx: {
      color: "white"
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_5___default()), {
    sx: {
      color: "white"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_List__WEBPACK_IMPORTED_MODULE_13___default()), {
    sx: {
      backgroundColor: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .MAIN_COLOR */ .lU,
      height: "100%",
      pl: 1,
      pt: 3
    }
  }, titles.map(title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((next_link__WEBPACK_IMPORTED_MODULE_20___default()), {
    href: title.href,
    key: title.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17___default()) // variant="p"
  , {
    noWrap: true,
    href: title.header,
    component: "a",
    sx: { ..._public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .NAVBAR_APPBAR_TYPOGRAPHY */ .np,
      color: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .SECONDARY_COLOR */ .Vz,
      pb: 1.5
    },
    key: title.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      color: _public_theme_theme__WEBPACK_IMPORTED_MODULE_12__/* .QUATERNARY_COLOR */ .W2
    }
  }, title.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, title.header))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Divider__WEBPACK_IMPORTED_MODULE_8___default()), null)));
}

/***/ }),

/***/ 4241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ PERSIAN_FONT_FAMILY),
/* harmony export */   "RA": () => (/* binding */ NAVBAR_ICON_BUTTON_DISPLAY),
/* harmony export */   "Vz": () => (/* binding */ SECONDARY_COLOR),
/* harmony export */   "W2": () => (/* binding */ QUATERNARY_COLOR),
/* harmony export */   "lU": () => (/* binding */ MAIN_COLOR),
/* harmony export */   "np": () => (/* binding */ NAVBAR_APPBAR_TYPOGRAPHY),
/* harmony export */   "ul": () => (/* binding */ NAVBAR_CONTAINER_DISPLAY),
/* harmony export */   "ut": () => (/* binding */ FONT_FAMILY)
/* harmony export */ });
/* unused harmony export TERTIARY_COLOR */
const MAIN_COLOR = "#2d2e30";
const SECONDARY_COLOR = "#f79d2e";
const TERTIARY_COLOR = "#2e5aeb";
const QUATERNARY_COLOR = "#ff6266";
const FONT_FAMILY = "'Source Code Pro', monospace";
const PERSIAN_FONT_FAMILY = "'Vazirmatn', sans-serif";
const NAVBAR_ICON_BUTTON_DISPLAY = {
  xl: "none",
  lg: "none",
  md: "none",
  sm: "none"
};
const NAVBAR_CONTAINER_DISPLAY = {
  xs: "none",
  xl: "flex",
  lg: "flex",
  md: "flex",
  sm: "flex"
};
const NAVBAR_APPBAR_TYPOGRAPHY = {
  mr: 2,
  fontFamily: "monospace",
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  letterSpacing: ".12rem",
  color: "inherit",
  textDecoration: "none"
};

/***/ })

};
;