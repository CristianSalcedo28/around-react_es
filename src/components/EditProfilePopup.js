import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup(props) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
//  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={props.title}
      submitText="Save"
      onSubmit={handleSubmit}
    >
    <input
            type="text"
            onChange={handleNameChange}
            id="name"
            name="user"
            className="popup__item popup__item_name"
            value={name}
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-error popup__item-error "></span>
          <input
            type="text"
            onChange={handleDescriptionChange}
            id="profession"
            name="profession"
            className="popup__item popup__item_profession"
            value={description}
            placeholder="About Me"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="profession-error popup__item-error "></span>    
    </PopupWithForm>
  );
}

export default EditProfilePopup;