import React from 'react'
import styled from "./Numerator.module.css"
import { useSelector } from "react-redux"
import { selectCart } from "../../store/index"
const Numerator = () => {
const cart = useSelector(selectCart)
const { selectedBooks} = cart
console.log(selectedBooks.length);
  return (
    <>
    {selectedBooks.length !== 0 ? <div className={styled.main}>
        1
     </div> : null}

    </>
  )
}

export default Numerator