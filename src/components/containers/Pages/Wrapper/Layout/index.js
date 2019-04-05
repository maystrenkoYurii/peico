import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../../../presentational/Pages/Wrapper/Layout';

class LayoutContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    fullWidth: PropTypes.bool,
    minHeight: PropTypes.bool,
  };

  render() {
    const { className, children, fullWidth, minHeight } = this.props;

    return (
      <Layout className={className} fullWidth={fullWidth} minHeight={minHeight}>
        {children}
      </Layout>
    );
  }
}

export default LayoutContainer;
