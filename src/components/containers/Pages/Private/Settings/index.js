import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class SettingsContainer extends Component {
  render() {
    const component = import('../../../../presentational/Pages/Private/Settings');

    return <Loadable dynamicImport={component} />;
  }
}

export default SettingsContainer;
