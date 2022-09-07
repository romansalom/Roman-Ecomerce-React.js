import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
import { products } from '../../data/products';
import ItemList from '../../components/itemList';

const Itemlistcontainers = ({greeting}) => {
    const [productos, setProductos] = useState([])

    useEffect (()=>{

       const obtenerProductos = new Promise ((accept, reject) => {
          setTimeout(()=>{
            accept(products)
          }, 2000);
        })
        
     
      obtenerProductos.then((result)=> {
        console.log(result)
        setProductos(result)})
        .catch((error) => {console.log(error)})
        
    
        


    }, [])


 
  console.log(productos)
  
  return (
    <div className='item-list-container'>
      <ItemList products={productos}/>
      <h1>{greeting}</h1>
      
    </div>
  )
}

export default Itemlistcontainers;
