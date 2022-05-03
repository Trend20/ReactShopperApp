import React from 'react'

function Product(props: any) {
  return (
    <div className='product'>
      <img src={props.img} alt="img" />
      <p>{props.title}</p>
      <h3>${props.price}</h3>
      <p>{props.category}</p>
    </div>
  )
}

export default Product;