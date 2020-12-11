import React from 'react';
import logo from 'assets/logo.png';

import MyLinkList from 'components/MyLinkList';

import { Container, Logo, Content, Img } from './styles';

function Header() {
  return (
    <Container>
      <Logo to="/">
        <Img src={logo} />
      </Logo>
      <Content>
        <MyLinkList />
      </Content>
    </Container>
  );
}

export default Header;
