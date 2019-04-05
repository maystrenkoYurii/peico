import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RegisterCompany from '../../../../presentational/Wrapper/Footer/RegisterCompany/index';

class RegisterCompanyContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <RegisterCompany className={className} />;
  }
}

export default RegisterCompanyContainer;
