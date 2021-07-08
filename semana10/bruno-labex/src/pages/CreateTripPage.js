import React from "react";
import styled from "styled-components";

const CreateTripPageContainer = styled.div`
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

function CreateTripPage() {
  return (
    <CreateTripPageContainer>
      <HeaderContainer>
        <button>Voltar</button>
        <h1>LabeX</h1>
      </HeaderContainer>
      <ApplicationContainer>
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
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    </CreateTripPageContainer>
  );
}

export default CreateTripPage;
