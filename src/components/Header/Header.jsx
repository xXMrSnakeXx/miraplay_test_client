import { HeaderContainer, HeaderWrap } from "./Header.styled";

import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import { useCurrent } from "../../hooks";
import { Logo } from "../Logo/Logo";

const Header = () => {
  const token = useSelector(selectToken);
  const { data } = useCurrent();
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Logo />
        {token ? <UserMenu data={data} /> : <Navigation />}
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
