"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useComponentProps = exports.ComponentPropsProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ComponentPropsContext = (0, react_1.createContext)(undefined);
const ComponentPropsProvider = ({ value, children, }) => {
    return ((0, jsx_runtime_1.jsx)(ComponentPropsContext.Provider, { value: value, children: children }));
};
exports.ComponentPropsProvider = ComponentPropsProvider;
const useComponentProps = () => {
    const context = (0, react_1.useContext)(ComponentPropsContext);
    if (context === undefined) {
        throw new Error("useComponentProps must be used within a ComponentPropsProvider");
    }
    return context;
};
exports.useComponentProps = useComponentProps;
