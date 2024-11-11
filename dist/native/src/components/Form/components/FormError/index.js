"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormError = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const Error_1 = require("../../../Error");
const FormError = ({ name }) => {
    const { formState, getFieldState } = (0, react_hook_form_1.useFormContext)();
    const { error, isDirty } = getFieldState(name, formState);
    if (!error || (!isDirty && !formState.isSubmitted))
        return null;
    return (0, jsx_runtime_1.jsx)(Error_1.Error, { message: error.message });
};
exports.FormError = FormError;
