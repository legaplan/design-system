import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";

const ChevronLeft = ({ color }: TSvg) => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 18-6-6 6-6"
      />
    </Svg>
  );
};

export default ChevronLeft;
