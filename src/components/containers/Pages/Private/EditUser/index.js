import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class EditUserContainer extends Component {
  render() {
    const component = import('../../../../presentational/Pages/Private/EditUser');

    return <Loadable dynamicImport={component} />;
  }
}

export default EditUserContainer;
