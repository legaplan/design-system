"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_hook_form_1 = require("react-hook-form");
const Input_1 = __importDefault(require("../../controls/Input"));
const react_1 = require("react");
const RHFInput = ({ name, mask, ...props }) => {
    const { formState, register, watch, setValue, getFieldState } = (0, react_hook_form_1.useFormContext)();
    const { defaultValues } = formState;
    const { error, isDirty } = getFieldState(name, formState);
    const hasError = (error && isDirty) || (error && formState.isSubmitted);
    const currentValue = watch(name);
    (0, react_1.useEffect)(() => {
        register(name);
    }, [register, name]);
    const handleChange = (value) => {
        value = mask ? mask(value) : value;
        setValue(name, value, {
            shouldTouch: true,
            shouldDirty: true,
            shouldValidate: hasError ? true : false,
        });
    };
    (0, react_1.useEffect)(() => {
        if (defaultValues?.[name] && defaultValues?.[name] === currentValue) {
            const value = mask ? mask(defaultValues[name]) : defaultValues[name];
            handleChange(value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultValues]);
    return ((0, jsx_runtime_1.jsx)(Input_1.default, { value: currentValue, onChange: handleChange, hasError: hasError, ...props }));
};
exports.default = RHFInput;
