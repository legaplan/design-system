import { useFormContext } from "react-hook-form";
import Error from "../../../Error/Error";
export interface ErrorProps {
  name: string;
}

const FormError = ({ name }: ErrorProps) => {
  const { formState, getFieldState } = useFormContext();
  const { error, isDirty } = getFieldState(name, formState);
  console.log(error);
  if (!error || (!isDirty && !formState.isSubmitted)) return null;

  return <Error message={error.message} />;
};

export default FormError;
