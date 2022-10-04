import React from "react";

const Footer = (props) => {
    return (
        <footer className="text-center footer-style" style={{ backgroundColor: 'rgb(68, 97, 118)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col" style={{ color: 'rgb(161, 239, 140)' }}>
                        <p><img src="https://media.discordapp.net/attachments/945876666276773970/1025419913462030376/Logo.png" alt="" width={80} height={40} style={{ marginTop: '4px' }} /></p>
                        <p>
                            © 2022 <br />
                            TrashGames
                        </p>
                    </div>
                    <div className="col-md-4 footer-col" style={{ color: 'rgb(161, 239, 140)' }}>
                        <h3>Mis redes</h3>
                        <ul className="list-inline">
                            <li>
                                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook" /></a>
                            </li>
                            <li>
                                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus" /></a>
                            </li>
                            <li>
                                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter" /></a>
                            </li>
                            <li>
                                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin" /></a>
                            </li>
                            <li>
                                <a target="_blank" href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-dribbble" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-col" style={{ color: 'rgb(161, 239, 140)' }}>
                        <h3>Trabajo FreeLancer</h3>
                        <p>Tengo más de X años de experiencia en maquetación web y me apasiona lo que hago!</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;