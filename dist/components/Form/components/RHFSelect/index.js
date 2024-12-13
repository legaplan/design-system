import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from "../../controls/Select ";
import { useFormContext } from "react-hook-form";
export const RHFSelect = ({ name, ...props }) => {
    const { getValue } = props;
    const { setValue, watch, getFieldState, formState } = useFormContext();
    const { error, isDirty } = getFieldState(name, formState);
    const hasError = (error && isDirty) || (error && formState.isSubmitted);
    const selectedOption = watch(name);
    const handleSelect = (option) => {
        const optionValue = getValue(option);
        setValue(name, optionValue, {
            shouldValidate: true,
        });
    };
    return (_jsx(Select, { onSelect: handleSelect, selectedOption: selectedOption, hasError: hasError, ...props }));
};
