import styled from "styled-components";

export const AboutCompany = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 85px;

  h2:nth-child(1) {
    flex: 36%;
    font-size: 47px;
    font-family: Gilroy;
    line-height: 70px;
    color: #000000;
    font-weight: 300;
    padding: 97px 80px;
  }

  h2:nth-child(2) {
    padding: 136px 110px;
    padding-right: 50px;
    padding-bottom: 105px;
    font-family: Gilroy;
    font-size: 25px;
    line-height: 40px;
    color: #000000;
  }

  div {
    position: relative;
    display: flex;
    justify-content: space-between;

    &:nth-child(2) {
      @media screen and (max-width: 1440px) {
        flex-wrap: wrap;
      }
    }

    img {
      height: 580px;
      width: 881px;
    }

    h5 {
      font-size: 17px;
      font-family: Gilroy;
      line-height: 32px;
      color: #101010;
      letter-spacing: 0.026em;
      margin-top: 0px;
    }

    p {
      font-family: Gilroy;
      font-size: 18px;
      line-height: 32px;
      margin: 0px 0 0 0px;
      padding: 4px 0 0 0;
      color: #000000;
    }

    p:nth-of-type(2) {
      padding-top: 32px;
      font-size: 18px;
      font-family: Gilroy;
      color: #000000;
    }

    .aboutDescription {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0px 0px 0 80px;

      @media screen and (max-width: 1440px) {
        padding-left: 0;
      }
    }
  }
`;
