import React from 'react';
import { Button, ProductImage, ProductItem, ProductItemInfo, ProductItems } from './styles';
import { UseAppContext } from '../../context/AppContext';

const Products = () =>{
    const {state, addToCart} = UseAppContext()
    const {products} = state

    return (
        <div>
        <ProductItems>
            {products.map((product)=>(
                <Product key={product.id} product={product}/>

            ))}
        </ProductItems>
        
        </div>
    )
}

export default Products;

const Product = ({product}) =>(
<ProductItem>
        <ProductImage
          src={product.image}
          alt={product.title}
          width={200}
          height={240}
        />
        <ProductItemInfo>
            <h2>{product.title}
            <span>${product.price}</span>
            </h2>
            <p>{product.description}</p>
           <Button>Agregar al carrito</Button>
            
        </ProductItemInfo>
    </ProductItem>
)
    
