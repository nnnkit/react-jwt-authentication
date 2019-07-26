import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import UserContext from '../context/userContext';

export default class Header extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <NavLink className="navbar-item" to="/">
              <h4>JWT Authentication</h4>
            </NavLink>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                {this.context.user ? (
                  <div className="buttons">
                    <NavLink
                      to="/"
                      exact
                      className="button"
                      activeClassName="is-primary"
                    >
                      <strong>Home</strong>
                    </NavLink>
                    <NavLink
                      to="/new"
                      className="button"
                      activeClassName="is-primary"
                    >
                      New Article
                    </NavLink>
                  </div>
                ) : (
                  <div className="buttons">
                    <NavLink
                      to="/signup"
                      className="button"
                      activeClassName="is-primary"
                    >
                      <strong>Sign Up</strong>
                    </NavLink>
                    <NavLink
                      to="/login"
                      className="button"
                      activeClassName="is-primary"
                    >
                      Log In
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
