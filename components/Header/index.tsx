import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Checkout, HeaderS } from './styles';

const Header = () => {
  return(
    <HeaderS>
      <Link href='/'>
        <h1>PlatziConf Merch</h1>
      
      </Link>
      <Checkout>
        <Link href='/checkout'>
        <i className="fas fa-shopping-basket" />
        </Link>
      </Checkout>
    </HeaderS>
    
  )
};

export default Header;
