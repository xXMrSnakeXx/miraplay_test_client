import { useLogout } from "../../hooks";
import Button from "../Button/Button";
import UserMenuMobile from "../UserMenuMobile/UserMenuMobile";
import { IconsWrap, InfoTitle, InfoWrap, Infotext } from "./UserMenu.styled";
import { FaUser } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
const UserMenu = ({ data }) => {
  const { logoutMutation } = useLogout();
  return (
    <>
      <UserMenuMobile data={data} />
      <InfoWrap>
        <InfoTitle>Ласкаво просимо, {data?.username}</InfoTitle>
        <Infotext>{data?.email}</Infotext>
        <IconsWrap>
          <FaUser fill="white" size="40" />
        </IconsWrap>
        <Button text="Вийти" onClick={() => logoutMutation.mutate()}>
          <GrLogout/>
        </Button>
      </InfoWrap>
    </>
  );
};

export default UserMenu;
