import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolbar, H1Style } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)}>
          <H1Style>LabEddiT</H1Style>
        </Button>
        <Button onClick={() => goToLogin(history)}>
          <H1Style>Login</H1Style>
        </Button>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
