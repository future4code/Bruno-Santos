import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  CreateCommentCardContainer,
  CardHeader,
  BackColor,
  CardFooter,
  ButtonsContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import { createComment } from "../../services/posts";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    maxHeight: 600,
    minHeight: 200,
  },
}));

function CreateCommentCard(props) {
  const [form, onChange, clear] = useForm({
    body: "",
  });
  const classes = useStyles();
  const id = props.id;

  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, id, clear);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <CreateCommentCardContainer>
        <Card className={classes.root}>
          <CardHeader>
            <h3>Faça seu comentário</h3>
          </CardHeader>
          <BackColor>
            <CardContent>
              <TextField
                name={"body"}
                value={form.body}
                onChange={onChange}
                label={"texto"}
                variant={"outlined"}
                fullWidth
                required
                margin={"normal"}
                placeholder={"Escreva o seu comentário"}
              />
            </CardContent>
          </BackColor>
          <CardFooter>
            <ButtonsContainer>
              <button>Comentar</button>
            </ButtonsContainer>
          </CardFooter>
        </Card>
      </CreateCommentCardContainer>
    </form>
  );
}

export default CreateCommentCard;
