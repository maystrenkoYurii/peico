import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Helmet from '../../presentational/Helmet';

import { getAppLanguageWithReselect } from '../../../core/functions/selectors';

const mapStateToProps = state => {
  return {
    language: getAppLanguageWithReselect(state),
  };
};

@compose(connect(mapStateToProps))
class HelmetContainer extends Component {
  static propTypes = {
    language: PropTypes.string,
  };

  render() {
    const { language } = this.props;

    return <Helmet language={language} />;
  }
}

export default HelmetContainer;
