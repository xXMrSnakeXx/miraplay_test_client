import { useState } from "react";
import { IconsWrap, LogoutWrap, MobileWrap } from "./UserMenuMobile.styled";
import { FaUser } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { useLogout } from "../../hooks";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
const UserMenuMobile = ({ data }) => {
  const [toShow, setToShow] = useState(false);
  const { logoutMutation, error, isError, isLoading } = useLogout();
  const toogleToShow = () => {
    setToShow((prev) => !prev);
  };
  return (
    <>
      <IconsWrap onClick={toogleToShow}>
        <FaUser fill="white" size="35" />
      </IconsWrap>
      {toShow && (
        <MobileWrap>
          <h4>Ласкаво просимо, {data?.username}</h4>
          <p style={{ margin: "12px" }}>{data?.email}</p>
          <LogoutWrap onClick={() => logoutMutation.mutate()}>
            <p style={{ marginRight: "10px" }}>Вийти</p>
            <GrLogout />
          </LogoutWrap>
        </MobileWrap>
      )}
      {isLoading && <Loader />}
      {isError && toast.error(error)}
    </>
  );
};

export default UserMenuMobile;
