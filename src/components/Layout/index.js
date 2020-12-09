import React from 'react';

import Footer from '../Footer';

import { WrapperPage, Container, Content } from './styles';

function Layout({ children }) {
  return (
    <WrapperPage>
      <Container>
        <Content>{children}</Content>
        <Footer />
      </Container>
    </WrapperPage>
  );
}

export default Layout;
