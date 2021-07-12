import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

function ErrorPage() {
  return (
    <ErrorPageContainer>
      <h1>ERRO</h1>
    </ErrorPageContainer>
  );
}

export default ErrorPage;
