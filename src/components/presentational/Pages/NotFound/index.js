import React, { Component } from 'react';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';

import Layout from '../../../containers/Pages/Wrapper/Layout';

import './styles.pcss';

const messages = defineMessages({
  notFound: {
    id: 'app.page.notFound',
    defaultMessage: 'Сторінку не знайдено',
  },
});

@compose(curryRight(injectIntl))
class NotFound extends Component {
  static propTypes = {
    intl: intlShape,
  };

  render() {
    const { formatMessage } = this.props.intl;

    return (
      <Layout className="loadable-not-found" withMinHeight>
        <p className="loadable-not-found_404">{'404'}</p>
        <p className="loadable-not-found_text">
          {formatMessage(messages.notFound)}
        </p>
      </Layout>
    );
  }
}

export default NotFound;
