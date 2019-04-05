import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import {
  intlShape,
  defineMessages,
  injectIntl,
  FormattedMessage,
} from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import Menu from '../../../../../common/Menu';
import IconButton from '../../../../../common/IconButton';
import Icon from '../../../../../common/Icon';

import { withPageHelper } from '../../../../../hok/withPageHelper';

import { constants } from '../../../../../../core/constants/index';

import './styles.pcss';

const messages = defineMessages({
  language: {
    id: 'app.menu.item.language',
    defaultMessage: 'Змінити мову',
  },
  copyright: {
    id: 'app.menu.item.copyright',
    defaultMessage: '{app} - {year}',
  },
});

@compose(
  curryRight(injectIntl),
  withPageHelper,
)
class AppMenu extends Component {
  static propTypes = {
    intl: intlShape,
    className: PropTypes.string,
    getPageTitle: PropTypes.func,
    onClickAbout: PropTypes.func,
    onClickMobileApps: PropTypes.func,
    onOpenAppLanguage: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickMenuItem = key => {
    const { onClickAbout, onClickMobileApps, onOpenAppLanguage } = this.props;

    switch (key) {
      case 'language':
        return onOpenAppLanguage();
      case 'mobileApps':
        return onClickMobileApps();
      case 'about':
        return onClickAbout();
      default:
        return () => null;
    }
  };

  handleChangeOpen = open => {
    this.setState({ open: open });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { className, getPageTitle } = this.props;
    const { open } = this.state;

    const copyright = (
      <FormattedMessage
        id={messages.copyright.id}
        defaultMessage={messages.copyright.defaultMessage}
        values={{
          app: constants.APP_NAME,
          year: new Date().getFullYear(),
        }}
      />
    );

    const menuItems = [
      {
        key: 'language',
        value: formatMessage(messages.language),
        icon: 'translate',
      },
      {
        key: 'mobileApps',
        value: getPageTitle(constants.PATCH_URL_MOBILE_APPS),
        icon: 'cellphone-android',
      },
      {
        key: 'about',
        value: getPageTitle(constants.PATCH_URL_ABOUT),
        icon: 'information-outline',
      },
      { key: 'copyright', value: copyright, disabled: true, icon: 'copyright' },
    ];

    return (
      <Menu
        className={classNames('app-menu', className)}
        onClickItem={this.handleClickMenuItem}
        onClose={() => this.handleChangeOpen(false)}
        onClick={() => this.handleChangeOpen(!open)}
        menuItems={menuItems}
        open={open}
      >
        <div
          className={classNames('app-menu_menu', {
            ['app-menu_menu_selected']: open,
          })}
        >
          <IconButton>
            <Icon color="white" name="dots-vertical" />
          </IconButton>
        </div>
      </Menu>
    );
  }
}

export default AppMenu;
