import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --colorDark: #18191a;
    --colorDark0: #3a3b3c;
    --colorDark1: #242526;
    --colorDark2: ${lighten(0.2, '#18191a')};
    --colorDark4: ${lighten(0.4, '#18191a')};

    --colorBlue: #2c88ff;
    --colorGreen: #1cb508;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #E9E8F5;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, p {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
