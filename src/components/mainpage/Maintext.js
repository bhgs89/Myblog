import React from 'react';
import home_main from '../../pics/home_main.png';
import './Maintext.css';

const Maintext = props => {
  return (
    <div
      className="ui inverted vertical masthead center aligned segment"
      style={{ height: '700px' }}
    >
      <img src={home_main} alt="Main" />
      <div className="ui text container">
        <h1 className="ui invented header">Create your life</h1>
      </div>
    </div>
  );
};

export default Maintext;
