import Link from 'next/link';
import React from 'react';
import Layout from '../Layout';
import {
  CheckoutElement,
  CheckoutItem,
  CheckoutS,
  CheckoutSidebar,
} from './styles';
import { UseAppContext } from '../../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = UseAppContext();
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <>
      <Layout>
        <CheckoutS>
          <div>
            {cart.length > 0 ? (
              <h3>Lista de productos</h3>
            ) : (
              <h3>Sin pedidos</h3>
            )}
            {cart.map((item) => (
              <CheckoutItem>
                <CheckoutElement>
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </CheckoutElement>
                <button type="button" onClick={() => handleRemove(item)}>
                  {' '}
                  <i className="fas fa-trash-alt" />
                </button>
              </CheckoutItem>
            ))}
          </div>
          {cart.length > 0 && (
            <CheckoutSidebar>
              <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
              <Link href="/checkout/information">
                <button type="button">Continuar pedido</button>
              </Link>
            </CheckoutSidebar>
          )}
        </CheckoutS>
      </Layout>
    </>
  );
};

export default Checkout;
