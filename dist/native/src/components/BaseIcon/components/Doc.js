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
const Doc = ({ color }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, fillRule: "evenodd", d: "M13.604 1.397c.146.146.146.382.146.853v2.07c0 .718 0 1.331.066 1.822.07.523.228 1.016.627 1.415.399.4.892.557 1.415.627.49.066 1.104.066 1.823.066h2.069c.471 0 .707 0 .854.146.146.147.146.383.146.854v6.805c0 1.368 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.602-1.36.86-2.26.982-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-8.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.657.981-2.26.602-.601 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117h2.805c.471 0 .707 0 .854.147Zm7.013 5.348a.004.004 0 0 1-.004.005h-2.882c-.783 0-1.295-.002-1.673-.053-.357-.047-.48-.127-.554-.2-.074-.075-.154-.199-.201-.555-.051-.379-.053-.89-.053-1.673V1.387c0-.003.003-.005.005-.004.327.136.575.385.805.616l.056.057 3.829 3.828.056.057c.231.23.48.477.616.804ZM8 11.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm0 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5H8Z", clipRule: "evenodd" }) }));
};
exports.default = Doc;
