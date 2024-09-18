import React from "react";
import { ButtonText, MobileButton } from "./styles";

const NativeButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => (
  <MobileButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </MobileButton>
);

export default NativeButton;
