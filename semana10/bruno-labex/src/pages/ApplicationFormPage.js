import React from "react";
import styled from "styled-components";

const ApplicationFormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  background-color: silver;
`;

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

const FooterContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: silver;
`;

function ApplicationFormPage() {
  return (
    <ApplicationFormPageContainer>
      <HeaderContainer>
        <button>Voltar</button>
        <h1>LabeX</h1>
      </HeaderContainer>
      <ApplicationContainer>
        <h1>Inscreva-se para uma viagem!</h1>
        <div>
          Escolha uma viagem:
          <select placeholder="Escolha uma viagem">
            <option></option>
            <option></option>
          </select>
        </div>
        <div>
          Nome:
          <input type="text" />
        </div>
        <div>
          Idade:
          <input type={Number} />
        </div>
        <div>
          Texto de Candidatura:
          <input type="text" />
        </div>
        <div>
          Profissão:
          <input type="text" />
        </div>
        <div>
          Escolha um país:
          <select placeholder="Escolha um país">
            <option></option>
            <option></option>
          </select>
        </div>
      </ApplicationContainer>
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    </ApplicationFormPageContainer>
  );
}

export default ApplicationFormPage;
