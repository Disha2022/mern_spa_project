import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

function Login() {

    const [formState, setFormState] = useState({name: '', email: '', message:''});
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`A ${e.target.name} is required to sign-up.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section className="mx-5 row">
            <form className="card my-3 col-5" id="login-form" onSubmit={handleSubmit}>
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
            <form className="col-2"></form>
            <form id="signup-form" className="card my-3 col-5" onSubmit={handleSubmit}>
                <h3 className="card-header">Sign-Up</h3>
                <div className="my-2 mx-4">
                    <label htmlFor="email" className="form-label"> Email:</label>
                    <input name="email" onBlur={handleChange} className="form-control" type="email" placeholder="Email..."></input>
                </div>
                <div className="my-2 mx-4">
                    <label htmlFor="username" className="form-label"> Username:</label>
                    <input name="username" onBlur={handleChange} className="form-control" type="text" placeholder="Username..."></input>
                </div>
                <div className="my-2 mx-4">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input name="password" onBlur={handleChange} className="form-control" type="password" placeholder="Password..."></input>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary my-2" style={{width: "25%"}}> Sign-Up!</button>
                </div>
                {errorMessage && (
                    <div>
                        <p> {errorMessage} </p>
                    </div>
                )}
            </form>
        </section>
    )
};

export default Login