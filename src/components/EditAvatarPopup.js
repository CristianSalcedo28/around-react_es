import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
    >
       <input
            type="url"
            id="imageAvatar"
            name="imageAvatar"
            className="popup__item popup__item_link"
            placeholder="Url"
            required
          />
        <span className="imageAvatar-error popup__item-error "></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;