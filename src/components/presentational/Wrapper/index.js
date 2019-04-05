import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import AppHelmet from '../../containers/Helmet';
import Language from '../../containers/Wrapper/Language';
import Toolbar from '../../containers/Wrapper/Toolbar';
import Footer from '../../containers/Wrapper/Footer';

import './styles.pcss';

class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <AppHelmet />
        <Language />
        <div className="app-wrapper">
          <Toolbar className="app-wrapper_toolbar" />
          <main className="app-wrapper_main">
            <div className="app-wrapper_toolbar" />
            {children}
          </main>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Wrapper;
