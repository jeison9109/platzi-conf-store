import Link from 'next/link';
import React, { useRef } from 'react'
import Layout from '../Layout'
import { InformationButtons, InformationS, Input, InformationSidebar } from './styles';

const Information = () => {
  const form = useRef(null);
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
          <Input type="email" placeholder="Correo electrónico" name="email" />
          <Input type="text" placeholder="Dirección" name="address" />
          <Input type="text" placeholder="Apto" name="address2" />
          <Input type="text" placeholder="Ciudad" name="city" />
          <Input type="text" placeholder="País" name="country" />
          <Input type="text" placeholder="Código Postal" name="zipcode" />
          <Input type="text" placeholder="Teléfono" name="phone" />
        </form>  
        </div>
        <InformationButtons>
          <Link href='/checkout'>
            <div>Regresar</div>
          </Link>
          <Link href='/checkout/payment'><button>Pagar</button></Link>
        </InformationButtons>
        </div>
        <InformationSidebar>
          <div><h4>Name</h4>
          <span>Precio</span></div>

        </InformationSidebar>
        
      </InformationS>
    </Layout>
  )
}

export default Information
