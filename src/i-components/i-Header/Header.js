import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
          <div className="Header">
            <div class="header-right">
              <a>  <Link to='/u-login'><span>Login</span></Link></a>
              <a>  <Link to='/u-about'>About</Link></a>
              <a>  <Link to='/u-contact'>Contact</Link></a>
              <a>  <Link to='/u-welcome'>Home</Link></a>
            </div>
            <div className="Header-Text">
              <h1>Easy Buying</h1>
            </div>
          </div>
    );
  }
}

export default Header;
