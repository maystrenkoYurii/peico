import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Wrapper from '../../../../containers/Pages/Wrapper/index';
import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';

import { userActions } from '../../../../../flux-saga/bus/fetch/users/actions';

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...userActions,
      },
      dispatch,
    ),
  };
};

const mapStateToProps = () => {
  return {};
};

@compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)
class Home extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSignIn = () => {
    const { actions } = this.props;
    actions.setFetchSignInSuccess({
      token: 'DD',
      user: { id: 1 },
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <Wrapper>
        <Button color="primary" variant="contained" onClick={this.handleSignIn}>
          Войти
        </Button>
        <Button color="warning" variant="contained" onClick={this.handleSignIn}>
          Войти
        </Button>
        <Button
          color="secondary"
          variant="contained"
          disabled={true}
          onClick={this.handleSignIn}
        >
          Войти
        </Button>
        <Button
          color="primary"
          variant="outlined"
          disabled={true}
          onClick={this.handleSignIn}
        >
          Войти
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          onClick={this.handleSignIn}
        >
          Войти
        </Button>
        <Button color="success" variant="outlined" onClick={this.handleSignIn}>
          Войти
        </Button>
        <Button
          color="secondary"
          variant="contained"
          loading={loading}
          onClick={() => this.setState({ loading: true })}
        >
          <Icon color="inherit" name="download" type="left-icon" />
          {'Загрузка'}
        </Button>
        <Button
          color="primary"
          variant="outlined"
          loading={loading}
          onClick={() => this.setState({ loading: true })}
        >
          {'Загрузка'}
          <Icon color="inherit" name="download" type="right-icon" />
        </Button>
      </Wrapper>
    );
  }
}

export default Home;
