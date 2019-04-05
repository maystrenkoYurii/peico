import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

class ClickAwayListener extends Component {
  static propTypes = {
    mouseEvent: PropTypes.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),
    touchEvent: PropTypes.oneOf(['onTouchStart', 'onTouchEnd', false]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]).isRequired,
    onClickAway: PropTypes.func.isRequired,
  };

  static defaultProps = {
    mouseEvent: 'onMouseUp',
    touchEvent: 'onTouchEnd',
  };

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }

  ownerDocument = node => {
    return (node && node.ownerDocument) || document;
  };

  handleClickAway = event => {
    const { onClickAway } = this.props;

    if (event.defaultPrevented) {
      return;
    }

    if (!this.node) {
      return;
    }

    const doc = this.ownerDocument(this.node);

    if (
      doc.documentElement &&
      doc.documentElement.contains(event.target) &&
      !this.node.contains(event.target)
    ) {
      onClickAway(event);
    }
  };

  render() {
    const { children, mouseEvent, touchEvent, ...other } = this.props;
    const listenerProps = {};
    if (mouseEvent !== false) {
      listenerProps[mouseEvent] = this.handleClickAway;
    }
    if (touchEvent !== false) {
      listenerProps[touchEvent] = this.handleClickAway;
    }

    return (
      <React.Fragment>
        {children}
        <EventListener target="document" {...listenerProps} {...other} />
      </React.Fragment>
    );
  }
}

export default ClickAwayListener;
