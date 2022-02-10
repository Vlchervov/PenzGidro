import styled from "styled-components";

export const TransportWrapper = styled.section`
  overflow: hidden;
  cursor: pointer;
  display: flex;
  margin: 0 0 0 0;
  padding: 0 0 0 0;

  @media (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const AboutTransport = styled.div`
  padding-top: 115px;
  display: flex;
  flex-direction: column;
  padding-right: 85px;

  h2 {
    font-family: Gilroy;
    font-size: 47px;
    margin: 0 0 0 0;
    padding: 0px 0 56px 80px;
    color: #1c1c1c;
    font-weight: 300;
    margin-bottom: 0px;

    @media (max-width: 812px) {
      padding-left: 31px;
      font-size: 35px;
    }
  }

  img {
    @media (max-width: 1600px) {
      width: 50vw;
    }
    @media (max-width: 1640px) {
      width: 50vw;
    }
    @media (max-width: 1440px) {
      width: 50vw;
    }

    @media (max-width: 1400px) {
      width: 88vw;
    }
  }

  .transportDescription {
    @media (max-width: 1440px) {
      flex-wrap: wrap;
    }
    background: ${({ change }) => (change ? "#f6f6f6" : "white")};
    overflow: hidden;
    width: 100vw;
    h4 {
      font-family: Gilroy;
      font-size: 25px;
      font-weight: 300;
      line-height: 40px;
      margin-bottom: 0;
      color: #000000;
      padding: 68px 0 0 82px;
      margin: 0 0 0 0;

      @media (max-width: 1440px) {
        padding: 69px 0 0 52px;
      }
    }

    p {
      padding: 2px 0 68px 82px;
      font-size: 18px;
      font-family: Gilroy;
      line-height: 32px;

      @media (max-width: 1440px) {
        padding: 2px 0 0 52px;
      }
    }
  }

  .railWayDescription {
    @media (max-width: 1440px) {
      flex-wrap: wrap;
    }
    background: ${({ change }) => (!change ? "#f6f6f6" : "white")};
    h4 {
      color: #000000;
      font-family: Gilroy;
      font-size: 25px;
      line-height: 40px;
      padding: 68px 0 0 82px;
      margin: 0 0 0 0;

      @media (max-width: 1440px) {
        padding: 69px 0 0 52px;
      }
    }

    p {
      font-family: Gilroy;
      font-size: 18px;
      font-weight: bold;
      color: #000000;
      padding: 6px 0 68px 80px;

      @media (max-width: 1440px) {
        padding: 6px 0 68px 52px;
        font-size: 16px;
      }

      @media (max-width: 1526px) {
        font-size: 16px;
      }
    }
  }

  .techDescription {
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;
