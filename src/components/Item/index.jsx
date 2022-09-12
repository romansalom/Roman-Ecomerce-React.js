import React from 'react'
import ItemCount from '../ItemCount';






function Item({ product }) {
    

    return (

        <>
            <div className='conatiner'>
                <div className='row align-items-start'>
                    <div className =" col 12 col-lg-3 ">
                        <div className ='col'>
                        <div class="card" >
                            <img src={product.img} className="card-img-top" alt=""></img>
                            <div class="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p >sotck : {product.stock}</p>
                                <p href="/">ver mas</p>
                                <ItemCount>
                                
                                </ItemCount>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
     
           </>
      

    )
}


export default Item