import React from 'react';
import Homepage from './Homepage';
import Maintext from './Maintext';

class App extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <Homepage />
        <Maintext />
      </div>
    );
  }
}

export default App;
