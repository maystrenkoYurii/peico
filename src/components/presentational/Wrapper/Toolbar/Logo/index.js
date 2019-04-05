import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import logo from '../../../../../assets/images/logo-white.png';

import './styles.pcss';

class Logo extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('toolbar-logo', className)}>
        <img src={logo} className="toolbar-logo_logo" />
      </div>
    );
  }
}

export default Logo;
