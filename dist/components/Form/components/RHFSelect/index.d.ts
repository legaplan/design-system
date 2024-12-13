import { SelectProps } from "../../controls/Select ";
export interface RHFSelectProps extends Omit<SelectProps, "onSelect" | "selectedOption" | "hasError"> {
    name: string;
}
export declare const RHFSelect: <T>({ name, ...props }: RHFSelectProps) => import("react/jsx-runtime").JSX.Element;
