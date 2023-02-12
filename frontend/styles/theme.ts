import {createTheme, hexToRgb, responsiveFontSizes} from "@mui/material";

export const theme = /*responsiveFontSizes*/(createTheme({
    typography: {
      fontFamily: [
          'Poppins',
          'Roboto',
          "ui-monospace",
          "Menlo", "Monaco", "'Cascadia Mono'", "'Segoe UI Mono'",
          "'Roboto Mono'", "'Oxygen Mono'", "'Ubuntu Monospace'", "'Source Code Pro'",
          "'Fira Mono'", "'Droid Sans Mono'", "'Courier New'", "monospace"
      ].join(','),
    },
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#383A42',
            light: '#535662',
            dark: '#252730',
            contrastText: '#A0A2B1',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#F3F3F3',
        },
        background: {
            default: '#1F2128',
        },
        info: {
            main: '#508EF7',
        },
        success: {
            main: '#5FD754',
        },
    },
}));

export const convertHexToRGB = (hex: string) => {
    if (hex.indexOf('#') !== -1) hex = hex.substring(1)
    const aRgbHex = hex.match(/.{1,2}/g);
    if (!aRgbHex) return [0,0,0];
    return [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
}

export const primaryColor = theme.palette.primary.main
export const secondaryColor = theme.palette.secondary.main
export const infoColor = theme.palette.info.main
export const backgroundColor = theme.palette.background.default
export const backgroundColorRGB = convertHexToRGB(backgroundColor)

