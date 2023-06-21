import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../contexts/userContext";
import api from "../utils/Api";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";


function App() {
  const [currentUser, setCurrentUser] = useState({}); 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [cards, setCards] = useState([]);


  useEffect(() =>{
    api.getInitialCards()
    .then((res) => {
        setCards(res);
    });
}, []);

  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
        setCurrentUser(res);
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  
  function handleCardDelete(card) {
    api.removeCard(card._id)
    .then(() => {
      setCards(
        cards.filter((item) => {
          return item._id !== card._id;
        })
      );
    });
  }

  function handleUpdateUser(user) {
    api.setUserInfo(user.name, user.about)
    .then((data) => {
      setCurrentUser(data);
      handleClosePopup();
    });
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
    .then((data) => {
      setCurrentUser(data);
      handleClosePopup();
    });
  }

  function handleAddPlace(name, link) {
    api.addCard(name, link)
    .then((data) => {
      setCards([data, ...cards]);
      handleClosePopup();
    });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleClosePopup() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <userContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        isImagePopupOpen={isImagePopupOpen}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <AddPlacePopup
        name=""
        onClose={handleClosePopup}
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlace}
      ></AddPlacePopup>
      <EditAvatarPopup
        onClose={handleClosePopup}
        isOpen={isEditAvatarPopupOpen}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <EditProfilePopup
        onClose={handleClosePopup}
        isOpen={isEditProfilePopupOpen}
        onUpdateUser={handleUpdateUser}
      />
    </userContext.Provider>
  );
}

export default App;
