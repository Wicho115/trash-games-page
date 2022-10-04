import React from "react";

const SectionTitle = (props) => {
    const { title } = props;

    return (
        <p className="SectionTitle">{title}</p>
    );
}

export default SectionTitle;