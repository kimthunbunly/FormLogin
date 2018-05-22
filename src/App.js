import React, { Component } from 'react';
import './i-assests/i-css/Style.css';
import Header from './i-components/i-Header/Header';

import {Route} from 'react-router-dom';

import Login from './i-components/i-form-login/login';
import Signin from './i-components/i-signin/signin';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Route path='/u-login' component={Login}/>
        <Route path='/u-signin' component={Signin}/>
      </div>
    );
  }
}

export default App;
