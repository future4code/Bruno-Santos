import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
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
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <HomePageContainer>
      <h1>LabeX</h1>
      <ButtonContainer>
        <button onClick={goToListTripsPage}>Lista de viagens</button>
        <button onClick={goToLoginPage}>Área administrativa</button>
      </ButtonContainer>
    </HomePageContainer>
  );
}

export default HomePage;
