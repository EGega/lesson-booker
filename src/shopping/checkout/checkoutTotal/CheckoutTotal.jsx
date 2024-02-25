import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../../store'
import { removeBookFromCart } from '../../../store'
import styled from "./CheckoutTotal.module.css"
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutTotal = () => {
  const cart = useSelector(selectCart)
  const {selectedBooks} = cart 
  console.log(selectedBooks);
  const dispatch = useDispatch()
  const removeHandler = (id) => {
    dispatch(removeBookFromCart(id))
  }
  return (
    <>
    <div className={styled.container}>
        <div className={styled.selectedBooks}>
        {selectedBooks.map((book) => {
            const {title, image, quantity, price, id} =  book
            return (
          <div className={styled.book}>
            <img  src={image} alt="" />
            <p>{title}</p>
            <p>{quantity === 1 ? `${quantity} Book` : `${quantity} Books`}</p>
            <p>{price}$</p>
             <FaRegTrashAlt className={styled.delete}  onClick={() => removeHandler(id)} /> 
          </div> )
        })}
        </div>
     {
     selectedBooks.length !== 0 && <div>
      <h4>Total Price: {selectedBooks.reduce((acc, curr) => acc + curr.price, 0)} $ </h4>  
      <button className={styled.button}> Pay </button>
    </div> 
     } 
    </div>
    </>
  )
}
 
export default CheckoutTotal