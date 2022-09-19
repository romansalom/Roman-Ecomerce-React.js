
import React from 'react'
import { useState } from 'react';
import ItemCount from '../ItemCount'
import "./styles.css";
import { useNavigate } from 'react-router-dom';


const ItemDetail = ({product}) => {
const [qty, setQty] = useState(0);
const navigate = useNavigate();

  const addCart = (quantity) => {
    setQty(quantity)};

    const handleFinish = () => {
      navigate('/cart');

    }
  console.log(qty);

  
  return (
    <div className= "detail-container">
        <img className="detail-img"src={product.image}  width={250} alt="product-detail"/>
        <div className="detail-subcontainer">
          <h1>{product.title}</h1>
          {!qty? <ItemCount
          stock={100}
          initial={1}
          onAdd={addCart}/> : <button onClick={handleFinish}> finalizar compra</button>}
        </div>
    </div>
  )

}

export default ItemDetail