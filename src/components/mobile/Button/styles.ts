import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

export const MobileButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors?.background};
  border-radius: 5px;
`;

export const ButtonText = styled(Text)`
  color: white;
`;
