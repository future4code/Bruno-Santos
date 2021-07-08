import React from "react";
import styled from "styled-components";

const ListTripsPageContainer = styled.div`
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
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

const TripsListContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60vh;
  width: 60vw;
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

function ListTripsPage() {
  return (
    <ListTripsPageContainer>
      <HeaderContainer>
        <button>
          <h1>LabeX</h1>
        </button>
      </HeaderContainer>
      <MainContainer>
        <h2>LISTA DE VIAGENS</h2>
        <button>Inscreva-se para uma viagem!!</button>
        <TripsListContainer></TripsListContainer>
      </MainContainer>
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    </ListTripsPageContainer>
  );
}

export default ListTripsPage;
