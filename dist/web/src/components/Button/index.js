"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Variants_module_scss_1 = __importDefault(require("./Variants.module.scss"));
const Sizes_module_scss_1 = __importDefault(require("./Sizes.module.scss"));
const concatStyles_1 = require("../../utils/concatStyles");
const Button = ({ size = 3, variant = "default", className = "", ...props }) => {
    const buttonStyles = (0, concatStyles_1.concatStyles)([
        Button_module_scss_1.default.button,
        Sizes_module_scss_1.default[`size-${size}`],
        Variants_module_scss_1.default[`variant-${variant}`],
        className,
    ]);
    return (0, jsx_runtime_1.jsx)("button", { className: buttonStyles, ...props });
};
exports.Button = Button;
