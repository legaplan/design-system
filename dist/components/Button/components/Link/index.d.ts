import React from "react";
import { ButtonSize } from "../..";
import { TouchableOpacityProps } from "react-native";
import { ComponentScheme } from "../../../../theme/schemes/createComponentsScheme";
export interface LinkProps extends TouchableOpacityProps {
    size: ButtonSize;
    variant: keyof ComponentScheme["buttonLink"];
    children: React.ReactNode;
}
export declare const Link: ({ children, disabled, size, variant, }: LinkProps) => import("react/jsx-runtime").JSX.Element;
