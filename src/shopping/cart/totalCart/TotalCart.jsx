import React from 'react'
import styled from "../totalCart/TotalCart.module.css"
import { useSelector } from 'react-redux'
import { selectCart } from "../../../store/index"
const TotalCart = () => {
const cart = useSelector(selectCart)
const {selectedBooks} = cart
  return (
    <>
    <div className={styled.container}>
      <h4>Selected Items: {selectedBooks.length} </h4>
      <h4>Total Price: {selectedBooks.reduce((acc, curr) => acc + curr.price, 0)} $ </h4>
      <button className={styled.button} > Complete Shopping </button>
    </div>
    </>
  )
}

export default TotalCart