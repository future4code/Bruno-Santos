import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { signUp } from "../../services/users";
import { SignUpFormContainer } from "./styled";
import { useHistory } from "react-router-dom";

function SignUpForm({ setRightButtonText }) {
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history, setRightButtonText);
  };

  return (
    <SignUpFormContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"Nome"}
          variant={"filled"}
          fullWidth
          margin={"normal"}
          required
          autoFocus
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"filled"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"filled"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          Fazer Cadastro!
        </Button>
      </form>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
