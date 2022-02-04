import styled from "styled-components";

export const Navigation = styled.nav`
  position: absolute;
  right: 103px;
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

    :hover {
      opacity: 1;
    }
  }
`;
