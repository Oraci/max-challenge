import React from 'react';
import logo from 'assets/logo.png';

import { Container, Logo, Content, Img, MyList } from './styles';

function Header() {
  return (
    <Container>
      <Logo to="/">
        <Img src={logo} />
      </Logo>
      <Content>
        <MyList to="/">View my list</MyList>
      </Content>
    </Container>
  );
}

export default Header;
