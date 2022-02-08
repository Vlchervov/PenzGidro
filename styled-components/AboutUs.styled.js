import styled from "styled-components";

export const AboutCompany = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 85px;

  @media (max-width: 812px) {
    padding-right: 0px;
  }

  div:nth-of-type(1) {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;

    &:nth-child(1) {
      @media (max-width: 812px) {
        flex-direction: column;
        width: 100%;
      }

      @media screen and (max-width: 1440px) {
        flex-wrap: wrap;
      }
    }

    h2:nth-child(1) {
    font-size: 47px;
    font-family: Gilroy;
    line-height: 70px;
    color: #000000;
    font-weight: 300;
    margin: 136px 0px;
    flex: 40%;

    @media screen and (max-width: 1440px) {
      margin: 0 0 0 0;
        padding: 40px 0px 60px 40px;
        color: #1C1C1C;
        font-size: 45px;
      }
  }

    p {
    font-family: Gilroy;
    margin: 0 0 0 0;
    padding: 156px 60px 125px 78px;
    font-size: 25px;
    font-weight: bold;
    line-height: 40px;
    color: #1C1C1C;

    @media (max-width: 812px) {
      font-size: 22px;
      margin: 0 0 0 0;
      padding: 0px 30px 60px 30px;
    }
  

  }

  .beginAboutDescription {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding: 0px 0px 0px 80px;


      @media screen and (max-width: 1440px) {
        padding-left: 0;
      }
      @media (max-width: 812px) {
        line-height: 25px;
        flex-direction: column;
      }
  }
  }

  div:nth-of-type(2) {
    position: relative;
    display: flex;
    justify-content: space-between;

    &:nth-child(2) {
      @media (max-width: 812px) {
        flex-direction: column;
      }
      @media screen and (max-width: 1440px) {
        flex-wrap: wrap;
      }

      img {
        @media (max-width: 812px) {
          width: 100vw;
        }
      }


    h4 {
      font-size: 17px;
      font-family: Gilroy;
      line-height: 32px;
      color: #000000;
      letter-spacing: 0.026em;
      margin-top: 0px;

      @media (max-width: 812px) {
        color: #1C1C1C;
        padding-top: 18px;
        padding-left: 29px;
        padding-right: 31px;
        line-height: 35px;
        font-size: 22px;

      }
    }

    p {
      font-family: Gilroy;
      font-size: 18px;
      line-height: 32px;
      margin: 0px 0 0 0px;
      padding: 10px 0 0 0;
      color: #000000;

      @media (max-width: 812px) {
        padding-top: 0px;
        font-size: 22px;
        color: #1C1C1C;
        padding-left: 29px;
        padding-bottom: 22px;
        padding-right: 31px;
        line-height: 35px;
      }
    }

    p:nth-of-type(2) {
      padding-top: 32px;
      font-size: 18px;
      font-family: Gilroy;
      color: #000000;

      @media (max-width: 812px) {
        color: #1c1c1c;
        padding-left: 29px;
        font-size: 22px;
        padding-right: 31px;
        line-height: 35px;
      }
    }

    .aboutDescription {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0px 0px 0 80px;

      @media screen and (max-width: 1440px) {
        padding-left: 0;
      }

      @media (max-width: 812px) {
        line-height: 25px;
        flex-direction: column;
      }
    }
  }
`;
