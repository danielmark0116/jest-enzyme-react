import PlayersList from './PlayersList';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Player from '../Player/Player';

const players = [
  {
    name: 'Kunegunda',
    score: 5
  },
  {
    name: 'Antoś',
    score: 0
  }
];

it('renders without crashing', () => {
  shallow(<PlayersList players={players} />);
});

it('renders correct number of players', () => {
  const playerComponent = shallow(<PlayersList players={players} />);
  const expectedPlayersNumber = playerComponent.find(Player).length;

  // console.log(playerComponent.debug());

  expect(expectedPlayersNumber).toEqual(2);
});

it('invokes onScoreUpdate', () => {
  const mockedOnScoreUpdate = jest.fn();

  const playerComponent = shallow(
    <PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />
  );

  const firstPlayer = playerComponent.find(Player).at(1);

  const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

  onPlayerScoreChange(10);

  expect(mockedOnScoreUpdate).toBeCalledWith(1, 10);
});

it('invokes removePlayer', () => {
  const mockedRemove = jest.fn();

  const playerComponent = shallow(
    <PlayersList players={players} removePlayer={mockedRemove} />
  );

  const firstPlayer = playerComponent.find(Player).at(0);

  const onPlayerRemove = firstPlayer.prop('onPlayerRemove');

  onPlayerRemove('Kathy');

  expect(mockedRemove).toBeCalledWith(0, 'Kathy');
});
