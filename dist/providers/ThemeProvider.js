import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledComponentesProvider } from "styled-components/native";
import { mergeThemes } from "../services/initializeTheme";
import { useColorScheme as useNativeColorScheme } from "react-native";
import { createBorderRadiusInPixel } from "../theme/schemes/createBorderRadiusInPixel";
import { createFontSizeInPixel } from "../theme/schemes/createFontSizeInPixel";
import { createSpaceInPixel } from "../theme/schemes/createSpaceInPixel";
import { createLineHeightInPixel } from "../theme/schemes/createLineHeightInPixel";
import { createDarkTheme, createLightTheme, } from "../theme/schemes/createTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { merge } from "../utils/merge";
const ThemeContext = createContext({});
const THEME_KEY = "@theme";
const ThemeProvider = ({ userTheme, children }) => {
    const userPreferredScheme = useNativeColorScheme();
    const [scheme, setScheme] = useState(userPreferredScheme || "light");
    const getScheme = async () => {
        try {
            const storageScheme = (await AsyncStorage.getItem(THEME_KEY));
            if (storageScheme)
                setScheme(storageScheme);
        }
        catch (error) {
            console.log(error);
        }
    };
    const toggleScheme = async () => {
        const updatedScheme = scheme === "light" ? "dark" : "light";
        try {
            await AsyncStorage.setItem(THEME_KEY, updatedScheme);
            setScheme(updatedScheme);
        }
        catch (error) {
            console.log("Toggle scheme error:", error);
        }
    };
    useEffect(() => {
        getScheme();
    }, []);
    const mergedTheme = mergeThemes(userTheme);
    const userLightTheme = userTheme?.light || {};
    const userDarkTheme = userTheme?.dark || {};
    const lightColors = merge(createLightTheme(mergedTheme), userLightTheme);
    const darkColors = merge(createDarkTheme(mergedTheme), userDarkTheme);
    const themeColors = scheme === "light" ? lightColors : darkColors;
    const theme = {
        ...mergedTheme,
        raw: {
            space: mergedTheme.space,
            borderRadius: mergedTheme.borderRadius,
            fontSize: mergedTheme.fontSize,
        },
        lineHeight: createLineHeightInPixel(mergedTheme.lineHeight),
        borderRadius: createBorderRadiusInPixel(mergedTheme.borderRadius),
        fontSize: createFontSizeInPixel(mergedTheme.fontSize),
        space: createSpaceInPixel(mergedTheme.space),
        colors: {
            ...mergedTheme.colors,
            ...themeColors,
        },
    };
    return (_jsx(ThemeContext.Provider, { value: { toggleScheme, getScheme, scheme, theme }, children: _jsx(StyledComponentesProvider, { theme: theme, children: children }) }));
};
function useTheme() {
    return useContext(ThemeContext);
}
export { ThemeProvider, useTheme };
