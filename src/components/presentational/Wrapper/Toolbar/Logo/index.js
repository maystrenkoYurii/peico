import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import compose from 'recompose/compose';

import SvgLogoLarge from '../../../../common/Svg/Logo/Large';
import SvgLogoSmall from '../../../../common/Svg/Logo/Small';

import { withPageHelper } from '../../../../hok/withPageHelper';

import './styles.pcss';

@compose(withPageHelper)
class Logo extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClickUser: PropTypes.func,
  };

  render() {
    const { className, onClickUser } = this.props;

    return (
      <div className={classNames('toolbar-logo', className)}>
        <div
          className="toolbar-logo_content"
          role="button"
          onClick={() => onClickUser()}
        >
          <SvgLogoLarge className="toolbar-logo_content_large" />
          <SvgLogoSmall className="toolbar-logo_content_small" />
        </div>
      </div>
    );
  }
}

export default Logo;
