import styled from "styled-components";

export const FilterWrap = styled.div`
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  display: flex;
  align-items: flex-start;

  justify-content: space-around;
`;

export const FilterTitle = styled.h3`
  color: #afafaf;
`;
export const Select = styled.select`
  margin-top: 10px;
  border-style: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  font-size: 18px;
  outline: none;
  letter-spacing: 0.06em;
  font-weight: 200;
  transition: all 0.5s ease-in-out;
  color: #afafaf;
  cursor: pointer;
`;
export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 8px;
  cursor: pointer;
`;
export const IconWrap = styled.div`
  position: absolute;
  margin-left: 8px;
  top: 6px;
  right: -25px;
`;
