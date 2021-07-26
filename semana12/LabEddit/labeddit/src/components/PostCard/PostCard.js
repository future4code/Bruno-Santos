import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  CardContainer,
  CardHeader,
  BackColor,
  CardFooter,
  LikeImage,
  ButtonsContainer,
} from "./styled";
import LessButton from "../../assets/LessButton.png";
import PlusButton from "../../assets/PlusButton.png";
import { goToPost } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { changePostVote, createPostVote } from "../../services/votes";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    Height: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

function PostCard(props) {
  // const voteSum = parseInt(props.voteSum, 10);
  // const [votes, setVotes] = useState(voteSum);
  const classes = useStyles();
  const history = useHistory();

  const onClickUp = () => {
    const id = props.id;
    let body = {
      direction: 1,
    };
    createPostVote(body, id);
    // setVotes((x) => {
    //   return x + 1;
    // });
  };

  const onClickDown = () => {
    const id = props.id;
    let body = {
      direction: -1,
    };
    changePostVote(body, id);
  };

  return (
    <div>
      <CardContainer>
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
              <p>{props.voteSum}</p>
              <button onClick={onClickDown}>
                <LikeImage src={LessButton} />
              </button>
            </ButtonsContainer>
            <p>Comentários</p>
            <p>{props.commentCount}</p>
          </CardFooter>
        </Card>
      </CardContainer>
    </div>
  );
}

export default PostCard;
