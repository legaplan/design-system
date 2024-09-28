"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _1 = require(".");
const theme_1 = require("../../constants/theme");
const ThemeProvider_1 = require("../../providers/ThemeProvider");
exports.default = {
    title: "components/Button",
    component: _1.Button,
    decorators: [
        (Story) => {
            return ((0, jsx_runtime_1.jsx)(ThemeProvider_1.ThemeProvider, { userTheme: theme_1.DEFAULT_THEME, children: (0, jsx_runtime_1.jsx)(Story, {}) }));
        },
    ],
};
const Basic = (args) => ((0, jsx_runtime_1.jsx)(_1.Button, { ...args }));
exports.Basic = Basic;
exports.Basic.args = {
    text: "Hello World",
    color: "purple",
};
