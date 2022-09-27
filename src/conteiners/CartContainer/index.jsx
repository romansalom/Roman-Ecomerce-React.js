import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid,  } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import "./styles.css";
import { Link } from 'react-router-dom';



const Cart = () => {
const {cart , clearCart , removeItem, total} = useContext(Shop);

const renderImage = (image) => {
  return (
    <img src = {image.value} alt="cart-product" style= {{height:'120px'}}></img>
  )
}

const handleBuy = () => {
  const importeTotal = total ();
}



const renderRemoveButton = (item) => {
  const product = item.value
  return(
    <Button onClick={()=> removeItem(product)} variant="contained" color="error">Borrar</Button>
  )}




const columns  = [
    { field: 'image', headerName: 'image', width: 250, renderCell: renderImage },
    { field: 'title', headerName: 'Product', width: 450 },
    { field: 'quantity', headerName: 'Quantity ', width: 80 },
    { field: 'precio', headerName: 'Precio ', width: 80 },
    { field: 'total', headerName: 'Total  ', width: 80 },
    {
      field: 'remove',
      headerName: '',
      renderCell: renderRemoveButton,
      width: 120,
    },

  ];
  const filas = []
  cart.forEach(item => {
    filas.push({
      id : item.id,
      image : item.image,
      title: item.title,
      quantity : item.quantity,
      remove :item,
      precio : item.price,
      total : (item.price) * (item.quantity),
    })

  })
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      {! cart.lenght
      ? <div className="emptyContainer">
        <p>no hay productos en el carrito</p>
        <Link to ="/"><button>volver al catalogo</button></Link>
        </div>
        : cart.map(product => {
          return <  Cart key={product.id} product={product}/>
        }
        )}
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        rowHeight={150}
        ></DataGrid>
        <Button className='boton'  onClick={clearCart} color="error" variant='outlined'>Limpiar carrito</Button>

        <Button className='boton'  onClick={handleBuy}  variant='outlined'>Finalizar compra</Button>
        
       <h4>total a pagar = {total ()}</h4>
    </div>
   
  );
}




export default Cart;