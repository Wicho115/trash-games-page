import React from "react";

const Footer = (props) => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-snapchat" /></a>
                    <a href="#"><i className="bi bi-twitter" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/">Home</a></li>
                    <li className="list-inline-item"><a href="/about">About</a></li>
                    <li className="list-inline-item"><a href="/games">Games</a></li>
                    <li className="list-inline-item"><a href="#">User</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p className="copyright">TrashGames © 2022</p>
            </footer>
        </div>
    );
}

export default Footer;