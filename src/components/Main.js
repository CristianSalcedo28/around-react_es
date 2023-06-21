import React, { useState, useContext } from "react";
import { userContext } from "../contexts/userContext";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import "../index.css";


function Main(props) {
  const currentUser = useContext(userContext);
//  const [cards, setCards] = useState([]);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

    // useEffect(() =>{
    //     api.getInitialCards()
    //     .then((res) => {
    //         setCards(res);
    //     });
    // }, []);

    // function handleCardLike(card) {
    //   const isLiked = card.likes.some(i => i._id === currentUser._id);
    //   api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
    //       setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    //   });
    // }

    // function handleCardDelete(card) {
    //   api.removeCard(card._id)
    //   .then(() => {
    //     setCards(
    //       cards.filter((item) => {
    //         return item._id !== card._id;
    //       })
    //     );
    //   });
    // }
  


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
            {props.cards.map((card) => {
              return (
                <Card
                  key={card._id}
                  card={card}
                  owner={card.owner}
                  name={card.name}
                  link={card.link}
                  likes={card.likes.length}
                  handleCardClick={handleImagePopup}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
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