import React, { useState } from 'react';

const Product = (props) => {
  

    const handleChange = (e) =>{
    props.qtyChange(e.target.value)
  };
  const nameChange =(e)=>{
    props.nmeChange(e.target.value)
  }
  return (
    <div className="product">
      <h3>Product Quantity</h3>
      <select value={props.name} onChange={nameChange}>
        <option value="Shirt">Shirt</option>
        <option value="pants">Pants</option>
      </select>

      <input className="qty" type="number" value={props.quantity} placeholder="Qty" onChange={handleChange}/>
    </div>
  )
}

export default Product