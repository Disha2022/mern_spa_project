import React, { useState } from "react";
import Donate from "../Donate";

function Footer() {
    const [isShown, setIsShown] = useState(false);
    const handleClick = async event => {
        setIsShown(true);
    };


    return (
        <footer className='border-top'>
            <p style={{ display: "inline" }} className="fst-italic"> Thank you for visiting! Consider supporting us by donating: </p>
            <button onClick={handleClick} className="my-2 btn btn-success fst-italic">Donate Now!</button>
            {isShown && (
                <Donate />
            )}
        </footer>
    )
};

export default Footer