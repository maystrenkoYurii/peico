import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ClickAwayListener from '../../common/ClickAwayListener';

import './styles.pcss';

class Dropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    menuClassName: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    menu: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClose: PropTypes.func,
    onClick: PropTypes.func,
    open: PropTypes.bool,
  };

  static defaultProps = {
    onClose: () => null,
    onClick: () => null,
    open: false,
  };

  render() {
    const {
      className,
      children,
      menu,
      menuClassName,
      open,
      onClose,
      onClick,
    } = this.props;

    return (
      <ClickAwayListener onClickAway={onClose}>
        <div
          className={classNames(
            'dropdown',
            { ['dropdown_open']: open },
            className,
          )}
          role="button"
          onClick={onClick}
        >
          {children}
          <div className={classNames('dropdown_menu', menuClassName)}>
            {menu}
          </div>
        </div>
      </ClickAwayListener>
    );
  }
}

export default Dropdown;
