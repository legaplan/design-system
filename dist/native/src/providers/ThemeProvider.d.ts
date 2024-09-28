import React from "react";
import { ThemeConfigProps } from "../types/theme";
declare const ThemeProvider: ({ userTheme, children, }: {
    children: React.ReactNode;
    userTheme: ThemeConfigProps;
}) => import("react/jsx-runtime").JSX.Element;
export default ThemeProvider;
