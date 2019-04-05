import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import _, { curryRight } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { constants } from '../../core/constants/index';

import { uiActions } from '../../flux-saga/bus/ui/wrapper/actions';
import { uiActionsAsync } from '../../flux-saga/bus/ui/wrapper/saga/asyncActions';

import {
  getUserWithReselect,
  getLocationRouterWithReselect,
  getActionRouterWithReselect,
  getAppPageContentTitleWithReselect,
} from '../../core/functions/selectors';
import {
  getIdAuthUser,
  getUserPatch,
  isAuthenticatedInterface,
} from '../../core/functions/common';

export const withPageHelper = Enchanced => {
  const messages = defineMessages({
    home: {
      id: 'app.page.home',
      defaultMessage: 'Головна',
    },
    users: {
      id: 'app.page.users',
      defaultMessage: 'Люди',
    },
    homeUser: {
      id: 'app.page.homeUser',
      defaultMessage: 'Домашня сторінка',
    },
    edit: {
      id: 'app.page.edit',
      defaultMessage: 'Редагувати',
    },
    settings: {
      id: 'app.page.settings',
      defaultMessage: 'Налаштування',
    },
    message: {
      id: 'app.page.message',
      defaultMessage: 'Повідомлення',
    },
    notification: {
      id: 'app.page.notification',
      defaultMessage: 'Сповіщення',
    },
    about: {
      id: 'app.page.about',
      defaultMessage: 'Про нас',
    },
    termOfUse: {
      id: 'app.page.termOfUse',
      defaultMessage: 'Умови використання',
    },
    privacyPolicy: {
      id: 'app.page.privacyPolicy',
      defaultMessage: 'Політика конфіденційності',
    },
    mobileApps: {
      id: 'app.page.mobileApps',
      defaultMessage: 'Мобільні додатки',
    },
  });

  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          ...uiActions,
          ...uiActionsAsync,
        },
        dispatch,
      ),
    };
  };

  const mapStateToProps = state => {
    const authUser = getUserWithReselect(state);
    const idAuthUser = getIdAuthUser(authUser);
    const isAuthUser = isAuthenticatedInterface(authUser);
    return {
      authUser: authUser,
      idAuthUser: idAuthUser,
      isAuthUser: isAuthUser,
      location: getLocationRouterWithReselect(state),
      appPageContentTitle: getAppPageContentTitleWithReselect(state),
      lastActionRouter: getActionRouterWithReselect(state),
    };
  };

  @compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    curryRight(injectIntl),
  )
  class withPageHelper extends Component {
    static propTypes = {
      intl: intlShape,
      actions: PropTypes.object,
      authUser: PropTypes.object,
      isAuthUser: PropTypes.bool,
      idAuthUser: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      location: PropTypes.object,
      appPageContentTitle: PropTypes.string,
      lastActionRouter: PropTypes.string,
    };

    getPageTitle = (path, isDefault = true) => {
      const { appPageContentTitle } = this.props;
      const { formatMessage } = this.props.intl;

      switch (true) {
        case path === constants.PATCH_URL_HOME:
          return formatMessage(messages.home);

        case path === constants.PATCH_URL_EDIT_USER || _.includes(path, 'edit'):
          return isDefault ? formatMessage(messages.edit) : appPageContentTitle;

        case path === constants.PATCH_URL_SETTINGS ||
          _.includes(path, 'settings'):
          return isDefault
            ? formatMessage(messages.settings)
            : appPageContentTitle;

        case path === constants.PATCH_URL_MESSAGE ||
          _.includes(path, 'message'):
          return isDefault
            ? formatMessage(messages.settings)
            : appPageContentTitle;

        case path === constants.PATCH_URL_NOTIFICATION ||
          _.includes(path, 'notification'):
          return formatMessage(messages.settings);

        case path === constants.PATCH_URL_USERS:
          return formatMessage(messages.users);

        case path === constants.PATCH_URL_USER || _.includes(path, 'users'):
          return isDefault
            ? formatMessage(messages.homeUser)
            : appPageContentTitle;

        case path === constants.PATCH_URL_ABOUT:
          return formatMessage(messages.about);

        case path === constants.PATCH_URL_TERM_OF_USE:
          return formatMessage(messages.termOfUse);

        case path === constants.PATCH_URL_PRIVACY_POLICY:
          return formatMessage(messages.privacyPolicy);

        case path === constants.PATCH_URL_MOBILE_APPS:
          return formatMessage(messages.mobileApps);

        default:
          return '';
      }
    };

    handleOnClickHome = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_HOME);
    };

    handleOnClickUsers = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_USERS);
    };

    handleOnClickUser = id => {
      const { actions, authUser } = this.props;
      actions.setRouterToLinkAsync(getUserPatch(authUser, id));
    };

    handleOnClickEditUser = () => {
      const { actions, idAuthUser } = this.props;
      const patch = _.replace(constants.PATCH_URL_EDIT_USER, ':id', idAuthUser);
      actions.setRouterToLinkAsync(patch);
    };

    handleOnClickSettings = () => {
      const { actions, idAuthUser } = this.props;
      const patch = _.replace(constants.PATCH_URL_SETTINGS, ':id', idAuthUser);
      actions.setRouterToLinkAsync(patch);
    };

    handleOnClickMessage = () => {
      const { actions, idAuthUser } = this.props;
      const patch = _.replace(constants.PATCH_URL_MESSAGE, ':id', idAuthUser);
      actions.setRouterToLinkAsync(patch);
    };

    handleOnClickNotification = () => {
      const { actions, idAuthUser } = this.props;
      const patch = _.replace(
        constants.PATCH_URL_NOTIFICATION,
        ':id',
        idAuthUser,
      );
      actions.setRouterToLinkAsync(patch);
    };

    handleOnClickAbout = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_ABOUT);
    };

    handleOnClickTermOfUse = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_TERM_OF_USE);
    };

    handleOnClickPrivacyPolicy = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_PRIVACY_POLICY);
    };

    handleOnClickMobileApps = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_MOBILE_APPS);
    };

    handleClickBack = () => {
      const { actions, lastActionRouter } = this.props;
      if (lastActionRouter === 'POP') {
        actions.setRouterToLinkAsync(constants.PATCH_URL_HOME);
      } else {
        actions.goBack();
      }
    };

    render() {
      const {
        authUser,
        idAuthUser,
        isAuthUser,
        location,
        ...other
      } = this.props;

      return (
        <Enchanced
          authUser={authUser}
          idAuthUser={idAuthUser}
          isAuthUser={isAuthUser}
          location={location}
          getPageTitle={this.getPageTitle}
          onClickHome={this.handleOnClickHome}
          onClickUsers={this.handleOnClickUsers}
          onClickUser={this.handleOnClickUser}
          onClickEditUser={this.handleOnClickEditUser}
          onClickSettings={this.handleOnClickSettings}
          onClickMessage={this.handleOnClickMessage}
          onClickNotification={this.handleOnClickNotification}
          onClickAbout={this.handleOnClickAbout}
          onClickTermOfUse={this.handleOnClickTermOfUse}
          onClickPrivacyPolicy={this.handleOnClickPrivacyPolicy}
          onClickMobileApps={this.handleOnClickMobileApps}
          onClickBack={this.handleClickBack}
          {...other}
        />
      );
    }
  }

  return withPageHelper;
};
