import React from "react";
import ReactDOM from "react-dom";

const RandomComponent = (props) => {
    return <div className="randomComponent"></div>;
};

const PortalTest = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(
                <RandomComponent></RandomComponent>,
                document.getElementById("portal-root")
            )}
        </div>
    );
};

export default PortalTest;
