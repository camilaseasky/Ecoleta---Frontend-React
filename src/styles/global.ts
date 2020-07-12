import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #E5E5E5;
    color: #322153;
    -webkit-font-smoothing: antialiased;
  }

  border-style, -moz-user-input, button {
    font-family: 'Roboto', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Ubuntu', serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;