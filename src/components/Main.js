import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Cards";

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content">
            <section className="profile">
              <div className="profile__avatar">
                <img
                alt="Foto del Usuario"
                style={{ backgroundImage: `url(${currentUser.avatar})` }}
                className="profile__avatar-btn" />
                <div className="profile__avatar-edit"
                    onClick={props.onEditAvatarClick}>
                </div>
              </div>
                <div className="profile__info">
                    <p className="profile__name">{currentUser.name}</p>
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                    <button type="button" className="button-edit"
                            onClick={props.onEditProfileClick}> 
                    </button>
                <button type="button" className="button-add"
                        onClick={props.onAddPlaceClick}>
                </button>
            </section>
            <section className="cards">
                   <Card
                    cards={props.cards}
                    handleCardClick={props.onCardClick} 
                    />
            </section>
        </main>
    );
};
export default Main;