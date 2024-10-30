declare const icons: {
    "bar-chart-square-02": () => import("react/jsx-runtime").JSX.Element;
    "users-01": () => import("react/jsx-runtime").JSX.Element;
    "chevron-down": () => import("react/jsx-runtime").JSX.Element;
    "log-out-01": () => import("react/jsx-runtime").JSX.Element;
    search: () => import("react/jsx-runtime").JSX.Element;
    "check-circle": () => import("react/jsx-runtime").JSX.Element;
};
export type IconsKey = keyof typeof icons;
export interface IconProps {
    name: IconsKey;
    size?: 1 | 2 | 3;
    className?: string;
}
export declare const Icon: ({ name, size, className }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
