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
const Folder = ({ color }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, d: "M7.083 2.25c1.029 0 1.74 0 2.38.239 1.395.523 2.007 1.762 2.48 2.717.14.283.398.797.47.91a.262.262 0 0 0 .193.12c.134.013.314.014.63.014h3.555c1.018 0 1.84 0 2.5.067.68.07 1.27.216 1.792.565.41.274.761.625 1.035 1.035.349.522.496 1.112.565 1.792.067.66.067 1.564.067 2.583 0 1.72 0 3.068-.11 4.142-.11 1.094-.342 1.986-.859 2.76a5.751 5.751 0 0 1-1.586 1.587c-.775.517-1.667.748-2.761.86-1.074.109-2.422.109-4.142.109h-1.35c-2.308 0-4.117 0-5.528-.19-1.445-.194-2.585-.6-3.48-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529V7.91c0-.88 0-1.588.05-2.16.052-.59.162-1.106.425-1.577a3.75 3.75 0 0 1 1.448-1.448c.47-.263.987-.373 1.577-.425.572-.05 1.454-.05 2.333-.05Z" }) }));
};
exports.default = Folder;
