import React from "react";

function Nav(props) {
    const {
        setLoginSelected,
        loginSelected,
        setContactSelcted,
        contactSelected,
    } = props;

    function renderLogin () {
        setLoginSelected(true)
        setContactSelcted(false)
    }

    function renderContact () {
        setLoginSelected(false)
        setContactSelcted(true)
    }

    return (
        <header className="bg-light border-bottom">
            <h1> 
                <a href="/" className="text-decoration-none text-muted">Workout App </a>
            </h1>
            <ul className="nav">
                <li className="nav-item nav-link">
                    <a href="#about" className="text-decoration-none text-muted" onClick={() => setLoginSelected(false)}> About </a>
                </li>
                <li className="nav-item nav-link" >
                    <span onClick={() => renderContact()} className="text-decoration-none text-muted"> Contact </span>
                </li>
                <li className="nav-item nav-link" >
                    <a onClick={() => renderLogin()} href="#login" className="text-decoration-none text-muted"> Login </a>
                </li>
            </ul>
        </header>
    )
};

export default Nav