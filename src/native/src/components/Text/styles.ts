import styled from "styled-components/native";
import { customTextStyles } from "./variants.styles";
import { CustomTextProps, CustomTextSizes } from "./types";

const getTextLineHeight = (textSize: keyof CustomTextSizes) => {
  const lineHeights = {
    xs: "1.5em",
    sm: "1.42em",
    md: "1.5em",
    lg: "1.55em",
    xl: "1.5em",
    default: "1.42em",
  };

  return lineHeights[textSize];
};

export const BaseText = styled.Text<CustomTextProps>`
  color: ${(props) => customTextStyles.color[props.color ?? "default"]};
  font-size: ${(props) => customTextStyles.size[props.size ?? "default"]};
  font-weight: ${(props) => customTextStyles.weight[props.weight ?? "default"]};
  line-height: ${(props) => getTextLineHeight(props.size || "default")};
`;
