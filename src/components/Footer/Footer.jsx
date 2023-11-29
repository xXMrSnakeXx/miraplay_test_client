import { Logo } from "../Logo/Logo";
import {
  FooterContainer,
  FooterWrap,
  IconsWrap,
  InfoItem,
  InfoList,
  InfoTitle,
  InfoWrap,
} from "./Footer.styled";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
const icons = [<FaPhoneAlt />, <MdEmail />, <IoLocationSharp />];
const info = [
  "+380688338888",
  "support@miraplay.cloud",
  "02142 м.Київ вул.Лариси Руденко 6А оф.534",
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <Logo />
        <InfoWrap>
          <InfoTitle>Наші контакти</InfoTitle>
          <InfoList>
            {info.map((el, indx) => (
              <InfoItem key={indx}>
                <IconsWrap>
                  <IconContext.Provider value={{ color: "white" }}>
                    {icons[indx]}
                  </IconContext.Provider>
                </IconsWrap>
                <p>{el}</p>
              </InfoItem>
            ))}
          </InfoList>
        </InfoWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
