import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Product from '../Product/Product'

function ProductList() {

  const [products, setProducts] = useState<any>([]);

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products')
         .then(res => {
           const products = res.data;
           setProducts(products)
         })
  }, []);
  return (
    <div className='product-list'>
      {
        products.map((item: any, index: number) =>{
          return (
            <Product key={index} 
              img={item.image} 
              title={item.title}
              price={item.price}
              category={item.category}
            />
          )
        })
      }
    </div>
  )
}

export default ProductList