import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import FeedCard from "../../components/FeedCard/FeedCard";

function FeedPage() {
  useProtectedPage();
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
