import React from "react";

function Cards(props) {
  // function handleCardClick (){
  //   props.onCardClick(props)
  // }
  return (
      <div className="cards__item">
        <img 
          onClick={props.onCardClick}
          src={props.link}
          alt=""
          className="cards__image"
        />
        <button type="button" className="button-trash"></button>
        <div className="cards__text">
            <h4 className="cards__name">{props.name}</h4>
            <div className="cards__like">
              <button type="button" className="button-like"></button>
              <span className="likes__counter">{props.likes}</span>
            </div>
        </div>
      </div>
)
}

export default Cards;

