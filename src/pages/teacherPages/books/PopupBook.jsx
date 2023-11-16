import { useSelector } from "react-redux"
import { selectCart } from "../../../store/index.js"
import styled from "./PopupBook.module.css"
const PopupBook = (popUp, showPopUp) => {
    const cart = useSelector(selectCart)
    const { selectedBooks} = cart
    console.log(popUp);
  return (
    <>
    <div className={styled.container} >
      <div  className={styled.popup}>
        <h2> {selectedBooks.map(book => book.title)}</h2>
         <button  onClick={() => showPopUp(false) } className={styled.buttonX}> &#10005;</button>
      </div>
    </div>
    </>
  )
}

export default PopupBook