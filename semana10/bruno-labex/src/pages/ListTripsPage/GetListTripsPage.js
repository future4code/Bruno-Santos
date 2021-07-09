import React from "react";
import styled from "styled-components";

const GetListTripsPageContainer = styled.div`
  border: solid;
  margin: 10px;
  padding: 10px;
`;

function GetListTripsPage(props) {
  return (
    <GetListTripsPageContainer>
      <li>{props.trips.date}</li>
      <li>{props.trips.description}</li>
      <li>{props.trips.durationInDays}</li>
      <li>{props.trips.name}</li>
      <li>{props.trips.planet}</li>
    </GetListTripsPageContainer>
  );
}

export default GetListTripsPage;
