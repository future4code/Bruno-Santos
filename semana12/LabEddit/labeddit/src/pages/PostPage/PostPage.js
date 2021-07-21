import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

function PostPage() {
  useProtectedPage();
  return (
    <div>
      <h1>PostPage</h1>
    </div>
  );
}

export default PostPage;
