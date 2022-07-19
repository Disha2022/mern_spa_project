import React from "react";

function Login() {
    return (
        <section className="mx-5">
            <form className="card my-3" id="login-form">
                <h3 className="text-muted card-header">Login</h3>
                <div className="my-2 mx-4">
                    <label htmlFor="login-email" className="form-label">Email:</label>
                    <input name="login-email" className="form-control" type="email" placeholder="Email..."></input>
                </div>
                <div className="my-2 mx-4">
                    <label htmlFor="login-password" className="form-label">Password:</label>
                    <input name="login-password" className="form-control" type="password" placeholder="Password..."></input>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary my-2" style={{width: "25%"}}> Login!</button>
                </div>
            </form>
            <form id="signup-form" className="card my-3">
                <h3 className="card-header">Sign-Up</h3>
                <div className="my-2 mx-4">
                    <label htmlFor="signup-email" className="form-label"> Email:</label>
                    <input name="signup-email" className="form-control" type="email" placeholder="Email..."></input>
                </div>
                <div className="my-2 mx-4">
                    <label htmlFor="signup-username" className="form-label"> Username:</label>
                    <input name="signup-username" className="form-control" type="text" placeholder="Username..."></input>
                </div>
                <div className="my-2 mx-4">
                    <label htmlFor="signup-password" className="form-label">Password:</label>
                    <input name="signup-password" className="form-control" type="password" placeholder="Password..."></input>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary my-2" style={{width: "25%"}}> Sign-Up!</button>
                </div>
            </form>
        </section>
    )
};

export default Login