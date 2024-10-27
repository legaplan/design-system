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
const UserGroup = ({ color }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, fillRule: "evenodd", d: "M9.438 3.37c-1.66.873-2.787 2.568-2.787 4.516a4.98 4.98 0 0 0 .878 2.824c-2.126-.096-3.82-1.784-3.82-3.853C3.71 4.727 5.505 3 7.721 3a4.13 4.13 0 0 1 1.717.37Zm-1.156 8.887c-2.796.783-4.84 3.266-4.84 6.208 0 .535.114 1.044.32 1.506h-.626C1.68 19.971.5 18.837.5 17.437c0-2.86 2.412-5.18 5.387-5.18h2.395ZM12 4.03c-2.216 0-4.012 1.726-4.012 3.857 0 2.13 1.796 3.857 4.012 3.857 2.216 0 4.012-1.727 4.012-3.857S14.216 4.029 12 4.029Zm-1.834 9.257c-2.975 0-5.387 2.319-5.387 5.18 0 1.4 1.18 2.534 2.636 2.534h9.17c1.456 0 2.636-1.135 2.636-2.535 0-2.86-2.412-5.18-5.387-5.18h-3.668Zm7.183-5.4a4.98 4.98 0 0 1-.878 2.824c2.126-.096 3.82-1.784 3.82-3.853C20.29 4.727 18.495 3 16.279 3a4.13 4.13 0 0 0-1.717.37c1.66.873 2.787 2.568 2.787 4.516Zm3.21 10.58a3.68 3.68 0 0 1-.322 1.505h.627c1.456 0 2.636-1.134 2.636-2.534 0-2.86-2.412-5.18-5.387-5.18h-2.395c2.797.783 4.84 3.266 4.84 6.208Z", clipRule: "evenodd" }) }));
};
exports.default = UserGroup;