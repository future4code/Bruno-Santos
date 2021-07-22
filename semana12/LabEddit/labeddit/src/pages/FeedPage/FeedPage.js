import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import FeedCard from "../../components/FeedCard/FeedCard";
import { useHistory } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";

function FeedPage() {
  useProtectedPage();
  const history = useHistory();
  const posts = useRequestData([], `${BASE_URL}/posts`);

  const postsCard = posts.map((post) => {
    return <FeedCard />;
  });

  return (
    <div>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </div>
  );
}

export default FeedPage;
