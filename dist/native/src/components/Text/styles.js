"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseText = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const variants_styles_1 = require("./variants.styles");
const getTextLineHeight = (textSize) => {
    const lineHeights = {
        xs: "1.5em",
        sm: "1.42em",
        md: "1.5em",
        lg: "1.55em",
        xl: "1.5em",
        default: "1.42em",
    };
    return lineHeights[textSize];
};
exports.BaseText = native_1.default.Text `
  color: ${({ theme, color }) => (0, variants_styles_1.getCustomTextSyles)(theme).color[color ?? "default"]};
  font-size: ${({ theme, size }) => (0, variants_styles_1.getCustomTextSyles)(theme).size[size ?? "default"]};
  font-weight: ${({ theme, weight }) => (0, variants_styles_1.getCustomTextSyles)(theme).weight[weight ?? "default"]};
  line-height: ${({ size }) => getTextLineHeight(size || "default")};
`;
