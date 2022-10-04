import React from "react";
import Divider1 from "../components/Divider1";

const UserGameCard = (props) => {
    const { gameImg, gameTitle, gameDescription, gameLink } = props;

    return (
        <>
            <div className="UserGameCard">
                <div className="UserGameCardImgColumn">
                    <img className="UserGameCardImg" src={gameImg} alt={gameTitle} />
                </div>
                <div className="UserGameCardTextColumn">
                <h5 className="CardTitle"><a href={gameLink} target="_blank">{gameTitle}</a></h5>
                    <p className="CardText">
                        {gameDescription}
                    </p>
                </div>
            </div>
            <Divider1 />
        </>
    );
}

export default UserGameCard;