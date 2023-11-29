import styled from "styled-components";

export const GamesList = styled.ul`
  margin: 65px 0 30px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
export const GameImg = styled.img`
  width: 100%;
  height: 335px;
  min-height: 335px;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
  object-position: center;
`;
export const GamesItem = styled.li`
  position: relative;
  max-width: 320px;
  height: 565px;
  background: #1c1c1c;
  border: 1px solid #454545;
  border-radius: 20px;
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease-in;
  opacity: 1;
  overflow: hidden;
  margin: 0 auto;
`;

export const GamesInfoWrap = styled.div`
  height: 100%;
  padding: 15px 32px 32px;
  width: 100%;
`;

export const GameTitle = styled.h4`
  color: #faf9f7;
  font-size: 18px;
  font-weight: 800;
  line-height: 164%;
  margin-bottom: 6px;
  text-transform: uppercase;
`;

export const GameDescr = styled.p`
  color: #afafaf;
  font-size: 12px;
  font-weight: 300;
  height: 80px;
  line-height: 18px;
`;

export const GenresWrap = styled.div`
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  position: absolute;
  top: 20px;
  left: 20px;
  gap: 8px;
  display: flex;
`;
export const TopItem = styled.p`
  padding: 5px 10px;
  background: #3f9c14;
  backdrop-filter: blur(10px);
  color: #afafaf;

  border-radius: 10px;
  display: flex;
  align-items: center;
`;
export const GenreItem = styled.p`
  padding: 5px 10px;

  background: rgba(12, 5, 32, 0.25);
  backdrop-filter: blur(10px);
  color: #afafaf;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
export const FreeItem = styled.p`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #3f9c14;
  padding: 5px 10px;
  color: #afafaf;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
