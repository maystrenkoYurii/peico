import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppMenu from '../../../../containers/Wrapper/Toolbar/Action/AppMenu';
import UserMenu from '../../../../containers/Wrapper/Toolbar/Action/UserMenu';

import './styles.pcss';

class Action extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('toolbar-action', className)}>
        <div className="toolbar-action_left-panel">{'Navigation menu'}</div>
        <div className="toolbar-action_right-panel">
          <UserMenu />
          <AppMenu />
        </div>
      </div>
    );
  }
}

export default Action;
