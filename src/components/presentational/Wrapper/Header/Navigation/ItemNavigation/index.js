import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class ItemNavigation extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
  };

  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames('navigation-item', className)}>{children}</div>
    );
  }
}

export default ItemNavigation;
