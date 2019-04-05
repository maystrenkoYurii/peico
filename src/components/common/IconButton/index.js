import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class IconButton extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClick: PropTypes.func,
  };

  render() {
    const { className, children, onClick, ...other } = this.props;

    return (
      <div
        className={classNames('icon-button', className)}
        onClick={onClick}
        role="button"
        {...other}
      >
        {children}
      </div>
    );
  }
}

export default IconButton;
