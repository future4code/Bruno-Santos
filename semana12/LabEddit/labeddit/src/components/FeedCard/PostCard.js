import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  FeedCardContainer,
  CardHeader,
  BackColor,
  CardFooter,
  LikeImage,
  ButtonsContainer,
  CommentsContainer,
} from "./styled";
import LessButton from "../../assets/LessButton.png";
import PlusButton from "../../assets/PlusButton.png";
import { goToPost } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { createPostVote } from "../../services/posts";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    maxHeight: 400,
    minHeight: 200,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function PostCard(props) {
  const voteSum = parseInt(props.voteSum, 10);
  const [votes, setVotes] = useState(voteSum);
  const classes = useStyles();
  const history = useHistory();

  const onClickUp = () => {
    const id = props.id;
    const body = {
      direction: 1,
    };
    createPostVote(body, id);
    setVotes((x) => {
      return x + 1;
    });
  };

  return (
    <FeedCardContainer>
      <Card className={classes.root}>
        <CardHeader>
          <h3>{props.username}</h3>
        </CardHeader>
        <BackColor>
          <CardContent
            color={"green"}
            onClick={() => goToPost(props.id, history)}
          >
            <h4>{props.title}</h4>
            <Typography variant="body2" color="primary" component="p">
              {props.body}
            </Typography>
          </CardContent>
        </BackColor>
        <CardFooter>
          <ButtonsContainer>
            <button onClick={onClickUp}>
              <LikeImage src={PlusButton} />
            </button>
            <p>{votes}</p>
            <button>
              <LikeImage src={LessButton} />
            </button>
          </ButtonsContainer>
          <CommentsContainer>
            <p>Comentários</p>
            <p>
              {props.comments &&
                props.comments.map((comment) => {
                  return <p>{comment.body}</p>;
                })}
            </p>
            <p>{props.commentCount}</p>
          </CommentsContainer>
        </CardFooter>
      </Card>
    </FeedCardContainer>
  );
}

export default PostCard;
