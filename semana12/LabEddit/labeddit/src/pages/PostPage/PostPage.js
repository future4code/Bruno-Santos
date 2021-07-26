import React from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/CommentCard/CommentCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import axios from "axios";
import {
  PostPageContainer,
  CommentsContainer,
  CardHeader,
  BackColor,
  CardContainer,
} from "./styled";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CreateCommentCard from "../../components/CreateCommentCard/CreateCommentCard";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    Height: 400,
  },
}));

function PostPage() {
  useProtectedPage();
  const classes = useStyles();

  const params = useParams();

  const comments = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );

  console.log(comments);

  const posts = useRequestData([], `${BASE_URL}/posts`);

  const selectPost =
    posts &&
    posts.filter((post) => {
      return post.id === params.id;
    });

  return (
    <PostPageContainer>
      {selectPost.length > 0 && (
        <CardContainer>
          <Card className={classes.root}>
            <CardHeader>
              <h3>{selectPost[0].username}</h3>
            </CardHeader>
            <BackColor>
              <CardContent color={"green"}>
                <h4>{selectPost[0].title}</h4>
                <Typography variant="body2" color="primary" component="p">
                  {selectPost[0].body}
                </Typography>
              </CardContent>
            </BackColor>
          </Card>
        </CardContainer>
        // <PostCard
        //   id={selectPost[0].id}
        //   username={selectPost[0].username}
        //   title={selectPost[0].title}
        //   body={selectPost[0].body}
        //   voteSum={selectPost[0].voteSum}
        //   commentCount={selectPost[0].commentCount}
        //   userVote={selectPost[0].userVote}
        //   comments={comments}
        // />
      )}
      <CreateCommentCard id={params.id} />
      <CommentsContainer>
        {comments &&
          comments.map((comment) => {
            return (
              <CommentCard
                id={params.id}
                comment={comment.body}
                username={comment.username}
                voteSum={comment.voteSum}
              />
            );
          })}
      </CommentsContainer>
    </PostPageContainer>
  );
}

export default PostPage;
