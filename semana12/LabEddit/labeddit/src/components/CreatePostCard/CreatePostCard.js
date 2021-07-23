import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  CreatePostCardContainer,
  CardHeader,
  BackColor,
  CardFooter,
  LikeImage,
  ButtonsContainer,
  CommentsContainer,
} from "./styled";
import LessButton from "../../assets/LessButton.png";
import PlusButton from "../../assets/PlusButton.png";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/posts";
import { formatMs, TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    maxHeight: 600,
    minHeight: 200,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function CreatePostCard() {
  const [form, onChange, clear] = useForm({
    title: "",
    body: "",
  });
  const classes = useStyles();

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <CreatePostCardContainer>
        <Card className={classes.root}>
          <CardHeader>
            <h1>Criar Post</h1>
          </CardHeader>
          <BackColor>
            <CardContent>
              <TextField
                name={"title"}
                value={form.title}
                onChange={onChange}
                label={"Título"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
              />
              <TextField
                name={"body"}
                value={form.body}
                onChange={onChange}
                label={"texto"}
                variant={"outlined"}
                fullWidth
                required
                margin={"normal"}
              />
            </CardContent>
          </BackColor>
          <CardFooter>
            <ButtonsContainer>
              <button>Postar</button>
            </ButtonsContainer>
          </CardFooter>
        </Card>
      </CreatePostCardContainer>
    </form>
  );
}

export default CreatePostCard;
