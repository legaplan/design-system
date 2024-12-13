export declare const Form: {
    Field: ({ children }: {
        children: React.ReactNode;
    }) => import("react/jsx-runtime").JSX.Element;
    Label: ({ children, isRequired }: import("./components/Label").LabelProps) => import("react/jsx-runtime").JSX.Element;
    Input: ({ name, mask, ...props }: import("./components/RHFInput").RHFInputProps) => import("react/jsx-runtime").JSX.Element;
    Error: ({ name }: import("./components/FormError").ErrorProps) => import("react/jsx-runtime").JSX.Element | null;
    Select: <T>({ name, hasError, ...props }: import("./components/RHFSelect").RHFSelectProps) => import("react/jsx-runtime").JSX.Element;
};
