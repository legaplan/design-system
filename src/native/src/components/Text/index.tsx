import { BaseText } from "./styles";
import { TextProps } from "./types";

const Text = ({ children, ...props }: TextProps) => {
  return <BaseText {...props}>{children}</BaseText>;
};

export default Text;
