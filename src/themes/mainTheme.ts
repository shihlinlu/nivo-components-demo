import { ThemeType } from './themeType';

const fonts = {
  proportional: '"Roboto", "Arial", sans-serif',
  monospace: '"IBM Plex Mono", "Courier New", monospace',
};

const colorPalette = {
  white: '#ffffff',
  standardBlack: '#0e1111',
};

const mainTheme: ThemeType = {
  root: {
    color: colorPalette.standardBlack,
    backgroundColor: colorPalette.white,
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
};

export default mainTheme;
