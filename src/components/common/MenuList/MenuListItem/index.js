import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

import Divider from '../../Divider/index';

import './styles.pcss';

class MenuListItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClickItem: PropTypes.func,
    disabled: PropTypes.bool,
    divider: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  };

  static defaultProps = {
    disabled: false,
    divider: '',
  };

  render() {
    const { className, children, onClickItem, disabled, divider } = this.props;

    const bottomDivider = _.isObject(divider)
      ? _.includes(divider, 'bottom')
      : divider === 'bottom';

    const topDivider = _.isObject(divider)
      ? _.includes(divider, 'top')
      : divider === 'top';

    return (
      <Fragment>
        {topDivider && <Divider className="menu-list-item_divider" />}
        <li
          className={classNames(
            'menu-list-item',
            { ['menu-list-item_disabled']: disabled },
            className,
          )}
          onClick={onClickItem}
          role="button"
        >
          {children}
        </li>
        {bottomDivider && <Divider className="menu-list-item_divider" />}
      </Fragment>
    );
  }
}

export default MenuListItem;
