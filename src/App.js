import React, { Component } from 'react';
import './App.scss';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players
        .map((player, index) => {
          if (index === playerIndex) {
            return { ...player, score: player.score + scoreChange };
          }
          return player;
        })
        .sort((a, b) => b.score - a.score)
    });
  };

  onPlayerAdd = playerName => {
    const newPlayer = {
      name: playerName,
      score: 0
    };

    this.setState({
      players: [...this.state.players, newPlayer]
    });
  };

  removePlayer = (playersIndex, playerName) => {
    this.setState({
      players: this.state.players.filter(
        (player, index) => index !== playersIndex
      )
    });
  };

  render() {
    return (
      <div className="app">
        <AddPlayer onPlayerAdd={this.onPlayerAdd}></AddPlayer>
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          removePlayer={this.removePlayer}
        />
      </div>
    );
  }
}

export default App;
