import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-around;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <h1>LabeX</h1>
      <ButtonContainer>
        <button>Lista de viagens</button>
        <button>Área administrativa</button>
      </ButtonContainer>
    </HomePageContainer>
  );
}

export default HomePage;
