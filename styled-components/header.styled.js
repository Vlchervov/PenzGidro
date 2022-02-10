import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  .Main {
    width: 100vw;
    display: flex;

    @media (max-width: 940px) {
      width: 100%;
    }
    @media (max-width: 812px) {
      flex-direction: column;
      height: 78vh;
      padding: 0 0 0 0;
      margin: 0 0 0 0;
    }
  }

  .info {
    flex: 0 0 46%;
    background: #5551f7;

    @media (max-width: 1540px) {
      flex: 0 0 47%;
      height: 95vh;
    }

    @media (max-width: 1368px) {
      height: 95vh;
    }

    @media (max-width: 1000px) {
      flex: 0.88;
    }
  }

  .logo {
    display: flex;
    position: relative;
    padding: 33px 0 0px 80px;
    margin: 0 0 0 0;

    @media (max-width: 812px) {
      padding: 30px 0 0 30px;
    }

    h2 {
      color: #f6f6f6;
      font-size: 14px;
      font-family: Gilroy;
      padding: 12px 0 0 20px;
      letter-spacing: 0.152em;
      line-height: 100%;
      font-size: 13px;
      text-transform: uppercase;
      margin: 0 0 0 0;
      user-select: none;
    }

    img {
      width: 39px;
      height: 38px;
      user-select: none;
    }
  }

  .path {
    position: relative;
    display: block;
    padding: 166px 0px 0px 86px;

    @media (max-width: 812px) {
      padding: 66px 0 0 30px;
    }
    a {
      position: relative;
      font-family: Gilroy;
      font-size: 14px;
      line-height: 22px;
      color: #f6f6f6;
      font-style: normal;
      opacity: 0.4;
      user-select: none;

      &:nth-of-type(1) {
        padding-right: 26px;

        ::before {
          height: 13px;
          left: 63px;
          top: 3px;
          width: 90px;
          content: "";
          position: absolute;
          background: url("../img/arrow.svg") no-repeat;
        }
      }
    }
  }

  h1 {
    color: #f6f6f6;
    font-weight: 500;
    font-size: 84px;
    line-height: 84px;
    font-family: Gilroy;
    margin: 0 0 0 0;
    padding: 27px 0 0 80px;
    user-select: none;

    @media (max-width: 1000px) {
      font-size: 62px;
    }

    @media (max-width: 812px) {
      font-size: 40px;
      padding: 20px 0 0 30px;
    }
  }

  p {
    color: white;
    font-family: Gilroy;
    padding: 235px 0 24px 80px;
    font-size: 25px;
    line-height: 40px;
    font-weight: 300;
    user-select: none;

    @media (max-width: 1505px) {
      padding: 230px 0 0 30px;
    }

    @media (max-width: 1400px) {
      padding: 200px 0 0 25px;
    }

    @media (max-width: 1160px) {
      font-size: 20px;
      padding: 200px 0 0 15px;
    }

    @media (max-width: 1000px) {
      font-size: 18px;
    }

    @media (max-width: 812px) {
      font-size: 22px;
      line-height: 26px;
      color: #ffffff;
      margin: 0 0 0 0;
      padding: 30px 30px 60px 30px;
    }
  }

  .plash {
    position: absolute;
    width: 80vw;
    height: 1px;
    top: 583px;
    background: #d6d6d6;
    transform: matrix(-1, 0, 0, 1, 0, 0);

    @media (max-width: 812px) {
      display: none;
    }
  }

  .tanksAndSmokeStacks {
    display: flex;
    flex: 0 0 50.5%;
    background-position: 100.5%;
    background-repeat: no-repeat;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("../img/tanks-and-smokestacks-P8YMA6G.jpg");
    z-index: 8;

    @media (max-width: 1368px) {
      height: 95vh;
    }

    @media (max-width: 812px) {
      background: url("../img/tanks-and-smokestacks-P8YMA6G.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: 0 0;
    }
  }
`;
