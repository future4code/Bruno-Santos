import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CreateTripPageContainer = styled.div`
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

function CreateTripPage() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <CreateTripPageContainer>
      <ApplicationContainer>
        <button onClick={goBack}>Voltar</button>
        <h1>Crie novas viagens!!</h1>
        <div>
          Nome:
          <input type="text" />
        </div>
        <div>
          Planeta:
          <input type="text" />
        </div>
        <div>
          Data:
          <input type="date" />
        </div>
        <div>
          Descrição:
          <input type="text" />
        </div>
        <div>
          Duração em dias:
          <input typer={Number} />
        </div>
        <button>Criar viagem</button>
      </ApplicationContainer>
    </CreateTripPageContainer>
  );
}

export default CreateTripPage;
