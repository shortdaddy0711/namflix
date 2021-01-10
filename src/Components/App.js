import React, { Component } from 'react';
import Routes from './Router';
import GlobalStyles from './GlobalStyles';

class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
