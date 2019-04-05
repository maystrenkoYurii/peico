import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '../Spinner';

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
      <div
        className={classNames(
          'button-loading',
          { [`color-${color}`]: !inherit },
          className,
        )}
      >
        <button
          className={classNames(
            'button-loading_button',
            `button-loading_button_${variant}`,
            { ['button-loading_button_disabled']: disabled || loading },
          )}
          onClick={onClick}
        >
          <span
            className={classNames('button-loading_button_label', {
              [`color-text-${color}`]: contained,
              ['button-loading_button_label_small']: small,
              ['button-loading_button_label_medium']: medium,
              ['button-loading_button_label_large']: large,
            })}
          >
            {children}
          </span>
        </button>
        <div
          className={classNames('button-loading_loading', {
            ['button-loading_loading_visible']: loading,
          })}
        >
          <Spinner small color="inherit" />
        </div>
      </div>
    );
  }
}

export default Button;
