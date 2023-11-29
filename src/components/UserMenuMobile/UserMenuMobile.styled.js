import styled from "styled-components";

export const IconsWrap = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
  align-items: center;
  background: #3f9c14;
  display: flex;
  height: 50px;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  margin-left: 15px;
`;
export const MobileWrap = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
  width: 220px;
  height: calc(100dvh - 65px);
  position: absolute;
  top: 75px;
  right: -20px;
  background: #1c1c1c;
  color: #faf9f7;

  padding: 40px 15px;
  padding-bottom: 0;
  opacity: 1;
  transition: all 0.3s ease-out;
  overflow-y: hidden;
`;
export const LogoutWrap = styled.div`
  position: absolute;
  bottom: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
