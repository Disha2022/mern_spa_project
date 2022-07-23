import React, {useState} from "react";
import { validateEmail } from "../utils/helpers";

//whoever works on backend, uncommit or update these values
//import {useMutation} from '@apollo/client';
//import {LOGIN_USER} from '../utils/mutations';


function Login (props) {
    //set for data validation of the form
    const [formState, setFormState] = useState({name: '', email: '', message:''});
    //set for error validating on form
    const [errorMessage, setErrorMessage] = useState('');

    //set for login validation/ throwing an error if one occurs
    const [login, { error }] = useMutation(LOGIN_USER);

    //updates state based on form input changes
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

    //submitting form function
    const handleSubmit = async (e) => {
        e.preventDefault();

        // try/catch statement
        try {
            const {data} = await login({
                variables: {...formState}
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }
    }

    //clearing form values
    setFormState({
        email:'',
        password: '',
    });

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
        </section>
    )
};

export default Login