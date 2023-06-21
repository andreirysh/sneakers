import React, { useEffect, useState } from 'react'

export const Card = ({ url, title, price, onPlus, addFavorite, favorite }) => {

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorite);


    const handleAddClick = () => {
        onPlus({ url, title, price });
        setIsAdded((isAdded) => !isAdded)
    }

    useEffect(() => {
        console.log('123');
    }, [isAdded])

    const handeAddFavorite = () =>{
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="card">
            <div className="favorite">
                <img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="Unliked" onClick={handeAddFavorite} />
            </div>
            <img width={130} height={110} src={url} alt="sneaker" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <button className="button" onClick={handleAddClick}>
                    {<img src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt='plus'></img>}
                </button>
            </div>
        </div>
    )
}
