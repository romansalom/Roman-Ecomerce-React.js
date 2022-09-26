import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


const Cart = () => {
const {cart , clearCart , removeItem} = useContext(Shop);

const renderImage = (image) => {
  return (
    <img src = {image.value} alt="cart-product" style= {{height:'120px'}}></img>
  )
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
    {
      field: 'remove',
      headerName: 'Borrar',
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
    })

  })


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        rowHeight={'150px'}
        ></DataGrid>
        <Button  onClick={clearCart} color="error" variant='outlined'></Button>
    </div>
   
  );
}




export default Cart;