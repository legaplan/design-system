"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const native_1 = require("styled-components/native");
const initializeTheme_1 = require("../services/initializeTheme");
const ThemeProvider = ({ userTheme, children, }) => {
    const theme = (0, initializeTheme_1.mergeThemes)(userTheme);
    return (react_1.default.createElement(native_1.ThemeProvider, { theme: theme }, children));
};
exports.default = ThemeProvider;
