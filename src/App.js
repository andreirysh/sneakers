import React from "react";

function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/img/logo.png"/>
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
          <img src="/img/cart.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img src="/img/user.svg"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="card">
        <img src="/img/sneakers/1.jpg"/>
        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div>
          <div>
            <span>Цена:</span>
            <b>12 999 руб.</b>
          </div>
          <button>
            <img src="/img/plus.svg"></img>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
