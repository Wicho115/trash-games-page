import React from "react";
import Carrusel from "../components/Carrusel";
import Divider1 from "../components/Divider1";
import SectionTitle from "../components/SectionTitle";
import GamePageInfo from "../components/GamePageInfo";

const About = (props) => {
    return (
        <>
            <Divider1 />
            <SectionTitle title="Games that we've Created" />

            <Carrusel datatarget="game1"
                src1="https://media.discordapp.net/attachments/945882029592035328/1017585678378336276/CrazyColorMagicTrain.png" src2="https://cdn.discordapp.com/attachments/945882029592035328/1017589900142465134/Niveles.png" src3="https://cdn.discordapp.com/attachments/945882029592035328/1017590042752978945/Gameplay.png" src4="https://cdn.discordapp.com/attachments/945882029592035328/1017590075309174806/Screenshot_1.png"/>

            <GamePageInfo gameLink="https://ozcardev.itch.io/crazy-color-magic-train-adventure"
                gameTitle="Crazy Color Magic Train Adventure"
                gameDescription="Crazy Color Magic Train Adventure es un juego donde tendrás quemanejar un tren que cambia de color para
                poder esquivar diversos obstáculos en camino a la estación. ¿Serás capaz de sortear los obstáculos y
                llegar a tu destino?" />

            <Divider1 />

            <Carrusel datatarget="game2"
                src1="https://cdn.discordapp.com/attachments/889329044468957255/1017582346481971280/unknown.png" src2="https://cdn.discordapp.com/attachments/945882029592035328/1017592069092548760/Screenshot_1.png" src3="https://cdn.discordapp.com/attachments/945882029592035328/1017592062180347964/Screenshot_8.png" src4="https://cdn.discordapp.com/attachments/945882029592035328/1017592079754469516/Screenshot_2.png" />

            <GamePageInfo gameLink="https://globalgamejam.org/2022/games/splitted-7"
                gameTitle="Spltted"
                gameDescription="When you feel like you can't die yet, the Oracle splits your soul in two pieces. They have to cooperate.
                That's the only way to find yourself again and have a peaceful end." />

            <Divider1 />

            <Carrusel datatarget="game3"
                src1="https://media.discordapp.net/attachments/945882029592035328/1017583775573614612/Dice_Space.png" src2="https://cdn.discordapp.com/attachments/945882029592035328/1017590594664669254/Screenshot_3.png" src3="https://cdn.discordapp.com/attachments/945882029592035328/1017590676227104868/Screenshot_6.png" src4="https://cdn.discordapp.com/attachments/945882029592035328/1017590714206539886/Screenshot_7.png" />

            <GamePageInfo gameLink="https://edgardev38.itch.io/dice-space"
                gameTitle="Dice Space"
                gameDescription="Dice Space is a bullet-hell game where you have a dice that is rolled every 7 seconds to get a power up." />

            <Divider1 />

            <Carrusel datatarget="game4"
                src1="https://cdn.discordapp.com/attachments/945882029592035328/1017587341960941608/PiratesDungeon.png" src2="https://cdn.discordapp.com/attachments/945882029592035328/1017592005691445280/Screenshot_6.png" src3="https://cdn.discordapp.com/attachments/945882029592035328/1017592019994030171/Screenshot_8.png" src4="https://cdn.discordapp.com/attachments/945882029592035328/1017592027677986927/Screenshot_9.png" />

            <GamePageInfo gameLink="https://edgardev38.itch.io/crazypiratedungeonfps"
                gameTitle="PiratesDungeon"
                gameDescription="PiratesDungeon es un juego de disparos en 1ra persona el cual esta repleto de acción que solo los mas 
                aptos soncapaces de completar." />

            <Divider1 />

        </>
    );
}

export default About;