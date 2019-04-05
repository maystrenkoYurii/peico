import React, { Component } from 'react';

import Layout from '../../../../containers/Pages/Layout/index';
import Button from '../../../../common/Button';
import Icon from '../../../../common/Icon';

class Home extends Component {
  render() {
    return (
      <Layout>
        <Button color="primary" variant="contained">
          Войти
        </Button>
        <Button color="secondary" variant="contained">
          Войти
        </Button>
        <Button color="primary" variant="outlined">
          Войти
        </Button>
        <Button color="secondary" variant="outlined">
          Войти
          <Icon color="inherit" name="download" type="right-icon" />
        </Button>
      </Layout>
    );
  }
}

export default Home;
