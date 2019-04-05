import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';
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
  isAuthenticatedInterface,
} from '../../core/functions/common';

export const withPageHelper = Enchanced => {
  const messages = defineMessages({
    home: {
      id: 'app.page.home',
      defaultMessage: 'Головна',
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

    getPageTitle = path => {
      const { formatMessage } = this.props.intl;

      switch (true) {
        case path === constants.PATCH_URL_HOME:
          return formatMessage(messages.home);

        default:
          return '';
      }
    };

    handleOnClickHome = () => {
      const { actions } = this.props;
      actions.setRouterToLinkAsync(constants.PATCH_URL_HOME);
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
          onClickBack={this.handleClickBack}
          {...other}
        />
      );
    }
  }

  return withPageHelper;
};
