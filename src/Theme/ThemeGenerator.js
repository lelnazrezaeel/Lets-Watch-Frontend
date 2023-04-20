import { createTheme } from '@mui/material/styles'
import kalamehBlack from '../Fonts/KalamehWeb_Black.woff2'
import kalamehRegular from '../Fonts/KalamehWeb_Regular.woff2'
import kalamehBold from '../Fonts/KalamehWeb_Bold.woff2'

const Kalameh = {
  fontFamily: 'Kalameh',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Kalameh'),
    local('Kalameh-Regular'),
    url(${kalamehRegular}) format('woff2')
  `,
  unicodeRange: 'U+0600-06FF',
}

const KalamehBold = {
  fontFamily: 'Kalameh',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('Kalameh'),
    local('Kalameh-Bold'),
    url(${kalamehBold}) format('woff2')
  `,
  unicodeRange: 'U+0600-06FF',
}

const KalamehBlack = {
  fontFamily: 'Kalameh',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: `
    local('Kalameh'),
    local('Kalameh-Black'),
    url(${kalamehBlack}) format('woff2')
  `,
  unicodeRange: 'U+0600-06FF',
}

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0673F3',
      light: '#4885FF',
      dark: '#1552CC',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F6D101',
      light: '#fbd92a',
      dark: '#dab900',
      contrastText: '#090020',
    },
    warning: {
      main: '#EC9B12',
      light: '#f7bf62',
      dark: '#d28a16',
    },
    error: {
      main: '#E64646',
      light: '#FFD6CC',
      dark: '#c53b3b',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(0,0,0,0.56)',
      disabled: 'rgba(0,0,0,0.58)',
      hint: 'rgba(0,0,0,0.4)',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    success: {
      main: '#4BB34B',
    },
    divider: 'rgba(0,0,0,0.4)',
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: 48,
      lineHeight: 1,
    },
    h2: {
      fontWeight: 100,
      fontSize: 30,
    },
    h3: {
      fontWeight: 100,
      fontSize: 30,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
      fontSize: '1.6rem',
    },
    body1: {
      fontSize: '1.3rem',
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  spacing: 8,
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  shape: {
    borderRadius: 4,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  direction: 'rtl',
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Kalameh, KalamehBold, KalamehBlack],
      },
    },
  },
})