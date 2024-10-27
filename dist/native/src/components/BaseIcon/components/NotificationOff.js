"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const NotificationOff = ({ color }) => {
    return ((0, jsx_runtime_1.jsxs)(react_native_svg_1.default, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, fillRule: "evenodd", d: "M7.743 17.784a1 1 0 0 1 1.224.71c.34 1.278 1.554 2.256 3.033 2.256 1.48 0 2.694-.978 3.034-2.257a1 1 0 1 1 1.933.514C16.39 21.18 14.37 22.75 12 22.75c-2.37 0-4.39-1.571-4.966-3.743a1 1 0 0 1 .71-1.223Z", clipRule: "evenodd" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, d: "M4.337 17.843c-1.286-.532-2.579-1.718-2.298-3.55.086-.563.336-1.045.591-1.445.145-.226.336-.488.503-.716.096-.13.184-.251.25-.347.475-.7.545-1.478.545-2.51 0-1.529.43-2.958 1.175-4.173l13.225 13.224c-4.371 1.373-9.888 1.212-13.99-.483ZM11.999 1.25c4.456 0 8.072 3.592 8.072 8.027 0 1.032.07 1.81.545 2.51.066.096.154.216.25.347.167.228.358.49.503.716.256.4.505.882.591 1.444.143.932-.121 1.697-.584 2.293-.226.291-.34.437-.564.451-.226.014-.381-.141-.692-.452L7.493 3.959c-.365-.365-.547-.547-.522-.784.025-.237.224-.367.623-.625a8.068 8.068 0 0 1 4.405-1.3Z" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, fillRule: "evenodd", d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414Z", clipRule: "evenodd" })] }));
};
exports.default = NotificationOff;