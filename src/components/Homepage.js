import React from 'react';
import './Homepage.css';

const Homepage = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <a className="active item">
        Home
      </a>
      <a className="item">
        About Me
      </a>
      <a className="item">
        Careers
      </a>
      <div className="right menu">
        <a className="ui invented button">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Homepage;
