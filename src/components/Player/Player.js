import React from 'react';
import './Player.scss';

const Player = props => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <button
      className="Player__button small success"
      onClick={() => props.onPlayerScoreChange(1)}
    >
      +
    </button>
    <button
      className="Player__button small danger"
      onClick={() => props.onPlayerScoreChange(-1)}
    >
      -
    </button>
    <button
      className="Player__delete small"
      onClick={() => props.onPlayerRemove(props.name)}
    >
      delete
    </button>
  </li>
);

export default Player;
