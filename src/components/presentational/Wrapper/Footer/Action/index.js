import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import Link from '../../../../common/Link';

import { getVersionApp } from '../../../../../core/functions/common';
import { withPageHelper } from '../../../../hok/withPageHelper';

import { constants } from '../../../../../core/constants/index';

import './styles.pcss';

const messages = defineMessages({
  version: {
    id: 'app.page.footer.other.version',
    defaultMessage: 'Версія: {version}',
  },
});

@compose(
  curryRight(injectIntl),
  withPageHelper,
)
class Action extends Component {
  static propTypes = {
    className: PropTypes.string,
    getPageTitle: PropTypes.func,
    onClickTermOfUse: PropTypes.func,
    onClickPrivacyPolicy: PropTypes.func,
    onClickAbout: PropTypes.func,
  };

  render() {
    const {
      className,
      getPageTitle,
      onClickTermOfUse,
      onClickPrivacyPolicy,
      onClickAbout,
    } = this.props;

    return (
      <div className={classNames('footer-action', className)}>
        <div className="footer-action_element">
          <FormattedMessage
            id={messages.version.id}
            defaultMessage={messages.version.defaultMessage}
            values={{
              version: getVersionApp(),
            }}
          />
        </div>
        <div className="footer-action_element">
          <Link onClick={onClickTermOfUse}>
            {getPageTitle(constants.PATCH_URL_TERM_OF_USE)}
          </Link>
        </div>
        <div className="footer-action_element">
          <Link onClick={onClickPrivacyPolicy}>
            {getPageTitle(constants.PATCH_URL_PRIVACY_POLICY)}
          </Link>
        </div>
        <div className="footer-action_element">
          <Link onClick={onClickAbout}>
            {getPageTitle(constants.PATCH_URL_ABOUT)}
          </Link>
        </div>
      </div>
    );
  }
}

export default Action;
