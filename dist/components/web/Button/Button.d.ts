import React, { ButtonHTMLAttributes } from "react";
import '../../../styles/global.scss';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 1 | 2 | 3;
    variant?: "default" | "outline" | "transparent" | "danger";
}
declare const WebButton: ({ size, variant, className, ...props }: ButtonProps) => React.JSX.Element;
export default WebButton;
