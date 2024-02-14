import Navbar from '../../components/navbar/Navbar'
import styled from './Cart.module.css'
import TotalCart from './totalCart/TotalCart'
import { useSelector } from 'react-redux'
import { selectCart } from "../../store/index"
import { useDispatch } from 'react-redux';
import { removeBookFromCart } from "../../store/index.js";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from 'react'
const Cart = () => {
  const cart = useSelector(selectCart)
  const {selectedBooks} = cart
  const dispatch = useDispatch()
  const removeHandler = (id) => {
    dispatch(removeBookFromCart(id))
  }
  const [values, setValues] = useState(selectedBooks.map(() => 1)) 
  const increaseHandler = (index) => {
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = newValues[index] + 1;
      return newValues;
    });
  }
  const decreaseHandler = (index, id) => {
    setValues((prevValues) => {
      const newValues = [...prevValues]
      newValues[index] = newValues[index] - 1
      return newValues
    })
    if (values[index] === 0) {
      dispatch(removeBookFromCart(id))
    }
    console.log(values);
  } 

  return (
    <>
    <Navbar/>
   <div className={styled.container}>
    <div className={styled.products} >
      {
        selectedBooks && 
      selectedBooks?.map((el, index) => {
        const {title, author, price, image, id } = el
       return ( 
       <div className={styled.product} key={id}>
          <img src={image} className={styled.img} alt="" />
          <div className={styled.nameAndPrice}>
           <div className={styled.nameAmountDelete}>
           <h4>{title} by {author}</h4>
          <div className={styled.incDecDel} >
              <div className={styled.incDec}>
               <CiCircleMinus className={styled.dec} onClick={() => {
                  decreaseHandler(index, id)}
               }  />
               <input  type="number" min="0" max="10" value={values[index]} className={styled.number}  />
               <CiCirclePlus onClick={() => increaseHandler(index)} className={styled.inc} />
              </div>
            <FaRegTrashAlt onClick={() => removeHandler(id)} className={styled.delete}/>
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

