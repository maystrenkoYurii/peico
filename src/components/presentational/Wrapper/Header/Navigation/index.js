import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Layout from '../../../../containers/Pages/Layout';
import ItemNavigation from '../../../../containers/Wrapper/Header/Navigation/ItemNavigation';

import './styles.pcss';

class Navigation extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    const navigation = [
      { key: 'suppliers', value: 'Suppliers' },
      { key: 'intelligence', value: 'Intelligence' },
      { key: 'news', value: ' News' },
      { key: 'expert-articles', value: ' Expert articles' },
      { key: 'indices', value: ' Indices' },
    ];

    return (
      <div className={classNames('header-navigation', className)}>
        <Layout>
          <div className="header-navigation_content">
            {navigation.map(item => {
              return (
                <ItemNavigation key={item.key}>{item.value}</ItemNavigation>
              );
            })}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Navigation;
