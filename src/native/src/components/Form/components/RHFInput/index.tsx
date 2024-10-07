import { useFormContext } from "react-hook-form";
import Input, { InputProps } from "../../controls/Input";
import React, { useEffect } from "react";

export interface RHFInputProps extends InputProps {
  name: string;
}

const RHFInput = ({ name, mask, ...props }: RHFInputProps) => {
  const { formState, register, watch, setValue, getFieldState } =
    useFormContext();

  const { defaultValues } = formState;

  const { error, isDirty } = getFieldState(name, formState);
  const hasError = (error && isDirty) || (error && formState.isSubmitted);

  const currentValue = watch(name);

  useEffect(() => {
    register(name);
  }, [register, name]);

  const handleChange = (value: string) => {
    setValue(name, value, {
      shouldTouch: true,
      shouldDirty: true,
      shouldValidate: hasError ? true : false,
    });
  };

  useEffect(() => {
    if (defaultValues?.[name] && defaultValues?.[name] === currentValue) {
      const value = mask ? mask(defaultValues[name]) : defaultValues[name];
      handleChange(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues]);

  return <Input onChange={handleChange} {...props} />;
};

export default RHFInput;
