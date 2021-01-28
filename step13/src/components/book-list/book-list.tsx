import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./book-list.css";
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks, bookAddedToCart } from "../../actions/actions";
import BookListItem from "../book-list-item/book-list-item";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = ({ books, onAddedToCart } : {books: object[], onAddedToCart: Function}) => {
    return (
        <ul className="book-list">
            {
                books.map((book: any) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                            onAddedToCart={() => onAddedToCart(book.id)}
                            book={book}/></li>
                    )
                })
            }
        </ul>
    )
};

class BookListContainer extends Component<any> {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({ books, loading, error }: { books: [], loading: boolean, error: object | null}): {} => {
    return { books, loading, error };
};

const mapDispatchToProps = (dispatch: any, { bookstoreService } : any) : {} => {

    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookListContainer));