import React from 'react';
import Player from '../Player/Player';
import './PlayersList.scss';

const PlayersList = props => (
  <ul className="PlayersList">
    {props.players.map((player, i) => (
      <Player
        key={i}
        name={player.name}
        score={player.score}
        onPlayerRemove={playerName => props.removePlayer(i, playerName)}
        onPlayerScoreChange={points => props.onScoreUpdate(i, points)}
      />
    ))}
  </ul>
);

export default PlayersList;
