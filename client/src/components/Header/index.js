import React from "react";
import { Link } from 'react-router-dom'
import Auth from '../../utils/auth'

function Header() {

    return (
        <header style={{ borderBottom: "1px dashed grey" }} >
            <div>
                <Link to='/'>
                    <h1>
                        Get Fit!
                    </h1>
                </Link>

                <ul className="menu align-center">
                    {Auth.loggedIn() ? (
                        <>
                            <li>
                                <Link to='/profile'>
                                    Your Profile
                                </Link>
                            </li>
                            <li>
                                <Link to='/about' className="">
                                    About
                                </Link>
                            </li>
                            <li>
                                <a href='/' className="" onClick={Auth.logout}>
                                    Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to='/about' className=""> About </Link>
                            </li>
                            <li>
                                <Link to='/login' className=""> Login </Link>
                            </li>
                            <li>
                                <Link to='/signup' className=""> SignUp </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header