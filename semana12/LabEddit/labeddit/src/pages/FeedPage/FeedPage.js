import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { CreatPostContainer, FeedPageContainer, FeedContainer } from "./styled";
import CreatePostCard from "../../components/CreatePostCard/CreatePostCard";

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

  return (
    <FeedPageContainer>
      <CreatPostContainer>
        <CreatePostCard postCards={postCards} />
      </CreatPostContainer>
      <FeedContainer>{postCards}</FeedContainer>
    </FeedPageContainer>
  );
}

export default FeedPage;
