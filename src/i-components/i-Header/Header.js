import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import '../../index.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
          <div className="Header">
            <div className="header-right">
              <Link to='/u-login'><span>Login</span></Link>
              <Link to='/u-about'>About</Link>
              <Link to='/u-contact'>Contact</Link>
              <Link to='/u-welcome'>Home</Link>
            </div>
            <div className="Header-Text">
              <h1>Easy Buying</h1>
            </div>
          </div>
    );
  }
}

export default Header;
