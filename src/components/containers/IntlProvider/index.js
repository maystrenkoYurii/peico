import PropTypes from 'prop-types';
import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import IntlProvider from '../../../components/presentational/IntlProvider';

import { getAppLanguageWithReselect } from '../../../core/functions/selectors';

const mapStateToProps = state => {
  return {
    language: getAppLanguageWithReselect(state),
  };
};

@compose(connect(mapStateToProps))
class CustomIntlProviderContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    language: PropTypes.string,
  };

  render() {
    const { children, language } = this.props;

    return <IntlProvider language={language}>{children}</IntlProvider>;
  }
}

export default CustomIntlProviderContainer;
