import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ProductDetails from '../ProductDetails/ProductDetails';

function Product(props: any) {
  const { title, img, price, category, id} = props;

  const [products, setProducts] = useState([]);


  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products')
          .then(res =>{
            setProducts(res.data);
          })
  },[]);

  return (
    <div className='product' key={id}>
      <div className="card" style={{ width: '100%' }}>
        <img className='card-img-top' src={img} alt="img" />
        <hr />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <h1 className='card-title'>${price}</h1>
          <p className='card-text'>{category}</p>
          <button className='btn btn-danger'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Product;