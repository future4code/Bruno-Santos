import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useRequestData from "../../../hooks/useRequestData";
import AdminTripCardPage from "./AdminTripCardPage";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 25px;
  width: 500px;
  justify-content: space-around;
  margin-top: 10px;
`;

const TripsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 60vw;
  border: solid black;
  overflow: auto;
`;

function AdminHomePage() {
  const [tripsData, getTrips] = useRequestData("/trips", {});

  const tripsList =
    tripsData.trips &&
    tripsData.trips.map((t) => {
      return (
        <AdminTripCardPage
          key={t.id}
          name={t.name}
          id={t.id}
          getTrips={getTrips}
        />
      );
    });

  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push("/create");
  };

  return (
    <MainContainer>
      <ButtonContainer>
        <button onClick={goToCreateTripPage}>Crie uma nova viagem!!</button>
      </ButtonContainer>
      <TripsListContainer>
        <h1>Painel Administrativo</h1>
        {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
      </TripsListContainer>
    </MainContainer>
  );
}

export default AdminHomePage;
