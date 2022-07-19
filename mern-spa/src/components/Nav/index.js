import React from "react";

function Nav() {
    return (
        <header>
            <h1> 
                <a href="/">Workout App </a>
            </h1>
            <ul>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#contact"> Contact </a>
                </li>
                <li>
                    <a href="#login"> Login </a>
                </li>
            </ul>
        </header>
    )
};

export default Nav