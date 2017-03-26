import React, { PropTypes } from 'react';
import TodoContainer from 'containers/todo';
import Home from 'components/home';

const Main = ({ loggedIn }) => {
  return loggedIn ? <TodoContainer/> : <Home/>;
};

Main.propTypes = {
  loggedIn: PropTypes.bool
};

export default Main;
