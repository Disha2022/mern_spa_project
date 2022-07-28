import React from "react";
import photo from "../assets/training.jpg"

function About() {
    return (
        <section id="about">
            <h1 className="subheader"> About Us!</h1>
            <div>
                <img style = {{heigh: "500px", width: "500px"}}className="thumbnail" alt="about" src={photo} />
                <p style = {{display: "block"}}> “Get Fit!” is an interactive website where users can catalog their workouts as well as their fitness goals. An easy and effective way to keep track and maintain their progress on their fitness journey in becoming a better you </p>
            </div>
        </section>
    )
};

export default About