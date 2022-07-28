import React, { useState } from "react";
import Auth from '../utils/auth'

//whoever works on backend, uncommit or update these values
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';


const Login = (props) => {
    //set for data validation of the form
    const [formState, setFormState] = useState({ email: '', password: '' });

    //set for login validation/ throwing an error if one occurs
    const [login, { error }] = useMutation(LOGIN_USER);

    //updates state based on form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    //submitting form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // try/catch statement 
        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }
        //clearing form values
        setFormState({
            email: '',
            password: '',
        });
    }

    return (
        <section className="">
            <form className="card" id="login-form" onSubmit={handleSubmit}>
                <h3 className="subheader card-divider">Login</h3>
                <div className="card-section">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input name="email" onChange={handleChange} value={formState.email} className="form-control" type="email" placeholder="Email..."></input>
                </div>
                <div className="card-section">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input name="password" onChange={handleChange} value={formState.password} className="form-control" type="password" placeholder="Password..."></input>
                </div>
                <div className="card-section">
                    <button type="submit" className="button secondary" style={{ width: "25%" }}> Login!</button>
                </div>
            </form>

            {/* if there is an error, then display this div */}
            {error && <div> Login Failed</div>}
        </section>
    )
};

export default Login