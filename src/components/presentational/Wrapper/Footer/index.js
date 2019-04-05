import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RegisterCompany from '../../../containers/Wrapper/Footer/RegisterCompany';
import Layout from '../../../containers/Pages/Layout';

import logo from '../../../../assets/images/logo-dark.png';

import './styles.pcss';

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('footer', className)}>
        <RegisterCompany />
        <Layout className="footer_layout">
          <img src={logo} className="footer_layout_logo" />
        </Layout>
      </div>
    );
  }
}

export default Footer;
