import React from "react";

function Cards(props) {
  return props.cards.map((card) => (
  
    <template className="template__card">
      <div className="cards__item">
        <img 
          onClick={() => props.onCardClick(card)}
          src={card.link}
          alt=""
          className="cards__image"
        />
        <button type="button" className="button-trash"></button>
        <div className="cards__text">
            <h4 className="cards__name">{card.name}</h4>
            <div className="cards__like">
              <button type="button" className="button-like"></button>
              <span className="likes__counter">{card.likes.length}</span>
            </div>
        </div>
      </div>
  </template>

))
}

export default Cards;

