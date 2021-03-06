import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('invokes onPlayerAdd wiht correct name', () => {
  const onPlayerAdd = jest.fn();

  const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

  let nameInput = addPlayerComponent
    .find('input')
    .first()
    .getDOMNode();

  nameInput.value = 'Stephen';

  const form = addPlayerComponent.find('form');
  form.simulate('submit');

  expect(onPlayerAdd).toBeCalledWith('Stephen');
});
