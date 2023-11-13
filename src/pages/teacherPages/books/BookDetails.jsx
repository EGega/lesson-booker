import { useParams } from "react-router-dom"
import { books } from "../../../data/books.js"
import styled from "./BookDetails.module.css"
import Navbar from '../../../components/navbar/Navbar.jsx';
const BookDetails = () => {
    const {id} = useParams()
    const book = books.find((e) => e.id === parseInt(id))
    const {title, author, image, pbhouse, freeTrial } = book
    return (
        <>
        <Navbar />
            <div className={styled.container}>
             <div className={styled.imgDiv}>
             <img src={image} alt="" />
            </div>
            <div className={styled.infoDiv}>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>Publishing House: {pbhouse}</p>
            <p> { freeTrial ? "Free Trial Available" : "No Free Trial"}</p>
            </div>   
        </div>
        </>
    )
}

export default BookDetails