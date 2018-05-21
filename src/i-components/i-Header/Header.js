import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import Login from '../i-form-login/login';

class Header extends Component {
  render() {
    return (
          <div className="Header">
            <div class="header-right">
                <a class="active" href="#about">About Us</a>
                <a href="#contact">Contact</a>
                <a href="#home">Home</a>
            </div>
            <div className="Header-Text">
              <h1>Easy Buying</h1>
              <p>Please Register for free</p>
              <Login/>
            </div>
          </div>
    );
  }
}

export default Header;
