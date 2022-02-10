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
    padding: 0px 0px 0px;
  }

  li:nth-child(1) {
    color: #f6f6f6;
    opacity: 1;
  }

  li {
    user-select: none;
    color: white;
    font-size: 14px;
    letter-spacing: 0.1em;
    transition: all 0.3s 0.01s ease;
    -webkit-transition: all 0.3s 0.01s ease;
    padding: 43px 39.6px 15px;
    cursor: pointer;
    text-transform: uppercase;
    font-family: Gilroy;
    color: #f6f6f6;
    opacity: 0.6;

    @media (max-width: 1760px) {
      padding: 40px 37px 5px;
    }

    @media (max-width: 1715px) {
      padding: 40px 15px 5px;
    }

    @media (max-width: 1380px) {
      padding: 40px 10px 5px;
    }

    @media (max-width: 1290px) {
      font-size: 12px;
    }

    @media (max-width: 1160px) {
      font-size: 10px;
      padding: 40px 10px 0 0px;
    }

    @media (max-width: 820px) {
      font-size: 8px;
    }
    :hover {
      opacity: 1;
    }
  }
`;
