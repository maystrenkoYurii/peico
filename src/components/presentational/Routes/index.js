import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';

import {
  isAuthenticatedInterface,
  getUserPatch,
} from '../../../core/functions/common';
import { constants } from '../../../core/constants/index';

import PrivateRoute from '../../common/Route/PrivateRoute';
import PublicRoute from '../../common/Route/PublicRoute';

import Home from '../../containers/Pages/Public/Home';
import About from '../../containers/Pages/Public/About';
import TermOfUse from '../../containers/Pages/Public/TermOfUse';
import PrivacyPolicy from '../../containers/Pages/Public/PrivacyPolicy';
import Settings from '../../containers/Pages/Private/Settings';
import Users from '../../containers/Pages/Private/Users';
import User from '../../containers/Pages/Private/User';
import EditUser from '../../containers/Pages/Private/EditUser';
import Message from '../../containers/Pages/Private/Message';
import Notification from '../../containers/Pages/Private/Notification';
import MobileApps from '../../containers/Pages/Public/MobileApps';

class Routes extends Component {
  static propTypes = {
    authUser: PropTypes.object.isRequired,
  };

  render() {
    const { authUser } = this.props;

    const isAuth = isAuthenticatedInterface(authUser);

    const redirect = getUserPatch(authUser);

    return (
      <Switch>
        <PublicRoute
          exact
          path={constants.PATCH_URL_HOME}
          component={Home}
          isAuth={isAuth}
          redirect={redirect}
          only
        />

        <PublicRoute
          exact
          path={constants.PATCH_URL_ABOUT}
          component={About}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PublicRoute
          exact
          path={constants.PATCH_URL_TERM_OF_USE}
          component={TermOfUse}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PublicRoute
          exact
          path={constants.PATCH_URL_PRIVACY_POLICY}
          component={PrivacyPolicy}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PublicRoute
          exact
          path={constants.PATCH_URL_MOBILE_APPS}
          component={MobileApps}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PrivateRoute
          exact
          path={constants.PATCH_URL_USERS}
          component={Users}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PrivateRoute
          exact
          path={constants.PATCH_URL_USER}
          component={User}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PrivateRoute
          exact
          path={constants.PATCH_URL_EDIT_USER}
          component={EditUser}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PrivateRoute
          exact
          path={constants.PATCH_URL_SETTINGS}
          component={Settings}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PrivateRoute
          exact
          path={constants.PATCH_URL_MESSAGE}
          component={Message}
          isAuth={isAuth}
          redirect={redirect}
        />

        <PrivateRoute
          exact
          path={constants.PATCH_URL_NOTIFICATION}
          component={Notification}
          isAuth={isAuth}
          redirect={redirect}
        />

        <Redirect to={redirect} />
      </Switch>
    );
  }
}

export default Routes;
