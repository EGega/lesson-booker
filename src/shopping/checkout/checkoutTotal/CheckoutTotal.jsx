import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../../store'
import styled from "./CheckoutTotal.module.css"
const CheckoutTotal = () => {
  const cart = useSelector(selectCart)
  const {selectedBooks} = cart 
  console.log(selectedBooks); 
  return (
    <>
    <div className={styled.container}>
        <div className={styled.selectedBooks}>
        {selectedBooks.map((book) => {
            const {title, image, quantity, price} =  book
            return (
          <div className={styled.book}>
            <img  src={image} alt="" />
            <p>{title}</p>
             <p>{quantity === 1 ? `${quantity} Book` : `${quantity} Books`}</p>
             <p>Cost {price}$</p>
          </div> )
        })}
        </div>
      <h4>Total Price: {selectedBooks.reduce((acc, curr) => acc + curr.price, 0)} $ </h4>
      <button className={styled.button}  > Pay </button>
    </div>
    </>
  )
}
 
export default CheckoutTotal