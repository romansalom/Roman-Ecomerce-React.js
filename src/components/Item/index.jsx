import React from 'react'
import ItemCount from '../ItemCount'
import '../Item/styles.css';
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
                <div className="col-12 col-lg-3">
                    <div className="card">

                                        <img src={product.image} className="card-img-top" width={250} alt="foto" onClick={handleNavigate}></img>
                                        <div class="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p >sotck : {product.stock}</p>
                                            <p href="./">ver mas</p>
                                                                                  
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                    
                                </section>
                   
                  
            
                )
            }
        
            
            export default Item