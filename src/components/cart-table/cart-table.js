import React from 'react';
import {connect} from "react-redux";
import './cart-table.scss';
import {deleteFromCart, addMore, removeMore} from "../../actions";

const CartTable = ({items, deleteFromCart, addMore, removeMore, counter}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {id, price, title, url} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price * counter}$</div>
                                <div onClick={() => addMore(id)}className="cart__item-plus">+</div>
                                <div className="cart__item-counter">{counter}</div>
                                <div onClick={() => removeMore(id)} className="cart__item-minus">-</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
                
            </div>
        </>
    );
};

const mapStateToProps = ({items, counter}) => {
    return {
        items,
        counter
    }
}

const mapDispatchToProps =  {
    deleteFromCart, 
    addMore,
    removeMore
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);