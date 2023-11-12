import { useParams } from "react-router-dom"
import { books } from "../../../data/books.js"
const BookDetails = () => {
    const {id} = useParams()
    const book = books.find((e) => e.id === parseInt(id))
    console.log(book);
    return (
        <div>
            <img src={book.image} alt="" />
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>Publishing House: {book.pbhouse}</p>
            <p>Free Trial: {book.freeTrial ? "Yes" : "No"}</p>
        </div>
    )
}

export default BookDetails