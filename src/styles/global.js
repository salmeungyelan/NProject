import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
      font-family: 'Pretendard';
      src: url('/assets/font/Pretendard-Light.otf') format('opentype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'Pretendard';
      src: url('/assets/font/Pretendard-Regular.otf') format('opentype');
      font-weight: 400;
    }

    @font-face {
      font-family: 'Pretendard';
      src: url('/assets/font/Pretendard-Medium.otf') format('opentype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'Pretendard';
      src: url('/assets/font/Pretendard-SemiBold.otf') format('opentype');
      font-weight: 600;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
      font-family: 'Pretendard' !important;
      font-weight: 400;
    }

    body {
      font-family: 'Pretendard', sans-serif;
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

    ::-webkit-scrollbar {
        display: none;
      }
`;

export default GlobalStyles;
