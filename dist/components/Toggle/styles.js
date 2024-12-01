import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { getThumbSpacingStyles, getTrackSpacingStyles } from "./Sizes";
export const Thumb = styled(Animated.View) `
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius[99]};
  background: ${({ theme }) => theme.colors.primary.base.white};

  shadow-color: rgb(10, 13, 18);
  shadow-offset: 0 1px;
  shadow-opacity: 0.15;
  shadow-radius: 2px;

  elevation: 2;

  ${getThumbSpacingStyles}
`;
export const Track = styled(Animated.View) `
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius[3]};

  padding: ${({ theme }) => theme.space[0.5]};
  
  ${getTrackSpacingStyles}
`;
