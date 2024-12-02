import { BadgeSizes, BadgeColors, BadgeVariants, BadgeType } from "./types";
interface BadgeContainerProps {
    size: BadgeSizes;
    color: BadgeColors;
    variant: BadgeVariants;
    type: BadgeType;
}
export declare const Container: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, BadgeContainerProps, never>;
export {};
