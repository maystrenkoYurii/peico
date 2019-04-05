import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';

import { isAuthenticatedInterface } from '../../../core/functions/common';
import { constants } from '../../../core/constants/index';

import PublicRoute from '../../common/Route/PublicRoute';

import Home from '../../containers/Pages/Public/Home';

class Routes extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
  };

  render() {
    const { authUser } = this.props;

    const isAuth = isAuthenticatedInterface(authUser);

    return (
      <Switch>
        <PublicRoute
          exact
          path={constants.PATCH_URL_HOME}
          component={Home}
          isAuth={isAuth}
          redirect={constants.PATCH_URL_HOME}
        />

        <Redirect to={constants.PATCH_URL_HOME} />
      </Switch>
    );
  }
}

export default Routes;
