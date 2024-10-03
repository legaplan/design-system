"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const Text = ({ children, ...props }) => {
    return (0, jsx_runtime_1.jsx)(styles_1.BaseText, { ...props, children: children });
};
exports.default = Text;
