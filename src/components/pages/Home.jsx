import React from 'react'
import { Card } from '../Card/Card'

export const Home = ({items, searchValue, setSearchValue, handleSearchValue, onAddToCart,}) => {
    
  return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу ${searchValue}` : 'Все кроссовки'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." onChange={handleSearchValue} />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
            <Card
              key={item.id}
              url={item.url}
              title={item.title}
              price={item.price}
              onPlus={(obj) => onAddToCart(item)}
              addFavorite={() => console.log('favorite')}
            />
          )}
        </div>
      </div>
  )
}
