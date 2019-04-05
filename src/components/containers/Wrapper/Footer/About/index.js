import React, { Component } from 'react';
import PropTypes from 'prop-types';

import About from '../../../../presentational/Wrapper/Footer/About/index';

class AboutContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <About className={className} />;
  }
}

export default AboutContainer;
