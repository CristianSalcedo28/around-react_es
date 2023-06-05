import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  // useEffect(() => {
  // Api
  // .getUserInfo()
  // .then((res) => {
  // setcurrentUser(res);
  // })
  // .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  // Api
  // .getInitialCards()
  // .then((res) => {
  // setCards(res);
  // })
  // .catch((err) => console.log(err));
  // }, []);

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
    // setTimeout(() => {
    //   setSelectedCard({});
    // }, 500);
  }
  function handleCardClick(Card) {
    setSelectedCard(Card);
    setIsImagePopupOpen(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        cards={cards}
        onCardClick={handleCardClick}
      />
      <Footer />
      <AddPlacePopup
        title="New Place"
        submitText="Create"
        name=""
        onClose={handleClosePopup}
        isOpen={isAddPlacePopupOpen ? "true" : ""}
      ></AddPlacePopup>
      <EditAvatarPopup
        title="Change Image"
        submitText="Save"
        name=""
        onClose={handleClosePopup}
        isOpen={isEditAvatarPopupOpen ? "true" : ""}
      />
      <EditProfilePopup
        title="Edit Profile"
        submitText="Save"
        name=""
        onClose={handleClosePopup}
        isOpen={isEditProfilePopupOpen ? "true" : ""}
      />
      <ImagePopup
        submitText="Yes"
        selectedCard={selectedCard}
        onClose={handleClosePopup}
        isOpen={isImagePopupOpen ? "true" : ""}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
