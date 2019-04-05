import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class TermOfUseContainer extends Component {
  render() {
    const component = import('../../../../../components/presentational/Pages/Public/TermOfUse');

    return <Loadable dynamicImport={component} />;
  }
}

export default TermOfUseContainer;
