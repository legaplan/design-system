import { InputProps } from "../../controls/Input";
export interface RHFInputProps extends Omit<InputProps, "value"> {
    name: string;
}
export declare const RHFInput: ({ name, mask, ...props }: RHFInputProps) => import("react/jsx-runtime").JSX.Element;
