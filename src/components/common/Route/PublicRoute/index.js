import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

class PublicRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    redirect: PropTypes.string,
    isAuth: PropTypes.bool,
    only: PropTypes.bool,
  };

  static defaultProps = {
    redirect: null,
    isAuth: false,
    only: false,
  };

  render() {
    const {
      component: Component,
      isAuth,
      only,
      redirect,
      ...other
    } = this.props;

    return (
      <Route
        render={props =>
          only && isAuth ? (
            redirect ? (
              <Redirect to={redirect} />
            ) : null
          ) : (
            <Component {...props} />
          )
        }
        {...other}
      />
    );
  }
}

export default PublicRoute;
