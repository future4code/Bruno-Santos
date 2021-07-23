import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/FeedCard/PostCard";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { FeedPageContainer } from "./styled";

function FeedPage() {
  useProtectedPage();
  const posts = useRequestData([], `${BASE_URL}/posts`);

  const postCards = posts.map((post) => {
    return (
      <PostCard
        id={post.id}
        username={post.username}
        title={post.title}
        body={post.body}
        voteSum={post.voteSum}
        commentCount={post.commentCount}
        userVote={post.userVote}
      />
    );
  });

  return <FeedPageContainer>{postCards}</FeedPageContainer>;
}

export default FeedPage;
