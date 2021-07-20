import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { LoginFormContainer } from "./styled";

function LoginForm() {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    console.log(form);
    event.preventDefault();
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
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
          Fazer login!
        </Button>
      </form>
    </LoginFormContainer>
  );
}

export default LoginForm;
