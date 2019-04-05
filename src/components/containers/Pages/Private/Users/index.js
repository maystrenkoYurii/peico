import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class UsersContainer extends Component {
  render() {
    const component = import('../../../../presentational/Pages/Private/Users');

    return <Loadable dynamicImport={component} />;
  }
}

export default UsersContainer;
