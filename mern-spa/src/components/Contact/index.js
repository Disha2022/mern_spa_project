import React from "react";

function Contact () {
    return (
        <section>
            <h2 className="fst-italic text-muted">Contact Us!</h2>
            <form className="mb-3 mx-5 border rounded bg-light">
                
                <div className="mx-3 mt-2">
                    <label className="form-label" htmlFor="name"> Name: </label>
                    <input className="form-control" name="name" type='text' placeholder="Name"></input>
                </div>
                <div className="mx-3">
                    <label className="form-label" htmlFor="email"> Email: </label>
                    <input className="form-control" name='email' type='email' placeholder="Email"></input>
                </div>
                <div className="mx-3 mb-2">
                    <label className="form-label" htmlFor='message'> Message: </label>
                    <textarea className="form-control" name='message' rows='5' placeholder='Your message here...'></textarea>
                </div>
                <button type="submit" className="btn btn-primary mb-2"> Submit</button>
            </form>
        </section>
    
)}
export default Contact