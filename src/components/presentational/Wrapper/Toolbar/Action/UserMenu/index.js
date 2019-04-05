import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import Menu from '../../../../../common/Menu';
import Avatar from '../../../../../common/Avatar';
import Button from '../../../../../common/Button';

import { withPageHelper } from '../../../../../hok/withPageHelper';

import { constants } from '../../../../../../core/constants/index';

import './styles.pcss';

const messages = defineMessages({
  changePassword: {
    id: 'app.user.action.changePassword',
    defaultMessage: 'Змінити пароль',
  },
  logout: {
    id: 'app.user.action.logout',
    defaultMessage: 'Вихід',
  },
  signIn: {
    id: 'app.user.action.signIn',
    defaultMessage: 'Увійти',
  },
});

@compose(
  curryRight(injectIntl),
  withPageHelper,
)
class UserMenu extends Component {
  static propTypes = {
    intl: intlShape,
    className: PropTypes.string,
    getPageTitle: PropTypes.func,
    onClickUser: PropTypes.func,
    onClickEditUser: PropTypes.func,
    onClickSettings: PropTypes.func,
    isAuthUser: PropTypes.bool,
    onClickSignIn: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  static defaultProps = {
    onClickSignIn: () => null,
  };

  handleClickMenuItem = key => {
    const { onClickUser, onClickEditUser, onClickSettings } = this.props;

    switch (key) {
      case 'home-page':
        return onClickUser();

      case 'edit-user':
        return onClickEditUser();

      case 'settings':
        return onClickSettings();

      default:
        return () => null;
    }
  };

  handleChangeOpen = open => {
    this.setState({ open: open });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { className, getPageTitle, isAuthUser, onClickSignIn } = this.props;
    const { open } = this.state;

    const menuItems = [
      {
        key: 'home-page',
        value: getPageTitle(constants.PATCH_URL_USER),
        icon: 'home-account',
      },
      {
        key: 'edit-user',
        value: getPageTitle(constants.PATCH_URL_EDIT_USER),
        icon: 'account-edit',
      },
      {
        key: 'settings',
        value: getPageTitle(constants.PATCH_URL_SETTINGS),
        icon: 'settings',
      },
      {
        key: 'changePassword',
        value: formatMessage(messages.changePassword),
        icon: 'lock-reset',
      },
      {
        key: 'logout',
        value: formatMessage(messages.logout),
        icon: 'logout',
      },
    ];

    return isAuthUser ? (
      <Menu
        className={classNames('user-menu', className)}
        onClickItem={this.handleClickMenuItem}
        onClose={() => this.handleChangeOpen(false)}
        onClick={() => this.handleChangeOpen(!open)}
        menuItems={menuItems}
        open={open}
      >
        <div
          className={classNames('user-menu_menu', {
            ['user-menu_menu_selected']: open,
          })}
        >
          <Avatar size="small" />
        </div>
      </Menu>
    ) : (
      <div className={classNames('user-menu', className)}>
        <Button
          className={classNames('user-menu_sign-in')}
          onClick={onClickSignIn}
          variant="outlined"
          color="white"
        >
          {formatMessage(messages.signIn)}
        </Button>
      </div>
    );
  }
}

export default UserMenu;
