import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClick: PropTypes.func,
    href: PropTypes.string,
  };

  render() {
    const { className, children, href, onClick, ...other } = this.props;

    return href ? (
      <a
        className={classNames('app-link', className)}
        href={href}
        onClick={onClick}
        role="button"
        {...other}
      >
        {children}
      </a>
    ) : (
      <span
        className={classNames('app-link', className)}
        onClick={onClick}
        role="button"
        {...other}
      >
        {children}
      </span>
    );
  }
}

export default Link;
