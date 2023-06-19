import React from 'react'

export const Card = ({url, title, price, onClick, addFavorite}) => {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked" onClick={addFavorite}/>
            </div>
            <img width={130} height={110} src={url} alt="sneaker" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <button className="button" onClick={onClick}>
                    <img src="/img/plus.svg" alt='plus'></img>
                </button>
            </div>
        </div>
    )
}
