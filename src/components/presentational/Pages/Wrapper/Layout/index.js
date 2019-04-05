import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class Layout extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    fullWidth: PropTypes.bool,
    minHeight: PropTypes.bool,
  };

  static defaultProps = {
    fullWidth: false,
    minHeight: false,
  };

  render() {
    const { className, children, fullWidth, minHeight } = this.props;

    return (
      <div
        className={classNames(
          fullWidth ? 'layout-full' : 'layout',
          { ['layout-min-height']: minHeight },
          className,
        )}
      >
        {children}
      </div>
    );
  }
}

export default Layout;
