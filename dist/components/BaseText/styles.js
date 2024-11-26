import styled from "styled-components/native";
export const StyledBaseText = styled.Text `
  color: ${({ theme, color = "secondary" }) => theme.colors.text[color]};
  font-size: ${({ theme, size = "3" }) => theme.fontSize[size]};
  font-weight: ${({ weight = 2 }) => weight};
`;
// TODO: Refactor base text line height
// const getTextLineHeight = (textSize: keyof FontSizeInPixels) => {
//   const lineHeights = {
//     2: "18px",
//     3: "20px",
//     4: "24px",
//     5: "28px",
//     6: "30px",
//   };
//   return lineHeights[textSize];
// };
