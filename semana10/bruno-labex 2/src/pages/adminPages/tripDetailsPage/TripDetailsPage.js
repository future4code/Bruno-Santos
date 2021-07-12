import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useRequestData from "../../../hooks/useRequestData";
import CandidateCardPage from "./CandidateCardPage";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 100vw;
  align-items: center;
`;

const ButtonGoBackContainer = styled.button`
  width: 100px;
  margin-top: 50px;
`;

const TripsContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

const TripsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  border: solid black;
  align-items: center;
  overflow: auto;
`;

const CardApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 400px;
  border: solid;
  padding: 10px;
`;

const CardApprovedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 200px;
  border: solid;
  padding: 10px;
`;

function TripDetailsPage() {
  const { id } = useParams();
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const candidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.candidates.map((c) => {
      return (
        <CandidateCardPage
          key={c.id}
          candidate={c}
          tripId={id}
          getTripDetails={getTripDetails}
        />
      );
    });

  const approvedCandidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.approved.map((c) => {
      return <li key={c.id}>{c.name}</li>;
    });

  return (
    <MainContainer>
      <ButtonGoBackContainer onClick={goBack}>Voltar</ButtonGoBackContainer>
      <TripsContainer>
        <TripsListContainer>
          {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
          {tripDetails && tripDetails.trip && (
            <CardApplicationContainer>
              <p>
                <b>Nome:</b> {tripDetails.trip.name}
              </p>
              <p>
                <b>Descrição:</b> {tripDetails.trip.description}
              </p>
              <p>
                <b>Planeta:</b> {tripDetails.trip.planet}
              </p>
              <p>
                <b>Duração:</b> {tripDetails.trip.durationInDays}
              </p>
              <p>
                <b>Data:</b> {tripDetails.trip.date}
              </p>
            </CardApplicationContainer>
          )}
        </TripsListContainer>{" "}
        <TripsListContainer>
          <h2>Lista de candidatos pendentes</h2>
          <CardApplicationContainer>
            {candidates && candidates.length > 0 ? (
              candidates
            ) : (
              <p>Não há candidatos pendentes</p>
            )}
          </CardApplicationContainer>
        </TripsListContainer>
        <TripsListContainer>
          <h2>Lista de candidatos aprovados</h2>
          <CardApprovedContainer>
            {approvedCandidates && approvedCandidates.length > 0 ? (
              approvedCandidates
            ) : (
              <p>Não há candidatos aprovados</p>
            )}
          </CardApprovedContainer>
        </TripsListContainer>
      </TripsContainer>
    </MainContainer>
  );
}

export default TripDetailsPage;
