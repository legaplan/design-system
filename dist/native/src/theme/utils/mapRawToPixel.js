"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRawValuesToPixel = void 0;
const mapRawValuesToPixel = (raw) => {
    return Object.entries(raw).reduce((acc, [key, value]) => {
        return { ...acc, [key]: `${value}px` };
    }, {});
};
exports.mapRawValuesToPixel = mapRawValuesToPixel;
