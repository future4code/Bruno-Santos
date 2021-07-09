import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GetListTripsPage from "./GetListTripsPage";
import { useHistory } from "react-router-dom";

const ListTripsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
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
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  width: 60vw;
  border: solid black;
  overflow: auto;
`;

function ListTripsPage() {
  const [trip, setTrip] = useState([]);

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

  const goToApplicationFormPage = () => {
    history.push("/application");
  };

  return (
    <ListTripsPageContainer>
      <MainContainer>
        <h2>LISTA DE VIAGENS</h2>
        <button onClick={goToApplicationFormPage}>
          Inscreva-se para uma viagem!!
        </button>
        <TripsListContainer>
          {trip.map((trips) => {
            return <GetListTripsPage trips={trips} />;
          })}
        </TripsListContainer>
      </MainContainer>
    </ListTripsPageContainer>
  );
}

export default ListTripsPage;
