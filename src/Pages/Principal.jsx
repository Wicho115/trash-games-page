import React from "react";
import Carrusel from "../components/Carrusel";

const Principal = (props) => {
    return (
        <>
            <div className="MainContainer">
                <Carrusel datatarget="carrusel"
                href1="https://edgardev38.itch.io/crazypiratedungeonfps" href2="https://ozcardev.itch.io/crazy-color-magic-train-adventure" href3="https://edgardev38.itch.io/dice-space" href4="https://globalgamejam.org/2022/games/splitted-7"
                src1="https://cdn.discordapp.com/attachments/945882029592035328/1017587341960941608/PiratesDungeon.png" src2="https://media.discordapp.net/attachments/945882029592035328/1017585678378336276/CrazyColorMagicTrain.png?width=1202&height=676" src3="https://cdn.discordapp.com/attachments/945882029592035328/1017583775573614612/Dice_Space.png" src4="https://cdn.discordapp.com/attachments/889329044468957255/1017582346481971280/unknown.png"
                title1="Pirates Dungeon" title2="Crazy Color Magic Train Adventure" title3="Dice Space" title4="Splitted"
                desc1="Lorem ipsum" desc2="Lorem ipsum" desc3="Lorem ipsum" desc4="Lorem ipsum"/>
            </div>
        </>
    );
}

export default Principal;