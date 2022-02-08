import styled from "styled-components";

export const Navigation = styled.nav`
  z-index: 10;
  position: absolute;
  right: 110px;

  @media (max-width: 812px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
  }

  li:nth-child(1) {
    color: #f6f6f6;
    opacity: 1;
  }

  li {
    user-select: none;
    color: white;
    padding: 43px 39.6px 15px;
    font-size: 14px;
    letter-spacing: 0.1em;
    transition: all 0.3s 0.01s ease;
    -webkit-transition: all 0.3s 0.01s ease;
    cursor: pointer;
    text-transform: uppercase;
    font-family: Gilroy;
    color: #f6f6f6;
    opacity: 0.6;

    @media (max-width: 1580px) {
      padding: 43px 30px 5px;
      font-size: 13px;
    }

    :hover {
      opacity: 1;
    }
  }
`;
