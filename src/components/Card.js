import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, handleCardClick, handleCardLike, onCardLike }) {
   const user = React.useContext(CurrentUserContext);
   const isOwn = card.owner._id === user._id;
   const cardDeleteButtonClassName = `button cards__delete-button ${
    isOwn ? "cards__delete-button_visible" : "cards__delete-button_hidden"
  }`;
  const isLiked = card.likes.some((item) => item._id === user._id);
   const cardLikeButtonClassName = `button cards__like-button ${
    isLiked ? "cards__like-button_active" : "cards__like-button_inactive"
  }`;

  // function handleCardLike() {
  //   onCardLike(card);
  // }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  
  return (
      <div className="cards__item">
        <img 
          onClick={() => handleCardClick()}
          src={card.link}
          alt={card.name}
          className="cards__image"
        />
        <button
         type="button"
         className={cardDeleteButtonClassName}
         onClick={() => card.handleCardDelete(card)}
         ></button>
        <div className="cards__text">
            <h4 className="cards__name">{card.name}</h4>
            <div className="cards__like">
              <button
               type="button"
               className={cardLikeButtonClassName}
               onClick={() => handleCardLike()}
               ></button>
              <span className="likes__counter">{card.likes}</span>
            </div>
        </div>
      </div>
)
}

export default Card;

