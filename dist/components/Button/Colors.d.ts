import { DefaultTheme } from "styled-components/native";
import { ButtonVariant } from ".";
interface GetVariantColorStylesProps {
    variant: ButtonVariant;
    theme: DefaultTheme;
    isPressed: boolean;
    disabled: boolean | undefined;
}
export declare const getButtonState: (isPressed: boolean) => "default" | "hover";
export declare const getBorderStyles: ({ variant, theme, isPressed, disabled, }: GetVariantColorStylesProps) => "" | import("styled-components").FlattenSimpleInterpolation;
export declare const getBackgroundStyles: ({ variant, theme, isPressed, disabled, }: GetVariantColorStylesProps) => import("styled-components").FlattenSimpleInterpolation;
export declare const getShadowStyles: ({ variant }: {
    variant: ButtonVariant;
}) => import("styled-components").FlattenSimpleInterpolation | undefined;
export {};
