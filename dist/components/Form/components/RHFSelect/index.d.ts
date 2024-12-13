import { SelectProps } from "../../controls/Select ";
export interface RHFSelectProps extends Omit<SelectProps, "onSelect" | "selectedOption"> {
    name: string;
}
export declare const RHFSelect: <T>({ name, hasError, ...props }: RHFSelectProps) => import("react/jsx-runtime").JSX.Element;
