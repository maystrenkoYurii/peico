import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class MobileAppsContainer extends Component {
  render() {
    const component = import('../../../../../components/presentational/Pages/Public/MobileApps');

    return <Loadable dynamicImport={component} />;
  }
}

export default MobileAppsContainer;
