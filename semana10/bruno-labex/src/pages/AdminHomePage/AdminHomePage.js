import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const AdminHomePageContainer = styled.div`
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
  width: 60vw;
  border: solid black;
`;

function AdminHomePage() {
  const [trip, setTrip] = useState();

  const takeTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-moreira-molina/trips"
      )
      .then((res) => {
        console.log(res);
        setTrip(res.data.trips);
      })
      .catch(() => {
        alert("Erro!");
      });
  };

  useEffect(() => {
    takeTrips();
  }, []);

  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push("/create");
  };

  return (
    <AdminHomePageContainer>
      <MainContainer>
        <button onClick={goToCreateTripPage}>Crie uma nova viagem!!</button>
        <TripsListContainer>
          <h1>Painel Administrativo</h1>
        </TripsListContainer>
      </MainContainer>
    </AdminHomePageContainer>
  );
}

export default AdminHomePage;
