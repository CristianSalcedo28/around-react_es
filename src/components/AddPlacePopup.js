import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
      submitText="Create"
    >
         <input 
            type="text"
            name="title"
            className="popup__item popup__item_title"
            id="title"
            placeholder="Title"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="title-error popup__item-error "></span>
          <input
            type="url"
            name="link"
            className="popup__item popup__item_link"
            id="image"
            placeholder="Url"
            required
          />
          <span className="image-error popup__item-error "></span>
        </PopupWithForm> 
  );
}

export default AddPlacePopup;        