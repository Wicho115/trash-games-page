import React from "react";

const Nav = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg TrashNavBar">
                <div className="container-fluid">
                    <a href="{{url_for('homepage')}}" className="nav-link">
                        <img className="NavBarLogo" src="https://cdn.discordapp.com/attachments/945882029592035328/1017568542108954634/Logo.png" alt="Logo" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navbar-light">
                            <a className="nav-link NavButton" href="/">Home</a>
                            <a className="nav-link NavButton" href="/about">About Us</a>
                            <a className="nav-link NavButton" href="/games">Games</a>
                            <a className="nav-link NavButton" href="user.html">User</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;