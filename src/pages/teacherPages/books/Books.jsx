import React, { useState } from 'react';
import { books } from "../../../data/books.js";
import styled from "./Books.module.css";
import Navbar from '../../../components/navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
const Books = () => {
  const [count, setCount] = useState(4);

  return (
    <>
   <Navbar />
    <div className={styled.container}>
      {books.slice(0, count).map((book) => {
        const { id, title, image} = book;
        return (
          <div className={styled.innerContainer} key={id}>
            <img className={styled.img} src={image} alt="" />
            <div>
              <h2>{title}</h2>
            </div>
            <Link to={`/books/${id}`} className={styled.specBtn}>
              Details
            </Link>
          </div>
        );
      })}
      <button
        onClick={() => setCount(count + 4)}
        className={styled.btn}>
        Load More
      </button>
    </div>
    </>
  );

};

export default Books;
