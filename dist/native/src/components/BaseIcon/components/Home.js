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
const Home = ({ color }) => {
    return ((0, jsx_runtime_1.jsx)(react_native_svg_1.default, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { fill: color, fillRule: "evenodd", d: "M12 1.25c-.874 0-1.648.3-2.474.799-.8.483-1.713 1.197-2.861 2.093l-1.183.923c-1.376 1.073-2.266 1.767-2.75 2.76-.483.992-.483 2.122-.482 3.87v2.333c0 1.844 0 3.305.153 4.448.158 1.176.49 2.127 1.237 2.878.749.75 1.698 1.084 2.87 1.242 1.14.154 2.596.154 4.434.154h2.113c1.837 0 3.293 0 4.432-.154 1.173-.158 2.122-.491 2.87-1.242.749-.75 1.08-1.702 1.238-2.878.153-1.143.153-2.604.153-4.448v-2.332c0-1.75.001-2.88-.483-3.871-.483-.993-1.373-1.687-2.748-2.76l-1.184-.923c-1.147-.896-2.061-1.61-2.861-2.093-.826-.5-1.6-.799-2.474-.799ZM12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", clipRule: "evenodd" }) }));
};
exports.default = Home;
