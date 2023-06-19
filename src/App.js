import React from "react";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";

function App() {

  const arr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', url: '/img/sneakers/1.jpg'
    },
    {
      title: 'Мужские Кроссовки Nike Air Max 270', price: '11 999 руб.', url: '/img/sneakers/2.jpg'
    },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '10 999 руб.', url: '/img/sneakers/3.jpg'
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider', price: '19 999 руб.', url: '/img/sneakers/4.jpg'
    }
  ]

  return (
    <div className="wrapper clear">
      {/* <div className="overlay">
        <Drawer/>
      </div> */}
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
        {arr.map((item) =>
          <Card
          url={item.url}
          title={item.title}
          price={item.price}
          onClick={()=>console.log(item)}
          addFavorite={() => console.log('favorite')}
          />
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
