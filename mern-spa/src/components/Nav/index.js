import React from "react";

function Nav() {
    return (
        <header className="bg-light border-bottom">
            <h1> 
                <a href="/" className="text-decoration-none text-muted">Workout App </a>
            </h1>
            <ul className="nav">
                <li className="nav-item nav-link">
                    <a href="#about" className="text-decoration-none text-muted"> About </a>
                </li>
                <li className="nav-item nav-link">
                    <a href="#contact" className="text-decoration-none text-muted"> Contact </a>
                </li>
                <li className="nav-item nav-link" >
                    <a href="#login" className="text-decoration-none text-muted"> Login </a>
                </li>
            </ul>
        </header>
    )
};

export default Nav