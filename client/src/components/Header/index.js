import React from "react";
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'

function Header() {

    return (
        <header className="bg-light border-bottom">
            <div>
                <Link to='/' className="text-decoration-none ">
                    <h1 className="pt-2 text-muted">
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
                            <Link to='/about' className="nav-item nav-link">
                                About
                            </Link>
                            <Link to='/contact' className="nav-item nav-link">
                                Contact
                            </Link>
                            <a href='/' className="nav-item nav-link" onClick={Auth.logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                        <Link to='/about' className="nav-item nav-link"> About </Link>
                        <Link to='/contact' className="nav-item nav-link"> Contact </Link>
                        <Link to='/login' className="nav-item nav-link"> Login </Link>
                        <Link to='/signup'className="nav-item nav-link"> SignUp </Link>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header