import { jsx as _jsx } from "react/jsx-runtime";
import Svg, { Path } from "react-native-svg";
const ChevronLeft = ({ color }) => {
    return (_jsx(Svg, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: _jsx(Path, { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m15 18-6-6 6-6" }) }));
};
export default ChevronLeft;
