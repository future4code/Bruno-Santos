import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useForm from "../../../hooks/useForm";
import useRequestData from "../../../hooks/useRequestData";
import { sendApplication } from "../../../services/requests";
import { countries } from "../../../constants/countries";

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

function ApplicationFormPage() {
  const [tripId, setTripId] = useState("");
  const { form, onChangeInput, clear } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const [allTrips] = useRequestData("/trips", {});

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const clearFields = () => {
    clear();
    setTripId("");
  };

  const onClickSend = (e) => {
    e.preventDefault();
    sendApplication(form, tripId, clearFields);
  };

  const onChangeTrip = (e) => {
    setTripId(e.target.value);
  };

  const tripsOptions =
    allTrips.trips &&
    allTrips.trips.map((t) => {
      return (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      );
    });

  return (
    <ApplicationContainer>
      <button onClick={goBack}>Voltar</button>
      <h1>Inscreva-se para uma viagem!</h1>
      <form onSubmit={onClickSend}>
        <select defaultValue="" onChange={onChangeTrip}>
          <option value="" disabled>
            Escolha uma viagem
          </option>
          {tripsOptions}
        </select>

        <div>
          Nome:
          <input
            placeholder={"Nome"}
            onChange={onChangeInput}
            value={form.name}
            name={"name"}
            type="text"
            required
          />
        </div>
        <div>
          Idade:
          <input
            placeholder={"Idade"}
            onChange={onChangeInput}
            value={form.age}
            name={"age"}
            type={"number"}
            required
          />
        </div>
        <div>
          Texto de Aplicação:
          <input
            placeholder={"Texto de Candidatura"}
            onChange={onChangeInput}
            value={form.applicationText}
            name={"applicationText"}
            required
          />
        </div>
        <div>
          Profissão:
          <input
            placeholder={"Profissão"}
            onChange={onChangeInput}
            value={form.profession}
            name={"profession"}
            type="text"
            required
          />
        </div>
        <div>
          <select
            placeholder={"País"}
            onChange={onChangeInput}
            value={form.country}
            name={"country"}
            required
          >
            <option value={""} disabled>
              Escolha um País
            </option>
            {countries.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <button type={"submit"}>Confirmar</button>
      </form>
    </ApplicationContainer>
  );
}

export default ApplicationFormPage;
