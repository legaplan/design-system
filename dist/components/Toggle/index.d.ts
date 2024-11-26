import { ToggleSizes } from "./types";
export interface ToggleProps {
    size?: ToggleSizes;
    onChange?: (value: boolean) => void;
    value?: boolean;
}
export declare const Toggle: ({ size, onChange, value }: ToggleProps) => import("react/jsx-runtime").JSX.Element;
