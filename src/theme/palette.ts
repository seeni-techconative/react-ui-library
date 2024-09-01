import { PaletteOptions } from "@mui/material";

export const palette: PaletteOptions = {
    primary: {
        main: "#0074E8", // blue-600
        light: "#A8DFFF", // blue-200
        dark: "#002F75", // blue-900
        contrastText: "#FFF",
    },
    error: {
        main: "#DC2626", // red-600
        light: "#FFD5CF", // red-200
        dark: "#69020C", // red-900
        contrastText: "#FFF",
    },
    warning: {
        main: "#FFB600", // yellow-600
        light: "#FFF1A3", // yellow-200
        dark: "#895400", // yellow-900
        contrastText: "#FFF",
    },
    success: {
        main: "#895400", // green-600
        light: "#895400", // green-200
        dark: "#002D15", // green-900
        contrastText: "#FFF",
    },
    text: {
        primary: "#121417", // grayscale-1600
        secondary: "#656C78", // grayscale-900
        disabled: "#BAC0C7", // grayscale-600
    },
    background: {
        default: "#F0F4F8", // grayscale-300
        paper: "#FFF",
    },
    divider: "#F0F4F8", // grayscale-300
    grey: {
        "100": "#F8FAFC", // grayscale-200
        "200": "#E7ECF1", // grayscale-400
        "300": "#BAC0C7", // grayscale-600
        "400": "#8C939F", // grayscale-800
        "500": "#555B64", // grayscale-1000
        "600": "#393F48", // grayscale-1200
        "700": "#25282E", // grayscale-1400
        "800": "#1B1E22", // grayscale-1500
        "900": "#121417", // grayscale-1600
    },
};
