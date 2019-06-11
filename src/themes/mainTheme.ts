import { ThemeType } from './themeType';

const fonts = {
  proportional: '"Roboto", "Arial", sans-serif',
  monospace: '"IBM Plex Mono", "Courier New", monospace',
};

const colorPalette = {
  white: '#ffffff',
  standardBlack: '#0e1111',
  cyanTronBlue: '#6FC3DF',
  darkGray: '#4d5363',
};

const mainTheme: ThemeType = {
  root: {
    color: colorPalette.standardBlack,
    backgroundColor: colorPalette.darkGray,
    minWidth: 1360,
  },
  text: {
    standard: {
      fontFamily: fonts.proportional,
    },
    mono: {
      fontFamily: fonts.monospace,
    },
  },
  card: {
    borderColor: colorPalette.cyanTronBlue,
    backgroundColor: colorPalette.standardBlack,
    textColor: colorPalette.white,
  },
};

export default mainTheme;
