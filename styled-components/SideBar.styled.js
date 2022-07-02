import styled from "styled-components";

export const RightSideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 80px;
  height: 100vh;
  background-color: #bebebe;
  position: fixed;
  right: 0;
  z-index: 10;

  @media (max-width: 812px) {
    height: 0px;
    background: none;
  }

  div {
    width: 33px;
    height: 16px;
    margin-top: 43px;
    margin-left: 22px;
    padding: 0px;

    cursor: pointer;
    ul {
      cursor: pointer;
      list-style: none;
      width: 30px;
      height: 2px;

      li:nth-child(1) {
        position: absolute;
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

      li:nth-child(2) {
        position: absolute;
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
`;
