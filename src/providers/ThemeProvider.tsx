import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as StyledComponentesProvider } from "styled-components/native";
import { ThemeConfigProps } from "../types/theme";
import { mergeThemes } from "../services/initializeTheme";

import { useColorScheme as useNativeColorScheme } from "react-native";

import { createBorderRadiusInPixel } from "../theme/schemes/createBorderRadiusInPixel";
import { createFontSizeInPixel } from "../theme/schemes/createFontSizeInPixel";
import { createSpaceInPixel } from "../theme/schemes/createSpaceInPixel";
import { createLineHeightInPixel } from "../theme/schemes/createLineHeightInPixel";
import {
  createDarkTheme,
  createLightTheme,
} from "../theme/schemes/createTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { merge } from "../utils/merge";

export type TTheme = "light" | "dark";
interface ThemeProviderProps {
  children: React.ReactNode;
  userTheme?: ThemeConfigProps;
}

interface ThemeContextProps {
  theme: TTheme;
  getTheme: () => Promise<void>;
  toggleTheme: () => Promise<void>;
}

const ThemeContext = createContext({} as ThemeContextProps);

const THEME_KEY = "@theme";

const ThemeProvider = ({ userTheme, children }: ThemeProviderProps) => {
  const userPreferredScheme = useNativeColorScheme();
  const [theme, setTheme] = useState<TTheme>(userPreferredScheme || "light");

  const getTheme = async () => {
    try {
      const storageScheme = (await AsyncStorage.getItem(
        THEME_KEY
      )) as TTheme | null;
      if (storageScheme) setTheme(storageScheme);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTheme = async () => {
    const updatedScheme = theme === "light" ? "dark" : "light";
    try {
      await AsyncStorage.setItem(THEME_KEY, updatedScheme);
      setTheme(updatedScheme);
    } catch (error) {
      console.log("Toggle theme error:", error);
    }
  };

  useEffect(() => {
    getTheme();
  }, []);

  const mergedTheme = mergeThemes(userTheme);

  const userLightTheme = userTheme?.light || {};
  const userDarkTheme = userTheme?.dark || {};

  const lightColors = merge(createLightTheme(mergedTheme), userLightTheme);
  const darkColors = merge(createDarkTheme(mergedTheme), userDarkTheme);

  const themeColors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ toggleTheme, getTheme, theme }}>
      <StyledComponentesProvider
        theme={{
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
        }}
      >
        {children}
      </StyledComponentesProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
