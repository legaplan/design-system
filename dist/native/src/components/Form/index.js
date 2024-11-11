"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const Field_1 = require("./components/Field");
const FormError_1 = require("./components/FormError");
const Label_1 = require("./components/Label");
const RHFInput_1 = require("./components/RHFInput");
exports.Form = {
    Field: Field_1.FormField,
    Label: Label_1.Label,
    Input: RHFInput_1.RHFInput,
    Error: FormError_1.FormError,
};
