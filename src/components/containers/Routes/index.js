import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Router from '../../../components/presentational/Routes';

import { getUserWithReselect } from '../../../core/functions/selectors';

const mapStateToProps = state => {
  return {
    authUser: getUserWithReselect(state),
  };
};

@compose(connect(mapStateToProps))
class RoutesContainer extends Component {
  static propTypes = {
    authUser: PropTypes.object,
  };

  render() {
    const { authUser, ...other } = this.props;

    return <Router authUser={authUser} {...other} />;
  }
}

export default RoutesContainer;
