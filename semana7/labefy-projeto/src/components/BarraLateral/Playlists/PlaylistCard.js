import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
`;

const ButtonPlaylistCard = styled.button`
  background-color: #7f9966;
`;

const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      <ButtonPlaylistCard>{props.name}</ButtonPlaylistCard>
      <button onClick={() => props.deletePlaylist(props.playlistId)}>X</button>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
