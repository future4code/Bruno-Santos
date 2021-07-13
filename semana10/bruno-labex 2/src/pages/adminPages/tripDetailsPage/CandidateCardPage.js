import React from "react";
import { decideCandidate } from "../../../services/requests";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  height: 50px;
  width: 400px;
  justify-content: space-around;
`;

const ButtonsStyle = styled.button`
  &:hover {
    cursor: pointer;
    background-color: silver;
  }
`;

const CandidateCardPage = (props) => {
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
        <ButtonsStyle onClick={() => decide(true)}>Aceitar</ButtonsStyle>
        <ButtonsStyle onClick={() => decide(false)}>Rejeitar</ButtonsStyle>
      </ButtonsContainer>
    </div>
  );
};

export default CandidateCardPage;
