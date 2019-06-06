import * as styledComponents from 'styled-components';

import { ThemeType } from './themeType';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  withTheme,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeType
>;

export { css, createGlobalStyle, keyframes, withTheme, ThemeProvider };

export default styled;
