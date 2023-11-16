import { useParams, useNavigate } from "react-router-dom"
import { books } from "../../../data/books.js"
import styled from "./BookDetails.module.css"
import Navbar from '../../../components/navbar/Navbar.jsx';
import { useDispatch } from "react-redux";
import { addBookToCart } from "../../../store/index.js";
import { Link } from "react-router-dom";
const BookDetails = () => {
    const {id} = useParams()
    const book = books.find((e) => e.id === parseInt(id))
    const {title, author, image, pbhouse, freeTrial } = book
    const navigate = useNavigate ();
    const dispatch = useDispatch();

    const addThisBook = () => {
        dispatch(addBookToCart(book))
    }
    return (
        <>
        <Navbar />
            <div className={styled.container}>
             <div className={styled.imgDiv}>
             <img src={image} className={styled.image} alt="" />
             <button className={styled.btn} onClick={addThisBook}>Use This Book</button>
            </div>
            <div className={styled.infoDiv}>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>Publishing House: {pbhouse}</p>
            <p> { freeTrial ? "Free Trial Available" : "No Free Trial"}</p>
            </div>
        </div>
            <button className={styled.goBackBtn} onClick={ () => navigate(-1)}>  &#x2190; Go Back</button>   
        </>
    )
}

export default BookDetails