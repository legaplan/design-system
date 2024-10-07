"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeThemes = void 0;
const theme_1 = require("../constants/theme");
const mergeThemes = (userTheme = {}) => {
    const merge = (defaultTheme, customTheme) => {
        const result = { ...defaultTheme };
        for (const key in customTheme) {
            if (customTheme[key] && typeof customTheme[key] === "object") {
                result[key] = merge(result[key], customTheme[key]);
            }
            else {
                result[key] = customTheme[key];
            }
        }
        return result;
    };
    return merge(theme_1.DEFAULT_THEME, userTheme);
};
exports.mergeThemes = mergeThemes;
