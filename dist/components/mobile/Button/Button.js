"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const NativeButton = ({ title, onPress, }) => (react_1.default.createElement(styles_1.MobileButton, { onPress: onPress },
    react_1.default.createElement(styles_1.ButtonText, null, title)));
exports.default = NativeButton;
