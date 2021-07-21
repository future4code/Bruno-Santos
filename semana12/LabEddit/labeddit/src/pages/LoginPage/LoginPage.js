import { Button } from "@material-ui/core";
import React from "react";
import { LoginContainer, LoginImage } from "./styled";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function LoginPage({ setRightButtonText }) {
  useUnprotectedPage();
  const history = useHistory();
  return (
    <LoginContainer>
      <LoginImage
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgs3lHvCogtiBrh0B_HvY1PHbEaRc6hpp5gg&usqp=CAU"
        }
      />
      <LoginForm setRightButtonText={setRightButtonText} />
      <Button
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
        onClick={() => goToSignUp(history)}
      >
        Cadastre-se!
      </Button>
    </LoginContainer>
  );
}

export default LoginPage;
