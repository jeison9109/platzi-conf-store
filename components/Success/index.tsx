import React, {useContext} from 'react';
import Layout from '../Layout';
import { SuccessMap, SuccessS } from './styles';
import { AppContext } from 'context/AppContext';
import useGoogleAddress from 'hooks/useGoogleAddress';
import Map from '../Map'


const Success = () => {
  const {state} = useContext(AppContext);
  const {buyer} = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
    <Layout>
      <SuccessS>
        <div>
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias</span>
        </div>
        <SuccessMap>
        <Map data={location}/>
        </SuccessMap>
      </SuccessS>
    </Layout>
  )
};

export default Success;
