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

const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  background-color: silver;
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

const FooterContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: silver;
`;

function TripDetailsPage() {
  return (
    <TripDetailsPageContainer>
      <HeaderContainer>
        <button>
          <h1>LabeX</h1>
        </button>
      </HeaderContainer>
      <MainContainer>
        <TripsListContainer>
          <h2>Lista de candidatos aplicados</h2>
        </TripsListContainer>
        <TripsListContainer>
          <h2>Lista de candidatos aprovados</h2>
        </TripsListContainer>
      </MainContainer>
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    </TripDetailsPageContainer>
  );
}

export default TripDetailsPage;
