import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

import { LikeImage, CardFooter } from "./styled";

import LessButton from "../../assets/LessButton.png";
import PlusButton from "../../assets/PlusButton.png";

import { createCommentVote, changeCommentVote } from "../../services/votes";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    Height: 200,
  },
}));

function CommentCard(props) {
  const classes = useStyles();

  const onClickUp = () => {
    const id = props.id;
    let body = {
      direction: 1,
    };
    createCommentVote(body, id);
  };

  const onClickDown = () => {
    const id = props.id;
    let body = {
      direction: -1,
    };
    changeCommentVote(body, id);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.username}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.comment}
        </Typography>
      </CardContent>
      <CardFooter>
        <button onClick={onClickUp}>
          <LikeImage src={PlusButton} />
        </button>
        <p>{props.voteSum}</p>
        <button onClick={onClickDown}>
          <LikeImage src={LessButton} />
        </button>
      </CardFooter>
    </Card>
  );
}

export default CommentCard;
