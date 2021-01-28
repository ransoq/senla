import React from "react";
import { connect } from "react-redux";
import { bookAddedToCart, allBooksRemovedFromCart, bookRemovedFromCart } from "../../actions/actions";

import './cart-table.css';

const CartTable = ({ items, total, onIncrease, onDecrease, onDelete } : { items: object[], total: number, onIncrease: Function, onDecrease: Function, onDelete: Function }) => {
    
    const renderRow = (item: {}, idx: number) => {
        const { id, title, count, total } : any = item;
        return (
            <tr key={id}>
                <td>{idx+1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <button 
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm">
                        <i className="fa fa-minus-circle"></i>
                    </button>
                    <button 
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    <button 
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div className="cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>

            <div className="total">Total: ${total}</div>
        </div>
    )
}

const mapStateToProps = ({ cartItems, orderTotal } : { cartItems: object[], orderTotal: number}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);