import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import logo from '../../i-assests/i-image/i-Mac.svg';

class Signin extends Component {
  render() {
    return (
      <div className="wel">
          <p>Please Register for free</p>
        <div className="wel-title">
          <h1>Hello! Welcome Screen </h1>
        </div>
        <div className="wel-icon"><br/></div>
        <div className="wel-icon"><br/></div>
        <div className="wel-icon">
          <img src={logo}/>
          <p>Copyright © 2018 by Developer Banly</p>
        </div>
      </div>
    );
  }
}

export default Signin;
