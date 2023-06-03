function PopupWithForm(props) {
    return (
      <>
        <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup__show" : " "}`}>
            <div className="popup__container">
              <form
               className="popup__form"
               name={props.name}
               noValidate
               >
                <button type="button" className="close-button" onClick={props.onClose}></button>
                <h3 className="popup__title">{props.title}</h3>
                {props.children}
                <button disabled type="submit" className="button-submit">{props.submitText}</button>
             </form>
            </div>
        </section>
      </>
     );
};

export default PopupWithForm;
