import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import styled from './Cart.module.css'
import TotalCart from './totalCart/TotalCart'
import { useSelector } from 'react-redux'
import { selectCart } from "../../store/index"
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const Cart = () => {
  const cart = useSelector(selectCart)
  const {selectedBooks} = cart
  return (
    <>

    <Navbar/>
   <div className={styled.container}>
    <div className={styled.products} >
      {
        selectedBooks && 
      selectedBooks?.map((el) => {
        const {title, author, price, image, id } = el
       return ( 
       <div className={styled.product} key={id}>
          <img src={image} className={styled.img} alt="" />
          <div className={styled.nameAndPrice}>
           <div className={styled.nameAmountDelete}>
           <h4>{title} by {author}</h4>
          <div className={styled.incDecDel} >
              <div className={styled.incDec}>
               <CiCircleMinus className={styled.dec} />
               <input  type="number" min="0" max="10" className={styled.number} />
               <CiCirclePlus className={styled.inc} />
              </div>
            <FaRegTrashAlt  className={styled.delete}/>
            </div>
          </div>
          <h3>{price} $</h3>
          </div>
        </div>
         )    
        })
        
      }

    </div>
      <TotalCart />
   </div>
    </>
  )
}

export default Cart