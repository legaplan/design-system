import { jsx as _jsx } from "react/jsx-runtime";
import Svg, { Path } from "react-native-svg";
const AlertCircle = ({ color, strokeWidth }) => {
    return (_jsx(Svg, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: _jsx(Path, { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: strokeWidth, d: "M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" }) }));
};
export default AlertCircle;
