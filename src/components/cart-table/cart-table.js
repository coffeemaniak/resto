import React from 'react';
import {connect} from "react-redux";
import './cart-table.scss';
import {deleteFromCart, addedToCart, removeMore} from "../../actions";
import WithRestoService from "../hoc"; 

const CartTable = ({items, deleteFromCart, addedToCart, removeMore, RestoService}) => {
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
            <button onClick = {() => {RestoService.setOrder( generateOrder(items))} } className = "order">Оформить заказ</button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            count: item.count
        }
    })
    return newOrder;
}


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

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));