/** Typing for mainTheme file */

export interface ThemeType {
  root: {
    color: string;
    backgroundColor: string;
    minWidth: number;
  };
  text: {
    standard: {
      fontFamily: string;
    };
    mono: {
      fontFamily: string;
    };
  };
}
