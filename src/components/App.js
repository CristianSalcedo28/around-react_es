import React, { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
//   useEffect(() =>{
//     api.getUserInfo()
//     .then((res) => {
//         setCurrentUser(res);
//     });
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
  }

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) =>
         state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  
  function handleUpdateUser(data) {
    api.setUserInfo(data)
    .then((res) => {
      setCurrentUser(res);
      handleClosePopup();
    })
  }
  
  return (
    <>
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        isImagePopupOpen={isImagePopupOpen}
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
        onUpdateUser={handleUpdateUser}
      />
    </>
  );
}

export default App;
