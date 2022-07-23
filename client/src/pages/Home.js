import React from "react";
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'

function Homepage() {
    return (
        <section>
            <div>
                <h2> Meet Our Team </h2>
            </div>
            <div className={`${loggedIn && 'col-lg-8'}`}>
                {loading ? (
                    <div> Loading ... </div>
                ) : (
                    <WorkoutList></WorkoutList>
                )}
            </div>
        </section>
    )
}

export default Homepage