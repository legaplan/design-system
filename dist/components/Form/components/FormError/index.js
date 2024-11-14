import { jsx as _jsx } from "react/jsx-runtime";
import { useFormContext } from "react-hook-form";
import { Error } from "../../../Error";
export const FormError = ({ name }) => {
    const { formState, getFieldState } = useFormContext();
    const { error, isDirty } = getFieldState(name, formState);
    if (!error || (!isDirty && !formState.isSubmitted))
        return null;
    return _jsx(Error, { message: error.message });
};
