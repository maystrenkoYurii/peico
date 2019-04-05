import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class Divider extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className, ...other } = this.props;

    return <hr className={classNames('divider', className)} {...other} />;
  }
}

export default Divider;
