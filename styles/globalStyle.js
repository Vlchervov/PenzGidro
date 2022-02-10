import { createGlobalStyle } from 'styled-components';

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

.swiper {
    overflow-x: hidden;
}

.swiper-initialized {
    overflow-x: hidden;
    padding-top: 20px;
}

    .swiper-wrapper {
        
        display: flex;
        position: relative;
  }

  .swiper-slide {
      position: relative;
      flex-shrink: 0;
  }


    ::-webkit-scrollbar {
        height: 8px;
        width: 10px;
    background-color: #d6d6d6;
    }

    ::-webkit-scrollbar-thumb {
    background: linear-gradient(rgba(253, 12, 0, 0.6), rgba(252, 0, 313, 0.5));
    border-radius: 25px;
}
 `;
export default GlobalStyle;
