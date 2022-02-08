import styled from "styled-components";

export const RightSideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 80px;
  height: 2652px;
  background-color: #d6d6d6;
  position: absolute;
  right: 0;
  z-index: 10;

  @media (max-width: 1440px) {
    height: 3800px;
  }

  @media (max-width: 812px) {
    height: 0px;
    background: none;
  }

  span:nth-of-type(1) {
    position: absolute;
    cursor: pointer;
    top: 45px;
    left: 24px;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 2px;
    background-color: #1c1c1c;

    @media (max-width: 812px) {
      background: white;
    }
  }

  span:nth-of-type(2) {
    position: absolute;
    cursor: pointer;
    top: 55px;
    left: 24px;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 2px;
    background-color: #1c1c1c;

    @media (max-width: 812px) {
      background: white;
    }
  }
  a {
    cursor: pointer;
    position: absolute;
    margin: 0;
    padding: 0;
    top: 77px;
    left: 31px;
    right: 32px;
    color: #1c1c1c;
    font-family: Gilroy;
    user-select: none;
    line-height: 16px;
    font-size: 14px;
    text-transform: uppercase;
    transform: rotate(90deg);

    @media (max-width: 812px) {
      display: none;
    }
  }

  a:last-child {
    position: absolute;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #1c1c1c;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    transform: rotate(360deg);
    left: 20px;
    right: 31px;
    top: 832.63px;
    width: 50px;
    height: 214px;
    background: url("../img/arrow1.svg");
    white-space: nowrap;

    ::after {
      width: 49px;
      height: 49px;
      top: 1750.08px;
      position: absolute;
      content: "";
      background: url("../img/Union.svg") no-repeat;

      @media (max-width: 1440px) {
        top: 2850px;
      }
    }
  }
`;
