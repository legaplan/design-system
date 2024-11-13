import React from "react";
import { BaseText } from "../../../BaseText";

export interface LabelProps {
  isRequired?: boolean;
  children: React.ReactNode;
}
export const Label = ({ children, isRequired }: LabelProps) => {
  return (
    <BaseText color="secondary" weight="medium">
      {children}
      {isRequired && (
        <BaseText color={"brand_tertiary"} weight="medium">
          {" "}
          *
        </BaseText>
      )}
    </BaseText>
  );
};
