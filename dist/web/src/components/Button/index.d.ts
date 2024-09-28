import { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 1 | 2 | 3;
    variant?: "default" | "outline";
}
export declare const Button: ({ size, variant, className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
