
const booksLoaded = (newBooks: []) => {
    return {
        type: 'BOOKS_LOADED',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'BOOKS_REQUESTED'
    }
};

const booksError = (error: object) => {
    return {
        type: 'BOOKS_ERROR',
        payload: error
    }
};

const bookAddedToCart = (bookId: number) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload: bookId
    }
}

const bookRemovedFromCart = (bookId: number) => {
    return {
        type: "BOOK_REMOVED_FROM_CART",
        payload: bookId
    }
}

const allBooksRemovedFromCart = (bookId: number) => {
    return {
        type: "ALL_BOOKS_REMOVED_FROM_CART",
        payload: bookId
    }
}

const fetchBooksOld = (bookstoreService: {getBooks: Function}, dispatch: Function) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data: []) => dispatch(booksLoaded(data)))
    .catch((error: object) => dispatch(booksError(error)));
}

const fetchBooks = (bookstoreService: {getBooks: Function}) => () => (dispatch: Function) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data: []) => dispatch(booksLoaded(data)))
    .catch((error: object) => dispatch(booksError(error)));
}

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
};