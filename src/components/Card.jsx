
const Card = (props) => {
    const {color, length} = props;

    return (
        <div className={color}></div>
    );
}

export default Card;