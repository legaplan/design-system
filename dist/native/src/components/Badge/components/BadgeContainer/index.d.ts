import { BadgeSizes, BadgeColors, BadgeVariants } from "../../types";
export interface BadgeProps {
    size?: BadgeSizes;
    color: BadgeColors;
    variant?: BadgeVariants;
    children: React.ReactNode;
}
declare const BadgeContainer: ({ color, children, size, variant, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export default BadgeContainer;
