import React from 'react';
import { Link } from 'react-router-dom';
import ContactMe from './ContactMe';
import './Menu.css';

class Menu extends React.Component {
  state = {
    button1: 'active item',
    button2: 'item',
    button3: 'item',
    modal: false,
  };

  onClickHome = () => {
    this.setState({
      button1: 'active item',
      button2: 'item',
      button3: 'item',
      modal: false,
    });
  };

  onClickAboutMe = () => {
    this.setState({
      button1: 'item',
      button2: 'active item',
      button3: 'item',
      modal: false,
    });
  };

  onClickCareer = () => {
    this.setState({
      button1: 'item',
      button2: 'item',
      button3: 'active item',
      modal: false,
    });
  };

  onClickContact = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
      });
    } else {
      this.setState({
        modal: false,
      });
    }
  };

  renderContact() {
    if (this.state.modal) {
      return (
        <div>
          <ContactMe />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className={this.state.button1} onClick={this.onClickHome}>
          Home
        </Link>
        <Link
          to="/aboutme"
          className={this.state.button2}
          onClick={this.onClickAboutMe}
        >
          About Me
        </Link>
        <Link
          to="/career"
          className={this.state.button3}
          onClick={this.onClickCareer}
        >
          Careers
        </Link>
        <div className="right menu">
          <button className="ui invented button" onClick={this.onClickContact}>
            Contact me
          </button>
          {this.renderContact()}
        </div>
      </div>
    );
  }
}

export default Menu;
