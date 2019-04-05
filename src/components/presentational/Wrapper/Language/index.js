import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../../../common/Modal';

import './styles.pcss';

class Language extends Component {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { open, onClose } = this.props;

    return (
      <Modal className="modal-language" open={open} onClose={onClose}>
        {'Language'}
      </Modal>
    );
  }
}

export default Language;
