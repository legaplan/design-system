import { jsx as _jsx } from "react/jsx-runtime";
import Svg, { Path } from "react-native-svg";
const Check = ({ color, strokeWidth }) => {
    return (_jsx(Svg, { width: "100%", height: "100%", viewBox: "0 0 24 24", fill: "none", children: _jsx(Path, { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: strokeWidth, d: "M20 6 9 17l-5-5" }) }));
};
export default Check;
