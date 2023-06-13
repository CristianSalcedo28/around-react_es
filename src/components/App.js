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

  useEffect(() =>{
    api.getUserInfo()
    .then((res) => {
        setCurrentUser(res);
    });
}, []);

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
      />
    </>
  );
}

export default App;
