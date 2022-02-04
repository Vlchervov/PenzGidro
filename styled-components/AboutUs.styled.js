import styled from "styled-components";

export const AboutCompany = styled.div`
  display: flex;
  justify-content: space-between;

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
    position: absolute;
    display: flex;
    justify-content: space-between;

    img {
      margin-top: 404px;
      height: 580px;
      width: 881px;
    }

    h5 {
      font-size: 17px;
      font-family: Gilroy;
      line-height: 32px;
      color: #101010;
      letter-spacing: 0.026em;
      padding: 375px 0 0 79px;
    }

    p {
      font-family: Gilroy;
      font-size: 18px;
      line-height: 32px;
      white-space: nowrap;
      position: absolute;
      margin: 563px 0 0 960px;
    }
  }
`;
