import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class MessageContainer extends Component {
  render() {
    const component = import('../../../../presentational/Pages/Private/Message');

    return <Loadable dynamicImport={component} />;
  }
}

export default MessageContainer;
