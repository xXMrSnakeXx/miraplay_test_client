import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";

export const RegisterWrap = styled.div`
  color: #faf9f7;
`;

export const FormRegister = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
`;
export const Input = styled(Field)`
  margin-bottom: 10px;
  border-style: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  font-size: 18px;
  outline: none;
  letter-spacing: 0.06em;
  font-weight: 200;
  transition: all 0.5s ease-in-out;
  color: #afafaf;
`;
export const Btn = styled.button`
  width: 120px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 12px;
  margin-top: 10px;
  color: #faf9f7;
  background-color: #afafaf;
  cursor: pointer;
`;
export const ErrorText = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;
