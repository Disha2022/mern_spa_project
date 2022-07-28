import { useQuery } from "@apollo/client";
import { QUERY_WORKOUTS, QUERY_ME_BASIC } from '../utils/queries';
import React from "react";
import ceo from '../assets/ceo.jpg'
import software from '../assets/software.jpg'
import marketing from '../assets/marketing.jpg'

import Auth from '../utils/auth'

function Homepage() {
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const loggedIn = Auth.loggedIn();

    return (
        <section>
            <h2 className="subheader"> Meet Our Team</h2>
            <div className="grid-container" style={{alignItems:"center"}}>
                <div className="grid-x grid-margin-x small-up-2 medium-up-3" >
                    <div className="cell" style={{width:"30%"}}>
                        <div className="card">
                            <img src={ceo} style={{height:"500px"}}  alt="CEO of Get Fit! Joe."/>
                                <div className="card-section">
                                    <h4>CEO</h4>
                                    <p>The one who started it all, Joe!</p>
                                </div>
                        </div>
                    </div>
                    <div className="cell" style={{width:"30%"}} >
                        <div className="card" >
                            <img src={marketing} style={{height:"500px"}}  alt="Sandra, Markerting Head"/>
                                <div className="card-section">
                                    <h4>Marketing</h4>
                                    <p>Word isn't easy to get out there. Thats why it's Sandra's job to put us on the map!</p>
                                </div>
                        </div>
                    </div>
                    <div className="cell" style={{width:"30%"}}>
                        <div className="card">
                            <img src={software} style={{height:"500px"}} alt="Software Engineering Team"/>
                                <div className="card-section">
                                    <h4>Software Engineer's</h4>
                                    <p>Responsible for the flow and functionality of our website. Their role could NOT be more vital! Checkout their github links at the bottom of this page!</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${loggedIn && 'col-lg-8'}`}>
                {loading ? (
                    <div> Loading ... </div>
                ) : (
                    // delete and uncomment when ready
                    <div></div>
                    // <WorkoutList></WorkoutList>
                )}
            </div>
        </section>
    )
}

export default Homepage