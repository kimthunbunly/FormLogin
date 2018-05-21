import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';

class Login extends Component {
  render() {
    return (
          <div className="panel">
              <h3>Form Login</h3>
              <input type="email" className="emailInput" name="email" id="email" required="" placeholder="  Username"/>
              <input type="password" className="passInput" name="password" id="password" required="" placeholder="  Password"/>
                <div className="forget-pass">
                  <a href="">Forget password?</a>
                </div>
                <div className="btn-login">
                  <button type="button">Login</button>
                </div>
          </div>
    );
  }
}

export default Login;
