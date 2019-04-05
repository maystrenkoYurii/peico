import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../../containers/Pages/Wrapper/Layout';
import Logo from '../../../containers/Wrapper/Toolbar/Logo';
import Action from '../../../containers/Wrapper/Toolbar/Action';

import './styles.pcss';

class Toolbar extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('toolbar', className)}>
        <Layout className="toolbar_layout">
          <Logo />
          <Action />
        </Layout>
      </div>
    );
  }
}

export default Toolbar;
