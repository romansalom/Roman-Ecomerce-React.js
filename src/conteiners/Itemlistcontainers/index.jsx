import React from 'react';
import './styles.css';
const Itemlistcontainers = ({greeting}) => {
  return (
    <div className='Itemlistcontainer'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default Itemlistcontainers;