"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonText = exports.MobileButton = void 0;
const native_1 = __importDefault(require("styled-components/native"));
const react_native_1 = require("react-native");
exports.MobileButton = (0, native_1.default)(react_native_1.TouchableOpacity) `
  padding: 10px;
  background-color: ${({ theme }) => theme.colors?.background};
  border-radius: 5px;
`;
exports.ButtonText = (0, native_1.default)(react_native_1.Text) `
  color: white;
`;
