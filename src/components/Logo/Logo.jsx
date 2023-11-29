import logo from "../../images/logo.svg";
import { Img, LogoWrap, Text, Title } from "./Logo.styled";

export const Logo = () => {
  return (
    <LogoWrap>
      <Img src={logo} alt="logo" />
      <Title>MIRAPLAY</Title>
      <Text>Cloud Gaming</Text>
    </LogoWrap>
  );
};
