import React from 'react';
import {books} from "../../../data/books.js"
const Books = () => {
    return (
        <div>
            <h5>This is book {books[1].title}</h5>
        </div>
    );
}

export default Books;