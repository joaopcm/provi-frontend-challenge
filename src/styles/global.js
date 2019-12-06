import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import background from '~/assets/background.png';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: ${colors.secondary} url(${background}) no-repeat center center
    fixed;
    background-size: cover;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, th {
    color: ${colors.dark};
  }

  p, span {
    color: ${colors.darkGrey};
  }`;
