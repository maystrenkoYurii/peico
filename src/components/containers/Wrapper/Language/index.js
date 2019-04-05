import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Language from '../../../presentational/Wrapper/Language/index';

import { uiActions } from '../../../../flux-saga/bus/ui/wrapper/actions';

import { getAppOpenLanguageWithReselect } from '../../../../core/functions/selectors';

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

const mapStateToProps = state => {
  return {
    appOpenLanguage: getAppOpenLanguageWithReselect(state),
  };
};

@compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
class LanguageContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    actions: PropTypes.object,
    appOpenLanguage: PropTypes.bool,
  };

  handleClose = () => {
    const { actions } = this.props;
    actions.setAppOpenLanguageState(false);
  };

  render() {
    const { className, appOpenLanguage } = this.props;

    return (
      <Language
        className={className}
        open={appOpenLanguage}
        onClose={this.handleClose}
      />
    );
  }
}

export default LanguageContainer;
