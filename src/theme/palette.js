import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#7c7c7c',
  600: '#000000',
  700: '#414141',
  800: '#2c2c2c',
  900: '#000000',
  500_8: alpha('#414141', 0.08),
  500_12: alpha('#414141', 0.12),
  500_16: alpha('#414141', 0.16),
  500_24: alpha('#414141', 0.24),
  500_32: alpha('#414141', 0.32),
  500_48: alpha('#414141', 0.48),
  500_56: alpha('#414141', 0.56),
  500_80: alpha('#414141', 0.8)
};

const PRIMARY = {
  lighter: '#f48a8d',
  light: '#f05c5f',
  main: '#ed3c40',
  dark: '#750b0d',
  darker: '#460608',
  contrastText: '#fff'
};
const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff'
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff'
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[900]
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[900]
};
const ACTIVE = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: '#fff'
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff'
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main)
};

const THEMES = {
  light_bg: '#ffffff',
  light_subbg: '#e1e0e0',
  dark_bg: '#2d2d2d',
  dark_subbg: '#161616',
  red: '#ed3c40',
  green: '#54D62C',
  blue: '#1890FF',
  orange: '#ff9400'
};

const CHART_COLORS = {
  red: ['#ed3c40', '#f05c5f', '#f48a8d', '#FFE7D9'],
  green: ['#54D62C', '#54D62C', '#AAF27F', '#C0F2DC'],
  blue: ['#2D99FF', '#74CAFF', '#A5F3FF', '#CCFAFF'],
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF']
};

const CHART_CX = {
  red: '#ed3c40',
  green: '#54D62C',
  blue: '#2D99FF',
  yellow: '#FFE700',
  violet: '#826AF9'
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  active: { ...ACTIVE },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  chartX: { ...CHART_CX },
  divider: GREY[500_24],
  text: { primary: GREY[900], secondary: GREY[800], disabled: GREY[500] },
  themes: {
    lightbg: THEMES.light_bg,
    lightsubbg: THEMES.light_susbbg,
    darkbg: THEMES.dark_bg,
    darksubbg: THEMES.dark_subbg,
    red: THEMES.red,
    blue: THEMES.blue,
    green: THEMES.green,
    orange: THEMES.orange
  },
  background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default palette;
