import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({name, link, likes, handleCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <div className="cards__item">
        <img 
          onClick={() => handleCardClick({name, link})}
          src={link}
          alt=""
          className="cards__image"
        />
        <button type="button" className="button-trash"></button>
        <div className="cards__text">
            <h4 className="cards__name">{name}</h4>
            <div className="cards__like">
              <button type="button" className="button-like"></button>
              <span className="likes__counter">{likes}</span>
            </div>
        </div>
      </div>
)
}

export default Card;

