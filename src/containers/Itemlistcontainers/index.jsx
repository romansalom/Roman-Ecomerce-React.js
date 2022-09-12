import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';
import { products } from '../../data/products';
import itemList from '../../components/itemList';
import { FaDraft2Digital } from 'react-icons/fa';

const Itemlistcontainers = ({greeting}) =>{
    const [productos, setProductos] = useState([])

    useEffect(()=>{
      (async ()=> { 
     const obtenerProductos = new Promise ((accept, reject) => {
          setTimeout(()=>{
            accept(products)
          }, 2000);
        })
        
     
      obtenerProductos.then((result)=> {
        console.log(result)
        setProductos(result)})
        .catch((error) => {console.log(error)})
        

        try{
          const response = await fetch("https://fakestoreapi.com/products");
          const productos = await response.json();
          setProductos(productos);

        }catch(error){
          console.log(error);
        }

    } )()
  },        

  [])


 
  console.log(productos)
  
  return (
    <div className='item-list-container'>
      <itemList products={productos}/>

      
    </div>
  )

  }
export default Itemlistcontainers ;
