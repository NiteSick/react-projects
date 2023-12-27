import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --primary: #4C5FD5;
    --secondary: #dadbf1;
    --black: #000000;
    --white: #fff;
  }


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

export const Breakpoints = {
  mobileXS: 480,
  mobile: 768,
  tablet: 1024,
  laptop: 1200,
  desktop: 1440,
};

export default GlobalStyles;
