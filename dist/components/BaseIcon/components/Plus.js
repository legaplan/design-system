import { jsx as _jsx } from "react/jsx-runtime";
import Svg, { Path } from "react-native-svg";
const Plus = ({ color }) => {
    return (_jsx(Svg, { height: "100%", width: "100%", viewBox: "0 0 24 24", fill: "none", children: _jsx(Path, { stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 5v14m-7-7h14" }) }));
};
export default Plus;
