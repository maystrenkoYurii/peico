import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UserMenu from '../../../../../presentational/Wrapper/Toolbar/Action/UserMenu';

class UserMenuContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <UserMenu className={className} />;
  }
}

export default UserMenuContainer;
