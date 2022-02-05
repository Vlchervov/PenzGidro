import styled from "styled-components";

export const AboutCompany = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 85px;

  h2:nth-child(1) {
    font-size: 47px;
    font-family: Gilroy;
    line-height: 70px;
    color: #000000;
    font-weight: 300;
    padding: 97px 81px;
  }

  h2:nth-child(2) {
    padding-top: 136px;
    padding-right: 166px;
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
    }

    p {
      font-family: Gilroy;
      font-size: 18px;
      line-height: 32px;
      margin: 0px 0 0 0px;
    }

    .aboutDescription {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0px 0px 0 79px;

      @media screen and (max-width: 1440px) {
        padding-left: 0;
      }
    }
  }
`;
