import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({name, link, likes, handleCardClick, handleCardLike, onCardLike }) {
   const user = React.useContext(CurrentUserContext);
   const isOwn = card.owner._id === user._id;
   const cardDeleteButtonClassName = `button cards__delete-button ${
    isOwn ? "cards__delete-button_visible" : "cards__delete-button_hidden"
  }`;
  const isLiked = card.likes.some((item) => item._id === user._id);
   const cardLikeButtonClassName = `button cards__like-button ${
    isLiked ? "cards__like-button_active" : "cards__like-button_inactive"
  }`;

  function handleCardLike() {
    onCardLike(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }
  
  return (
      <div className="cards__item">
        <img 
          onClick={() => handleCardClick({name, link})}
          src={link}
          alt=""
          className="cards__image"
        />
        <button
         type="button"
         className={cardDeleteButtonClassName}
         ></button>
        <div className="cards__text">
            <h4 className="cards__name">{name}</h4>
            <div className="cards__like">
              <button
               type="button"
               className={cardLikeButtonClassName}
               onClick={() => handleCardLike()}
               ></button>
              <span className="likes__counter">{likes}</span>
            </div>
        </div>
      </div>
)
}

export default Card;

