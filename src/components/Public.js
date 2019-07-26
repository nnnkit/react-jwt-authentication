import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

export default class Public extends Component {
  render() {
    return (
      <div>
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" component={Login} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </div>
    );
  }
}
