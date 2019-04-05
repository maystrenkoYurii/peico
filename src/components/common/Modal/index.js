import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class Modal extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    onClose: PropTypes.func,
    open: PropTypes.bool,
  };

  static defaultProps = {
    onClose: () => null,
    open: false,
  };

  handleClickDialog = event => {
    event.stopPropagation();
  };

  render() {
    const { className, children, open, onClose } = this.props;

    return (
      <div
        className={classNames('modal', { ['modal_open']: open }, className)}
        tabIndex="-1"
        role="dialog"
        onClick={onClose}
      >
        <div
          className="modal_dialog"
          role="document"
          onClick={this.handleClickDialog}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
