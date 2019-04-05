import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../../../presentational/Wrapper/Toolbar/Logo';

class LogoContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Logo className={className} />;
  }
}

export default LogoContainer;
