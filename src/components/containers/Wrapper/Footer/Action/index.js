import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Action from '../../../../presentational/Wrapper/Footer/Action/index';

class ActionContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Action className={className} />;
  }
}

export default ActionContainer;
