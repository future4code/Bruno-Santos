import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: silver;
`;

function Footer() {
  return (
    <FooterContainer>
      <h1>FOOTER</h1>
    </FooterContainer>
  );
}

export default Footer;
