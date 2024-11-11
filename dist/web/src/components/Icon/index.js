"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const concatStyles_1 = require("../../utils/concatStyles");
const Icon_module_scss_1 = __importDefault(require("./Icon.module.scss"));
const BarChartSquare02_1 = __importDefault(require("./commons/BarChartSquare02"));
const CheckCircle_1 = __importDefault(require("./commons/CheckCircle"));
const ChevronDown_1 = __importDefault(require("./commons/ChevronDown"));
const LogOut01_1 = __importDefault(require("./commons/LogOut01"));
const SearchLg_1 = __importDefault(require("./commons/SearchLg"));
const Users01_1 = __importDefault(require("./commons/Users01"));
const XClose_1 = __importDefault(require("./commons/XClose"));
const icons = {
    ["bar-chart-square-02"]: BarChartSquare02_1.default,
    ["users-01"]: Users01_1.default,
    ["chevron-down"]: ChevronDown_1.default,
    ["log-out-01"]: LogOut01_1.default,
    ["search-lg"]: SearchLg_1.default,
    ["check-circle"]: CheckCircle_1.default,
    ["x-close"]: XClose_1.default,
};
// TODO: Get from theme when it's available
const sizes = {
    1: 16,
    2: 20,
    3: 24,
};
const Icon = ({ name, size = 2, className = "" }) => {
    const IconByName = icons[name];
    const iconStyles = (0, concatStyles_1.concatStyles)([Icon_module_scss_1.default[`size-${size}`], className]);
    const calculatedStrokeWidth = (sizes[size] / 24) * 2;
    return ((0, jsx_runtime_1.jsx)("div", { className: iconStyles, children: (0, jsx_runtime_1.jsx)(IconByName, { strokeWidth: calculatedStrokeWidth }) }));
};
exports.Icon = Icon;
