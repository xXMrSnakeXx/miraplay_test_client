import { BsList } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import {
  IconsWrap,
  MobInfoWrap,
  MobLink,
  MobileWrap,
} from "./MobileMenu.styled";
import { useState } from "react";

const MobileMenu = () => {
  const [toShow, setToShow] = useState(false);

  const toogleToShow = () => {
    setToShow((prev) => !prev);
  };
  return (
    <>
      <IconsWrap onClick={toogleToShow}>
        {toShow ? (
          <MdClose fill="white" size="35" />
        ) : (
          <BsList fill="white" size="35" />
        )}
      </IconsWrap>
      {toShow && (
        <MobileWrap>
          <MobInfoWrap>
            <h4>Ласкаво просимо у світ MiraPlay</h4>
            <MobLink to="/login" onClick={toogleToShow}>
              Увійти{" "}
            </MobLink>
            <p> Ще не маєте акаунту? </p>
            <MobLink to="/register" onClick={toogleToShow}>
              Зареєструватись
            </MobLink>
          </MobInfoWrap>
        </MobileWrap>
      )}
    </>
  );
};

export default MobileMenu;
