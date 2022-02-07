import { UseAppContext } from 'context/AppContext';
import { useRouter } from 'next/router';
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import Layout from '../Layout';
import { PaymentItem, PaymentS, PaymentElement } from './styles';


const Payment = () => {
  const router = useRouter();
  const { state, addNewOrder } = UseAppContext();
  const { cart, buyer } = state;

  const options = {
    clientId:
      'ARU3O4EGDglvZWZDdtHTUxfT22qGSyHZ0afmkazYWT3AKT6ycudbxJTs4dGMk4mMlqSqdu1hO_yoFT_N',
    intent: 'capture',
    currency: 'USD',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder)
      router.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <Layout>
      <h3>Resumen del pedido</h3>
      <PaymentS>
        {cart.map((item) => (
          <PaymentItem key={`payment ${item.title}`}>
            <PaymentElement>
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </PaymentElement>
          </PaymentItem>
        ))}
      </PaymentS>
      <div>
        <PayPalButton
          options={options}
          amount={handleSumTotal()}
          // onPaymentStart={() => console.log("Start Payment")}
          onSuccess={(data) => handlePaymentSuccess(data)}
          onError={(error) => console.log(error)}
          // onCancel={(data) => console.log(data)}
        />
      </div>
    </Layout>
  );
};

export default Payment;
