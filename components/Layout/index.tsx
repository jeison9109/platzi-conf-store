import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from './styles';

const Layout = ({ children }) => (
  <Main>
    <Header />
    {children}
    <Footer />
  </Main>
);

export default Layout;