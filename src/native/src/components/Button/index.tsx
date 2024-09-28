import { ButtonContainer, ButtonText } from "./styles";
export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};
export const Button = ({ text, onPress, color, textColor }: ButtonProps) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{text}</ButtonText>
  </ButtonContainer>
);
