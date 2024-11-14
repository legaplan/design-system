import { jsx as _jsx } from "react/jsx-runtime";
import Svg, { Path } from "react-native-svg";
const ChevronDown = ({ color }) => {
    return (_jsx(Svg, { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", children: _jsx(Path, { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m6 9 6 6 6-6" }) }));
};
export default ChevronDown;
