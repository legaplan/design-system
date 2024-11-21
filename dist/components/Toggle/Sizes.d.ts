import { DefaultTheme } from "styled-components";
import { ToggleSizes } from "./types";
interface SizeStyleProps {
    size: ToggleSizes;
    isActive: boolean;
    theme: DefaultTheme;
}
export declare const ThumbSizes: (theme: DefaultTheme) => {
    sm: {
        width: string;
        height: string;
        raw: {
            width: number;
            height: number;
        };
    };
    md: {
        width: string;
        height: string;
        raw: {
            width: number;
            height: number;
        };
    };
};
export declare const getThumbSpacingStyles: ({ size, theme, }: SizeStyleProps) => import("styled-components").FlattenSimpleInterpolation;
export declare const TrackSizes: (theme: DefaultTheme) => {
    sm: {
        width: string;
        height: string;
    };
    md: {
        width: string;
        height: string;
    };
};
export declare const getTrackSpacingStyles: ({ size, theme }: SizeStyleProps) => import("styled-components").FlattenSimpleInterpolation;
export {};
