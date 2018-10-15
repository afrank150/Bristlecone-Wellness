import { createMuiTheme } from '@material-ui/core/styles';

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
    display3: {
      fontFamily: '"Julius Sans One", sans-serif',
      fontWeight: 700,
      fontSize: '48px',
      letterSpacing: '2px',
      textShadow: '2px 2px #534d3b',
    },
    display4: {
      fontFamily: '"Julius Sans One", sans-serif',
      fontWeight: 700,
      fontSize: '60px',
      letterSpacing: '6px',
      textShadow: '2px 2px #534d3b',
    },
    headline: {
      fontFamily: '"Julius Sans One", sans-serif',
      fontWeight: 600,
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
    },
    caption: {
      fontWeight: 100,
    },
  },
  breakpoints: {
    values: {
      xs: 1,
      sm: 780,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
