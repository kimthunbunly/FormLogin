import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './i-Header/Header';
import Login from './i-form-login/login';
import Signin from './i-signin/signin';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/u-login' component={Login}/>
      <Route path='/u-signin' component={Signin}/>
    </Switch>
  </main>
)

export default Main;
