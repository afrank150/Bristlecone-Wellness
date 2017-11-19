import { createMuiTheme } from 'material-ui/styles';

// overides certain default mui themes
const theme = createMuiTheme({
  palette: {
    primary: {
      50: '#e6f2eb',
      100: '#c0dece',
      200: '#96c8ad',
      300: '#6cb28c',
      400: '#4da274',
      500: '#2d915b',
      600: '#288953',
      700: '#227e49',
      800: '#1c7440',
      900: '#11622f',
      A100: '#98ffba',
      A200: '#65ff98',
      A400: '#32ff76',
      A700: '#19ff65',
      contrastDefaultColor: 'light',
    },
    secondary: {
      50: '#f5f4f4',
      100: '#e5e5e3',
      200: '#d4d3d0',
      300: '#c3c1bd',
      400: '#b6b4af',
      500: '#a9a7a1',
      600: '#a29f99',
      700: '#98968f',
      800: '#8f8c85',
      900: '#7e7c74',
      A100: '#ffffff',
      A200: '#fbf0d2',
      A400: '#ffe49c',
      A700: '#ffdd82',
      contrastDefaultColor: 'dark',
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    display1: {
      fontFamily: '"Julius Sans One", sans-serif',
    },
    display2: {
      fontFamily: '"Julius Sans One", sans-serif',
    },
    display3: {
      fontFamily: '"Julius Sans One", sans-serif',
    },
    display4: {
      fontFamily: '"Julius Sans One", sans-serif',
    },
    headline: {
      fontFamily: '"Julius Sans One", sans-serif',
    },
    title: {
      fontFamily: '"Julius Sans One", sans-serif',
    },
  },
  breakpoints: {
    values: {
      xs: 1,
      sm: 730,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
