import { HeaderContainer, HeaderWrap } from "./Header.styled";

import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import { useCurrent } from "../../hooks";
import { Logo } from "../Logo/Logo";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Header = () => {
  const token = useSelector(selectToken);
  const { data, isError, error, isLoading } = useCurrent();
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <Logo />
          {token ? <UserMenu data={data} /> : <Navigation />}
        </HeaderWrap>
      </HeaderContainer>
      {isError && toast.error(error.message)}
      {isLoading && <Loader />}
    </>
  );
};

export default Header;
