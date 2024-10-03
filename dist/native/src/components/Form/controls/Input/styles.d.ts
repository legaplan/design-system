import { TextInput, View } from "react-native";
import { DefaultTheme } from "styled-components/native";
interface InputContainerProps {
    hasSuffixIcon?: boolean;
    isFocused?: boolean;
    hasError?: boolean;
}
export declare const StyledInput: import("styled-components").StyledComponent<typeof TextInput, DefaultTheme, {}, never>;
export declare const InputContainer: import("styled-components").StyledComponent<typeof import("react-native").View, DefaultTheme, InputContainerProps, never>;
export declare const SuffixContainer: import("styled-components").StyledComponent<typeof View, DefaultTheme, {}, never>;
export {};
