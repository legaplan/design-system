import { InputProps } from "../../controls/Input";
export interface RHFInputProps extends InputProps {
    name: string;
}
declare const RHFInput: ({ name, mask, ...props }: RHFInputProps) => import("react/jsx-runtime").JSX.Element;
export default RHFInput;
