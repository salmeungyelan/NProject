import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
      font-family: 'NotoSansKR';
      src: url('/assets/fonts/NotoSansKR-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'NotoSansKR';
      src: url('/assets/fonts/NotoSansKR-Regular.ttf') format('truetype');
      font-weight: 400;
    }

    @font-face {
      font-family: 'NotoSansKR';
      src: url('/assets/fonts/NotoSansKR-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'NotoSansKR';
      src: url('/assets/fonts/NotoSansKR-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      font-family: 'NotoSansKR' !important;
    }

    body {
      font-family: 'NotoSansKR', sans-serif;
      color: ${({ theme }) => theme.PALETTE.black};
    }

    button {
      border: none;
      cursor: pointer;
      font-family: inherit;
    }

    input, textarea {
      font-family: inherit;
    }

    ul > li {
      list-style: none;
    }
`;

export default GlobalStyles;
