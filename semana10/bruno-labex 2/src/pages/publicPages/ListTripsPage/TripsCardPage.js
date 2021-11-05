import React from "react";
import styled from "styled-components";

const TripsCardPageContainer = styled.div`
  border: solid;
  padding: 10px;
  width: 300px;
  height: 200px;
`;

function TripsCardPage(props) {
  return (
    <TripsCardPageContainer>
      <p>
        <b>Nome:</b>
        {props.trips.name}
      </p>
      <p>
        <b>Descrição:</b>
        {props.trips.description}
      </p>
      <p>
        <b>Planeta:</b>
        {props.trips.planet}
      </p>
      <p>
        <b>Duração:</b>
        {props.trips.durationInDays}
      </p>
      <p>
        <b>Data:</b>
        {props.trips.date}
      </p>
    </TripsCardPageContainer>
  );
}

export default TripsCardPage;
