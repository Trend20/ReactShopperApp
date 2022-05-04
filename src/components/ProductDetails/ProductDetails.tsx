import axios from 'axios';
import React, { useState, useEffect } from 'react'

function ProductDetails(props: any) {
  const {title, price, category, description, img} = props;
  const [product, setProduct] = useState([]);

  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products')
  },[]);
  return (
    <div className='product-details'>
      <div className="section-img">
        <img src={img} alt="img" />
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{price}</p>
        <div>{category}</div>
        <p>{description}</p>
        <button>Add to Cart</button>
      </div>

    </div>
  )
}

export default ProductDetails;