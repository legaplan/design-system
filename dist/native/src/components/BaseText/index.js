"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("./styles");
const BaseText = ({ children, ...props }) => {
    return (0, jsx_runtime_1.jsx)(styles_1.StyledBaseText, { ...props, children: children });
};
exports.default = BaseText;
