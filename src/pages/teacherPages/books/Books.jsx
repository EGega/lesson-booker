import React, { useState } from 'react';
import { books } from "../../../data/books.js";
import styled from "./Books.module.css";

const Books = () => {
  const [count, setCount] = useState(4);

  return (
    <>
    <div className={styled.container}>
      {books.slice(0, count).map((book) => {
        const { id, author, title, image, freeTrial, pbhouse } = book;
        return (
          <div key={id}>
            <img className={styled.img} src={image} alt="" />
            <div>
              <h2>{title}</h2>
              <h2>{author}</h2>
            </div>
            <div>
              <h3>{freeTrial}</h3>
              <h3>{pbhouse}</h3>
            </div>
          </div>
        );
      })}
      <button
        onClick={() => {
          setCount(count + 4);
        }}
        className={styled.btn}
      >
        Load More
      </button>
    </div>
    </>
  );

};

export default Books;
