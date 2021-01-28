import React from "react";

import "./book-list-item.css";

type book = {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImg: string
}

const BookListItem = ({ book, onAddedToCart } : {book: book, onAddedToCart: any}) => {
    const { title, author, price, coverImg } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImg} alt="cover"/>
            </div>
            <div className="book-details">
                <span className="book-title">{title}</span>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button 
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    )
};

export default BookListItem;