"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const Error_1 = __importDefault(require("../../../Error"));
const FormError = ({ name }) => {
    const { formState, getFieldState } = (0, react_hook_form_1.useFormContext)();
    const { error, isDirty } = getFieldState(name, formState);
    if (!error || (!isDirty && !formState.isSubmitted))
        return null;
    return (0, jsx_runtime_1.jsx)(Error_1.default, { message: error.message });
};
exports.default = FormError;
