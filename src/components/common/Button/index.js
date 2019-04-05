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
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onClick: () => null,
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    loading: false,
    disabled: false,
  };

  render() {
    const {
      className,
      children,
      onClick,
      variant,
      color,
      size,
      loading,
      disabled,
    } = this.props;

    const inherit = color === 'inherit';

    const small = size === 'small';
    const medium = size === 'medium';
    const large = size === 'large';

    const contained = variant === 'contained';

    return (
      <button
        className={classNames('button', `button_${variant}`, {
          [`color-${color}`]: !inherit,
          ['button_disabled']: disabled || loading,
          className,
        })}
        onClick={onClick}
      >
        <span
          className={classNames('button_label', {
            [`color-text-${color}`]: contained,
            ['button_label_small']: small,
            ['button_label_medium']: medium,
            ['button_label_large']: large,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
}

export default Button;
