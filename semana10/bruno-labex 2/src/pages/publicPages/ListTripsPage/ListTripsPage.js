import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TripsCardPage from "./TripsCardPage";
import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  align-items: center;
`;

const TripsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  height: 70vh;
  width: 80vw;
  align-items: center;
  margin: 20px;
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
    <MainContainer>
      <div>
        <h2>LISTA DE VIAGENS</h2>
        <button onClick={goToApplicationFormPage}>
          Inscreva-se para uma viagem!!
        </button>
      </div>
      <TripsListContainer>
        {trip.map((trips) => {
          return <TripsCardPage trips={trips} />;
        })}
      </TripsListContainer>
    </MainContainer>
  );
}

export default ListTripsPage;
