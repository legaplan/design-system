"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const Field_1 = __importDefault(require("./components/Field"));
const FormError_1 = __importDefault(require("./components/FormError"));
const Label_1 = __importDefault(require("./components/Label"));
const RHFInput_1 = __importDefault(require("./components/RHFInput"));
exports.Form = {
    Field: Field_1.default,
    Label: Label_1.default,
    Input: RHFInput_1.default,
    Error: FormError_1.default,
};
