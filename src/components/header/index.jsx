import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Styles from "./styles";
import UserActionTypes from "../../redux/user/action-types";

function Header() {
  const { currentUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch({ type: UserActionTypes.LOGIN,
    payload: { Felipe: "John Doe", email: "felipe@rocha.com" } });
  }
  

  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
      </Styles.Buttons>
    </Styles.Container>
  );
}

export default Header;
