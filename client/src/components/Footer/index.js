import { useState } from "react";
import Donate from "../Donate";
import github from "../../assets/GitHub-logo.png"

function Footer() {
    const [isShown, setIsShown] = useState(false);
    
    const handleClick = async event => {
        setIsShown(true);
    };

    return (
        <footer style={{ borderTop: "1px solid grey" }}  >
            <p className="fst-italic"> Thank you for visiting! Consider supporting us by donating: </p>
            
            <button style={{marginTop: "9px" }} onClick={handleClick} className="button success">Donate Now!</button>
            {isShown && (
                <Donate />
            )}
            <a href="https://github.com/Disha2022">
                <img style={{width: "50px"}} src={github} alt="Disha's Github Link"></img>
            </a>
            <a href="https://github.com/Brandon-perez19">
                <img style={{width: "50px"}} src={github} alt="Brandon's Github Link"></img>
            </a>
            <a href="https://github.com/JeffersonB1">
                <img style={{width: "50px"}} src={github} alt="Jefferson's Github Link"></img>
            </a>
            <a href="https://github.com/DeanK24">
                <img style={{width: "50px"}} src={github} alt="Dean's Github Link"></img>
            </a>
            <a href="">
                <img style={{width: "50px"}} src={github} alt="Christian's Github Link"></img>
            </a>
        </footer>
    )
};

export default Footer