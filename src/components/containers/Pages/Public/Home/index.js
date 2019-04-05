import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class HomeContainer extends Component {
  render() {
    const component = import('../../../../../components/presentational/Pages/Public/Home');

    return <Loadable dynamicImport={component} />;
  }
}

export default HomeContainer;
