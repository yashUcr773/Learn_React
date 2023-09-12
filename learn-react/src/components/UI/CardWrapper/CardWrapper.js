import "./CardWrapper.scss";

function CardWrapper(props) {
    let classes = "card-wrapper " + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default CardWrapper;
