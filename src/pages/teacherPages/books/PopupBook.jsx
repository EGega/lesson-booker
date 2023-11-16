import { useSelector } from "react-redux"
import { selectCart } from "../../../store/index.js"
import styled from "./PopupBook.module.css"
const PopupBook = () => {
    const cart = useSelector(selectCart)
    const { selectedBooks} = cart
    console.log(selectedBooks);
  return (
    <>
    <div className={styled.container} >
      <div  className={styled.popup}>
        <h2> {selectedBooks.map(book => book.title)}</h2>
         <button onClick={() => null} className={styled.buttonX}> &#10005;</button>
      </div>
    </div>
    </>
  )
}

export default PopupBook