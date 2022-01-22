import React from 'react';
import Layout from '../components/Layout';
import Products from '../components/Products';
import initialState from './initialState';

function Home() {
  return (
    <>
        <title>PlatziConf Store - Productos</title>
        <Layout>
          <Products products={initialState.products}/>
      </Layout>

    </>
  )
}

export default Home;
