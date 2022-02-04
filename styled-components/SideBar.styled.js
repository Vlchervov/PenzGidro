import styled from "styled-components";

export const RightSideBar = styled.div`
  margin: 0;
  padding: 0;
  width: 80px;
  height: 2628px;
  background-color: #d6d6d6;
  position: absolute;
  right: 0;

  span {
    cursor: pointer;
    position: absolute;
    top: 45px;
    left: 24px;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 2px;
    background-color: #1c1c1c;
  }

  span:nth-of-type(2) {
    cursor: pointer;
    position: absolute;
    top: 55px;
    left: 24px;
    margin: 0;
    padding: 0;
    width: 30px;
    height: 2px;
    background-color: #1c1c1c;
  }

  strong {
    position: absolute;
    width: 51.33px;
    height: 0;
    border: 1px solid #1c1c1c;
    transform: matrix(0, 1, 1, 0, 0, 0);
    top: 993px;
    left: 15px;
  }

  strong:nth-of-type(2) {
    position: absolute;
    width: 40.11px;
    height: 0;
    border: 1px solid #1c1c1c;
    top: 1001px;
    left: 33px;
    transform: rotate(-55deg);
  }

  strong:nth-of-type(3) {
    position: absolute;
    width: 40.11px;
    height: 0;
    border: 1px solid #1c1c1c;
    top: 1003px;
    left: 10px;
    transform: rotate(55deg);
  }

  strong:nth-of-type(4) {
    position: absolute;
    width: 51.33px;
    height: 0;
    border: 1px solid #1c1c1c;
    transform: matrix(0, 1, 1, 0, 0, 0);
    top: 2554.71px;
    left: 15px;
  }

  strong:nth-of-type(5) {
    position: absolute;
    width: 40.11px;
    height: 0;
    border: 1px solid #1c1c1c;
    top: 2546px;
    left: 32.4px;
    transform: rotate(55deg);
  }

  strong:nth-of-type(6) {
    position: absolute;
    width: 40.11px;
    height: 0;
    border: 1px solid #1c1c1c;
    top: 2546px;
    left: 9px;
    transform: rotate(-55deg);
  }

  a {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 77px;
    left: 31px;
    right: 32px;
    color: #1c1c1c;
    font-family: Gilroy;
    line-height: 16px;
    font-size: 14px;
    text-transform: uppercase;
    transform: rotate(90deg);
  }

  a:last-child {
    position: absolute;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #1c1c1c;
    transform: rotate(90deg);
    left: 32px;
    right: 31px;
    top: 832.63px;
    white-space: nowrap;
  }
`;
