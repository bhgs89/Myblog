import React from 'react';
import Maintext from './Maintext';
import Subtext from './Subtext';

class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <Maintext />
        <Subtext />
      </div>
    );
  }
}

export default Mainpage;
