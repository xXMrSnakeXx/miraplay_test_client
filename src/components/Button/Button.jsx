import { Btn } from "./Button.styled";

const Button = ({ text, onClick, children, style }) => {
  return (
    <Btn type="button" onClick={onClick} style={style}>
      {text}
      {children}
    </Btn>
  );
};

export default Button;
