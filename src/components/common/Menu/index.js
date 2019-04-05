import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import Dropdown from '../Dropdown';
import MenuList from '../MenuList';
import MenuListItem from '../MenuList/MenuListItem';
import Icon from '../Icon';

import './styles.pcss';

class Menu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClick: PropTypes.func,
    onClickItem: PropTypes.func,
    onClose: PropTypes.func,
    menuItems: PropTypes.array,
    open: PropTypes.bool,
  };

  static defaultProps = {
    onClick: () => null,
    onClickItem: () => null,
    onClose: () => null,
    menuItems: [],
    open: false,
  };

  onClickItem = (key, disabled) => {
    const { onClickItem, onClose } = this.props;
    if (!disabled) {
      return () => {
        onClickItem(key);
        onClose();
      };
    }
  };

  render() {
    const {
      className,
      children,
      onClick,
      onClose,
      menuItems,
      open,
    } = this.props;

    const menu = menuItems.map(item => {
      const key = _.get(item, 'key');
      const value = _.get(item, 'value');
      const disabled = _.get(item, 'disabled');
      const icon = _.get(item, 'icon');
      const divider = _.get(item, 'divider');
      return (
        <MenuListItem
          key={key}
          onClickItem={this.onClickItem(key, disabled)}
          disabled={disabled}
          divider={divider}
        >
          <Icon color="inherit" name={icon} type="left-icon" />
          {value}
        </MenuListItem>
      );
    });

    return (
      <Dropdown
        className={classNames('menu', className)}
        menu={<MenuList>{menu}</MenuList>}
        open={open}
        onClick={onClick}
        onClose={onClose}
      >
        {children}
      </Dropdown>
    );
  }
}

export default Menu;
