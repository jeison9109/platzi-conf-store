import { UseAppContext } from 'context/AppContext';
import Link from 'next/link';
import React, { useRef } from 'react';
import Layout from '../Layout';
import {
  InformationButtons,
  InformationS,
  Input,
  InformationSidebar,
  InformationItem,
  InformationElement,
} from './styles';

const Information = () => {
  const form = useRef(null);
  const {state, addToBuyer} = UseAppContext();
  const {cart} = state;

  const handleSubmit =()=>{
    const formData = new FormData(form.current)
    const buyer= {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      address2: formData.get('address2'),
      city: formData.get('city'),
      country: formData.get('country'),
      zipcode: formData.get('zipcode'),
      phone: formData.get('phone'),
    };
    addToBuyer(buyer)
  }
  return (
    <Layout>
      <InformationS>
        <div>
          <div>
            <h2>Informacion de contacto</h2>
          </div>
          <div>
            <form ref={form}>
              <Input type="text" placeholder="Nombre completo" name="name" />
              <Input
                type="email"
                placeholder="Correo electrónico"
                name="email"
              />
              <Input type="text" placeholder="Dirección" name="address" />
              <Input type="text" placeholder="Apto" name="address2" />
              <Input type="text" placeholder="Ciudad" name="city" />
              <Input type="text" placeholder="País" name="country" />
              <Input type="text" placeholder="Código Postal" name="zipcode" />
              <Input type="text" placeholder="Teléfono" name="phone" />
            </form>
          </div>
          <InformationButtons>
            <Link href="/checkout">
              <div>Regresar</div>
            </Link>
            <Link href="/checkout/payment">
              <button type='button' onClick={handleSubmit}>Pagar</button>
            </Link>
          </InformationButtons>
        </div>
        <InformationSidebar>
          <h2>Pedido</h2>
          {cart.map((item) => (
            <div>
              <InformationItem key={`information ${item.title}`}>
                <InformationElement>
                  <h4>{item.name}</h4>
                  <span>${item.price}</span>
                </InformationElement>
              </InformationItem>
            </div>
          ))}
        </InformationSidebar>
      </InformationS>
    </Layout>
  );
};

export default Information;
