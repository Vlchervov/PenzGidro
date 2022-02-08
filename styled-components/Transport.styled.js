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

    @media (max-width: 812px) {
      padding-left: 31px;
      font-size: 35px;
    }
  }

  img {
    @media (max-width: 812px) {
      width: 80vw;
      padding-right: 29px;
      transform: scale(-1, 1);
    }
  }

  div {
    width: 96.5vw;
    @media (max-width: 1440px) {
      flex-direction: column;
    }
    @media (max-width: 812px) {
      width: 100vw;
    }
    overflow: hidden;
    cursor: pointer;
    display: flex;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    div:nth-child(1) {
      background: ${({ change }) => (change ? "#f6f6f6" : "white")};
      @media (max-width: 812px) {
        background-color: white;
      }
      h4 {
        font-family: Gilroy;
        font-size: 25px;
        font-weight: 300;
        margin-bottom: 0;
        color: #000000;
        padding: 41px 0 0 82px;

        @media (max-width: 812px) {
          color: #1c1c1c;
          line-height: 26px;
          padding-left: 29px;
          padding-right: 31px;
        }
      }

      p {
        padding: 6px 82px;
        padding-bottom: 68px;
        font-size: 18px;
        font-family: Gilroy;
        line-height: 32px;

        @media (max-width: 812px) {
          color: #1c1c1c;
          line-height: 25px;
          padding-left: 29px;
          padding-right: 31px;
        }
      }
    }

    div:nth-of-type(2) {
      @media (max-width: 812px) {
        display: none;
      }
      @media (max-width: 1440px) {
        flex-wrap: wrap;
      }
      background: ${({ change }) => (!change ? "#f6f6f6" : "white")};
      @media (max-width: 812px) {
        background-color: white;
      }
      h4 {
        color: #000000;
        font-family: Gilroy;
        font-size: 25px;
        line-height: 40px;
        padding: 68px 0 0 82px;
        margin: 0 0 0 0;
      }

      p {
        font-family: Gilroy;
        font-size: 18px;
        font-weight: bold;
        color: #000000;
        padding: 6px 0 68px 80px;
      }
    }
  }

  .techDescription {
    position: relative;
    display: flex;
    flex-direction: column;

    div {
      @media (max-width: 812px) {
        width: 100vw;
      }
      flex-direction: column;
    }
  }
`;
