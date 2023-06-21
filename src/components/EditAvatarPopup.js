import React, { useRef, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { userContext } from "../contexts/userContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(userContext);
  const avatar = useRef(currentUser.avatar);

  function handleSubmit(evt){
    evt.preventDefault();
    onUpdateAvatar(avatar.current);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Change Image"
      submitText="Save"
      onSubmit={handleSubmit}
    >
       <input
            type="url"
            id="imageAvatar"
            name="imageAvatar"
            className="popup__item popup__item_link"
            placeholder="Url"
            required
            onChange={(evt) => {
              avatar.current = evt.target.value;
            }}
          />
        <span className="imageAvatar-error popup__item-error "></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;