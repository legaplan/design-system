"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonText = exports.ButtonContainer = void 0;
const native_1 = __importDefault(require("styled-components/native"));
exports.ButtonContainer = native_1.default.TouchableOpacity `
  background-color: ${({ theme }) => theme.colors.components.button.primary.background.default};
  padding: 15px 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 6;
`;
exports.ButtonText = native_1.default.Text `
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
