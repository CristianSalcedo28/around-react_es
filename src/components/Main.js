import React, { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import api from "../utils/Api.js";
import "../index.css";


function Main(props) {
    const [userName, setUserName] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [cards, setCards] = useState([]);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});


    useEffect(() =>{
        api.getUserInfo()
        .then((res) => {
            setUserName(res.name);
            setUserAvatar(res.avatar);
            setUserDescription(res.about);
        });
    }, []);

    useEffect(() =>{
        api.getInitialCards()
        .then((res) => {
            setCards(res);
        });
    }, []);

    function handleImagePopup(selectedCard) {
        console.log(selectedCard)
        setSelectedCard(selectedCard)
        if (isImagePopupOpen === false) {
            setIsImagePopupOpen(true)
        }
    }
    function handleClosePopup() {
        setSelectedCard({})
        if (isImagePopupOpen === true) {
            setIsImagePopupOpen(false)
        }
    }

    return (
      <div className="page">
        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <img
                alt="Foto del Usuario"
                src={userAvatar}
                className="profile__avatar-btn"
              />
              <div
                className="profile__avatar-edit"
                onClick={props.onEditAvatarClick}
              ></div>
            </div>
            <div className="profile__info">
              <p className="profile__name">{userName}</p>
              <p className="profile__profession">{userDescription}</p>
            </div>
            <button
              type="button"
              className="button-edit"
              onClick={props.onEditProfileClick}
            ></button>
            <button
              type="button"
              className="button-add"
              onClick={props.onAddPlaceClick}
            ></button>
          </section>
          <section className="cards">
            {cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  name={card.name}
                  link={card.link}
                  likes={card.likes.length}
                  handleCardClick={handleImagePopup}
                />
              );
            })}
          </section>
          <ImagePopup
            selectedCard={selectedCard}
            onClose={handleClosePopup}
            isOpen={isImagePopupOpen}
          />
        </main>
      </div>
    );
};
export default Main;