"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_module_scss_1 = __importDefault(require("./Button.module.scss"));
const Variants_module_scss_1 = __importDefault(require("./Variants.module.scss"));
const Sizes_module_scss_1 = __importDefault(require("./Sizes.module.scss"));
const concatStyles_1 = require("../../../utils/concatStyles");
const WebButton = ({ size = 3, variant = "default", className = "", ...props }) => {
    const buttonStyles = (0, concatStyles_1.concatStyles)([
        Button_module_scss_1.default.button,
        Sizes_module_scss_1.default[`size-${size}`],
        Variants_module_scss_1.default[`variant-${variant}`],
        className,
    ]);
    return react_1.default.createElement("button", { className: buttonStyles, ...props });
};
exports.default = WebButton;
