import { View } from "react-native";
import Animated from "react-native-reanimated";
export declare const Container: import("styled-components").StyledComponent<typeof View, import("styled-components").DefaultTheme, {}, never>;
export declare const Trigger: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View>>, import("styled-components").DefaultTheme, {}, never>;
export declare const Menu: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react-native-reanimated").AnimatedScrollViewProps & import("react").RefAttributes<Animated.ScrollView>>, import("styled-components").DefaultTheme, {
    maxHeight: number;
}, never>;
export declare const Item: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("react-native").PressableProps & import("react").RefAttributes<import("react-native").View>>, import("styled-components").DefaultTheme, {
    isSelected: boolean;
}, never>;
export declare const Label: import("styled-components").StyledComponent<({ children, ...props }: import("../../../..").TextProps) => import("react/jsx-runtime").JSX.Element, import("styled-components").DefaultTheme, {}, never>;
