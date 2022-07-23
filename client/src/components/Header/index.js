import React from "react";
import { Link } from 'react-router-dom'

function Header() {

    return (
        <header className="bg-light border-bottom">
            <div>
                <Link to='/'>
                    <h1 className="pt-2 text-decoration-none text-muted">
                        Workout Tracker
                    </h1>
                </Link>

                <ul className="nav">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to='/profile'>
                                <li className="nav-item nav-link">
                                    Your Profile
                                </li>
                            </Link>
                            <Link to='/about'>
                                About
                            </Link>
                            <Link to='/contact'>
                                Contact
                            </Link>
                            <a href='/' className="nav-item nav-link">
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                        <Link to='/about'> About </Link>
                        <Link to='/contact'> Contact </Link>
                        <Link to='/login'> Login </Link>
                        <Link to='/signup'> SignUp</Link>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header