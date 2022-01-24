import React from 'react';
import Layout from '../Layout';
import { PaymentItem, PaymentS, PaymentElement } from './styles';

const Payment = () => {
  return (
    <Layout>
      <h3>Resumen del pedido</h3>
      <PaymentS>
        <PaymentItem>
          <PaymentElement>
            <h4>Titulo</h4>
            <span>Precio</span>
          </PaymentElement>
        </PaymentItem>
      </PaymentS>
    </Layout>
  )
};

export default Payment;
