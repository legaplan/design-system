export type ButtonProps = {
    onPress: () => void;
    text: string;
    color?: string;
    textColor?: string;
};
declare const Button: ({ text, onPress, color, textColor }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
