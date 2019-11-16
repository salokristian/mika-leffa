import 'styled-components';

// Extend the default theme type
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryLighter: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryLighter: string;
      secondaryDark: string;
      secondaryDarker: string;
      white: string;
    };
  }
}
