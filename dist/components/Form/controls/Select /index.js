import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Container, Item, Label, Menu, Trigger } from "./styles";
import { useToggle } from "../../../../hooks/useToggle";
import { useAnimatedStyles } from "./hooks/useAnimatedStyles";
import { Input } from "../Input";
import { BaseIcon } from "../../../../components/BaseIcon";
export const Select = ({ getValue, getLabel, onSelect, options = [], selectedOption, hasError, placeholder = "Selecione", nestedScrollEnabled = false, }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const { value: showMenu, handleToggle: handleToggleMenu } = useToggle();
    const { handleTriggerLayout, theme, menuAnimatedStyle, selectRef, menuMaxHeight, } = useAnimatedStyles(showMenu);
    useEffect(() => {
        if (selectedOption) {
            const newOption = options.find((option) => getValue(option) === selectedValue);
            if (newOption && newOption !== selectedValue) {
                setSelectedValue(getValue(newOption) || "");
            }
        }
    }, [selectedOption, options, getValue]);
    const handleSelectOption = (option) => {
        const optionValue = getValue(option);
        const isSelected = selectedOption === optionValue;
        onSelect?.(isSelected ? "" : option);
        setSelectedValue(isSelected ? "" : optionValue);
        handleToggleMenu();
    };
    return (_jsxs(Container, { onLayout: handleTriggerLayout, ref: selectRef, children: [_jsx(Trigger, { onPress: handleToggleMenu, children: _jsx(Input, { hasError: hasError, readOnly: true, value: selectedValue, placeholder: placeholder, suffix: "chevron-down" }) }), showMenu && (_jsx(Menu, { nestedScrollEnabled: nestedScrollEnabled, maxHeight: menuMaxHeight, style: [menuAnimatedStyle], children: options.map((option) => {
                    const optionValue = getValue(option);
                    const isSelected = optionValue === selectedOption;
                    return (_jsxs(Item, { isSelected: isSelected, onPress: () => handleSelectOption(option), children: [_jsx(Label, { color: "primary", children: getLabel(option) }), isSelected && (_jsx(BaseIcon, { name: "check", color: theme.colors.foreground.brandPrimary }))] }, getValue(option)));
                }) }))] }));
};
