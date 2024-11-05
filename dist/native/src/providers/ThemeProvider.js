"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
exports.useTheme = useTheme;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const native_1 = require("styled-components/native");
const initializeTheme_1 = require("../services/initializeTheme");
const react_native_1 = require("react-native");
const createBorderRadiusInPixel_1 = require("../theme/schemes/createBorderRadiusInPixel");
const createFontSizeInPixel_1 = require("../theme/schemes/createFontSizeInPixel");
const createSpaceInPixel_1 = require("../theme/schemes/createSpaceInPixel");
const createLineHeightInPixel_1 = require("../theme/schemes/createLineHeightInPixel");
const createTheme_1 = require("../theme/schemes/createTheme");
const async_storage_1 = __importDefault(require("@react-native-async-storage/async-storage"));
const ThemeContext = (0, react_1.createContext)({});
const THEME_KEY = "@theme";
const ThemeProvider = ({ userTheme, children }) => {
    const userPreferredScheme = (0, react_native_1.useColorScheme)();
    const [theme, setTheme] = (0, react_1.useState)(userPreferredScheme || "light");
    const getTheme = async () => {
        try {
            const storageScheme = (await async_storage_1.default.getItem(THEME_KEY));
            if (storageScheme)
                setTheme(storageScheme);
        }
        catch (error) {
            console.log(error);
        }
    };
    const toggleTheme = async () => {
        const updatedScheme = theme === "light" ? "dark" : "light";
        try {
            await async_storage_1.default.setItem(THEME_KEY, updatedScheme);
            setTheme(updatedScheme);
        }
        catch (error) {
            console.log(error);
        }
    };
    (0, react_1.useEffect)(() => {
        getTheme();
    }, []);
    const mergedTheme = (0, initializeTheme_1.mergeThemes)(userTheme);
    const darkColors = (0, createTheme_1.createDarkTheme)(mergedTheme);
    const lightColors = (0, createTheme_1.createLightTheme)(mergedTheme);
    const themeColors = theme === "light" ? lightColors : darkColors;
    return ((0, jsx_runtime_1.jsx)(ThemeContext.Provider, { value: { toggleTheme, getTheme, theme }, children: (0, jsx_runtime_1.jsx)(native_1.ThemeProvider, { theme: {
                ...mergedTheme,
                raw: {
                    space: mergedTheme.space,
                    borderRadius: mergedTheme.borderRadius,
                    fontSize: mergedTheme.fontSize,
                },
                lineHeight: (0, createLineHeightInPixel_1.createLineHeightInPixel)(mergedTheme.lineHeight),
                borderRadius: (0, createBorderRadiusInPixel_1.createBorderRadiusInPixel)(mergedTheme.borderRadius),
                fontSize: (0, createFontSizeInPixel_1.createFontSizeInPixel)(mergedTheme.fontSize),
                space: (0, createSpaceInPixel_1.createSpaceInPixel)(mergedTheme.space),
                colors: {
                    ...mergedTheme.colors,
                    ...themeColors,
                },
            }, children: children }) }));
};
exports.ThemeProvider = ThemeProvider;
function useTheme() {
    return (0, react_1.useContext)(ThemeContext);
}
