import styled from "styled-components";

export const InfoWrap = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    position: relative;
    align-items: center;
  }
`;
export const InfoTitle = styled.h2`
  color: #faf9f7;
`;
export const Infotext = styled.p`
  position: absolute;
  top: 55px;
  left: 25px;
  color: #afafaf;
`;
export const IconsWrap = styled.div`
  align-items: center;
  background: #3f9c14;
  display: flex;
  height: 60px;
  justify-content: center;
  border-radius: 50%;
  width: 60px;
  margin: 15px;
`;
