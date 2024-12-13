export interface SelectProps<T = any> {
    options: T[];
    getValue: (option: T) => any;
    getLabel: (option: T) => string;
    nestedScrollEnabled?: boolean;
    placeholder?: string;
    onSelect?: (option: any) => void;
    selectedOption: T;
    hasError?: boolean;
}
export declare const Select: <T>({ getValue, getLabel, onSelect, options, selectedOption, hasError, placeholder, nestedScrollEnabled, }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
