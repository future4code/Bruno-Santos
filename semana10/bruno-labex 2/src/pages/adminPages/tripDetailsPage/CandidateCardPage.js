import React from "react";
import { decideCandidate } from "../../../services/requests";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  height: 200px;
  width: 400px;
  justify-content: space-around;
`;

const CandidateCard = (props) => {
  const { id, applicationText, profession, age, name, country } =
    props.candidate;

  const decide = (decision) => {
    decideCandidate(props.tripId, id, decision, props.getTripDetails);
  };

  return (
    <div>
      <p>
        <b>Nome:</b> {name}
      </p>
      <p>
        <b>Profissão:</b> {profession}
      </p>
      <p>
        <b>Idade:</b> {age}
      </p>
      <p>
        <b>País:</b> {country}
      </p>
      <p>
        <b>Texto de Candidatura:</b> {applicationText}
      </p>
      <ButtonsContainer>
        <button onClick={() => decide(true)}>Aceitar</button>
        <button onClick={() => decide(false)}>Rejeitar</button>
      </ButtonsContainer>
    </div>
  );
};

export default CandidateCard;
