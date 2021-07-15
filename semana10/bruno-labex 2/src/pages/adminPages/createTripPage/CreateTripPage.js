import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { createTrip } from "../../../services/requests";
import useForm from "../../../hooks/useForm";
import { planets } from "../../../constants/planets";

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

function CreateTripPage() {
  const { form, onChangeInput, clear } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const onClickCreate = (e) => {
    e.preventDefault();
    createTrip(form, clear);
  };

  const today = new Date();
  const stringToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <ApplicationContainer>
      <button onClick={goBack}>Voltar</button>
      <h1>Crie novas viagens!!</h1>
      <form onSubmit={onClickCreate}>
        <div>
          <input
            type="text"
            placeholder={"Nome"}
            name={"name"}
            value={form.name}
            onChange={onChangeInput}
            required
          />
        </div>
        <div>
          <select
            placeholder={"Planeta"}
            name={"planet"}
            defaultValue={""}
            onChange={onChangeInput}
            type="text"
            required
          >
            <option value={""} disabled>
              Escolha um Planeta
            </option>
            {planets.map((planet) => {
              return (
                <option value={planet} key={planet}>
                  {planet}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            placeholder={"Data"}
            type={"date"}
            name={"date"}
            value={form.date}
            onChange={onChangeInput}
            required
          />
        </div>
        <div>
          <input
            placeholder={"Descrição"}
            name={"description"}
            value={form.description}
            onChange={onChangeInput}
            required
          />
        </div>
        <div>
          <input
            placeholder={"Duração em dias"}
            type={"number"}
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={onChangeInput}
            required
          />
        </div>
        <button type={"submit"}>Criar viagem</button>
      </form>
    </ApplicationContainer>
  );
}

export default CreateTripPage;
