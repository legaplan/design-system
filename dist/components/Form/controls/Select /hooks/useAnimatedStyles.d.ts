import { View } from "react-native";
export declare const useAnimatedStyles: (showMenu: boolean) => {
    selectRef: import("react").RefObject<View>;
    menuMaxHeight: number;
    theme: import("../../../../..").Theme;
    handleTriggerLayout: () => void;
    menuAnimatedStyle: {
        opacity: 0 | 1;
        transform: {
            translateY: number;
        }[];
    };
};
