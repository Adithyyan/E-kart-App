import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptycart, removefromcart } from '../redux/slices/cartSlice';

function Cart() {

  const[total,setTotal]=useState(0)
  const navigate=useNavigate()

  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const dispatch=useDispatch()

  
  const handlecart=()=>
  {
    alert("your order placed successfully")
    dispatch(emptycart())
    navigate('/')
  }
  
  const gettotal=()=>
  {
    const totalprice=cartArray.map((item)=>item.price).reduce((n1,n2)=>n1+n2,0);
    setTotal(totalprice)
  }

  useEffect(()=>{
    gettotal()
  },[cartArray])

  return (
    <>
      <div style={{marginTop:'100px'}}>
        <div className='row'>
          {cartArray?.length>0?
  
          <div className='d-flex justify-content-between align-items-center'>
            <div className='col-lg-6 m-3'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item,index)=>(<tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td><img style={{width:'50px',height:'100px'}} src={item.thumbnail} alt="" /></td>
                    <td>{item.price}</td>
                    <td><Button onClick={()=>dispatch(removefromcart(item.id))} variant="outline-danger">
                  <i class="fa-solid fa-trash"></i>
                  </Button></td>
                  </tr>))}
                </tbody>
              </table>
            </div>

            <div className='col-lg-6 text-center'>
              <h2 className='mb-5'>Summary</h2>
              <h4 className='mb-3'  style={{fontSize:'20px'}}>Total number of items:{cartArray.length}</h4>
              <h4 className='mb-2' style={{fontSize:'20px'}}>Price : <span className='text-warning fw-bold'>{total}</span></h4>
              <Button onClick={handlecart} className='btn btn-success rounded w-50 mt-5'>Checkout</Button>
            </div>
          </div>
  
          :<div style={{height:"100vh"}} className='d-flex flex-column justify-content-centre align-items-center'>
          <img src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt="no image" height={"300px"}/>
          <h4 className='text-danger mt-3'>Your Cart is empty</h4>
          <button style={{backgroundColor:"#5376AD"}} className='btn rounded mt-3'><Link style={{textDecoration:"none", color:"white"}} to={'/'}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to Home</Link></button>
        </div>}
        </div>
      </div>
    </>
  )
}

export default Cart
