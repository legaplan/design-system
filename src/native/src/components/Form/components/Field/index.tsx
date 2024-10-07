import React from "react";
import { FieldContainer } from "./styles";

const FormField = ({ children }: { children: React.ReactNode }) => {
  return <FieldContainer>{children}</FieldContainer>;
};

export default FormField;
