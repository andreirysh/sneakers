import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ onCartClicked }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to={'/main'}>
        <img src="/img/logo.png" alt="logo" />
        </Link>
        <div >
          <h3 className="text-uppercase">Sneakers</h3>
          <p>Магазин кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30" onClick={() => onCartClicked()}>
          <img src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <Link to={'/favorites'}>
          <li>
            <img src="/img/heart.svg" alt="heart" />
          </li>
        </Link>
        <li>
          <img src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  )
}
