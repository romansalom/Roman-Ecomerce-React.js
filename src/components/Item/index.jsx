import React from 'react'
import './styles.css';
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate(`/detail/${product.id}`)
    }

        return (
          
            <section className='productos'>

            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">

                                        <img src={product.image} className="card-img-top" width={250} alt="foto" ></img>
                                        <div class="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p >precio : {product.price}</p>
                                            <p className='vermas' onClick={handleNavigate}>ver mas</p>
                                                                         
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    
                                </section>
                   
                  
            
                )
            }
        
            
            export default Item