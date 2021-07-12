import React from "react";
import { useHistory } from "react-router-dom";
import { deleteTrip } from "../../../services/requests";
import styled from "styled-components";

const TripContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 800px;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 400px;
  border: solid;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background-color: silver;
  }
`;

const DeleteButton = styled.button`
  &:hover {
    cursor: pointer;
    background-color: #d1e4ed;
    color: darkred;
  }
`;

const AdminTripCardPage = (props) => {
  const { id, name, getTrips } = props;
  const history = useHistory();

  const onClickDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
      deleteTrip(id, getTrips);
    }
  };

  const goToTripDetailsPage = () => {
    history.push("/details");
  };

  return (
    <TripContainer>
      <CardContainer onClick={() => goToTripDetailsPage(history, id)}>
        <p>{name}</p>
        <DeleteButton onClick={onClickDelete}>Deletar</DeleteButton>{" "}
      </CardContainer>
    </TripContainer>
  );
};

export default AdminTripCardPage;
