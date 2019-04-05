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
          <div className="footer_layout_content">
            <div className="footer_layout_content_block">
              <p className="footer_layout_content_block_title">{'Resources'}</p>
              <p className="footer_layout_content_block_item">
                {
                  'Daleel is a portal that provides unique business intelligence to make the best decisions and allows exchange of knowledge that our industry needs to best meet its requirements.'
                }
              </p>
            </div>
            <div className="footer_layout_content_block">
              <p className="footer_layout_content_block_title">{'Resources'}</p>
              <div className="footer_layout_content_block_source">
                <a>{''}</a>
              </div>
            </div>
            <div className="footer_layout_content_block">
              <p className="footer_layout_content_block_title">
                {'Newsletter'}
              </p>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Footer;
