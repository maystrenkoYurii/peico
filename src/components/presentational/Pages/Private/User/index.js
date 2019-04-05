import React, { Component } from 'react';

import Wrapper from '../../../../containers/Pages/Wrapper/index';

import Avatar from '../../../../common/Avatar';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
    };
  }

  render() {
    return (
      <Wrapper>
        <button onClick={() => this.setState({ online: true })}>Online</button>
        <Avatar
          border
          online={this.state.online}
          //src="https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-9/53020272_1527023740764512_3723635658065969152_o.jpg?_nc_cat=109&_nc_ht=scontent.fiev12-1.fna&oh=675a15c7cef49c4da1c5bc497472a60b&oe=5D0B052E"
          onClick={() => console.log('dddd')}
          onChange={() => console.log('ffff')}
        />
      </Wrapper>
    );
  }
}

export default User;
