import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ApplicationFormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

function ApplicationFormPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <ApplicationFormPageContainer>
      <ApplicationContainer>
        <button onClick={goBack}>Voltar</button>
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
    </ApplicationFormPageContainer>
  );
}

export default ApplicationFormPage;
