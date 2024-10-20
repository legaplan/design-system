import { DefaultTheme } from "styled-components/native";
import { BadgeColors } from "../types";
type TBadgeColors = {
    border: string;
    background: string;
    text: string;
    icon: string;
};
export declare const badgeColors: Record<BadgeColors, (theme: DefaultTheme, isOutline?: boolean) => TBadgeColors>;
export declare const getBadgeColors: (color: BadgeColors, theme: DefaultTheme, isOutline?: boolean) => TBadgeColors;
export {};
