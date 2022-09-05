import React from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';
const Itemlistcontainers = ({greeting}) => {
  const agregarAlCarrito = (cantidad) => {
    console.log(cantidad);
    console.log(` se agrego la cantidad de ${cantidad} unidades al carrito`);
  }

  return (
    <div className='Itemlistcontainer'>
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={30} onAdd={agregarAlCarrito}/>
    </div>
  )
}

export default Itemlistcontainers;