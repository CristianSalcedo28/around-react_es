import React from "react";

function Cards(props) {
  return props.cards.map((card) => (

    <article className="card">
      <section className="card__photo">
        <button className="button-delete"></button>
        <img
          onClick={() => props.onCardClick(card)}
          src={card.link}
          alt=""
          className="card__image"
          data-target="#photoPopUp"
        />
      </section>
      <section className="card__name">
        <h3 className="card__title">{card.name}</h3>
        <section className="card__like">
          <button className="button-like"></button>
          <span className="count-likes">{card.likes.length}</span>
        </section>
      </section>
    </article>
  ))
}

export default Cards;

