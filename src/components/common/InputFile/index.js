import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.pcss';

class InputFile extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.func,
    accept: PropTypes.string,
    inputRef: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    inputRef: () => null,
    onClick: () => null,
  };

  handleChange = event => {
    const { onChange } = this.props;
    onChange(event);
    event.preventDefault();
  };

  handleUpload = event => {
    if (this.inputFile) {
      this.inputFile.click();
      event.stopPropagation();
    }
  };

  render() {
    const {
      className,
      children,
      accept,
      inputRef,
      onClick,
      ...other
    } = this.props;

    return (
      <Fragment>
        <input
          className={classNames('input-file', className)}
          type="file"
          ref={input => {
            this.inputFile = input;
            inputRef(input);
          }}
          accept={accept}
          onChange={this.handleChange}
          onClick={event => {
            event.stopPropagation();
            onClick();
          }}
          {...other}
        />
        {children && children({ onClickUpload: this.handleUpload })}
      </Fragment>
    );
  }
}

export default InputFile;
