import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import { curryRight } from 'lodash';
import classNames from 'classnames';

import './styles.pcss';

import SvgLogoLarge from '../../../../common/Svg/Logo/Large';

import { constants } from '../../../../../core/constants/index';

const messages = defineMessages({
  about: {
    id: 'app.page.footer.about.description',
    defaultMessage:
      '{app} - це online сервіс автоматизації навчального процесу в закладах різних рівнів. Завдяки йому ви зможете слідкувати в режимі реального часу за успішністю навчання учасника навчального процесу, тримати постійний контакт з усима його учасиками та вчасно бути повідомленим про домашні завдання. Стане незамінним помічником як батькам так і учням. Ідеально підходить дітям шкільного віку та студентам.',
  },
});

@compose(curryRight(injectIntl))
class About extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    const app = <b className="footer-about_text_app">{constants.APP_NAME}</b>;

    return (
      <div className={classNames('footer-about', className)}>
        <SvgLogoLarge className="footer-about_logo" />
        <div className="footer-about_text">
          <FormattedMessage
            id={messages.about.id}
            defaultMessage={messages.about.defaultMessage}
            values={{
              app: app,
            }}
          />
        </div>
      </div>
    );
  }
}

export default About;
