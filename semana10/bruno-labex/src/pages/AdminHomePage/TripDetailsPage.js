import React from "react";
import styled from "styled-components";

const TripDetailsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const MainContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

const TripsListContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 75vh;
  width: 40vw;
  border: solid black;
`;

function TripDetailsPage() {
  return (
    <TripDetailsPageContainer>
      <MainContainer>
        <TripsListContainer>
          <h2>Lista de candidatos aplicados</h2>
        </TripsListContainer>
        <TripsListContainer>
          <h2>Lista de candidatos aprovados</h2>
        </TripsListContainer>
      </MainContainer>
    </TripDetailsPageContainer>
  );
}

export default TripDetailsPage;
