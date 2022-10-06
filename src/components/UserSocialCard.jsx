import React from "react";

const UserSocialCard = (props) => {
    const { icon, username } = props;

    return (
        <div className="UserSocialCard">
            <i className={icon} /><p>{"@" + username}</p>
        </div>
    );
}

export default UserSocialCard;