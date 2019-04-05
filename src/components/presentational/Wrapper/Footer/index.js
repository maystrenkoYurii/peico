import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RegisterCompany from '../../../containers/Wrapper/Footer/RegisterCompany';

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
        {'footer'}
      </div>
    );
  }
}

export default Footer;
