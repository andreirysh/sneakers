import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Drawer } from "./components/Drawer/Drawer";
import axios from "axios";
import { Home } from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./components/pages/Favorites";

function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    axios.get('https://6490969b1e6aa71680cb8895.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://6490969b1e6aa71680cb8895.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6490969b1e6aa71680cb8895.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) =>{
    axios.delete(`https://6490969b1e6aa71680cb8895.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    console.log(id);
  }



  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onCartClose={() => setCartOpened(false)} onRemove={onRemoveItem}/> }
      <Header
        onCartClicked={() => setCartOpened(true)}
      />
      <Routes>
        <Route path="/main" 
        element={
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchValue={handleSearchValue}
          onAddToCart={onAddToCart}
        />
        }>
        </Route>
        <Route path="/favorites" element={<Favorites/>} exact>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
