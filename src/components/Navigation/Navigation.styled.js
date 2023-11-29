import styled from "styled-components";

export const NavWrap = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-around;
  position: relative;
`;

export const NavList = styled.ul`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }
`;
