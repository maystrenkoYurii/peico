import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../../presentational/Wrapper/Header/index';

class HeaderContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Header className={className} />;
  }
}

export default HeaderContainer;
