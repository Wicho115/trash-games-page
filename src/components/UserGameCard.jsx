import React from "react";

const UserGameCard = (props) => {
    const { gameImg, gameTitle, gameDescription } = props;

    return (
        <div className="UserGameCard">
            <div className="UserGameCardImgColumn">
                <img className="UserGameCardImg" src={gameImg} alt={gameTitle} />
            </div>
            <div className="UserGameCardTextColumn">
                <h5 className="CardTitle">{gameTitle}</h5>
                <p className="CardText">
                    {gameDescription}
                </p>
            </div>
        </div>

    );
}

export default UserGameCard;