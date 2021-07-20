import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { SignUpFormContainer } from "./styled";

function SignUpForm() {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
  };

  return (
    <SignUpFormContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
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
