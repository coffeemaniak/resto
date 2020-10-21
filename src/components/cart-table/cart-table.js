import React from 'react';
import {connect} from "react-redux";
import './cart-table.scss';
import {deleteFromCart, addedToCart, removeMore} from "../../actions";

const CartTable = ({items, deleteFromCart, addedToCart, removeMore}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {id, price, title, url, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price * count}$</div>
                                <div onClick={() => addedToCart(id)}className="cart__item-plus">+</div>
                                <div className="cart__item-counter">{count}</div>
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

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps =  {
    deleteFromCart, 
    addedToCart,
    removeMore
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);