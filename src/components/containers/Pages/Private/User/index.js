import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class UserContainer extends Component {
  render() {
    const component = import('../../../../presentational/Pages/Private/User');

    return <Loadable dynamicImport={component} />;
  }
}

export default UserContainer;
