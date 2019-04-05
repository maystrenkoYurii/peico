import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class NotificationContainer extends Component {
  render() {
    const component = import('../../../../presentational/Pages/Private/Message');

    return <Loadable dynamicImport={component} />;
  }
}

export default NotificationContainer;
