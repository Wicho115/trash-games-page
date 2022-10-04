import React from "react";
import Divider1 from "../components/Divider1";
import SectionTitle from "../components/SectionTitle";
import UserGameCard from "../components/UserGameCard";
import UserSocialCard from "../components/UserSocialCard";

const User = (props) => {
    return (
        <>
            <div className="UserContainer">

                <Divider1 />
                <article className="UserArticle">
                    <SectionTitle title="Username" />
                    <div className="UserPhoto">
                        <img src="https://simg.nicepng.com/png/small/72-729987_big-image-user-clipart-png.png" alt="..." className="UserPFP" />
                    </div>
                    <Divider1 />
                    <SectionTitle title="Social Media" />
                    <div className="UserSocialArea">
                        <UserSocialCard icon="bi bi-shop-window"
                            username="Username" />
                        <UserSocialCard icon="bi bi-twitter"
                            username="Username" />
                        <UserSocialCard icon="bi bi-discord"
                            username="Username" />
                        <UserSocialCard icon="bi bi-instagram"
                            username="Username" />
                    </div>
                    <Divider1 />
                </article>

                <aside className="UserAside">
                    <SectionTitle title="User's Games" />
                    <UserGameCard gameImg="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1839ec23a43%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1839ec23a43%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        gameTitle="Title"
                        gameDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque ipsam cumque omnis
                        fuga odit repellendus provident soluta laboriosam nihil repudiandae in ullam similique minus
                        debitis maxime vero, eius corporis."
                        gameLink="" />

                    <UserGameCard gameImg="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1839ec23a43%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1839ec23a43%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        gameTitle="Title"
                        gameDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque ipsam cumque omnis
                        fuga odit repellendus provident soluta laboriosam nihil repudiandae in ullam similique minus
                        debitis maxime vero, eius corporis."
                        gameLink="" />

                    <UserGameCard gameImg="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1839ec23a43%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1839ec23a43%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        gameTitle="Title"
                        gameDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque ipsam cumque omnis
                        fuga odit repellendus provident soluta laboriosam nihil repudiandae in ullam similique minus
                        debitis maxime vero, eius corporis."
                        gameLink="" />

                    <UserGameCard gameImg="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1839ec23a43%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1839ec23a43%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        gameTitle="Title"
                        gameDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto neque ipsam cumque omnis
                        fuga odit repellendus provident soluta laboriosam nihil repudiandae in ullam similique minus
                        debitis maxime vero, eius corporis."
                        gameLink="" />

                </aside>

            </div>

        </>
    );
}

export default User;