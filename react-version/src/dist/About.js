"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var year = new Date();
var age = year.getFullYear() - 2006; // 2005 is my actual birthyear but there's always an offset when you're born in December
var About = /** @class */ (function (_super) {
    __extends(About, _super);
    function About() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    About.prototype.render = function () {
        return (react_1["default"].createElement("div", { className: "App" },
            react_1["default"].createElement("header", { className: "App-header" },
                react_1["default"].createElement("nav", { className: "navbar navbar-light navbar-expand-lg" },
                    react_1["default"].createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNavAltMarkup", "aria-controls": "navbarNavAltMarkup", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                        " ",
                        react_1["default"].createElement("span", { className: "navbar-toggler-icon" })),
                    react_1["default"].createElement("div", { className: "collapse navbar-collapse", id: "navbarNavAltMarkup" },
                        react_1["default"].createElement("div", { className: "navbar-nav" },
                            react_1["default"].createElement(react_router_dom_1.Link, { className: "nav-item nav-link active", to: "/" },
                                "Home ",
                                react_1["default"].createElement("span", { className: "sr-only" }, "(current)")),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: "nav-item nav-link", to: "/about" }, "About Me"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: "nav-item nav-link", to: "/knowledge" }, "My Knowledge"),
                            react_1["default"].createElement(react_router_dom_1.Link, { className: "nav-item nav-link", to: "/certs" }, "Badges/Certifications")))),
                react_1["default"].createElement("h1", null,
                    react_1["default"].createElement("i", null, "About")),
                react_1["default"].createElement("p", { className: "about-block" },
                    "I'm very interested in ",
                    react_1["default"].createElement("strong", null, "server-side development, webservices, relational datastructures, informational security, and more!"),
                    ". I know",
                    react_1["default"].createElement("strong", null, " go"),
                    ", ",
                    react_1["default"].createElement("strong", null, "js"),
                    ", ",
                    react_1["default"].createElement("strong", null, "python"),
                    ", ",
                    react_1["default"].createElement("strong", null, "java, "),
                    react_1["default"].createElement("strong", null, "html/css"),
                    ", and ",
                    react_1["default"].createElement("strong", null, "C"),
                    ". I've also written some",
                    react_1["default"].createElement("strong", null, " C++ and C#"),
                    ". I participate in Vex and FRC Robotics (team ",
                    react_1["default"].createElement("strong", null, "6785M and 5829"),
                    "). I'm ",
                    age,
                    "; currently living in Houston, TX. For more information about my computer science knowledge, ",
                    react_1["default"].createElement("a", { href: 'https://github.com/DGKSK8LIFE/WIKNWINTL/blob/master/README.md', className: "wiknwintl" }, "Click Here."),
                    " I am a native English speaker, and am fluent in French. Arabic is my third language; I am literate in it but definitely need some improvement. I am also learning Russian (self-taught)."))));
    };
    return About;
}(react_1["default"].Component));
exports["default"] = About;
