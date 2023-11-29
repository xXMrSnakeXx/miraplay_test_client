import { Link } from "react-router-dom";
import styled from "styled-components";

export const IconsWrap = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
  align-items: center;
  background: #3f9c14;
  display: flex;
  height: 40px;
  justify-content: center;
  border-radius: 10px;
  width: 40px;
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
  left: -145px;
  background: #1c1c1c;
  padding: 40px 15px;
  padding-bottom: 0;
  opacity: 1;
  transition: all 0.3s ease-out;
  overflow-y: hidden;
`;
export const MobInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #faf9f7;
`;

export const MobLink = styled(Link)`
  margin-top: 12px;
  color: #3f9c14;
  cursor: pointer;
`;