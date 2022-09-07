import React from 'react'
import Item from '../Item'

const itemList = ({products}) => {
  return (
    <div>
        {products.map(product => {
            return <Item key={product.id} product={product}></Item>
        })}

        
    </div>
  )
}

export default itemList