"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Text_1 = __importDefault(require("../Text"));
const Error = ({ message }) => {
    if (!message)
        return null;
    return (0, jsx_runtime_1.jsx)(Text_1.default, { color: "error", children: message });
};
exports.default = Error;
