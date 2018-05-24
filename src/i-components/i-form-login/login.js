import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import { Link } from 'react-router-dom';
import { FormErrors } from '../i-error/error';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is worng input !';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render() {
    return (
          <div className="row">
              <div className="col-3">  <br/>    </div>
              <div className="col-3">
                          <h3>Form Login</h3>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                <input type="email"
                                required className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleUserInput}  />
                            </div>
                            <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                <input type="password" className="form-control" name="password"
                                  placeholder="Password"
                                  value={this.state.password}
                                  onChange={this.handleUserInput}  />
                            </div>
                            <div className="forget-pass">
                                  <Link to='/u-login'>Forget password?</Link>
                            </div>
                            <FormErrors formErrors={this.state.formErrors} />
                            <div className="btn-login">
                                <button type="submit"
                                className="btn btn-primary"
                                disabled={!this.state.formValid}
                                >Login</button>
                            </div>
                            <div className="sign-in">
                                  <Link to = '/u-signin'>Register New Account Here!</Link>
                            </div>
                      </div>
          </div>
    );
  }
}
