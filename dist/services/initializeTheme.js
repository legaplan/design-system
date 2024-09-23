"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeThemes = mergeThemes;
exports.applyThemeVariables = applyThemeVariables;
exports.initializeTheme = initializeTheme;
const theme_1 = require("../constants/theme");
function mergeThemes(userTheme) {
    return {
        spaces: {
            ...theme_1.DEFAULT_THEME.spaces,
            ...userTheme?.spaces,
        },
        borderRadius: {
            ...theme_1.DEFAULT_THEME.borderRadius,
            ...userTheme?.borderRadius,
        },
        fontSize: {
            ...theme_1.DEFAULT_THEME.fontSize,
            ...userTheme?.fontSize,
        },
        colors: {
            ...theme_1.DEFAULT_THEME.colors,
            ...userTheme?.colors,
        },
    };
}
function applyThemeVariables(theme) {
    let styles = {};
    function setProperties(obj, prefix) {
        Object.entries(obj).forEach(([key, value]) => {
            if (typeof value === "object" && value !== null) {
                setProperties(value, `${prefix}-${key}`);
            }
            else {
                styles = {
                    ...styles,
                    [`--${prefix}-${key}`]: value,
                };
            }
        });
    }
    setProperties(theme.spaces || {}, "spaces");
    setProperties(theme.borderRadius || {}, "border-radius");
    setProperties(theme.fontSize || {}, "font-size");
    setProperties(theme.colors || {}, "colors");
    return styles;
}
function initializeTheme(userTheme) {
    const mergedTheme = mergeThemes(userTheme);
    return applyThemeVariables(mergedTheme);
}
