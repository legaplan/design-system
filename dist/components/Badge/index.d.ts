import { BadgeSizes, BadgeColors, BadgeVariants } from "./types";
export interface BadgeProps {
    size?: BadgeSizes;
    color: BadgeColors;
    variant?: BadgeVariants;
    children: React.ReactNode;
}
export declare const Badge: {
    ({ color, children, size, variant, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
    Icon: ({ name }: import("./components/Icon").IconProps) => import("react/jsx-runtime").JSX.Element;
    Text: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
};
