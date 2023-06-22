import React, { useContext } from "react";
import { userContext } from "../contexts/userContext";

function Card({card, name, link, likes, handleCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(userContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${isOwn ? "button-trash" : ""}`;
  const isLiked = card.likes.some((item) => item._id === currentUser._id);
  const cardLikeButtonClassName = `button-like ${
    isLiked ? "button-like-active" : ""
  }`;

  function handleCardLike() {
    onCardLike(card)
  }

  function handleCardDelete() {
    onCardDelete(card)
  }

  return (
    <div className="template__card">
      <div className="cards__item">
        <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
        <img 
          onClick={() => handleCardClick({name, link})}
          src={link}
          alt=""
          className="cards__image"
        />
        {/* <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button> */}
        <div className="cards__text">
            <h4 className="cards__name">{name}</h4>
            <div className="cards__like">
              <button type="button" className={cardLikeButtonClassName} onClick={handleCardLike}></button>
              <span className="likes__counter">{likes}</span>
            </div>
        </div>
      </div>
    </div>
)
}

export default Card;

