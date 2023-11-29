import styled from "styled-components";

export const FooterContainer = styled.footer`
  @media screen and (max-width: 767px) {
    padding: 15px 20px;
  }
  background-color: #1c1c1c;
  overflow: hidden;
  box-shadow: 0 4px 50px rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const FooterWrap = styled.div`
  @media screen and (min-width: 767px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 480px) {
 
    flex-direction: column;
  }
  display: flex;
  gap: 70px;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 45px;
  padding-top: 64px;
  width:100vw;
`;
export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
`;
export const InfoTitle = styled.h2`
  color: #faf9f7;
  font-size: 16px;
  font-weight: 800;
  line-height: 188%;
  margin-bottom: 15px;
  text-transform: uppercase;
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  width: 100%;
`;
export const InfoItem = styled.li`
  color: #afafaf;
  position: relative;
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 300;
  gap: 12px;
  line-height: 143%;
  width: 250px;
`;
export const IconsWrap = styled.div`
  align-items: center;
  background: #3f9c14;
  border-radius: 5px;
  display: flex;
  height: 28px;
  justify-content: center;
  min-width: 28px;
  width: 28px;
`;
