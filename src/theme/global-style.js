import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html,
  #root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  };

  body {
    font-size: 14px;
    color: black;
    font-family: 'Roboto', sans-serif;
    background:  ${({ theme }) => theme.background.white};
  }

  p, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
