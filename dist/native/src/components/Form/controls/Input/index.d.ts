import { TextInputProps } from "react-native";
import { IconKeys } from "../../../Icon";
export interface InputProps extends TextInputProps {
    hasError?: boolean;
    suffix?: IconKeys;
    mask?: (value: string) => string;
    onFocus?: (event?: any) => void;
    onBlur?: (event?: any) => void;
    onChange?: (event?: any) => void;
}
declare const Input: ({ hasError, suffix, onFocus, onBlur, onChange, mask, ...props }: InputProps) => import("react/jsx-runtime").JSX.Element;
export default Input;
