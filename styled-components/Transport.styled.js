import styled from "styled-components";

export const AboutTransport = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 85px;

  h2 {
    font-family: Gilroy;
    font-size: 47px;
    padding: 73px 0 56px 80px;
    color: #1c1c1c;
    font-weight: 300;
    margin-bottom: 0px;
  }

  img {
    height: 620px;
    width: 881px;
  }

  div {
    width: 50vw;
    @media (max-width: 1440px) {
      flex-direction: column;
      width: 100vw;
    }
    cursor: pointer;
    display: flex;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    div:nth-child(1) {
      background: ${({ change }) => (change ? "#f6f6f6" : "white")};
      h4 {
        font-family: Gilroy;
        font-size: 25px;
        font-weight: 300;
        margin-bottom: 0;
        color: #000000;
        padding: 37px 0 0 82px;
      }

      p {
        padding: 1px 82px;
        font-size: 18px;
        font-family: Gilroy;
        line-height: 32px;
      }
    }

    div:nth-of-type(2) {
      background: ${({ change }) => (!change ? "#f6f6f6" : "white")};
      h4 {
        color: #000000;
        font-family: Gilroy;
        font-size: 25px;
        font-weight: 300;
        line-height: 40px;
        padding: 134px 0 0 82px;
        margin: 0 0 0 0;
      }

      p {
        font-family: Gilroy;
        font-size: 18px;
        font-weight: 300;
        color: #000000;
        padding: 1px 0 0 80px;
      }
    }
  }

  .techDescription {
    position: relative;
    display: flex;
    flex-direction: column;

    div {
      flex-direction: column;
    }
  }
`;
