import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
`;

const ButtonPlaylistCard = styled.button`
  background-color: white;
`;

const TextoDaPlaylist = styled.p`
  color: black;
`;

const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      <ButtonPlaylistCard
        onClick={() => props.pegaPlaylistId(props.playlistId)}
      >
        <TextoDaPlaylist>{props.name}</TextoDaPlaylist>
      </ButtonPlaylistCard>
      <button onClick={() => props.deletePlaylist(props.playlistId)}>X</button>
    </PlaylistCardContainer>
  );
};

export default PlaylistCard;
