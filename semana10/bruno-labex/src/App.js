import React from "react";
import styled from "styled-components";
import Router from "./route/Router";

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <GlobalContainer>
      <Router />
    </GlobalContainer>
  );
}

export default App;
