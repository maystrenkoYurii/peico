import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class PrivacyPolicyContainer extends Component {
  render() {
    const component = import('../../../../../components/presentational/Pages/Public/PrivacyPolicy');

    return <Loadable dynamicImport={component} />;
  }
}

export default PrivacyPolicyContainer;
