import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";

function ErrorPage() {
  return (
    <ErrorPageContainer>
      <ErrorImage
        src={
          "https://cdn.netlify.com/1c9c8c01b0e5efecef2bfa5c1d72e1fbf57aaf38/f35fd/img/blog/the404.png"
        }
      />
    </ErrorPageContainer>
  );
}

export default ErrorPage;
