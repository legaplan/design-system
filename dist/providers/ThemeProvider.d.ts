import React from "react";
import { ThemeConfigProps } from "../types/theme";
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
declare const ThemeProvider: ({ userTheme, children }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
declare function useTheme(): ThemeContextProps;
export { ThemeProvider, useTheme };
