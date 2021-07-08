import React from "react";
import styled from "styled-components";

const AdminHomePageContainer = styled.div`
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

const H1headerContainer = styled.h1`
  margin-left: 120px;
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

function AdminHomePage() {
  return (
    <AdminHomePageContainer>
      <HeaderContainer>
        <button>Voltar</button>
        <H1headerContainer>LabeX</H1headerContainer>
        <button>Crie uma nova viagem!!</button>
      </HeaderContainer>
      <MainContainer>
        <TripsListContainer>
          <h1>Painel Administrativo</h1>
        </TripsListContainer>
      </MainContainer>
      <FooterContainer>
        <h1>FOOTER</h1>
      </FooterContainer>
    </AdminHomePageContainer>
  );
}

export default AdminHomePage;
