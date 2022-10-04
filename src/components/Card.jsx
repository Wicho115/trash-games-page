import React from "react";

const Card = (props) => {
    const { gameImg, gameTitle, gameDescription } = props;

    /*<Card gameImg=""
    gameTitle=""
    gameDescription=""/>*/

    return (
        <div className="CardContainer">
            <div className="CardFormat">
                <div className="CardImgColumn">
                    <img className="CardImg" src={gameImg} alt={gameTitle} />
                </div>
                <div className="CardTextColumn">
                    <h5 className="CardTitle">{gameTitle}</h5>
                    <p className="CardText">
                        {gameDescription}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;