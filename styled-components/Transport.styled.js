import styled from "styled-components";

export const AboutTransport = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 85px;

  h2 {
    font-family: Gilroy;
    font-size: 47px;
    padding: 0px 0 0 80px;
    color: #1c1c1c;
    font-weight: 300;
    margin-bottom: 0px;
  }

  img {
    height: 620px;
    width: 881px;
  }

  div {
    cursor: pointer;
    max-width: 73%;
    margin: 0px 142px 0 0;
    background: #f6f6f6;
    @media screen and (max-width: 1440px) {
        max-width: 100%;
      }

    h4 {
      font-family: Gilroy;
      font-size: 25px;
      font-weight: 300;
      padding: 40px 0 0 81px;
      margin-bottom: 0px;
    }

    p {
      padding: 7px 81px;
      font-family: Gilroy;
      font-size: 18px;
      font-weight: 300;
      line-height: 32px;
      color: black;
    }
  }

  div{
    cursor: pointer;
    background-color: white;
    margin: 0px 0px 0;
    display: flex;

    &:nth-of-type(1) {
      width: 100vw;
      @media screen and (max-width: 1440px) {
        flex-direction: column;
      }
    }

    h4 {
      color: #000000;
      margin: 24px 1px;
      font-size: 25px;
      font-family: Gilroy;
      line-height: 40px;
      font-weight: 300;
      margin-bottom: 0px;
    }

    p {
      padding: 1px 80px;
      font-family: Gilroy;
    }

    .techDescription {
      position: relative;
      display: flex;
      flex-direction: column;

      div {
        flex-direction: column;
      }
    }
  }
`;