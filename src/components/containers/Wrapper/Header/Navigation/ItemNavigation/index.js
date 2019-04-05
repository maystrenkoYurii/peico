import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemNavigation from '../../../../../presentational/Wrapper/Header/Navigation/ItemNavigation/index';

class ItemNavigationContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
  };

  render() {
    const { className, children } = this.props;

    return <ItemNavigation className={className}>{children}</ItemNavigation>;
  }
}

export default ItemNavigationContainer;
