import React from 'react'

export const Drawer = () => {
    return (
        <div className="drawer">
            <h2 className="d-flex justify-between mb-30 ">
                Корзина
                <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
            </h2>
            <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                    <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
                    <div className="mr-20">
                        <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
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
    )
}
