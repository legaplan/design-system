"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
const BadgeIcon_1 = __importDefault(require("./components/BadgeIcon"));
const Badge = ({ color, label, prefix, suffix, size = 2, variant = "fill", }) => {
    const textSize = size === 1 ? "xs" : "sm";
    const isOutline = variant === "outline";
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsxs)(styles_1.BadgeContainer, { color: color, size: size, variant: variant, children: [prefix && ((0, jsx_runtime_1.jsx)(BadgeIcon_1.default, { color: color, isOutline: variant === "outline", name: prefix })), (0, jsx_runtime_1.jsx)(styles_1.BadgeText, { badgeColor: color, size: textSize, weight: "medium", children: label }), suffix && ((0, jsx_runtime_1.jsx)(BadgeIcon_1.default, { isOutline: isOutline, color: color, name: suffix }))] }) }));
};
exports.default = Badge;
