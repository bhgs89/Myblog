import React from 'react';
import Menu from './Menu';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Menu />
        <Homepage />
      </div>
    );
  }
}

export default App;
