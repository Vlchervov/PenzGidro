import styled from "styled-components";

export const AboutTransport = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-family: Gilroy;
    font-size: 47px;
    padding: 714px 0 0 80px;
    color: #1c1c1c;
    font-weight: 300;
    margin-bottom: 0px;
  }

  img {
    position: absolute;
    height: 620px;
    width: 881px;
    margin-top: 866px;
  }

  div {
    cursor: pointer;
    width: 880px;
    margin: 866px 142px 0 0;
    height: 310px;
    background: #f6f6f6;

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

  div:nth-last-child(1) {
    cursor: pointer;
    background-color: white;
    position: absolute;
    margin: 1180px 880px 0;

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
      white-space: nowrap;
      font-family: Gilroy;
    }
  }
`;
