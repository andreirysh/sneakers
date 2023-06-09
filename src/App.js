import React from "react";

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.png" />
          <div >
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>Все кроссовки</h1>
        <div className="d-flex">
          <div className="card">
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
