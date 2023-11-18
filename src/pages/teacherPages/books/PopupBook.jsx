import { useSelector } from "react-redux"
import { selectCart } from "../../../store/index.js"
import styled from "./PopupBook.module.css"
const PopupBook = ({popUp, showPopUp}) => {
    const cart = useSelector(selectCart)
    const { selectedBooks} = cart
    console.log(popUp);
  return (
    <>
    <div className={styled.container} >
      <div  className={styled.popup}>
         {selectedBooks.map(book => {
          return( <div className={styled.select}>
            <img src={book.image} className={styled.image} alt="" />
            <h2>{book.title}</h2>
            <button className={styled.add}>Add to list</button>
            <button className={styled.cancel}>Cancel</button>
          </div>)
          })}
         <button  onClick={() => showPopUp(false) } className={styled.buttonX}> &#10005;</button>
      </div>
    </div>
    </>
  )
}

export default PopupBook