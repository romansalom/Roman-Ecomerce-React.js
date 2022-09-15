import React from 'react'
import ItemCount from '../ItemCount'
import './styles.css';


const ItemDetail = ({product}) => {
  return (
    <div className='detail-container'>
        <img className="detail-img"src={product.image}  width={250} alt="product-detail"/>
        <div className='detail-subcontainer'>
          <h1>{product.title}</h1>
          <ItemCount
          stock={100}
          initial={1}
          onAdd={(count) => alert(count)}

          />
        </div>
    </div>
  )

}

export default ItemDetail