export const mapRawValuesToPixel = (raw) => {
    return Object.entries(raw).reduce((acc, [key, value]) => {
        return { ...acc, [key]: `${value}px` };
    }, {});
};
