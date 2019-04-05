import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userActionsAsync } from '../../flux-saga/bus/fetch/users/saga/asyncActions';

import { types } from '../../flux-saga/bus/fetch/users/types';

import { isClient, isLoadingPage } from '../../core/functions/common';
import { getFetchingWithReselect } from '../../core/functions/selectors';

export const withPageFetch = Enchanced => {
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          ...userActionsAsync,
        },
        dispatch,
      ),
    };
  };

  const mapStateToProps = state => {
    return {
      fetching: getFetchingWithReselect(state),
    };
  };

  @compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )
  class withPageFetch extends Component {
    static propTypes = {
      actions: PropTypes.object,
      fetching: PropTypes.object,
    };

    getFetchProfile = () => {
      const { actions } = this.props;
      if (isClient()) {
        actions.setFetchProfileAsync();
      }
    };

    render() {
      const {
        fetching: { isFetch, type },
        ...other
      } = this.props;

      const isLoadingProfile = isLoadingPage(
        isFetch,
        type,
        types.SET_FETCH_PROFILE_REQUEST,
      );

      return (
        <Enchanced
          isLoadingProfile={isLoadingProfile}
          getFetchProfile={this.getFetchProfile}
          {...other}
        />
      );
    }
  }

  return withPageFetch;
};
