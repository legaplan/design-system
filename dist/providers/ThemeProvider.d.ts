import React from "react";
import { ThemeConfigProps } from "../types/theme";
declare const ThemeProvider: ({ userTheme, children, }: {
    children: React.ReactNode;
    userTheme: ThemeConfigProps;
}) => React.JSX.Element;
export default ThemeProvider;
