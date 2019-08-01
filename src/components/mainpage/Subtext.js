import React from 'react';
import profile from '../../pics/profile.jpg';
import './Subtext.css';

const Subtext = () => {
  return (
    <div className="ui vertical stripe segment">
      <div className="top subject">
        <h1 className="hi header">It is just began</h1>
        <p>학교 종이 땡땡땡 어서모이자</p>
      </div>
      <div className="ui middle aligned stackable grid container">
        <div className="eight wide column">
          <h2 className="ui header">What up</h2>
        </div>
        <div className="eight wide column">
          <h2 className="ui header">Another Story</h2>
        </div>
      </div>
    </div>
  );
};

export default Subtext;
