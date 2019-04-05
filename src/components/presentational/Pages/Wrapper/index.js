import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

import Layout from '../../../containers/Pages/Wrapper/Layout';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    return (
      <div className={classNames('page-wrapper', className)}>
        <Layout minHeight>{children}</Layout>
      </div>
    );
  }
}

export default Wrapper;
