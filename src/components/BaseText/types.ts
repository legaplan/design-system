import { ReactNode } from "react";

export type CustomTextSizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  default: string;
};

export interface CustomTextStyles {
  color: {
    brand_primary: string;
    brand_secondary: string;
    brand_tertiary: string;
    white: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    default: string;
    error: string;
    success: string;
    disabled: string;
  };
  size: CustomTextSizes;
  weight: {
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
    default: number;
  };
}

export interface TextProps extends CustomTextProps {
  children: ReactNode;
}

export interface CustomTextProps {
  color?: keyof CustomTextStyles["color"];
  size?: keyof CustomTextStyles["size"];
  weight?: keyof CustomTextStyles["weight"];
}
