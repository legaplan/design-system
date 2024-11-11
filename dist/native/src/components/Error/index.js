"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const BaseText_1 = require("../BaseText");
const Error = ({ message }) => {
    if (!message)
        return null;
    return (0, jsx_runtime_1.jsx)(BaseText_1.BaseText, { color: "error", children: message });
};
exports.Error = Error;
