import React, { Component } from 'react';

import Layout from '../../../containers/Pages/Wrapper/Layout';
import Spinner from '../../../common/Spinner';

import './styles.pcss';

class Loading extends Component {
  render() {
    return (
      <Layout className="loadable-loading" withMinHeight>
        <Spinner variant="grow" />
      </Layout>
    );
  }
}

export default Loading;
