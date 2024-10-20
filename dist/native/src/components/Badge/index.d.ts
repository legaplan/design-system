import { BadgeSizes, BadgeColors, BadgeVariants } from "./types";
import { IconKeys } from "../Icon";
export interface BadgeProps {
    size?: BadgeSizes;
    color: BadgeColors;
    variant?: BadgeVariants;
    suffix?: IconKeys;
    prefix?: IconKeys;
    label: string;
}
declare const Badge: ({ color, label, prefix, suffix, size, variant, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default Badge;
