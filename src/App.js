import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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
              <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
            </ul>
            
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" alt="logo" />
          <div >
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img width={130} height={110} src="/img/sneakers/1.jpg" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg"></img>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
