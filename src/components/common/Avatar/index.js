import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';
import InputFile from '../InputFile';

import avatarMask from '../../../assets/images/avatar_mask.png';

import './styles.pcss';

class Avatar extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    src: PropTypes.string,
    size: PropTypes.string,
    border: PropTypes.bool,
    online: PropTypes.bool,
    color: PropTypes.string,
  };

  static defaultProps = {
    src: avatarMask,
    size: 'large',
    border: false,
    online: false,
    color: 'white',
  };

  handleClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  };

  render() {
    const {
      className,
      src,
      size,
      border,
      onClick,
      onChange,
      online,
      color,
      ...other
    } = this.props;

    const inherit = color === 'inherit';

    const small = size === 'small';
    const medium = size === 'medium';
    const large = size === 'large';

    const changeFile = onChange && !small && !medium;

    return (
      <div
        className={classNames(
          'avatar',
          {
            [`color-${color}`]: !inherit,
            ['avatar_small']: small,
            ['avatar_medium']: medium,
            ['avatar_large']: large,
          },
          className,
        )}
        {...other}
      >
        <div
          className={classNames('avatar_container', {
            ['avatar_container_border']: border,
            ['avatar_container_click']: onClick,
          })}
          onClick={this.handleClick}
        >
          <img src={src} className="avatar_container_image" />
          {changeFile && (
            <InputFile onChange={onChange} accept=".png, .jpg, .jpeg">
              {({ onClickUpload }) => (
                <div className="avatar_container_upload">
                  <div
                    className="avatar_container_upload_button"
                    role="button"
                    onClick={onClickUpload}
                  >
                    <Icon name="camera" color="inherit" />
                  </div>
                </div>
              )}
            </InputFile>
          )}
        </div>
        <div
          className={classNames('avatar_online', {
            ['avatar_online_visible']: online,
            ['avatar_online_small']: small,
            ['avatar_online_medium']: medium,
            ['avatar_online_large']: large,
          })}
        />
      </div>
    );
  }
}

export default Avatar;
