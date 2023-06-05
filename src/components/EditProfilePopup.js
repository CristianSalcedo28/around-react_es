import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
      submitText="Save"
    >
    <input
            type="text"
            id="name"
            name="user"
            className="popup__item popup__item_name"
    //        value="" 
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-error popup__item-error "></span>
          <input
            type="text"
            id="profession"
            name="profession"
            className="popup__item popup__item_profession"
    //        value=""
            minLength="2"
            maxLength="200"
            required
          />
          <span className="profession-error popup__item-error "></span>    
    </PopupWithForm>
  );
}

export default EditProfilePopup;