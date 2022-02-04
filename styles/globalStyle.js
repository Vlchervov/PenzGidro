import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Gilroy';
    src: url("../fonts/Gilroy-Light.ttf");
}

@font-face {
    font-family: 'Gilroy-Bold';
    src: url("../fonts/Gilroy-Bold.ttf");
}


    * {
        box-sizing: border-box;
    }

    html {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body {
        padding: 0;
        margin: 0;
        overscroll-behavior: none;
        background-color: white;
    }
 `;
export default GlobalStyle;
