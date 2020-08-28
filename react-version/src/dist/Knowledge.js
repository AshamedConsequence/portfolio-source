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
var Knowledge = /** @class */ (function (_super) {
    __extends(Knowledge, _super);
    function Knowledge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knowledge.prototype.render = function () {
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
                    react_1["default"].createElement("i", null, "Knowledge")),
                react_1["default"].createElement("div", { className: "Knowledge-headers" },
                    react_1["default"].createElement("a", { className: "wiknwintl", href: "https://github.com/DGKSK8LIFE/WIKNWINTL" },
                        react_1["default"].createElement("p", null, "For more info, click here.")),
                    react_1["default"].createElement("h3", null, "Backend"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "Go"),
                        react_1["default"].createElement("li", null, "Python"),
                        react_1["default"].createElement("li", null, "Node/Typescript"),
                        react_1["default"].createElement("li", null, "Java"),
                        react_1["default"].createElement("li", null, "Flask"),
                        react_1["default"].createElement("li", null, "Revel framework"),
                        react_1["default"].createElement("li", null, "Gin"),
                        react_1["default"].createElement("li", null, "Express.JS"),
                        react_1["default"].createElement("li", null, "C"),
                        react_1["default"].createElement("li", null, "GraphQL"),
                        react_1["default"].createElement("li", null, "REST"),
                        react_1["default"].createElement("li", null, "JWT"),
                        react_1["default"].createElement("li", null, "Session Auth"),
                        react_1["default"].createElement("li", null, "C#")),
                    react_1["default"].createElement("h3", null, "Frontend"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "HTML"),
                        react_1["default"].createElement("li", null, "CSS"),
                        react_1["default"].createElement("li", null, "Javascript/Typescript"),
                        react_1["default"].createElement("li", null, "React"),
                        react_1["default"].createElement("li", null, "Next.JS"),
                        react_1["default"].createElement("li", null, "Wordpress"),
                        react_1["default"].createElement("li", null, "Scss"),
                        react_1["default"].createElement("li", null, "Bootstrap")),
                    react_1["default"].createElement("h3", null, "Database technologies"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "MySQL"),
                        react_1["default"].createElement("li", null, "Sqlite"),
                        react_1["default"].createElement("li", null, "Redis")),
                    react_1["default"].createElement("h3", null, "DevOps"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "Docker"),
                        react_1["default"].createElement("li", null, "Docker-Compose"),
                        react_1["default"].createElement("li", null, "Bash"),
                        react_1["default"].createElement("li", null, "Linux"),
                        react_1["default"].createElement("li", null, "GCP"),
                        react_1["default"].createElement("li", null, "Netlify"),
                        react_1["default"].createElement("li", null, "Git/Github")),
                    react_1["default"].createElement("h3", null, "Hardware"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "RaspberryPI"),
                        react_1["default"].createElement("li", null, "Arduino"),
                        react_1["default"].createElement("li", null, "Sunfounder Sensor Kit"),
                        react_1["default"].createElement("li", null, "Computer Hardware"),
                        react_1["default"].createElement("li", null, "Building PC")),
                    react_1["default"].createElement("h3", null, "Other software"),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "Office 365 Suite"),
                        react_1["default"].createElement("li", null, "Adobe Creative Cloud Suite"),
                        react_1["default"].createElement("li", null, "Unity Game Engine"))))));
    };
    return Knowledge;
}(react_1["default"].Component));
exports["default"] = Knowledge;
