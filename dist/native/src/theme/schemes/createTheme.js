"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLightTheme = exports.createDarkTheme = void 0;
const createBackgroundScheme_1 = require("./createBackgroundScheme");
const createBorderScheme_1 = require("./createBorderScheme");
const createComponentsScheme_1 = require("./createComponentsScheme");
const createForegroundScheme_1 = require("./createForegroundScheme");
const createTextScheme_1 = require("./createTextScheme");
const createUtilityScheme_1 = require("./createUtilityScheme");
const createDarkTheme = (theme) => {
    return {
        components: (0, createComponentsScheme_1.createDarkComponentsScheme)(theme),
        utility: (0, createUtilityScheme_1.createDarkUtilityScheme)(theme),
        background: (0, createBackgroundScheme_1.createLightBackgroundScheme)(theme),
        border: (0, createBorderScheme_1.createLightBorderScheme)(theme),
        text: (0, createTextScheme_1.createLightTextScheme)(theme),
        foreground: (0, createForegroundScheme_1.createLightForegroundScheme)(theme),
    };
};
exports.createDarkTheme = createDarkTheme;
const createLightTheme = (theme) => {
    return {
        components: (0, createComponentsScheme_1.createLightComponentsScheme)(theme),
        utility: (0, createUtilityScheme_1.createLightUtilityScheme)(theme),
        background: (0, createBackgroundScheme_1.createDarkBackgroundScheme)(theme),
        border: (0, createBorderScheme_1.createDarkBorderScheme)(theme),
        text: (0, createTextScheme_1.createDarkTextScheme)(theme),
        foreground: (0, createForegroundScheme_1.createDarkForegroundScheme)(theme),
    };
};
exports.createLightTheme = createLightTheme;
