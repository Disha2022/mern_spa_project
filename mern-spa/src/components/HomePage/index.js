import React from "react";
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
import bootstrap from 'bootstrap'

function Homepage() {
    return (
        <section>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div>
                <h2> Meet Our Team </h2>

            </div>
        </section>
    )
}

export default Homepage