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