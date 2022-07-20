import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact () {
    const [formState, setFormState] = useState({name: '', email: '', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;
    
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
                setErrorMessage(`A ${e.target.name} is required to contact us.`);
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
        <section>
            <h2 className="fst-italic text-muted">Contact Us!</h2>
            <form className="mb-3 mx-5 border rounded bg-light" onSubmit={handleSubmit}>
                
                <div className="mx-3 mt-2">
                    <label className="form-label" htmlFor="name"> Name: </label>
                    <input className="form-control" onBlur={handleChange} name="name" type='text' placeholder="Name" defaultValue={name}></input>
                </div>
                <div className="mx-3">
                    <label className="form-label" htmlFor="email"> Email: </label>
                    <input className="form-control" onBlur={handleChange} name='email' type='email' placeholder="Email" defaultValue={email}></input>
                </div>
                <div className="mx-3 mb-2">
                    <label className="form-label" htmlFor='message'> Message: </label>
                    <textarea className="form-control" onBlur={handleChange} name='message' rows='5' placeholder='Your message here...' defaultValue={message}></textarea>
                </div>
                {errorMessage && (
                    <div>
                    <p className='error-text'> {errorMessage} </p>
                    </div>
                )}
                <button type="submit" className="btn btn-primary mb-2"> Submit</button>
            </form>
        </section>
    
)}
export default Contact