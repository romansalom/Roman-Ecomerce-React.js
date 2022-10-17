import React from 'react'
import './styles.css';
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/detail/${product.id}`)
    }
  
    return (
      <div className='card-container' onClick={handleNavigate}>
        <img className="card-img" src={product.image} width={350} alt="product"/>
        <h1 className='card-title'>{product.title}</h1>
        <h1 className='card-price'>Precio : {product.price}$</h1>
        <h1 className='card-price'>Stock : {product.stock}u</h1>
        <p className='vermas' onClick={handleNavigate}>ver mas</p>
      </div>
    )
  }
                
                export default Item