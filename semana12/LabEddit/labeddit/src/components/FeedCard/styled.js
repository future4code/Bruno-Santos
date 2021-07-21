import styled from "styled-components";

export const FeedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  h3 {
    color: #a64dff;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BackColor = styled.div`
  background-color: #79ff4d;
`;

export const LikeImage = styled.img`
  height: 50px;
  width: 50px;
  color: #66ff33;
`;
