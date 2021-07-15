import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: silver;
`;

function Header() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  return (
    <HeaderContainer>
      <button onClick={goToHomePage}>
        <h1>LabeX</h1>
      </button>
    </HeaderContainer>
  );
}

export default Header;
