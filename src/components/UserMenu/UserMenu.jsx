import { toast } from "react-toastify";
import { useLogout } from "../../hooks";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import UserMenuMobile from "../UserMenuMobile/UserMenuMobile";
import { IconsWrap, InfoTitle, InfoWrap, Infotext } from "./UserMenu.styled";
import { FaUser } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
const UserMenu = ({ data }) => {
  const { logoutMutation, error, isError, isLoading } = useLogout();
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
          <GrLogout />
        </Button>
      </InfoWrap>
      {isLoading && <Loader />}
      {isError && toast.error(error)}
    </>
  );
};

export default UserMenu;
