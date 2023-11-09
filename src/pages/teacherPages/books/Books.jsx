import React from 'react';
import {books} from "../../../data/books.js"
import styled from "./Books.module.css"
const Books = () => {
    return (
        <div className={styled.container}>
        {books.map((book) => {
         const {id, author, title, image, freeTrial, pbhouse} = book
         return(
        <div  key={id}>
           <img className={styled.img}  src={image} alt="" />
           <div>
             <h2>{title}</h2>
             <h2>{author}</h2>
           </div>
           <div>
             <h3>{freeTrial}</h3>
             <h3>{pbhouse}</h3>
           </div>
          
         </div>
         )
        })
         }
        </div>
    );
}

export default Books;