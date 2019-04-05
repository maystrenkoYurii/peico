import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
    small: PropTypes.bool,
  };

  static defaultProps = {
    color: 'primary',
    variant: 'border',
    small: false,
  };

  render() {
    const { className, variant, small, color } = this.props;

    const inherit = color === 'inherit';

    return (
      <span
        className={classNames(
          `spinner-${variant}`,
          { [`color-${color}`]: !inherit },
          { [`spinner-${variant}_sm`]: small },
          className,
        )}
        role="status"
      />
    );
  }
}

export default Spinner;
