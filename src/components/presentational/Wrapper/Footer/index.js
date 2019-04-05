import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../../containers/Pages/Wrapper/Layout';
import About from '../../../containers/Wrapper/Footer/About';
import Action from '../../../containers/Wrapper/Footer/Action';

import './styles.pcss';

class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('footer', className)}>
        <Layout>
          <About className="footer_about" />
          <Action className="footer_action" />
        </Layout>
      </div>
    );
  }
}

export default Footer;
