import React from "react";
import Text from "../../../BaseText";

export interface LabelProps {
  isRequired?: boolean;
  children: React.ReactNode;
}
const Label = ({ children, isRequired }: LabelProps) => {
  return (
    <Text color="secondary" weight="medium">
      {children}
      {isRequired && (
        <Text color={"brand_tertiary"} weight="medium">
          {" "}
          *
        </Text>
      )}
    </Text>
  );
};

export default Label;
