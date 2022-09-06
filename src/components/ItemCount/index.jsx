import React, { useState, useEffect } from 'react'
import './styles.css';
const ItemCount = ({stock , initial , onAdd}) => 
{

    const [count, SetCount] = useState(initial);

    const handleAdd =() => {
        if (count < stock){
        SetCount(count+1);
    }else{
    alert("no hay suficiente stock disponible");
  }


const handleDecrement = () => {
    if (count < stock){
        SetCount(count-1);
    }if
        (count < 1){
            SetCount(0);
        }
    }
    

    



useEffect (() => {
    console.log("se monto el ItemCount");
}, [count]);

return(
    <div>
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
     </div>

);
}
}




export default ItemCount;
