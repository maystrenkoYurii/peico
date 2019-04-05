import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EventListener from 'react-event-listener';

import Logo from '../../../containers/Wrapper/Toolbar/Logo';
import Action from '../../../containers/Wrapper/Toolbar/Action';
import Layout from '../../../containers/Pages/Layout';

import './styles.pcss';

class Toolbar extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      toolbarHovered: false,
      toolbarHidden: false,
    };
  }

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll = () => {
    const { toolbarHovered, toolbarHidden } = this.state;
    const y = window.scrollY;
    if (y > 50 && !toolbarHovered && y <= 550) {
      this.setState({ toolbarHovered: true });
    } else if (y < 50 && toolbarHovered) {
      this.setState({ toolbarHovered: false });
    }

    if (y > 550 && !toolbarHidden) {
      this.setState({ toolbarHidden: true });
    } else if (y < 550 && toolbarHidden) {
      this.setState({ toolbarHidden: false });
    }
  };

  render() {
    const { className } = this.props;
    const { toolbarHovered, toolbarHidden } = this.state;

    return (
      <div
        className={classNames(
          'toolbar',
          { ['toolbar_hovered']: toolbarHovered },
          { ['toolbar_hidden']: toolbarHidden },
          className,
        )}
      >
        <EventListener target="window" onScroll={this.handleScroll} />
        <Layout className="toolbar_layout">
          <Logo />
          <Action />
        </Layout>
      </div>
    );
  }
}

export default Toolbar;
