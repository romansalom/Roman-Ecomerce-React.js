import React from 'react'
import vape1 from '../../assets/vape1.jpg';
import ItemCount from '../ItemCount';






function Item({ product }) {
    

    return (

        <>
            <div className='conatiner '>
                <div className='row'>
                    <div class="col-6 ">
                        <div class="card-center" >
                            <img src={vape1} class="card-img-top" alt=""></img>
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <ItemCount>
                              
                                </ItemCount>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
           </>
      

    )
}


export default Item