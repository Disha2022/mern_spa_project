import { useQuery } from "@apollo/client";
import { QUERY_WORKOUTS, QUERY_ME_BASIC } from '../utils/queries';
import React from "react";
import carousel1 from '../assets/carousel1.jpg'
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'

import Auth from '../utils/auth'

function Homepage() {
    const { loading, data } = useQuery(QUERY_WORKOUTS);
    const { data: userData } = useQuery(QUERY_ME_BASIC);
    const loggedIn = Auth.loggedIn();

    return (
        <section>
            <h2> Meet Our Team</h2>
            <div class="grid-container">
                <div class="grid-x grid-margin-x small-up-2 medium-up-3">
                    <div class="cell">
                        <div class="card">
                            <img src="assets/img/generic/rectangle-1.jpg">
                                <div class="card-section">
                                    <h4>This is a row of cards.</h4>
                                    <p>This row of cards is embedded in an X-Y Block Grid.</p>
                                </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="card">
                            <img src="assets/img/generic/rectangle-1.jpg">
                                <div class="card-section">
                                    <h4>This is a card.</h4>
                                    <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="card">
                            <img src="assets/img/generic/rectangle-1.jpg">
                                <div class="card-section">
                                    <h4>This is a card.</h4>
                                    <p>It has an easy to override visual style, and is appropriately subdued.</p>
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