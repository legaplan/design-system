import { BadgeSizes, BadgeColors, BadgeVariants } from "./types";
interface BadgeContainerProps {
    size: BadgeSizes;
    color: BadgeColors;
    variant: BadgeVariants;
}
export declare const BadgeContainer: import("styled-components").StyledComponent<typeof import("react-native").View, import("styled-components").DefaultTheme, BadgeContainerProps, never>;
export declare const BadgeText: import("styled-components").StyledComponent<({ children, ...props }: import("../Text/types").TextProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {
    badgeColor: BadgeColors;
}, never>;
export {};
