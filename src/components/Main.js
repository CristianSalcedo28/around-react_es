import React, { useState, useEffect } from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";


function Main(props) {
  const [currentUser, setCurrentUser] = useState({});

  //const currentUser = React.useContext(CurrentUserContext);
    // const [userName, setUserName] = useState("");
    // const [userAvatar, setUserAvatar] = useState("");
    // const [userDescription, setUserDescription] = useState("");
  const [cards, setCards] = useState([]);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  
    useEffect(() =>{
      api.getUserInfo()
      .then((res) => {
          setCurrentUser(res);
      });
  }, []);

    useEffect(() =>{
        api.getInitialCards()
        .then((res) => {
            setCards(res);
        });
    }, []);

    function handleImagePopup(selectedCard) {
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

    function handleCardDelete() {
      onCardDelete();
    }

    return (
      <div className="page">
        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <img
                alt="Foto del Usuario"
                src={currentUser.avatar}
                className="profile__avatar-btn"
              />
              <div
                className="profile__avatar-edit"
                onClick={props.onEditAvatarClick}
              ></div>
            </div>
            <div className="profile__info">
              <p className="profile__name">{currentUser.name}</p>
              <p className="profile__profession">{currentUser.about}</p>
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