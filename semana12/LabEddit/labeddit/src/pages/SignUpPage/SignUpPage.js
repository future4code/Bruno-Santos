import React from "react";
import { SignUpContainer, SignUpImage } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function SingUpPage({ setRightButtonText }) {
  useUnprotectedPage();
  return (
    <SignUpContainer>
      <SignUpImage
        src={
          "https://files.cercomp.ufg.br/weby/up/393/o/cadastre-se.jpg?1400766482"
        }
      />
      <SignUpForm setRightButtonText={setRightButtonText} />
    </SignUpContainer>
  );
}

export default SingUpPage;
