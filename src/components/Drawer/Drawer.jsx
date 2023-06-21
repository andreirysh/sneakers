import React from 'react'

export const Drawer = ({ onCartClose, items, onRemove }) => {
    return (

        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 ">
                    Корзина
                    <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" onClick={() => onCartClose()} />
                </h2>
                <div className="items">
                    {items.map((obj, index) => (
                        <div key={index} className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={70} height={70} src={obj.url} alt="Sneakers" />
                            <div className="mr-20">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={() => onRemove(obj.id)} />
                        </div>
                    ))}
                </div>
                <ul className="cartTotalBlock">
                    <li className="d-flex">
                        <span>Итого:</span>
                        <div></div>
                        <b>25.000 руб</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow" /></button>
                </ul>

            </div>
        </div>

    )
}
