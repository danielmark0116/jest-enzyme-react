import React from 'react';
import './AddPlayer.scss';

const AddPlayer = props => {
  let input;

  const onSubmit = event => {
    event.preventDefault();

    input.value.length > 0 && props.onPlayerAdd(input.value);

    input.value = '';
  };

  return (
    <form className="AddPlayer" onSubmit={onSubmit}>
      <input
        type="text"
        className="AddPlayer__input"
        ref={node => (input = node)}
        placeholder={`Type in the player's name`}
      />
      <button type="submit" className="AddPlayer__submit" value="Add">
        Add
      </button>
    </form>
  );
};

export default AddPlayer;
