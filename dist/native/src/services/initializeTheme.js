import { BASE_THEME } from "../constants/theme";
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
export const mergeThemes = (userTheme = {}) => {
    return merge(BASE_THEME, userTheme);
};
