"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("./Button"));
const ThemeProvider_1 = __importDefault(require("../../providers/ThemeProvider"));
const theme_1 = require("../../constants/theme");
exports.default = {
    title: "components/Button",
    component: Button_1.default,
    decorators: [
        (Story) => {
            return ((0, jsx_runtime_1.jsx)(ThemeProvider_1.default, { userTheme: theme_1.DEFAULT_THEME, children: (0, jsx_runtime_1.jsx)(Story, {}) }));
        },
    ],
};
const Basic = (args) => ((0, jsx_runtime_1.jsx)(Button_1.default, { ...args }));
exports.Basic = Basic;
exports.Basic.args = {
    text: "Hello World",
    color: "purple",
};
