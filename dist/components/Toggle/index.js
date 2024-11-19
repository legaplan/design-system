import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Thumb, Track } from "./styles";
import { useAnimatedStyles } from "./hooks/useAnimatedStyles";
import { Pressable } from "react-native";
import { isDefined } from "../../utils/isDefined";
export const Toggle = ({ size = "sm", onChange, value }) => {
    const [isActive, setIsActive] = useState(value ?? false);
    const handleToggleActive = () => {
        setIsActive(!isActive);
        onChange?.(!isActive);
    };
    useEffect(() => {
        if (isDefined(value) && isActive !== value)
            setIsActive(value);
    }, [value]);
    const { thumbAnimatedStyles, trackAnimatedStyles } = useAnimatedStyles({
        isActive,
        size,
    });
    return (_jsx(Pressable, { onPress: handleToggleActive, children: _jsx(Track, { isActive: isActive, size: size, style: trackAnimatedStyles, children: _jsx(Thumb, { isActive: isActive, size: size, style: thumbAnimatedStyles }) }) }));
};
