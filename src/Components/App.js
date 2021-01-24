import React from 'react';
import Routes from './Router';
import GlobalStyles from './GlobalStyles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
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
