"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeThemes = void 0;
const theme_1 = require("../constants/theme");
const merge = (object, source) => {
    const result = { ...object };
    for (const key in source) {
        if (source[key] && typeof source[key] === "object") {
            result[key] = merge(result[key], source[key]);
        }
        else {
            result[key] = source[key];
        }
    }
    return result;
};
const mergeThemes = (userTheme = {}) => {
    return merge(theme_1.BASE_THEME, userTheme);
};
exports.mergeThemes = mergeThemes;
