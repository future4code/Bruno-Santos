import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar, H1Style } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

function Header({ rightButtonText, setRightButtonText }) {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)}>
          <H1Style>LabEddiT</H1Style>
        </Button>
        <Button onClick={rightButtonAction}>
          <H1Style>{rightButtonText}</H1Style>
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
