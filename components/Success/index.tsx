import React from 'react';
import Layout from '../Layout';
import { SuccessMap, SuccessS } from './styles';

const Success = () => {
  return (
    <Layout>
      <SuccessS>
        <div>
          <h2>Gracias por tu compra</h2>
          <span>Tu pedido llegara en 3 dias</span>
        </div>
        <SuccessMap>Google Maps</SuccessMap>
      </SuccessS>
    </Layout>
  )
};

export default Success;
