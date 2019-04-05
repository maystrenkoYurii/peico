import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClick: PropTypes.func,
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
  };

  static defaultProps = {
    onClick: () => null,
    variant: 'contained',
    color: 'primary',
    size: 'normal',
  };

  render() {
    const { className, children, onClick, variant, color, size } = this.props;

    const inherit = color === 'inherit';

    const normal = size === 'normal';
    const small = size === 'small';

    const contained = variant === 'contained';

    return (
      <button
        className={classNames('button', `button_${variant}`, {
          [`color-${color}`]: !inherit,
          className,
        })}
        onClick={onClick}
      >
        <span
          className={classNames('button_label', {
            [`color-text-${color}`]: contained,
            ['button_label_small']: small,
            ['button_label_medium']: normal,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
}

export default Button;
