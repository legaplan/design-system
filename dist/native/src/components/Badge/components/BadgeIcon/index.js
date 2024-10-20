"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const native_1 = require("styled-components/native");
const Icon_1 = __importDefault(require("../../../Icon"));
const getBadgeColors_1 = require("../../utils/getBadgeColors");
const BadgeIcon = ({ color, isOutline, name }) => {
    const theme = (0, native_1.useTheme)();
    const iconColor = (0, getBadgeColors_1.getBadgeColors)(color, theme, isOutline).icon;
    return (0, jsx_runtime_1.jsx)(Icon_1.default, { color: iconColor, size: 1, name: name });
};
exports.default = BadgeIcon;
