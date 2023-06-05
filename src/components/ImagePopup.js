import React from "react";

function ImagePopup(props) {
    return (
        <div className={`popup popup_image ${props.isOpen ? "popup__show" : " "}`}>
            <div className="popup__content">
                <button type="button" className="close-button" id="close-button-image" onClick={props.onClose}></button>
                <img 
                     src={props?.selectedCard?.link}
                     alt=""
                     className="popup__image" />
                <p className="popup__text">{props?.selectedCard?.name}</p>
            </div>
        </div>
      );
    }

export default ImagePopup;
    