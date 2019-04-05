import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';

import './styles.pcss';

class Action extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('toolbar-action', className)}>
        <Button className="toolbar-action_action">{'Log In'}</Button>
        <Button className="toolbar-action_action">{'Registration'}</Button>
        <Button className="toolbar-action_action" color="secondary">
          <Icon color="inherit" name="plus-circle-outline" type="left-icon" />
          {'Add company'}
        </Button>
        <Icon className="toolbar-action_menu" color="white" name="menu" />
      </div>
    );
  }
}

export default Action;
