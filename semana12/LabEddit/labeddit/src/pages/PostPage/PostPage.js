import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/FeedCard/PostCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";

function PostPage() {
  useProtectedPage();

  const params = useParams();
  const comments = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  const posts = useRequestData([], `${BASE_URL}/posts`);

  const selectPost =
    posts &&
    posts.filter((post) => {
      return post.id === params.id;
    });

  return (
    <div>
      {selectPost.length > 0 && (
        <PostCard
          id={selectPost[0].id}
          username={selectPost[0].username}
          title={selectPost[0].title}
          body={selectPost[0].body}
          voteSum={selectPost[0].voteSum}
          commentCount={selectPost[0].commentCount}
          userVote={selectPost[0].userVote}
          comments={comments}
        />
      )}
    </div>
  );
}

export default PostPage;
