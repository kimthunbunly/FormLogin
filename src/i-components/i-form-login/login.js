import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
          <div className="row">
              <div className="col-3">
                <h2>Hi</h2>
              </div>
              <div className="col-3">
                    <h3>Form Login</h3>
                    <input type="email" className="emailInput" name="email" id="email" required="" placeholder="  Username"/>
                    <input type="password" className="passInput" name="password" id="pass" required="" placeholder="  Password"/>
                    <div className="forget-pass">
                      <a href="">Forget password?</a>
                    </div>
                    <div className="btn-login">
                      <button type="button">Login</button>
                    </div>
                    <div className="sign-in">
                      <a href=''><Link to = '/u-signin'>Register New Account Here!</Link> </a>
                    </div>
                </div>
                <div className="col-3">
                  <h2>Hi</h2>
                </div>
          </div>
    );
  }
}

export default Login;
