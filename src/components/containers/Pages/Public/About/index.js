import React, { Component } from 'react';

import Loadable from '../../../../containers/Loadable';

class AboutContainer extends Component {
  render() {
    const component = import('../../../../../components/presentational/Pages/Public/About');

    return <Loadable dynamicImport={component} />;
  }
}

export default AboutContainer;
