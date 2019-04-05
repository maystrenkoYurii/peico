import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppMenu from '../../../../../presentational/Wrapper/Toolbar/Action/AppMenu';

import { uiActions } from '../../../../../../flux-saga/bus/ui/wrapper/actions';

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...uiActions,
      },
      dispatch,
    ),
  };
};

const mapStateToProps = () => {
  return {};
};

@compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
class AppMenuContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    actions: PropTypes.object,
  };

  handleOpenAppLanguage = () => {
    const { actions } = this.props;
    actions.setAppOpenLanguageState(true);
  };

  render() {
    const { className } = this.props;

    return (
      <AppMenu
        className={className}
        onOpenAppLanguage={this.handleOpenAppLanguage}
      />
    );
  }
}

export default AppMenuContainer;
