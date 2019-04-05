import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Navigation from '../../../containers/Wrapper/Header/Navigation';
import Layout from '../../../containers/Pages/Layout';

import './styles.pcss';

class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('header', className)}>
        <div className="header_image">
          <Layout className="header_image_layout">
            <div className="header_image_layout_about">
              <div className="header_image_layout_about_content">
                <p className="header_image_layout_about_content_title">
                  {'OPERATIONAL EXCELLENCE'}
                </p>
                <p className="header_image_layout_about_content_description">
                  {
                    'Daleel is a portal that provides unique business intelligence to make the best decisions and allows exchange of knowledge that our industry needs to best meet its requirements.'
                  }
                </p>
              </div>
            </div>
          </Layout>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Header;
