import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it("should update player's score", () => {
  const players = [{ name: 'Stephen', score: 2 }, { name: 'Kathy', score: 1 }];

  const appComponent = shallow(<App />);

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(1, 4);

  const playersAfterUpdate = appComponent.state().players;

  expect(playersAfterUpdate).toEqual([
    { name: 'Kathy', score: 5 },
    { name: 'Stephen', score: 2 }
  ]);
});

it('should add a new player', () => {
  const appComponent = shallow(<App />);

  appComponent.setState({ players: [] });

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');

  onPlayerAdd('Joe');

  const playersFromState = appComponent.state().players;

  expect(playersFromState.length).toEqual(1);
  expect(playersFromState[0].name).toEqual('Joe');
  expect(playersFromState[0].score).toEqual(0);
});

it('should remove player', () => {
  const appComponent = shallow(<App />);

  const players = [{ name: 'John', score: 1 }, { name: 'Stephen', score: 1 }];

  appComponent.setState({ players });

  const removePlayer = appComponent.find(PlayersList).prop('removePlayer');

  removePlayer(0, 'John');

  const playersFromState = appComponent.state().players;

  expect(playersFromState.length).toEqual(1);
  expect(playersFromState[0].name).toEqual('Stephen');
  expect(playersFromState[0].score).toEqual(1);
});
