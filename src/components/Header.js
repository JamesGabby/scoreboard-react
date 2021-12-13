import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title, score, handleResetScore }) => {
  return (
    <header>
      <Stats players={players} score={score} handleResetScore={handleResetScore} />
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object).isRequired
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;