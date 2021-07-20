import { Button } from "@material-ui/core";
import React from "react";
import { SignUpContainer, SignUpImage } from "./styled";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";

function SingUpPage() {
  const history = useHistory();
  return (
    <SignUpContainer>
      <SignUpImage
        src={
          "https://files.cercomp.ufg.br/weby/up/393/o/cadastre-se.jpg?1400766482"
        }
      />
      <SignUpForm />
      <Button
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
        onClick={() => goToLogin(history)}
      >
        Fazer Login!
      </Button>
    </SignUpContainer>
  );
}

export default SingUpPage;
