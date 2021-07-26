import styled from "styled-components";

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6ffe6;
  min-height: 100vh;
`;

export const CardContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 20px;
`;

export const CommentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
  width: 100vw;
  justify-content: space-around;
  margin: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #a64dff;

  h3 {
    color: #33cc00;
    font-weight: bold;
  }
`;

export const BackColor = styled.div`
  background-color: #79ff4d;
`;
