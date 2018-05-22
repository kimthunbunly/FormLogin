import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
          <div className="Header">
            <div class="header-right">
              <a> <Link to='/u-login'><span>Login</span></Link></a>
              <a>  <Link to='/'>About</Link></a>
              <a>  <Link to='/'>Contact</Link></a>
              <a>  <Link to='/'>Home</Link></a>
            </div>
            <div className="Header-Text">
              <h1>Easy Buying</h1>
              <p>Please Register for free</p>
            </div>
          </div>
    );
  }
}

export default Header;
