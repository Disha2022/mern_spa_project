import React from "react";
import photo from "../../assets/training.jpg"

function About() {
    return (
        <section id="about">
            <h1 className="h1 text-muted"> About Us!</h1>
            <div>
                <img style = {{heigh: "500px", width: "500px"}}class="img-fluid img-thumbnail rounded" alt="about" src={photo} />
                <p> Lorem Ipsem </p>
            </div>
        </section>
    )
};

export default About