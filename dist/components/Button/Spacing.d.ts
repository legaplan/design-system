import { DefaultTheme } from "styled-components/native";
import { ButtonSize } from ".";
interface GetVariantSpacingStylesProps {
    size: ButtonSize;
    theme: DefaultTheme;
}
export declare const getSpacingStyles: ({ size, theme, }: GetVariantSpacingStylesProps) => {
    container: import("styled-components").FlattenSimpleInterpolation;
    content: import("styled-components").FlattenSimpleInterpolation;
};
export {};
