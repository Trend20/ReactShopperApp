import React from 'react'

function Product(props: any) {
  return (
    <div className='product'>
      <div className="card">
        <img src={props.img} alt="img" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <h1 className='card-title'>${props.price}</h1>
          <p className='card-text'>{props.category}</p>
        </div>
      </div>
    </div>
  )
}

export default Product;