import React, { Component } from 'react';
import './i-assests/i-css/Style.css';
import Header from './i-components/i-Header/Header';

import {Route} from 'react-router-dom';

import Login from './i-components/i-form-login/login';
import Signin from './i-components/i-signin/signin';
import Welcome from './i-components/i-welcome/welcome';
import Contact from './i-components/i-contact/contact';
import About from './i-components/i-about/about';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path='/u-welcome' component={Welcome}/>
        <Route path='/u-login' component={Login}/>
        <Route path='/u-signin' component={Signin}/>
        <Route path='/u-contact' component={Contact}/>
        <Route path='/u-about' component={About}/>

      </div>
    );
  }
}

export default App;
