"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = require("styled-components/native");
const initializeTheme_1 = require("../services/initializeTheme");
const ThemeProvider = ({ userTheme, children, }) => {
    const theme = (0, initializeTheme_1.mergeThemes)(userTheme);
    return ((0, jsx_runtime_1.jsx)(native_1.ThemeProvider, { theme: theme, children: children }));
};
exports.default = ThemeProvider;
