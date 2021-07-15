import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100vw;
`;

function LoginPage() {
  const { form, onChangeInput } = useForm({
    email: "",
    password: "",
  });

  const history = useHistory();
  const goToAdminHomePage = () => {
    history.push("/admin");
  };

  const login = (body, history) => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-moreira-molina/login`,
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(history);
      })
      .catch((err) => alert(err.response.data.message));
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, history);
  };

  return (
    <LoginContainer>
      <h2>Faça seu login!</h2>
      <form onSubmit={onSubmitLogin}>
        <div>
          Login:
          <input
            onChange={onChangeInput}
            value={form["email"]}
            name={"email"}
            label={"Email"}
            type={"email"}
          />
        </div>
        <div>
          Senha:
          <input
            onChange={onChangeInput}
            value={form["password"]}
            name={"password"}
            label={"Senha"}
            type={"password"}
          />
        </div>
        <button type={"submit"}>Entrar</button>
      </form>
    </LoginContainer>
  );
}

export default LoginPage;
