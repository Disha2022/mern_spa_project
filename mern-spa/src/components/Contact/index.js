import React from "react";

function Contact () {
    return (
        <section>
            <form>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input name="name" type='text' placeholder="Name"></input>
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input name='email' type='email' placeholder="Email"></input>
                </div>
                <div>
                    <label htmlFor='message'> Message: </label>
                    <textarea name='message' rows='5' placeholder='Your message here'></textarea>
                </div>
                <button></button>
            </form>
        </section>
    
)}
export default Contact