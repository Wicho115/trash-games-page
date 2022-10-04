import React from "react";
import Carrusel from "../components/Carrusel";
import Divider1 from "../components/Divider1";
import SectionTitle from "../components/SectionTitle";

const About = (props) => {
    return (
        <>
            <Divider1 />
            <SectionTitle title="About Us"/>
            <center>
                <div className="AboutText">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to
                        make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions
                        of Lorem Ipsum.
                    </p>
                </div>
            </center>

            <Divider1 />
            <SectionTitle title="Our Philosophy"/>
            <center>
                <div className="AboutText">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to
                        make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                        containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions
                        of Lorem Ipsum.
                    </p>
                </div>
            </center>

            <Divider1 />
            <Carrusel datatarget="about"
                src1="https://media.discordapp.net/attachments/945882029592035328/1017929428841541744/Oscar.png?width=576&height=320" src2="https://media.discordapp.net/attachments/945882029592035328/1017929441759985736/Edson.png?width=576&height=320" src3="https://media.discordapp.net/attachments/945882029592035328/1017929447837552680/Edgar.png?width=576&height=320" src4="https://media.discordapp.net/attachments/945882029592035328/1017929454389035049/Dante.png?width=576&height=320"/>
            <Divider1 />
        </>
    );
}

export default About;