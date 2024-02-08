import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styled from './Cart.module.css'
import { useSelector } from 'react-redux'
import { selectCart } from "../../store/index"

const Cart = () => {
  const cart = useSelector(selectCart)
  console.log(cart);
  return (
    <>
   <div className={styled.container}>
    <Navbar/>
    <div className={styled.products} >
    
    </div>
   </div>
    </>
  )
}

export default Cart