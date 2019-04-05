import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Navigation from '../../../containers/Wrapper/Header/Navigation';

import './styles.pcss';

class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('header', className)}>
        <Navigation />
      </div>
    );
  }
}

export default Header;
