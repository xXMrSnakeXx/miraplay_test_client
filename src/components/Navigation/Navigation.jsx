import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { NavList, NavWrap } from "./Navigation.styled";

import MobileMenu from "../MobileMenu/MobileMenu";

const Navigation = () => {
  return (
    <NavWrap>
      <MobileMenu />
      <nav>
        <NavList>
          <li>
            <Link to="/login">
              <Button text="Увійти" />
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button text="Реєстрація" />
            </Link>
          </li>
        </NavList>
      </nav>
    </NavWrap>
  );
};

export default Navigation;
