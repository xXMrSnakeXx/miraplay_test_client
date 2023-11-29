import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #1c1c1c;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.5);
  height: 90px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 15px 20px;
    background-color: #1c1c1c;
    box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;

export const HeaderWrap = styled.div`
  @media screen and (min-width: 767px) {
    justify-content: space-around;
  }
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100vw;
`;
