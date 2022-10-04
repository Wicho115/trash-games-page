import React from "react";

const GamePageInfo = (props) => {
    const { gameLink, gameTitle, gameDescription } = props;

    return (
        <center>
            <div class="GamesTitle"><a href={gameLink}>{gameTitle}</a></div>
            <div class="GamesText">{gameDescription}</div>
        </center>
    );
}

export default GamePageInfo;