import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../../../containers/Pages/Layout';
import Button from '../../../../common/Button';

import './styles.pcss';

class RegisterCompany extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('register-company', className)}>
        <div className="register-company_image">
          <Layout className="register-company_image_layout">
            <p className="register-company_image_layout_title">
              {'Register your company and grow your business'}
            </p>
            <div className="register-company_image_layout_action">
              <p className="register-company_image_layout_action_description">
                {
                  'Understand that growth for your business is and how o improve your succes rate. Show up in front of buyers at the right time with the right offering.'
                }
              </p>
              <Button
                className="register-company_image_layout_action_button"
                color="secondary"
              >
                {'Register your company now'}
              </Button>
            </div>
          </Layout>
        </div>
      </div>
    );
  }
}

export default RegisterCompany;
