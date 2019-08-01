import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Mainpage from './mainpage/Mainpage';
import Aboutpage from './aboutme/Aboutpage';
import Careerpage from './career/Careerpage';

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ width: '100%' }}>
        <BrowserRouter>
          <div
            className="menu"
            style={{
              position: 'relative',
              backgroundColor: '#1b1c1d',
              height: '60px',
            }}
          >
            <Menu />
          </div>
          <div>
            <Route path="/" exact component={Mainpage} />
            <Route path="/aboutme" exact component={Aboutpage} />
            <Route path="/career" exact component={Careerpage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
