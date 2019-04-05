import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    redirect: PropTypes.string,
    isAuth: PropTypes.bool,
  };

  static defaultProps = {
    redirect: null,
    isAuth: false,
  };

  render() {
    const { component: Component, isAuth, redirect, ...other } = this.props;

    return (
      <Route
        render={props =>
          isAuth ? (
            <Component {...props} />
          ) : redirect ? (
            <Redirect to={redirect} />
          ) : null
        }
        {...other}
      />
    );
  }
}

export default PrivateRoute;
