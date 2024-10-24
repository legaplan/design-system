import { StyledBaseText } from "./styles";
import { TextProps } from "./types";

const BaseText = ({ children, ...props }: TextProps) => {
  return <StyledBaseText {...props}>{children}</StyledBaseText>;
};

export default BaseText;
